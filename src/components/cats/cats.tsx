import { fetchCats } from '@/actions/cats-actions'
import { classNames } from '@/lib/classNames/classNames'
import { Cat } from '@/types/cats'
import Image from 'next/image'
import Link from 'next/link'
import cls from './cats.module.css'

interface CatItemProps {
  item: Cat
  className?: string
}

const CatItem = ({ item, className }: CatItemProps) => {
  return (
    <div className={cls.CatItem}>
      <Link href={`/cats/${item.id}`}>
        <Image
          src={`https://nft-cat-images.s3.us-west-1.amazonaws.com/${item.image}`}
          alt={item.name}
          width="0"
          height="0"
          sizes="100vw"
          className={cls.image}
        />
      </Link>
      <div className={cls.content}>
        <h3 className={cls.name}>{item.name}</h3>
        <p className={cls.story}>{item.short_story}</p>
        <div className={cls.actions}>
          <Link
            href={item.nft_link}
            rel="noopener noreferrer"
            target="_blank"
            className={classNames(cls.button, {}, [className, cls.buyBtn])}
          >
            Buy
          </Link>
          <Link
            href={`/cats/${item.id}`}
            className={classNames(cls.button, {}, [className, cls.detailsBtn])}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

const Cats = async () => {
  const cats: Cat[] = await fetchCats()

  return (
    <section className={cls.Cats}>
      {cats && cats.map((cat) => <CatItem key={cat.id} item={cat} />)}
    </section>
  )
}

export default Cats
