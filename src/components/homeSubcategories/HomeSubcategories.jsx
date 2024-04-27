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
        <div className='grid grid-cols-3 gap-6'>
            {
                subcategories.map(subcategory=><HomeSubcategory key={subcategory._id} subcategory={subcategory}></HomeSubcategory>)
            }
        </div>
    );
};

export default HomeSubcategories;