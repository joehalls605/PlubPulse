import React, {useState, useEffect} from 'react';

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

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 mt-5">
                    <div className="row">
                        <div className="col">
                            <h3>{topic} Quiz</h3>
                        </div>
                        <div className="col text-end">
                            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
                        </div>
                    </div>
                    <div className="row">
                        <p>Progress bar here</p>
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
                                                <p className="alert alert-success mt-3">Quiz completed!</p>
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