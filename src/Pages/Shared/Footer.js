import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-1'>

                <h3 className='font-semibold mb-4'>COMPANY</h3>
                <Link to='/team-members'>Our Team</Link>
                <Link to='/aboutUs'>About Us</Link>
                <Link to='/contact'>Support</Link>
                <Link to='/'>Our Customers</Link>
                <Link to='/privacy-policy'>Privacy Policy</Link>

            </div>

            <div className='col-2'>
                <h3 className='font-semibold'>RESOURCES</h3>
                <Link to='/login'>Marketing</Link>
                <Link to='/login'>Analysis</Link>
                <Link to='/login'>Management</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/login'>Webinar</Link>
            </div>
            <div className='col-3'>
                <h3 className='font-semibold'>SUPPORT</h3>
                <Link to='/login'>Digital Solutions</Link>
                <Link to='/login'>Global Partnerships</Link>
                <Link to='/login'>Transparency Policy</Link>
                <Link to='/login'>Buy Product</Link>
                <Link to='/login'>Booking Services</Link>

            </div>
            <div className='col-4'>
                <h3 className='font-semibold'>CONTACT</h3>
                <div className='flex flex-col gap-3 text-white text-3xl'>
                    <a href='https://www.facebook.com/profile.php?id=100014002066391'><AiOutlineFacebook></AiOutlineFacebook></a>
                    <a href='https://www.instagram.com/arif11819/'><AiOutlineInstagram></AiOutlineInstagram></a>
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>
                    <a href="https://twitter.com/ArifulI12455813"><AiFillTwitterCircle></AiFillTwitterCircle></a>

                </div>
            </div>

        </div>
    );
};

export default Footer;