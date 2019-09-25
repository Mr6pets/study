<?php
    //获取界面传递进来的data数据 key
    $name=$_POST['uname'];
    $psd=$_POST['upsd'];
    //连接数据库
    $con=mysqli_connect('localhost','root','','1902');
    if($con){
        mysqli_query($con,'set names utf8');
        //sql语句
        //拿着账号用户名去做查询 查看数据库里面是不是存在 如果存在不能注册
        //如果不存在 就把数据添加到数据库中
        $sql="select * from userinfo where name='$name'";
        $result=mysqli_query($con,$sql);
        //$result ->num_rows>0查到数据
        if($result->num_rows>0){
            //查到数据了 数据里面存了账号
            echo 2;//2 失败 不能注册
        }else{
            //没有车查到数据 注册 添加信息
            $sql="insert into userinfo (name,password) values('$name','$psd')";
            $result=mysqli_query($con,$sql);//执行这个插入
            echo 1;//成功

        }
    }else{
        echo '数据库连接失败';
    }
    
    mysqli_close($con);
?>