import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../images/banner_img.png';
import bannerShape from '../../images/banner_shape.png';
import './Banner.css'

const Banner = () => {
    const navigate = useNavigate();
    const handleNavigateTo = () => {
        navigate('/manageparts');
    }
    return (
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-20 lg:pb-20">
            <div data-aos="fade-left" className=''
                data-aos-duration="1000">
                <img className='lg:pt-20 pt-28 w-80 ml-12 lg:ml-0 lg:w-full' src={banner} alt="" />
                <img className='banner-shape mt-20' src={bannerShape} alt="" />
            </div>
            <div data-aos="fade-right"
                data-aos-duration="1000" className='pl-20 pt-24'>
                <h1 className='font-bold lg:text-3xl text-2xl text-amber-500 pb-4'>BEST CAR DEALER</h1>
                <h1 className='font-extrabold lg:text-6xl text-4xl pb-4'>Popular Vehicle <br /> Dealership</h1>
                <h3 className='font-semibold pb-4'>Find the Perfect Car With Our Car Finder Tool</h3>
                <button onClick={handleNavigateTo} className='btn btn-warning'>DISCOVER MORE</button>
            </div>
        </div>
    );
};

export default Banner;