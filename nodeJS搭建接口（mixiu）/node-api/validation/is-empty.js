// isEmpty最终要返回一个布尔值 例如:{name:"......."} 那就返回一个false 未通过  {}如果是这样的一个对象 返回true
const isEmpty=value=>{
	//只要有是符合下面一项就会true
	return value===undefined || value===null || (typeof value==="object" && Object.keys(value).length===0) ||(typeof value==="string" && value.trim().length===0)
}

module.exports=isEmpty;
