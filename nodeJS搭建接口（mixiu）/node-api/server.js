//引入express模块
const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const passport=require("passport")
// 实例化express
const app = express();
// 引入users.js
const users=require("./routes/api/users.js")
// 引入profile.js
const profile=require("./routes/api/profile.js")
//DB 配置
const db=require("./config/keys.js");

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//链接数据库
mongoose.connect(db.mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
			.then(()=>{console.log("success connecting")})
			.catch((err)=>{console.log(err)})
//使用中间件实现跨域
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Content-Type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
})


//使用passport初始化
app.use(passport.initialize())
//将passport模块传递作为参数传递
require("./config/passport.js")(passport);

//页面请求
// app.get("/", (req, res) => {
// 	res.send("hello");
// })

//使用中间件使用routes
//如果访问了localhost:5000/api/users的时候 就是找到users localhost:5000/api/users/test返回login works的信息
//添加/api/users到users这路由上面
app.use("/api/users",users);
app.use("/api/profile",profile);
//设置端口号如果有设置的端口就用设置的端口号如果没有就用5000
const port = process.env.PORT || 5000;

//设置端口监听
app.listen(port, () => {
	console.log(`server running on port ${port}`);
})














