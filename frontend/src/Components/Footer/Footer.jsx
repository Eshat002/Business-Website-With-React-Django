import React from 'react'
import './Footer.css'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Footer = () => {

    const [activeMenu, setActiveMenu] = useState('');

    const location = useLocation();


    useEffect(() => {
        // Extract the pathname from the current location
        const pathname = location.pathname;

        // Determine the active menu based on the pathname
        if (pathname === '/') {
            setActiveMenu('home');
        } else if (pathname === '/service/') {
            setActiveMenu('service');
        } else if (pathname === '/about/') {
            setActiveMenu('about');
        } else if (pathname === '/contact/') {
            setActiveMenu('contact');
        }
    }, [location.pathname]); // Re-run effect when pathname changes


    const handleMenuClick = (menuName) => {

        setActiveMenu(menuName);
    };

    return (
        <footer>
            <div className="container-fluid">
                <div className="footer-left-container"></div>
                <div className="footer-middle-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src="/logo.png" alt="logo" />
                        </Link>
                    </div>

                    <div className="footer-menu-container">
                        <ul className='custom-footer-links'>
                            <li><Link to='/service/' className={activeMenu === 'service' ? 'active' : ''} onClick={() => handleMenuClick('service')}>Services</Link></li>
                            <li><Link to='/about/' className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>About Us</Link></li>
                            <li><Link to='/contact/' className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact us</Link></li>
                            <li><button className="custom-primary-btn know-more-btn d-none">Know More</button>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="footer-right-container"></div>
            </div>
        </footer>
    )
}

export default Footer
