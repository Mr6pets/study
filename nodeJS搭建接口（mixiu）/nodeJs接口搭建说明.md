##关于nodejs搭建接口说明

到创建的文件夹中

npm init 初始一个package.json 文件

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

全局安装nodemon

~~~js
npm install nodemon -g
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

> ​	jwt:jsonwebtoken

~~~js
npm install jsonwebtoken
~~~

~~~js
var jwt = require('jsonwebtoken');
// 开始存储的时候 开始加jsonwebtoken
// jwt.sign("规则","加密的名字","过期时间","箭头函数");
//定义规则:用存储中的id和用户名进行token的规则 其实也可以添加 跟多 比如邮箱等
const rule={id:user.id,name:user.name};
jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
if(err) throw err;
  res.json({
    success:true,
    token:"alvis"+token
  })
})
~~~



> ​	验证token 

~~~
npm install passport
npm install passport-jwt
~~~





