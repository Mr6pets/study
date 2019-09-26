function bannerSwiper(){
    new Swiper ('.bannerSwiper', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.bannerSwiper .swiper-pagination',
    },
    parallax : true,//开启视觉差
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        },
    })
}
  $.ajax({
      type:'get',
      url:'http://iwenwiki.com/api/blueberrypai/getIndexBanner.php',
      dataType:'json',
        success:bannerSuccess,
        error:function(){
            console.log('请求错误!')
        }
  });
  //轮播成功的回调函数
  function bannerSuccess(res){//http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg
    console.log(res);//接口取到的值转换为字符串
    // 对象转字符串
    var resStr=JSON.stringify(res);
    //查找字符串中www.wwtliu.com/sxtstu替换成 iwenwiki.com/api
    var resNew=resStr.replace(/www.wwtliu.com\/sxtstu/ig,'iwenwiki.com/api');
    console.log(resNew);
    res=JSON.parse(resNew);
    var bannerList=res.banner;
    var str='';
    for(var i=0;i<bannerList.length;i++){
        str+='<div class="swiper-slide">'+
           ' <img src="'+bannerList[i].img+'">'+
            '<div class="bannerContent" data-swiper-parallax="-1000" data-swiper-parallax-duration="1000">'+
                '<h3 class="title">'+bannerList[i].title+'</h3>'+
                '<div class="text">'+bannerList[i].content+'</div>'+
            '</div>'+
        '</div>'; 
    }
    //添加到页面
    $('.bannerSwiper .swiper-wrapper').html(str);
    //调用轮播
    bannerSwiper();
}
//因为下面的排版都是一样的轮播 所以封装轮播方法
function lunbo(lunboSwiper){
    new Swiper (lunboSwiper, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        }
    })
}
//2.乐章请求数据
lunbo('.yuezhangBanner');
$.get('http://iwenwiki.com/api/blueberrypai/getIndexMovement.php',function(res){
    // console.log(res);
    var resStr=JSON.stringify(res);
    var resNew=resStr.replace(/iwen.wiki\/sxtstu/ig,'iwenwiki.com/api');
    res=JSON.parse(resNew);
    var moveArr=res.movement;
    // console.log(moveArr);
    var n =-1;
    //思路：1.创建4个 swiper-silde 大容器 2每一个swiper-slide里面又有4条数据
    for(var i=0;i<4;i++){
        var swiper=$('<div class="swiper-slide"><ul></ul></div>');
        // console.log(swiper);
        //for循环4次 插入数据
        var str='';
        for(var j=0;j<4;j++){
            n++;
            str+='<li>'+
                    '<div class="img"><img src="'+moveArr[n].img+'"></div>'+
                    '<div class="info">'+
                        '<h3>'+moveArr[n].title+'</h3>'+
                        '<div class="detail">'+moveArr[n].content+'</div>'+
                    '</div>'+
                '</li>';
        }
        swiper.find('ul').html(str);
        // console.log(swiper);//
        //追加swiper-slide放在页面上
        $(".yuezhang .swiper-wrapper").append(swiper);
    }
},'json')




