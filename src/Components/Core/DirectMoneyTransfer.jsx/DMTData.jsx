import React from 'react'

const DMTData = ({dmtData,mobile,setModal}) => {
  return (
    <div className='w-full h-full'>
        <div className='w-full flex flex-col border border-gray-300'>
            <div className='border-b border-b-gray-300 p-2 flex flex-row justify-between items-center'>
              <p className='font-semibold'>User Accounts</p>
              {mobile && <button type='button' onClick={() => setModal(true)} className='btn btn-outline btn-sm'>Add more...</button>}
            </div>
            <div className='grid grid-cols-2 gap-4 p-3 overflow-auto'>
                {
                  dmtData
                  .filter(item => item.mobileNo === mobile)
                  .map((item,index) => (
                    <div key={index} className='w-full flex rounded-md font-semibold bg-[#F6F5F5] shadow-black shadow-sm p-4 flex-col gap-2'>
                      <p>Bank Holder: {item?.bankHolder}</p>
                      <p>IFSC Code: {item?.ifscCode}</p>
                      <p>MobileNo: {item?.mobileNo}</p>
                      <p>Account No: {item?.accountNo}</p>
                      <p>Bank Name: {item?.bankName}</p>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default DMTData