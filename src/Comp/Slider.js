import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';



export default function Slider() {
  return (
    <div className=' py-4 border-bottom border-2 '>
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide ><img className='box2'  src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1920&q=75'/></SwiperSlide>
      <SwiperSlide><img className='box2' src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=1920&q=75'/></SwiperSlide>
      <SwiperSlide><img className='box2' src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=1920&q=75'/></SwiperSlide>
      <SwiperSlide><img className='box2' src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=1920&q=75'/></SwiperSlide>
      <SwiperSlide><img className='box2' src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=1920&q=75'/></SwiperSlide>
    </Swiper>
    </div>
  )
}
