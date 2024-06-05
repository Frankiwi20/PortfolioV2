import React from 'react';
import './Header.css';

function Header({ toggleSidebar }) {
    return (
        <header className="header">
            <button className="menu-btn" onClick={toggleSidebar}>☰</button>
            <h1>Frankie's Portfolio</h1>
        </header>
    );
}

export default Header;
