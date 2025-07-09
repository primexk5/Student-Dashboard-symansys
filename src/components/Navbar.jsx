import React from 'react'
import { CgArrowLeft } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiSettings } from "react-icons/ci"
import { BiMessageSquareDots } from "react-icons/bi"
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
   
    <>
      <div className='mt-6'>
         <nav className='flex justify-between items-center'>
             <div className='flex items-center gap-4'>
                <CgArrowLeft className='bg-white p-1 text-4xl rounded-lg shadow-md w-14' />
                <input type="text" placeholder='search' className='p-2 w-80 bg-slate-100 rounded-lg' />
             </div>

            <div className='flex items-center gap-6'>
                <IoIosNotificationsOutline className='text-4xl bg-gray-100 p-1 rounded-full'/>
                <BiMessageSquareDots className='text-4xl bg-gray-100 p-1 rounded-full'/>
                <CiSettings className='text-4xl bg-gray-100 p-1 rounded-full'/>
                <img src={logo} alt="" className='w-20 h-20 rounded-full' />

            </div>
         </nav>
      </div>
    </>
  )
}

export default Navbar