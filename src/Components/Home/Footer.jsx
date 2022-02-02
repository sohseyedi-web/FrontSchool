import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content container">
                <h2 className="footer-content__logo">
                    FrontSchool
                </h2>
                <div className="footer-content__social">
                    <a href="/"><FiGithub size={25} /></a>
                    <a href="/"><FiLinkedin size={25} /></a>
                    <a href="/"><FiTwitter size={25} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
