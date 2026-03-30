import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <>
    
    
    <div className='flex'>
        <Navbar/>
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard