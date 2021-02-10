<?php
 // echo "hello world";
 if(isset($_GET['name'])){
 	echo "GET:你的名字是".$_GET['name'];
 }else{
 	echo "hello world get";
 }
 if(isset($_POST['name'])){
 	echo "POST:你的名字是".$_POST['name'];
 }else{
 	echo "hello world post";
 }
 
?>