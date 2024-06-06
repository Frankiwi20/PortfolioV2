import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
    return (
        <section id="contact" className="cont-section">
            <div className="contact-container">
                <h2>Contact</h2>
                <p>Feel free to contact me and check out my LinkedIn + Github pages.</p> <br/>
                <div className="contact-item">
                    <span>Email: </span>
                    <a href="mailto:fmurcia1@toromail.csudh.edu">fmurcia1@toromail.csudh.edu</a>
                </div>
                <div className="contact-item">
                    <span>Phone: </span>
                    <span>(310) 693-3854</span>
                </div>
                <div className="contact-item">
                    <span>LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/frankie-murcia-87b085214" target="_blank" rel="noopener noreferrer">Frankie Murcia</a>
                </div>
                <div className="contact-item">
                    <span>GitHub: </span>
                    <a href="https://github.com/Frankiwi20" target="_blank" rel="noopener noreferrer">Frankiwi20</a>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;
