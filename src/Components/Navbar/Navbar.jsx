import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../../Store/reducers/authReducers';
import './Navbar.scss'


const Navbar = () => {


    const { user } = useSelector(state => state.auth);
    const history = useNavigate();
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logOut())
        history("/")
    }


    return (
        <nav className='navbars'>
            <div className="container navbars-item">
                <Link to="/" >
                    <h2 className="navbars-item__logo">FrontSchool</h2>
                </Link>
                <div className="navbars-item__links">
                    {
                        user ? (
                            <>
                                <span className='navbars-item__links-online'></span>
                                <button className='navbars-item__links-logout' onClick={handleLogout}>LogOut</button>
                            </>
                        ) : (
                            <>
                                <NavLink to={"/login"} className={({ isActive }) => isActive ? 'activeLinks' : ''}>Login</NavLink>
                                /
                                <NavLink to={"/register"} className={({ isActive }) => isActive ? 'activeLinks' : ''}>Register</NavLink>
                            </>
                        )
                    }
                </div>
            </div >
        </nav >
    );
};

export default Navbar;
