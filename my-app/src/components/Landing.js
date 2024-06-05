import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import ProjectPreview from './ProjectPreview';

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
                    <ProjectPreview text="My Projects" />
                </div>
                <div className="grid-item" onClick={() => handleNavigation('/contact')}>
                    <h2>Contact</h2> {/* Corrected Link */}
                </div>
            </div>
        </div>
    );
}

export default Landing;
