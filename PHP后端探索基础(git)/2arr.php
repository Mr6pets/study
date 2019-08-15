<?php
//PHP数组的一些写法
	$newList=array();
	$newList2=[];
	var_dump($newList);
	var_dump($newList2);
	echo '<br>';
	$newList3=array('news1','news2','news3');
	$newList4=['news1','news2','news3'];
	var_dump($newList3);
	var_dump($newList4);
	echo '<br>';
	$newList5=array(
		0=>'news1',
		1=>'news2',
		2=>'news3',
	);
	var_dump($newList5);
	echo '<br>';
	$newList6=array(
		10=>'news1',
		1=>'news2',
		2=>'news3',
	);
	var_dump($newList6);//顺序输出
	echo '<br>';
	$newList7=array(
		10=>'news1',
		1=>'news2',
		'string'=>'news3',
	);
	var_dump($newList7);
	echo '<br>';
	$newList8=array(
		10=>'news1',
		1=>'new2',
		'int'=>1,
		'string'=>'news3',
		'float'=>1.5,
		'bool'=>true,
		'array'=>array(),
	);
	var_dump($newList8);
	echo '<br>';
	print_r($newList8);//简介输出元素

	//数组元素添加
	$newList9=array(
		10=>'news1',
		1=>'news2',
		2=>'news3',
	);
	$newList9[]='add_News4';//添加一个值到数组中并且它的key值是原数组最大key值加1
	$newList9[-1]='add_News5';//自定义一个key值的value
	$newList9[-1]='add_News5_1';//修改指定的key值的value;
	unset($newList9[-1])//删除指定key的值；
	$newList9[2];//或者某个key的value;
	print_r($newList9);//

?>