import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,} from "recharts";


const payments = [
  {
    id: "INV-1001",
    name: "John Doe",
    amount: 1200,
    status: "Received",
    img: "/payment-img1.jpg",
  },
  {
    id: "INV-1002",
    name: "Alice Smith",
    amount: 850,
    status: "Pending",
    img: "/payment-img2.jpg",
  },
  {
    id: "INV-1003",
    name: "Michael Lee",
    amount: 500,
    status: "Approval",
    img: "/payment-img2.jpg",
  },
  {
    id: "INV-1004",
    name: "Emma Johnson",
    amount: 650,
    status: "Received",
    img: "/payment-img4.jpg",
  },
  {
    id: "INV-1005",
    name: "David Brown",
    amount: 700,
    status: "Approval",
    img: "/payment-img2.jpg",
  },
];



const Payments = () => {
  const [searchText, setSearchText] = useState('');
  const [payment, setPayment] = useState(payments)



  const handleserach = (e) => {
    const value = e.target.value.toUpperCase();
    setSearchText(value);


    const filtered = payments.filter((item) => {
      return item.id.toUpperCase().includes(value)
    })
    setPayment(filtered)
  }



  //  DATA 
const data = [
 { name: "Approval Required : 2", value: 2, color: "#1E88E5" },
  { name: "Pending : 1", value: 1, color: "#5E35B1" },
  { name: "Received : 2", value: 2, color: "#1E88E5" },
];

// CUSTOM TOOLTIP 
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border shadow-md rounded-md px-3 py-2 text-sm">
        <p className="font-semibold text-gray-800">
          {payload[0].name}
        </p>
      </div>
    );
  }
  return null;
};

  return (
    <>
      <div className="lg:p-6 space-y-6 lg:px-8 px-5   w-full  bg-gray-100   mb-5 lg:mt-20   lg:ml-[20%] mt-36">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#1A77D2] text-center">💳 Payments Dashboard</h1>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col  hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Total Invoices</h3>
            <p className="text-2xl font-bold text-[#1A77D2] ">4</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col   hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Total Expense</h3>
            <p className="text-2xl font-bold text-green-600">$3900.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col   hover:shadow-xl transition-all delay-200">
            <h3 className="text-gray-500 font-semibold text-lg">Average Expense</h3>
            <p className="text-2xl font-bold text-red-500">$780.00</p>
          </div>
        </div>



        {/* chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        📊 Payments Status Distribution
      </h2>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* TOOLTIP */}
            <Tooltip content={<CustomTooltip />} />

            {/* LEGEND */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="rect"
            />

            {/* PIE */}
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              outerRadius={120}
              stroke="#fff"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>


        {/* Center - Search bar */}
        <div className="flex justify-center mx-auto items-center  rounded-lg px-3 py-2 border lg:w-1/2 ">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            onChange={handleserach}
            type="text"
            placeholder="Search  by Customer or Invoice..."
            value={searchText}
            className="bg-transparent outline-none w-full text-gray-600"
          />
        </div>

        <div className="lg:p-6 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payment.map((item) => (
            <div
              key={item.id}
              className="border rounded-2xl p-5 bg-white shadow-sm flex lg:flex-col flex-row gap-4"
            >
              <div className="lg:w-28 lg:h-15 w-32 h-28 rounded-lg lg:border overflow-hidden flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.id}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">

              <h2 className="text-lg mt-1">{item.name}</h2>
              <p className="text-gray-500 text-[13px]">{item.id}</p>
              <h3 className="text-lg font-semibold">${item.amount}</h3>

              <div className="flex items-center justify-between mt-2 gap-4">
                {item.status === "Received" && (
                  <>
                    <span className="px-4 py-1 rounded-full text-[12px] font-medium bg-green-100 text-green-600">
                      Received
                    </span>
                    <FiCheckCircle className="text-green-500 text-xl" />
                  </>
                )}

                {item.status === "Pending" && (
                  <>
                    <span className="px-4 py-1 rounded-full text-[12px] font-medium bg-purple-100 text-purple-600">
                      Pending
                    </span>
                    <FiClock className="text-purple-600 text-xl" />
                  </>
                )}

                {item.status === "Approval" && (
                  <>
                    <span className="px-4 py-1 rounded-full lg:text-[12px] text-[12px] font-medium bg-yellow-100 text-yellow-700">
                      Approval Required
                    </span>
                    <select className="border rounded-lg px-3 py-1 text-sm outline-none">
                      <option>Action</option>
                      <option>Approve</option>
                      <option>Reject</option>
                    </select>
                  </>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>




      </div>
    </>
  )
}

export default Payments