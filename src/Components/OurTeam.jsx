import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../App.css'
const OurTeam = () => {
  return (
    <div className='mt-10' style={{height:"55vh"}}>
        <h1 className='font-Heading text-6xl text-center pb-16 '>Our Team</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper h-3/4 pt-5 mx-24 w-3/4"
      >
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
            <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
                <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
                    <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
                    <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default OurTeam