import React, { useState } from 'react';
import { FiClock, FiLinkedin, FiGithub, FiInstagram, FiInfo } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/reducers/cartReducers'
import dataList from '../../Data/db';
import './Style.scss';

const Courses = () => {

    const { courses, coach } = dataList;
    const { cartItems } = useSelector(state => state.cart);
    const [activeTabs, setactiveTabs] = useState(1);
    const dispatch = useDispatch();

    const handleClickToCart = (courses) => {
        dispatch(addToCart(courses))
    }
    const toggleTab = (index) => {
        setactiveTabs(index);
    }

    const checkInCart = (cartItems, item) => {
        return cartItems.find(c => c.id === item.id)
    }

    return (
        <section className='courses'>
            <div className="container">
                <div className="courses-header">
                    <div className={activeTabs === 1 ? "courses-header__tab active-tab" : "courses-header__tab"} onClick={() => toggleTab(1)}>Online Courses</div>
                    <div className={activeTabs === 2 ? "courses-header__tab active-tab" : "courses-header__tab"} onClick={() => toggleTab(2)}>BootCamp</div>
                    <div className={activeTabs === 3 ? "courses-header__tab active-tab" : "courses-header__tab"} onClick={() => toggleTab(3)}>Private Coach</div>
                </div>
                <div className="courses-body">
                    {/* online courses */}
                    <div className={activeTabs === 1 ? "courses-body__item active-item" : "courses-body__item"}>
                        {
                            courses.map((course) => (
                                <div className="courses-body__item-box" key={course.id}>
                                    <img src={course.img} alt={course.title} />
                                    <div className="courses-body__item-box__details">
                                        <span className="courses-body__item-box__details-name">{course.title} Course</span>
                                        <span className="courses-body__item-box__details-time"><FiClock size={22} />{course.time}</span>
                                    </div>
                                    <div className="courses-body__item-box__actions">
                                        <button className={checkInCart(cartItems, course) ? "courses-body__item-box__actions-btn btn-cart" : "courses-body__item-box__actions-btn"} onClick={() => handleClickToCart(course)}>
                                            {checkInCart(cartItems, course) ? 'Added To Cart' : 'Add Course'}
                                        </button>
                                        <span className="courses-body__item-box__actions-price">Price :{course.price} $</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* bootcamp*/}
                    <div className={activeTabs === 2 ? "courses-body__item active-item" : "courses-body__item"}>
                        <div className="courses-body__item-error">
                            <FiInfo size={25} /> Boot camps have been canceled due to Corona
                        </div>
                    </div>
                    {/* coach */}
                    <div className={activeTabs === 3 ? "courses-body__item active-item" : "courses-body__item"}>
                        {
                            coach.map((item) => (
                                <div className="courses-body__item-box" key={item.id}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="courses-body__item-box__details">
                                        <span className="courses-body__item-box__details-name text-center">{item.title}</span>
                                        <div className="courses-body__item-box__details-social">
                                            <a href='/'><FiLinkedin size={22} /></a>
                                            <a href='/'><FiGithub size={22} /></a>
                                            <a href='/'><FiInstagram size={22} /></a>
                                        </div>
                                    </div>
                                    <div className="courses-body__item-box__actions">
                                        <button className={checkInCart(cartItems, item) ? "courses-body__item-box__actions-btnc btn-cart" : "courses-body__item-box__actions-btnc"} onClick={() => handleClickToCart(item)}>
                                            {checkInCart(cartItems, item) ? 'Added To Cart' : 'Add Coach'}
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
