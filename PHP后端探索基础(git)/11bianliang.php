<?php
// $a=1;
// echo $a.'<br>';
// function test(){
// 	global $a,$b;
// 	$b=2;
// 	echo $a.','.$b;
// }
// test();
// echo $b;



// $a=1;
// echo $a.'<br>';
// function test(){
// 	// global $a,$b;
// 	$b=2;
// 	print_r($GLOBALS);
// 	echo "<br>";
// 	echo $GLOBALS['a'].','.$b;
// }
// test();


// 递归函数
function test(){
	static $count=0;//这里的count是静态变量
	$count++;
	echo $count.'';
	if($count<10){
		test();
	}
}
 test();








?>