<?php
	//question1 判断一个变量是不是数组 如果是数组遍历数组输出
$arr=[1,5,3,5,6,7];
// $arr='dddddd';
if(is_array($arr)){
	foreach ($arr as $key => $value) {
		echo '<br>'.$key.'=>'.$value;
	}
}else{
	echo "你的数据不是数组，不能遍历输出哦";
}
// var_dump(is_array($arr));


// 写一个分页结构





















