import React from 'react'
import Sidebar from '../Components/Common/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-screen h-screen overflow-hidden'>
        <div className='w-full max-h-full flex flex-row justify-between overflow-hidden'>
            <Sidebar/>
            <div className='w-full max-h-full'>
                <div className='w-full h-full overflow-auto'>
                  <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard