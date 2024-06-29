import { saveCat } from '@/lib/cats'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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

  const response: string = (await saveCat(cat)) || ''

  if (response === 'error') {
    throw new Error()
  }

  revalidatePath('/', 'page')
  redirect('/admin')
}
