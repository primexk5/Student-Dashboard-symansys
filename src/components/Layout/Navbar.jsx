import React from "react";
// import { CgArrowLeft } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BiMessageSquareDots } from "react-icons/bi";
import logo from "/logo.png";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        {/* <CgArrowLeft className='bg-white p-1 text-4xl rounded-lg shadow-md w-14 cursor-pointer' onClick={()=> navigate(-1)} /> */}
        <div>
          <button onClick={()=> navigate(-1)} className="bg-white rounded-md h-10 w-10 p-2 pl-3 shadow-md">
            <FaArrowLeft />
          </button>
        </div>
        {/* <input type="text" placeholder='search' className='outline-none p-2 w-80 bg-[#ebeaef] rounded-2xl' /> */}
        <div className="relative w-56">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="text-gray-500 cursor-pointer" size={20} />
          </div>
          <input
            type="search"
            className="h-11 w-72 rounded-full p-4 pl-9 bg-lightBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <IoIosNotificationsOutline className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer" />
        <BiMessageSquareDots
          className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer"
          onClick={() => navigate("/message")}
        />
        <CiSettings
          className="text-4xl bg-gray-100 p-1 rounded-full cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        <img
          src={logo}
          alt="profile"
          className="size-14 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
