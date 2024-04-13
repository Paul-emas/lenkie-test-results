'use client';
import React, { Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';
import MarshmelloCard from './cards/marshmello-card';
import Slider from './slider';
import { BannerSkeleton } from './loaders/skeleton';

const MainSlider = () => {
  return (
    <div className="w-full md:col-span-2">
      <Slider
        slidesPerView={1}
        spaceBetween={28}
        autoplay
        breakpoints={{
          640: {
            slidesPerView: 1.4
          },
          768: {
            slidesPerView: 1.9
          },
          1024: {
            slidesPerView: 2.3
          }
        }}
      >
        <SwiperSlide>
          <Suspense fallback={<BannerSkeleton />}>
            <MarshmelloCard />
          </Suspense>
        </SwiperSlide>
        {/* <SwiperSlide>
        <RbCard />
      </SwiperSlide>
      <SwiperSlide>
        <JobBellionCard />
      </SwiperSlide> */}
      </Slider>
    </div>
  );
};

export default MainSlider;
