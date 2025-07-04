import React from 'react'
import { RxCross1 } from 'react-icons/rx';

const AepsModal = ({aepsModalData,setAepsModalData}) => {

    const todayDate = Date.now();
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const handleDownload = () => {
        window.print();
    }

  return (
    <div className='fixed w-screen inset-0 z-[1000] font-michroma !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-full md:w-10/12 lg:w-1/2 mx-auto flex flex-col text-lg gap-4 py-5 px-5 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-custom_pink text-black'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='font-semibold text-green-500'>{aepsModalData.amount ? 'Payment Successful' : 'Details Fetched'}</p>
                <button type='button' className='text-black' onClick={() => setAepsModalData(null)}><RxCross1/></button>
            </div>
            <div className='w-full md:px-5 py-3'>
                <p className='w-full text-center border border-black p-2 uppercase font-semibold'>Summary</p>
                <div id='print-section' className='flex flex-col gap-4 border border-black p-5'>
                    {
                        aepsModalData?.customerName && (
                            <div className='flex flex-row justify-between'>
                                <p>Customer Name: </p>
                                <p>{aepsModalData?.customerName}</p>
                            </div>
                        )
                    }
                    {
                        aepsModalData?.aadharNo && (
                            <div className='flex flex-row justify-between'>
                                <p>Aadhaar Number: </p>
                                <p>{aepsModalData?.aadharNo}</p>
                            </div>
                        )
                    }
                    <div className='flex flex-row justify-between'>
                        <p>Mobile Number: </p>
                        <p>{aepsModalData?.mobileNo}</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Bank Name: </p>
                        <p>{aepsModalData?.bank?.value}</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Current Balance: </p>
                        <p>150000</p>
                    </div>
                    {
                        aepsModalData.amount && (
                            <div className='flex flex-row justify-between'>
                                <p>Commission: </p>
                                <p>0</p>
                            </div>
                        )
                    }
                    {
                        aepsModalData.amount && (
                            <>
                                <div className='flex flex-row justify-between'>
                                    <p>Transaction id: </p>
                                    <p>{todayDate}</p>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <p>Transaction Date: </p>
                                    <p>{todayString}</p>
                                </div>
                            </>
                        )
                    }
                    {
                        aepsModalData.amount && (
                            <div className='flex flex-row justify-between'>
                                <p>Withdrawal Amount: </p>
                                <p className='font-semibold text-success'>₹{aepsModalData?.amount}</p>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-row justify-end items-center mt-4 gap-4'>
                    <button type='button' className='btn btn-success text-white' onClick={handleDownload}>Print</button>
                    <button type='button' className='btn btn-outline text-black' onClick={() => setAepsModalData(null)}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AepsModal