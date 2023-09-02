import styled from "styled-components";

const Answer = styled.li<{ isCorrect: boolean }>`
  display: flex;
  padding: 7px;
  border: 1px solid black;
  background-color: ${(props) =>
    props.isCorrect ? props.theme.rightColor : props.theme.wrongColor};
  margin-top: 20px;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

interface IAnswer {
  key: number;
  isCorrect: boolean;
  contents: string;
}

function AnswerSheet({ key, isCorrect, contents }: IAnswer) {
  return (
    <Answer key={key} isCorrect={isCorrect}>
      {contents}
    </Answer>
  );
}

export default AnswerSheet;
