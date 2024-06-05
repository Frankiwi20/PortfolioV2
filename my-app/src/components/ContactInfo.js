import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
    return (
        <section id="contact" className="section">
            <div className="contact-container">
                <h2>Contact</h2>
                <p>Feel free to contact me at:</p>
                <p>Email: <a href="mailto:fmurcia1@toromail.csudh.edu">fmurcia1@toromail.csudh.edu</a></p>
                <p>Phone: (310) 693-3854</p>
            </div>
        </section>
    );
}

export default ContactInfo;
