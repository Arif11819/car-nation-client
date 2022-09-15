import React from 'react';
import './BestServices.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const BestServices = () => {
    const navigate = useNavigate();
    const handleNavigateTo = () => {
        navigate('/blogs');
    }
    return (
        <div className="bg-slate-100 w-full h-[800px] grid grid-cols-2">
            <div className='flex pt-24 pl-20 gap-6'>
                <div>
                    <div className='about-exp pb-7'>
                        <h2>49+</h2>
                    </div>
                    <img className='rounded' src="https://themebeyond.com/html/carnation/carnation/img/images/about_img01.jpg" alt="" />
                </div>
                <div>
                    <img className='rounded' src="https://themebeyond.com/html/carnation/carnation/img/images/about_img02.jpg" alt="" />
                </div>

            </div>
            <div className='pt-32'>
                <h4 className='text-rose-600 font-bold pb-3'>ABOUT OUR COMPANY</h4>
                <h1 className='text-4xl text-black font-bold pb-8'>More For Trade-In Could <br /> Increase Car Here.</h1>
                <div className='flex pb-8 gap-6'>
                    <h1 className='text-7xl text-rose-600'>M</h1>
                    <p className='pt-3 font-semibold'>The Car House specializes in top quality inventory with a wide variety of options and styles. Our experienced, friendly staff is here to help you find what not only fits your lifestyle, but also your budget.</p>
                </div>
                <p className='flex items-center gap-2 text-3xl font-semibold pb-2'><AiFillCheckCircle></AiFillCheckCircle><h2 className='text-[16px] text-black'> Sometimes known about us</h2></p>
                <p className='flex items-center gap-2 text-3xl font-semibold pb-2'><AiFillCheckCircle></AiFillCheckCircle><h2 className='text-[16px] text-black'> Best solution for developing your business</h2></p>
                <p className='flex items-center gap-2 text-3xl font-semibold pb-2'><AiFillCheckCircle></AiFillCheckCircle><h2 className='text-[16px] text-black'> Buy Product for our site</h2></p>
                <p className='flex items-center gap-2 text-3xl font-semibold pb-6'><AiFillCheckCircle></AiFillCheckCircle><h2 className='text-[16px] text-black'> Check out lastest update product</h2></p>
                <button onClick={handleNavigateTo} className='btn bg-rose-600 pl-8 pr-8'>LEARN MORE</button>
            </div>
        </div>
    );
};

export default BestServices;