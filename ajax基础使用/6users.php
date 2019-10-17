<?php

$conn=mysqli_connect("localhost","root",'',"ajaxtest");
#查询 这个表里面 所有的名字=123 和密码=66的信息
#$sql='select * from 表名 where name='123' and password='66';
$query='SELECT * FROM users';
#执行SQL
$result=mysqli_query($conn,$query);
#查询的结果 $rusult 结果集
$users=mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($users);


?>