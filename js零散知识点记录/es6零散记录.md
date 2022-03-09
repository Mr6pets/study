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
~~~js
//手写一个promise
class Promise{
	//构造器
	constructor(executor){
		//初始化等待状态
		this.state='pending';
		// 成功的值
		this.value=undefiend;
		// 失败的原因
		this.reason=undefiend;
		//成功的方法存放
		this.onResolvedCallbacks=[];
		//失败的方法存放
		this.onRejectedCallbacks=[];
		//成功
		let resolve=value=>{
			if(this.state==='pending'){
				this.state='fulfilled';
				this.value=value;
				// 一旦resolve执行，调用成功数组的函数
				this.onResolvedCallbacks.forEach(fn=>fn());
			}
		};
		//失败
		let reject=reason=>{
			if(this.state==='pending'){
				this.state="rejected";
				this.reason=reason;
				// 一旦reject执行，调用失败数组的函数
				this.onRejectedCallbacks.forEach(fn=>fn());
			}
		};
		// 如果executor执行报错，直接执行reject
		try{
			executor(resolve,reject);
		}catch(){
			reject(err);
		}
	}
	
	//then方法；
	then(onFulfilled,onRejected){
		// 状态为fulfilled，执行onFulfilled，传入成功的值
		if(this.state==='fulfilled'){
			onFulfilled(this.value);
		}
		// 状态为rejected，执行onRejected，传入失败的原因
		if(this.state==='rejected'){
			onRejected(this.reason);
		}
		// 当状态state为pending时
		if(this.state==='pending'){
			// onFulfilled传入到成功数组
			this.onResolvedCallbacks.push(()=>{
				onFulfilled(this.value);
			})
			// onRejected传入到失败数组
			this.onRejectedCallbacks.push(()=>{
				onRejected(this.value);
			})
		}
	}
	
}
~~~
