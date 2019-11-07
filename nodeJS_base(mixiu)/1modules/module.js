var counter = function (arr) {
  return "the element is " + arr.length + " in arr!"
}
var adder = function (a, b) {
  return `
    你传递的值的总和是${a + b}
  `
}
var pi = 3.141592653;
//导出或者说暴露出这个方法
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}


