import React from 'react';
import Container from '../Container/Container';
import './Panel.scss'

const Panel = () => {
    return (
        <Container>
            <section className="panel">
                <div className="panel-content container">
                    <div className="panel-content__details">
                        <div className="panel-content__details-name">Name : Soheil</div>
                        <div className="panel-content__details-email">Email : sohseyedi@gmail.com</div>
                        <button className="panel-content__details-password">Change Password</button>
                    </div>
                    <div className="panel-content__list">
                        <div className="panel-content__list-title">My Courses</div>
                        <div className="panel-content__list-courses">
                            <div className="panel-content__list-courses-box">
                                <div className="panel-content__list-courses-box__name">React&Redux</div>
                                <button className="panel-content__list-courses-box__btn">Download</button>
                            </div>
                            <div className="panel-content__list-courses-box">
                                <div className="panel-content__list-courses-box__name">React&Redux</div>
                                <button className="panel-content__list-courses-box__btn">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Panel;
