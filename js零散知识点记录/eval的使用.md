<!-- eval()的使用 -->
~~~js
eval（）
它的作用是把对应的字符串解析成js代码并运行（将json的字符串解析成为JSON对象）

特点：
它是一个全局函数；
缺点：
1>在该函数内部申明的变量都是全局变量，且申明的变量不会提升；

2>耗性能，执行2次，一次解析成js语句，一次执行js代码；


console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false


// 慎用此方法





~~~



















