import React from 'react'
import logo from '../assets/logo.png'


const Sidebar = () => {
  return (
    <>
      <div className='bg-black text-white w-80 h-screen mt-4 rounded-3xl ml-3'>
         <div>
            <span className='flex items-center gap-2 relative left-16 top-4'>
                <img src={logo} alt="" />
                <h2 className='font-bold text-2xl'>Symansys</h2>
            </span>
         </div>
      </div>
    </>
  )
}

export default Sidebar