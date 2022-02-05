import React from 'react';
import './Style.scss'

const Intro = () => {
    return (
        <section className='intro'>
            <div className="container">
                <div className="intro-title">roadmap to becoming a <span>full stack </span>developer</div>
                <div className="intro-content">
                    <div className="intro-content__block">
                        <div className="intro-content__block-title">
                            <h6>Learn Html , Css</h6>
                            <span>Step 1</span>
                        </div>
                        <p className="intro-content__block-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aperiam ea vero delectus temporibus beatae.
                        </p>
                    </div>
                    <div className="intro-content__block">
                        <div className="intro-content__block-title">
                            <h6>Learn JavaScript</h6>
                            <span>Step 2</span>
                        </div>
                        <p className="intro-content__block-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aperiam ea vero delectus temporibus beatae.
                        </p>
                    </div>
                    <div className="intro-content__block">
                        <div className="intro-content__block-title">
                            <h6>Learn Javascript Framework</h6>
                            <span>Step 3</span>
                        </div>
                        <p className="intro-content__block-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aperiam ea vero delectus temporibus beatae.
                        </p>
                    </div>
                    <div className="intro-content__block">
                        <div className="intro-content__block-title">
                            <h6>Learn NodeJs | Python | ...</h6>
                            <span>Step 4</span>
                        </div>
                        <p className="intro-content__block-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aperiam ea vero delectus temporibus beatae.
                        </p>
                    </div>
                    <div className="intro-content__block">
                        <div className="intro-content__block-title">
                            <h6>Learn Git ,Github</h6>
                            <span>Step 5</span>
                        </div>
                        <p className="intro-content__block-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aperiam ea vero delectus temporibus beatae.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Intro;
