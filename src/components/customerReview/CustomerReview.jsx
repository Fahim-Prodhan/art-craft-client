/* eslint-disable react/no-unescaped-entities */
const CustomerReview = () => {


    return (
        <div className="pb-12">
            <h1 className="font-bold text-4xl text-center pb-8">Customer Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/PhY5yPp/1.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Clarissa Muir</h2>
                        <p className="text-[10px] ">MARCH 15, 2021</p>
                        <p>I've been dabbling in watercolor painting for a while now, but I was looking to expand my repertoire beyond just floral. I never imagined I could capture such lifelike expressions with just watercolors. The detailed instructions and accompanying videos made the learning process enjoyable and rewarding. Thanks to this website, I've discovered a newfound passion for painting!</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/M9d1dzr/3.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Aimee Bradshaw</h2>
                        <p className="text-[10px] ">APRIL 4, 2022</p>
                        <p>As an aspiring artist, I'm always on the lookout for resources to improve my skills. This website has been a goldmine for me! The variety of painting and drawing tutorials cater to every interest, whether it's realistic oil portraits or fun cartoon designs. . Plus, the community aspect of sharing artwork and feedback adds an extra layer of motivation. Highly recommend!</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/4KBGLTQ/4.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Lukasz Mitchell</h2>
                        <p className="text-[10px]">JULY 7, 2021</p>
                        <p> stumbled upon this website while searching for landscape painting inspiration, and I'm so glad I did! The mountain view canvas tutorial was incredibly helpful, and I loved experimenting with different techniques to create my own forest-based landscapes. The step-by-step instructions were clear and easy to follow, even for a beginner like me. I can't wait to explore more tutorials on portrait drawing next</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerReview;