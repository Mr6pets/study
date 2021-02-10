// spread operator 展开运算符
// 更快 更便捷的操作数组

// function addNumbers(numbers) {
//   return numbers.reduce((total, single) => {
//     return total + single;
//   }, 0)
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(addNumbers(numbers));


// function addNumbers(a, b, c, d, e) {
//   var numbers = [a, b, c, d, e];
//   return numbers.reduce((total, single) => {
//     return total + single
//   }, 0)
// }
// console.log(addNumbers(1, 2, 3, 4, 5))

//展开运算符 优化
function addNumbers(...numbers) {
  return numbers.reduce((total, single) => {
    return total + single
  }, 0)
}
console.log(addNumbers(1, 2, 3, 4, 5));


var defaultColors = ["red", "greed"];
var favoriteColors = ["lightred", "lightblue"];
var secColors = ["orange", "pink"]
//concat
var def = defaultColors.concat(favoriteColors);

console.log(def);
console.log([...defaultColors, ...favoriteColors]);
console.log(["lightfest", ...defaultColors, ...favoriteColors]);


//
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items
}
console.log(validateShoppingList("orange", "apple", "banana"))