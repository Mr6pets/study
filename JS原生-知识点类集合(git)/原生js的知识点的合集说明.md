##	js原生知识点集合

> ​	1DOM优化

- dom 于浏览器的关系
  - 重排：改变页面的内容
  - 重绘：浏览器显示内容
  - 添加顺序
    - 尽量在appendchild前添加操作
  - 合并dom操作
    - 利用csstext
  - 缓存布局信息
  - 文档碎片
    - createDocumentFragment()

> ​	2快速排序

- 采用递归的方式

  ~~~javascript
  /*
              1.找一个基准点
              2.建立两个数组，分别存储左边和右边的数据
              3.利用递归进行下次比较
          */
          function quickSort(arr){
              if(arr.length<=1){
                  return arr;
              }
              var num=Math.floor(arr.length/2);//向下取整(去尾法)
              var numValue=arr.splice(num,1);//这里是截取其中一个数值
              var left=[];
              var right=[];
              for(var i=0;i<arr.length;i++){
                  if(arr[i]<numValue){
                      left.push(arr[i]);
                  }else{
                      right.push(arr[i]);
                  }
              }
              return quickSort(left).concat([numValue],quickSort(right));
          }
          alert(quickSort([12,5,37,6,22,40]));
  ~~~

  

> ​	3函数声明和函数表达式

- 说明

  ~~~javascript
  函数声明：function 函数名 （）{}
              函数表达式：
                  function 函数名(){}//命名函数表达式
                  function (){}//匿名函数表达式
  
  
              function aaa(){}//函数声明
              var a=function aaa(){}//命名函数表达式
              var a=function (){}//匿名函数表达式
  
              (function aaa(){})//表达式
              ~function aaa(){}
              -function aaa(){}
              +function aaa(){}
              !function aaa(){}
  ~~~

  

> ​	4操作iframe

等待添加

> ​	5枚举算法

等待添加

> ​	6事件委托

- 具体参考文件说明

  ~~~
  //事件委托:利用冒泡的原理将事件加到父级来触发
  ~~~

  

> ​	7闭包

~~~javascript
/*
            1.什么是闭包
            2.闭包有什么好处？应用在哪里？
            3.闭包需要注意的地方？
        */
 //内容较多，详见文档       
~~~



> ​	8对象引用 深拷贝 浅拷贝

~~~javascript
 var obj={
        a:10
    };
    function copy(obj){//这里叫做浅拷贝 或者叫做浅克隆
        var newObj={};
        for(var attr in obj){
            newObj[attr]=obj[attr];
        }
        return obj2;
    };
    var obj2=copy(obj);
    obj2.a=20;
    alert(obj.a)//10
    
    //==========================================================
     function deepCopy(obj){//深拷贝
        if(typeof obj !='object'){
            return obj;
        }
        var newObj={};
        for(var attr in obj){
            newObj[attr]=deepCopy(obj[attr]);
        }
        return obj2;
    };

    var obj2=copy(obj);
    obj2.a.b=20;
    alert(obj.a.b)//10
~~~



> ​	9跨域

~~~javascript
 /*
        不存在跨域
            www.a.com/a.js
            www.a.com/c/b/js
        其他的都会存在跨域问题
        
        ajax:XMLHttpRequest();不能跨域

        跨域的解决办法:
        1.domain:document.domain="a.com";
        2.服务器代理：XMLHttprequest代理文件
        
        3.script标签：jsonp
        4.location.hash
        5.window.name

        6.flash
        7.html5 postMessage
  */
~~~

> ​	firebug工具使用

待添加

> ​	HTML5-history（历史管理）

待添加