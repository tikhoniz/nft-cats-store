import { fetchCat } from '@/actions/cats-actions'
import CatDetails from '@/components/cat/cat-details/cat-details'
import { Cat } from '@/types/cats'
import { notFound } from 'next/navigation'

// Metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const cat: Cat = await fetchCat(params.id)
  if (!cat) {
    notFound()
  }
  return { title: cat.name, description: cat.short_story }
}

const CatDetailsPage = async ({ params }: { params: { id: string } }) => {
  const cat = await fetchCat(params.id)

  return (
    <main className="page">
      <CatDetails cat={cat} />
    </main>
  )
}

export default CatDetailsPage
