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
            <h2>Welcome to PLAB Pulse</h2>
            <p>Your comprehensive study companion for the PLAB 1 examination. Master medical concepts with our expertly
                crafted practice questions.</p>

            <Link to="/quiz" className="btn btn-primary m-2">Start Practice Now</Link>
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
        </div>
    )
}

export default Home;