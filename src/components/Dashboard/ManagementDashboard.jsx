import React from "react";
import humansitting from "/assets/Humaaans Sitting.png";
import header from "/assets/Header.png";
import chart from "/assets/Pie chart.png";
import data from "/assets/data.png";
import button from "/assets/buttons.png";
import calendar from "/assets/Calendar.png";
import frame from "/assets/Frame 5000.png";
import note from "/assets/note.png";
import check from "/assets/check.png";
import leader from "/assets/leader.png";
import { FaRegBell } from "react-icons/fa6";
import book from "/assets/book.png";
import video from "/assets/video.png";
import paper from "/assets/paper.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdDisplaySettings } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import ChartLineDots from "@/components/ChartLineDots";

const ManagementDashboard = () => {
  return (
    <div>
      <div className="mt-2 flex gap-6">
        <div className="bg-white rounded-3xl w-[850px] h-48 p-4 flex gap-8">
          <div>
            <p className="text-black font-medium font-poppins text-2xl">
              Hey Ashwin.
            </p>
            <p className="font-light font-poppins text-customGray pt-2">
              Welcome back! We're here to support you on your learning journey.
              Dive into your classes and keep progressing towards your goals
            </p>
          </div>
          <div>
            <img src={humansitting} alt="human sitting" className="w-[287px]" />
          </div>
        </div>
        <div className="bg-white rounded-3xl w-72 p-4 h-72">
          <img src={header} alt="header" />
          <img src={data} alt="data" className="mt-2" />
          <img src={chart} alt="pie-chart" className="ml-4 mt-4" />
          <img src={button} alt="button" className="mt-6" />
        </div>
        <div className="bg-white rounded-3xl p-4">
          <img src={calendar} alt="calendar" />
        </div>
      </div>
      <div className="-mt-20 flex gap-1.5">
        <div>
          <div className="flex gap-3">
            <div className="bg-white rounded-2xl p-4 w-36">
              <div className="flex gap-2">
                <img src={frame} alt="" />
                <p className="text-2xl font-poppins font-semibold">80%</p>
              </div>
              <p className="text-lightergray font-poppins pt-2">Attendance</p>
            </div>
            <div className="bg-white rounded-2xl p-4 w-38">
              <div className="flex gap-2">
                <img src={note} alt="" />
                <p className="text-2xl font-poppins font-semibold">258+</p>
              </div>
              <p className="text-lightergray font-poppins pt-2">
                Task Completed
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="bg-white rounded-2xl p-4 w-38">
              <div className="flex gap-2">
                <img src={check} alt="" />
                <p className="text-2xl font-poppins font-semibold">64%</p>
              </div>
              <p className="text-lightergray font-poppins pt-2">
                Task in Progress
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 w-36">
              <div className="flex gap-2">
                <img src={leader} alt="" />
                <p className="text-2xl font-poppins font-semibold">245</p>
              </div>
              <p className="text-lightergray font-poppins pt-2">
                Reward Points
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-64 h-72 p-2">
          <div className="flex justify-between">
            <p className="text-xl font-medium font-inter">Notice Board</p>
            <p className="underline text-grayish">view all</p>
          </div>
          <div className="mt-2">
            <div className="border-2 border-lightsgray p-2 rounded-md">
              <div className="flex gap-2">
                <div>
                  <FaRegBell />
                </div>
                <div>
                  <p className="font-semibold text-sm">
                    Sports Day Announcement
                  </p>
                </div>
              </div>
              <p className="text-sm font-inter">
                The school's Annual Sports Day will be held on May 12, 2024.
                Mark your calendars!
              </p>
            </div>
            <div className="border-2 border-lightsgray p-2 rounded-md mt-2">
              <div className="flex gap-2">
                <div>
                  <FaRegBell />
                </div>
                <div>
                  <p className="font-semibold text-sm">
                    Summer Break Start Date
                  </p>
                </div>
              </div>
              <p className="text-sm font-inter">
                Summer break begins on May 25, 2024. Have a wonderful holiday!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg h-44 p-4 mt-24">
          <div className="flex justify-between">
            <p className="font-inter font-medium text-xl">Resources</p>
            <p className="underline text-grayish">view all</p>
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <img src={book} alt="book" />
              <p className="flex items-center justify-center font-inter font-medium">
                Book
              </p>
            </div>
            <div>
              <img src={video} alt="video" />
              <p className="flex items-center justify-center font-inter font-medium">
                Video
              </p>
            </div>
            <div>
              <img src={paper} alt="paper" />
              <p className="flex items-center justify-center font-inter font-medium">
                Paper
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-48 h-84 mt-24">
          <div className="p-4 flex gap-4">
            <div className="bg-white rounded-md shadow-md p-2 w-8">
              <FaArrowLeft />
            </div>
            <p className="font-semibold font-poppins pt-1">Monday</p>
            <div className="bg-white rounded-md shadow-md p-2 w-8">
              <FaArrowRight />
            </div>
          </div>
          <div className="text-center items-center">
            <div>
              <p className="font-poppins text-grayCustom">Tamil</p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">English</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="bg-softBlue h-6 p-0.5 rounded-full w-28 text-sm text-blue-500">
                Break
              </p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">Math</p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">Science</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="bg-softYellow h-6 p-0.5 rounded-full w-28 text-sm text-textYellow">
                Lunch
              </p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">Social</p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">CS</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="bg-softBlue h-6 p-0.5 rounded-full w-28 text-sm text-blue-500">
                Break
              </p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">Tamil</p>
            </div>
            <div>
              <p className="font-poppins text-grayCustom">English</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <div className="bg-white rounded-lg p-4 w-80 h-56 -mt-32">
            <div className="flex justify-between">
              <p className="font-inter font-semibold">Test Score activity</p>
              <p>Monthly</p>
            </div>
          </div>
          <div>{/* <ChartLineDots /> */}</div>
        </div>
        <div className="bg-white w-[485px] h-72 rounded-md -mt-32 p-4">
          <div className="flex justify-between">
            <p className="font-inter text-lg font-semibold">Grade by Subject</p>
            <div className="flex gap-2">
              <p>Exam</p>
              <p>Monthly</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden">
                <div className="bg-lightishBlue h-full w-36 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-44 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-36 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-48 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-40 rounded-md"></div>
              </div>
            </div>
            <div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden">
                <div className="bg-lightishBlue h-full w-36 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-44 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-36 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-48 rounded-md"></div>
              </div>
              <div className="bg-lightishGray rounded-md h-8 w-56 overflow-hidden mt-2">
                <div className="bg-lightishBlue h-full w-40 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-[800px] h-full bg-white rounded-lg mt-6 p-6">
          <div className="flex justify-between mr-12">
            <p className="font-inter text-lg font-semibold">Assignments</p>
            <div className="flex gap-4">
              <MdDisplaySettings size={24} className="mt-2" />
              <div className="relative w-56">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CiSearch
                    className="text-gray-500 cursor-pointer"
                    size={20}
                  />
                </div>
                <input
                  type="search"
                  className="h-11 w-72 rounded-full p-4 pl-9 bg-lightBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-md w-full overflow-x-auto">
            <table className="min-w-full text-sm text-left rounded-md">
              <thead className="bg-blue-50 rounded-md">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">No</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Task
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Subject
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Due Date
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y space-y-4">
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">01</td>
                  <td className="px-4 py-3">Read Chapter 1-3</td>
                  <td className="px-4 py-3">English</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-blue-600 bg-blue-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    In Progress
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">02</td>
                  <td className="px-4 py-3">Complete Problem Set #5</td>
                  <td className="px-4 py-3">Maths</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-red-600 bg-red-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    Not Started
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">03</td>
                  <td className="px-4 py-3">
                    Write Lab Report on Acid-Base Titration
                  </td>
                  <td className="px-4 py-3">Physics</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-blue-600 bg-blue-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    In Progress
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">04</td>
                  <td className="px-4 py-3">Prepare for Oral Presentation</td>
                  <td className="px-4 py-3">Chemistry</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-blue-600 bg-blue-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    In Progress
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">05</td>
                  <td className="px-4 py-3">
                    Create Art Piece for Final Project
                  </td>
                  <td className="px-4 py-3">English</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-green-600 bg-blue-50 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    Completed
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">06</td>
                  <td className="px-4 py-3">
                    Write Research Paper on Climate Change
                  </td>
                  <td className="px-4 py-3">EVS</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-blue-600 bg-blue-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    In Progress
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">07</td>
                  <td className="px-4 py-3">Complete Math Quiz on Algebra</td>
                  <td className="px-4 py-3">Math</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-green-600 bg-green-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    Completed
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">08</td>
                  <td className="px-4 py-3">
                    Prepare for History Class Debate
                  </td>
                  <td className="px-4 py-3">History</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-red-600 bg-red-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    Not Started
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 mt-6">
                  <td className="px-4 py-3">09</td>
                  <td className="px-4 py-3">
                    Submit Final Design for Architecture Project
                  </td>
                  <td className="px-4 py-3">Architecture</td>
                  <td className="px-4 py-3">12 May 2024</td>
                  <td className="text-blue-600 bg-blue-100 pl-4 w-18 h-8 rounded-full text-xs font-medium">
                    In Progress
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaRegEdit />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-4 px-2">
              <button className="px-3 py-1 rounded border hover:bg-gray-100">
                Previous
              </button>
              <p className="text-gray-500">Page 1 of 12</p>
              <button className="px-3 py-1 rounded border hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-52 rounded-md h-[450px] p-4 mt-6">
          <div className="flex justify-between">
            <p className="font-inter font-semibold text-2xl">Messages</p>
            <FaRegArrowAltCircleRight size={20} className="mt-1" />
          </div>
          <div className="flex gap-2 mt-4">
            <div>
              <img src="/public/assets/Profile.png" alt="" />
            </div>
            <div>
              <p className="font-inter">Jane Cooper</p>
              <p className="font-inter text-sm text-grayish">Don’t forget the lab rep...</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div>
              <img src="/public/assets/Profile.png" alt="" />
            </div>
            <div>
              <p className="font-inter">Jane Cooper</p>
              <p className="font-inter text-sm text-grayish">Don’t forget the lab rep...</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div>
              <img src="/public/assets/Profile.png" alt="" />
            </div>
            <div>
              <p className="font-inter">Jane Cooper</p>
              <p className="font-inter text-sm text-grayish">Don’t forget the lab rep...</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div>
              <img src="/public/assets/Profile.png" alt="" />
            </div>
            <div>
              <p className="font-inter">Jane Cooper</p>
              <p className="font-inter text-sm text-grayish">Don’t forget the lab rep...</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div>
              <img src="/public/assets/Profile.png" alt="" />
            </div>
            <div>
              <p className="font-inter">Jane Cooper</p>
              <p className="font-inter text-sm text-grayish">Don’t forget the lab rep...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
