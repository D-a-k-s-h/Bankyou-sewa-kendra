import React from 'react'
import Navbar from '../../Components/Common/Navbar'

const shoppingData = [
    {
        id: 1,
        name: "High Peformance Laptop",
        price: '74,999',
        image: "https://i.pcmag.com/imagery/reviews/01Nb7ULQkkPJWE4dqsewfHz-1.fit_lim.size_919x518.v1727453897.jpg",
        warranty: "2 Years",
        description: "A high performance laptop with the latest specifications for gaming and productivity.",
        delivery: "Free Delivery",
        rating: 4.5,
        status: "In Stock",
        model: "X150 Pro Max"
    },
    {
        id: 2,
        name: "Biometric Fingerprint Scanner",
        price: '4,499',
        image: "https://www.thalesgroup.com/sites/default/files/database/assets/images/2022-02/biometric_fingerprint_scanners_CS500f.png",
        description: "Compact and secure biometric fingerprint scanner ideal for EKYC, Aadhar, authentication, and secure login systems.",
        compatibility: "Windows and android",
        connectivity: "USB and Bluetooth",
        status: "In Stock",
        model: "BioScan FX200"
    },
    {
        id: 3,
        name: "Flagship Smartphone",
        price: '74,999',
        image: "https://images.indianexpress.com/2023/09/best-flagship-phones.jpg",
        warranty: "1 Year",
        description: "A flagship smartphone with the latest features and specifications.",
        delivery: "2 - 4 days",
        status: "out of stock",
        model: "Galaxy X150 Pro Max"
    },
    {
        id: 4,
        name: "High Peformance Laptop",
        price: '74,999',
        image: "https://i.pcmag.com/imagery/reviews/01Nb7ULQkkPJWE4dqsewfHz-1.fit_lim.size_919x518.v1727453897.jpg",
        warranty: "2 Years",
        description: "A high performance laptop with the latest specifications for gaming and productivity.",
        delivery: "Free Delivery",
        rating: 4.5,
        status: "In Stock",
        model: "X150 Pro Max"
    },
    {
        id: 5,
        name: "Biometric Fingerprint Scanner",
        price: '4,499',
        image: "https://www.thalesgroup.com/sites/default/files/database/assets/images/2022-02/biometric_fingerprint_scanners_CS500f.png",
        description: "Compact and secure biometric fingerprint scanner ideal for EKYC, Aadhar, authentication, and secure login systems.",
        compatibility: "Windows and android",
        connectivity: "USB and Bluetooth",
        status: "In Stock",
        model: "BioScan FX200"
    },
    {
        id: 6,
        name: "Flagship Smartphone",
        price: '74,999',
        image: "https://images.indianexpress.com/2023/09/best-flagship-phones.jpg",
        warranty: "1 Year",
        description: "A flagship smartphone with the latest features and specifications.",
        delivery: "2 - 4 days",
        status: "out of stock",
        model: "Galaxy X150 Pro Max"
    }
];

const Shopping = () => {
  return (
    <div className='w-full h-full overflow-auto pb-10 flex flex-col bg-lightGray text-dark'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-4 px-4'>
            <p className='px-4 pt-4'>Home / <span className='font-semibold'>Products</span></p>

            {/* CONTENT */}
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    shoppingData.map((item) => (
                        <div key={item.id} className='w-full h-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-2'>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <p>{item.name}</p>
                                <p className={`${item.status === 'In Stock' ? 'rounded-md bg-success p-1 text-xs ' : ' rounded-md bg-error text-xs p-1'} text-white`}>{item.status}</p>
                            </div>
                            <img src={item.image} alt={item.name} className='w-full h-40 object-fill rounded-md mb-2' />
                            <div className='w-full flex flex-col gap-1'>
                                <div className='flex flex-row justify-between items-center'>
                                    <p>Model</p>
                                    <p className='text-sm'>{item.model}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <p>Price</p>
                                    <p className='font-semibold'>₹{item.price}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <p>{item?.warranty ? 'Warranty' : 'Connectivity'}</p>
                                    <p>{item?.warranty ? item.warranty : item.connectivity}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <p>{item?.compatibility ? 'Compatibility' : 'Delivery'}</p>
                                    <p>{item?.compatibility ? item.compatibility : item.delivery}</p>
                                </div>
                                <p className='text-sm py-2 text-gray-600'>{item.description}</p>
                                <button type='button' className='w-full btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Shopping