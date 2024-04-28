import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AllCrafts = () => {
    const loadedAllCrafts = useLoaderData()
    console.log(loadedAllCrafts);
    return (
        <div className=' max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-6xl mx-auto lg:mt-12 mb-6'>
            <Helmet>
                <title>CraftoPia | All Craft Item</title>
            </Helmet>
            <h1 className='text-center my-12 text-2xl md:text-4xl font-bold'>All Arts and Crafts Items</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item Name</th>
                            <th>Subcategory</th>
                            <th>Stock</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedAllCrafts.map((craft, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{craft.item_name}</td>
                                    <td>{craft.subcategory_name}</td>
                                    <td>{craft.stock_status}</td>
                                    <td>{craft.rating}</td>
                                    <td>
                                        <Link to={`/details/${craft._id}`}>
                                            <button className="bg-[#FF6D60] text-white rounded-lg px-3 py-2">View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;