//转化为字符串
// String()
let val;
// -----Number to String----------
val = String(555);
val = String(4 + 4);
val = String(true);
val = String(new Date());
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();

// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// ---------string to Number-----
val = Number('5');//5
val = Number(true);//1

val = Number(null);//0
val = Number('hello');//NaN
val = Number([1, 2, 3]);//NaN

val = parseInt("100.30");//100
val = parseFloat("100.39");//100.39

console.log(val.toFixed(2));//小数点保留几位

