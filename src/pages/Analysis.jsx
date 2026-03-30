import React from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis,  ResponsiveContainer  } from "recharts";



const lineData = [
  { month: "Jan", shipments: 30 },
  { month: "Feb", shipments: 45 },
  { month: "Mar", shipments: 60 },
  { month: "Apr", shipments: 50 },
  { month: "May", shipments: 80 },
];

const pieData = [
  { name: "Paid", value: 65, color: "#6B46C1" },
  { name: "Pending", value: 25, color: "#3182CE" },
  { name: "Overdue", value: 10, color: "#E53E3E" },
];


const paymentsData = [
  { month: "Jan", payments: 4000 },
  { month: "Feb", payments: 3200 },
  { month: "Mar", payments: 5000 },
  { month: "Apr", payments: 4500 },
  { month: "May", payments: 6000 },
];

const Analysis = () => {
  return (
    <>
     <div className="p-6 space-y-6  bg-gray-100  lg:mt-20   w-full lg:ml-[21%] mt-30 mb-5 ">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-purple-700">
          <h3 className="text-gray-500">Total Shipments</h3>
          <p className="text-2xl font-bold text-purple-700">265</p>
          <p className="text-gray-400 text-sm">Based on monthly data</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-blue-500">
          <h3 className="text-gray-500">Total Payments</h3>
          <p className="text-2xl font-bold text-blue-500">$22,700</p>
          <p className="text-gray-400 text-sm">Sum of all months</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-green-500">
          <h3 className="text-gray-500">Paid Invoices</h3>
          <p className="text-2xl font-bold text-green-500">65%</p>
          <p className="text-gray-400 text-sm">Of total invoices</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Line Chart */}
  <div className="bg-white shadow-md rounded-lg p-5">
    <h3 className="text-purple-700 font-semibold mb-3">📦 Shipments Trend</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="shipments" stroke="#6B46C1" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}
  <div className="bg-white shadow-md rounded-lg p-5">
    <h3 className="text-blue-500 font-semibold mb-3">📄 Invoices Status</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>

{/* Payments Bar Chart */}
<div className="bg-white shadow-md rounded-lg p-5 mt-6">
  <h3 className="text-blue-500 font-semibold mb-3">💳 Payments Overview</h3>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={paymentsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="payments" fill="#3182CE" />
    </BarChart>
  </ResponsiveContainer>
  
</div>
    </div>
    </>
  )
}

export default Analysis