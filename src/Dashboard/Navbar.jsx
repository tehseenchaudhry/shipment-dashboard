import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";


const Navbar = () => {
  return (
    <nav className="bg-gray-900 lg:w-[80%] z-40 fixed shadow-md px-6 py-2 flex items-center justify-between top-0 right-0 w-full">

      {/* Center - Search bar */}
      <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 lg:w-1/3 w-2/3 ">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-gray-100"
        />
      </div>

      {/* Right - Icons */}
      <div className="flex lg:gap-5 gap-1">
      <div className=" group flex items-center gap-1 hover:bg-gray-100/20 p-1 rounded cursor-pointer">
        <div className="bg-blue-600 p-2 rounded-full group-hover:bg-blue-500">
        <FiUser className="text-gray-100" />
        </div>
        <span className="text-gray-100 hidden lg:flex">Fatima</span>
      </div>

       <div className="flex items-center hover:bg-gray-100/20 p-1 rounded cursor-pointer">
        <RiSettings3Line className="text-gray-100 text-2xl" />
        <span className="text-gray-100 hidden lg:flex">Settings</span>
      </div>


       <div className="flex items-center hover:bg-gray-100/20 p-1 rounded cursor-pointer">
        <MdLogout className="text-gray-100  text-2xl" />
        <span className="text-gray-100 hidden lg:flex">Logout</span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
