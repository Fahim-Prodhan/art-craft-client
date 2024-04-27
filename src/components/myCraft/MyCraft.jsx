import React from 'react';

const MyCraft = ({ craft }) => {


    return (
        <div>
            <div>
                <div className='bg-base-200  grid md:grid-cols-5 gap-6 p-4 py-8 rounded-xl'>
                    <div className='self-center col-span-2'>
                        <img className='rounded-lg' src={craft.image} alt="" />
                    </div>
                    <div className='col-span-2'>
                        <h3 className='font-bold text-[#5aba75]'>{craft.item_name}</h3>
                        <div className='grid gap-1 grid-cols-1 justify-between mt-'>
                            <h3 className='font-semibold '>Price: <span className='text-[#FF6D60]'>{craft.price}</span></h3>
                            <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{craft.rating}</span></h3>
                            <h3 className='font-semibold '>Customization: <span className='text-[#FF6D60]'>{craft.customization}</span></h3>
                            <h3 className='font-semibold '>Rating: <span className='text-[#FF6D60]'>{craft.stock_status}</span></h3>
                        </div>
                    </div>
                    <div className='self-center place-self-end flex md:flex-col gap-4'>
                        <button className="bg-[#ff3b3b] text-white rounded-lg px-3 py-2">Delete</button>
                        <button className="bg-[#10439F] text-white rounded-lg px-3 py-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCraft;