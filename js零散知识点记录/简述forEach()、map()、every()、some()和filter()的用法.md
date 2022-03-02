<!-- 简述forEach()、map()、every()、some()和filter()的用法 -->

~~~js
// 一、forEach()，用于遍历数组，无返回值
var arr=[1,-2,3,4];
arr.forEach((item,index,array)=>{
  return item*2
})
console.log(arr);//原数组都变成了2倍自己


arr.forEach(function(item,index,array){
    console.log(array[index] === item);   // true
});

//二，map()，用于遍历数组，返回处理之后的新数组
var newArr= arr.map((item,index,array)=>{
  return item*2
})
console.log(newArr);


// 三、every()，用于判断数组中的每一项元素是否都满足条件，返回一个布尔值
var  isEvery=arr.every((item,index,array)=>{
  return item>0//是否每一个item都是大于0 的
})
console.log(isEvery);//false



// 四、some()，用于判断数组中的是否存在满足条件的元素，返回一个布尔值
var isSome=arr.some((item,index,array)=>{
  return item<0;
})
console.log(isSome);   // true


// 五、filter()，用于筛选数组中满足条件的元素，返回一个筛选后的新数组
var minus=arr.filter((item,index,array)=>{
  return item<0;
});
console.log(minus)//[-2]
~~~












































