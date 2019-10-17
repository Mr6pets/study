<?php
 
 #连接数据库
 $conn=mysqli_connect("localhost","root",'',"ajaxtest");

 if(isset($_POST['name'])){
 	//echo "POST:你的名字是".$_POST['name'];

 	// 将拿到的数据转化下
 	$name=mysqli_real_escape_string($conn,$_POST['name']);
 	#SQL语句 增加信息 用户名 密码
 	#$sql="insert into 表名（name,psd）values('','')";
 	$query="INSERT INTO users(name) VALUES('$name')";

 	if(mysqli_query($conn,$query)){
 		echo '用户添加成功！';
 	}else{
 		echo '用户添加失败！'.mysqli_error($conn);
 	}
 }
 	
 
?>