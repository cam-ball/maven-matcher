type AnswerType = {
  text: string;
  maven: string;
}

type AnswerContainerType = {
   answer: AnswerType;
   handleAnswer: (value: string) => void;
}

const Answer = ({answer, handleAnswer}: AnswerContainerType) => {
  const {text, maven} = answer;

  return(
      <li onClick={() => handleAnswer(maven)}>{text}</li>
      )
};

export default Answer;
