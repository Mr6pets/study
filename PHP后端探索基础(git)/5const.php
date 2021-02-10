<?php

define("DATABASE", 'news');
// echo 'database is'.DATABASE;
define("VIP_PRICE", 199);
echo VIP_PRICE;

var_dump(PHP_VERSION);

//判断常量变量的状态函数
//defined()
define('USERNAME','root');
var_dump(defined("USERNAME"));//boolean true表示名为USERNAME的常量已经被定义了
var_dump(defined("USERNAME1"));//boolean false表示名为USERNAME1的常量已经未被定义了

//判断变量是否被定义用 isset函数
//isset()
$user='root';
var_dump(isset($user));//true

$user1=null;
var_dump(isset($user1));//false















