//分页思路
// 1.插入的分页 获取总的页数page 选中的当前的页数current
// insertHtml(6,1);
function insertHtml(page,current){
    var pagination=$(".ts-page").html('');
    //1.显示首页 上一页的时候思路:current大于1的时候 说明可以点击上一页和首页
    if(current>1){
        pagination.append('<span class="tspage-start">首页</span>');
        pagination.append('<span class="tspage-before">上一页</span>');
    }else{//小于1的时候首页消失 并且上一页无法点击
        pagination.remove('.tspage-start');
        pagination.append('<span class="tspage-before disable">上一页</span>');
    }
    //2. 显示... 首页 上一页 ... 2 3 【4】 5 6
    if(current>3 && current<=page){//如果大于3 当前页小于总数 追加...
        pagination.append('<span class="tspage-ell">...</span>');
    }
    //3.开始添加页码 首页 上一页 ... 2 3 【4】 5 6 ...
    //current选中的页面左右2条数据显示如上显示 current-2 current-1 current current+1 current+2
    //情况1：如果选中是3那么 显示的： 首页 上一页 1 2 【3】 4 5  这里没有问题
    var start=current-2;
    var end=current+2;
    //情况2：如果选中是2那么 显示的： 首页 上一页 1 【2】 3 4 5 
    if(current==2 || current==1){
        start=1;
        //总的条数大于5 这种情况下就是5 如果总的条数小于5
        end=page>5?5:page;
    }
    //当有6条数据的时候 选中5的时候 ...是没有的
    // 显示的： 首页 上一页 ... 2 3 4 【5】 6
    if(current==page-1){//
        end=page;
        start=current-3;
    }
    if(current==page){
        end=page;
        start=current-4; 
    }
    //循环显示数据
    for(;start<=end;start++){//start的开始页码是无法确定的  这里做循环 如果是2<6执行 3<6执行 4<6执行 5<6执行 6<6不执行
        if(start>=1 && end<=page){
            if(start==current){//如果循环到 4==4的时候添加带有on类名的页码数
                pagination.append('<span class="page on">'+start+'</span>');
            }else{
                pagination.append('<span class="page">'+start+'</span>');
            }
        }
    }
    //4.如果页码很多 要添加后面的点点点 分页数据大于5条的时候 就要添加...
    if(page>5 && current<page-2){
        pagination.append('<span class="tspage-ell">...</span>');
    }
    //5....下一页 尾页
    if(current<page){
        pagination.append('<span class="tspage-after">下一页</span>');
        pagination.append('<span class="tspage-end">尾页</span>');
    }else{
        pagination.remove('tspage-end');
        pagination.append('<span class="tspage-after disable">下一页</span>');
    }

}
// bindEvent(6);
//绑定事件
function bindEvent(page){ 
    var pagination=$(".ts-page");
    //pagination下的子元素绑定事件
    pagination.on('click',function(event){
        // console.log(event.target);
        var target=$(event.target);//js写法转化为jQuery
        // console.log(target);

        // 页面绑定事件
        if(target.hasClass('page')){
            var current=parseInt(target.text());
            insertHtml(page,current);
            getData(current);
        };
        //上一页绑定事件 tspage-before
        if(target.hasClass('tspage-before')){
            var current=parseInt(target.siblings('.on').text());
            if(current>1){
                insertHtml(page,current-1);
                getData(current-1);
            }
        };
        //首页的点击事件  tspage-start
        if(target.hasClass('tspage-start')){
            insertHtml(page,1);
            getData(1);
        };
        //下一页绑定事件  tspage-after
        if(target.hasClass('tspage-after')){
            var current=parseInt(target.siblings('.on').text());
            if(current<page){
                insertHtml(page,current+1);
                getData(current+1);
            }
        };
        //尾页的点击事件 tspage-end
        if(target.hasClass('tspage-end')){
            insertHtml(page,page);
            getData(page);
        };
    });



    /*
    //页面绑定事件
    pagination.on('click','.page',function(){
        // console.log($(this).text());
        var current=parseInt($(this).text());
        insertHtml(page,current);
        getData(current);
    });
    //上一页绑定事件
    pagination.on('click','.tspage-before',function(){
        var current=parseInt($(this).siblings('.on').text());
        if(current>1){
            insertHtml(page,current-1);
            getData(current-1);
        }
    });
    //首页的点击事件
    pagination.on('click','.tspage-start',function(){
        insertHtml(page,1);
        getData(1);
    });
    //下一页绑定事件
    pagination.on('click','.tspage-after',function(){
        var current=parseInt($(this).siblings('.on').text());
        if(current<page){
            insertHtml(page,current+1);
            getData(current+1);
        }
        
    });
    //尾页的点击事件
    pagination.on('click','.tspage-end',function(){
        insertHtml(page,page);
        getData(page);
    });
    */
}
// 首页数据maxPage
$.get('http://iwenwiki.com/api/blueberrypai/getBlueBerryJamInfo.php?blueBerryjam_id='+1,function(data){
    console.log(data);
    console.log(data.maxPage);
    insertHtml(data.maxPage,1);
    bindEvent(data.maxPage);
},'json');
getData(1);
function getData(current){
    $.ajax({
        type:"get",
        url:"http://iwenwiki.com/api/blueberrypai/getBlueBerryJamInfo.php", 
        data:{
            blueBerryjam_id:current
        },
        dataType:'json',
        success:function(data){
            ///-----------改变图片的路径-------------------------------------------
            var url=JSON.stringify(data).replace(/iwen.wiki\/sxtstu/ig,'iwenwiki.com/api');
            data=JSON.parse(url);
            //------------------------------------------------------
            console.log(data);
            var pageList=data.blueBerryJam;
            var str='';
            for(var i=0;i<pageList.length;i++){
                str+='<div class="info">'+
                '<img src="'+pageList[i].img+'" alt="">'+
                '<p>'+pageList[i].title+'</p>'+
            '</div>'
            }
            $('.container').html(str);
        }
    })
};
// corrent
// http://iwenwiki.com/api/blueberrypai/image/lanmeijiang/1.jpg

// http://iwen.wiki/sxtstu/blueberrypai/image/lanmeijiang/1.jpg












