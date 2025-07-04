import './nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdWhatsapp, MdOutlineArrowDropDown, MdMail  } from "react-icons/md";
import { TiTimes, TiThMenu } from "react-icons/ti";

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    // Toggle hamburger menu
    const toggleHamburger = () => {
        setHamburger(!hamburger);
    };

    // Toggle dropdown menu
    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setDropdown(!dropdown);
    };

    // Handle window resize to auto-hide hamburger menu
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
            if (window.innerWidth > 768) {
                setHamburger(false); // Auto-hide menu on larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar flex_box align_center justify_between">
            <div className="logo">
                <Link to="/"><h2>HI-TECH</h2></Link>
            </div>

            {/* Nav Links */}
            <ul className={`nav_links ${hamburger ? 'active' : ''} ${isLargeScreen ? 'desktop' : 'mobile'}`}>
                 <li><Link to="/about">About Us</Link></li>

                <li className="dropdown">
                    <span className="dropdown_icon" >
                        <Link to="#" onClick={toggleDropdown}>Courses<MdOutlineArrowDropDown /></Link>
                    </span>
                    {dropdown && (
                        <ul className="dropdown_menu">
        
                            <li>
                                <Link to="/mobile" className='flex_box '>

                                    <div className="menu"><h3>Mobile Reapairing</h3></div>
                                </Link>
                            </li>
        
                            <li>
                                <Link to="/laptop" className='flex_box '>

                                    <div className="menu"><h3>Laptop Reapairing</h3></div>
                                </Link>
                            </li>
                                                        <li>
                                <Link to="/hard_software" className='flex_box '>

                                    <div className="menu"><h3>Hardware & Software Course</h3></div>
                                </Link>
                            </li>
                                                        <li>
                                <Link to="/emmc" className='flex_box '>

                                    <div className="menu"><h3>EMMC Reapairing Course</h3></div>
                                </Link>
                            </li>
                                                        <li>
                                <Link to="/oca" className='flex_box '>

                                    <div className="menu"><h3>OCA Reapairing Course</h3></div>
                                </Link>
                            </li>
                                                        <li>
                                <Link to="/iphone" className='flex_box '>

                                    <div className="menu"><h3>Iphone Reapairing</h3></div>
                                </Link>
                            </li>
                        </ul>
                    )}

                </li>
               <li><Link to="/support">Support</Link></li>
               <li><Link to="/branches">Branches</Link></li>
               <li><Link to="/career">Career</Link></li>
               <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                
            </ul>

            {/* Social Links */}
            <ul className="flex_box social_links">
                <li><Link to=""><MdWhatsapp /></Link></li>
                <li><Link to=""><MdMail /></Link></li>
            </ul>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleHamburger}>
                {hamburger ? <TiTimes /> : <TiThMenu />}
            </div>
        </nav>
    );
};

export default Nav;
