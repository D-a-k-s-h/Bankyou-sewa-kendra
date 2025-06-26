import React from 'react'
import Navbar from '../Components/Common/Navbar'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import MUIDataTable from 'mui-datatables';

const Reports = () => {

    const {
        register,
        control,
        reset,
        handleSubmit,
    } = useForm();

    const submitHandler = async (data) => {
        console.log("REPORTS DATA -> ", data);
        reset();
    }

    const columns = ["USER NAME","ACCOUNT NUMBER","IFSC CODE","AMOUNT","SURCHARGE","COMMISSION","TOTAL COST","NEW BALANCE","STATUS","SERVICE NAME","OPERATOR NAME"];
    
    const dummyData = [
        ["John Doe", "1234567890", "IFSC0001", "500", "10", "5", "515", "1000", "Success", "Electricity Bill", "State Power"],
        ["Jane Smith", "0987654321", "IFSC0002", "300", "5", "3", "308", "700", "Success", "Mobile Recharge", "Airtel"],
        ["Alice Johnson", "1122334455", "IFSC0003", "200", "2", "1", "203", "500", "Failed", "Water Bill", "Local Water Supply"]
    ];

    const options = {
        filterType: "checkbox",
        download: true,
        print: true,
        search: true,
        selectableRows: "none",
        rowsperPage: 5,
        rowsPerPageOptions: [5, 10, 20],
        responsive:"standard",
    };

  return (
    <div className='w-full h-full overflow-auto bg-lightGray text-black'>
        <Navbar/>
        <div className='w-full h-full flex flex-col gap-5'>
            <p className='px-5 pt-4'>Home / <span className='font-semibold'>Reports</span></p>

            {/* CONTENT */}
            <div className='w-full p-4 flex flex-col gap-10'>
                <form onSubmit={handleSubmit(submitHandler)} className='w-full flex flex-col gap-5'>
                    <div className='w-full flex flex-row gap-5 items-center'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor='fromDate'>From Date</label>
                            <input 
                                type='date' 
                                {...register('fromDate')} 
                                className='w-full p-[0.35rem] border border-gray-300 rounded-md' 
                                name='fromDate'
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='toDate'>To Date</label>
                            <input 
                                type='date' 
                                {...register('toDate')} 
                                className='w-full p-[0.35rem] border border-gray-300 rounded-md' 
                                name='toDate'
                            />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor='billType'>Select type of transaction</label>
                            <Controller
                                name='billType'
                                control={control}
                                defaultValue={null}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        isClearable
                                        isSearchable
                                        options={[
                                            { value: 'mobile', label: 'Mobile Recharge' },
                                            { value: 'dth', label: 'DTH Recharge' },
                                            { value: 'electricity', label: 'Electricity Bill' },
                                            { value: 'water', label: 'Water Bill' }
                                        ]}
                                        className='text-black rounded-md w-full'
                                    /> 
                                )}
                            />
                        </div>
                    </div>
                    
                    <button type='submit' className='btn btn-primary text-lg'>Search</button>
                </form>

                <div className='relative w-full h-full overflow-x-auto'>
                    <div className='w-[1200px] mx-auto'>
                        <MUIDataTable
                            title={"Transaction Reports"}
                            columns={columns}
                            data={dummyData}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reports