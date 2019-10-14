//app.js
App({
  onLaunch: function () {
    //使用小程序 背景音频播放
    var BackgroundAudioManager=wx.getBackgroundAudioManager();
    //this.setData({})是语法错误
    this.globalData.BackgroundAudioManager = BackgroundAudioManager;

  },
  globalData: {
    BackgroundAudioManager: '',
    musicname:'',//歌曲的名字全局存储
    musiclist:[],//全部的音乐列表
    index:0,//当前播放的下标
  }
})