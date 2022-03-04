<!-- 关于CSS的一些样式 -->
~~~js
// 万能清除浮动
.float_div:after{
  content:'.';
  clear:both;
  display:block;
  height:0;
  overflow:hidden;
  visibility:hidden;
}
.float_div{
  zoom:1
}

// 用纯CSS创建一个三角形的原理是什么？
span {
width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
}


~~~





















































