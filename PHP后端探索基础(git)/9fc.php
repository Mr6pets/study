<?php 
	
// $status=1;
// if($status==0){
// 	echo "请先登录";
// }else if($status==1){
// 	echo '您已被管理员禁言';
// }else{
// 	echo '啦啦，欢迎欢迎';
// }

$status=1;
switch($status){
	case 0:
		echo '请先登录';
		break;
	case 1:
		echo '您已被管理员禁言';
		break;
	default:
		echo '啦啦，欢迎欢迎';
		
}



// for($i=0;$i<11;$i++){
// 	echo $i.'<br>';
// }


// $i=0;
// while ($i<11) {
// 	echo $i.'<br>';
// 	$i++;
// }

// $i=0;
// do{
// 	echo $i.'<br>';
// 	$i++;
// }while($i<11);



// for($i=0;$i<11;$i++){
// 	if($i==3){
// 		echo '不输出3';
// 		continue;
// 	}
// 	if($i>6){
// 		break;
// 	}
// 	echo $i.'<br>';
// }
// exit;

// $i=0;
// while ($i<11) {
// 	echo $i.'<br>';
// 	$i++;
// }

// $i=0;
// do{
// 	echo $i.'<br>';
// 	$i++;
// }while($i<11);










	

 ?>