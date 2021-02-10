//存储模型
const mongoose =require("mongoose");
//实例化一个schema
const Schema=mongoose.Schema;
//create Schema
//定义存储的模型是怎么样的
const UserSchema=new Schema({
	name:{
		type:String,
	},
	email:{
		type:String,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	avatar:{
		type:String,
	},
	date:{
		type:Date,
		default:Date.now
	}
})
// 将搭建的模型暴露出去,数据库为users用户的模型依照搭建的模型进行存储赋值给User
module.exports= User = mongoose.model("users",UserSchema)




