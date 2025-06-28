import React from 'react'
import { BiSolidBell } from 'react-icons/bi';
import { IoIosContact } from 'react-icons/io';
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {user} = useSelector((state) => state.auth);

  return (
    <div className='w-full h-[4.15rem] border-b border-b-black bg-lightGray text-black font-michroma'>
        <div className='w-full flex p-2 flex-row gap-2 md:gap-0 md:justify-between'>
            <div className='flex flex-col'>
                <p className='font-semibold text-lg'>Welcome👋</p>
                <p className='text-sm'>CHANDAN THAKUR</p>
            </div>
            <div className='hidden md:flex flex-row items-center justify-center pr-3 gap-5'>
                <button className='btn btn-outline btn-sm flex flex-row items-center'><IoIosContact className='text-xl'/>Contact</button>
                <button className='btn btn-outline btn-sm flex flex-row items-center'><BiSolidBell className='text-xl'/>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar