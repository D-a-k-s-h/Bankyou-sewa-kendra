import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { CiCreditCard1, CiMobile3 } from 'react-icons/ci'
import RecentTransactions from '../../Components/Common/RecentTransactions'
import BillFetch from '../../Components/Common/BillFetch'
import RechargeSummary from '../../Components/Common/RechargeSummary'

const CreditCardBill = () => {

    const {
        register,
        control,
        reset,
        handleSubmit
    } = useForm();

    const [billDetails, setBillDetails] = useState(null);
    const [rechargeSummary, setRechargeSummary] = useState(null);

    const operatorOptions = [
        { value: "Visa", label: "Visa" },
        { value: "MasterCard", label: "MasterCard" },
        { value: "American Express", label: "American Express" },
        { value: "Discover", label: "Discover" }
    ];

    const submitHandler = async (data) => {
        console.log("CREDIT CARD BILL DATA -> ", data);

        setBillDetails({
            operator: data.operator,
            cardNo: data.cardNo,
            mobileNo: data.mobileNo
        });
        
        reset();
    };

  return (
    <div className='w-full h-full flex flex-col overflow-auto pb-10 bg-lightGray text-black'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4'>
            <p className='px-5 py-4'>Home / <span className='font-semibold'>Bill Payment</span></p>

            {/* CONTENT */}
            <div className='w-full flex flex-row gap-5 items-start p-4'>
                <div className='w-full flex flex-col gap-4'> 
                    <div className='w-full flex flex-row gap-5 border border-gray-300 p-3'>
                        <p className={`font-semibold border-b-4 border-b-black cursor-pointer`}>Credit Card Bill</p>    
                    </div>
                    <div className='w-full p-3 border border-gray-300'>
                        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
                            <div className='flex flex-col'>
                                <label htmlFor='operator'>Select Operator<sup className='text-error'>*</sup></label>
                                <Controller
                                    name="operator"
                                    control={control}
                                    defaultValue={null}
                                    rules={{ required: 'Operator is required' }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isClearable
                                            isSearchable
                                            options={operatorOptions}
                                            className='text-black rounded-md w-full'
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex flex-col relative'>
                                <label htmlFor='cardNo'>Card Number<sup className='text-error'>*</sup></label>
                                <input 
                                    type='number' 
                                    id='cardNo' 
                                    {...register('cardNo', { required: 'Card Number is required' })} 
                                    className='p-2 bg-white text-black border border-gray-300 rounded-md pl-8 w-full' 
                                    placeholder='Enter Card Number'
                                />
                                <CiCreditCard1 className='absolute left-2 top-[2.2rem] text-xl'/>
                            </div>

                            <div className='flex flex-col relative'>
                                <label htmlFor='mobileNo'>Mobile No<sup className='text-error'>*</sup></label>
                                <input
                                    name='mobileNo'
                                    className='p-2 pl-7 rounded-md border border-gray-300 text-black bg-white'
                                    placeholder='Enter mobile no'
                                    {...register('mobileNo',{required:true})}
                                    type='tel'
                                    required
                                />
                                <CiMobile3 className='absolute top-[2.35rem] left-2'/>
                            </div>

                            <div className='w-full flex flex-row gap-4'>
                                <button type='submit' className='btn btn-success text-white'>Bill Fetch</button>
                                <button type='reset' className='btn btn-outline' onClick={() => reset()}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <RecentTransactions/>
            </div>
        </div>
        {billDetails && <BillFetch billDetails={billDetails} setBillDetails={setBillDetails} setRechargeSummary={setRechargeSummary}/>}
        {rechargeSummary && <RechargeSummary rechargeSummary={rechargeSummary} setRechargeSummary={setRechargeSummary}/>}
    </div>
  )
}

export default CreditCardBill