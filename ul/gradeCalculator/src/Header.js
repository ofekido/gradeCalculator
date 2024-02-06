// Header.js
import React from 'react';
import logo from './logo.png'; // Import your logo image

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Calculating Your Grades</h1>
        </header>
    );
}

export default Header;
