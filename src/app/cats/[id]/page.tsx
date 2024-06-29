import CatDetails from '@/components/cat/cat-details/cat-details'

export const metadata = {
  title: 'Cat details',
  description: 'Photos, history',
}

const CatDetailsPage = () => {
  return (
    <main className="page">
      <CatDetails />
    </main>
  )
}

export default CatDetailsPage
