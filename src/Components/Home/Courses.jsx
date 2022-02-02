import React from 'react';
import './Style.scss';
import Js from '../../Assets/javascript.png';
import Node from '../../Assets/node-js.jpg';
import Mern from '../../Assets/mern.png';
import Reacts from '../../Assets/react-js.png';
import { FiClock } from 'react-icons/fi';

const Courses = () => {
    return (
        <section className='courses'>
            <div className="courses-title">Online Courses</div>
            <div className="courses-content container">
                <div className="courses-content__box">
                    <img src={Reacts} alt="reactjs" />
                    <div className="courses-content__box-body">
                        <span className="courses-content__box-body__name">React & Redux Course</span>
                        <span className="courses-content__box-body__time"><FiClock size={22} /> 20 hours</span>
                    </div>
                    <div className="courses-content__box-footer">
                        <button className="courses-content__box-footer__btn">Add Course</button>
                        <span className="courses-content__box-footer__price">Price : 18 $</span>
                    </div>
                </div>
                <div className="courses-content__box">
                    <img src={Node} alt="reactjs" />
                    <div className="courses-content__box-body">
                        <span className="courses-content__box-body__name">Node js Course</span>
                        <span className="courses-content__box-body__time"><FiClock size={22} /> 10 hours</span>
                    </div>
                    <div className="courses-content__box-footer">
                        <button className="courses-content__box-footer__btn">Add Course</button>
                        <span className="courses-content__box-footer__price">Price : 18 $</span>
                    </div>
                </div>
                <div className="courses-content__box">
                    <img src={Mern} alt="reactjs" />
                    <div className="courses-content__box-body">
                        <span className="courses-content__box-body__name">MERN Stack Course</span>
                        <span className="courses-content__box-body__time"><FiClock size={22} /> 24 hours</span>
                    </div>
                    <div className="courses-content__box-footer">
                        <button className="courses-content__box-footer__btn">Add Course</button>
                        <span className="courses-content__box-footer__price">Price : 18 $</span>
                    </div>
                </div>
                <div className="courses-content__box">
                    <img src={Js} alt="reactjs" />
                    <div className="courses-content__box-body">
                        <span className="courses-content__box-body__name">Java Script Course</span>
                        <span className="courses-content__box-body__time"><FiClock size={22} /> 13 hours</span>

                    </div>
                    <div className="courses-content__box-footer">
                        <button className="courses-content__box-footer__btn">Add Course</button>
                        <span className="courses-content__box-footer__price">Price : 18 $</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
