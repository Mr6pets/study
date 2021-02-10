## 文档说明

>	```tex
>	这是一个关于原型链的一个说明理解文档
>	```

~~~js
function alvisliuan(){};
console.dir(alvisliuan);
~~~

![console](/Users/liuan/Documents/console.png)

~~~js
这里有2个父级 prototype  和 __proto__
一般情况下当这个函数，做为构造函数使用的时候通过 prototype添加方法
对象的时候，通过__proto__添加方法
~~~

![构造函数](/Users/liuan/Downloads/构造函数.png)

图表说明：

~~~js
function User(){};
let hd=new User();

Object.protoype.show=function(){
  console.log("Object add prototype");
}
图片左边：构造函数User 的父级有2个 hd是通过User构造函数出来的 他的父级别User的prototype
如果在Object的原型上添加方法 其他的都是可以调用到的。
~~~



