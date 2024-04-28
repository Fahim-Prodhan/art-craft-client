import React from 'react';
import { Link } from 'react-router-dom';


const HomeSubcategory = ({ subcategory }) => {
    return (
       <Link to={`/subcategory_items/${subcategory.subcategory_name}`}>
         <div className='cursor-pointer place-self-center'>
            <div className="card hover:shadow-2xl duration-200 w-52 card-compact bg-base-100 shadow-xl">
                <figure className='p-10'><img className='rounded-md' src={subcategory.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center py-2 bg-[#f7d16098]  -mt-6 rounded-md  ">{subcategory.subcategory_name}</h2>    
                </div>
            </div>
        </div>
       </Link>
    );
};

export default HomeSubcategory;