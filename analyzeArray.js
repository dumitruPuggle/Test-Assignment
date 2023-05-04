function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

const analyzeArray = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let oddNumberCount = 0;

  const checkIsOdd = (number) => {
    if (isOdd(number)) {
      oddNumberCount++;
    }
  };

  arr.forEach(checkIsOdd);

  return {
    min,
    max,
    oddNumberCount,
  };
};

module.exports = { analyzeArray };
