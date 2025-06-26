import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

const resourcesData = [
  {
    id: 1,
    title: "BC Certificate",
    description: "BC Certificate is an official document issued by the bank or a financial institution authorizing an individual to act as a representative on its behalf."
  },
  {
    id: 2,
    title: "BC ID Card",
    description: "The Business Correspondent (BC) ID Card is an official identification issued by the bank or a financial institution to an authorized Business Correspondent."
  },
  {
    id: 3,
    title: "BC Authorization Letter",
    description: "The authorization letter is an official document issued by the bank or a financial institution formally authorizing an individual to operate as a business corespondent."
  },
  {
    id: 4,
    title: "Aeps Cash Register",
    description: "The AEPS Cash Register is a digital ledger or record-keeping system used by Business Correspondents (BCs) to track daily aadhar based cash transactions and balances."
  },
  {
    id: 5,
    title: "Store Branding",
    description: "Store branding refers to visual and thematic elements that represent a business promotional materials displayed at a business corespondent(BC) outlet to represent the affiliated bank or financial institution."
  },
  {
    id: 6,
    title: "Aeps Customer letter",
    description: "The AEPS Customer Letter is a formal communication sent to customers by the Business Correspondent(BC) or the bank, providing information about the AEPS services."
  }
];

const Resources = () => {
  return (
    <div className='w-full h-full overflow-auto bg-lightGray text-black font-michroma'>
      <Navbar/>
      <div className='w-full h-full flex flex-col gap-4'>
        <p className='px-5 pt-4'>Home / <span className='font-semibold'>Resources</span></p>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
          {
            resourcesData.map((resource) => (
              <div key={resource.id} className='w-full bg-white rounded-lg p-4 shadow-lg flex flex-col gap-5'>
                <p className='w-full font-semibold'>{resource.title}</p>
                <p className='w-full border p-4 text-gray-500 text-sm'>{resource.description}</p>
                <div className='w-full flex flex-row items-center gap-5 mt-2'>
                  <button type='button' className='w-full p-2 text-white bg-black rounded-md flex flex-row items-center justify-center gap-4'>Download <FaLongArrowAltUp/></button>
                  <button type='button' className='w-full p-2 text-black bg-custom_pink rounded-md flex flex-row items-center justify-center gap-3'><FaLongArrowAltDown/> View</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Resources