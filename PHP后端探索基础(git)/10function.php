<?php

// function calculator($num1,$num2,$op){
// 	if(!is_numeric($num1)||!is_numeric($num2)){
// 		echo "数值不符合要求";
// 	}else{
// 		switch ($op) {
// 			case '+':
// 				echo $num1+$num2.'<br>';
// 				break;
// 			case '-':
// 				echo $num1-$num2.'<br>';
// 				break;
// 			case '*':
// 				echo $num1*$num2.'<br>';
// 				break;
// 			case '/':
// 				if($num2==0){
// 					echo "被除数不能为0";
// 					break;
// 				}
// 				echo $num1/$num2.'<br>';
// 				break;	
// 			default:
// 				echo $num1+$num2.'<br>';
// 				break;
// 		}
		
// 	}
// }
// calculator(3,3,'+');
// calculator(3,3,'-');
// calculator(3,3,'*');
// calculator(3,3,'/');




function calculator($num1,$num2,$op){
	if(!is_numeric($num1)||!is_numeric($num2)){
		return ['code'=>1,'msg'=>'数值不符合要求'];
	}else{
		switch ($op) {
			case '+':
				return ['code'=>0,'result'=>$num1+$num2];
			case '-':
				return ['code'=>0,'result'=>$num1-$num2];
			case '*':
				return ['code'=>0,'result'=>$num1*$num2];
			case '/':
				if($num2==0){
					return ['code'=>1,'msg'=>'被除数不能为0'];
				}
				return ['code'=>0,'result'=>$num1/$num2];
			default:
				return ['code'=>1,'msg'=>'位未知运算'];
		}
		
	}
}


$result=calculator(3,3,'*');
if($result['code']!=0){
	echo $result['msg'];
}else{
	echo $result['result'];
}

?>



















