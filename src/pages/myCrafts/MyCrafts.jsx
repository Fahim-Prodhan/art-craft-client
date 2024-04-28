import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCraft from '../../components/myCraft/MyCraft';
import baseUrl from '../../services/helper';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyCrafts = () => {

    const loadedMyCrafts = useLoaderData()
    const [myCrafts, setMyCrafts] = useState(loadedMyCrafts)
    const { setLoading } = useContext(AuthContext)

    const handleFilter = value => {

        fetch(`${baseUrl}/crafts/filter/${value}`)
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setMyCrafts(data)
                setLoading(false)
            })
    }

    const handelDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseUrl}/crafts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                            });

                            // Remove from UI
                            const remainingData = myCrafts.filter(c => c._id != id)
                            setMyCrafts(remainingData)
                        }
                    })
            }
        });


    }

    return (
        <div className=' max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12 mb-12'>
            <Helmet>
                <title>CraftoPia | My Craft</title>
            </Helmet>
            <h1 className='text-center text-4xl font-bold '>My Art & Craft List</h1>
            <div className='grid justify-center mb-12 my-6'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter Customization</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleFilter("Yes")}>Yes</a></li>
                        <li><a onClick={() => handleFilter("No")}>No</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid gap-6 md:grid-cols-2'>
                {
                    myCrafts.map(craft => <MyCraft key={craft._id} craft={craft} handelDelete={handelDelete}></MyCraft>

                    )
                }
            </div>
        </div>
    );
};



export default MyCrafts;