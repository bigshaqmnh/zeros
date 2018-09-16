module.exports = function getZerosCount(number) {
  let countZeros = 0;
  
  for (let i = 5; i <= number; i += 5) {
    for (let j = 1; i >= Math.pow(5, j); ++j) {
      if (i % Math.pow(5, j) === 0) {
        countZeros++;
      }
    }
  }

  return countZeros;
}
