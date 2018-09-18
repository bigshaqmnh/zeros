module.exports = function getZerosCount(number) {
  let countZeros = 0, num = 1;
  
  for (let i = 1; Math.pow(5, i) <= number; ++i) {
    countZeros += Math.floor(number / Math.pow(5, i));
  }
 
  return countZeros;
}
