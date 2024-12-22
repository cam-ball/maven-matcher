import { useState } from 'react'
import { questions, mavens } from './constants'
import Question from './Question'

const initialResults = () => {
  const results: Record<string, number> = {};

  for (const maven of mavens) {
    results[maven] = 0;
  }

  return results;
}

function App() {
  const [results, setResults] = useState(initialResults);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (maven: string) => {
    setResults({...results, [maven]: results[maven] + 1});
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <>
    {currentQuestion < questions.length ? (
      <Question question={questions[currentQuestion]} handleAnswer={handleAnswer} />
    ) : (
    <>
      <h2>hooray you did it</h2>
      <ul>
        {mavens.map((maven) => 
          <li key={maven}>{maven}: {results[maven]}</li>
        )}
      </ul>
    </>
    )}
    </>
  )
}

export default App
