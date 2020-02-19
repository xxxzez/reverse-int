module.exports = function reverse (n) {
  return Number(Math.abs(n).toString().split('').reverse().join(''));
}
