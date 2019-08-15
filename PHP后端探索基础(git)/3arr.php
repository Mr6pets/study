<?php
	/*
	 * 一维数组
	 */
	$newsList=array('new1','new2','new3','new4');
	foreach ($newsList as $value) {
		echo '<br>'.$value;
	}
	foreach ($newsList as $news) {
		echo '<br>'.$news;
	}
	foreach ($newsList as $key => $value) {
		echo '<br>'.$key.'=>'.$value;
	}
	
	
?>