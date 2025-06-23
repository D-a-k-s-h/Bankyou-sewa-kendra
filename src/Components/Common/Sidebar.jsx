import React, { useState } from 'react'
import { CgMenu } from 'react-icons/cg';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { sidebarLinks } from "../../Assets/SidebarLinks";
import { FaLongArrowAltRight } from 'react-icons/fa';
import * as Icons from 'react-icons/vsc'
import { matchPath, NavLink, useLocation, useNavigate } from 'react-router-dom';
import companyLogo from '../../Assets/company_logo.png';

const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);

    const sidebarClasses = `
        fixed z-40 top-0 left-0 h-screen w-[16rem] bg-richblack-800 border-r text-richblack-5 flex flex-col gap-7
        transition-transform duration-300
        bg-dark
        text-lightGray
        border-r border-r-lightGray
        font-michroma overflow-auto
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:w-[20rem]
    `;

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    const matchParentRoute = (route) => {
        const str = location.pathname.split("/").at(1);
        return matchPath({path:route}, "/".concat(str));
    }

  return (
    <>
        {/* Hamburger menu for mobile */}
        <button
            className="md:hidden fixed top-4 right-4 z-50 bg-green-300 p-2 rounded shadow"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Open sidebar"
        >
            <CgMenu className="text-2xl text-white" />
        </button>

        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && (
            <div
                className="fixed inset-0 bg-lightGray bg-opacity-40 z-30 md:hidden"
                onClick={() => setSidebarOpen(false)}
            />
        )}

        {/* Sidebar */}
        <div className={sidebarClasses}>
            <div className='w-full flex flex-row justify-between items-center px-2.5 py-[0.73rem] border-b border-b-lightGray'>
                {/* <p className='text-lg'><CgMenu className="block md:hidden" onClick={() => setSidebarOpen(false)} /></p> */}
                <img src={companyLogo} alt='companyLogo' className='object-cover aspect-square w-[12rem]  rounded-md h-10'/>
                <button type='button' className='btn btn-sm btn-circle btn-error text-white text-lg'><RiLogoutCircleLine /></button>
            </div>

            <div className='w-full overflow-auto flex flex-col'>
                <p className='px-3'>Services</p>
                <div className='w-full mt-4 overflow-y-auto overflow-x-hidden text-base md:text-lg self-start flex flex-col gap-3 flex-1'>
                    {
                        sidebarLinks && sidebarLinks.map((sidebarLink) => {
                            const Icon = Icons[sidebarLink?.icon];
                            return (
                                <details key={sidebarLink?.id} open={openIndex === sidebarLink?.id} onClick={e => {e.preventDefault(); setOpenIndex(openIndex === sidebarLink?.id ? null : sidebarLink?.id)}} className='group menu w-full border-b border-b-lightGray flex flex-col gap-2.5'>
                                    <summary className='flex flex-row justify-between items-center hover:text-error cursor-pointer transition-all duration-100'>
                                        <div className={`${matchParentRoute(sidebarLink?.path) ? 'text-error w-full' : ''} flex flex-row items-center gap-2`} onClick={() => {!sidebarLink?.expansion && navigate(`${sidebarLink?.path}`)}}>
                                            {Icon && <Icon className='text-lg'/>}
                                            {sidebarLink?.name}
                                        </div>
                                        {sidebarLink?.expansion && <FaLongArrowAltRight className='text-sm group-open:rotate-90 transition-all duration-300 justify-self-end'/>}
                                    </summary>
                                    <div className='flex flex-col gap-3'>
                                        {
                                            sidebarLink?.expansion && (
                                                sidebarLink?.expansion.map((expansionLink) => {
                                                    const Icon = Icons[expansionLink?.icon];
                                                    return (
                                                        <NavLink to={expansionLink?.path} key={expansionLink?.id} className='flex flex-row text-sm pb-2 items-center gap-2 pl-5 hover:text-error transition-all duration-200'>
                                                            {Icon && <Icon className={`text-lg ${matchRoute(expansionLink?.path) ? 'text-error' : ''}`}/>}
                                                            <p className={`${matchRoute(expansionLink?.path) ? 'text-error' : ''}`}>{expansionLink?.name}</p>
                                                        </NavLink>
                                                    )
                                                })
                                            )
                                        }
                                    </div>
                                </details>
                            )
                        })
                    }
                    <div className='w-full p-2 flex flex-col gap-2 bg-[#0e2945] text-lightGray rounded-md'>
                        <p className='font-semibold'>Need support</p>
                        <p className='text-sm'>Connect with one of our expert support</p>
                        <button type='button' className='w-full btn btn-error'>Log out</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Sidebar