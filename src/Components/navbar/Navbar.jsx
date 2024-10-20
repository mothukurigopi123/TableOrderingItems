import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Storecontext } from '../../Context/Storecontext';

const Navbar = () => {
    const [menu, setMenu] = useState("menu");
    const { gettotalcartamount } = useContext(Storecontext);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="navbar">
            <Link to='/' onClick={scrollToTop}>
                <img src="./Pictures/logo.png" alt="" className="logo" />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => { setMenu("home"); scrollToTop(); }} className={menu === 'home' ? "active" : ""}>
                    Home
                </Link>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === 'menu' ? "active" : ""}>
                    Menu
                </a>
                <a href='#footer' onClick={() => setMenu("contact us")} className={menu === 'contact us' ? "active" : ""}>
                    Contact Us
                </a>
            </ul>
            <div className="navbar-right">
                <img src="./Pictures/search_icon.png" alt="Search Icon" className="search-icon" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src="./Pictures/basket_icon.png" alt="Basket Icon" className="basket-icon" />
                    </Link>
                    <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
