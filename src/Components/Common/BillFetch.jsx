import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const BillFetch = ({billDetails,setBillDetails,setRechargeSummary}) => {

    const todayDate = new Date().getTime();
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const handlePayment = () => {
        // Logic to handle payment
        console.log("Payment initiated for bill:", billDetails);

        setRechargeSummary({
            customerName: "Chandan",
            mobileNo: billDetails?.mobileNo,
            operator: billDetails?.operator,
            accountNo: billDetails?.mobileNo,
            cardNo: billDetails?.cardNo,
            amount: 100
        });

        setBillDetails(null);
    }

  return (
    <div className='fixed w-screen inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-1/2 mx-auto flex flex-col text-lg gap-4 py-5 px-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-custom_pink text-black'>
            <div className='w-full flex flex-row items-center justify-between'>
                <p className='font-semibold text-green-500'>Bill Fetched Successfully</p>
                <button type='button' className='text-black' onClick={() => setBillDetails(null)}><RxCross1/></button>
            </div>
            <div className='w-full px-5 py-3'>
                <p className='w-full text-center border border-black p-2 uppercase font-semibold'>Bill Summary</p>
                <div id='print-section' className='flex flex-col gap-4 border border-black p-5'>
                    <div className='flex flex-row justify-between'>
                        <p>Customer Name: </p>
                        <p>Chandan</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Mobile Number: </p>
                        <p>{billDetails?.mobileNo}</p>
                    </div>
                    {
                        billDetails?.cardNo && (
                            <div className='flex flex-row justify-between'>
                                <p>Card Number: </p>
                                <p>{billDetails?.cardNo}</p>
                            </div>
                        )
                    }
                    <div className='flex flex-row justify-between'>
                        <p>Bill Amount: </p>
                        <p className='font-semibold text-success'>₹100</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Bill No: </p>
                        <p>{todayDate}</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>req id: </p>
                        <p>{todayDate}</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Biller Response: </p>
                        <p>billerResponse</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Due Date: </p>
                        <p>{todayString}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-end items-center mt-4 gap-4'>
                    <button type='button' className='btn btn-success text-white' onClick={handlePayment}>Pay Now</button>
                    <button type='button' className='btn btn-outline text-black' onClick={() => setBillDetails(null)}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BillFetch