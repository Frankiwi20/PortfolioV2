import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
    {
        title: 'Smart Farming Project',
        description: '\'Enhanced smart farming project with improved features and machine learning integration.\'\n',
        link: 'https://github.com/Frankiwi20/Smart-Farming-V2',
        icon: 'fas fa-code'
    },
    {
        title: 'Ray caster Project',
        description: 'Implementation of a Raycaster, the language used for this project was C, specifically through the WSL and Ubuntu.',
        link: 'https://github.com/Frankiwi20/Ray-Caster-Project',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Image Classification Project',
        description: '\'Advanced image classification using deep learning techniques.\'\n',
        link: 'https://github.com/Frankiwi20/Image-Classification',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'My Portfolio',
        description: '\'Interactive portfolio built with React showcasing some of my projects and skills.\'\n',
        link: 'https://github.com/Frankiwi20/Image-Classification',
        icon: 'fas fa-laptop-code'
    },
    {
        title:'Ward-Anisotropic-BRDF-Implementation',
        description:'This project implements the Ward Anisotropic BRDF, using a 2D Gaussian function to map angles ' +
            'between the halfway vector and surface directions \\(u\\) and \\(v\\). It determines light reflection based on ' +
            'viewing and lighting angles,' +
            ' supporting roughness parameters in \\(u\\) and \\(v\\) to simulate anisotropic surface reflections.',
        link:'https://github.com/Frankiwi20/Ward-Anisotropic-BRDF-Implementation',
        icon:'fas fa-laptop-code'
    }
    // Add more projects as needed
];

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="projects-container">
            <div className="content-wrapper">
                <section id="projects" className="projects-section">
                    <h2 id="proj-header">Feel free to check out my Projects!</h2>
                    <Slider {...settings} className="carousel">
                        {projects.map((project, index) => (
                            <div key={index} className="project-slide">
                                <div className="project" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Untitled-design.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.8 }}>
                                    <i className={project.icon}></i>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </section>
            </div>
        </div>
    );
}

export default Projects;
