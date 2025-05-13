import React from 'react';
import { useLocation } from 'react-router-dom';

const Quiz = () => {
    const location = useLocation();
    const topic = location.state?.topic;

    return (
        <div>
            <h1>{topic} Quiz</h1>
        </div>
    )
}

export default Quiz;