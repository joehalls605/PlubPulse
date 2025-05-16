import React from 'react';
import { useLocation } from 'react-router-dom';
import QuestionContainer from '../components/QuestionContainer.jsx'
import QuestionBank from '../data/QuestionBank.json';

const Quiz = () => {
    const location = useLocation();
    const topic = location.state?.topic;

    let filteredQuestions = [];

    if(topic === "Random"){
        const shuffled = [...QuestionBank].sort(() => 0.5 - Math.random());
        filteredQuestions = shuffled.slice(0, 10);
    } else{
        // Filter questions by topic
        filteredQuestions = QuestionBank.filter(item => item.topic === topic);
    }

    return (
        <div>
            <h1>{topic} Quiz</h1>
            <QuestionContainer questions={filteredQuestions}/>
        </div>
    )
}

export default Quiz;