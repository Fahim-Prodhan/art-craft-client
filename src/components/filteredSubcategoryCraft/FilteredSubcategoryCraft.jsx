
import { Link } from 'react-router-dom';


const FilteredSubcategoryCraft = ({craft}) => {
    const {
        _id, 
        image,
        item_name,
        subcategory_name,
        short_description,
        price,
        rating,
        stock_status,
        processing_time
     } = craft

  

    return (
        <div className='mb-12'>
            <div className="card md:w-80 lg:w-96 h-[620px] bg-base-100 shadow-xl">
                <figure className='p-4 '><img className='rounded-lg max-h-[220px] w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body pt-4">
                    <h2 className="card-title">
                        {item_name}
                    </h2>
                    <p className='-mt-2 pb-3 font-rancho font-semibold text-[#FF6D60]'>#{subcategory_name}</p>
                    <div>
                        <hr />
                    </div>
                    <div className='flex gap-4 flex-wrap  my-2 justify-center'>
                        <p><span className='font-semibold'>Stock:</span> {stock_status}</p>
                        <p><span className='font-semibold'>Rating:</span> {rating}</p>
                        <p><span className='font-semibold'>Processing Time:</span> {processing_time}</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <p className='py-3'>{short_description}</p>
                    
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-semibold'>Price: <span className='text-[#FF6D60]'>{price}</span></p>
                        <Link to={`/details/${_id}`}> <button className='btn bg-[#FF6D60] text-white'>View Details</button> </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FilteredSubcategoryCraft;