import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="1">Shop</a>
            <a href="2">Order</a>
            <a href="3">Inventory</a>
            <a href="4">Login</a>
            </div>
        </nav>
    );
};

export default Header;