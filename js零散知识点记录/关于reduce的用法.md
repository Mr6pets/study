<!-- 关于reduce的用法 -->
~~~js
arr.reduce(function(prev,cur,index,arr){

},init);
arr 表示原数组；
prev 表示上一次调用回调时的返回值，或者初始值 init
cur 表示当前正在处理的数组元素；
index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
init 表示初始值。


先看w3c语法
array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
/*
  total: 必需。初始值, 或者计算结束后的返回值。
  currentValue： 必需。当前元素。
  currentIndex： 可选。当前元素的索引；                     
  arr： 可选。当前元素所属的数组对象。
  initialValue: 可选。传递给函数的初始值，相当于total的初始值。
*/


~~~
~~~js
示例：
var arr = [3,9,4,3,6,0,9];
求数组之和：
arr.reduce((prev,cur)=>{
  return prev+cur
},0)
// 由于传入了初始值0，所以开始时prev的值为0，cur的值为数组第一项3，相加之后返回值为3作为下一轮回调的prev值，然后再继续与下一个数组项相加，以此类推，直至完成所有数组项的和并返回。
// 求数组中最大值
var max=arr.reduce((prev,cur)=>{
  return Math.max(prev,cur)
})
// 由于未传入初始值，所以开始时prev的值为数组第一项3，cur的值为数组第二项9，取两值最大值后继续进入下一轮回调。

数组去重：
var newArr=arr.reduce((prev,cur)=>{
  prev.indexOf(cur)==-1 && prev.push(cur)
  return prev;
},[]);
① 初始化一个空数组
② 将需要去重处理的数组中的第1项在初始化数组中查找，如果找不到（空数组中肯定找不到），就将该项添加到初始化数组中
③ 将需要去重处理的数组中的第2项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
④ ……
⑤ 将需要去重处理的数组中的第n项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
⑥ 将这个初始化数组返回
~~~~

// reduceRight()
// 该方法用法与reduce()其实是相同的，只是遍历的顺序相反，它是从数组的最后一项开始，向前遍历到第一项。

// 求里面字母分别出现的频率
const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
const res = str.split('').reduce((accumulator, cur) => {
  accumulator[cur] ? accumulator[cur]++ : accumulator[cur] = 1; return accumulator;
  }, {});
console.log(res);
/**
 * 思路流程：
 * str.split('')将字符串转化为数组
 * 最后的{} 相当于accumulator的初始值
 * accumulator[cur] ? accumulator[cur]++ : accumulator[cur] = 1; return accumulator; 的意思是   从第一个开始 如果{s:}存在加1 否则一直等于1
 * */


//参考来源: https://www.cnblogs.com/amujoe/p/11376940.html




















