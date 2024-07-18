'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './cats-slider.module.css';

export const CatsSlider = () => {
  const images: string[] = [
    'alyska',
    'blue',
    'busia',
    'dodge',
    'elon',
    'fera',
    'fruit',
    'lexus',
    'misa',
    'pirate',
    'sherkhan',
    'uma',
    'yan',
  ];
  return (
    <Swiper
      init={true}
      speed={4000}
      loop={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      className={cls.container}
    >
      {images.map((it) => (
        <SwiperSlide key={it} className={cls.swiperSlide}>
          <Image
            src={`/images/${it}.webp`}
            alt={''}
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
