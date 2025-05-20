import React, {useState} from 'react';
import {FaBook} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const Topics = () => {

    const [gameActive, setGameActive] = useState(false);
    const navigate = useNavigate(); // Hook to navigtate
    const handleStartQuiz = (topic) => {
        // Navigate to /quiz and send "topic" as data
        navigate("/quiz", {state: {topic}});
        setGameActive(true);
    }

    return (
        <div className="container topics-container">
            <div className="row mt-5">
                <h2>Medical Specialties</h2>
                <p>Choose a specialty to focus your exam preparation</p>
            </div>
            <div className="row mb-5">
                <div className="row g-4">
                    {/* Cardiology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Cardiology</h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Cardiology with focused questions.
                            </p>
                            <button
                                className="text-black w-100 w-100 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Cardiology")}
                            >
                                <FaBook className="me-2"/> Start Cardiology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Neurology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Neurology </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Neurology with focused questions.
                            </p>
                            <button
                                className="text-black w-100 p-2 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Neurology")}
                            >
                                <FaBook className="me-2"/> Start Neurology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Ethics  Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Ethics </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Ethics specialty with focused questions.
                            </p>
                            <button
                                className="text-black w-100 p-2  p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Ethics")}
                            >
                                <FaBook className="me-2"/> Start Ethics Quiz
                            </button>
                        </div>
                    </div>
                    {/* Endocrinology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Endocrinology </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Endocrinology with focused questions.
                            </p>
                            <button
                                className="text-black w-100 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Endocrinology ")}
                            >
                                <FaBook className="me-2"/> Start Endocrinology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Pharmacology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Pharmacology </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Pharmacology with focused questions.
                            </p>
                            <button
                                className="text-black w-100 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Endocrinology ")}
                            >
                                <FaBook className="me-2"/> Start Endocrinology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Psychiatry Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-4 border-0 shadow-sm mb-4">
                            <h3 className="card-title fs-4 mb-3">Psychiatry </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Psychiatry with focused questions.
                            </p>
                            <button
                                className="text-black w-100 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Psychiatry ")}
                            >
                                <FaBook className="me-2"/> Start Psychiatry Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</div>
)
}

export default Topics;