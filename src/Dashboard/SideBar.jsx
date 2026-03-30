import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdPayment } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { RiBarChartFill } from "react-icons/ri";
import { BsCCircle } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineBars } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

const menuItems = [
    { id: 1, name: "Analysis", icon: <FiHome className="text-yellow-300" />, route: "." },
    { id: 2, name: "Shipments", icon: <IoCubeOutline className="text-green-300" />, route: "shipments" },
    { id: 3, name: "Invoices", icon: <LiaFileInvoiceSolid className="text-pink-400" />, route: "invoices" },
    { id: 4, name: "Payments", icon: <MdPayment className="text-orange-400" />, route: "payments" },
    { id: 5, name: "Tracking Updates", icon: <FaCog className="text-blue-500" />, route: "tracking" },
    { id: 6, name: "User", icon: <LuUsers className="text-pink-400" />, route: "user" },
    { id: 7, name: "Report", icon: <RiBarChartFill className="text-purple-400" />, route: "report" },
];

const SideBar = () => {
    const [icon, setIcon] = useState(false)


    return (
        <>
            {/* Hamburger button */}
            <div
                className="fixed top-5  z-50 text-white bg-blue-800 p-4 rounded-b md:hidden mt-13 w-full">
                {icon ===false ?
                    <AiOutlineBars onClick={() => setIcon(!icon)} className="text-3xl"/> :
                     <RxCross1 onClick={() => setIcon(!icon)} className="text-3xl" />
                    }
            </div>

            <div className={`
        fixed top-0 left-0 h-full lg:w-[20%] bg-gradient-to-b from-blue-500 to-purple-700 text-white 
         transform transition-transform duration-300
        ${icon ? "translate-x-0 z-30 lg:mt-0 mt-24 " : "-translate-x-full "} md:translate-x-0
      `}>


                {/* Logo */}
                <div className=" hidden lg:flex items-center  border-b border-white">
                    <h1 className="text-white text-xl font-bold p-3">Dashboard</h1>
                </div>

                {/* Menu Items */}
                <ul className="pt-8 pb-0">
                    {menuItems.map((menu, index) => (
                        <Link to={`/${menu.route}`} key={menu.id} onClick={() => setIsOpen(false)}>
                            <li className="flex items-center gap-x-4  rounded-md hover:bg-gray-50/10 text-white cursor-pointer mt-2  px-5 py-1">
                                <span className="text-xl">{menu.icon}</span>
                                <span className="text-md font-medium">{menu.name}</span>
                            </li>
                        </Link>
                    ))}

                    <li className="flex items-center  justify-center gap-x-1 p-3  text-white cursor-pointer  mt-44 pb-0 border-t pt-4">
                        <BsCCircle className="text-[12px]" />
                        <span className="text-[12px]">2025 Logistics System</span>
                    </li>


                </ul>

            </div>
        </>

    )
}

export default SideBar