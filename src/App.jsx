import { useEffect, useState } from "react";
import "./App.css";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { quizData } from "./data/quizData";

export default function QuizApp() {
  const [screen, setScreen] = useState("welcome");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userName, setUserName] = useState("");

  const renderScreen = () => {
    switch (screen) {
      case "welcome":
        return (
          <WelcomeScreen
            onStartQuiz={handleStartQuiz}
            userName={userName}
            setUserName={setUserName}
          />
        );
      case "quiz":
        return (
          <QuizScreen
            category={selectedCategory}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
            onSkipQuestion={handleSkipQuestion}
            timer={timer}
            selectedOption={selectedOption}
            answers={answers}
            userName={userName}
            onExitQuiz={handleExitQuiz}
          />
        );
      case "result":
        return (
          <ResultScreen
            category={selectedCategory}
            answers={answers}
            onRetakeQuiz={handleRetakeQuiz}
            userName={userName}
          />
        );
      default:
        return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
    }
  };

  const handleStartQuiz = (category) => {
    const selectedCategoryData = quizData.categories.find(
      (c) => c.id === category
    );
    setSelectedCategory(selectedCategoryData);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScreen("quiz");
    setTimer(10);
    setTimerActive(true);
    setSelectedOption(null);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedOption(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = selectedCategory.questions[currentQuestionIndex];
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedOption,
      }));
    }

    setSelectedOption(null);

    if (currentQuestionIndex + 1 < selectedCategory.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(10);
      setTimerActive(true);
    } else {
      setScreen("result");
      setTimerActive(false);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex + 1 < selectedCategory.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(10);
      setTimerActive(true);
      setSelectedOption(null);
    } else {
      setScreen("result");
      setTimerActive(false);
    }
  };

  const handleRetakeQuiz = () => {
    setScreen("welcome");
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimer(10);
    setTimerActive(false);
    setSelectedOption(null);
  };

  const handleExitQuiz = () => {
    setScreen("welcome");
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimer(10);
    setTimerActive(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    let interval;

    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && timerActive) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [timer, timerActive]);

  return (
    <div className="bg-gray-100 p-4 min-h-screen flex justify-start gap-20 items-center flex-col text-gray-900">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <div className="text-3xl text-[#B92B5D]">
          <span className="font-thin">QUIZ</span>
          <span className="font-bold">Mania</span>
        </div>

        {userName && screen !== "quiz" && (
          <div className="flex items-center">
            <div className="bg-indigo-900 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
              {userName[0].toUpperCase()}
            </div>
            <span className="text-sm">{userName}</span>
          </div>
        )}
        {screen === "quiz" && (
          <button
            className="border border-rose-600 text-rose-600 font-medium py-2 px-4 rounded-lg hover:bg-rose-50 transition duration-300"
            onClick={handleExitQuiz}
          >
            Exit Quiz
          </button>
        )}
      </div>

      <div className="w-full rounded-lg">{renderScreen()}</div>
    </div>
  );
}
