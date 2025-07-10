import React from 'react'
import logo from '/logo.png'
import { TbSmartHome } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { BiMessageSquareDots } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";


const Sidebar = () => {
  return (
      <div className='bg-black text-white  rounded-lg h-full p-4'>
         <div  className='flex items-center gap-2'>
            <img src={logo} alt="" />
            <h2 className='font-bold text-2xl'>Symansys</h2>
         </div>
         <div className='mt-6 ml-2'>
        <div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><TbSmartHome size={24} />Dashboard</p>
        </div>
        <div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><FaGraduationCap size={24} />Teachers</p>
        </div>
        <div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><HiMiniUsers size={24} />Students</p>
        </div>
        <div className='mt-6  hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'>
          <p className='cursor-pointer flex gap-4'><TbSmartHome size={24} />Fees</p>
        </div><div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><SlCalender size={20} />Calendar</p>
        </div><div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><SlCalender size={24} />Time Table</p>
        </div><div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><BiMessageSquareDots size={24} />Message</p>
        </div>
        <div className='mt-6'>
          <p className='cursor-pointer flex gap-4 hover:bg-white hover:rounded-md hover:h-10 hover:text-black hover:pt-2 hover:pl-2'><CiSettings size={24} />Settings</p>
        </div>
      </div>
      <div className='mt-36'>
        <p className='cursor-pointer bg-white h-10 w-full text-black rounded-md p-1 pl-2 font-medium text-lg flex gap-24'>Log Out <AiOutlineLogout className='mt-1' size={24} /></p>
      </div>
      </div>
  )
}

export default Sidebar