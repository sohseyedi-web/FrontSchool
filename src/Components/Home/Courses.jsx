import React, { useState } from 'react';
import './Style.scss';
import Js from '../../Assets/javascript.png';
import Node from '../../Assets/node-js.jpg';
import Mern from '../../Assets/mern.png';
import Reacts from '../../Assets/react-js.png';
import Pedro from '../../Assets/pedro.png'
import Sonny from '../../Assets/sonny.jfif'
import Maxi from '../../Assets/maximi.jfif'
import { FiClock, FiLinkedin, FiGithub, FiInstagram, FiInfo } from 'react-icons/fi';

const Courses = () => {

    const [activeTabs, setactiveTabs] = useState(1);
    const toggleTab = (index) => {
        setactiveTabs(index);
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
                        <div className="courses-body__item-box">
                            <img src={Reacts} alt="reactjs" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name">React & Redux Course</span>
                                <span className="courses-body__item-box__details-time"><FiClock size={22} /> 20 hours</span>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btn">Add Course</button>
                                <span className="courses-body__item-box__actions-price">Price : 18 $</span>
                            </div>
                        </div>
                        <div className="courses-body__item-box">
                            <img src={Node} alt="Nodejs" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name">Node js Course</span>
                                <span className="courses-body__item-box__details-time"><FiClock size={22} /> 10 hours</span>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btn">Add Course</button>
                                <span className="courses-body__item-box__actions-price">Price : 15 $</span>
                            </div>
                        </div>
                        <div className="courses-body__item-box">
                            <img src={Mern} alt="mern" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name">MERN Stack Course</span>
                                <span className="courses-body__item-box__details-time"><FiClock size={22} /> 24 hours</span>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btn">Add Course</button>
                                <span className="courses-body__item-box__actions-price">Price : 23 $</span>
                            </div>
                        </div>
                        <div className="courses-body__item-box">
                            <img src={Js} alt="javascript" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name">JavaScript Course</span>
                                <span className="courses-body__item-box__details-time"><FiClock size={22} /> 13 hours</span>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btn">Add Course</button>
                                <span className="courses-body__item-box__actions-price">Price : 14 $</span>
                            </div>
                        </div>
                    </div>
                    {/* bootcamp*/}
                    <div className={activeTabs === 2 ? "courses-body__item active-item" : "courses-body__item"}>
                        <div className="courses-body__item-error">
                            <FiInfo size={25} /> Boot camps have been canceled due to Corona
                        </div>
                    </div>
                    {/* coach */}
                    <div className={activeTabs === 3 ? "courses-body__item active-item" : "courses-body__item"}>
                        <div className="courses-body__item-box">
                            <img src={Maxi} alt="front" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name text-center">Maximilian (FullStack)</span>
                                <div className="courses-body__item-box__details-social">
                                    <a href='/'><FiLinkedin size={22} /></a>
                                    <a href='/'><FiGithub size={22} /></a>
                                    <a href='/'><FiInstagram size={22} /></a>
                                </div>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btnc">Add Coach</button>
                            </div>
                        </div>
                        <div className="courses-body__item-box">
                            <img src={Sonny} alt="reactjs" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name text-center">Sonny (FrontEnd)</span>
                                <div className="courses-body__item-box__details-social">
                                    <a href='/'><FiLinkedin size={22} /></a>
                                    <a href='/'><FiGithub size={22} /></a>
                                    <a href='/'><FiInstagram size={22} /></a>
                                </div>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btnc">Add Coach</button>
                            </div>
                        </div>
                        <div className="courses-body__item-box">
                            <img src={Pedro} alt="reactjs" />
                            <div className="courses-body__item-box__details">
                                <span className="courses-body__item-box__details-name text-center">Pedro (BackEnd)</span>
                                <div className="courses-body__item-box__details-social">
                                    <a href='/'><FiLinkedin size={22} /></a>
                                    <a href='/'><FiGithub size={22} /></a>
                                    <a href='/'><FiInstagram size={22} /></a>
                                </div>
                            </div>
                            <div className="courses-body__item-box__actions">
                                <button className="courses-body__item-box__actions-btnc">Add Coach</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
