<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news=array(
	array('title'=>'习近平主持中非领导人会晤','data'=>'2019-1-1'),
	array('title'=>'G20峰会前一天，习近平这两场会见释放丰富信息','data'=>'2019-1-1'),
	array('title'=>'习近平的三封回信','data'=>'2019-1-1'),
	array('title'=>'经济日报:经济全球化是世界共同繁荣之路','data'=>'2019-1-1'),
	array('title'=>'市场需求回暖 企业效益改善 长期看好中国经济','data'=>'2019-1-1'),
	array('title'=>'第二次中央新疆工作座谈会召开5周年综述','data'=>'2019-1-1'),
	array('title'=>'将学习教育贯穿始终 在抢险一线践行初心使命','data'=>'2019-1-1'),
	array('title'=>'用一生报答我的乡亲”（人民满意的公务员）','data'=>'2019-1-1'),
	array('title'=>'5G最新进展!部署、手机、资费、应用,都在这里了','data'=>'2019-1-1'),
);

echo json_encode($news); 

     
    
    
    
   

