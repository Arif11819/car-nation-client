import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };



    const menuItems = <>
        <li className='font-bold font-sans text-amber-300'><Link to='/'>Home</Link></li>
        <li className='font-bold font-sans text-amber-300'><Link to='/blogs'>Blogs</Link></li>
        <li className='font-bold font-sans text-amber-300'><Link to='/review'>Reviews</Link></li>
        <li className='font-bold font-sans text-amber-300'><Link to='/myportfolio'>My Portfolio</Link></li>
        {
            user && <>
                <li className='font-bold font-sans text-amber-300'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold font-sans text-amber-300'><Link to='/manageparts'>Manage Parts</Link></li>
            </>
        }
        {
            <li className='font-bold font-sans text-amber-300'>{user ? <button className="btn btn-ghost font-sans font-bold text-amber-300" onClick={logout}>Sign out</button> : <Link to='/login'>Login</Link>}</li>}
        <li className='font-bold font-sans text-amber-300'><Link to='/contactUs'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl font-sans font-bold ml-10">Zara Car Manufacturer House</a>
            </div>
            <div className="navbar-center hidden lg:flex ml-36">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navber-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;