import React from 'react'
import { CgArrowLeft } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io"
import { CiSettings } from "react-icons/ci"
import { BiMessageSquareDots } from "react-icons/bi"
// import logo from '/logo.png'
import nft from '../../assets/nft.webp'
import { useNavigate} from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between items-center p-4'>
        <div className='flex items-center gap-4'>
            <CgArrowLeft className='bg-white p-1 text-4xl rounded-lg shadow-md w-14 cursor-pointer' onClick={()=> navigate(-1)} />
          <input type="text" placeholder='search' className='outline-none p-2 w-80 bg-[#ebeaef] rounded-2xl' />
        </div>

      <div className='flex items-center gap-6'>
          <IoIosNotificationsOutline className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer'/>
          <BiMessageSquareDots className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer' onClick={()=>navigate("/message")}/>
          <CiSettings className='text-4xl bg-gray-100 p-1 rounded-full cursor-pointer' onClick={()=>navigate("/settings")}/>
          <img src={nft} alt="" className='size-14 rounded-full cursor-pointer w-10 h-10' />

      </div>
    </nav>
  )
}

export default Navbar