import React from 'react';
import { FaBook, FaBullseye, FaTrophy } from 'react-icons/fa';
import BookSymbol from '../assets/book-symbol.png';
import BullseyeSymbol from '../assets/bullseye-symbol.png';
import TrophySymbol from '../assets/trophy-symbol.png';

const WhyChoose = () => {

    return (
        <div className="container mt-3">
            <div className="row mb-4 d-flex align-items-center justify-content-center text-center">
                <h4 className="fs-3">Why Choose PLAB Pulse?</h4>
                <p className="text-muted">Accelerate your PLAB 1 success with smarter, focused preparation</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4 d-flex">
                    <div className="text-center p-3 shadow-md w-100 why-choose-card">
                        <div>
                            <img src={BookSymbol} alt="Book Symbol" className="book-symbol"/>
                        </div>
                        <h5 className="fw-bold mb-1 mt-2">Comprehensive Content</h5>
                        <p className="text-muted mb-0 mt-3">
                            Extensive question bank covering all<br/>
                            medical specialties tested in PLAB 1
                        </p>
                    </div>
                </div>

                <div className="col-md-4 d-flex">
                    <div className="text-center p-3 shadow-sm w-100 why-choose-card">
                        <div>
                            <img src={BullseyeSymbol} alt="Bullseye Symbol" className="book-symbol"/>
                        </div>
                        <h5 className="fw-bold mb-1 mt-2">Targeted Practice</h5>
                        <p className="text-muted mb-0 mt-3">
                            Focus on your weak areas with<br/>
                            personalised study recommendations
                        </p>
                    </div>
                </div>

                <div className="col-md-4 d-flex">
                    <div className="text-center p-3 shadow-sm w-100 why-choose-card">
                        <div>
                            <img src={TrophySymbol} alt="Trophy Symbol" className="book-symbol"/>
                        </div>
                        <h5 className="fw-bold mb-1 mt-2">Proven Success</h5>
                        <p className="text-muted mb-0 mt-3">
                            Join thousands of doctors who<br/>
                            passed PLAB 1 using our platform
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhyChoose;