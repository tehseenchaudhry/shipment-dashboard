import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";


const TrackingUpdate = [
  {
    id: "Ship001",
    from: "London",
    to: "Paris",
    status: "In Transit",
    eta: "5 hrs",
    img: "/traking-img1.jpg",
  },
  {
    id: "Ship002",
    from: "Berlin",
    to: "Rome",
    status: "Delivered",
    eta: "Reached",
    img: "/traking-img2.jpg",
  },
  {
    id: "Ship003",
    from: "New York",
    to: "Los Angeles",
    status: "Not Sent",
    eta: "-",
    img: "/traking-img3.jpg",
  },
  {
    id: "Ship004",
    from: "Dubai",
    to: "Istanbul",
    status: "In Transit",
    eta: "12 hrs",
    img: "/traking-img4.jpg",
  },
];

// graph
const data = [
  { day: "Mon", blue: 2, yellow: 1, status: "Delivered - In Transit Mon" },
  { day: "Tue", blue: 3, yellow: 2, status: "Delivered - In Transit Tue" },
  { day: "Wed", blue: 4, yellow: 2, status: "Delivered - In Transit Wed" },
  { day: "Thu", blue: 5, yellow: 3, status: "Delivered - In Transit Thu" },
  { day: "Fri", blue: 6, yellow: 1, status: "Delivered - In Transit Fri" },
];


const TrackingUpdates = () => {

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600";
      case "Not Sent":
        return "text-red-600";
      default:
        return "text-orange-500";
    }
  };




  //  CUSTOM TOOLTIP 
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border shadow-md rounded-md px-3 py-2 text-sm">
          <p className="font-semibold text-gray-800">
            {payload[0].payload.status}
          </p>
          <p className="text-gray-500">{label}</p>
        </div>
      );
    }
    return null;
  };


  const [searchText, setSearchText] = useState('');
  const [tracking, setTracking] = useState(TrackingUpdate);


  const hanldleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = TrackingUpdate.filter((item) => {
      return item.id.toLowerCase().includes(value)
    })
    setTracking(filtered)
  }



  return (
    <>
      <div className="lg:p-6 space-y-6 lg:px-6  px-0 bg-gray-100  lg:mt-20   w-full lg:ml-[20%] mt-36 mb-5">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#1A77D2] text-center">Shipment Tracking Dashboard</h1>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center">
          <div className=" shadow-md rounded-lg p-5  bg-blue-200/30">
            <h3 className="text-gray-500 text-lg">Total Shipments</h3>
            <p className="text-2xl font-bold text-blue-500">4</p>
          </div>
          <div className="bg-green-200/30 shadow-md rounded-lg p-5 ">
            <h3 className="text-gray-500 text-lg">Delivered</h3>
            <p className="text-2xl font-bold text-green-500">1</p>
          </div>
          <div className="bg-yellow-300/20 shadow-md rounded-lg p-5 ">
            <h3 className="text-gray-500 text-lg">In Transit</h3>
            <p className="text-2xl font-bold text-yellow-500">2</p>
          </div>
        </div>





        <div className="w-full h-[400px] bg-white rounded-xl shadow-lg mt-10 p-6 pb-16">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Shipment Trends (Weekly)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, bottom: 20, left: 10 }}
            >
              {/* GRID */}
              <CartesianGrid stroke="#e5e7eb" />

              {/* X AXIS */}
              <XAxis
                dataKey="day"
                tick={{ fill: "#666", fontSize: 15 }}
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
              />

              {/* Y AXIS */}
              <YAxis
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
                tick={{ fill: "#666", fontSize: 12 }}
                axisLine={{ stroke: "#666" }}
                tickLine={{ stroke: "#666" }}
              />

              {/* TOOLTIP */}
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "#ccc", strokeWidth: 1 }}
              />

              {/* BLUE LINE */}
              <Line
                type="monotone"
                dataKey="blue"
                stroke="#1E88E5"
                strokeWidth={3}
                dot={{
                  r: 3,
                  stroke: "#1E88E5",
                  strokeWidth: 3,
                  fill: "#fff",
                }}
                activeDot={{
                  r: 4,
                  fill: "#1E88E5",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />

              {/* YELLOW LINE */}
              <Line
                type="monotone"
                dataKey="yellow"
                stroke="#FFB300"
                strokeWidth={3}
                dot={{
                  r: 3,
                  stroke: "#FFB300",
                  strokeWidth: 3,
                  fill: "#fff",
                }}
                activeDot={{
                  r: 4,
                  fill: "#FFB300",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>





        {/* Center - Search bar */}
        <div className="flex justify-center mx-auto items-center bg-white  rounded-lg px-3 py-2 mt-15 mb-3  lg:w-1/2 ">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            onChange={hanldleSearch}
            type="text"
            placeholder="Search  by Invoice ID or Route... "
            value={searchText}
            className="bg-transparent outline-none w-full text-gray-600"
          />
        </div>




        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-lg lg:p-6 p-4">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Shipments Tracking Details
            </h1>

            {/* Table */}
            <table className="hidden lg:table lg:w-full">
              {/* Head */}
              <thead className="bg-gray-200 text-gray-800 ">
                <tr className="text-left">
                  <th className="p-2">Map</th>
                  <th className="p-2">Shipment ID</th>
                  <th className="p-2">From</th>
                  <th className="p-2">To</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">ETA</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {tracking.map((ship, index) => (
                  <tr key={index} className="border-b ">
                    {/* Map Image */}
                    <td className="p-3">
                      <img
                        src={ship.img}
                        alt="map"
                        className="w-20 h-12 rounded-lg object-cover shadow"
                      />
                    </td>

                    {/* Shipment ID */}
                    <td className="p-3 font-semibold">{ship.id}</td>

                    {/* From */}
                    <td className="p-3">{ship.from}</td>

                    {/* To */}
                    <td className="p-3">{ship.to}</td>

                    {/* Status */}
                    <td className={`p-3 font-semibold ${statusColor(ship.status)}`}>
                      {ship.status}
                    </td>

                    {/* ETA */}
                    <td className="p-3">{ship.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>


            {/* Mobile Card Layout */}
            <div className="md:hidden flex flex-col gap-4">
              {tracking.map((ship, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg p- flex flex-col gap-2"
                >
                  <img
                    src={ship.img}
                    alt="map"
                    className="w-full h-32 rounded-lg object-cover mb-2"
                  />
                  <p><span className="font-semibold">Shipment ID:</span> {ship.id}</p>
                  <p><span className="font-semibold">From:</span> {ship.from}</p>
                  <p><span className="font-semibold">To:</span> {ship.to}</p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    <span className={statusColor(ship.status)}>{ship.status}</span>
                  </p>
                  <p><span className="font-semibold">ETA:</span> {ship.eta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>
    </>
  )
}

export default TrackingUpdates