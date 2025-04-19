import { useState } from "react";
import { quizData } from "../data/quizData";
import QuizRulesDialog from "./QuizRules";

export default function WelcomeScreen({ onStartQuiz, userName, setUserName }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showRulesModal, setShowRulesModal] = useState(false);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const isStartDisabled = !userName.trim() || !selectedCategory;

  return (
    <div className="p-4 flex justify-center items-center flex-col bg-[#F3F3E9]">
      {showRulesModal && (
        <QuizRulesDialog onClose={() => setShowRulesModal(false)} />
      )}

      <div className="text-left mb-8">
        <h1 className="text-4xl md:text-6xl">
          <span className="text-gray-800 font-semibold">Welcome to </span>
          <span className="text-[#B92B5D] font-thin">QUIZ</span>
          <span className="text-[#B92B5D] font-semibold">Mania</span>
        </h1>
      </div>

      <div className="text-center mb-8">
        <div className="bg-[#D9D9D94D] p-4 rounded-lg mb-6 text-left">
          <p className="text-gray-700 mb-2 text-sm md:text-base">
            Please read all the rules about this quiz before you start.
          </p>
          <button
            className="text-rose-600 font-medium text-sm md:text-base"
            onClick={() => setShowRulesModal(true)}
          >
            Quiz rules
          </button>
        </div>

        <div className="mb-6 text-left">
          <label htmlFor="fullName" className="block mb-2 text-gray-700">
            Full name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-6 text-left">
          <p className="mb-2 text-gray-700">Please select topic to continue</p>
          <div className="grid grid-cols-2 gap-4">
            {quizData.categories.map((category) => (
              <button
                key={category.id}
                className={`p-3 border ${
                  selectedCategory === category.id
                    ? "border-rose-500"
                    : "border-gray-300"
                } rounded-lg text-left transition duration-200 flex items-center bg-white text-gray-900`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <span className="w-6 h-6 mr-2 rounded-full border flex items-center justify-center">
                  {selectedCategory === category.id && (
                    <span className="w-4 h-4 bg-rose-600 rounded-full"></span>
                  )}
                </span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <button
          className={`bg-rose-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ${
            isStartDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-rose-700"
          }`}
          onClick={() => onStartQuiz(selectedCategory)}
          disabled={isStartDisabled}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
