import React, { useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import { useForm } from 'react-hook-form'
import DMTData from '../../Components/Core/DirectMoneyTransfer.jsx/DMTData';
import AddAccount from '../../Components/Core/DirectMoneyTransfer.jsx/AddAccount';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const DomesticMoneyTransfer = () => {

    const {
        handleSubmit,
        reset,
        register
    } = useForm();

    const {dmtData} = useSelector((state) => state.dmt);
    const [modal,setModal] = useState(false);
    const [mobile, setMobile] = useState(null);
    //console.log("Dmt data -> ",dmtData);

    const submitHandler = async(data) => {
        //console.log("DMT data -> ",data);

        setMobile(data.mobileNo);
        const exists = dmtData.some((dmt) => dmt.mobileNo === data.mobileNo);
        if(exists){
            toast.success("Account already exists");
        }
        setModal(!exists ?? dmtData.empty());

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
                    <div className='border border-gray-300 p-2'>
                        <p className='w-fit font-semibold border-b-4 border-b-black'>Domestic Money Transfer</p>
                    </div>
                    <div className='w-full border border-gray-300 p-4'>
                        <form onSubmit={handleSubmit(submitHandler)} className='w-full flex flex-col gap-3'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='mobileNo'>Mobile Number<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 rounded-md border border-gray-300'
                                    type='tel'
                                    name='mobileNo'
                                    placeholder='Enter Mobile No'
                                    {...register('mobileNo',{required:"Mobile no is required"})}
                                    required
                                    maxLength={10}
                                    minLength={10}
                                />
                            </div>

                            <div className='w-full flex flex-row gap-4'>
                                <button type='submit' className='btn btn-success text-white'>Validate</button>
                                <button type='reset' className='btn btn-outline'>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                {mobile && <DMTData setModal={setModal} dmtData={dmtData} mobile={mobile}/>}
            </div>
        </div>
        {modal && <AddAccount setModal={setModal} mobile={mobile}/>}
    </div>
  )
}

export default DomesticMoneyTransfer