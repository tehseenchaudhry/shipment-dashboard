import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import EditInvoice from './EditInvoice';




const invoices = [
  { id: "INV-0001", customer: "John Doe", service: "Express", receiver: "John Doe", address: "597 Example St", city: "New York", amount: "$195", type: "Shipping Fee" },
  { id: "INV-0002", customer: "Alice Smith", service: "Standard", receiver: "Alice Smith", address: "954 Example St", city: "Chicago", amount: "$210", type: "Customs" },
  { id: "INV-0003", customer: "Michael Lee", service: "Economy", receiver: "Michael Lee", address: "415 Example St", city: "Los Angeles", amount: "$60", type: "Insurance" },
  { id: "INV-0004", customer: "Emma Johnson", service: "Express", receiver: "Emma Johnson", address: "713 Example St", city: "San Francisco", amount: "$92", type: "Shipping Fee" },
  { id: "INV-0005", customer: "John Doe", service: "Standard", receiver: "John Doe", address: "968 Example St", city: "New York", amount: "$131", type: "Customs" },
  { id: "INV-0006", customer: "Alice Smith", service: "Economy", receiver: "Alice Smith", address: "908 Example St", city: "Chicago", amount: "$62", type: "Insurance" },
  { id: "INV-0007", customer: "Michael Lee", service: "Express", receiver: "Michael Lee", address: "378 Example St", city: "Los Angeles", amount: "$159", type: "Shipping Fee" },
  { id: "INV-0008", customer: "Emma Johnson", service: "Standard", receiver: "Emma Johnson", address: "957 Example St", city: "San Francisco", amount: "$221", type: "Customs" },
  { id: "INV-0009", customer: "John Doe", service: "Economy", receiver: "John Doe", address: "405 Example St", city: "New York", amount: "$101", type: "Insurance" },
  { id: "INV-0010", customer: "Alice Smith", service: "Express", receiver: "Alice Smith", address: "824 Example St", city: "Chicago", amount: "$238", type: "Shipping Fee" },
  { id: "INV-0011", customer: "Michael Lee", service: "Standard", receiver: "Michael Lee", address: "440 Example St", city: "Los Angeles", amount: "$175", type: "Customs" },
  { id: "INV-0012", customer: "Emma Johnson", service: "Economy", receiver: "Emma Johnson", address: "900 Example St", city: "San Francisco", amount: "$178", type: "Insurance" },
  { id: "INV-0013", customer: "John Doe", service: "Express", receiver: "John Doe", address: "272 Example St", city: "New York", amount: "$207", type: "Shipping Fee" },
  { id: "INV-0014", customer: "Alice Smith", service: "Standard", receiver: "Alice Smith", address: "92 Example St", city: "Chicago", amount: "$164", type: "Customs" },
  { id: "INV-0015", customer: "Michael Lee", service: "Economy", receiver: "Michael Lee", address: "376 Example St", city: "Los Angeles", amount: "$78", type: "Insurance" },
];
const Invoices = () => {

  const [searchText, setSearchText] = useState('');
  const [invoice, setInvoice] = useState(invoices);
  


  // searchbar
  const handleSearch = (e) => {
    const value = e.target.value.toUpperCase();
    setSearchText(value);

    const filtered = invoices.filter((item) => {

      return item.id.toUpperCase().includes(value)
    })
    setInvoice(filtered);
  }



  // edit
  const [showEdit, setShowEdit] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);


  const handleEdit = (inv) => {
    setSelectedInvoice(inv);
    setShowEdit(true);
  };

  // const handleEdit=()=>{

  // }
  const handleDelete = (inv) => {
    const updatedInvoice = invoice.filter((item) => {
      return item.id != inv.id
    })
    setInvoice(updatedInvoice);

  }

  return (
    <>
      <div className="p-6 space-y-6   w-full lg:mt-20    lg:ml-[21%] mt-30">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#1A77D2] text-center">Invoices Management Dashboard</h1>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className=" shadow-md rounded-lg p-5  bg-blue-200/30">
            <h3 className="text-gray-500">Total Invoices</h3>
            <p className="text-2xl font-bold text-blue-500">15</p>
          </div>
          <div className="bg-green-200/30 shadow-md rounded-lg p-5 ">
            <h3 className="text-gray-500">Total Expense</h3>
            <p className="text-2xl font-bold text-green-500">$1953.00</p>
          </div>
          <div className="bg-red-300/20 shadow-md rounded-lg p-5 ">
            <h3 className="text-gray-500">Average Expense</h3>
            <p className="text-2xl font-bold text-red-500">$130.20</p>
          </div>
        </div>


        {/* Center - Search bar */}
        <div className="flex lg:flex-row flex-col justify-between px-6">
          <div className="flex justify-center items-center  rounded-lg px-3 py-3 border lg:w-1/4 mb-2 ">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search invoices..."
              value={searchText}
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>

          {/* button */}
          <div className="flex  gap-2 items-center justify-center">
            <button className='bg-blue-500 px-2  rounded-lg flex justify-center items-center h-10  gap-2 text-white font-semibold'><FaPlus className=' text-white font-semibold' /><span>Add Invoice</span></button>
            <button className='bg-purple-500 px-2   rounded-lg flex justify-center items-center h-10 gap-2 text-white font-semibold'><LuDownload className=' text-white font-semibold' /><span>Export</span></button>
          </div>
        </div>


        <div className="hidden md:block overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse text-sm text-left ">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="p-3">Invoice #</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Service</th>
                <th className="p-3">Receiver</th>
                <th className="p-3">Address</th>
                <th className="p-3">City</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoice.map((inv, idx) => (
                <tr key={idx} className="bg-white border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="p-4 text-blue-600">{inv.id}</td>
                  <td className="p-4">{inv.customer}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">{inv.service}</span>
                  </td>
                  <td className="p-4">{inv.receiver}</td>
                  <td className="p-4">{inv.address}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-sm rounded-full bg-purple-100 text-purple-700">{inv.city}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-blue-600 font-medium">{inv.type} {inv.amount}</span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button onClick={() => handleEdit(inv)} className="text-blue-500 bg-blue-200 h-6 w-6 rounded flex justify-center items-center"><MdOutlineEdit className='text-lg' /></button>
                    {showEdit && (
                      <EditInvoice
                        setShowEdit={setShowEdit}
                        invoice={selectedInvoice}
                        setInvoice={setInvoice}
                      />
                    )}
                    <button onClick={() => handleDelete(inv)} className="text-red-500 bg-red-200 h-6 w-6 rounded flex justify-center items-center"><RiDeleteBinLine className='text-lg' /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4 ">
          {invoice.map((inv, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-semibold">{inv.id}</span>
                <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">{inv.service}</span>
              </div>
              <p><span className="font-semibold">Customer:</span> {inv.customer}</p>
              <p><span className="font-semibold">Receiver:</span> {inv.receiver}</p>
              <p><span className="font-semibold">Address:</span> {inv.address}</p>
              <p><span className="font-semibold">City:</span> {inv.city}</p>
              <div className="flex justify-between border-t">
              <p className='flex flex-col '><span className="font-semibold text-gray-400">Amount:</span> <span className="text-blue-600 font-medium"> {inv.amount}</span></p>
              <div className="flex gap-2 mt-2">
                <button 
                onClick={() => handleEdit(inv)}
                 className="  px-2 py-1  text-blue-500   flex justify-center items-center"><MdOutlineEdit
                 className='text-2xl' /></button>
                  {showEdit && (
                      <EditInvoice
                        setShowEdit={setShowEdit}
                        invoice={selectedInvoice}
                        setInvoice={setInvoice}
                      />
                    )}
                <button
                onClick={() => handleDelete(inv)}
                 className="text-red-500  px-2 py-1  flex justify-center items-center"><RiDeleteBinLine className='text-2xl' /></button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Invoices