##关于nodejs搭建接口说明

~~~js
安装express模块
npm install express

~~~

~~~js
//引入express模块
const express = require("express");
// 实例化express
const app = express();
//页面请求
app.get("/", (req, res) => {
	res.send("hello");
})
//设置端口号如果有设置的端口就用设置的端口号如果没有就用5000
const port = process.env.PORT || 5000;

//设置端口监听
app.listen(port, () => {
	console.log(`server running on port ${port}`);
})
~~~



~~~js
安装mongoose模块
npm install mongoose
~~~

~~~js
安装bcrypt将密码加密
npm install bcrypt

//放置在要加密之前的地方
bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(newUser.password, salt, function(err, hash) {
    if(err) throw err;
    newUser.password=hash
    //存储数据
    newUser.save()
      .then((user)=>{res.json(user)})
      .catch((err)=>{console.log(err)})
  });
});
~~~

> ​	jwt



> ​	token:jsonwebtoken

~~~
npm install jsonwebtoken
~~~





