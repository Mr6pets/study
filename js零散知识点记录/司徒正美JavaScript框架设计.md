<!-- 司徒正美JavaScript框架设计 -->
~~~js
// 3中模式的定义方式
//AMD
define(['./aa','./bb'],function(a,b){
  return {
    c:a+b
  }
})
//CommonJS
var a=require('./aa');
var b=require('./bb);
module.exports={
  c:a+b
}
//es6 module
import a from './aa';
import b from './bb';
var c=a+b;

export {c}


// 拓展一个对象
function extend(){
  for(var property in source){
    destination[property]=source[property];
    return destination;
  }
}







~~~