import React from 'react'
import Rating from '@mui/material/Rating';

const data=[
    {
        id:1,
        img:"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"askldja aksldja",
        rating:4.5,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate ipsam tempora eveniet adipisci eum quae necessitatibus, obcaecati itaque vitae ipsum assumenda enim at, debitis in dolor inventore delectus sed?"
    },
    {
        id:1,
        img:"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"askldja aksldja",
        rating:4,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate ipsam tempora eveniet adipisci eum quae necessitatibus, obcaecati itaque vitae ipsum assumenda enim at, debitis in dolor inventore delectus sed?"
    },
    {
        id:1,
        img:"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"askldja aksldja",
        rating:5,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate ipsam tempora eveniet adipisci eum quae necessitatibus, obcaecati itaque vitae ipsum assumenda enim at, debitis in dolor inventore delectus sed?"
    },
    {
        id:1,
        img:"https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
        name:"askldja aksldja",
        rating:4,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate ipsam tempora eveniet adipisci eum quae necessitatibus, obcaecati itaque vitae ipsum assumenda enim at, debitis in dolor inventore delectus sed?"
    },
]
const Testimonials = () => {
  return (
    <section class="text-gray-600 body-font py-24">

        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-center text-gray-900">
             Client Testimonilas
        </h1>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p class="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
            <p class="text-gray-500">UI Develeoper</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Testimonials