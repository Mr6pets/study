<template>
  <div class="wrap">
    <div class="list">
      <h2><span></span>我的好友</h2>
      <ul>
        <li>小佳Love</li>
        <li>从来就是这么正经</li>
        <li>leo是个胖子</li>
        <li>momo不是陌陌</li>
      </ul>
      <h2><span></span>企业好友</h2>
      <ul>
        <li>习近平</li>
        <li>普京</li>
        <li>奥巴马</li>
      </ul>
      <h2><span></span>黑名单</h2>
      <ul>
        <li>安倍</li>
        <li>杜特尔特</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>

.wrap {
	width: 384px;
	height: 707px;
	/*background: url(./imgs/bg1.png) no-repeat center center;*/
	margin: 0 auto;
	position: relative;
}

.list {
	width: 280px;
	position: absolute;
	left: 46px;
	top: 64px;
}
.list h2 {
	height: 48px;
	font: 14px/48px arial;
	color: #fff;
	background: rgba(0,0,0,.8);
	box-sizing: border-box;
	padding-left: 10px;
	margin-top: 10px;
}
.list h2:nth-of-type(1){
	margin: 0;
}
.list h2.active {
	background: rgba(221,84,111,.8)
}
.list span {
	width: 0;
	height: 0;
	display: inline-block;
	border: 6px dashed rgba(0,0,0,0);
	border-left: 6px solid rgba(255,255,255,1);
	margin-right: 10px;
	position: relative;
	top: 1px;
}
.list span.active {
	width: 0;
	height: 0;
	display: inline-block;
	border: 6px dashed rgba(0,0,0,0);
	border-top: 6px solid rgba(255,255,255,1);
	position: relative;
	top: 4px;
}
.list ul {
	background: #000000;
	color: #fff;
	display: none;
}
.list li {
	height: 40px;
	font: 14px/40px "微软雅黑";
	box-sizing: border-box;
	padding-left: 34px;
}
.list li.active {
	background: rgba(255,255,255,.4);
}

.list li.selected {
	background: rgba(221,84,111,.6);
}
</style>


