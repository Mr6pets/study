// 构造函数 promise

let promise = new Promise((resolve, reject) => {
  // resolve();//任务没有问题
  reject();//任务有问题
});
// console.log(promise);

promise
  .then(() => { console.log("ok") })
  .then(() => { console.log("还是OK的") })
  .catch(() => { console.log("这里是有问题的") })



