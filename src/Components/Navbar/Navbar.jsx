import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {

    const { user } = useSelector(state => state.auth);


    return (
        <nav className='navbars'>
            <div className="container navbars-item">
                <Link to="/" >
                    <h2 className="navbars-item__logo">FrontSchool</h2>
                </Link>
                <div className="navbars-item__links">
                    <NavLink to={"/login"} className={({ isActive }) => isActive ? 'activeLinks' : ''}>Login</NavLink>
                    /
                    <NavLink to={"/register"} className={({ isActive }) => isActive ? 'activeLinks' : ''}>Register</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
