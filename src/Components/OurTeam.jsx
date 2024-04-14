import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../App.css'
const OurTeam = () => {
  return (
    // <div className='mt-10' style={{height:"55vh"}}>
    //     <h1 className='font-Heading text-6xl text-center pb-16 '>Our Team</h1>
    //   <Swiper
    //     slidesPerView={4}
    //     spaceBetween={30}
    //     autoplay={{
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       }}

    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Autoplay,Pagination,Navigation]}
    //     className="mySwiper h-3/4 pt-5 mx-24 w-3/4"
    //   >
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='h-full border border-solid-black rounded-2xl p-2'>
    //         <div  className="h-full w-full flex justify-center items-end rounded-2xl bg-[url('https://th.bing.com/th/id/OIP.3efuLjtRU788Imt_qD4f0QHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7')] bg-no-repeat bg-cover">
    //             <div className='px-4 py-2 relative bottom-3 swiperSlide_bg rounded-xl'>
    //                 <h4 className=' text-center font-SubHeading font-medium text-xl'>Lorem ipsum dolor.</h4>
    //                 <p className='text-center font-SubHeading font-normal text-xs'>Lorem ipsum dolor sit amet.</p>
    //             </div>
    //         </div>
    //     </SwiperSlide>
        
    //   </Swiper>
    // </div>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
   
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo1"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo2"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="photo3"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo4"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo5"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
            <div>
                <img class="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="photo6"/>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurTeam