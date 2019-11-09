//主文件入口

//加载需要的express模块
var express = require('express');

//自定义模块todoController
var todoController = require('./controller/todoController');

//实例化express
var app = express();
//设置视图引擎
app.set('view engine', 'ejs');
//将静态样式文件模块化
// app.use('/public', express.static('public'));
app.use(express.static('./public'));

//调用todoController方法传递app对象
todoController(app);

//监听端口号
app.listen(3333);


