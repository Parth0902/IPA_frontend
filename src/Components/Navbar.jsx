import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Search,Heart,ShoppingCart,AlignJustify } from 'lucide-react';
import { useState } from 'react';
import Logo from '../Assets/logo.png'

const Navbar = () => {
  const [visible,setVisible]=useState(false);
  const OpenNav=()=>
  {
      setVisible(!visible);
  }
  return (
    <div className='w-full  px-5 xl:px-10 py-2 flex justify-center mb-2 fixed top-0 left-0 z-10 bg-white' id='Navbar'>
      <AlignJustify className='lg:hidden relative top-5 mr-10' onClick={OpenNav}/>
      <div className='w-full flex flex-col gap-10 justify-between items-center lg:flex-row  lg:justify-center xl:gap-7'>
        <div className='flex flex-1 w-full items-center gap-3'>
                <img src={Logo} alt="" className='h-20'/>     
                 <h1 className='font-Heading text-2xl'>IPA EDUCATION ACADEMY</h1>              
        </div>

        <div className='hidden lg:flex gap-5 items-center  flex-1'>
                    <input type="text" placeholder='Search' className='rounded-lg px-5 py-2  border-black' id="search" style={{border:"1px solid black",width:"400px"}} />
                    <button className='bg-black py-1 px-3 rounded-md'><Search color='#fff' /></button>
        </div>
          {
           visible &&
            <div className='flex flex-col gap-10 flex-1 lg:items-center'>
                <h4  className='font-SubHeading text-lg'>Courses</h4>
                <h4  className='font-SubHeading text-lg'>Contact Us</h4>
                <h4  className='font-SubHeading text-lg'>Wish List</h4>
                <h4  className='font-SubHeading text-lg'>Cart</h4>
                <h4  className='font-SubHeading text-lg'>Profile</h4>
            </div>
          }

            <div className='hidden flex-1 gap-5 xl:flex  lg:justify-end lg:items-center'>
                <h4  className='font-SubHeading text-lg'>Courses</h4>
                <h4  className='font-SubHeading text-lg'>Contact Us</h4>
                <Heart/>
                <ShoppingCart/>
                <div className='hidden lg:flex gap-3'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    <button className='bg-black py-1 px-3 rounded-md text-white' >Logout</button>
                </div>
            </div>
            

      </div>
        
    </div>
  )
}

export default Navbar