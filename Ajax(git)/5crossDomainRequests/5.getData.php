<?php

$t = isset($_GET['t']) ? $_GET['t'] :'num';
$callback = isset($_GET['callback']) ? $_GET['callback'] :'fn1';
 
$arr1 = array('111111','222222','33333','444444','5555555','666666','77777777');
$arr2 = array('aaaaa','bbbbbbbb','cccccccccc','dddddddd','eeeeeeeeee','fffffffffffff','ggggggggggggggg');

if($t == 'num'){
	$data = json_encode($arr1);
}else{
	$data = json_encode($arr2);
}
echo $callback.'('.$data.')';