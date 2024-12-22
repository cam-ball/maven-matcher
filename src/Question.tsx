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
  handleAnswer: (value: string) => void;
};

const Question = ({ question, handleAnswer }: QuestionContainerType) => {
  const { text, choices } = question;

  return (
    <>
      <h2>{text}</h2>
      <ul>
        {choices.map((choice) => (
          <Answer
            key={choice.maven}
            answer={choice}
            handleAnswer={handleAnswer}
          />
        ))}
      </ul>
    </>
  );
};

export default Question;
