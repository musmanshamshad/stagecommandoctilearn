const getDecimalPoint = (num) => {
  const intValue = Math.floor(num);
  const decimalPoints = +`${num - intValue}`;
  return decimalPoints;
};

const hoursAgainstDecimals = (decimalPoint) => {
  let obj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const hours = Math.floor(decimalPoint);
  const minutesUnrounded = getDecimalPoint(decimalPoint) * 60;

  const secondsUnrounded = getDecimalPoint(minutesUnrounded) * 60;
  const minutes = Math.floor(minutesUnrounded);
  const seconds = Math.floor(secondsUnrounded);

  obj = {
    hours,
    minutes,
    seconds,
  };

  return obj;
};
export { getDecimalPoint, hoursAgainstDecimals };
