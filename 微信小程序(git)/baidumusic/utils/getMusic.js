//引入全局app
var app=getApp();
function getMusic(codeId,fn){
  wx.request({
    url: 'http://iwenwiki.com/api/music/play.php?mid=' + codeId,
    success: function (res) {
      console.log(res.data);
      //找到音乐地址
      app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
      app.globalData.BackgroundAudioManager.title = res.data.songinfo.title;
      app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
      // 歌曲的名字存在全局中
      app.globalData.musicname = res.data.songinfo.title;
      //准备就绪点击播放
      app.globalData.BackgroundAudioManager.onCanplay(function () {
        //播放后的配置 播放按钮 暂停
        app.globalData.BackgroundAudioManager.play();
        // that.setData({
        //   flag: true,
        //   musicname: res.data.songinfo.title
        // })
        fn({
          flag: true,
          musicname: res.data.songinfo.title
        })
      })
    }
  });
}
//暴露接口
module.exports=getMusic;