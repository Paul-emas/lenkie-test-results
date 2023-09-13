import React from 'react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

type SliderProps = {
  swiperRef?: any;
  children: React.ReactNode;
} & SwiperOptions;

const Slider = ({ swiperRef, children, ...props }: SliderProps) => {
  return (
    <Swiper
      id="activity-card"
      onSwiper={swiper => {
        swiperRef ? (swiperRef.current = swiper) : null;
      }}
      modules={[Navigation, Autoplay, Scrollbar, A11y, Pagination]}
      scrollbar={{ draggable: true }}
      className="relative flex h-full w-full"
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
