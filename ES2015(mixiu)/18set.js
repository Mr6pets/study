// 数据结构 set
// 集合：可以存储任何数据类型 并且是唯一的（不重复的值）

const set1 = new Set();
//在set中添加数据
set1.add(100);
set1.add("string");
set1.add({ name: "alvis" });
set1.add(true);
set1.add(100);//重复添加不上去

console.log(set1);

const set2 = new Set([1, true, 'string']);
console.log(set2);

//计算set1中的数据个数
console.log(set1.size);//4

// 检查set中是否拥有某个值
console.log(set1.has(100));//true
console.log(set1.has(50 + 50));//true

console.log(set1.has({ name: "alvis" }))//false
console.log({ name: "alvis" } === { name: "alvis" });//false 这里匹配的是地址 所以是false
//删除set中的内容
set1.delete(100);
console.log(set1);//

//for.. of遍历set
for (let item of set1) {
  console.log(item);//
}
//forEach遍历
set1.forEach(item => {
  console.log(item);
})

//将set转化为arr
const setArray = Array.from(set1);
console.log(setArray);






