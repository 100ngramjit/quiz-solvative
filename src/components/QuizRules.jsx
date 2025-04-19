import React from "react";

export default function QuizRulesDialog({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-10 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-md shadow-lg max-w-3/4 w-full mx-4">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold text-gray-800">Quiz rules</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="p-4 space-y-6 text-start">
          <div>
            <div className="bg-amber-50 p-2 rounded-sm">
              <h3 className="font-bold text-gray-800">10-Second Timer</h3>
            </div>
            <ul className="mt-2 ml-4 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Each question comes with a 10-second timer.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  If you don't answer within the time limit, the app will
                  automatically move to the next question.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-amber-50 p-2 rounded-sm">
              <h3 className="font-bold text-gray-800">Manual Navigation</h3>
            </div>
            <ul className="mt-2 ml-4 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  You can navigate to the next question manually before the
                  timer expires.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Use the "Next" button to move ahead if you're ready before the
                  timer runs out.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-amber-50 p-2 rounded-sm">
              <h3 className="font-bold text-gray-800">
                Final Score and Performance Message
              </h3>
            </div>
            <ul className="mt-2 ml-4 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  After all questions are answered, your final score will be
                  displayed.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Based on your performance, you will receive a personalized
                  message:
                </span>
              </li>
              <li className="ml-6 flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Great job!: if you score{" "}
                  <span className="font-bold">above 80%</span>.
                </span>
              </li>
              <li className="ml-6 flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Well done!: if you score{" "}
                  <span className="font-bold">between 60% and 80%</span>.
                </span>
              </li>
              <li className="ml-6 flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>
                  Keep practicing!: if you score{" "}
                  <span className="font-bold">below 60%</span>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
