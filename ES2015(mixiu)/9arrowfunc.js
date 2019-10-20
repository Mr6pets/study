// 箭头函数-解决问题
// 1.缩减代码
// 2.改变this指向
const double1 = function (number) {
  return number * 2;
}

const double2 = (number) => {
  return number * 2;
}

const double3 = (number) => number * 2//去掉花括号({}) return 去掉;

const double4 = number => number * 2;//适用于单个形参；

const double5 = (number => number * 2);//这里注意是单个形参 同时（）中最后不能写分号

// const double6 = (number1, number2) => number1 + number2;//多个形参,必须要带（）
// console.log(double6(20, 30));

const double7 = (number1, number2) => {
  sum = number1 + number2;
  return sum;
}//如果是多行的命令 {}是必须要加的
console.log(double7(20, 30));

console.log(double1(20));





// +++++++++++++map一个数组，让数组中的值以double的形式展开+++++++++++++
const numbers = [1, 2, 3];
// var numberVal = numbers.map(function (item) {
//   return item * 2;
// })
// console.log(numberVal);

//简化
var numberVal = numbers.map(item => item * 2);
console.log(numberVal);

//改变this指向  
const team1 = {
  members: ['alvis', 'lili'],
  teamName: "web developer",
  // teamSummary: function () {
  //   return this.members.map(function (item) {//这里的this.teamName中this的指向已经不明确了 所以循环出来的不正确
  //     return `${item}的职业是${this.teamName}小组`;
  //   })
  // },
  //或者用bind(this);
  // teamSummary: function () {
  //   return this.members.map(function (item) {//这里的this.teamName中this的用bind(this)绑定
  //     return `${item}的职业是${this.teamName}小组`;
  //   }.bind(this))
  // },
  teamSummary: function () {
    var that = this;
    return this.members.map(function (item) {
      return `${item}的职业是${that.teamName}小组`;
    })
  }
}


const team = {
  members: ['alvis', 'lili'],
  teamName: "web developer",
  teamSummary: function () {
    return this.members.map((item) => {//这里的this指向的就是team对象
      return `${item}的职业是${this.teamName}小组`;
    })
  }
}
console.log(team.teamSummary());

