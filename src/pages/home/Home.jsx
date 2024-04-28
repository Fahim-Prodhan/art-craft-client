
import Banner from './banner/Banner';
import { useLoaderData } from 'react-router-dom';
import HomeCraft from '../../components/homeCraft/HomeCraft';
import HomeSubcategories from '../../components/homeSubcategories/HomeSubcategories';


const Home = () => {
    const loadedCrafts = useLoaderData();


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
                            loadedCrafts.slice(0, 6).map((craft, index) => <HomeCraft key={index} craft={craft}></HomeCraft>)
                        }
                    </div>
                </div> 
            <div className='mt-[100px]' >
                    <h1 className='text-center text-4xl font-bold'>Art & Craft Categories</h1>
                    <p className='pt-3 pb-12 text-center'>Find Your Desire Design and arts filtering from subcategory</p>
                    <HomeSubcategories></HomeSubcategories>
            </div>
            </div>
        </div>
    );
};

export default Home;