window.onload=function(){

	var oUser=document.getElementById('user');
	var oReg=document.getElementById('reg');
	var oLogin=document.getElementById('login');
	var oUserInfo=document.getElementById('userinfo');
	var oList=document.getElementById('list')
	var oUsername1=document.getElementById('username1');
	var oVerifyUserNameMsg=document.getElementById('verifyUserNameMsg');

	var iPage=1;
	var oShowMore=document.getElementById('showMore');
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
	/*初始化留言列表
		get
		guestbook/index.php
		m:index
		a:getList
		page:获取的留言页码 默认为1
		n:当前每页显示的条数 默认为10
	
		返回
		{
			code：返回的信息代码 0=没有错误 1=有错误
			data:返回成功的留言详细的信息
			{
				cid: 8//留言id
				content: "jiushi"//留言内容
				dateline: 1565332240//留言的时间戳（毫秒）
				oppose: 0//当前留言的踩的数量
				support: 0//当前留言顶的数量
				uid: "1"//留言人的id
				username: "liuan"//留言人的名称
			}
			message：返回的信息具体返回信息
		}
	*/
	//留言页面进来发送一个ajax中去一个
	showList();

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
		data:返回成功的留言详细的信息
		{
			cid: 8//留言id
			content: "jiushi"//留言内容
			dateline: 1565332240//留言的时间戳（毫秒）
			oppose: 0//当前留言的踩的数量
			support: 0//当前留言顶的数量
			uid: "1"//留言人的id
			username: "liuan"//留言人的名称
		}
		message：返回的信息具体返回信息
	}
	*/
	var oContent=document.getElementById('content');
	var oBtnPost=document.getElementById('btnPost');
	oBtnPost.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=send&content='+encodeURI(oContent.value),function(data){
			var d=JSON.parse(data);
			// alert(d.code);
			alert(d.message);
			if(!d.code){
				//使用dom的方法创建添加留言板块oList
				createList(d.data,true)
			}
		});
	}

	function createList(data,insert){
		var oDl=document.createElement('dl');

		var oDt=document.createElement('dt');
		var oStrong=document.createElement('strong');
		oStrong.innerHTML=data.username;
		oDt.appendChild(oStrong);

		var oDd1=document.createElement('dd');
		oDd1.innerHTML=data.content;

		var oDd2=document.createElement('dd');
		oDd2.className= 't';
		var oA1=document.createElement('a');
		oA1.href='';
		oA1.innerHTML='顶(<span>'+data.support+'</span>)';
		var oA2=document.createElement('a');
		oA2.href='';
		oA2.innerHTML='踩(<span>'+data.oppose+'</span>)';
		oDd2.appendChild(oA1);
		oDd2.appendChild(oA2);

		oDl.appendChild(oDt);
		oDl.appendChild(oDd1);
		oDl.appendChild(oDd2);

		if(insert && oList.children[0]){
			oList.insertBefore(oDl, oList.children[0]);	
		}else{
			oList.appendChild(oDl);
		}
	}

	//显示更多的内容
	oShowMore.onclick=function(){
		iPage++;
		showList();
	}

	function showList(){
		ajax('post','guestbook/index.php','m=index&a=getList&n=2&page='+iPage,function(data){
			var d=JSON.parse(data);
			console.log(d);
			var data=d.data
			if(data){// 如果是初始化进来没有数据
				for(var i=0;i<data.list.length;i++){
					createList(data.list[i]);
				}
			}else{
				if (iPage==1) {
					oList.innerHTML="现在还没有评论，快来抢沙发！";
				}
				oShowMore.style.display = 'none';
			}
						 
		});
	}

};	

//获取浏览器的cookie
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




