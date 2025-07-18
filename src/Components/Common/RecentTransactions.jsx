import React, { useState } from 'react'
import mobileServiceLogo from '../../Assets/Logos/mobile service logo.jpg';
import billPaymentServiceLogo from '../../Assets/Logos/bill payment.jpg';
import panCardLogo from '../../Assets/Logos/pan card logo.png';
import shoopingLogo from '../../Assets/Logos/shooping logo.jpg';
import moneyTransLogo from '../../Assets/Logos/money trabsfer logo.jpg';
import loanServiceLogo from '../../Assets/Logos/loan service logo.jpg';
import aepsServiceLogo from '../../Assets/Logos/aeps service logojpg.jpg'
import addFundLogo from '../../Assets/Logos/add fund logo.jpg';

const recentTransactions = [
  {
    id: 1,
    heading: "Mobile Recharge",
    para: "Mobile & DTH Recharge Total Money Transaction",
    logo: mobileServiceLogo,
    navigate: "/market-place/mobile-recharge"
  },
  {
    id: 2,
    heading: "Bill Payment",
    para: "Bill Payment Total Money Transaction",
    logo: billPaymentServiceLogo,
    navigate: "/market-place/bill-payment"
  },
  {
    id: 3,
    heading: "Money Transfer",
    para: "Money Transfer Total Money Transaction",
    logo: moneyTransLogo
  },
  {
    id: 4,
    heading: "AEPS",
    para: "AEPS Service Total Money Transaction",
    logo: aepsServiceLogo,
    navigate: "/neo-bank/aeps-services"
  },
  {
    id: 5,
    heading: "Wallet TopUp",
    para: "Total Wallet TopUp This Month",
    logo: addFundLogo,
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

const RecentTransactions = () => {

    const [showAll, setShowAll] = useState(false);
    const visibleTransactions = showAll ? recentTransactions : recentTransactions.slice(0,5);

  return (
    <>
        <div className='w-full border border-gray-300 flex flex-col gap-1'>
            <p className='border-b border-b-gray-300 font-semibold p-2'>Recent Transactions(Monthly)</p>
            <div className='w-full flex flex-col gap-2'>
                {
                visibleTransactions.map((data) => (
                    <div key={data.id} className='flex border-b border-b-gray-300 p-2 flex-row justify-between w-full'>
                    <div className='flex flex-row gap-2'>
                        <img src={data.logo} className='object-cover aspect-square w-10 rounded-md'/>
                        <div>
                        <p className='text-black font-semibold'>{data.heading}</p>
                        <p className='text-sm'>{data.para}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-green-600'>₹0.00</p>
                        <p className='text-error'>₹0.00</p>
                    </div>
                    </div>
                ))
                }
            </div>
            {!showAll && recentTransactions.length > 5 && (
                <button type='button' className='btn btn-outline' onClick={() => setShowAll(true)}>Show All</button>
            )}
            {
                showAll && recentTransactions.length > 5 && (
                <button type='button' className='btn btn-outline' onClick={() => setShowAll(false)}>Show Less</button>
                )
            }
        </div>
    </>
  )
}

export default RecentTransactions