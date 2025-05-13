import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate(); // Hook to navigtate

    const handleStartQuiz = (topic) => {
        // Navigate to /quiz and send "topic" as data
        navigate("/quiz", {state: {topic}});
    }

    return (
        <div className="container">
            <div id="intro">
                <h2>Welcome to PLAB Pulse</h2>
                <p>Your comprehensive study companion for the PLAB 1 examination. Master medical concepts with our
                    expertly crafted practice questions.</p>
            </div>
            <button className="btn btn-primary" onClick={() => handleStartQuiz("Random")}>Start Practice Now</button>
            <Link to="/topics" className="btn btn-primary m-2">Browse All Topics</Link>

            <div id="topic-categories">
                <div className="card">
                    <h4>Cardiology</h4>
                    <p>Test your knowledge in Cardiology with focused questions.</p>
                    <button className="btn btn-primary" onClick={() => handleStartQuiz("Cardiology")}> Start Cardiology Quiz</button>
                </div>
                <div className="card">
                    <h4>Neurology</h4>
                    <p>Test your knowledge in Neurology with focused questions.</p>
                    <button className="btn btn-primary" onClick={() => handleStartQuiz("Neurology")}> Start Neurology Quiz</button>
                </div>
                <div className="card">
                    <h4>Ethics</h4>
                    <p>Test your knowledge in Ethics with focused questions.</p>
                    <button className="btn btn-primary" onClick={() => handleStartQuiz("Ethics")}> Start Ethics Quiz</button>
                </div>
                <div className="card">
                    <h4>Endocrinology</h4>
                    <p>Test your knowledge in Endocrinology with focused questions.</p>
                    <button className="btn btn-primary" onClick={() => handleStartQuiz("Endocrinology")}> Start Endocrinology Quiz</button>
                </div>
                <div className="card">
                    <h4>Pharmacology</h4>
                    <p>Test your knowledge in Pharmacology with focused questions.</p>
                    <button className="btn btn-primary" onClick={() => handleStartQuiz("Pharmacology")}> Start Pharmacology Quiz</button>
                </div>
            </div>
            <div id="WhyChoose">
                <div className="whyCard">
                    <h4>Quality Questions</h4>
                    <p>Realistic PLAB-style questions crafted by experienced practitioners to match exam patterns.</p>
                </div>
                <div className="whyCard">
                    <h4>Detailed Explanations</h4>
                    <p>Learn from comprehensive explanations with evidence-based insights for each question.</p>
                </div>
                <div className="whyCard">
                    <h4>Specialty Focus</h4>
                    <p>Target specific medical specialties to strengthen knowledge gaps and optimise study time.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;