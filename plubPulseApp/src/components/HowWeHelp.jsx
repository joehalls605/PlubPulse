import React from 'react';
import { FaBook, FaBrain, FaChartLine, FaGraduationCap} from 'react-icons/fa';
import studentCelebration from '../assets/student-celebration.png';

const HowWeHelp = () => {

    return (
        <div className="container mt-2 mb-5 p-5">

            <div className="d-flex flex-row">
                <div className="col-md-8">
                    <h3>Let's Master the PLAB 1 Examination</h3>
                    <p className=" mt-4 mb-1"><strong>PLAB 1</strong> is a challenging computer-based test
                        with 180 multiple-choice questions covering all major medical specialties.
                        With only 3 hours to complete the exam and a 70% passing requirement, preparation is crucial.
                        PLAB Pulse provides you with
                        the comprehensive practice and strategic preparation you need to succeed on your first attempt.
                    </p>
                    <h5 className="mt-4 mb-4 ">What We Deliver:</h5>
                    <ul>
                        <li>Master question formats with our extensive question bank</li>
                        <li>Detailed analytics help you consistently achieve above the 70% threshold</li>
                        <li>Complete preparation across all medical specialties tested</li>
                        <li>Personalised study plans based on your performance and knowledge gaps</li>
                        <li>Understand not just the right answer, but why other options are incorrect</li>
                    </ul>
                </div>
                <div className="mt-4 d-flex align-items-center justify-content-center ms-5">
                    <img src={studentCelebration} className="how-we-help-student"/>
                </div>
            </div>
        </div>
    )

}

export default HowWeHelp;