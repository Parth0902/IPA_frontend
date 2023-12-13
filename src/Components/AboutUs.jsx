import { Height } from '@mui/icons-material'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-gray-100' style={{height:"80vh"}}>
      <h1>About Us</h1>
      <div className='flex justify-center gap-16'>
        <div className='flex-1 flex justify-end'>
            <img src="https://ipafootcare.org/IPA-ADMIN/about/about.png" alt="" />
        </div>
        <div className='flex-1 flex flex-col gap-10 justify-start'>
          <p className='w-2/3 font-SubHeading text-xl text-justify leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quae tenetur officiis, fugit quo in praesentium quia, harum ipsam ducimus voluptates dolor laudantium voluptatibus rerum eligendi? Corrupti sed totam nostrum illo necessitatibus nemo adipisci assumenda, distinctio accusantium molestiae fugiat voluptatem eius ducimus cupiditate ea. Blanditiis aliquam nam aliquid rem dicta!</p>
          <p className='w-2/3 font-SubHeading text-xl text-justify leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quae tenetur officiis, fugit quo in praesentium quia, harum ipsam ducimus voluptates dolor </p>
          <button>Contact Us</button>
        </div>
       
      </div>
    </div>
  )
}

export default AboutUs