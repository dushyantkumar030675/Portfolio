import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Contact Info Card */}
                    <div className="contact-card fade-in-up" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                        <p style={{ marginBottom: '2rem' }}>Feel free to reach out for collaborations or opportunities.</p>
                        <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <a href="mailto:dushyantkumar0306756@gmail.com" className="contact-item">
                                <i className="fas fa-envelope"></i> dushyantkumar0306756@gmail.com
                            </a>
                            <a href="tel:+917505728963" className="contact-item">
                                <i className="fas fa-phone"></i> +91-7505728963
                            </a>
                            <div className="social-links" style={{ justifyContent: 'center' }}>
                                <a href="https://github.com/dushyant-kumar" target="_blank" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/dushyant-kumar-750572dushyant" target="_blank" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

