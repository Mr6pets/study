// async&await
//隶属es7

// function myFunc() {
//   return "Hello World!";
// }
// console.log(myFunc());//Hello World!

// async function myFunc() {
//   return "Hello World!";
// }
// console.log(myFunc());//Promise {<resolved>: "Hello World!"}
// //这里得到了一个promise的构造函数 所以就可以用.then的方法了
// myFunc().then(data => { console.log(data) });//Hello World!

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve('hello world'), 2000)
//   })
//   // 错误信息
//   const error = false;
//   if (!error) {
//     //等待 resolve执行完毕，才会执行
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("error:报错了！"))
//   }

// }
// myFunc()
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//请求接口
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  const data = await response.json();
  return data
}
getUsers().then(users => c  onsole.log(users))




