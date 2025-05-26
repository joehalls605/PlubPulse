import React from 'react';
import { FaBook, FaBullseye, FaTrophy } from 'react-icons/fa';

const WhyChoose = () => {


    return (
        <div className="container mt-6">
            <div className="row mb-4 d-flex align-items-center justify-content-center text-center">
                <h4>Why Choose PLAB Pulse?</h4>
                <p className="text-muted">A platform designed with medical students in mind</p>
            </div>
            <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaBook size={30} className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">Comprehensive Content</h5>
                    <p className="text-muted mb-0">
                        Extensive question bank covering all<br/>
                        medical specialties tested in PLAB 1<br/>
                    </p>
                </div>
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaBullseye size={30} className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">Focused Practice</h5>
                    <p className="text-muted mb-0">
                        Practice by specialty or take<br/>
                        comprehensive tests to identify<br/>
                        knowledge gaps<br/>
                    </p>
                </div>
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaTrophy size={30} className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">Proven Results</h5>
                    <p className="text-muted mb-0">
                        Trusted by thousands of medical<br/>
                        graduates who have successfully passed<br/>
                        PLAB 1
                    </p>
                </div>
            </div>
        </div>
    )

}

export default WhyChoose;