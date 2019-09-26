/*
1.点击播放按钮 图标切换 播放或者暂停
2.判断当前的音频是不是暂停的
3.音乐开始播放的时候 获取当前播放的时间 和总的时长
4.进度条

*/
var audio=document.getElementById('audio');
//一进来就显示总时间，这里是取不到数据的；
// $('.duration').html(formtTime(audio.duration));
// 解决办法：
audio.oncanplay=function(){
    $('.duration').html(formtTime(audio.duration));
}
$('.circle').click(function(){
    //判断当前音频是播放还是暂停  paused如果是暂停的就返回true 如果是播放的就是返回 false
    if(audio.paused){//true 代表暂停的
        audio.play();
        //改动图片
        $('.circle img').attr('src','./img/pause.png');
    }else{
        //当前是播放的 点击后暂停 pause();
        audio.pause();
        //改动图片
        $('.circle img').attr('src','./img/start.png');
    };
});
//音频开始播放的时候 开始获取当前时间和总时间 ontimeupdate();
audio.ontimeupdate=function(){
    // console.log(audio.currentTime);
    // console.log(audio.duration);
    $('.current').html(formtTime(audio.currentTime));
    $('.duration').html(formtTime(audio.duration));
    // $('.duration').html(formtTime(audio.duration-audio.currentTime));//总时长地方显示剩余时间
    // 进度条 当前的时间/总时间的百分比  就是播放时长和总时长的百分比
    var progressLength=(audio.currentTime/audio.duration)*100+'%';//1/5=0.2 0.2*100=20+%;
    $('.innerProgress').width(progressLength);
    //如果播放完了 改变图标为开始按钮 
    //audio.currentTime==audio.duration不一定相等  因为audio.currentTime或者audio.duration整数二进制可能相等 但是小数就可能不一样了
    //解决办法：向下取整Math.floor() 
    if(Math.floor(audio.currentTime)==Math.floor(audio.duration)){
        $('.circle img').attr('src','./img/start.png');  
    }
};
//用来处理时间的格式
function formtTime(time){
    var m=parseInt(time/60);//分钟
    var s=parseInt(time%60);//秒
    m=m>=10?m:'0'+m;
    s=s>=10?s:'0'+s;//补0 两位
    return m+':'+s;
}

//ajax数据

$.ajax({
    type:'get',
    url:'http://iwenwiki.com/api/blueberrypai/getSongInfo.php',
    data:{
        song:'mo'
    },
    success:function(res){
        // console.log(res.msg);
        var songInfo=res.songInfo;
        $('.title').html(songInfo.song_title);
        $('.musicRight span').html(songInfo.play_num);
        $('.musicContent_txt').html(songInfo.song_intro_cont);
        //图片的路径需要拼接下 真确的地址是http://http://iwenwiki.com/api/blueberrypai/indexImg/naying.png
        $('.musicContent_pic img').attr('src','http://iwenwiki.com/api/blueberrypai/'+songInfo.song_pic);
        //音乐的地址 也是错误的 正确的地址是  http://iwenwiki.com/api/blueberrypai/那英-默.mp3
        //res.song_source:http://wwtliu.com/sxtstu/blueberrypai/那英-默.mp3\
        //写死的办法
        $('#audio').attr('src','http://iwenwiki.com/api/blueberrypai/那英-默.mp3');
        //来自定制字符串的方法(有问题待检查)
        // var url=JSON.stringify(res).replace(/wwtliu.com\/sxtstu/ig,'iwenwiki.com/api');
        // // console.log(url);
        // data=JSON.parse(url);
    },
    error:function(err){
        console.log(err.msg);
    }
})

// 文章数据获取
















