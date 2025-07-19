import React, { useState, useRef } from 'react';
import { CgMenu } from 'react-icons/cg';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { sidebarLinks } from "../../Assets/SidebarLinks";
import { FaLongArrowAltRight } from 'react-icons/fa';
import * as Icons from 'react-icons/vsc';
import { matchPath, NavLink, useLocation, useNavigate } from 'react-router-dom';
import BankYouLogo from '../../Assets/Logos/Bank you logo.png';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Slices/authSlice';

const SmoothDetails = ({ summary, children, open, toggle }) => {
  const contentRef = useRef(null);
  console.log("Children -> ",children);
  return (
    <div className="w-full my-1 rounded font-michroma">
      <button
        className="w-full text-left py-2 rounded focus:outline-none flex justify-between items-center"
        onClick={toggle}
      >
        {summary}
      </button>
      {children && (
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: open ? contentRef.current?.scrollHeight : 0,
            opacity: open ? 1 : 0,
          }}
        >
          <div className="px-2 py-2 flex flex-col gap-2">{children}</div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();

  const sidebarClasses = `
    fixed z-40 top-0 left-0 h-screen w-[16rem] bg-richblack-800 border-r text-richblack-5 flex flex-col gap-7
    transition-transform duration-300 bg-custom_pink text-black border-r border-r-lightGray
    font-michroma overflow-auto
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    md:static md:translate-x-0 md:w-[20rem]`

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);
  const matchParentRoute = (route) => {
    const str = location.pathname.split("/").at(1);
    return matchPath({ path: route }, "/".concat(str));
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-gradient-to-r from-neutral-900 to-pink-600 p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open sidebar"
      >
        <CgMenu className="text-2xl text-white" />
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-lightGray bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={sidebarClasses}>
        <div className='w-full flex flex-row justify-between items-center px-2.5 py-[0.73rem] border-b border-b-black'>
          <img src={BankYouLogo} alt='companyLogo' className='object-cover w-44' />
          <button type='button' onClick={() => {dispatch(setUser(false)); localStorage.removeItem("user")}} className='btn btn-sm btn-circle btn-error text-white text-lg'><RiLogoutCircleLine /></button>
        </div>

        <div className='w-full overflow-auto flex flex-col'>
          <p className='px-3 text-black'>Services</p>
          <div className='w-full mt-4 overflow-y-auto overflow-x-hidden text-black md:text-lg self-start flex flex-col gap-3 flex-1'>
            {
              sidebarLinks && sidebarLinks.map((sidebarLink) => {
                const Icon = Icons[sidebarLink?.icon];
                const isOpen = openIndex === sidebarLink?.id;

                return (
                  <SmoothDetails
                    key={sidebarLink?.id}
                    summary={
                      <div className={`${matchParentRoute(sidebarLink?.path) ? 'bg-gradient-to-r from-neutral-900 to-pink-700 rounded-r-full py-2 text-white w-full' : ''} pl-2 flex flex-row items-center gap-2`} onClick={() => {!sidebarLink?.expansion && navigate(`${sidebarLink?.path}`)}}>
                        {Icon && <Icon className='text-lg' />}
                        <p className={`${matchParentRoute(sidebarLink?.path) ? 'text-white' : 'bg-gradient-to-r from-neutral-900 to-pink-600 bg-clip-text text-transparent hover:text-black'}`}>{sidebarLink?.name}</p>
                        {sidebarLink?.expansion && <FaLongArrowAltRight className={`text-sm transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`} />}
                      </div>
                    }
                    open={isOpen}
                    toggle={() => setOpenIndex(isOpen ? null : sidebarLink?.id)}
                  >
                    {
                      sidebarLink?.expansion && (
                        sidebarLink?.expansion.map((expansionLink) => {
                          const Icon = Icons[expansionLink?.icon];
                          return (
                            <NavLink to={expansionLink?.path} key={expansionLink?.id} className={`${matchRoute(expansionLink?.path) ? 'bg-gradient-to-r from-neutral-900 to-pink-700 rounded-full' : ''} flex flex-row text-sm py-2 items-center gap-2 pl-5`}>
                              {Icon && <Icon className={`text-lg ${matchRoute(expansionLink?.path) ? 'text-white' : ''}`} />}
                              <p className={`${matchRoute(expansionLink?.path) ? 'text-white' : 'bg-gradient-to-r from-neutral-900 to-pink-600 bg-clip-text text-transparent hover:text-black transition-all duration-100'}`}>{expansionLink?.name}</p>
                            </NavLink>
                          );
                        })
                      )
                    }
                  </SmoothDetails>
                );
              })
            }
            <div className='w-full p-2 flex flex-col gap-2 bg-custom_pink text-black rounded-md'>
              <p className='font-semibold'>Need support</p>
              <p className='text-sm'>Connect with one of our expert support</p>
              <button type='button' className='w-full btn btn-error text-white'>Log out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
