import Link from 'next/link'
import cls from './home-slider.module.css'

interface CatCardProps {
  cat?: any
}

export const SliderItem = ({ cat }: CatCardProps) => {
  return (
    <>
      <Link href={`/cats/${cat.id}`}>
        <div
          className={cls.catCard}
          style={{
            backgroundImage: `url(https://nft-cat-images.s3.us-west-1.amazonaws.com/${cat.image})`,
          }}
        >
          <span className={cls.cover} />

          <div className={cls.content}>
            <h3 className={cls.title} data-swiper-parallax="-200">
              {cat.name}
            </h3>
            <p className={cls.caption} data-swiper-parallax="-100">
              {cat.short_story}
            </p>
          </div>
        </div>
      </Link>
      <Link
        href={cat.nft_link || '/'}
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className={cls.moreBtn}>BUY</button>
      </Link>
    </>
  )
}
