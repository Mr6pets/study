~~~js
//class语法糖
// 构造函数
function Point(x,y){
  this.x=x;
  this.y=y;
}
Point.prototype.toString=function(){
  return '('+this.x+','+this.y+')';
};
var p=new Point(1,2);


// 对应上面的构造函数
class {
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  tostring(){
    return '('+this.x+','this.y')'
  }
}

~~~


~~~js
// 实现一个new 操作符
function New(func){
	var res={};
	if(func.prototype!==null){
		res.__proto__=func.prototype
	}
	var ret=func.apply(res,Array.prototype.slice.call(arguments,1));
	if((typeOf ret==='object' || typeOf ret === "function") && ret !=null){
		return ret
	}
	return res
	
}
var obj=new(A,1,2);
var obj=new A(1,2);

~~~

