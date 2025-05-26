import React from 'react';
import { FaUserFriends, FaClock, FaBullseye } from 'react-icons/fa';

const WhyChoose = () => {


    return (
        <div className="container mt-6">
            <div className="row mb-4 d-flex align-items-center justify-content-center text-center">
                <h4>Good to Know</h4>
                <p className="text-muted">Key insights to help you prepare effectively</p>
            </div>

            <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaUserFriends className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">85%</h5>
                    <p className="text-muted mb-0">
                        Average pass rate<br/>
                        for well-prepared<br/>
                        candidates
                    </p>
                </div>
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaClock className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">3 months</h5>
                    <p className="text-muted mb-0">
                        Recommended<br/>
                        study duration for<br/>
                        optimal results
                    </p>
                </div>
                <div className="good-to-know card text-center p-3 shadow-sm">
                    <div className="good-to-know-icon-circle mx-auto mb-3">
                        <FaBullseye className="good-to-know-icon"/>
                    </div>
                    <h5 className="fw-bold mb-1">70%</h5>
                    <p className="text-muted mb-0">
                        Minimum score<br/>
                        required to pass<br/>
                        PLAB 1
                    </p>
                </div>
            </div>
        </div>
    )

}

export default WhyChoose;