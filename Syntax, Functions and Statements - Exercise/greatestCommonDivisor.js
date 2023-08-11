function greatestCommonDivisor(a, b) {
  let minNum;
  let maxNum;
  let divisor = 0;
  if (a > b) {
    minNum = b;
    maxNum = a;
  } else {
    minNum = a;
    maxNum = b;
  }
  for (let i = 1; i <= minNum; i++) {
    if (maxNum % i === 0) {
      if (minNum % i === 0) {
        divisor = i;
      }
    }
  }
  console.log(divisor);
}
