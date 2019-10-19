const first = "alvis";
const last = "liu";
// 拼接
let val;
val = first + last;

// 空格拼接
val = first + '' + last;

//append 追加
val = "hello";
val += 'alvis';

// 转义
val = 'tha\'t is cool, I lik\'e it';

// length 
val = first.length;

//concat拼接
val = first.concat('', last);

//大小写转换
val = first.toUpperCase();
val = last.toLowerCase();

//字符串下标
val = first[0];

//indexof
val = first.indexOf('l');
val = first.lastIndexOf('i');

//charAt
val = first.charAt(2);//v
val = first.charAt(first.length - 1);//s

// 获取字符串
val = first.substring(0, 4);//alvi

//slice
val = first.slice(0, 4);//alvi
val = first.slice(-3);//vis

//数组转split
var str = "i am the best";
val = str.split(' ');//["i", "am", "the", "best"]


console.log(val);