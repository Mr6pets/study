<?php
    //boolean
    $bool=true;
    //查看类型：gettype()获取类型 var_dump()查看内容;
    var_dump($bool);//bool
    echo gettype($bool);//boolean
    //强制类型转换
    $n=(bool)0;
    var_dump($n);//boolean false
    echo '<hr>';

    //integer整数
    $num=12;
    $num=-12;
    var_dump($num);//int(12);
    //(int)数据；
    echo '<hr>';

    //3.float
    $numb=12.3;
    var_dump($numb);//float 12.3
    echo '<hr>';

    //4.字符串
    $str='hello';//js 下“” ‘’ 没有区别
    echo $str;//hello
    echo '<br>';
    echo "$str";//hello
    echo '<br>';
    echo '$str';//$str
    //“”解析内容 输出 ；‘’直接输出 当做字符串
    echo '<hr>';

    //字符串拼接
    $str2='你好啊';
    echo $str.$str2;//点 拼接
    echo $str.'==============='.$str2;//点 拼接
    echo '<hr>';
    //+ 拼接 .点 拼接
    

?>