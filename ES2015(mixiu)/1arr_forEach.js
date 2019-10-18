// 数组的方法： forEach map filter find every some reduce
var color=["red","green","blue","orange","pink"];
//ES5遍历数组
// for(var i=0;i<color.length;i++){
//     console.log(color[i]);
// };
//ES6遍历数组
// color.forEach(function(color){
//     console.log(color);
// });
// 箭头函数
// color.forEach(item=>{
//     console.log(item);
// })

// 练习：遍历数组中的值并且计算总和
var number=[1,2,3,4,5];
var numtotal=0;
number.forEach(function(item){
    numtotal+=item;
})
console.log(numtotal);

// 换个写法
var number=[1,2,3,4,5];
var numtotal=0;
function adder(number){
    numtotal+=number;
}
number.forEach(adder);
console.log(numtotal);


