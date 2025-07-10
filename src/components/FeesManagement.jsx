import React from 'react'
import logo from "/logo.png"
import first from "/first.png"
import sec from "/sec.png"
import third from "/third.png"
import img from "/7748166.jpg"
import { GoDotFill } from "react-icons/go";
import { LiaEdit } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
const FeesManagement = () => {
  return (
    <>

  

    <div> 

    <h1 className='text-4xl font-medium pt-20 ml-[390px]'>Fees Management</h1>

  
      <div className='flex gap-3 justify-end pr-5'>
      <img className='h-[350px] relative top-9 ' src={first} alt="" />
        <img className='w-[250px]' src={sec} alt="" />
        <img className='w-[500px]' src={third} alt="" />
      </div>

     <div className='bg-white mt-3 rounded-2xl ml-[385px] mr-6'>

     <div className='p-10'>
     <div className='flex justify-between'>
        <h1 className='text-xl'>Fees Collection Table</h1>

        <div>

          <div className='flex gap-8 items-center'>
            <div className='flex items-center' >
              <GiSettingsKnobs className='text-3xl'/>
              <div className='flex items-center'>
                <IoIosSearch className='relative left-8 text-gray-400 text-xl'/>
                <input className='bg-gray-200 p-2 px-12 rounded-2xl' placeholder='Search by Student' type="text" />
              </div>
            </div>

            <div className='flex items-center gap-3 bg-gray-200 rounded-xl p-2 px-3'>
              <IoCalendarNumberOutline/>
              Today 
              <IoIosArrowDown/>
            </div>

            <div className='flex  items-center gap-3 bg-gray-200 rounded-xl p-2 px-3'>
              All Classes 
              <IoIosArrowDown/>
            </div>

            <div className='flex  items-center gap-3 bg-gray-200 rounded-xl p-2 px-3'>
              All Status 
              <IoIosArrowDown/>
            </div>
          </div>

        </div>
      </div>

      <table class="min-w-full bg-white rounded-b-lg shadow-md mt-6">
                    <thead className='rounded-full'>
                      <tr class="bg-gray-200 text-gray-800 uppercase text-sm leading-normal rounded-full">
                        <th class="py-3 px-6 text-left">No</th>
                        <th class="py-3 px-6 text-left">Students</th>
                        <th class="py-3 px-6 text-left">Class</th>
                        <th class="py-3 px-6 text-left">Tution</th>
                        <th class="py-3 px-6 text-left">Hostel</th>
                        <th class="py-3 px-6 text-left">Transport</th>
                        <th class="py-3 px-6 text-left">Day-Boarding</th>
                        <th class="py-3 px-6 text-left">Total</th>
                        <th class="py-3 px-6 text-left">Pending</th>
                        <th class="py-3 px-6 text-left">Status</th>
                        <th class="py-3 px-6 text-left">Action</th>
                        
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 lg:text-xl font-light">
                      
                      <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>01</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/* 2 */}
                      
                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>02</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-red-500 bg-red-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Overdue</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>
                      

                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>03</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/* 3 */}
                      
                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>04</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-green-500 bg-green-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Paid</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/*  4*/}
                     
                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>05</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/*  */}

                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>06</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/*  */}

                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>07</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/*  */}

                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>08</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                      {/*  */}

                         <tr class="border-b border-gray-200 hover:bg-gray-100 font-normal text-base">

                        <td class="py-3 px-6 text-left flex gap-4">
                          <p id="orangeTrigger" class="cursor-pointer "> <input type="checkbox" /></p> <p>09</p>
                        </td>
                        
                        <td class="py-3 px-6">
                          <div className='flex gap-3 items-center'>
                          <img className='w-8 rounded-full' src={img} alt="" />
                          <p>Peter Abahim</p>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left"><p>12-A</p></td>
                        <td class="py-3 px-6 text-left"><p>$80,000</p></td>
                        <td class="py-3 px-6 text-left"><p></p></td>
                        <td class="py-3 px-6 text-left"><p>$15,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$20,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$150,000</p></td>
                        <td class="py-3 px-6 text-left"><p>$35,000</p></td>
                        <td class="py-3 px-6 text-left"><div className='flex items-center gap-1 text-xs text-yellow-500 bg-yellow-200 w-fit p-1 rounded-2xl px-3'>
                          <GoDotFill/> <p>Pending</p>
                          </div></td>
                        <td class="py-3 px-6 text-left">
                          <div className='flex text-3xl gap-3'><LiaEdit/> <GoTrash/></div>
                        </td>
                       
                      </tr>

                    </tbody>
                  </table>
     </div>
     </div>

            
    </div>

    </>
  )
}

export default FeesManagement