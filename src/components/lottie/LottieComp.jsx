import React from 'react';
import animation1 from './Animation1.json'
import animation2 from './Animation2.json'
import animation4 from './Animation 4.json'
import Lottie from 'lottie-react';

const LottieComp = () => {
    return (
        <div className='grid md:grid-cols-3 bg-base-200'>
            <div>
                <Lottie animationData={animation1}></Lottie>
            </div>
            <div className='w-[75%] place-self-center -mt-10'>
                <Lottie animationData={animation2}></Lottie>
            </div>
            <div className='w-[65%] place-self-center'>
                <Lottie animationData={animation4}></Lottie>
            </div>
        </div>
    );
};

export default LottieComp;