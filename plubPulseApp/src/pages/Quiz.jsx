import React from 'react';
import { useLocation } from 'react-router-dom';
import QuestionContainer from '../components/QuestionContainer.jsx'
import QuestionBank from '../data/QuestionBank.json';

const Quiz = () => {

    const location = useLocation();
    const topic = location.state?.topic;



    let filteredQuestions = [];

    if(topic === "Shuffle"){
        const shuffled = [...QuestionBank].sort(() => 0.5 - Math.random());
        filteredQuestions = shuffled.slice(0, 10);
    } else{
        // Filter questions by topic
        filteredQuestions = QuestionBank.filter(item => item.topic === topic);
    }

    return (
        <div>
            <QuestionContainer questions={filteredQuestions} topic={topic}/>
        </div>
    )
}

export default Quiz;