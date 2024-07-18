'use client';

import { classNames } from '@/lib/classNames/classNames';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './cat-details-slider.module.css';

interface CatDetailsSliderProps {
  images: string[] | undefined;
}

export const CatDetailsSlider = ({ images }: CatDetailsSliderProps) => {
  return (
    <div className={cls.container}>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={25}
        grabCursor={true}
        freeMode={false}
        loop={true}
        mousewheel={false}
        keyboard={{ enabled: true }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        // If we need pagination
        pagination={{
          el: '.pagination-cat-details',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        navigation={{
          nextEl: '.cat-details-button-next',
          prevEl: '.cat-details-button-prev',
        }}
        // Responsive breakpoints
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 4,
            centeredSlides: false,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 5,
            centeredSlides: false,
          },

          // when window width is >= 1500px
          1500: {
            slidesPerView: 6,
            centeredSlides: false,
          },
          1800: {
            slidesPerView: 7,
            centeredSlides: false,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className={cls.catSwiperContainer}
      >
        {images?.map((it) => (
          <SwiperSlide key={it} className={cls.swiperSlide}>
            <Image
              src={it}
              alt={''}
              width="0"
              height="0"
              sizes="100vw"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cls.controls}>
        <div className="cat-details-button-next">&#8594;</div>
        <div className="cat-details-button-prev">&#8592;</div>
        <div
          className={classNames('pagination-cat-details', {}, [
            cls.swiperPagination,
          ])}
        ></div>
      </div>
    </div>
  );
};
