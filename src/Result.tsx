import { mavens } from "./constants";

type ResultType = {
  results: Record<string, number>;
  resetQuiz: () => void;
};

const Result = ({ results, resetQuiz }: ResultType) => {
  const tallyResult = (results: Record<string, number>) => {
    return Object.keys(results).reduce(function (a, b) {
      return results[a] >= results[b] ? a : b;
    });
  };

  const winner = mavens[tallyResult(results) as keyof typeof mavens];

  return (
    <div className="p-3 w-full md:w-2/:">
      <button
        onClick={resetQuiz}
        className="mb-3 rounded bg-wine text-cream text-xl p-3 font-header"
      >
        ⟲ Reset
      </button>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-header text-3xl">{winner.name}</h2>
        <img src={`/assets/results/${winner.key}.png`} />
      </div>
      <p>{winner.text}</p>
      <div className="flex justify-end">
        {winner.slug && (
          <a href={`https://jhicksmystery.com/mystery-mavens/${winner.slug}/`}>
            <h3 className="underline mt-6 font-header text-xl">
              Learn More about Aggie ➚
            </h3>
          </a>
        )}
      </div>
    </div>
  );
};

export default Result;
