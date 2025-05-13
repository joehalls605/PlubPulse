import React from 'react';
// import {FaFaceBookF, FaTwitter, FaInstagram, FaLinkedIn} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row mb-4">
                    {/* Column 1: Logo and Description */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                            <span className="me-2">
                                LOGO HERE
                            </span>
                            <h5 className="fw-bold mb-0">
                                <span className="text-primary">PLAB</span>Pulse
                            </h5>
                        </div>
                        <p className="text-muted small">
                            PLAB Pulse provides comprehensive study materials and practice tests to help medical professionals prepare for the PLAB examination.
                        </p>
                        <div className="d-flex gap-3 mb-3">
                            <a href="#" className="text-muted">FACEBOOKLOGO</a>
                            <a href="#" className="text-muted">TWITTERLOGO</a>
                            <a href="#" className="text-muted">INSTAGRAMLOGO</a>
                            <a href="#" className="text-muted">LINKEDINLOGO</a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-md-4">
                        <h6 className="mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                LINK COMPONENT HERE SET UP HOME
                            </li>
                            <li className="mb-2">
                                LINK COMPONENT HERE SET UP QUIZ
                            </li>
                            <li className="mb-2">
                                LINK COMPONENT HERE SET UP TOPICS
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="col-md-4">
                        <h6 className="mb-3">Contact</h6>
                        <div className="d-flex mb-2">
                            <span className="me-2">
                                MAP ICON HERE
                            </span>
                            <span className="text-muted">London, United Kingdom</span>
                        </div>
                        <div className="d-flex mb-2">
                            <span>
                                EMAIL ICON HERE
                            </span>
                            <a href="mailto:contact@plabpulse.com" className="text-decoration-none text-muted">contact@plabpulse.com</a>
                        </div>
                    </div>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="small text-muted mb-md-0">© 2025 PLAB Pulse. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                   PRIVACY POLICY LINK
                                </li>
                                <li className="list-inline-item mx-3">
                                    TERMS OF SERVICE LINK
                                </li>
                                <li className="list-inline-item">
                                   COOKIES POLICY LINK
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;