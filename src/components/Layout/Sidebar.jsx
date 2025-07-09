import React from 'react'
import logo from '/logo.png'


const Sidebar = () => {
  return (
      <div className='bg-black text-white  rounded-lg h-full p-4'>
         <div  className='flex items-center gap-2'>
            <img src={logo} alt="" />
            <h2 className='font-bold text-2xl'>Symansys</h2>
         </div>
      </div>
  )
}

export default Sidebar