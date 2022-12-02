import React from 'react';
import logo from '../../img/logo.webp'

import './Footer.css'

const Footer = () => {
    return (
        <div className='  px-10'>
            <footer className="footer p-10  py-20 mt-20 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className='text-white'>LusStay<br />Providing reliable service since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-white">Room</a>
                    <a className="link link-hover text-white">Garden</a>
                    <a className="link link-hover text-white">Hotels</a>
                    <a className="link link-hover text-white">Convention center</a>
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                </div>
                <div>
                    <span className="footer-title text-white">Legal</span>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>

                </div>

            </footer>
        </div>
    );
};

export default Footer;