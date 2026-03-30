import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { LuBell } from "react-icons/lu";




const users = [
  {
    name: "Ali Khan",
    email: "ali@example.com",
    role: "User",
    status: "Verified",
    
  },
  {
    name: "Sara Malik",
    email: "sara@example.com",
    role: "Admin",
    status: "Unverified",
  },
  {
    name: "Ahmed Raza",
    email: "ahmed@example.com",
    role: "User",
    status: "Verified",
  },
  {
    name: "Fatima Noor",
    email: "fatima@example.com",
    role: "User",
    status: "Unverified",
  },
];


const User = () => {
const [searchText, setSearchText]=useState("");
const [user, setUser] = useState(users)


const handleSearch=(e)=>{
  const value = e.target.value.toLowerCase();
  setSearchText(value);

  const filtered = users.filter((item)=>{
    return item.name.toLowerCase().includes(value);
  })
   setUser(filtered)
}

  return (
    <>
      <div className="p-6 space-y-6  bg-gray-100  lg:mt-20   lg:ml-[20%] lg:m-5 mt-30 w-full mb-5">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Total Users</h3>
            <p className="text-2xl font-bold text-[#1A77D2] ">4</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Verified Users</h3>
            <p className="text-2xl font-bold text-purple-800">0</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center items-center  hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Admins</h3>
            <p className="text-2xl font-bold text-[#1A77D2]">0</p>
          </div>
        </div>



        {/* Center - Search bar */}
        <div className="flex lg:flex-row flex-col justify-between ">
          <div className="flex justify-center  items-center bg-white  rounded-lg px-3 py-2 lg:w-1/3">
            <FaSearch className="text-gray-600 mr-2" />
            <input
               onChange={handleSearch}
              type="text"
              placeholder="Search users..."
              value={searchText}
              className="bg-transparent outline-none w-full text-black"
            />
          </div>
          <LuBell className='hidden lg:flex text-3xl mr-2 text-gray-700 mt-2' />
        </div>


       <div className="p-6">
      <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg ">
        <table className="w-full border-collapse">
          {/* TABLE HEAD */}
          <thead className=" bg-gray-200 border-b">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {user.map((user, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-100 bg-white transition"
              >
                {/* NAME */}
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border text-lg font-semibold text-gray-700">
                    {user.name[0]}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </td>

                {/* EMAIL */}
                <td className="p-4 text-gray-600">{user.email}</td>

                {/* ROLE */}
                <td className="p-4">
                  <span
                    className={`px-4 py-1 text-sm rounded-full font-medium
                      ${
                        user.role === "Admin"
                          ? "bg-[#1A77D2] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`px-4 py-1 text-sm rounded-full font-medium border
                      ${
                        user.status === "Verified"
                          ? "text-green-600 bg-green-400 border border-[#1A77D2]"
                          : " bg-gradient-to-r from-[#1E88E5] to-[#5E35B1] text-white"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* ACTION */}
                <td className="p-4">
                  <select className="border rounded-lg px-3 py-1 outline-none">
                    <option>User</option>
                    <option>Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


       {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border text-lg font-semibold text-gray-700">
                {user.name[0]}
              </div>
              <span className="font-medium">{user.name}</span>
            </div>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p>
              <span className="font-semibold">Role:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${
                  user.role === "Admin"
                    ? "bg-[#1A77D2] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {user.role}
              </span>
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium border ${
                  user.status === "Verified"
                    ? "text-green-600 bg-green-400 border border-[#1A77D2]"
                    : "bg-gradient-to-r from-[#1E88E5] to-[#5E35B1] text-white"
                }`}
              >
                {user.status}
              </span>
            </p>
            <select className="border rounded-lg px-3 py-1 outline-none w-full">
              <option>User</option>
              <option>Admin</option>
            </select>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  )
}

export default User