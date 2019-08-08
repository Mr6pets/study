window.onload=function(){

	var oUser=document.getElementById('user');
	var oReg=document.getElementById('reg');
	var oLogin=document.getElementById('login');
	var oUserInfo=document.getElementById('userinfo');
	
	var oUsername1=document.getElementById('username1');
	var oVerifyUserNameMsg=document.getElementById('verifyUserNameMsg');
	// 网站载入的时候做一次初始化的处理
	updateUserStatus()
	function updateUserStatus(){
		var uid=getCookie('uid');//["uid", "8"]
		var username=getCookie('username');
		if(uid){
			//如果是登录状态
			oUser.style.display='block';
			oUserInfo.innerHTML=username;
			oReg.style.display = 'none';
			oLogin.style.display = 'none';
		}else{
			oUser.style.display='none';
			oUserInfo.innerHTML='';
			oReg.style.display = 'block';
			oLogin.style.display = 'block';
		}
	}
	

	/*验证用户名
	get
	guestbook/index.php
	m:index
	a:verifyUserName
	username:要验证的用户名
	
	返回
	{
		code：返回的信息代码 0 =没有错误 1=有错误
		message：返回的信息具体返回信息
	}
	*/
	oUsername1.onblur=function(){
		ajax('get','guestbook/index.php','m=index&a=verifyUserName&username='+this.value,function(data){
			var d=JSON.parse(data);
			oVerifyUserNameMsg.innerHTML=d.message;
			if(d.code){
				oVerifyUserNameMsg.style.color='red';
			}else{
				oVerifyUserNameMsg.style.color='green';
			}
		})
	}

	/*用户注册
	get/post
	guestbook/index.php
	m:index
	a:reg
	username:要注册的用户名
	password:密码
	
	返回
	{
		code：返回的信息代码 0=没有错误 1=有错误
		message：返回的信息具体返回信息
	}
	*/
	var oPassword1=document.getElementById('password1');
	var oRegBtn=document.getElementById('btnReg');
	oRegBtn.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=reg&username='+encodeURI(oUsername1.value)+'&password='+oPassword1.value,function(data){
			var d=JSON.parse(data);
			alert(d.message);
		});
	}

	/*用户登录
	get/post
	guestbook/index.php
	m:index
	a:login
	username:要登录的用户名
	password:要登录的密码
	
	返回
	{
		code：返回的信息代码 0=没有错误 1=有错误
		message：返回的信息具体返回信息
	}
	*/
	var oUsername2=document.getElementById('username2');
	var oPassword2=document.getElementById('password2');
	var oLoginBtn=document.getElementById('btnLogin');
	oLoginBtn.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=login&username='+encodeURI(oUsername2.value)+'&password='+oPassword2.value,function(data){
			var d=JSON.parse(data);
			alert(d.message);
			if(!d.code){
				updateUserStatus();
			}
		});
	}

	/*用户退出
	get/post
	guestbook/index.php
	m:index
	a:logout
	
	返回
	{
		code：返回的信息代码 0=没有错误 1=有错误
		message：返回的信息具体返回信息
	}
	*/
	var oLogout=document.getElementById('logout');
	oLogout.onclick=function(){
		ajax('get','guestbook/index.php','m=index&a=logout',function(data){
			var d=JSON.parse(data);
			alert(d.message);
			if(!d.code){
				updateUserStatus();
			}
		});
		// 阻止a标签的跳转
		return false;
	}

	/*留言
	post
	guestbook/index.php
	m:index
	a:send
	content:留言内容
	
	返回
	{
		code：返回的信息代码 0=没有错误 1=有错误
		message：返回的信息具体返回信息
	}
	*/
	var oContent=document.getElementById('content');
	var oBtnPost=document.getElementById('btnPost');
	oBtnPost.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=send&content='+encodeURI(oContent.value),function(data){
			var d=JSON.parse(data);
			alert(d.code);
			// alert(d.message);
			
		});
	}

};	

function getCookie(key){
	var arr1=document.cookie.split('; ');
	// console.log(arr1)//["uid=8", "username=leo"]
	for(var i=0;i<arr1.length;i++){
		var arr2=arr1[i].split('=');
		// console.log(arr2);// ["uid", "8"]
		if(arr2[0]==key){
			return arr2[1];
		}
	}
};




