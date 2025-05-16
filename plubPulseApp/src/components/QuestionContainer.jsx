import React, {useState} from 'react';

// Question container is to then loop through each item and render a random question

const QuestionContainer = ({questions}) => {
    console.log(questions);
    // 1.
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userSelectedAnswer, setUserSelectedAnswer] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);

    // 2.
    const handleSelectedAnswer = () => {
        setShowExplanation(true);
        if(userSelectedAnswer === currentQuestion.correctAnswer){
            console.log("Correct!");
            setScore(score + 1);
            console.log(score);
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
        <div>
            <h3>Quiz</h3>
            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            <p>Progress bar here</p>

            <p>{currentQuestion.question}</p>

            {/* Map through the options of the current question */}
            {currentQuestion.options.map((option, index) => {
                return (
                    <div key={index}>
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
            {!showExplanation && (
                <button
                    onClick={handleSelectedAnswer}
                    disabled={!userSelectedAnswer} // Disable if no answer selected
                > Submit answer
                </button>
            )}
            {/* Show explanation if answer submitted */}
            {showExplanation && (
                <div>
                    <p>Your answer: {userSelectedAnswer}</p>
                    <p>Correct answer: {currentQuestion.correctAnswer}</p>
                    <p>Explanation: {currentQuestion.explanation}</p>

                    {/* Next question button - only if not last question */}
                    {currentQuestionIndex < questions.length - 1 ? (
                        <button onClick={handleNextQuestion}>Next question</button>
                    ): (
                        <p>Quiz completed!</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default QuestionContainer;