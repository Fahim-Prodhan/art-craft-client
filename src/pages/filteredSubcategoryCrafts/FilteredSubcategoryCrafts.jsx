import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FilteredSubcategoryCraft from '../../components/filteredSubcategoryCraft/FilteredSubcategoryCraft';

const FilteredSubcategoryCrafts = () => {
    const loadCrafts = useLoaderData();

    const subName = useParams()

    const subcategoryName = subName.subcategory_name


    console.log(subcategoryName);

    console.log(loadCrafts);
    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">
             <h1 className='text-center text-4xl font-bold pb-12'>{subcategoryName}</h1>
            <div className='flex flex-wrap justify-center gap-6 '>
                {
                    loadCrafts.map(craft => <FilteredSubcategoryCraft key={craft._id} craft={craft}></FilteredSubcategoryCraft>)
                }
            </div>
        </div>
    );
};

export default FilteredSubcategoryCrafts;