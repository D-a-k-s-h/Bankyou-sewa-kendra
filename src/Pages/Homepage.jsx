import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Common/Navbar';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import mobileServiceLogo from '../Assets/mobile service logo.jpg';
import billPaymentServiceLogo from '../Assets/bill payment.jpg';
import panCardLogo from '../Assets/pan card logo.png';
import shoopingLogo from '../Assets/shooping logo.jpg';
import moneyTransLogo from '../Assets/money trabsfer logo.jpg';
import miniWebLogo from '../Assets/mini website.png';
import loanServiceLogo from '../Assets/loan service logo.jpg';
import aepsServiceLogo from '../Assets/aeps service logojpg.jpg'
import addFundLogo from '../Assets/add fund logo.jpg';
import bankLogo from '../Assets/Banku_logo.png';
import { useNavigate } from 'react-router-dom';
import RecentTransactions from '../Components/Common/RecentTransactions';

const serviceData = [
  {
    id: 1,
    heading: "Mobile Service",
    para: "Service",
    logo: mobileServiceLogo,
    navigate: "/market-place/mobile-recharge"
  },
  {
    id: 2,
    heading: "Bill Payment",
    para: "Service",
    logo: billPaymentServiceLogo,
    navigate: "/market-place/bill-payment"
  },
  {
    id: 3,
    heading: "AEPS",
    para: "Service",
    logo: aepsServiceLogo,
    navigate: "/neo-bank/aeps-services"
  },
  {
    id: 4,
    heading: "Money Transfer",
    para: "Service",
    navigate:"/neo-bank/domestic-money-transfer",
    logo: moneyTransLogo
  },
  {
    id: 5,
    heading: "Mini Website",
    para: "Service",
    logo: miniWebLogo,
    navigate: "/market-place/mini-website"
  },
  {
    id: 6,
    heading: "Shopping",
    para: "Service",
    logo: shoopingLogo,
    navigate: "/market-place/shopping"
  },
  {
    id: 7,
    heading: "Add Fund",
    para: "Service",
    logo: addFundLogo
  },
  {
    id: 8,
    heading: "Loan",
    para: "Service",
    logo: loanServiceLogo
  },
  {
    id: 9,
    heading: "PAN Card",
    para: "Service",
    logo: panCardLogo,
    navigate: "/pan-card-services"
  }
];

const Homepage = () => {

  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);


  return (
    <div className='w-full h-full pb-10 bg-lightGray overflow-auto'>
        <Navbar/>
        <div className='w-full px-4 flex flex-col justify-center font-normal'>
          <div className='w-full flex flex-row gap-14 px-10 p-5 items-center'>
            {/* CARD 1 */}
            <div className='w-full p-3 flex flex-col gap-7 text-white rounded-xl bg-gradient-to-tr from-violet-800 to-purple-300'>
              
              <div className='w-full flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-lg'>Business Wallet</p>
                  <p>₹</p>
                </div>
                {/* LOGO */}
                <img src={bankLogo} alt='logo' className='object-fill aspect-square w-24 h-10'/>
              </div>

              <p>CARD NUMBER</p>
              
              <div className='flex flex-row text-sm justify-between'>
                <button type='button'>View Statement</button>
                <button type='button'>Add Money</button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='w-full flex flex-col gap-7 rounded-xl text-white p-3 bg-gradient-to-tr from-rose-700 to-red-400'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-lg'>Outlet Limit</p>
                  <p>₹</p>
                </div>

                {/* LOGO */}
                <img src={bankLogo} alt='logo' className='object-fill aspect-square w-24 h-10'/>
              </div>

              <p>CARD NUMBER</p>

              <div className='w-full flex flex-row justify-between text-sm'>
                <button type='button'>View Statement</button>
                <button type='button'>View Used</button>
                <button type='button'>Add Usable</button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='w-full h-44 flex justify-center items-center bg-black text-white rounded-xl p-3'>
              {/* SWIPER */}
              <Swiper
                className='w-full h-full flex justify-center items-center'
                loop={true}
                slidesPerView={1}
                autoplay={{delay:2500, disableOnInteraction:false}}
                navigation={true}
                modules={[Autoplay,Navigation,Pagination]}
                width={100}
                height={100}
              >
                <SwiperSlide className='w-full flex justify-center items-center'>Slide 1</SwiperSlide>
                <SwiperSlide className='w-full flex justify-center items-center'>Slide 2</SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* SERVICES */}
          <div className='w-full flex flex-row gap-5 items-start'>
            <div className='w-full border border-gray-300'>
              <p className='border-b p-2 border-b-gray-300 font-semibold'>Quick Services</p>
              <div className='grid grid-cols-3 grid-rows-3 gap-5 p-3'>
                {
                  serviceData.map((data) => (
                    <div key={data.id} onClick={() => navigate(data.navigate)} className='w-full h-full flex btn btn-outline flex-row gap-2 border border-gray-300 p-2'>
                      <img src={data.logo} alt='logos' className='w-10 rounded-md aspect-square object-cover'/>
                      <div className='flex flex-col'>
                        <p className='text-sm'>{data.heading}</p>
                        <p className='text-lg'>{data.para}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* RECENT TRANSACTIONS */}
            <RecentTransactions/>
          </div>
        </div>
    </div>
  )
}

export default Homepage