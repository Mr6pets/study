//if switch

// if分支语句
// if ('条件') { }

//条件 关系运算法 逻辑运算符 最终的结果都是为boolean
//关系运算符 > < == >= <= != === !==



//逻辑运算符
const name = "Alvis"
const age = 22;
//逻辑与 && and 一个为假就是假
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`)
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`)
// } else {
//   console.log(`${name}爱是啥是啥`)
// }

//逻辑或 一个为真那就是真
if (age > 0 || age < 20) {
  console.log(`${name} 年龄是大于0 小于20`)
}

//逻辑非
if (!true) {
  console.log('correct')
}

//三目运算符
console.log(id == 100 ? "是" : "否")






