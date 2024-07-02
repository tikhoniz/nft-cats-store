import { Cat } from '@/types/cats'
import Link from 'next/link'
import { CatDetailsSlider } from '../cat-details-slider/cat-details-slider'
import cls from './cat-details.module.css'
import { NFTImage } from './nft-image'

const CatDetails = async ({ cat }: { cat: Cat }) => {
  return (
    <section className={cls.details}>
      <div className={cls.portrait}>
        <NFTImage image={cat?.image} link={cat?.nft_link} name={cat?.name} />

        <div className={cls.description}>
          <h1 className={cls.name}>{cat?.name}</h1>
          <p className={cls.history}>{cat?.history}</p>
          <Link
            href={cat?.nft_link || '/'}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className={cls.buyBtn}>Buy now</button>
          </Link>
        </div>
      </div>
      <CatDetailsSlider images={cat?.images} />
    </section>
  )
}

export default CatDetails
