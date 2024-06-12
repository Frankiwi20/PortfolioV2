import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="landing-page">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover my projects, learn about me, and get in touch!</p>
            <div className="grid-container">
                <div className="grid-item" onClick={() => handleNavigation('/introduction')}>
                    <h2>About Me</h2>
                </div>
                <div className="grid-item" onClick={() => handleNavigation('/projects')}>
                    <h2>My Projects</h2>
                </div>
                <div className="grid-item" onClick={() => handleNavigation('/contact')}>
                    <h2>Get in Touch!</h2>
                </div>
            </div>
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
            <div className="dot dot5"></div>
            <div className="dot dot6"></div>
        </div>
    );
}

export default Landing;
