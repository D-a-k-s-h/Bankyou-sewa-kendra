import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross1 } from 'react-icons/rx';
import { addDmtData } from '../../../Slices/dmtSlice';
import { useDispatch } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AddAccount = ({setModal,mobile}) => {

    const {
        handleSubmit,
        register,
        reset
    } = useForm();

    const [addDetails,setAddDetails] = useState("Sender");
    const dispatch = useDispatch();

    const addSenderHandler = async(data) => {
        console.log(data);

        setAddDetails("Account");
        toast.success("Sender Added");
        reset();
    }

    const addAccountHandler = async(data) => {
        console.log(data);

        dispatch(addDmtData({
            bankHolder: data.bankHolder,
            ifscCode: data.ifscCode,
            accountNo: data.accountNo,
            bankName: data.bankName,
            mobileNo: data.mobileNo
        }));

        reset();
        setModal(false);
        toast.success("Account Added");
    }

  return (
    <div className='fixed w-screen inset-0 z-[1000] font-michroma !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='w-1/2 mx-auto flex flex-col text-lg gap-4 py-5 px-5 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-custom_pink text-black'>
            <div>
                {
                    addDetails === "Sender" ? (
                        <form onSubmit={handleSubmit(addSenderHandler)} className='flex flex-col gap-4'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <p className='w-full font-semibold'>Add Sender Details</p>
                                <RxCross1 onClick={() => setModal(false)} className='cursor-pointer'/>
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='firstName'>First Name<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter first name'
                                    type='text'
                                    {...register("firstName",{required:"First name is required"})}
                                    required
                                    name='firstName'
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='lastName'>Last Name<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter last name'
                                    type='text'
                                    {...register("lastName",{required:"Last name is required"})}
                                    required
                                    name='lastName'
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='aadharNo'>Aadhar No<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter aadhar number'
                                    type='number'
                                    {...register("aadharNo",{required:"Aadhar number is required"})}
                                    required
                                    name='aadharNo'
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='pincode'>Pincode<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter pincode'
                                    type='number'
                                    {...register("pincode",{required:"Pincode is required"})}
                                    required
                                    name='pincode'
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='address'>Address<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter address'
                                    type='address'
                                    {...register("address",{required:"Address is required"})}
                                    required
                                    name='address'
                                />
                            </div>

                            <div className='w-full flex flex-row gap-4'>
                                <button type='submit' className='btn btn-success text-white'>Add Sender</button>
                                <button type='reset' className='btn btn-outline'>Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit(addAccountHandler)} className='flex flex-col gap-4'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <p className='w-full font-semibold'>Add Sender Details</p>
                                <RxCross1 onClick={() => setModal(false)} className='cursor-pointer'/>
                            </div>

                            <div className='w-full flex flex-col'>
                                <label htmlFor='bankHolder'>Bank Holder<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter bank holder name'
                                    type='text'
                                    {...register("bankHolder",{required:"Bank holder is required"})}
                                    required
                                    name='bankHolder'
                                    defaultValue={null}
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='ifscCode'>IFSC Code<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter IFSC code'
                                    type='text'
                                    {...register("ifscCode",{required:"IFSC code is required"})}
                                    required
                                    name='ifscCode'
                                    defaultValue={null}
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='mobileNo'>Mobile No<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter mobile number'
                                    type='tel'
                                    {...register("mobileNo",{required:"Mobile number is required"})}
                                    readOnly
                                    name='mobileNo'
                                    value={mobile}
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='accountNo'>Account No<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter account number'
                                    type='number'
                                    {...register("accountNo",{required:"Account number is required"})}
                                    required
                                    name='accountNo'
                                    defaultValue={null}
                                />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor='bankName'>Bank Name<sup className='text-error'>*</sup></label>
                                <input
                                    className='w-full p-2 border border-black rounded-md'
                                    placeholder='Enter bank name'
                                    type='text'
                                    {...register("bankName",{required:"Bank name is required"})}
                                    required
                                    name='bankName'
                                    defaultValue={null}
                                />
                            </div>

                            <div className='w-full flex flex-row gap-4'>
                                <button type='submit' className='btn btn-success text-white'>Add Account</button>
                                <button type='reset' className='btn btn-outline'>Cancel</button>
                                <button type='button' onClick={() => setAddDetails("Sender")} className='btn btn-outline flex flex-row items-center'><IoIosArrowBack/>Back</button>
                            </div>
                        </form>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default AddAccount