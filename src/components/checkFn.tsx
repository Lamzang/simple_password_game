//각 스테이지에 맞는 함수

export function StageOne(password: string) {
  const result = {
    id: 1,
    correct: false,
    contents: "Your password must be at least 5 characters.",
  };
  if (password.length > 4) {
    result.correct = true;
  }
  return result;
}

export function StageTwo(password: string) {
  const result = {
    id: 2,
    correct: false,
    contents: "Your password must include a number.",
  };
  if (/\d/.test(password)) {
    result.correct = true;
  }
  return result;
}

export function StageThree(password: string) {
  const result = {
    id: 3,
    correct: false,
    contents: "Your password must include an uppercase letter.",
  };
  if (/[A-Z]/.test(password)) {
    result.correct = true;
  }
  return result;
}

export function StageFour(password: string) {
  const result = {
    id: 4,
    correct: false,
    contents: "Your password must include a special character.",
  };
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    result.correct = true;
  }
  return result;
}

export function StageFive(password: string) {
  const result = {
    id: 5,
    correct: false,
    contents: "The digits in your password must add up to 25.",
  };
  const numArr: string[] = password.match(/\d/g) || [];
  const sumNum = numArr.reduce(
    (accum: number, current: string) => accum + parseInt(current, 10),
    0
  );
  if (sumNum === 25) {
    result.correct = true;
  }
  return result;
}

export function StageSix(password: string) {
  const result = {
    id: 6,
    correct: false,
    contents: "Your password must include a month of the year.",
  };
  const monthArr = [
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "September",
    "octobor",
    "november",
    "december",
  ];
  const lowerPassword = password.toLowerCase();
  if (monthArr.some((element) => lowerPassword.includes(element))) {
    result.correct = true;
  }
  return result;
}

export function StageSeven(password: string) {
  const result = {
    id: 7,
    correct: false,
    contents: "Your password must be odd number of characters.",
  };
  if (password.length % 2 === 0) {
    result.correct = true;
  }
  return result;
}
