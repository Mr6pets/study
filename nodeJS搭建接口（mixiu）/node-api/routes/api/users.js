// 登录和注册
const express=require("express");
//创建路由实例，我们可以在该实例上自由的添加路由
const router=express.Router();
// bcrypt加密
const bcrypt=require("bcrypt");
//使用全球公认头像
const gravatar = require('gravatar');
//jwt:jsonwebtoken
var jwt = require('jsonwebtoken')
//passport
const passport=require("passport")
const keys=require("../../config/keys.js")
// 将数据库引入,方便查询
const User=require("../../models/Users.js")

//引入验证方法
const validateRegisterInput=require("../../validation/register.js");
const validateLoginInput=require("../../validation/login.js");
//$route GET api/users/test
//@desc 返回的请求的json数据
//@access public
router.get("/test",(req,res)=>{
	res.json({msg:"login works"})
})


//$route GET api/users/register
//@desc 返回的请求的json数据
//@access public
router.post("/register",(req,res)=>{
	// console.log(req.body);
	//注册validate验证 使用es6的解构得到validateRegisterInput这个函数的返回的值
	const { errors,isValid } = validateRegisterInput(req.body);
	//判断isvalid是否通过
	if(!isValid){ 
		return res.status(400).json(errors);
	}
	//查询数据库中是否拥有邮箱
	User.findOne({email:req.body.email})
		.then((user)=>{
			if(user){
				//如果数据库中注册了 就返回 一个状态码400 还有一个段json 数据
				return res.status(400).json({email:"邮箱已经被注册!"})
			}else{
				// 参数:头像地址  {size,r:图片选择的格式(gravatar官网设置的图片样式),d:"mm表示默认头像"}
				var avatar = gravatar.url('req.body.email', {s: '200', r: 'g', d: 'mm'});
				//如果可以注册 那就收集前端的信息开始存储到数据库
				const newUser=new User({
					name:req.body.name,
					email:req.body.email,
					avatar,
					password:req.body.password
				})
				//放置在要加密之前的地方
				bcrypt.genSalt(10, function(err, salt) {
					 //将上面得到的password用salt方法进行加密返回一个回调函数
				    bcrypt.hash(newUser.password, salt, function(err, hash) {
						//如果有错误 抛出
						if(err) throw err;
						//如果没有错误将加密过后的hash赋值给对象的中的密码
						newUser.password=hash;
						//存储数据
						newUser.save()
								.then((user)=>{res.json(user)})
								.catch((err)=>{console.log(err)})
				    });
				});
				
			}
			
		})
})

//$route GET api/users/login
//@desc 返回token jwt passport
//@access public
router.post("/login",(req,res)=>{
	const {errors,isValid}= validateLoginInput(req.body);
	//判断isvalid是否通过
	if(!isValid){
		return res.status(400).json(errors);
	}
	const email =req.body.email;
	const password=req.body.password;
	//登录的时候查询数据库
	User.findOne({email})
	.then(user=>{
		//如果返回回来的不存在
		if(!user){
			return res.status(404).json({email:"用户不存在"})
		}
		//如果存在 要进行密码匹配 将前端传递过来的密码和数据库中密码进行比对
		bcrypt.compare(password, user.password)
		  .then(isMatch=>{
			  if(isMatch){
				  // 开始存储的时候 开始加jsonwebtoken
				  // jwt.sign("规则","加密的名字","过期时间","箭头函数");
				  //定义规则:用存储中的id和用户名进行token的规则 其实也可以添加 跟多 比如邮箱等
				  const rule={id:user.id,name:user.name};
				  jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
					  if(err) throw err;
					  res.json({
						  success:true,
						  token:"Bearer "+token
					  })
				  })
				  // res.json({msg:"success"})
			  }else{
				  return res.status(400).json({password:"密码错误"})
			  }
		  })
		
	})
})

//$route GET api/users/current( 假设用户在请求一些数据库信息)
//@desc 返回 current user
//@access private
//router.get("/current","使用passport的authenticate("验证方式",{session:false})验证token",(req,res)=>{res.json({msg:"success"})}
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
	// res.json(req.user);
	res.json({
		id:req.user.id,
		name:req.user.name,
		email:req.user.email
	})
})

//将router暴露出去
module.exports=router;


