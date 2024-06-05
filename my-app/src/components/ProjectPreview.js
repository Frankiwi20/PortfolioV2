import React from 'react';
import './ProjectPreview.css';

function ProjectPreview({ text }) {
    return (
        <div className="project-preview">
            <h2>{text}</h2>
        </div>
    );
}

export default ProjectPreview;
