<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
// 存取前端传递过来的值
$username = $_GET['username'];
$age = $_GET['age'];
// 打印出取到的东西
echo "你的名字：{$username},年龄：{$age}";































