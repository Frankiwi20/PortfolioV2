import React from 'react';
import Slider from 'react-slick';
import './Introduction.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Introduction() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    const images = [
        `${process.env.PUBLIC_URL}/Screenshot_20240531_173935_Gallery.jpg`,
        `${process.env.PUBLIC_URL}/FB_IMG_1706762151564.jpg`,
        `${process.env.PUBLIC_URL}/IMG-20240518-WA0013.jpg`,
        /*`${process.env.PUBLIC_URL}/image3.jpg`,*/

        // Add more image paths as needed
    ];

    return (
        <section id="introduction" className="intro-section">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index}`} className="profile-picture"/>
                    </div>
                ))}
            </Slider>
            <p className="intro-para">
                Hello! I'm Frankie Murcia, a passionate developer with experience in React, Node.js, and other modern web technologies.
                I'm also a recent graduate from California State University, Dominguez Hills (CSUDH) with a Bachelor of Science in Computer Science.
                Fluent in Spanish, I'm passionate about creating equitable and inclusive experiences on the web.

                Currently, I'm deeply engaged in two impactful projects. Firstly, I'm part of a team focused on
                information systems and cultural competency. Our goal is to enhance the accessibility and user experience
                of Food Bank information for the Hispanic/Latino population. To achieve this, we're implementing an
                evaluation framework that bridges cultural aspects with web development, ensuring our solutions
                are culturally sensitive and effective.

                Secondly, I'm working on a smart farming project, leveraging machine learning
                to analyze soil data for predictive insights and patterns. By combining my computer
                science skills with UX Design principles, I strive to create intuitive digital experiences
                that address cultural needs and promote inclusivity.

                In my free time, I enjoy rock climbing, rollerblading, and spending time plane spotting with my 10-year-old son.
                I'm excited to connect and explore how I can contribute my expertise in computer science, UX Design,
                and machine learning to make a positive impact in the digital space.
            </p>
        </section>
    );
}

export default Introduction;
