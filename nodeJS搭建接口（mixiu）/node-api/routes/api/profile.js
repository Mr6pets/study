// 登录和注册
const express=require("express");
//创建路由实例，我们可以在该实例上自由的添加路由
const router=express.Router();
const mongoose=require("mongoose");
const passport=require("passport");

//引入了2张表
const Profile=require("../../models/Profiles");
const User=require("../../models/Users.js")

//$route GET api/profile/test
//@desc 返回的请求的json数据
//@access public
router.get("/test",(req,res)=>{
	res.json({msg:"donedone"})
});

//$route GET api/profile
//@desc 获取当前登录用户的个人信息
//@access private
router.get("/",(req,res)=>{
	res.json({msg:"oooo"})
})

module.exports=router;