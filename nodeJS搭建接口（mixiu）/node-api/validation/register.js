const Validator=require('validator');
//验证是不是为空
const isEmpty=require("./is-empty.js");
// 暴露出一个验证方法 用data接收users页面传递来的req.body.name的那些表单的值
module.exports=function validateRegisterInput(data){
	let errors={};
	//如果data.name=字符串为true返回data.name
	data.name=!isEmpty(data.name)?data.name:" ";
	data.email=!isEmpty(data.email)?data.email:" ";
	data.password=!isEmpty(data.password)?data.password:" ";
	data.password2=!isEmpty(data.password2)?data.password2:" ";
	//使用validator的islength的方法验证
	//例子:validator.isEmail('foo@bar.com'); //=> true
	if(!Validator.isLength(data.name,{min:2,max:30})){
		errors.name="名字的长度不能小于2位同时也不能大于30位"
	}
	if(Validator.isEmpty(data.name)){
		errors.name="名字不能为空"
	}
	if(Validator.isEmpty(data.email)){
		errors.name="邮箱不能为空"
	}
	if(!Validator.isEmail(data.email)){
		errors.email="邮箱不合法"
	}
	if(Validator.isEmpty(data.password)){
		errors.password="密码不能为空"
	}
	if(!Validator.isLength(data.password,{min:6,max:30})){
		errors.password="密码的长度不能小于6位并且不能大于30位"
	}
	if(Validator.isEmpty(data.password2)){
		errors.password2="确认密码不能为空"
	}
	if(!Validator.equals(data.password,data.password2)){
		errors.password2="密码两次不一致"
	}
	//返回一个对象包含错误信息 包含一个isvalid:布尔值(如果isempty函数中的errors有值)就是false,如果没有errors为true
	//如果说isValid为true  那就是errors没有内容,如果说isValid为false 那就是errors有值 没有通过验证
	return {
		errors,
		isValid:isEmpty(errors)
	}
}



