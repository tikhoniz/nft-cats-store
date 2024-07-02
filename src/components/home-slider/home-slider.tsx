'use client'

import { Cat } from '@/types/cats'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import cls from './home-slider.module.css'
import { SliderItem } from './slider-item'

export const HomeSlider = ({ cats }: { cats: Cat[] }) => {
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
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={cls.homeSwiperContainer}
      >
        {cats?.map((it) => (
          <SwiperSlide key={it.id} className={cls.swiperSlide}>
            <SliderItem cat={it} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
