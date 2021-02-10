<?php
	/**
	*多维数组
	*/
// $newsList=array('05-17','news1','chenqing');
// print_r($newsList);
// echo $newsList[0];//05-17
// echo '<br>';
// $newsList2=array(
// 	'time'=>'05-17',
// 	'title'=>'news1',
// 	'link'=>'chenqing',
// );
// echo $newsList2['time'];

$newsList3=array(
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	)
);
$newsList3[]=array(
	'time'=>'05-17',
	'title'=>'news1',
	'link'=>'chenqing',
);
$newsList3[0]['isnew']='yes';//添加key值为第一个数组中添加一个key值为isnew value值为yes的键值对

$newsList3[1]=array(
	'time'=>'05-177777',
	'title'=>'news111111111',
	'link'=>'chenqinggggggggggggg',
);
unset($newsList3[3]);//删除
unset($newsList3[0]['isnew']);//删除指定元素

print_r($newsList3[0]);
print_r($newsList3[0]['title']);
print_r($newsList3);

////////
// 遍历 //
////////

$newsList4=array(
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	),
	array(
		'time'=>'05-17',
		'title'=>'news1',
		'link'=>'chenqing',
	)
);
foreach ($newsList4 as $value) {
	// echo $value['time'].$value['title'].$value['link'];
	// echo '<br>';
	
	foreach($value as $v){
		echo $v;
	}
	echo '<br>';
}

foreach ($newsList4 as $key => $value) {
	echo '这是第：'.($key+1).'条数据';
	echo $value['time'].$value['title'].$value['link'].'<br>';
}
