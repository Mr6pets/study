// for (let i = 0; i < 10; i++) {
//   if (i == 2) {
//     console.log("2");
//     continue;//跳出本次循环
//   }
//   if (i == 5) {
//     console.log('stop the loop');
//     break;//结束循环
//   }
// }
// console.log('number' + i)

// let i = 0;
// while (i < 10) {
//   console.log('number' + i);
//   i++
// }

let i = 0;
do {
  console.log('number' + i)
  i++
} while (i < 10)

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

//es5循环
for (let i = 0; i < cars.length; i++) {
  console.log(i)
}

//foreach
cars.forEach(function (car, index, array) {
  console.log(car, index, array)
});

//map
const users = [
  { id: 0, name: "john" },
  { id: 1, name: "lolo" },
  { id: 2, name: "alvis" },
  { id: 3, name: "json" }
]
const ids = users.map(function (user) {
  return user.id
})
console.log(ids)


//遍历对象
const use = {
  firstName: 'alvis',
  lastName: 'liu',
  age: 40
}
for (let x in use) {
  console.log(`${x}:${use[x]}`)
}

