//引入一个express框架
var express = require('express');

//实例化express的对象
var app = express();

//express配置视图引擎为ejs
app.set('view engine', 'ejs')

//通过对象调用对应的方法
//根据用户请求的地址 返回对应的数据信息
//当用户get根路径的时候 给你用户发送回一个信息
app.get('/', function (req, res) {
  // console.log(req.url);
  res.sendFile(__dirname + '/index.html')
});

app.get('/count', function (req, res) {
  res.sendFile(__dirname + '/count.html');
})
//路由参数
//当用户输入profile/...的时候去渲染名为profile.ejs的文件
app.get('/profile/:id', function (req, res) {
  //传递一个对象
  // res.render('profile', { name: "alvis's ejs" })
  // var data = { age: 20, name: "alvis" }
  var data = [{ age: 20, name: [{ name: "alvis" }, { name: "csc" }] }, { age: 23, name: [{ name: "bukey" }, { name: "jiji" }] }]
  res.render('profile', { wbbsite_id: req.params.id, data: data })
})

//监听服务器端口号
app.listen(3333)