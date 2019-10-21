//new http:fetch
//基于promise的请求方法 更简单 更便捷

// let promise = new Promise((resolve, refect) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000)
// });
// promise.then(() => {
//   console.log("lalala");
// })

// url:http://jsonplaceholder.typicode.com/
let url = "http://jsonplaceholder.typicode.com/posts";
// console.log(fetch(url));
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));



