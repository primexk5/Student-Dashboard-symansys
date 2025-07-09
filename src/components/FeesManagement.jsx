import React from 'react'
import logo from "/logo.png"
import first from "/first.png"
import sec from "/sec.png"
import third from "/third.png"
const FeesManagement = () => {
  return (
    <>

    {/* <div className='bg-black text-white  rounded-lg h-full  p-4'>
             <div  className='flex items-center gap-2'>
                <img src={logo} alt="" />
                <h2 className='font-bold text-2xl'>Symansys</h2>
             </div>
          </div> */}

    <div className=''> 
      <h1 className='text-4xl'>Fees Management</h1>

      <div className='flex gap-3'>
        <img className='h-[290px] relative top-9' src={first} alt="" />
        <img src={sec} alt="" />
        <img src={third} alt="" />
      </div>

      <div>
        <h1>Fees Collection Table</h1>
      </div>
    </div>
    </>
  )
}

export default FeesManagement