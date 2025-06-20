import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {FaSearch, FaArrowRight, FaBook, FaCheckCircle, FaBookOpen, FaStethoscope } from 'react-icons/fa';
import HowWeHelp from '../components/HowWeHelp';
import WhyChoose from '../components/WhyChoose';
import BookSymbol from '../assets/book-symbol.png';
import TickSymbol from '../assets/tick-symbol.png';
import SpecialtyFocusSymbol from '../assets/specialty-focus-symbol.png';

const Home = () => {

    const [gameActive, setGameActive] = useState(false);

    const navigate = useNavigate(); // Hook to navigtate

    const handleStartQuiz = (topic) => {
        // Navigate to /quiz and send "topic" as data
        navigate("/quiz", {state: {topic}});
        setGameActive(true);
    }

    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3">Welcome to PLAB Pulse</h1>
                <p className="lead mb-4 mx-auto" style={{maxWidth: "800px"}}>
                    Your comprehensive study companion for the PLAB 1 examination.
                    Master medical concepts with our expertly crafted practice questions.
                </p>
                <div className="d-flex justify-content-center gap-3 mb-5">
                    <button className="btn btn-primary px-4 py-2 d-flex align-items-center" onClick={() => handleStartQuiz("Shuffle")}>Start Practice Now
                    </button>
                    <Link to="/topics" className="btn btn-outline-secondary px-4 py-2 d-flex align-items-center"> Browse All Topics <FaSearch className="ms-2" />
                    </Link>
                </div>
            </div>

            {/* Topic Categories Section */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fs-2 mb-0 text-center">Popular Topics</h2>
                    <Link to="/topics" className="text-primary text-decoration-none">
                        View all topics <FaArrowRight className="ms-1" size={14} />
                    </Link>
                </div>
                <div className="row g-4">
                    {/* Cardiology Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Cardiology</h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Cardiology with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Cardiology")}
                            >
                                <FaBook className="me-2"/> Start Cardiology
                            </button>
                        </div>
                    </div>
                    {/* Neurology Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Neurology </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Neurology  with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Neurology")}
                            >
                                <FaBook className="me-2"/> Start Neurology
                            </button>
                        </div>
                    </div>
                    {/* Ethics  Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Ethics  </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Ethics specialty with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Ethics")}
                            >
                                <FaBook className="me-2"/> Start Ethics
                            </button>
                        </div>
                    </div>
                    {/* Endocrinology Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Endocrinology   </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Endocrinology    with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Endocrinology ")}
                            >
                                <FaBook className="me-2"/> Start Endocrinology
                            </button>
                        </div>
                    </div>
                    {/* Pharmacology Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Pharmacology </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Pharmacology with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Pharmacology")}
                            >
                                <FaBook className="me-2"/> Start Pharmacology
                            </button>
                        </div>
                    </div>
                    {/* Psychiatry Card */}
                    <div className="col-md-4">
                        <div className="card border-grey shadow-sm p-4">
                            <h3 className="card-title fs-4 mb-3">Psychiatry </h3>
                            <p className="card-text text-muted mb-4">
                                Test your knowledge in Psychiatry with focused questions.
                            </p>
                            <button
                                className="topic-button w-100 h-50 p-2 d-flex align-items-center justify-content-center topic-button"
                                onClick={() => handleStartQuiz("Psychiatry ")}
                            >
                                <FaBook className="me-2"/> Start Psychiatry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose PLAB Pulse Section */}
            <div className="py-5">
                <h2 className="fs-2 mb-4 mt-3 text-center">Resources For Your PLAB Success</h2>
                <div className="row justify-content-center">
                    {/* Quality Questions Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-greyshadow-sm text-center p-4">
                            <div className="mx-auto mb-3">
                                <div>
                                    <img src={TickSymbol} className="book-symbol"/>
                                </div>
                            </div>
                            <h4 className="card-title mb-3">Quality Questions</h4>
                            <p className="card-text text-muted mb-3">
                                Realistic PLAB-style questions crafted by experienced
                                practitioners to match exam patterns.
                            </p>
                        </div>
                    </div>

                    {/* Detailed Explanations Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-greyshadow-sm text-center p-4">
                            <div className="mx-auto mb-3">
                                <div>
                                    <img src={BookSymbol} className="book-symbol"/>
                                </div>
                            </div>
                            <h4 className="card-title mb-3">Detailed Explanations</h4>
                            <p className="card-text text-muted mb-3">
                                Learn from comprehensive explanations with evidence-based insights for each question.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-greyshadow-sm text-center p-4">
                            <div className="mx-auto mb-3">
                                <div>
                                    <img src={SpecialtyFocusSymbol} className="book-symbol"/>
                                </div>
                            </div>
                            <h4 className="card-title mb-3">Specialty Focus</h4>
                            <p className="card-text text-muted mb-3">
                                Target specific medical specialties to strengthen knowledge gaps and optimize study
                                time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;