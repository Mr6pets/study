// 假定有一个数组A，将A数组中的值以双倍的形式放到B数组中去

// ES5写法
var numberA=[1,2,3,4,5];
var numberB=[];
for(var i=0;i<numberA.length;i++){
    numberB.push(numberA[i]*2);
}
console.log(numberB);

// ES6写法 forEach
numberA.forEach(function(item){
    numberB.push(item*2)
});
console.log(numberB);

// ES6写法 map
var doubule=[];
var doubule = numberA.map(function(number){
    return number*2
})
console.log(doubule);


// 假定有一个对象数组A，将A数组中对象的某个值的属性存储到到B数组中去
var cars=[
    {model:"buick",price:"cheap"},
    {model:"BMW",price:"expensive"}
]
var prices=[];
prices=cars.map(function(car){
    return car.price
})
console.log(prices);
