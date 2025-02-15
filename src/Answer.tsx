type AnswerType = {
  text: string;
  maven: string;
};

type AnswerContainerType = {
  answer: AnswerType;
  handleAnswer: (value: string) => void;
};

const Answer = ({ answer, handleAnswer }: AnswerContainerType) => {
  const { text, maven } = answer;

  const border = "border-2 border-wine";
  const basic = "mt-3 p-3 cursor-pointer w-full text-2xl";
  const hover = "hover:font-semibold hover:scale-105";
  const animation = "ease-in-out transition duration-300";

  const className = [border, basic, hover, animation].join(" ");

  return (
    <li className={className} onClick={() => handleAnswer(maven)}>
      {text}
    </li>
  );
};

export default Answer;
