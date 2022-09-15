import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    const handleNavigateTo = () => {
        navigate('/manageparts');
    }
    return (
        <div className="flex flex-row-reverse pt-20 pb-20">
            <div className=''>
                <img className='pt-20' src="https://themebeyond.com/html/carnation/carnation/img/slider/banner_img.png" alt="" />
                <img className='banner-shape mt-20' src="https://themebeyond.com/html/carnation/carnation/img/slider/banner_shape.png" alt="" />
            </div>
            <div className='pl-20 pt-24'>
                <h1 className='font-bold text-3xl text-amber-500 pb-4'>BEST CAR DEALER</h1>
                <h1 className='font-extrabold text-6xl pb-4'>Popular Vehicle Dealership</h1>
                <h3 className='font-semibold pb-4'>Find the Perfect Car With Our Car Finder Tool</h3>
                <button onClick={handleNavigateTo} className='btn btn-warning'>DISCOVER MORE</button>
            </div>
        </div>
    );
};

export default Banner;