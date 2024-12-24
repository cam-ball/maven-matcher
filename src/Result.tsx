import { mavens } from "./constants";

type ResultType = {
  results: Record<string, number>;
  resetQuiz: () => void;
};

const Result = ({ results, resetQuiz }: ResultType) => {
  const tallyResult = (results: Record<string, number>) => {
    return Object.keys(results).reduce(function (a, b) {
      return results[a] > results[b] ? a : b;
    });
  };

  const winner = mavens[tallyResult(results) as keyof typeof mavens];

  return (
    <div className="p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-header text-3xl">{winner.name}</h2>
        <img src={`/assets/results/${winner.key}.png`} />
      </div>
      <p>{winner.text}</p>
      {winner.slug && (
        <a href={`https://jhicksmystery.com/mystery-mavens/${winner.slug}/`}>
          <h3 className="underline mt-6 font-header text-xl">Read more!</h3>
        </a>
      )}
      <button
        onClick={resetQuiz}
        className="mt-3 rounded bg-wine text-cream text-xl p-3 font-header"
      >
        Take it again
      </button>
    </div>
  );
};

export default Result;
