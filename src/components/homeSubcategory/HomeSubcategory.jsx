import React from 'react';
import { Link } from 'react-router-dom';


const HomeSubcategory = ({ subcategory }) => {
    return (
       <Link to={`/subcategory_items/${subcategory.subcategory_name}`}>
         <div className='cursor-pointer place-self-center w-64'>
            <div className="card hover:shadow-2xl duration-200 w-52 card-compact bg-base-100 shadow-xl">
                <figure className='px-8 py-3'><img className='rounded-md' src={subcategory.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-black py-2 bg-[#f7d160]   rounded-md  ">{subcategory.subcategory_name}</h2>    
                </div>
            </div>
        </div>
       </Link>
    );
};

export default HomeSubcategory;