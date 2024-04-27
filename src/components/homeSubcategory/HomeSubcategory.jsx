import React from 'react';

const HomeSubcategory = ({ subcategory }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={subcategory.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#00b5a5]">{subcategory.subcategory_name}</h2>
                    <p>{subcategory.short_description}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeSubcategory;