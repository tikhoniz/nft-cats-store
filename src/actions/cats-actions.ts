import cloudinary from '@/lib/config/cloudinary';
import { notFound, redirect } from 'next/navigation';

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

function isInvalidText(text: string | undefined) {
  return !text || text.trim() === '';
}

export async function fetchCat(id: string) {
  'use server';

  const response = await fetch(`${apiDomain}/cats/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export async function fetchCats() {
  'use server';

  const response = await fetch(`${apiDomain}/cats`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

export async function createCat(formData: FormData) {
  'use server';

  const cat = {
    name: formData.get('name')?.toString(),
    history: formData.get('history')?.toString(),
    short_story: formData.get('short_story')?.toString(),
    nft_link: formData.get('nft_link')?.toString(),
    image: formData.get('image'),
    images: formData.getAll('images'),
  };

  if (
    isInvalidText(cat.name) ||
    isInvalidText(cat.history) ||
    isInvalidText(cat.short_story) ||
    isInvalidText(cat.nft_link) ||
    !cat.image
  ) {
    throw new Error();
  }

  try {
    // @ts-ignore
    const imageBuffer = await cat.image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert the image data to base64
    const imageBase64 = imageData.toString('base64');

    // Upload the one image data as a base64 string to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'nft-cats/nft',
      },
    );
    cat.image = result.secure_url;

    // Upload the one image data as a base64 string to Cloudinary
    // Access the uploaded files from the form data
    const imageUploadPromises = [];

    for (const image of cat.images) {
      // Assuming image is a File object, extract the file data
      // @ts-ignore
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString('base64');

      // Upload the image data as a base64 string to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: `nft-cats/${cat.name}`,
          // filename_override: 'test.png',
        },
      );

      imageUploadPromises.push(result.secure_url);
    }

    // Wait for all image uploads to complete
    const uploadedImages = await Promise.all(imageUploadPromises);

    // Add the uploaded images to the Cat object
    cat.images = uploadedImages;
  } catch (error) {
    console.log('error', error);
  }

  const response = await fetch(`${apiDomain}/cats/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ catData: cat }),
  });

  if (!response.ok) {
    throw Error('Failed to create a cat');
  }

  redirect('/admin');
}
