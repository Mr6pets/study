//设置日期
// let val;
// let birthday=new Date('9-10-1993 11:20:00')
// let birthday=new Date('September 10 1988')
// let birthday=new Date('9/10/1988')
// val =birthday;
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullyear(1992);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(25);


// console.log(val);




//获取时间
let val;
const today = new Date();
val = today;
val = today.getMonth() + 1;//获取月份
val = today.getDate();
val = today.getDay();
val = today.getFullyear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


console.log(val);