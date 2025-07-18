import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import BankYouLogo from '../Assets/Logos/Bank you logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Autoplay} from 'swiper/modules'
import Slide1 from '../Assets/Slider Images/login page slide 1.png';
import Slide2 from '../Assets/Slider Images/login page slide 2.png';
import { useDispatch } from 'react-redux';
import { sendOtp, verifyOtp } from '../Services/operations/authAPI';
import OtpInput from 'react-otp-input';
import { FaClockRotateLeft } from "react-icons/fa6";

const Login = () => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();
    const [isVisible,setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const [otpVisible,setOtpVisible] = useState(false);
    const [otp,setOtp] = useState('');
    const [email,setEmail] = useState('');

    const submitHandler = async(data) => {
        console.log("LOGIN DATA -> ",data);
        
        if(!otpVisible){
            await dispatch(sendOtp(data.email));
            setOtpVisible(true);
        }
        else{
            await dispatch(verifyOtp(data.email,otp,navigate));
        }
    }

  return (
    <div className='w-[100vw] h-[100vh] font-michroma bg-gray-500 flex justify-center items-center bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url("/background.jpg")' }}>
        <div className='w-full md:w-2/3 bg-white rounded-md flex flex-col justify-center'>
            {/* BAR */}
            <div className='flex flex-row justify-evenly items-center p-1'>
                <img src={BankYouLogo} alt='companyLogo' className='object-cover w-44'/>
            </div>
            <div className='w-full flex flex-row items-center justify-center'>
                {/* IMAGE SLIDER */}
                <div className='w-[51.2%] bg-black hidden md:block'>
                    <Swiper
                        className=''
                        loop={true}
                        slidesPerView={1}
                        autoplay={{delay:7000, disableOnInteraction:false}}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className='w-full h-full'>
                            <img src={Slide1} alt='Welcome slide 1' className='object-cover'/>
                        </SwiperSlide>
                        <SwiperSlide className='w-full h-full'>
                            <img src={Slide2} alt='Welcome slide 2' className='object-cover'/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* LOGIN FORM */}
                <form className='w-full flex flex-col gap-5 bg-black text-white p-4 rounded-br-md' onSubmit={handleSubmit(submitHandler)}>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-semibold'>Login to your account</p>
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
                                minLength={10}
                                maxLength={10}
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

                        <div className='flex flex-col gap-1'>
                            <label htmlFor='email'>Enter email for verification<sup className='text-error'>*</sup></label>
                            <input
                                type='email'
                                name='email'
                                {...register('email',{required:"Email is required"})}
                                required
                                placeholder='Enter email address'
                                className='custom-input text-black'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {
                            otpVisible && (
                                <div className='flex flex-col gap-1'>
                                    <p>Enter OTP<sup className='text-error'>*</sup></p>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderInput={(props) => (
                                            <input
                                                {...props}
                                                placeholder="-"
                                                style={{
                                                    boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                                }}
                                                className='w-[40px] md:w-[50px] lg:w-[60px] h-12 border-0 bg-white rounded-[0.5rem] text-black text-center focus:border-0 focus:outline-2 focus:outline-yellow-50'
                                            />
                                        )}
                                        containerStyle={{
                                            justifyContent: "space-between",
                                            gap: "0 6px",
                                        }}
                                    />
                                    <p className='text-blue-400 self-end flex flex-row gap-1 items-center mt-1 cursor-pointer' onClick={() => dispatch(sendOtp(email))}><FaClockRotateLeft/>Resend otp</p>
                                </div>
                            )
                        }

                        <button type='submit' className='btn btn-outline text-white'>Log in</button>

                        <p className='text-white'>Don't have an account? <Link to={"/signup"} className='hover:underline'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login