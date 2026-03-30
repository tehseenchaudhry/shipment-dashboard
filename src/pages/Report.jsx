import React from 'react'
import { FiUsers } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { LuCircleCheckBig } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { AiOutlineBarChart } from "react-icons/ai";




const Report = () => {
  return (
    <>
      <div className="p-6  space-y-6  bg-gray-100  lg:mt-20    lg:ml-[20%] mt-30 lg:mx-auto lg:w-[78%] w-full mb-5">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#1A77D2] text-center">Project Reports</h1>
        <p className="text-gray-400 ">A quick overview of our project’s performance and progress.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white shadow-md rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <FiUsers className='text-[#1A77D2] text-5xl font-bold mb-1' />
            <h3 className="text-gray-600 font-semibold text-xl">Total Users</h3>
            <p className="text-2xl font-bold text-[#1A77D2] ">1,245</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <LuCircleCheckBig className='text-green-500 text-5xl font-bold mb-1' />
            <h3 className="text-gray-600 font-semibold text-xl">Verified Reports</h3>
            <p className="text-2xl font-bold text-green-500">1,120</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <RxCrossCircled className='text-red-500 text-5xl font-bold mb-1' />
            <h3 className="text-gray-600 font-semibold text-xl">Unverified Reports</h3>
            <p className="text-2xl font-bold text-red-500">125</p>
          </div>
        </div>


        <div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5">
          <div className="shadow-xl p-7 rounded-xl bg-white hover:shadow-2xl transition-all delay-100">
            <div className=" flex gap-3">
              <SlGraph className='text-purple-500 text-3xl' />
              <h3 className="text-xl font-semibold mb-1">Project Progress</h3>
            </div>
            <p className="text-gray-500 pb-2">Current progress of our project milestones and overall completion rate.</p>
            <div className="bg-gray-300 relative rounded-3xl h-3 mb-2">
              <div className=" bg-gradient-to-r from-[#1E88E5] to-[#5E35B1] rounded-3xl absolute h-3 top-0 left-0 w-[70%]"></div>
            </div>
            <p className="text-gray-500 text-sm mb-3">78% Completed</p>
          </div>
          <div className="shadow-xl p-5 rounded-xl bg-white hover:shadow-2xl transition-all delay-100">
            <div className=" flex gap-3">
              <AiOutlineBarChart className='text-[#1A77D2]  text-3xl' />
              <h3 className="text-xl font-semibold mb-2.5">Key Statistics</h3>
            </div>
            <p className="text-gray-500 pb-2">✅ 5 New Admins Added This Month</p>
            <p className="text-gray-500 pb-2">📌 320 Active Daily Users</p>
            <p className="text-gray-500 pb-2">⚡ Server Uptime: 99.8%</p>
            <p className="text-gray-500 pb-2">🚀 12 Features Released</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report