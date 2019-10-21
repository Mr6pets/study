// class 对象


// es5:---------------------------------------------------------
// function Car(options) {
//   this.title = options.title;
// }
// Car.prototype.drive = function () {
//   return "vroom";
// }
// const car = new Car({ title: "BMW" });
// console.log(car);//{title: "BMW"}
// console.log(car.drive());//vroom

// // 继承--------------
// // function Toyota(options) {
// //   this.color = options.color;
// // }
// // var toyota = new Toyota({ color: "red" }, { title: "focus" });
// // console.log(toyota);//{color: "red"} 无法拿到title 所以需要继承

// //继承来自car---------
// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
// //继承car的方法-------------
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// var toyota = new Toyota({ color: "red", title: "focus" });
// console.log(toyota);//{title: "focus", color: "red"}

// es6

class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}
const car = new Car({ title: "BMW" });
console.log(car.title);//BMW
console.log(car.drive());//vroom

//es6继承
class Toyota extends Car {//告诉其父级是谁
  constructor(options) {
    //继承
    super(options);//将当前的option传递到父级
    this.color = options.color;
  }
}
const toyota = new Toyota({ color: "red", title: "focus" });
console.log(toyota);//{title: "focus", color: "red"}




