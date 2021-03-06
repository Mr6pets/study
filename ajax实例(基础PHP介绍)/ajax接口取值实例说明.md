> ​	关于PHP的一些语法说明_来自tencent课堂文件总结

1.网络

2.PHP

- PHP是一门后台语言 运行在服务器上
- js是前端语言 运行在浏览器上 js引擎 v8js引擎
- xampp集成工具
  - Apache+PHP+MySQL的集成软件
- 2.1安装
  - 安装xampp安装完成(网页文件在htdocs文件夹中)
  - http://localhost:8080/dashboard/
- 2.2php 
  - 



- php语法

  - 3.1php语法：

    - 文件后缀.php

    - 语法：<?php ?>

    - 注释：//      /** */       ##

    - 定义变量：$变量名称；

      ```
      eg: $name=123;
      //使用直接$name,每句话后面加； 分号结束
      //变量名：组成 字母 数据 下划线 不能数字开头
      ```

  - 3.3数据类型

    - 常量的定义
      - js:const name='admin';
      - php:define('常量名字'，赋值)；
      - PHP是弱语言类型，根据赋值决定数据类型
        - 布尔类型：Boolean
        - 整数类型：Integer
        - 浮点类型：Float
        - 字符类型：String
        - 数组类型：Object
        - 空值类型：NULL

>	回顾：PHP中MySQL的一些说明

- 1.MySQL数据

- 2.PHP连接数据库

  ~~~php
  //1.创建
  	$con=mysqli_connect('域名','账号','密码','数据库');
  	$con--->object false
  //2.设置
      mysqli_query($con,'set names utf8');
  //3.sql语句
  	$sql="select 信息 from 表名 where 条件";
  //4.执行sql
  	$result=mysqli_query($con,$sql);
  //查询的结果 $result 结果集
  	$arr=mysqli_fetch_all(处理的结果，MYSQLI_ASSOC);//assoc
  
  //5.关闭
  	mysqli_close($con);
      
  
  ~~~

- 3.sql语句

  ~~~php
  1.查询这个表里面 所有的名字和密码
  	$sql="select name,password from 表名";
  2.查询这个表里面 所有的名字=123 和密码=66的信息
  	$sql="select * from 表名 where name ='123'and password=66";
  3.查询这个表里面 所有名字=123 或者密码=66的信息
      $sql="select * from 表名 where name='123 or password=66'";
  4.修改名字是lilei 修改为huahua
      $sql="update 表名 set name='花花' where name='lilei'";
  5.增加信息 用户名 密码
      $sql="insert into 表名(name,psd) values('','')";
  6.删除 一条数据 名字 = '张三'
      $sql="delete from 表名 where name=''";
  ~~~

- 登录

  ~~~php
  分析 思路：
  步骤：
      1.form表单
      2.获取用户输入的信息 点击按钮进行ajax请求
      3.php获取传递来的账号 密码
      4.连接数据库 去执行账号 密码查询语句 数据库是否找到这条语句
      5.数据库有数据 返回1 没有返回2
  	作业.....
  ~~~

- 注册

  ~~~php
  步骤：
  1.form表单
  2.获取输入的信息 账号 密码 --->添加信息
  3.PHP获取传递来的账号和密码
  4.连接数据库 sql语句
  	$sql=''先拿着账号 去数据库里面查询 是否存在
  	如果账号存在--说明用户名已经存在了 不能注册 重新输入你的账号
  	如果账号不存在--注册（把账号 密码 添加到数据库里面）
  	num_row>0
  ~~~

> ​	回顾前端：ajax调用后台

- **1.ajax请求**

- 语法：xhr.open('请求类型'，‘URL地址’，是否异步)；

  - 说明：

    - 第一个参数是用来设置get/post请求
    - 第二个参数是用来设置请求发送到URL地址
    - 第三个参数是布尔值用来设置是否异步发送 默认false表示同步

  - 1)get无参数请求方式

  - 2)get有参数请求方式

    - 描述：get请求 拼接地址栏信息 url=xxx.php?name=123$password=111;
      - var url="...."
      - xhr.open('get',url,true);
      - xhr.send()

  - 3)post请求方式

    - 描述：post请求和get请求的差异就在于多一个表单数据
      - 在xhr对象中可以通过formdata进行构建
    - 语法：var formData = new formData();
      - formData.append('key',value);//value如果是字符串要加引号
      - xhr.send(formData)
    - 说明：
      - 至于formData的创建时机和位置，只要在能够发送请求之前 也就是xhr.send（）语句被写出之前添加给xhr对象

  - 4）timeout监听超时

    - 描述：timeout属性等于一个整数，用来设置当前请求发出后等待接收响应的时间 ontimeout()方法则是当等待超时后，自动执行的回调方法

    - 语法：

      ~~~javascript
      xhr.timeout=xxx;
      xhr.ontimeout=function(){
      	console.error("the request for"+url地址+"time out);
      }
      //说明：timeout属性党委是毫秒，表示当请求发出后等待响应时间
      //如果在设置的时间内没有接收到后台响应的数据，则默认请求超时（执行ontimeout）
      ~~~
  
  
  
- **2.原生ajax**

  - 特点：局部刷新网页 用户体验度好
  - 原生ajax步骤：
    - 1.创建XMLHttpRequest对象
    - 2.准备发送
    - 3.执行发送动作
    - 4.指定回调函数

- **jquery的ajax**

  ~~~javascript
  $.ajax({
  	type:'get/post',//请求的方式
  	url:'',//地址 路径 接口地址
  	async:true/false,//同步 false异步 默认是异步请求 js xhr.open('get',url,true)
      data:{key:value},//data:'name=123&password=123'
      				//data:{name:name,upsd:psd}
      dataType:'json/html/xml/script',//返回的数据类型 来自后台的数据类型
      success:function(){},//成功之后的回调函数
      error:function(){}//失败的回调函数
  })
  ~~~

- **xml和json的区别**
  
  - json：是一种轻量级的数据交换格式，具有良好的可读性和便于快速编写的特性 可在不同的平台之间进行数据的交互 json采用的兼容性很高的文本格式
  - xml：用于标记电子文件使其具有结构性的标记语言，可以用来标记数据 定义数据类型
  
- xml的缺点：

  - xml文件庞大 文件格式复杂 传输速度慢
  - 数据解析繁琐

- json的优缺点：

  - 数据格式比较简单 易于读写 格式都是压缩的 占用带宽小

  - 易于解析

  - 易于维护

    -----------------

  - json相对于xml来说 数据体积更小

  - json于JavaScript的交互更加方便

  - json对数据的描述性比xml差

  - json的速度要远远快于xml

- **利用ajax的beforeSend提高用户体验**

  - 1.防止重复提交数据

    ~~~javascript
    beforeSend:function(){
    	//禁用按钮防止重复提价
        $('#submit').attr({disabled:"disabled"});
    },
    complete:function(){
        $("#submit").removeAttr("diaabled");
    }
    ~~~
	  
  -  2.回调函数
    
    ~~~javascript
    //beforeSend:当发送请求之前调用并且传入一个XMLHttpRequest作为参数
    //error:当请求出错时调用 传入XMLHTTPRequest对象 描述错误类型的字符串以及一个异常的对象
    //success:当请求之后调用，传入返回后的数据，以及包含成功代码的字符串
    //complete:当请求完成之后调用这个函数，无论成功或者失败 传入XMLHttpRequest对象，以及一个包含成功或错误代码的字符串
    
    //2.模拟toast效果
    $.ajax({
    	type:"post",
    	url:"/home/getList.php",
    	beforeSend:function(){
    		$("loadingPic").show();
    	},
        success:function(data){},
        complete:function(){
            $("loadingPic").hide();
        },
        error:function(err){
            console.info('error:'+data.responseText);
        }
    })
    ~~~
    
    
  
- $.get()

  ~~~javascript
  语法：jQuery.get(url,[data],[callback],[type])
  url:待载入页面的URL地址
  data:待发送key/value参数
  callback:载入成功时回调函数
  type:返回内容格式.xml html script json text _default
  ~~~

- $.post()

  ~~~javascript
  语法：jQuery.post(url,[data],[callback],[type])
  url:发送请求地址
  data:待发送key/value参数
  callback:发送成功时回调
  type:返回内容格式.xml html script json text _default
  ~~~
  
- $.getJSON()
  
  ~~~javascript
  如果返回的数据格式都是json 那么也可以用getJSON()
  语法：jQuery.getJSON(url,[data],[callback]);
  url:发送请求地址
  data:待发送key/value参数
  callback:发送成功时回调函数
  ~~~
  
- 音频视频api--js

  ~~~javascript
  <audio src='' autoplay controls> </audio>
  常用属性：
  autoplay:自动播放
  controls:显示控件
  currentTime:返回当前音频 视频的播放时间
  duration:返回当前音频 视频总时长
  ended:返回当前音频 视频是否播放结束
  paused:暂停状态 暂停 true false 播放
  src:音频 视频路径
  volume:设置音量
  
  常用时间：
  oncanplay:在用户可以开始播放视频/音频(audio/vedio)时触发 视频/音频(audio/vedio)在加载过程中，触发的
  ontimeupdate:当前音频 视频播放时间改变时触发 以秒计
  object.addEventListenner("timeupdate",myScript);function myscript(){}
  play():播放
  pause():暂停
  
  ~~~

  

  





















































