import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCraft from '../../components/myCraft/MyCraft';

const MyCrafts = () => {

    const loadedMyCrafts = useLoaderData()


    return (
        <div className=' max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12'>
            <h1 className='text-center text-4xl font-bold my-12'>My Art & Craft List</h1>
            <div className='grid gap-6 md:grid-cols-2'>
                {
                    loadedMyCrafts.map(craft => <MyCraft key={craft._id} craft={craft}></MyCraft>

                    )
                }
            </div>
        </div>
    );
};



export default MyCrafts;