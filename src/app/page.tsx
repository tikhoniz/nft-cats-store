import { HomeSlider } from '@/components/home-slider/home-slider'
import Image from 'next/image'
import cls from './page.module.css'
import { fetchCats } from '@/actions/cats-actions'

export default async function Home() {
  const cats = await fetchCats()

  return (
    <main>
      <div className={cls.wrapper}>
        <div className={cls.inner}>
          <Image
            src={'/collection_of_cats.jpg'}
            alt="Сollection of cats"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className={cls.heroImage}
          />
        </div>
      </div>
      <section className={cls.section}>
        <h2>Our mission</h2>
        <p>
          Discover a collection of heartwarming NFTs showcasing the resilience
          of remarkable cats. From overcoming adversity to embracing second
          chances, each artwork captures the indomitable spirit of these feline
          companions. By acquiring these NFTs, you not only add captivating art
          to your collection but also support initiatives to aid animals in
          need. Join us in celebrating the strength and resilience of these
          extraordinary beings through digital storytelling
        </p>
      </section>

      <HomeSlider cats={cats} />
    </main>
  )
}
