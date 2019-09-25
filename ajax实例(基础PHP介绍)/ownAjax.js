function ownAjax(paramJson){
    //get:url=8ownGet.php?uname=name&upsd=psd
    //1.判断一个请求类型 是get 还是post方式
    if(paramJson.type.toLowerCase()=='get'){
        // console.log(paramJson.data);//{uname: "11", upsd: "11"}
        //如果是get请求方式 那个最终要转化为url=8ownGet.php?uname=name&upsd=psd的形式
        //处理data数据 json->数组
        var arr=[];
        for(var key in paramJson.data){
            var str=key+'='+paramJson.data[key];//str='uname=11';
            arr.push(str);
        }
        // console.log(arr);//["uname=33", "upsd=44"]
        //数组转化为字符串
        var strUrl=arr.join('&');
        // console.log(strUrl);//uname=33&upsd=44
        paramJson.url+='?'+strUrl;
        // console.log(paramJson.url);//8ownGet.php?uname=33&upsd=44
    }else if(paramJson.type.toLowerCase()=='post'){
        //如果是post请求 就把数据存放到formdata中
        var formdata=new FormData();
        for(var key in paramJson.data){
            formdata.append(key,paramJson.data[key]);
        }
    }
    //创建XMLHttpRequest();
    var xhr=new XMLHttpRequest();
    //准备 get post
    if(paramJson.type.toLowerCase()=='get'){
        xhr.open('get',paramJson.url,true);
        xhr.send();
    }else if(paramJson.type.toLowerCase()=='post'){
        xhr.open('post',paramJson.urlm,true);
        xhr.send(formdata);
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            paramJson.success(xhr.responseText);
            // console.log(xhr.responseText);
        }
    }

}