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

  