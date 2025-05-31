import React from 'react';
import { FaBullseye } from 'react-icons/fa';
import WhyChoose from "../components/WhyChoose.jsx";
import AboutExamination from "../components/HowWeHelp.jsx";
import studyingStudent from '../assets/studyingStudent.png';

const About = () => {

    return(
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="mb-3 fw-bold display-4">About Us</h1>
                <p className="lead mx-auto" style={{maxWidth: "800px"}}>
                    We're here to support medical graduates every step of the way—offering guidance,
                    resources, and encouragement to help you confidently prepare for PLAB 1 and begin your journey
                    toward a medical career in the UK.
                </p>
            </div>
            <div className="our-mission row p-5 d-flex mb-4">
                <div className="col-md-8 pe-6">
                    <h3 className="text-dark fw-semibold mb-3">Our Mission</h3>
                    <p className="fs-7 lh-base mb-0">
                        PLAB Pulse is dedicated to helping international medical graduates successfully pass the PLAB 1
                        examination through comprehensive practice questions, detailed explanations, and structured
                        learning paths.
                        <br/>
                        <br/>We understand the challenges of preparing for this crucial exam and have created a platform
                        that makes studying more effective, engaging, and accessible. Our resources are designed to
                        simulate real exam conditions, boost your confidence, and reinforce core medical knowledge.
                        Whether you're just beginning your PLAB journey or refining your final review, PLAB Pulse
                        supports you every step of the way.
                    </p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img className="mission-image"
                    src={studyingStudent}
                    alt="studying student"
                    />
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <WhyChoose/>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <AboutExamination/>
                </div>
            </div>
        </div>
    )
}

export default About;