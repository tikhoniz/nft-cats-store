'use client'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import cls from './home-slider.module.css'

interface HomeSliderProps {
  className?: string
  cats?: any[]
}

interface CatCardProps {
  className?: string
  cat?: any
}

export const CatCard = ({ cat, className }: CatCardProps) => {
  return (
    <div className={cls.catCard}>
      <span className={cls.cover} />
      <Image
        // priority
        fill
        sizes="100%"
        src={`https://nft-cat-images.s3.us-west-1.amazonaws.com/${cat.image}`}
        alt={cat.name}
      />
      <div className={cls.content}>
        <h3 className={cls.title} data-swiper-parallax="-200">
          {cat.name}
        </h3>
        <p className={cls.caption} data-swiper-parallax="-100">
          {cat.summary}
        </p>
      </div>
      <button className={cls.moreBtn}>BUY</button>
    </div>
  )
}

export const HomeSlider = ({ cats }: HomeSliderProps) => {
  return (
    <div className={cls.container}>
      <Swiper
        init={false}
        speed={2000}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        parallax={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          // disableOnInteraction: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={cls.swiperContainer}
      >
        {cats?.map((it) => (
          <SwiperSlide key={it.id} className={cls.swiperSlide}>
            <CatCard cat={it} />
          </SwiperSlide>
        ))}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  )
}
