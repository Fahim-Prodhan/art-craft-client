
import Banner from './banner/Banner';
import { useLoaderData } from 'react-router-dom';
import HomeCraft from '../../components/homeCraft/HomeCraft';
import HomeSubcategories from '../../components/homeSubcategories/HomeSubcategories';
import LottieComp from '../../components/lottie/LottieComp';
import { useState } from 'react';


const Home = () => {
    const loadedCrafts = useLoaderData();

    const [number, setNumber] = useState(6)

    const handleSeeMore = () => {
        setNumber(number + 3)
    }


    // console.log(loadedSubcategory);



    return (
        <div className='scroll-smooth'>
            <Banner></Banner>
            <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">

                {/* Craft Card Section */}
                <div className='mt-[100px]'>
                    <h1 className='text-center text-4xl font-bold'>Craft Items</h1>
                    <p className='pt-3 pb-12 text-center'>Explore the world famous arts. Find your Choice</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                        {
                            loadedCrafts.slice(0, number).map((craft, index) => <HomeCraft key={index} craft={craft}></HomeCraft>)
                        }
                    </div>
                    <div className='text-center mt-12'>
                        <button onClick={handleSeeMore} className="bg-[#65fa8f] duration-150 px-5 py-2 rounded-md text-xl hover:bg-[#98D8AA]">See More</button>
                    </div>
                </div>
                <div className='mt-[100px]' >
                    <h1 className='text-center text-4xl font-bold'>Art & Craft Categories</h1>
                    <p className='pt-3 pb-12 text-center'>Find Your Desire Design and arts filtering from subcategory</p>
                    <HomeSubcategories></HomeSubcategories>
                </div>

            </div>
            <div className='mt-[100px]' >
                <h1 className='text-center text-4xl font-bold pb-12'>Get the Best Painting</h1>
                <LottieComp></LottieComp>
            </div>
        </div>
    );
};

export default Home;