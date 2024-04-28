import React from 'react';

const HomeSubcategory = ({ subcategory }) => {
    return (
        <div className='cursor-pointer hover:shadow-2xl duration-200'>
            <div className="card w-52 card-compact bg-base-100 shadow-xl">
                <figure className='p-10'><img className='rounded-md' src={subcategory.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center py-2 bg-[#f7d16098]  -mt-6 rounded-md  ">{subcategory.subcategory_name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default HomeSubcategory;