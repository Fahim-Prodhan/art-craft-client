import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const loadedCraft = useLoaderData()
    console.log(loadedCraft);

    return (
        <div  className=' max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12'>
              <div className="grid grid-cols-1 gap-6 my-12 ">
             <Helmet>
                <title>CraftoPia | Craft Details</title>
            </Helmet>
            <div className="bg-[#39393917] grid items-center justify-center p-9 ">
                <img className="mx-auto lg:w-[65%] rounded-lg" src={loadedCraft.image} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl md:text-5xl">{''}</h1>
                <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center text-[#00b5a5]">{loadedCraft.item_name}</p>
                <div className="my-6"><hr /></div>
                <div className="flex gap-2 flex-col">
                    <p className='text-xl font-semibold text-[#FF6D60]'>#{loadedCraft.subcategory_name}</p>
                    <p className='font-semibold'>Description: {loadedCraft.short_description}</p>
                </div>
                <div className="my-6"><hr /></div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">Price:</p><p className="text-[18px]">{loadedCraft.price}</p></div>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">Status:</p><p className="text-[18px]">{loadedCraft.stock_status}</p></div>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">Rating:</p><p className="text-[18px]">{loadedCraft.rating}</p></div>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">Customization:</p><p className="text-[18px]">{loadedCraft.customization}</p></div>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">processing_time:</p><p className="text-[18px]">{loadedCraft.processing_time}</p></div>
                    <div className='flex gap-4'><p className="text-[18px] font-bold">Author:</p><p className="text-[18px]">{loadedCraft.user_name}</p></div>
                </div> 
                <div className="my-6"><hr /></div>
                
            </div>
        </div>
            
        </div>
    );
};

export default ViewDetails;