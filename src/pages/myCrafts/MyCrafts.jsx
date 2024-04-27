import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCrafts = () => {

    const loadedMyCrafts = useLoaderData()


    return (
        <div className=' max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12'>
            <h1 className='text-center text-4xl font-bold my-12'>My Art & Craft List</h1>
            <div className='grid gap-6 md:grid-cols-2'>
                {
                    loadedMyCrafts.map(myCraft =>
                        <div key={myCraft._id}>
                            <div className='bg-base-200  grid md:grid-cols-5 gap-6 p-4 py-8 rounded-xl'>
                                <div className='self-center col-span-2'>
                                    <img className='rounded-lg' src={myCraft.image} alt="" />
                                </div>
                                <div className='col-span-2'>
                                    <h3 className='font-bold text-[#5aba75]'>{myCraft.item_name}</h3>
                                    <div className='grid gap-1 grid-cols-1 justify-between mt-'>
                                         <h3 className='font-semibold '>Price: <span className='text-[#FF6D60]'>{myCraft.price}</span></h3>
                                         <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{myCraft.rating}</span></h3>
                                         <h3 className='font-semibold '>Customization: <span className='text-[#FF6D60]'>{myCraft.customization}</span></h3>
                                         <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{myCraft.stock_status}</span></h3>
                                     </div>
                                </div>
                                <div className='self-center place-self-end flex md:flex-col gap-4'>
                                    <button className="bg-[#ff3b3b] text-white rounded-lg px-3 py-2">Delete</button>
                                    <button className="bg-[#10439F] text-white rounded-lg px-3 py-2">Update</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

// <div className="bg-base-200 hero ">
//                                 <div>
//                                     <img className='rounded-lg' src={myCraft.image} alt="" />
//                                 </div>
//                                 <div className='col-span-2' >
//                                     <h3 className='font-semibold text-xl'>{myCraft.item_name}</h3>
//                                     <div className='my-3'>

//                                     </div>
//                                     <div className='grid gap-7 grid-cols-2 justify-between'>
//                                         <h3 className='font-semibold '>Price: <span className='text-[#FF6D60]'>{myCraft.price}</span></h3>
//                                         <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{myCraft.rating}</span></h3>
//                                         <h3 className='font-semibold '>Customization: <span className='text-[#FF6D60]'>{myCraft.customization}</span></h3>
//                                         <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{myCraft.stock_status}</span></h3>
//                                     </div>

//                                 </div>
//                                 <div className='md:self-center md:place-self-end flex flex-col gap-6'>
//                                     <button className="btn">Update</button>
//                                     <button className="btn btn-error">Delete</button>
//                                 </div>
//                             </div>

export default MyCrafts;