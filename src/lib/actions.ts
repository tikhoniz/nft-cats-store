'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { saveCat } from './cats'

function isInvalidText(text: string | undefined) {
  return !text || text.trim() === ''
}

export async function createCat(formData: FormData) {
  const cat = {
    name: formData.get('name')?.toString(),
    summary: formData.get('summary')?.toString(),
    history: formData.get('history')?.toString(),
    image: formData.get('image'),
  }

  if (
    isInvalidText(cat.summary) ||
    isInvalidText(cat.name) ||
    isInvalidText(cat.history) ||
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
