import React from 'react';

const projects = [
    {
        title: 'Smart Farming Project',
        description: 'This is version 2 of my smart farming project.',
        link: 'https://github.com/Frankiwi20/Smart-Farming-V2',
        icon: 'fas fa-code'
    },
    {
        title: 'Ray caster Project',
        description: 'Implementation of a Raycaster, the language used for this project was C, specifically through the WSL and Ubuntu.',
        link: 'https://github.com/Frankiwi20/Ray-Caster-Project',
        icon: 'fas fa-laptop-code'
    },
    // Add more projects as needed
];

function Projects() {
    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <i className={project.icon}></i>
                    <h3 className="project-title">{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </section>
    );
}

export default Projects;
