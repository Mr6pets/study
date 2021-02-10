<?php
//获取界面 传递进来的data数据 key
$name-$_POST['uname'];
$psd-$_POST['upsd'];

//连接数据库 --查询--
$con=mysqli_connect('locallhost','root','','1902');
if($con){

    //设置编码格式
    mysqli_query($con,'set names utf8');

    //sqi语句 查询语句 拿着账号和密码去数据查询
    $sql="select * from userinfo where name='$name' and password='$psd'";

    //发送SQL语句
    $result=mysqli_query($con,$sql);
    //$result结果是一个集合 num_rows 查询数据 包含出的行数 没有就是0
    if($result->num_rows>0){
        echo '1'; //查到数据满足账号密码 条件 --成功
    }else{
        echo '2'; //失败
    }

}else{
    echo '数据连接失败';
}

//关闭数据连接
mysqli_close($con);

?>