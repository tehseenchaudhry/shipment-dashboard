import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const EditInvoice = ({ setShowEdit, invoice, setInvoice }) => {

  const [formData, setFormData] = useState(invoice)

  const handlechange = (e) => {
    const { value, name } = e.target

    console.log(name, value);

    setFormData((Data) => ({ ...Data, [name]: value }))
  }

  useEffect(() => {
    setFormData(invoice);
  }, [invoice]);



  const handleSubmit = (e) => {
    e.preventDefault();

    setInvoice((prev) =>
      prev.map((item) =>
        item.id === formData.id ? formData : item
      )
    );

    setShowEdit(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
        <div className="w-full max-w-4xl rounded-xl bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Update Invoice {formData.id}
              </h2>

              {/* React Icon */}
              <button
                className="text-gray-400 hover:text-gray-600"
              >

                <RxCross1 size={20} onClick={() => setShowEdit(false)} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* <form  className="space-y-4"> */}

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="customer"
                    value={formData.customer}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  >
                    <option value="">Select Service</option>
                    <option value="Express">Express</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Receiver Name *
                  </label>
                  <input
                    type="text"
                    name="receiver"
                    value={formData.receiver}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  >
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Expense Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  >
                    <option value="">Select Type</option>
                    <option value="Shipping Fee">Shipping Fee</option>
                    <option value="Handling">Handling</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Amount ($) *
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handlechange}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:border-blue-500 outline-none"
                  />
                </div>


              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t px-6 py-4">
              <button onClick={() => setShowEdit(false)}
                className="rounded-lg border px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type='submit'
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm text-white hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditInvoice