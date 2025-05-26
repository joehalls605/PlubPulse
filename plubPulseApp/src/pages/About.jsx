import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const About = () => {

    return(
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="mb-3 fw-bold display-4">About Us</h1>
                <p className="lead mx-auto" style={{maxWidth: "800px"}}>
                    We're here to support  medical graduates every step of the way—offering guidance,
                    resources, and encouragement to help you confidently prepare for PLAB 1 and begin your journey
                    toward a medical career in the UK.
                </p>
            </div>
            <div className="our-mission row p-5 d-flex">
                <div className="col-md-8">
                    <h3 className="text-dark fw-semibold mb-3">Our Mission</h3>
                    <p className="text-muted fs-6 lh-base mb-0">
                        Pulse is dedicated to helping international medical graduates successfully pass the PLAB 1
                        examination through comprehensive practice questions, detailed explanations, and structured
                        learning paths.
                        <br/>
                        <br/>We understand the challenges of preparing for this crucial exam and have created a platform
                        that makes studying more effective, engaging, and accessible.
                    </p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="about-bullseye">
                        <FaBullseye size={60}/>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <h3>Why Choose PLAB Pulse?</h3>
                    <p>Designed with medical students in mind</p>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}

export default About;