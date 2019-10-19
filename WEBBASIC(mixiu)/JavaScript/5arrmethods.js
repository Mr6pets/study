const numbers = [24, 56, 76, 87, 23, 5];
const numbers2 = new Array(22, 45, 6, 7, 89);
const fruit = ["Apple", 'Banana', 'orange', 'Pear'];
const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 2 }, new Date()];
let val;
//获取长度
val = numbers.length;
//检查是不是数组
val = Array.isArray(numbers);
//获取数组单个元素
val = numbers[2];
//更改某个元素
numbers[2] = 999;
//查找元素的下标位置
val = numbers.indexOf(43);//-1
//添加和删除
numbers.push(44);
//从前面加
numbers.unshift(11);
// 从后面删除
numbers.pop();
// 从前面删除
numbers.shift();
//  删除多个
numbers.splice(1, 3);
// 反转
numbers.reverse();
// 数组凭借
val = numbers.concat(numbers2);
//排序
val = fruit.sort();

val = numbers.sort(function (x, y) {
  return x - y;//正序
  // return y-x;反序
})
console.log(val);
console.log(numbers);