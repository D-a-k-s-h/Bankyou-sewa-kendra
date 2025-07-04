import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import RecentTransactions from '../../Components/Common/RecentTransactions'
import { Controller, set, useForm } from 'react-hook-form'
import Select from 'react-select'
import ScannerModal from '../../Components/Core/Aeps Service/ScannerModal'
import RechargeSummary from '../../Components/Common/RechargeSummary'
import AepsModal from '../../Components/Core/Aeps Service/AepsModal'

const AEPSService = () => {

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm();

    const [serviceType,setServiceType] = useState(null);
    const [scannerModal,setScannerModal] = useState(false);
    const [billData,setBillData] = useState(null);
    const [aepsModalData,setAepsModalData] = useState(null);

    const bankOptions = [
        { value: "Indian Bank", label: "Indian Bank" },
        { value: "State Bank of India", label: "State Bank of India" },
        { value: "Canara Bank", label: "Canara Bank" },
        { value: "Punjab and Sind Bank", label: "Punjab and Sind Bank" }
    ];

    const serviceTypeOptions = [
        { value: "Withdrawal", label: "Withdrawal" },
        { value: "Bank Inquiry", label: "Bank Inquiry" },
        { value: "Mini Statement", label: "Mini Statement" },
    ];

    const submitHandler = async(data) => {
        console.log("AEPS DATA -> ",data);

        setScannerModal(true);
        setBillData(data);

        reset();
    }

  return (
    <div className='w-full h-full pb-10 overflow-auto text-black bg-lightGray'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4'>
            <p className='px-5 py-4'>Home / neo bank / <span className='font-semibold'>Domestic Money Transfer</span></p>

            {/* CONTENT */}
            <div className='w-full flex p-4 flex-col lg:flex-row gap-5 lg:gap-2 items-start'>
                <div className='w-full flex flex-col'>
                    <div className='w-full border p-2'>
                        <p className='w-fit border-b-4 border-black'>Aeps Service</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className='border p-2 flex flex-col gap-3'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor='aadharNo'>Aadhaar No<sup className='text-error'>*</sup></label>
                            <input
                                name='aadharNo'
                                placeholder='Enter aadhar no'
                                className='p-2 text-black border border-gray-400 rounded-md'
                                {...register("aadharNo",{required:"Aadhaar no is required"})}
                                required
                                type='number'
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='bank'>Select bank<sup className='text-error'>*</sup></label>
                            <Controller
                                name="bank"
                                control={control}
                                defaultValue={null}
                                rules={{ required: 'Bank is required' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isClearable
                                        isSearchable
                                        options={bankOptions}
                                        className='text-black rounded-md w-full'
                                    />
                                )}
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='mobileNo'>Mobile No<sup className='text-error'>*</sup></label>
                            <input
                                name='mobileNo'
                                type='tel'
                                placeholder='Enter mobile no'
                                className='p-2 text-black border border-gray-400 rounded-md'
                                {...register("mobileNo",{required:"Mobile no is required"})}
                                required
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='serviceType'>Service type<sup className='text-error'>*</sup></label>
                            <Controller
                                name="serviceType"
                                control={control}
                                defaultValue={null}
                                rules={{ required: 'Service type is required' }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isClearable
                                        isSearchable
                                        options={serviceTypeOptions}
                                        className='text-black rounded-md w-full'
                                        onChange={(e) => { 
                                            field.onChange(e);
                                            setServiceType(e ? e.value : "");
                                        }}
                                    />
                                )}
                            />
                        </div>

                        {
                            serviceType === "Withdrawal" && (
                                <div className='w-full flex flex-col'>
                                    <label htmlFor='amount'>Amount<sup className='text-error'>*</sup></label>
                                    <input
                                        name='amount'
                                        placeholder='Enter amount for withdrawal'
                                        type='number'
                                        {...register("amount",{required:'Amount is required'})}
                                        required
                                        className='p-2 border border-gray-400 rounded-md'
                                    />
                                </div>
                            )
                        }

                        <div className='w-full flex flex-row gap-3 mt-2'>
                            <button type='submit' className='btn btn-success text-white'>Proceed to fingerprint verification</button>
                            <button type='reset' className='btn btn-outline' onClick={() => reset()}>Cancel</button>
                        </div>
                    </form>
                </div>
                <RecentTransactions/>
            </div>
        </div>
        {scannerModal && <ScannerModal setScannerModal={setScannerModal} setAepsModalData={setAepsModalData} billData={billData}/>}
        {aepsModalData && <AepsModal aepsModalData={aepsModalData} setAepsModalData={setAepsModalData}/>}
    </div>
  )
}

export default AEPSService