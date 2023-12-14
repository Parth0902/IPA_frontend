
import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-gray-100 flex flex-col gap-20 '>
      <h1 className='text-center font-Heading text-5xl py-10'>About Us</h1>
      <div className='flex justify-center gap-16 flex-wrap pb-20'>
        <div className='flex-1 flex justify-end'>
          <div className=' bg-gray-400' style={{width:"428px",height:"420px"}}> 
            <img src="https://ipafootcare.org/IPA-ADMIN/about/about.png" style={{width:"428px"}} className=" relative bottom-4 right-4" alt="" />
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-10 justify-start'>
          <p className='w-2/3 font-SubHeading text-xl text-justify leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quae tenetur officiis, fugit quo in praesentium quia, harum ipsam ducimus voluptates dolor laudantium voluptatibus rerum eligendi? Corrupti sed totam nostrum illo necessitatibus nemo adipisci assumenda, distinctio accusantium molestiae fugiat voluptatem eius ducimus cupiditate ea. Blanditiis aliquam nam aliquid rem dicta!</p>
          <p className='w-2/3 font-SubHeading text-xl text-justify leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quae tenetur officiis, fugit quo in praesentium quia, harum ipsam ducimus voluptates dolor </p>
          <div>
            <button className='bg-black color white px-7 py-3 text-white rounded-lg'>Contact Us</button>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default AboutUs