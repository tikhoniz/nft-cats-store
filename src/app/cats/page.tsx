import { fetchCats } from '@/actions/cats-actions'
import { Cats } from '@/components/cats/cats'
import { Cat } from '@/types/cats'
import { notFound } from 'next/navigation'

const CatsPage = async () => {
  const cats: Cat[] = await fetchCats()

  if (!cats) {
    notFound()
  }

  return (
    <main>
      <Cats cats={cats} />
    </main>
  )
}

export default CatsPage
