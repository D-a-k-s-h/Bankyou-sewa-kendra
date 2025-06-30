import React from 'react'
import Navbar from '../../Components/Common/Navbar'

const personalProfileSummary = [
    {
        id: 1,
        title: "Full Name",
        value: "CHANDAN THAKUR"
    },
    {
        id: 2,
        title: "Email",
        value: "chandan.softbrainit.net"
    },
    {   
        id: 3,
        title: "Phone Number",
        value: "1234567890"
    },
    {
        id: 4,
        title: "Address",
        value: "123 Main St, City, Country"
    },
    {
        id: 5,
        title: "Date of Birth",
        value: "05-01-1995"
    },
    {
        id: 6,
        title: "State",
        value: "Delhi"
    },
    {
        id: 7,
        title: "Aadhar Number",
        value: "1234-5678-9012"
    },
    {
        id: 8,
        title: "Postal Code",
        value: "110001"
    },
    {
        id: 9,
        title: "Voter ID Card",
        value: "123456789012"
    },
    {
        id: 10,
        title: "PAN Card",
        value: "ABCDE1234F"
    }
];

const businessDetails = [
    {
        id: 1,
        title: "Legal Business Name",
        value: "Softbrain IT Solutions"
    },
    {
        id: 2,
        title: "Date of Incorporation",
        value: "01-01-2020"
    },
    {
        id: 3,
        title: "Correspondence Address",
        value: "Najafgarh, Delhi, India"
    },
    {
        id: 4,
        title: "UDYAM Registration Number",
        value: "U123456789"
    },
    {
        id: 5,
        title: "Business Type",
        value: "Private Limited"
    }
];

const bankingDetails = [
    {
        id: 1,
        title: "Bank Name",
        value: "ABC Bank"
    },
    {
        id: 2,
        title: "Account Holder Name",
        value: "Chandan Thakur"
    },
    {
        id: 3,
        title: "Account Number",
        value: "123456789012"
    },
    {
        id: 4,
        title: "IFSC Code",
        value: "ABCD1234567"
    },
    {
        id: 5,
        title: "Account Type",
        value: "Current Account"
    }
];

const Profile = () => {
  return (
    <div className='w-full h-full bg-lightGray overflow-auto text-black'>
        <Navbar/>
        <div className='w-full flex p-2 scroll-pb-10 flex-col gap-4'>
            <div className='w-full border border-gray-500 rounded-md flex flex-col gap-1'>
                <p className='font-semibold text-lg px-6 pt-2'>My Profile</p>
                
                <div className='w-full flex flex-col md:flex-row gap-10 items-center border-b border-b-gray-500 p-4'>
                    <img src='https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png' alt='profileImage' className='object-cover aspect-square rounded-md w-44 md:w-48'/>
                    <div className='w-full flex flex-col gap-3'>
                        <div className='w-full flex flex-col'>
                            <p className='text-xl font-semibold'>CHANDAN THAKUR</p>
                            <p className='text-sm'>chandan@softbrainit.Net</p>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div className='w-full flex flex-row md:flex-col items-center md:items-start justify-between'>
                                <p className='text-sm text-gray-600'>Date of Birth</p>
                                <p className='text-xl font-semibold'>05-01-1995</p>
                            </div>
                            <div className='w-full flex flex-row md:flex-col items-center md:items-start justify-between'>
                                <p className='text-sm text-gray-600'>Father's Name</p>
                                <p className='text-xl font-semibold'>TEST</p>
                            </div>
                            <div className='w-full flex flex-row md:flex-col items-center md:items-start justify-between'>
                                <p className='text-sm text-gray-600'>Mother's Name</p>
                                <p className='text-xl font-semibold'>TEST</p>
                            </div>
                            <div className='w-full flex flex-row md:flex-col items-center md:items-start justify-between'>
                                <p className='text-sm text-gray-600'>Gender</p>
                                <p className='text-xl font-semibold'>Male</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full flex flex-col md:flex-row gap-2 items-start p-2'>
                    <div className='w-full flex flex-col gap-1 p-2 border border-black rounded-md'>
                        <p className='font-semibold'>Personal Profile Summary</p>
                        <p className='text-sm text-gray-500'>Below is the personal profile summary</p>
                        <div className='w-full flex flex-col gap-2'>
                            {
                                personalProfileSummary.map((data) => (
                                    <div key={data.id} className='w-full text-sm flex flex-row justify-between items-center border-b border-b-gray-300 py-2'>
                                        <p className='text-black uppercase'>{data.title}</p>
                                        <p className='font-semibold text-gray-500'>{data.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-1 border border-black rounded-md p-2'>
                        <p className='font-semibold'>Business Details</p>
                        <p className='text-gray-500 text-sm'>Provide your business name,type and registration details</p>
                        <div className='w-full flex flex-col gap-2'>
                            {
                                businessDetails.map((data) => (
                                    <div key={data.id} className='w-full text-sm flex flex-row justify-between items-center border-b border-b-gray-300 py-2'>
                                        <p className='text-black uppercase'>{data.title}</p>
                                        <p className='font-semibold text-gray-500'>{data.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-1 p-2 border border-black rounded-md'>
                        <p className='font-semibold'>Banking Details</p>
                        <p className='text-sm text-gray-500'>Provide your bank account details for transactions</p>
                        <div className='w-full flex flex-col gap-2'>
                            {
                                bankingDetails.map((data) => (
                                    <div key={data.id} className='w-full text-sm flex flex-row justify-between items-center border-b border-b-gray-300 py-2'>
                                        <p className='text-black uppercase'>{data.title}</p>
                                        <p className='font-semibold text-gray-500'>{data.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile