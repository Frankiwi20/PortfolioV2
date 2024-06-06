import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleSidebar }) {
    return (
        <header className="header">
            <button className="menu-btn" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <h1>Frankie's Portfolio</h1>
            <a href="/" className="home-btn">
                <FontAwesomeIcon icon={faHome} />
            </a>
        </header>
    );
}

export default Header;
