import React from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";


function Navbar() {
    const [activeMenu, setActiveMenu] = useState('');
    const [isMenuBtnOpen, setMenuBtnOpen] = useState(false)
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



    const handleMenuBtn = (event) => {
        // const custom_navbar_mobile = document.querySelector(".custom-navbar-mobile");
        // custom_navbar_mobile.classList.toggle("open")

        const custom_navbar_menu_container = document.querySelector(".custom-navbar .menu-container");
        custom_navbar_menu_container.classList.toggle("open");

        setMenuBtnOpen((prevState) => !prevState)




    }



    return (
        <>
            <div className="custom-navbar">
                <div className="container-fluid">
                    <div className="left-section">
                        <div className="logo-container">
                            <Link to='/'><img className='logo' src="/logo.png" alt="logo" /> </Link>
                        </div>
                        <div className="menu-container">
                            <ul className='custom-nav-links'>
                                <li><Link to='/' className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</Link></li>
                                <li><Link to='/service/' className={activeMenu === 'service' ? 'active' : ''} onClick={() => handleMenuClick('service')}>Services</Link></li>
                                <li><Link to='/about/' className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>About Us</Link></li>
                                <li><Link to='/contact/' className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact us</Link></li>
                                <li><button className="custom-primary-btn know-more-btn d-none">Know More</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-section mt-3">
                        <button className="custom-primary-btn know-more-btn">Know More</button>
                        <button className='hamburger-menu d-none' onClick={handleMenuBtn} style={{ background: "transparent", border: "none" }}>
                            {isMenuBtnOpen ?
                                <BsXLg fontSize={20} color='#1F51FF' />
                                :
                                <BsList fontSize={22} color='#1F51FF' />
                            }


                        </button>





                    </div>
                </div>
            </div>


            {/* mobile navbar */}


            {/* <div style={{ backgroundColor: "#1F51FF" }} className="custom-navbar-mobile">
                <div className="container-fluid">
                    <div className="left-section"></div>

                    <div className="middle-section">
                        <div className="menu-container">
                            <ul className='custom-nav-links-mobile'>
                                <li><Link to='/' className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</Link></li>
                                <li><Link to='/service/' className={activeMenu === 'service' ? 'active' : ''} onClick={() => handleMenuClick('service')}>Services</Link></li>
                                <li><Link to='/about/' className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>About Us</Link></li>
                                <li><Link to='/contact/' className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact us</Link></li>

                                <button className="custom-primary-btn mt-4">Know More</button>

                            </ul>
                        </div>
                    </div>

                    <div className="right-section">
                    </div>
                </div>
            </div > */}
        </>
    );
}

export default Navbar;



