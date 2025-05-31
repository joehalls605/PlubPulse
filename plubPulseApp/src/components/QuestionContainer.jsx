import React, {useState, useEffect} from 'react';
import ProgressBar from './ProgressBar.jsx'

// Question container is to then loop through each item and render a random question

const QuestionContainer = ({questions, topic}) => {
    // 1.
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [isCorrect, setCorrect] = useState(false);

    console.log("Chosen topic:" + topic);

    useEffect(() => {
        console.log("Updated score:", score);
    },[score])

    // 2.
    const handleSelectedAnswer = () => {
        setShowExplanation(true);
        if(userSelectedAnswer === currentQuestion.correctAnswer){
            console.log("Correct!");
            setScore(score + 1);
        }
    }
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserSelectedAnswer("");
        setShowExplanation(false);
    }

    // 3.
    if(!questions || questions.length === 0){
        return <div>No questions available</div>
    }

    // 4. Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    const handleRetakeQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserSelectedAnswer("");
        setShowExplanation(false);
        setScore(0);
        setCorrect(false);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 mt-5">
                    <div className="row">
                        <div className="col">
                            <h3>{topic} Quiz</h3>
                        </div>
                        <div className="col text-end">
                            <span className="badge rounded-pill px-4 py-2 mt-2 fw-bold questionNumberBadge">Question {currentQuestionIndex + 1} of {questions.length}</span>
                        </div>
                    </div>
                    <div className="row">
                        <ProgressBar questions={questions} currentQuestionIndex={currentQuestionIndex}/>
                    </div>
                    <div className="quiz-card shadow rounded p-5 mt-2">
                        {/* Question content  */}
                        <div className="col">
                            <div className="row">
                                <p className="fw-bold">{currentQuestion.question}</p>
                            </div>
                            <div className="row">
                                {/* Map through the options of the current question */}
                                {currentQuestion.options.map((option, index) => {

                                    // Determining the appropriate classes based on the state
                                    let optionClasses = "form-check mb-2 p-2 rounded";

                                    if(showExplanation){
                                        if(option == currentQuestion.correctAnswer){
                                            optionClasses += " text-success fw-semibold text-decoration";
                                        } else if (option === userSelectedAnswer && option !== currentQuestion.correctAnswer){
                                            optionClasses += " text-danger fw-semibold text-decoration-line-through";
                                        }
                                    }

                                    return (
                                        <div key={index} className={optionClasses}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="answer"
                                                    value={option}
                                                    checked={userSelectedAnswer === option}
                                                    onChange={() => setUserSelectedAnswer(option)}
                                                    disabled={showExplanation} // disable after answer is submitted
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    );
                                })}
                                {/* Submit button - only shown if explanation is not showing */}
                                <div className="row mt-3">
                                    {!showExplanation && (
                                        <button className="quiz-container-submit"
                                                onClick={handleSelectedAnswer}
                                                disabled={!userSelectedAnswer} // Disable if no answer selected
                                        > Submit answer
                                        </button>
                                    )}
                                    {/* Show explanation if answer submitted */}
                                    {showExplanation && (
                                        <div>
                                            <div className="explanation-box">
                                                <p>Correct answer: {currentQuestion.correctAnswer}</p>
                                                <p>Explanation: {currentQuestion.explanation}</p>
                                            </div>
                                            {/* Next question button - only if not last question */}
                                            {currentQuestionIndex < questions.length - 1 ? (
                                                <button onClick={handleNextQuestion}
                                                        className="next-question-button">Next question</button>
                                            ) : (
                                                <div className="quiz-completion">
                                                    <div className="alert alert-success mt-3 text-center">
                                                        <h4>🎉 Quiz Completed!</h4>
                                                        <p className="mb-2">Your final score: <strong>{score} out of {questions.length}</strong></p>
                                                        <p className="mb-1">
                                                            You got {Math.round((score / questions.length) * 100)}% correct.
                                                        </p>
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <button className="btn btn-primary me-2"
                                                                onClick={handleRetakeQuiz}
                                                        >Retake Quiz</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;