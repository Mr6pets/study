//事件模块

//1.引入系统事件模块
var events = require('events')

//2.创建EventEmitter事件对象
var myEmitter = new events.EventEmitter();

//3.注册事件
myEmitter.on('someEvent', function (msg) {
  // 异步执行
  setImmediate(() => {
    console.log(msg)
  })

})

//4.触发事件(emit告诉要触发事件的名字，参数)
myEmitter.emit("someEvent", "实现事件传递到回调中")

console.log(1)






