import React from 'react';

const HomeSubcategory = ({ subcategory }) => {
    return (
        <div>
            <div className="card w-52 card-compact bg-base-100 shadow-xl">
                <figure className='p-10'><img className='rounded-md' src={subcategory.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center bg-[#00b5a5]  -mt-6 border-2 rounded-md border-[#00b5a5] text-[#ffff]">{subcategory.subcategory_name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default HomeSubcategory;