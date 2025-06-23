import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import RecentTransactions from '../../Components/Common/RecentTransactions';
import { LuIndianRupee } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import PlanModal from '../../Components/Common/PlanModal';
import { useLocation } from 'react-router-dom';
import RechargeSummary from '../../Components/Common/RechargeSummary';

const MobileRecharge = () => {

    const [tab, setTab] = useState("Mobile Recharge");
    const [planModal, setPlanModal] = useState(null);
    const [operatorName, setOpeatorName] = useState("");
    const [rechargeSummary,setRechargeSummary] = useState(null);
    
    const location = useLocation();
    const price = location?.state?.planObj?.planPrice;
    console.log("Price -> ",price);

    const{
        register,
        control,
        reset,
        handleSubmit
    } = useForm();

    const operatorOptions = [
        { value: "Airtel", label:"Airtel" },
        { value: "BSNL", label:"BSNL" },
        { value: "Jio", label:"Jio" },
        { value: "Vi", label:"Vi" }
    ]

    const submitHandler = async(data) => {
        console.log("MOBILE RECHARGE DATA -> ",data);

        setRechargeSummary(data);

        reset();
        setOpeatorName(null);
    }

  return (
    <div className='w-full h-full pb-10 overflow-auto bg-lightGray text-dark'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4'>
            <p className='px-5 py-4'>Home / <span className='font-semibold'>Recharge</span></p>

            {/* CONTENT */}
            <div className='w-full flex p-4 flex-row gap-5 items-start'>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-row gap-5 border border-gray-300 p-3'>
                        <p onClick={() => setTab("Mobile Recharge")} className={`${tab === 'Mobile Recharge' ? 'font-semibold border-b-4 border-b-dark' : 'text-gray-400'} cursor-pointer`}>Mobile Recharge</p>
                        <p onClick={() => setTab("DTH Recharge")} className={`${tab === 'DTH Recharge' ? 'font-semibold border-b-4 border-b-dark' : 'text-gray-400'} cursor-pointer`}>DTH Recharge</p>
                    </div>
                    <div className='w-full p-3 border border-gray-300 flex flex-row justify-between'>
                        {
                            tab === "Mobile Recharge" ? (
                                <div className='w-full'>
                                    <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
                                        <div className='flex flex-col'>
                                            <label htmlFor='operator'>Select Mobile Recharge Opeartor</label>
                                            <Controller
                                                name='operator'
                                                control={control}
                                                defaultValue={null}
                                                rules={{ required: 'Operator is required' }}
                                                render={({field}) => (
                                                    <Select
                                                        {...field}
                                                        isClearable
                                                        isSearchable
                                                        options={operatorOptions}
                                                        className='text-dark rounded-md w-full'
                                                        onChange={(e) => { 
                                                            field.onChange(e);
                                                            setOpeatorName(e ? e.value : "");
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>

                                        <div className='flex flex-col relative'>
                                            <label htmlFor='mobileNo'>Mobile No</label>
                                            <input
                                                name='mobileNo'
                                                className='p-2 pl-7 rounded-md border border-gray-300 text-dark bg-white'
                                                placeholder='Enter mobile no'
                                                {...register('mobileNo',{required:true})}
                                                type='tel'
                                                required
                                            />
                                            <CiMobile3 className='absolute top-[2.35rem] left-2'/>
                                        </div>

                                        <div className='flex flex-col relative'>
                                            <label htmlFor='amount'>Amount<span className='cursor-pointer text-gray-500 pl-1.5 text-xs' onClick={() => setPlanModal({operatorName:operatorName ? operatorName : alert("Please Choose Operator First")})}>See Plan</span></label>
                                            <input
                                                name='amount'
                                                placeholder='Click see plan to choose plan'
                                                {...register('amount',{required:true})}
                                                type='number'
                                                defaultValue={null}
                                                value={operatorName ? price : null}
                                                readOnly
                                                className='p-2 pl-8 border border-gray-300 rounded-md bg-white text-dark'
                                            />
                                            <LuIndianRupee className='absolute top-[2.35rem] left-2'/>
                                        </div>

                                        <div className='flex flex-row gap-4'>
                                            <button type='submit' className='btn btn-success'>Recharge</button>
                                            <button type='button' className='btn' onClick={() => {reset(); setOpeatorName(null);}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
                <RecentTransactions/>
            </div>
        </div>
        {planModal && <PlanModal planModal={planModal} setPlanModal={setPlanModal}/>}
        {rechargeSummary && <RechargeSummary rechargeSummary={rechargeSummary} setRechargeSummary={setRechargeSummary}/>}
    </div>
  )
}

export default MobileRecharge