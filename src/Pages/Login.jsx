import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const {
        register,
        formState:{errors},
        handleSubmit,
        reset
    } = useForm();

    const navigate = useNavigate();
    const [isVisible,setIsVisible] = useState(false);

    const submitHandler = async(data) => {
        console.log("LOGIN DATA -> ",data);

        reset();
    }

  return (
    <div className='w-[100vw] h-[100vh] font-michroma bg-gray-500 flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url("/background.jpg")' }}>
        <div className='w-1/2 bg-white rounded-md flex flex-col justify-center'>
            {/* BAR */}
            <div className='flex flex-row justify-evenly items-center p-1'>
                <p>Banku sewa kendra</p>
                <button className='btn btn-outline' onClick={() => navigate("/signup")}>Sign up</button>
            </div>
            <div className='flex flex-row items-center'>
                {/* IMAGE SLIDER */}
                <div></div>
                {/* LOGIN FORM */}
                <form className='flex flex-col gap-5 bg-black text-white p-4 rounded-br-md' onSubmit={handleSubmit(submitHandler)}>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-semibold'>Login to your account</p>
                        <p className='text-gray-400'>Don't have an account? <Link to={"/signup"} className='hover:underline'>Sign Up</Link></p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='mobileNo'>Enter registered mobile no<sup className='text-red-500'>*</sup></label>
                            <input
                                name='mobileNo'
                                type='tel'
                                className='custom-input text-black'
                                placeholder='Enter mobile no'
                                required
                                {...register('mobileNo',{required:true})}
                            />
                        </div>
                        <div className='relative flex flex-col gap-1'>
                            <label htmlFor='password'>Enter password<sup className='text-red-500'>*</sup></label>
                            <input
                                name='password'
                                type={`${isVisible ? 'text' : 'password'}`}
                                className='custom-input text-black'
                                placeholder='Enter password'
                                required
                                {...register('password',{required:true})}
                            />
                            <FaEye className={`${!isVisible ? 'hidden' : 'absolute right-4 top-10 cursor-pointer text-black'}`} onClick={() => {setIsVisible(!isVisible)}}/>
                            <FaEyeSlash className={`${!isVisible ? 'absolute right-4 top-10 cursor-pointer text-black' : 'hidden'}`} onClick={() => {setIsVisible(!isVisible)}}/>
                        </div>

                        <button type='submit' className='btn btn-outline text-white'>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login