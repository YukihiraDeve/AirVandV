import React from 'react';

import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className="header">
        <div className="header-logo">
            <div className="logo"></div>
            <h1 className="title">AirV&V</h1>
        </div>
        <button className="button">
            <span className="button-text">Connect Wallet</span>
        </button>
    </div>
    );
};

export default Header;