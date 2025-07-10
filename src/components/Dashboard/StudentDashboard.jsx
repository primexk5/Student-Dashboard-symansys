import React from 'react'
import humansitting from "/assets/Humaaans Sitting.png";
import header from "/assets/Header.png";
import chart from "/assets/Pie chart.png";
import data from "/assets/data.png";
import button from "/assets/buttons.png";
import calendar from "/assets/Calendar.png";

const StudentDashboard = () => {
  return (
    <div>
      <div className="mt-8 flex gap-8">
        <div className="bg-white rounded-3xl w-[450px] h-48 p-4 flex gap-8">
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
        <div className="bg-white rounded-3xl p-4">
          <img src={header} alt="header" />
          <img src={data} alt="data" className="mt-2" />
          <img src={chart} alt="pie-chart" className="ml-8 mt-4" />
          <img src={button} alt="button" className="mt-6" />
        </div>
        <div className="bg-white rounded-3xl p-4">
          {/* <input type="date" /> */}
          {/* <Calendar /> */}
          <img src={calendar} alt="calendar" />
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard