import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };



    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <div className="dropdown dropdown-hover cursor-pointer dropdown-container pt-3 font-bold">
            <label className='pl-4 lg:pr-3' tabIndex="0">Pages</label>
            <ul tabIndex="0" className="dropdown-content menu w-32">
                <li className=''><Link to='/blogs'>Blogs</Link></li>
                <li className=''><Link to='/review'>Reviews</Link></li>
                <li className=''><Link to='/myportfolio'>My Portfolio</Link></li>

            </ul>
        </div>
        {
            user && <>
                <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold'><Link to='/manageparts'>Parts</Link></li>
                {admin && <li className='font-bold'><Link to='/addproduct'>Add Product</Link></li>}
            </>
        }
        {
            <li className='font-bold'>{user ? <button className="font-bold" onClick={logout}>Signout</button> : <Link to='/login'>Login</Link>}</li>}
        <li className='font-bold'><Link to='/contactUs'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <img className='lg:pl-16 pl-4' src="https://i.ibb.co/BBBVZ69/b-logo.png" alt="" />
            </div>

            <div className="navbar-center hidden lg:flex pl-96">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navber-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden pl-36">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact lg:hidden dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;