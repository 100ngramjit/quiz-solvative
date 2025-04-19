import React, { useEffect, useState } from "react";

export default function QuizScreen({
  category,
  currentQuestionIndex,
  onAnswerSelect,
  onNextQuestion,
  onSkipQuestion,
  timer,
  selectedOption,
  answers,
  userName,
  onExitQuiz,
}) {
  const currentQuestion = category.questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = category.questions.length;

  const formatTime = (seconds) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  const [countdown, setCountdown] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    setCountdown(10);
    setIsTimerActive(true);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (isTimerActive && countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (countdown === 0) {
      const timeoutId = setTimeout(() => {
        onNextQuestion();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [countdown, isTimerActive, onNextQuestion]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-rose-600 font-bold">{questionNumber}</span>
          <span className="text-gray-600">/{totalQuestions}</span>
        </div>

        <div className="bg-gray-100 py-1 px-3 rounded-lg">
          <span className="text-gray-800 font-medium">
            {formatTime(countdown)}
          </span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-rose-600 h-2 rounded-full transition-all duration-1000 ease-linear"
          style={{
            width: `${(countdown / 10) * 100}%`,
          }}
        ></div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-1">
          {questionNumber}.
        </h3>
        <p className="text-lg text-gray-800 mb-6">{currentQuestion.question}</p>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`p-4 border rounded-lg text-left transition duration-200 flex items-center ${
                selectedOption === index ? "border-rose-600" : "border-gray-300"
              }`}
              onClick={() => onAnswerSelect(currentQuestion.id, index)}
            >
              <div className="w-5 h-5 mr-3 border border-gray-400 rounded-full flex items-center justify-center">
                {selectedOption === index && (
                  <div className="w-3 h-3 bg-rose-600 rounded-full"></div>
                )}
              </div>
              <span className="text-gray-800">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-start">
        <button
          className={`bg-rose-400 hover:bg-rose-500 text-white font-medium py-2 px-10 rounded-lg transition duration-300`}
          onClick={onNextQuestion}
        >
          Next
        </button>
        <button
          className="text-gray-900 font-medium py-2 px-4"
          onClick={onSkipQuestion}
        >
          Skip this question
        </button>
      </div>

      <div className="mt-4 flex justify-end">
        {/* <button
            className="border border-rose-600 text-rose-600 font-medium py-2 px-4 rounded-lg hover:bg-rose-50 transition duration-300"
            onClick={onExitQuiz}
          >
            Exit Quiz
          </button> */}
      </div>
    </div>
  );
}
