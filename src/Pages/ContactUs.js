import React from 'react';

const ContactUs = () => {
    return (
        <section
            className='flex flex-col justify-center items-center py-28 bg-black'>
            <div className='mb-10'>
                <h2 className='text-xl text-primary ml-24 font-bold'>Contact Us</h2>
                <h2 className="text-3xl text-white">Stay connected with us</h2>
            </div>
            <div className='mb-5'>
                <input className='w-80 mb-2 rounded pl-3 h-[40px]' type="text" placeholder='Email Address' /><br />
                <input className='w-80 mb-2 rounded pl-3 h-[40px]' type="text" placeholder='Subject' /> <br />
                <textarea className='w-80 mb-2 rounded pl-3 h-[100px]' type="text" placeholder='Your message' />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </section>
    );
};

export default ContactUs;