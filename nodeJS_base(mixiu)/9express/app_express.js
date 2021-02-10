//引入一个express框架
var express = require('express');

//实例化express的对象
var app = express();

//通过对象调用对应的方法
//根据用户请求的地址 返回对应的数据信息
//当用户get根路径的时候 给你用户发送回一个信息
app.get('/', function (req, res) {
  console.log(req.url);
  res.send('this is home page')
});

app.get('/count', function (req, res) {
  res.send("this is count page");
})
//路由参数
app.get('/profile/:id', function (req, res) {
  res.send("你访问的路径参数是:" + req.params.id)
})

//监听服务器端口号
app.listen(3333)


