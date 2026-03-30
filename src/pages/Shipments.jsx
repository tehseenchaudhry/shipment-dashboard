import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";


const shipment = [
  {
    id: 1,
    h1: 'Shipment #1',
    customer: 'CUST-1001',
    service: 'Express',
    receiver: 'John Doe',
    address: '305 Example St',
    city: 'New Yourk',
    country: 'USA',
    postal: '10000',
  },
  {
    id: 2,
    h1: 'Shipment #2',
    customer: 'CUST-1002',
    service: 'Standard',
    receiver: 'Alice Smith',
    address: '872 Example st',
    city: 'Chicago',
    country: 'USA',
    postal: '10001',
  },
  {
    id: 3,
    h1: 'Shipment #3',
    customer: 'CUST-1003',
    service: 'Economy',
    receiver: 'Michael Lee',
    address: '550 Example St',
    city: 'Los Angles',
    country: 'USA',
    postal: '10002',
  },
  {
    id: 4,
    h1: 'Shipment #4',
    customer: 'CUST-1004',
    service: 'Express',
    receiver: 'Emma Johnson',
    address: '343 Example St',
    city: 'Chicago',
    country: 'USA',
    postal: '10003',
  },
  {
    id: 5,
    h1: 'Shipment #5',
    customer: 'CUST-1005',
    service: 'Standard',
    receiver: 'John Doe',
    address: '813 Example St',
    city: 'New York',
    country: 'USA',
    postal: '10004',
  },
  {
    id: 6,
    h1: 'Shipment #6',
    customer: 'CUST-1006',
    service: 'Economy',
    receiver: 'Alice Smith',
    address: '871 Example St',
    city: 'Chicago',
    country: 'USA',
    postal: '10005',
  },
  {
    id: 7,
    h1: 'Shipment #7',
    customer: 'CUST-1007',
    service: 'Express',
    receiver: 'Michael Lee',
    address: '940 Example St',
    city: 'Los Angeles St',
    country: 'USA',
    postal: '10006',
  },
  {
    id: 8,
    h1: 'Shipment #8',
    customer: 'CUST-1008',
    service: 'Standard',
    receiver: 'Emma Jonson',
    address: '600 Example St',
    city: 'San Francisco St',
    country: 'USA',
    postal: '10007',
  },
  {
    id: 9,
    h1: 'Shipment #9',
    customer: 'CUST-1009',
    service: 'Economy',
    receiver: 'John Doe',
    address: '612 Example ST',
    city: 'NewYork',
    country: 'USA',
    postal: '10008',
  },
  {
    id: 10,
    h1: 'Shipment #10',
    customer: 'CUST-1010',
    service: 'Express',
    receiver: 'Alice Smith',
    address: '248 Example St',
    city: 'Chicago',
    country: 'USA',
    postal: '1009',
  },
  {
    id: 11,
    h1: 'Shipment #11',
    customer: 'CUST-1011',
    service: 'Standard',
    receiver: 'Michael Lee',
    address: '17Example ST',
    city: 'LOs Angeles',
    country: 'USA',
    postal: '10010',
  },
  {
    id: 12,
    h1: 'Shipment #12',
    customer: 'CUST-1012',
    service: 'Economy',
    receiver: 'Emma Johnson',
    address: '535 Example St',
    city: 'San Francisco',
    country: 'USA',
    postal: '10011',
  },
  {
    id: 13,
    h1: 'Shipment #13',
    customer: 'CUST-1013',
    service: 'EXpress',
    receiver: 'JOhn Doe',
    address: '264 Example St',
    city: 'New York',
    country: 'USA',
    postal: '10012',
  },
  {
    id: 14,
    h1: 'Shipment #14',
    customer: 'CUST-1014',
    service: 'Standard',
    receiver: 'Alice Smith',
    address: '456 Example St',
    city: 'Chicago',
    country: 'USA',
    postal: '10013',
  },
  {
    id: 15,
    h1: 'Shipment #15',
    customer: 'CUST-1015',
    service: 'Econoy',
    receiver: 'Michael Lee',
    address: '546 Example St',
    city: 'Los Angeles',
    country: 'USA',
    postal: '10014',
  }
]

const Shipments = () => {
  const [searchText, setSearchText] = useState('');
  const [shipments, setShipments] = useState(shipment);

  // searchbar
  const handleSearch = (e) => {
    const value = e.target.value.toUpperCase();
    setSearchText(value);

    const filtered = shipment.filter((item) => {

      return item.customer.toUpperCase().includes(value)
    })
    setShipments(filtered);
  }


  const handleStatusChange = (id, newStatus) => {
    const updatedShipments = shipments.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );

    setShipments(updatedShipments);
  };


  const totalShipments = shipments.length;

  const fulfilledCount = shipments.filter(
    item => item.status === "Fulfilled"
  ).length;

  const pendingCount = shipments.filter(
    item => item.status === "Pending"
  ).length;




  // DATA 
  const data = [
    { month: "Jan", shipments: 30 },
    { month: "Feb", shipments: 45 },
    { month: "Mar", shipments: 60 },
    { month: "Apr", shipments: 50 },
    { month: "May", shipments: 75 },
    { month: "Jun", shipments: 90 },
  ];

  //  CUSTOM TOOLTIP
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="p-3 rounded-lg text-white text-sm font-semibold shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, rgb(30,136,229), rgb(94,53,177))",
          }}
        >
          {label}: {payload[0].value} 📦
        </div>
      );
    }
    return null;
  };


  return (
    <>
      <div className="lg:p-6 px-8 space-y-6 lg:mt-20   w-full lg:ml-[21%] mt-36">
        <h1 className="lg:text-5xl text-2xl font-bold text-[#1A77D2] text-center">Shipment Management Dashboard</h1>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-md rounded-xl p-5 py-8 border-t-4 border-[#1A77D2]">
            <h3 className="text-gray-700 text-xl font-semibold">Total Shipments</h3>
            <p className="text-4xl font-bold text-[#1A77D2]">{totalShipments}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 py-8 border-t-4 border-green-500">
            <h3 className="text-gray-700 text-xl font-semibold">Fulfilled</h3>
            <p className="text-4xl font-bold text-green-500">{fulfilledCount}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 py-8 border-t-4 border-purple-700">
            <h3 className="text-gray-700 text-xl font-semibold">Pending</h3>
            <p className="text-4xl font-bold text-purple-700">{pendingCount}</p>
          </div>
        </div>




        {/* chart */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
          <h2 className="lg:text-3xl text-2xl font-bold text-[#1A77D2] mb-8 text-center">
            Monthly Shipment Overview
          </h2>

          <div className="h-[350px] w-full relative pl-0  ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                {/* GRID */}
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />

                {/* AXES */}
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#1E293B", fontSize: 14, fontWeight: 600 }}
                />
                <YAxis
                  tick={{ fill: "#1E293B", fontSize: 14, fontWeight: 600 }}
                />

                {/* TOOLTIP */}
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#ccc", opacity: 0.3 }}
                />

                {/* LEGEND */}
                <Legend
                  verticalAlign="top"
                  align="center"
                  iconType="rect"
                />

                {/* GRADIENT */}
                <defs>
                  <linearGradient id="colorShipments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A77D2" stopOpacity={0.95} />
                    <stop offset="95%" stopColor="#4527A0" stopOpacity={0.85} />
                  </linearGradient>
                </defs>

                {/* BAR */}
                <Bar
                  dataKey="shipments"
                  fill="url(#colorShipments)"
                  radius={[10, 10, 0, 0]}
                  barSize={80}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>



        {/* Center - Search bar */}
        <div className="flex justify-center mx-auto items-center  rounded-lg px-3 py-3 border lg:w-1/2 w-full ">
          <FaSearch className="text-gray-400 mr-2" />
          <input onChange={handleSearch}
            type="text"
            placeholder="Search Shipments by any field..."
            value={searchText}
            className="bg-transparent outline-none w-full text-gray-600"
          />
        </div>


        {/* shipment cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-5 lg:p-7 p-0">
          {
            shipments.map((cart) => (
              <div className="border border-gray-300 shadow-xl rounded-xl py-4 px-5 " key={cart.id}>
                <div className="mb-4">
                  <select
                    value={cart.status}
                    onChange={(e) => handleStatusChange(cart.id, e.target.value)}
                    className="border rounded-md px-3 py-1 outline-none">
                    <option value="Pending" >Status</option>
                    <option value="Pending" >Pending</option>
                    <option value="Fulfilled" >Fulfilled</option>
                  </select>
                </div>

                <h1 className="text-3xl font-semibold text-[#1A77D2]  mb-3">{cart.h1}</h1>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Customer ID: <span className='text-gray-600 font-normal'>{cart.customer}</span></h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Service: <span className='text-gray-600 font-normal'>{cart.service}</span> </h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Receiver: <span className='text-gray-600 font-normal'>{cart.receiver}</span></h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Address: <span className='text-gray-600 font-normal'>{cart.address}</span></h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">City: <span className='text-gray-600 font-normal'>{cart.city}</span></h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Country: <span className='text-gray-600 font-normal'>{cart.country}</span></h3>
                <h3 className="text-[#1A77D2] font-semibold mb-1">Postal Code: <span className='text-gray-600 font-normal'>{cart.postal}</span></h3>


              </div>
            ))
          }
        </div>





      </div>
    </>
  )
}

export default Shipments