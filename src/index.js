module.exports = function reverse (n) {
  let x = Math.abs(n).toString();
  let z = x.split('');
  let zz = z.reverse();
  let c = zz.join('');
  return Number(c);
}
