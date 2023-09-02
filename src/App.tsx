import styled from "styled-components";
import { useState, useEffect } from "react";
import { Validator } from "./components/logic";
import AnswerSheet from "./components/AnswerSheet";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  padding-left: 10px;
`;

const Title = styled.div`
  height: 50px;
  font-size: 40px;
  margin-bottom: 40px;
`;

interface IValues {
  id: number;
  correct: boolean;
  contents: string;
}

function App() {
  //states
  const [password, setPassword] = useState("");
  const [stage, setStage] = useState(1);
  const [values, setValues] = useState<IValues[]>();

  //useEffects
  /* password와 stage가 변하면 검증한 뒤, 스테이지에 맞게 데이터를 변환 */
  useEffect(() => {
    setValues([...Validator(password).slice(0, stage).reverse()]);
  }, [password, stage]);

  /* 값이 변하면 stage도 변해야 하는지 확인 */
  useEffect(() => {
    if (values?.map((d) => d.correct).every((d) => d === true)) {
      setStage((prev) => prev + 1);
    }
  }, [values]);

  return (
    <Wrapper>
      <Title>Password Maker</Title>
      <form>
        <Input
          value={password}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          placeholder="Write password"
        />
        <ul>
          {values?.map((d) => (
            <AnswerSheet
              key={d.id}
              isCorrect={d?.correct}
              contents={d?.contents}
            />
          ))}
        </ul>
      </form>
    </Wrapper>
  );
}

export default App;
