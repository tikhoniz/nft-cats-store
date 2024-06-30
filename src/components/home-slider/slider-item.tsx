import Link from 'next/link'
import cls from './home-slider.module.css'

interface CatCardProps {
  cat?: any
}

export const SliderItem = ({ cat }: CatCardProps) => {
  const { id, image, name, short_story, nft_link } = cat
  return (
    <>
      <Link href={`/cats/${id}`}>
        <div
          className={cls.catCard}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <span className={cls.cover} />

          <div className={cls.content}>
            <h3 className={cls.title} data-swiper-parallax="-200">
              {name}
            </h3>
            <p className={cls.caption} data-swiper-parallax="-100">
              {short_story}
            </p>
          </div>
        </div>
      </Link>
      <Link href={nft_link || '/'} rel="noopener noreferrer" target="_blank">
        <button className={cls.moreBtn}>BUY</button>
      </Link>
    </>
  )
}
