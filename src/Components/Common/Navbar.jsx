import React from 'react'
import { BiSolidBell } from 'react-icons/bi';
import { IoIosContact } from 'react-icons/io';
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {user} = useSelector((state) => state.auth);

  return (
    <div className='w-full h-[4rem] border-b border-b-dark bg-lightGray text-dark font-michroma'>
        <div className='w-full flex p-2 flex-row justify-between'>
            <div className='flex flex-col'>
                <p className='text-dark font-semibold text-lg'>Welcome👋</p>
                <p className='text-sm'>CHANDAN THAKUR</p>
            </div>
            <div className='flex flex-row items-center justify-center pr-3 gap-5'>
                <button className='btn btn-outline btn-sm text-dark flex flex-row items-center'><IoIosContact className='text-xl'/>Contact</button>
                <button className='btn btn-outline btn-sm text-dark flex flex-row items-center'><BiSolidBell className='text-xl'/>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar