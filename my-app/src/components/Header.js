import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleSidebar }) {
    return (
        <header className="header">
            <button className="menu-btn" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <h1>Frankie's Portfolio</h1>
            <div className="initials">
                FM
            </div>
        </header>
    );
}

export default Header;
