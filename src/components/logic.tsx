import * as check from "./checkFn";

interface IValues {
  id: number;
  correct: boolean;
  contents: string;
}

//password를 받아 하나씩 검증하여 그 결과를 return
export function Validator(password: string) {
  const checkList: IValues[] = [];
  checkList.push(check.StageOne(password));
  checkList.push(check.StageTwo(password));
  checkList.push(check.StageThree(password));
  checkList.push(check.StageFour(password));
  checkList.push(check.StageFive(password));
  checkList.push(check.StageSix(password));
  checkList.push(check.StageSeven(password));
  return checkList;
}
