import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import RecentTransactions from '../../Components/Common/RecentTransactions'
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { CiCreditCard1, CiMobile3 } from 'react-icons/ci';
import BillFetch from '../../Components/Common/BillFetch';
import RechargeSummary from '../../Components/Common/RechargeSummary';

const tabData = [
    {
        id: 1,
        name: "Electric Bill"
    },
    {
        id: 2,
        name: "Water Bill"
    },
    {
        id: 3,
        name: "Gas Bill"
    },
    {
        id: 4,
        name: "FastTag"
    },
    {
        id: 5,
        name: "Loan Payment"
    },
    {
        id: 6,
        name: "Post Paid"
    }
];

const BillPayment = () => {

    const [tab, setTab] = useState("Electric Bill");
    const [billDetails, setBillDetails] = useState(null);
    const [rechargeSummary, setRechargeSummary] = useState(null);

    const {
        register,
        control,
        reset,
        handleSubmit
    } = useForm();

    const operatorOptionsMap = {
        "Electric Bill": [
            { value: "Electricity Board", label: "Electricity Board" },
            { value: "PowerGrid", label: "PowerGrid" }
        ],
        "Water Bill": [
            { value: "City Water Supply", label: "City Water Supply" },
            { value: "Rural Water Board", label: "Rural Water Board" }
        ],
        "Gas Bill": [
            { value: "Gas Authority", label: "Gas Authority" },
            { value: "Natural Gas Co.", label: "Natural Gas Co." }
        ],
        "FastTag": [
            { value: "FastTag Corp", label: "FastTag Corp" },
            { value: "Highway FastTag", label: "Highway FastTag" }
        ],
        "Loan Payment": [
            { value: "Bank Loan", label: "Bank Loan" },
            { value: "NBFC Loan", label: "NBFC Loan" }
        ],
        "Post Paid": [
            { value: "Airtel", label: "Airtel" },
            { value: "Jio", label: "Jio" },
            { value: "Vi", label: "Vi" }
        ]
    };

    const operatorOptions = operatorOptionsMap[tab] || [];

    const submitHandler = async (data) => {
        //console.log("BILL PAYMENT DATA -> ", data);

        setBillDetails({
            operator: data.operator,
            accountNo: data.accountNo,
            mobileNo: data.mobileNo,
        });
        //fetch bill details based on operator and account number

        reset();
    }

  return (
    <div className='w-full h-full flex flex-col overflow-auto pb-10 bg-lightGray text-black'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4'>
            <p className='px-5 py-4'>Home / <span className='font-semibold'>Bill Payment</span></p>
            
            {/* CONTENT */}
            <div className='w-full flex flex-col lg:flex-row gap-5 items-start p-4'>
                <div className='w-full flex flex-col gap-4'> 
                    <div className='w-full flex flex-wrap flex-row gap-5 border border-gray-300 p-3'>
                        {
                            tabData.map((data) => (
                                <p className={`${tab === data.name ? 'font-semibold border-b-4 border-b-black' : 'text-gray-400'} cursor-pointer hover:text-gray-700 transition-all duration-100`} key={data.id} onClick={() => {setTab(data.name); reset();}}>{data.name}</p>
                            ))
                        }
                    </div>
                    <div className='w-full p-3 border border-gray-300'>
                        <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
                            <div className='flex flex-col'>
                                <label htmlFor='operator'>{`Select ${tab === 'Electric Bill' ? 'Electrical' : tab} Operator`}<sup className='text-error'>*</sup></label>
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
                                <label htmlFor='accountNo'>Account Number<sup className='text-error'>*</sup></label>
                                <input 
                                    type='text' 
                                    id='accountNo' 
                                    {...register('accountNo', { required: 'Account Number is required' })} 
                                    className='p-2 bg-white text-black border border-gray-300 rounded-md pl-8 w-full' 
                                    placeholder='Enter Account Number'
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
                                    maxLength={10}
                                    minLength={10}
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

export default BillPayment