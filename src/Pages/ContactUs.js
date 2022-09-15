import React, { useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { HiPhoneOutgoing, HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [textarea, setTextarea] = useState('');

    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_mac8jzq', 'template_xb52458', event.target, 'l3GtawXrxYBe-5JiW', '8eo7Ex8DfC79YZpc5PyxX').then(res => {
            toast.success("Thank You Sir For Your Response!!")
        }).catch(err => console.log(err));
        setName('');
        setEmail('');
        setSubject('');
        setTextarea('');
    }

    return (
        <div className='contact-container bg-slate-50'>
            <div className='text-center lg:pr-0 pr-6'>
                <h1 className='lg:text-3xl text-2xl px-24 font-bold text-black pt-16'>Get In Touch With Us</h1>

            </div>
            <div className='lg:flex lg:flex-row flex flex-col lg:px-40 px-4 lg:gap-16 gap-6'>
                <div className='text-white lg:my-10 mt-4'>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                        <div>
                            <HiPhoneOutgoing className='h-10 w-10 text-rose-500' />
                        </div>
                        <div>
                            <p>Call Us On</p>
                            <p>+00801303783150</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                        <div>
                            <HiOutlineMail className='h-10 w-10 text-rose-500' />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>top.gear.perform007@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4 text-black'>
                        <div>
                            <HiLocationMarker className='h-10 w-10 text-rose-500' />
                        </div>
                        <div>
                            <p>Visit Office</p>
                            <p>Mohammadpur, Dhaka-1207, Bangladesh </p>
                        </div>
                    </div>
                </div>
                <div className='text-white mx-auto lg:mt-4 lg:mb-28 mb-12'>
                    <form onSubmit={sendEmail}>
                        <div className='lg:flex lg:flex-row flex flex-col gap-3 py-6'>
                            <input onChange={event => setName(event.target.value)} value={name} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text" name="name" placeholder='Name' required />
                            <input onChange={event => setEmail(event.target.value)} value={email} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="email" name="email" placeholder='Email' required />
                        </div>
                        <input onChange={event => setSubject(event.target.value)} value={subject} className='rounded-[5px] lg:w-[780px] w-80 h-[42px] pl-6  mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text" name="subject" placeholder='Subject' required /><br /> <br />
                        <textarea onChange={event => setTextarea(event.target.value)} value={textarea} className='rounded-[5px] lg:w-[780px] lg:h-32 w-80 h-[150px] pl-6 pt-6 lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' name="message" id="" placeholder='Write Your Message' required></textarea>
                        <div className='flex'>
                            <input type="submit" className='px-3 py-1 border border-rose-300 relative group overflow-hidden font-medium bg-rose-50 text-rose-600 inline-block transition-all duration-200 ease-out transform translate-y-0 rounded-xl group-hover:h-full opacity-90 sm:btn-md md:btn-md lg:btn-lg shadow lg:mt-6 mt-4 hover:bg-rose-500 hover:text-white' value="Send Message" />
                            <ToastContainer className="w-20 ml-48 pt-4" />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default ContactUs;