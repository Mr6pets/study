const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose=require("mongoose");
const User=mongoose.model("users");
const keys=require("../config/keys")
//配置信息 opts中放置了jwtfromrequest 和 jwttoken的名字
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
//导出验证方法
module.exports=passport=>{
	passport.use(new JwtStrategy(opts, (jwt_payload, done) =>{
	    // console.log(jwt_payload);//能够获取到用户信息
		//数据库中找能拿到的id
		User.findById(jwt_payload.id)
		.then(user=>{
			//如果能拿到值 done返回当前的user信息
			if(user){
				return done(null,user);
			}
			return done(null,false);
		})
		.catch(err=>{console.log(err)})
	}));
}