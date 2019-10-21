// 数据结构 map
// 键值对：与对象不同的是建和值可以是任何类型

const map1 = new Map();

// 设置key键
const key1 = 'some string',
  key2 = {},
  key3 = function () { }

//设置对应的value值
map1.set(key1, "value of key1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");

//根据key获取对应的value值
console.log(map1.get(key1), map1.get(key2));

//获取对应的value数量
console.log(map1.size);

//for of 遍历map1中的key 和 value
for (let [key, value] of map1) {
  console.log(`${key}=${value}`);
}

//获取key值
for (let key of map1.keys()) {
  console.log(key);
}

//获取value值
for (let value of map1.values()) {
  console.log(value);
}

//forEach
map1.forEach((value, key) => {
  console.log(`${key}=${value}`);
})

//将map转化为正常的数组
const keyValueArr = Array.from(map1);
console.log(keyValueArr);

//将map1中的key值作为数组
const keyArr = Array.from(map1.keys());
console.log(keyArr);
//将map1中的value值转化为数组
const valueArr = Array.from(map1.values());
console.log(valueArr);



