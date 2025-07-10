import React, { useState } from 'react'
import gif from '../../../Assets/Animation - 1751626016054.gif';

const ScannerModal = ({setScannerModal,billData,setAepsModalData}) => {

    const [isScanning,setIsScanning] = useState(false);
    const [status,setStatus] = useState("Scanning...");

    const handleScanning = () => {
        setIsScanning(true);

        setTimeout(() => {
            setIsScanning(false);
            setScannerModal(false);
            setAepsModalData({
                bank: billData?.bank,
                mobileNo: billData?.mobileNo,
                aadharNo: billData?.aadharNo,
                amount: billData?.amount
            });
        },6000);

        setTimeout(() => {
           setStatus("Fingerprint captured ✅");
        },4000);
    }
 
  return (
    <div className='fixed w-screen inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-full md:w-10/12 lg:w-1/2 mx-auto flex flex-col text-lg gap-4 py-5 px-4 md:px-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-custom_pink text-black'>
            <div className='w-full flex justify-center items-center'>
                {
                    isScanning ? (
                        <div className='w-full flex flex-col gap-4 justify-center items-center'>
                            <p className='font-semibold'>Please keep thumb on scanner</p>
                            <img src={gif} alt='fingerprintScanning...' className='w-32 h-32'/>
                            <p>Status: <span className={`${status === "Scanning..." ? 'text-error' : 'text-success'}`}>{status}</span></p>
                        </div>
                    ) : (
                        <div className='w-full flex flex-col gap-3 justify-center items-center'>
                            <p>Device status: <span className='text-success'>Connected</span></p>
                            <div className='flex flex-row gap-4'>
                                <button className='btn btn-success text-white' onClick={handleScanning}>Capture Fingerprints</button>
                                <button className='btn btn-outline' onClick={() => setScannerModal(false)}>Cancel</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ScannerModal