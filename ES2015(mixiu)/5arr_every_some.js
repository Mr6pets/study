// 场景1:计算对象数组中每个电脑操作系统是否可用
// 大于16位的操作系统表示可用，否则不可用

var computers=[
    {name:"apple",ram:16},
    {name:"IBM",ram:4},
    {name:"acer",ram:32}
]
var everyComputersCanRunComputer=true;
var someComputersCanRunComputer=false;

// es5
for (let i = 0; i < computers.length; i++) {
    var computer=computers[i];
    if(computer.ram<16){
        everyComputersCanRunComputer=false;
    }else{
        someComputersCanRunComputer=true;
    }
}
console.log(everyComputersCanRunComputer);

// every:一假即假 只要有一个假那就是假
//some:一真则真
// es6
var every=computers.every(function(item){
    return item.ram>16;
})
console.log(every);//只要找到一个是假的 判断为假  之后就不会遍历了 判断所有的为真 才能为真

var some=computers.some(function(item){
    return item.ram>16
})
console.log(some);//只要有一个为真 就为真 






// 假定有一个注册页面，判断所有input内容的长度是否大于0;

function Filed(value){
    this.value=value;
}
Filed.prototype.validate=function(){
    return this.value.length>0;
}
var username=new Filed("alvis");
var tellphone=new Filed("18862144202");
var password=new Filed("");

// console.log(username.validate());//true
// console.log(tellphone.validate());//true
// console.log(password.validate());//false

// console.log(username.validate() && tellphone.validate() && password.validate());

var fileds=[username,tellphone,password];
var formIsValid=fileds.every(function(filed){
    return filed.validate();
})
 console.log(formIsValid);

 if(formIsValid){
     //注册成功
 }else{
     // 注册不成功
 }



