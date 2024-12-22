import { useState } from "react";
import { questions, mavens } from "./constants";
import Question from "./Question";
import Result from "./Result";

const initialResults = () => {
  const results: Record<string, number> = {};

  for (const maven of Object.keys(mavens)) {
    results[maven] = 0;
  }

  return results;
};

function App() {
  const [results, setResults] = useState(initialResults);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (maven: string) => {
    setResults({ ...results, [maven]: results[maven] + 1 });
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="p-6 w-full md:max-w-2xl">
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result results={results} />
      )}
    </div>
  );
}

export default App;
