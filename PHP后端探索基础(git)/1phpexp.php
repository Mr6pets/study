<?php
//变量命名规则
// 以$开头，其后是变量名称
// 变量名称必须以字母下划线开头
// 变量名称只能包含字母，下划线和数字
// 变量名称大小写敏感
$newsTitle='liuan';
$newsTitle2='is';
$newsTitle3='superman';
$newsTitle4='我是$newsTitle3';
$newsTitle5="我是$newsTitle3";
echo $newsTitle.$newsTitle2;//liuanis
echo '<br>';
echo $newsTitle4;//我是$newsTitle3
echo '<br>';
echo $newsTitle5;//我是superman

echo '<br>';
$newsTitle6='   nees';
echo trim($newsTitle6);
echo '<br>';
var_dump( trim($newsTitle6));
echo strlen($newsTitle6);//7

echo mb_strlen($newsTitle6);//7


// $connection=mysql_connect('localhost','root','');
// var_dump($connection);

$null=1;
unset($null);//销毁变量
var_dump($null);//null
?>