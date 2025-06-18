import React from 'react';
import {Link} from "react-router-dom";
import '../index.css';
import {faBookMedical, faMapPin, faEnvelope, faHeartbeat} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row mb-4">
                    {/* Column 1: Logo and Description */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                            <span className="me-2">
                                <FontAwesomeIcon icon={faHeartbeat} className="me-2" />
                            </span>
                            <p className="mb-0">
                                <span className="text-primary fw-2">PLAB</span>Pulse
                            </p>
                        </div>
                        <p className="text-muted small">
                            PLAB Pulse provides comprehensive study materials and practice tests to help medical professionals prepare for the PLAB examination.
                        </p>
                        <div className="d-flex gap-3 mb-3">
                            <a href="#" className="text-muted">
                                <FontAwesomeIcon icon={faFacebookF} className="social-icon"/>
                            </a>
                            <a href="#" className="text-muted social-icon">
                                <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                            </a>
                            <a href="#" className="text-muted social-icon">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
                            </a>
                            <a href="#" className="text-muted social-icon ">
                                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon"/>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-md-4">
                    <h6 className="mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="footer-link">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="footer-link">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/topics" className="footer-link">Topics</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="col-md-4">
                        <h6 className="mb-3">Contact</h6>
                        <div className="d-flex mb-2">
                            <span className="me-2">
                                <FontAwesomeIcon icon={faMapPin}/>
                            </span>
                            <span className="text-muted footer-contact-link">21 Birch Street, London, United Kingdom</span>
                        </div>
                        <div className="d-flex mb-2">
                            <span>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </span>
                            <a href="mailto:contact@plabpulse.com" className="text-decoration-none text-muted footer-contact-link">contact@plabpulse.com</a>
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
                                    <Link to="/privacy-policy" className="text-decoration-none footer-link">
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li className="list-inline-item mx-3">
                                    <Link to="/terms-of-service" className="text-decoration-none footer-link">
                                        <span>Terms of service</span>
                                    </Link>
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