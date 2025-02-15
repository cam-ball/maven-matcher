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
    <div className="p-0 m-0 md:m-3 md:p-3 w-full md:w-2/5">
      <button
        onClick={resetQuiz}
        className="mb-3 rounded bg-wine text-cream text-xl p-3 font-header"
      >
        ⟲ Reset
      </button>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-header md:text-6xl text-4xl text-wine">{`${winner.first} ${winner.last}`}</h2>
        <img className="max-h-96" src={`assets/results/${winner.key}.png`} />
      </div>
      <p className="text-2xl">{winner.text}</p>
      <div className="flex justify-end">
        {winner.slug && (
          <a
            target="_parent"
            href={`https://jhicksmystery.com/mystery-mavens/${winner.slug}/`}
          >
            <h3 className="underline mt-6 font-header text-wine text-2xl md:text-3xl">
              Learn More about {winner.first} ➚
            </h3>
          </a>
        )}
      </div>
    </div>
  );
};

export default Result;
