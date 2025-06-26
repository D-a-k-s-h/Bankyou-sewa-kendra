import React, { useState } from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import '../../../node_modules/react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useNavigate } from 'react-router-dom';

const PlanModal = ({planModal, setPlanModal,selectedPlan,setSelectedPlan}) => {

  const handleChange = (e) => {
    const planObj = JSON.parse(e.target.value);
    setSelectedPlan(planObj);
    setPlanModal(null);
  }

  return (
    <>
      {planModal.operatorName && (
        <div className='fixed w-screen inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
          <div className='mx-auto flex flex-col text-lg gap-4 py-5 px-10 pb-12 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-custom_pink text-black'>
            <p className='font-semibold'>{planModal.operatorName}</p>
            <div className='w-full'>
              <Table className='w-full border border-black rounded-md'>
                <Thead className='bg-black text-white'>
                  <Tr className='p-2'>
                    <Th className='text-right py-1 px-8'>Select</Th>
                    <Th className='text-left py-1 pr-20'>Plan Name</Th>
                    <Th className='text-left py-1 pr-20'>Price</Th>
                    <Th className='text-left py-1 pr-20'>Validity</Th>
                    <Th className='text-left py-1 pr-20'>Data</Th>
                    <Th className='text-left py-1 pr-20'>Calls & SMS</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td className='text-center'>
                      <input
                        type='radio'
                        value={JSON.stringify({
                          planType: "Basic Plan",
                          planPrice: "199",
                          planValidity: "28 Days",
                          planData: "1GB/Day",
                          planOffering: "Unlimited + 100 SMS/Day"
                        })}
                        id='basicPlan'
                        name='plan'
                        checked={selectedPlan?.planType === "Basic Plan"}
                        onChange={handleChange}
                      />
                    </Td>
                    <Td>Basic Plan</Td>
                    <Td>₹199</Td>
                    <Td>28 Days</Td>
                    <Td>1GB/Day</Td>
                    <Td>Unlimited + 100 SMS/Day</Td>
                  </Tr>
                  <Tr>
                    <Td className='text-center'>
                      <input
                        type='radio'
                        value={JSON.stringify({
                          planType: "Standard Plan",
                          planPrice: "299",
                          planValidity: "56 Days",
                          planData: "1.5GB/Day",
                          planOffering: "Unlimited + 100 SMS/Day"
                        })}
                        id='standardPlan'
                        name='plan'
                        checked={selectedPlan?.planType === "Standard Plan"}
                        onChange={handleChange}
                      />
                    </Td>
                    <Td>Standard Plan</Td>
                    <Td>₹299</Td>
                    <Td>56 Days</Td>
                    <Td>1.5GB/Day</Td>
                    <Td>Unlimited + 100 SMS/Day</Td>
                  </Tr>
                  <Tr>
                    <Td className='text-center'>
                      <input
                        type='radio'
                        value={JSON.stringify({
                          planType: "Premium Plan",
                          planPrice: "399",
                          planValidity: "84 Days",
                          planData: "2GB/Day",
                          planOffering: "Unlimited + 100 SMS/Day"
                        })}
                        id='premiumPlan'
                        name='plan'
                        checked={selectedPlan?.planType === "Premium Plan"}
                        onChange={handleChange}
                      />
                    </Td>
                    <Td>Premium Plan</Td>
                    <Td>₹399</Td>
                    <Td>84 Days</Td>
                    <Td>2GB/Day</Td>
                    <Td className='pr-5'>Unlimited + 100 SMS/Day</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlanModal;