import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/undraw_studying_re_deca.svg'
import './Style.scss'

const Intro = () => {
  return (
    <header className='header' dir='rtl'>
      <div className="header-content container">
        <div className="header-content__image">
          <img src={img} alt="" />
        </div>
        <div className="header-content__text">
          <h3 className="header-content__text-title">Front School Academy</h3>
          <div className="header-content__text-subtitle">Learn programming fast, easy and project focused</div>
          <Link to={"/"}>
            <button className='header-content__text-btn'>View Courses</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Intro;
