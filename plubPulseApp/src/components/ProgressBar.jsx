import React from 'react';

const ProgressBar = ({questions, currentQuestionIndex}) => {

    const progressPercentage= ((currentQuestionIndex ) / (questions.length - 1) * 100);

    return(
        <div className="d-flex flex-row w-100 mt-3 mb-3">
                <div className="w-100" style={{height: '11px', backgroundColor: '#f1f3f5', borderRadius: '4px', overflow:'hidden'}}>
                    <div style={{width:`${progressPercentage}%`, height: '100%', backgroundColor:'#0d6efd', transition: 'width 0.3s ease'}}></div>
                </div>
        </div>
    )
}

export default ProgressBar;