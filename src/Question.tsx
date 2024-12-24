import Answer from "./Answer";

type AnswerType = {
  text: string;
  maven: string;
};

type QuestionType = {
  text: string;
  key: number;
  choices: AnswerType[];
};

type QuestionContainerType = {
  question: QuestionType;
  questionIndex: number;
  handleAnswer: (value: string) => void;
};

const Question = ({
  question,
  questionIndex,
  handleAnswer,
}: QuestionContainerType) => {
  const { text, choices } = question;

  return (
    <div className="flex flex-wrap w-full items-center justify-center">
      <h2 className="w-full text-center font-header text-2xl">{text}</h2>
      <div className="w-full md:w-1/2 min-w-[350px] mb-6 p-6 lg:mr-6">
        <ul>
          {choices.map((choice) => (
            <Answer
              key={choice.maven}
              answer={choice}
              handleAnswer={handleAnswer}
            />
          ))}
        </ul>
      </div>
      <img
        className="w-full md:w-1/3 shrink max-w-80 max-h-80"
        src={`assets/questions/${questionIndex}.png`}
      />
    </div>
  );
};

export default Question;
