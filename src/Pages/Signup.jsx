import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import BankYouLogo from '../Assets/Bank you logo.png';

const Signup = () => {

    const {
        register,
        formState:{errors},
        handleSubmit,
        reset
    } = useForm();

    const navigate = useNavigate();
    const [isVisiblePassword,setIsVisiblePassword] = useState(false);
    const [isVisibleConfirmPassword,setIsVisibleConfirmPassword] = useState(false);

    const submitHandler = async(data) => {
        console.log("SIGNUP DATA -> ",data);

        reset();
    }

  return (
    <div className='w-[100vw] h-[100vh] font-michroma font-normal bg-gray-500 flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url("/background.jpg")' }}>
        <div className='w-1/2 bg-white rounded-md flex flex-col justify-center'>
            <div className='flex flex-row justify-evenly items-center p-1'>
                <img src={BankYouLogo} alt='companyLogo' className='object-cover w-44'/>
                <button className='btn btn-outline' onClick={() => navigate("/login")}>Login</button>
            </div>
            <div className='flex flex-row items-center'>
                {/* IMAGE SLIDER */}
                <div></div>
                {/* LOGIN FORM */}
                <form className='flex flex-col gap-5 bg-black text-white p-4 rounded-br-md' onSubmit={handleSubmit(submitHandler)}>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-semibold'>Create a new account</p>
                        <p className='text-gray-400'>Already have an account? <Link to={"/login"} className='hover:underline'>Login</Link></p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='mobileNo'>Mobile no linked with aadhar card<sup className='text-red-500'>*</sup></label>
                            <input
                                name='mobileNo'
                                className='custom-input text-black'
                                type='tel'
                                required
                                placeholder='mobile no linked with aadhar card'
                                {...register('mobileNo',{required:true})}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor=''>Pan no<sup className='text-red-500'>*</sup></label>
                            <input
                                className='custom-input text-black'
                                type='text'
                                required
                                placeholder='PAN Number'
                                name='panNo'
                                {...register('panNo',{required:true})}
                            />
                        </div>

                        <div className='flex flex-row gap-2'>
                            <div className='relative flex flex-col gap-1'>
                                <label htmlFor='password'>Create Password<sup className='text-red-500'>*</sup></label>
                                <input
                                    required
                                    name='password'
                                    type={`${isVisiblePassword ? 'text' : 'password'}`}
                                    {...register("password",{required:true})}
                                    placeholder='Create password'
                                    className='custom-input text-black'
                                />
                                <FaEye className={`${isVisiblePassword ? 'absolute top-10 right-3 cursor-pointer text-black' : 'hidden'}`} onClick={() => {setIsVisiblePassword(!isVisiblePassword)}}/>
                                <FaEyeSlash onClick={() => {setIsVisiblePassword(!isVisiblePassword)}} className={`${isVisiblePassword ? 'hidden' : 'absolute right-3 top-10 cursor-pointer text-black'}`}/>
                            </div>
                            <div className='relative flex flex-col gap-1'>
                                <label htmlFor='confirmPassword'>Confirm Password<sup className='text-red-500'>*</sup></label>
                                <input
                                    name='confirmPassword'
                                    type={`${isVisibleConfirmPassword ? 'text' : 'password'}`}
                                    required
                                    className='custom-input text-black'
                                    placeholder='Confirm password'
                                    {...register('confirmPassword',{required:true})}
                                />
                                <FaEye className={`${isVisibleConfirmPassword ? 'absolute top-10 right-3 cursor-pointer text-black' : 'hidden'}`} onClick={() => {setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}}/>
                                <FaEyeSlash onClick={() => {setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}} className={`${isVisibleConfirmPassword ? 'hidden' : 'absolute right-3 top-10 cursor-pointer text-black'}`}/>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-outline text-white'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup