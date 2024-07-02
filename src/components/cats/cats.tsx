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
  const { image, name, short_story, nft_link, id } = item
  return (
    <div className={cls.CatItem}>
      <Link href={`/cats/${item.id}`}>
        <Image
          src={image}
          alt={item.name}
          width="0"
          height="0"
          sizes="100vw"
          className={cls.image}
        />
      </Link>
      <div className={cls.content}>
        <h3 className={cls.name}>{name}</h3>
        <p className={cls.story}>{short_story}</p>
        <div className={cls.actions}>
          <Link
            href={nft_link}
            rel="noopener noreferrer"
            target="_blank"
            className={classNames(cls.button, {}, [className, cls.buyBtn])}
          >
            Buy
          </Link>
          <Link
            href={`/cats/${id}`}
            className={classNames(cls.button, {}, [className, cls.detailsBtn])}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Cats = ({ cats }: { cats: Cat[] }) => {
  return (
    <section className={cls.Cats}>
      {cats.map((cat) => (
        <CatItem key={cat.id} item={cat} />
      ))}
    </section>
  )
}
