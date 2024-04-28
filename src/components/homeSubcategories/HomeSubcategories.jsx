import React, { useEffect, useState } from 'react';
import baseUrl from '../../services/helper';
import HomeSubcategory from '../homeSubcategory/HomeSubcategory';

const HomeSubcategories = () => {

    const [subcategories, setSubcategories] = useState([])

    useEffect(()=>{
        fetch(`${baseUrl}/subcategories`)
        .then(res=>res.json())
        .then(data=> setSubcategories(data))
    },[])
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4  gap-10'>
            {
                subcategories.map(subcategory=><HomeSubcategory key={subcategory._id} subcategory={subcategory}></HomeSubcategory>)
            }
        </div>
    );
};

export default HomeSubcategories;