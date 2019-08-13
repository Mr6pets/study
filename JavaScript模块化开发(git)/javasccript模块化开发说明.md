###	关于JavaScript模块化开发的说明

> seajs库的说明和使用

1. 引入sea.js的库文件

2. 如何变成模块

   - define

3. 如何调用模块

   - exports
   - seajs.use

4. 如何依赖模块

   - require

   
   
   
   > 2.module1.js
   
   ~~~define(function(require,exports,module){//这三个参数是固定的的不能随意改动
   
   define(function(require,exports,module){//这三个参数是固定的的不能随意改动
       function show(){
           alert("我是module1,我是同事1")
       }
       //exports:对外提供接口的对象
       exports.show=show;
   });
   
      
   ~~~
   
   > 2.module2.js
   
   ```define(function(require,exports,module){//这三个参数是固定的的不能随意改动
   define(function(require,exports,module){//这三个参数是固定的的不能随意改动
       function show(){
           alert("我是module2,我是同事2")
       }
       //exports:对外提供接口的对象
       exports.show=show;
   });
   
      
   ```
   
   
   
   > 3.index.html
   
   ~~~javascript
   //接收2个参数：第一个参数：模块的地址 第二个是加载好的回调函数
   //sea的默认根目录：sea.js这个文件
   seajs.use('./module1.js',function(ex){
   	ex.show()//弹出我是module1,我是同事1
       show();//3
       function show(){
           alert("我是同事3")
       }
   });
   seajs.use('./module2.js',function(ex){
   	ex.show()//弹出我是module2,我是同事3
   });
   ~~~
   
   
   
   > ​	4module2.js
   
   ~~~javascript
   //exports:对外提供接口的对象
   define(function(require,exports,module){
       // require: 模块之间依赖的接口
       // mark1
       // require('./module3.js')
   
        // mark2
       var a= require('./module3.js').a//当引入的是sea下面的模块的时候，那么require执行完的结果就是exports
   
       function show(){
           // alert("我是module2，我是同事2")
           console.log(a)
       }
       exports.show=show;
   });
   ~~~
   
   
   
   > ​	4module3.js
   
   ~~~javascript
   //exports:对外提供接口的对象
   
   // mark1
   // var a=100;
   
   // mark2
   define(function(require,exports,module){
       var a=100;
       exports.a=a;
   })
   ~~~
   
   
   
##	webqq实战

   *	参考文件夹下内容

## 模块化的历史

- nodeJS的的出现(http://nodejs.org/)

  - commonJS的规范（http://www.commonjs.org/）

- 浏览器js的模块化？

  - AMD规范(http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)

    - requireJS库（http://require.org/）
  - CMD规范
    - Seajs采用的    
## js模块化

> ​	构建工具

- gruntjs(http://gruntjs.com/)
  - 安装流程
    - 先安装nodejs和npm(包管理工具)
    - npm install -g grunt-cli
    - npm install grunt --save-dev
    - grunt-versionnpm install grunt --save-dev

