<?php

$username=$_POST['username'];
$content=$_POST['content'];

if($username==''|| $content==''){
	echo '用户名或者评论内容不能为空,<a href="12commontest.php">返回评论区</a>';
}else{
	$comment=array('username'=>$username,'content'=>$content);
	//同一个文件夹下存储下这个用户名和评论的的数据
	$filePath='12commentBook.txt';
	//读取文件file_get_contents('路径') 
	$commentList= unserialize(file_get_contents($filePath));
	if(is_array($commentList)){
		array_unshift($commentList, $comment)
	}else{
		$commentList=[$comment];
	}
	
}

?>