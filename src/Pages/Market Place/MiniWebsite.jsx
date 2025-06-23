import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import { useForm } from 'react-hook-form'
import { BsBuildings, BsInstagram } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { CiMobile3 } from 'react-icons/ci';
import { MdFacebook } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const MiniWebsite = () => {

    const {
        register,
        control,
        reset,
        handleSubmit
    } = useForm();

    const submitHandler = async (data) => {
        console.log("MINI WEBSITE DATA -> ", data);
        reset();
    }

  return (
    <div className='w-full h-full flex flex-col overflow-auto bg-lightGray text-dark'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4 px-4'>
            <p className='px-4 pt-4'>Home / <span className='font-semibold'>Mini Website</span></p>

            {/* CONTENT */}
            <div className='w-full flex border border-gray-400 rounded-md flex-col gap-5 items-start p-3'>
                <p className='w-full font-semibold'>Company Information</p>

                <form onSubmit={handleSubmit(submitHandler)} className='w-full flex flex-col gap-4'>
                    {/* BASIC INFORMATION */}
                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyName'>Company Name<sup className='text-error'>*</sup></label>
                            <input 
                                type='text' 
                                id='companyName' 
                                {...register('companyName', { required: 'Company Name is required' })} 
                                className='w-full pl-8 p-2 border border-gray-300 rounded-md'
                                placeholder='Enter Company Name'
                                required
                            />
                            <BsBuildings className='absolute top-9 left-2 text-gray-500'/>
                        </div>
                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyNo'>Company Number<sup className='text-error'>*</sup></label>
                            <input 
                                type='text' 
                                id='companyNo' 
                                {...register('companyNo', { required: 'Company Number is required' })} 
                                className='w-full p-2 border border-gray-300 rounded-md pl-8'
                                placeholder='Ex. (000) 000-00-00'
                                required
                            />
                            <CiMobile3 className='absolute top-[2.3rem] left-2 text-gray-500 text-lg'/>
                        </div>
                    </div>

                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyEmail'>Company Email Address<sup className='text-error'>*</sup></label>
                            <input 
                                type='email' 
                                id='companyEmail' 
                                {...register('companyEmail', { required: 'Company Email is required' })} 
                                className='w-full p-2 border border-gray-300 rounded-md pl-8'
                                placeholder='Enter Company Email'
                                required
                            />
                            <TfiEmail className='absolute top-[2.3rem] left-2 text-gray-500'/>
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='companyLocation'>Company Location<sup className='text-error'>*</sup></label>
                            <input
                                type='text' 
                                id='companyLocation' 
                                {...register('companyLocation', { required: 'Company Location is required' })} 
                                className='w-full p-2 border border-gray-300 rounded-md'
                                placeholder='Enter Company Location'
                                required
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor='companyImage'>Company Image</label>
                            <input 
                                type='file' 
                                id='companyImage' 
                                {...register('companyImage')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md'
                                accept='image/*'
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='companyAbout'>About Us</label>
                            <textarea 
                                id='companyAbout' 
                                {...register('companyAbout')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md'
                                placeholder='Write about your company...'
                                rows='1'
                            ></textarea>
                        </div>
                    </div>
                    
                    {/* SOCIAL MEDIA LINKS */}
                    <p className='font-semibold'>Social Media Links</p>
                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyFacebook'>Facebook Link</label>
                            <input 
                                type='url' 
                                id='companyFacebook' 
                                {...register('companyFacebook')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md pl-8'
                                placeholder='Enter Facebook Link'
                            />
                            <MdFacebook className='absolute top-[2.2rem] left-2 text-xl text-primary'/>
                        </div>

                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyInstagram'>Instagram Link</label>
                            <input 
                                type='url' 
                                id='companyInstagram' 
                                {...register('companyInstagram')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md pl-8'
                                placeholder='Enter Instagram Link'
                            />
                            <BsInstagram className='absolute top-[2.3rem] left-2 text-lg text-pink-500'/>
                        </div>
                    </div>

                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyTwitter'>Twitter Link</label>
                            <input 
                                type='url' 
                                id='companyTwitter' 
                                {...register('companyTwitter')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md pl-8'
                                placeholder='Enter Twitter Link'
                            />
                            <FaXTwitter className='absolute top-[2.3rem] left-2 text-lg text-black'/>
                        </div>

                        <div className='w-full flex flex-col relative'>
                            <label htmlFor='companyLinkedIn'>LinkedIn Link</label>
                            <input 
                                type='url' 
                                id='companyLinkedIn' 
                                {...register('companyLinkedIn')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md pl-8'
                                placeholder='Enter LinkedIn Link'
                            />
                            <FaLinkedin className='absolute top-[2.3rem] left-2 text-lg text-blue-700'/>
                        </div>
                    </div>

                    {/* GALLERY IMAGES */}
                    <div className='w-full flex flex-row items-center gap-10'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor='companyGallery' className='font-semibold'>Gallery Images <span className='font-normal'>(can choose multiple)</span></label>
                            <input 
                                type='file' 
                                id='companyGallery' 
                                {...register('companyGallery')} 
                                className='w-full p-2 border bg-white border-gray-300 rounded-md'
                                multiple
                                placeholder='Upload Gallery Images (can choose multiple files)'
                                accept='image/*'
                            />
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className='w-full flex justify-start gap-4'>
                        <button type='submit' className='btn btn-success'>Save</button>
                        <button type='reset' className='btn btn-outline' onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default MiniWebsite