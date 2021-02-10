// 解构
// 更快 更便捷

const names = ["alvis", "lili", "wigo"];

const [name1, name2, name3] = names;//解构names 到name1 name2 name3
console.log(name1, name2, name3);

//返回数组个数
const { length } = names;
console.log(length);

//展开运算符
const [name, ...rest] = names;
console.log(name);
console.log(rest);

let a, b;
[a, b] = [100, 200];
console.log(b);

// 对象数组
const people = [
  { name: "alvis", age: 20 },
  { name: "lili", age: 27 },
  { name: "wigo", age: 35 }
]
// const [age] = people
// console.log(age);//{name: "alvis", age: 20}
const [{ age }] = people;
console.log(age);//20


//使用场景 将数组转化为对象
const point = [
  [4, 5],
  [10, 1],
  [0, 40]
];
//变成
// [
//   { x: 4, y: 5 },
//   { x: 10, y: 1 },
//   { x: 0, y: 40 }
// ]

// es6
// let newPoints = point.map(pair => {
//   // const x = pair[0];
//   // const y = pair[1];

//   // 优化
//   const [x, y] = pair;
//   return { x, y };
// })
// console.log(newPoints);


let newPoints = point.map(([x, y]) => {
  // return { x: x, y: y };
  return { x, y };
})
console.log(newPoints);

