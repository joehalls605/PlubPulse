import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { FaBook, FaHeartbeat, FaBrain, FaBalanceScale, FaFlask, FaPills, FaUserMd } from "react-icons/fa";
import GoodToKnow from '../components/GoodToKnow'

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
            <div className="row mt-5 text-center">
                <h2 className="mb-3 fw-bold display-4">Medical Specialties</h2>
                <p className="lead mx-auto" style={{maxWidth: "800px"}}>Choose a specialty to focus your exam preparation</p>
            </div>
            <div className="row mb-5">
                <div className="row g-4">
                    {/* Cardiology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Cardiology</h3>
                                <FaHeartbeat className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Valvular Heart Disease</li>
                                <li>Heart Failure</li>
                                <li>Electrocardiography</li>
                                <li>Cardiac Emergencies</li>
                                <li>Anticoagulation</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Cardiology")}
                            >
                                <FaHeartbeat className="me-2"/> Start Quiz
                            </button>
                        </div>
                    </div>
                    {/* Neurology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Neurology</h3>
                                <FaBrain className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Stroke and TIA</li>
                                <li>Seizure Disorders</li>
                                <li>Multiple Sclerosis</li>
                                <li>Cranial Nerves</li>
                                <li>Movement Disorders</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Neurology")}
                            >
                                <FaBrain className="me-2"/> Start Quiz
                            </button>
                        </div>
                    </div>
                    {/* Ethics Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Ethics</h3>
                                <FaBalanceScale className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Autonomy and Consent</li>
                                <li>Justice and Resource Allocation</li>
                                <li>Beneficence and Nonmaleficence</li>
                                <li>Veracity and Confidentiality</li>
                                <li>Professional Conduct</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Ethics")}
                            >
                                <FaBalanceScale className="me-2"/> Start Quiz
                            </button>
                        </div>
                    </div>
                    {/* Endocrinology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Endocrinology</h3>
                                <FaFlask className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Thyroid Disorders</li>
                                <li>Diabetes Mellitus</li>
                                <li>Pituitary Function</li>
                                <li>Adrenal Disorders</li>
                                <li>Calcium Homeostasis</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Endocrinology")}
                            >
                                <FaFlask className="me-2"/> Start Endocrinology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Pharmacology Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Pharmacology</h3>
                                <FaPills className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Antimicrobial Drugs</li>
                                <li>Cardiovascular Medications</li>
                                <li>Antidepressants and Anxiolytics</li>
                                <li>NSAIDs and Analgesics</li>
                                <li>Drug Toxicity and Antidotes</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Pharmacology")}
                            >
                                <FaPills className="me-2"/> Start Pharmacology Quiz
                            </button>
                        </div>
                    </div>
                    {/* Psychiatry Card */}
                    <div className="col-md-4">
                        <div className="topic-card-square card rounded-4 p-5 border-1 shadow mb-4">
                            <div className="card-title fs-4 d-flex mb-3">
                                <h3 className="card-title fs-4">Psychiatry</h3>
                                <FaUserMd className="ms-2 text-primary mt-1"/>
                            </div>
                            <p className="card-text text-muted mb-4 mt-2">
                                Topics covered:
                            </p>
                            <ul>
                                <li>Mood Disorders</li>
                                <li>Schizophrenia</li>
                                <li>Anxiety Disorders</li>
                                <li>Psychopharmacology</li>
                                <li>ADHD and Developmental Disorders</li>
                            </ul>
                            <button
                                className="topic-button w-100 p-2 d-flex align-items-center justify-content-center"
                                onClick={() => handleStartQuiz("Psychiatry")}
                            >
                                <FaUserMd className="me-2"/> Start Psychiatry Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<GoodToKnow/>*/}
        </div>
    )
}

export default Topics;