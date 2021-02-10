<?php
// 参与算术运算的字符串，只有以数字为开头的字符串才会被认作数字 可转 否则被转0 
var_dump('2017liuan'+1) ;//2018
echo '20.17'+1;//21.17
echo 'miaov20.17'+1;//1

// - .空字符串 ' '，字符串’0‘ ，整数0，浮点数0.0，null以及空数组将被转换成布尔型false
// - 2.其他的数据将被转换成布尔型true；

var_dump(true&&true);//true
var_dump(''&&true);// false
var_dump('0'&&true);//false
var_dump(0&&true);//false
var_dump(0.0&&true);//false


$str="2019lalalalalal";
$int1=(int)$str;
var_dump($int1);//2019
$int2=intval($str);
var_dump($int2);//2019

var_dump(settype($str, "int"));//true
var_dump($str);//2019
