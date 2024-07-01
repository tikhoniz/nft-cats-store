'use client'

import { useFormStatus } from 'react-dom'
import Spinner from '../spinner'

export default function CatsFormSubmit() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? <Spinner loading={pending} /> : 'Create cat'}
    </button>
  )
}
