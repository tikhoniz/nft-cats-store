import cloudinary from '@/lib/config/cloudinary'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import slugify from 'slugify'
import { v4 as uuid } from 'uuid'
import xss from 'xss'

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

function isInvalidText(text: string | undefined) {
  return !text || text.trim() === ''
}

export async function fetchCats() {
  try {
    const res = await fetch(`${apiDomain}/cats`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchCat(id: string) {
  try {
    const res = await fetch(`${apiDomain}/cats/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    return null
  }
}

export async function createCat(formData: FormData) {
  'use server'

  const cat = {
    name: formData.get('name')?.toString(),
    history: formData.get('history')?.toString(),
    short_story: formData.get('short_story')?.toString(),
    nft_link: formData.get('nft_link')?.toString(),
    image: formData.get('image'),
    images: formData.getAll('images'),
  }

  if (
    isInvalidText(cat.name) ||
    isInvalidText(cat.history) ||
    isInvalidText(cat.short_story) ||
    isInvalidText(cat.nft_link) ||
    !cat.image
  ) {
    throw new Error()
  }

  try {
    // @ts-ignore
    const imageBuffer = await cat.image.arrayBuffer()
    const imageArray = Array.from(new Uint8Array(imageBuffer))
    const imageData = Buffer.from(imageArray)

    // Convert the image data to base64
    const imageBase64 = imageData.toString('base64')

    // Upload the one image data as a base64 string to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'nft-cats/nft',
      },
    )
    cat.image = result.secure_url

    // Upload the one image data as a base64 string to Cloudinary
    // Access the uploaded files from the form data
    const imageUploadPromises = []

    for (const image of cat.images) {
      // Assuming image is a File object, extract the file data
      // @ts-ignore
      const imageBuffer = await image.arrayBuffer()
      const imageArray = Array.from(new Uint8Array(imageBuffer))
      const imageData = Buffer.from(imageArray)

      // Convert the image data to base64
      const imageBase64 = imageData.toString('base64')

      // Upload the image data as a base64 string to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: `nft-cats/${cat.name}`,
        },
      )

      imageUploadPromises.push(result.secure_url)
    }

    // Wait for all image uploads to complete
    const uploadedImages = await Promise.all(imageUploadPromises)

    // Add the uploaded images to the Cat object
    cat.images = uploadedImages

    const res = await fetch(`${apiDomain}/cats/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ catData: cat }),
    })
    if (!res.ok) {
      throw Error('Failed to create a cat')
    }

    revalidatePath('/', 'page')
    redirect('/admin')
  } catch (error) {
    return null
  }
}

export async function saveCat(cat: any) {
  try {
    const unique = uuid().slice(0, 16)
    cat.slug = slugify(`${cat.name} ${unique}`, {
      lower: true,
      replacement: '_',
    })

    cat.history = xss(cat.history)
    cat.history = xss(cat.short_story)

    const extension = cat.image.name.split('.').pop()
    const fileName = `${cat.slug}.${extension}`

    const bufferedImage = await cat.image.arrayBuffer()

    // s3.putObject({
    //   Bucket: 'nft-cat-images',
    //   Key: fileName,
    //   Body: Buffer.from(bufferedImage),
    //   ContentType: cat.image.type,
    // })

    // cat.image = fileName

    // await connectDB()
    // await CatModel.create(cat)
  } catch (error) {
    return 'error'
  }
}
