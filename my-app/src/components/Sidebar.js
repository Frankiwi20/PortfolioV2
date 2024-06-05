import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <nav>
                <Link to="/" onClick={toggleSidebar}>Home</Link>
                <Link to="/introduction" onClick={toggleSidebar}>About Me</Link>
                <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
                <Link to="/contact" onClick={toggleSidebar}>Contact</Link> {/* Corrected Link */}
            </nav>
        </div>
    );
}

export default Sidebar;
