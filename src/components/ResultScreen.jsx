export default function ResultScreen({
  category,
  answers,
  onRetakeQuiz,
  userName,
}) {
  const calculateScore = () => {
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    category.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
        correct++;
      } else if (answers[question.id] !== undefined) {
        incorrect++;
      } else {
        unanswered++;
      }
    });

    return {
      score,
      correct,
      incorrect,
      unanswered,
      percentage: Math.round((score / category.questions.length) * 100),
    };
  };

  const result = calculateScore();
  const totalQuestions = category.questions.length;
  const showGoodResult = result.percentage >= 50;

  return (
    <div>
      <div className="flex justify-between items-center p-4"></div>

      <div className="p-8 text-center text-gray-900">
        {showGoodResult ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <img src="/src/assets/congratulations.svg" alt="wef" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-wider mb-4">
              C O N G R A T U L A T I O N
            </h2>
            <p className="text-gray-600 mb-8 font-semibold">
              You successfully completed the Quiz and holds{" "}
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                <img src="/src/assets/sorry.svg" alt="wef" />
              </div>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">
              You completed the Quiz but you need to
            </p>
            <div className="font-outfit font-light text-[40px] leading-[100%] tracking-[0.5em] text-center uppercase text-[#373052]">
              <p>Keep</p>
              <p>practicing!</p>
            </div>
          </>
        )}
        <div
          className={`relative w-40 h-40 rounded-full m-2  flex flex-col items-center justify-center mx-auto ${
            showGoodResult ? "" : "border border-[#D2829A] p-6"
          }`}
        >
          <p className="text-md">Your Score</p>
          <p
            className={`text-4xl font-bold ${
              showGoodResult ? "text-green-500" : "text-[#AF9B06]"
            }`}
          >
            {Math.round((result.score / totalQuestions) * 100)}%
          </p>

          {showGoodResult && (
            <div className="text-3xl text-gray-900 font-semibold">
              Great Job!
            </div>
          )}
        </div>{" "}
        <div className="mt-8 border border-gray-300 rounded-lg p-6 w-full max-w-lg mx-auto">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Out of {totalQuestions} questions
          </p>

          <div className="grid grid-cols-3 gap-2 text-md">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">
                <span className="text-green-500">{result.correct}</span> Correct
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">
                <span className="text-red-600">{result.incorrect}</span>{" "}
                Incorrect
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">
                <span className="text-rose-900">{result.unanswered}</span> Not
                Answered
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={onRetakeQuiz}
          className="mt-8 px-6 py-3 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-200 transition"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
