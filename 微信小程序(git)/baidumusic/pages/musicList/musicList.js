// pages/musicList/musicList.js
//引入文件请求封装好的函数
var http = require('../../utils/http.js');
var getMusic=require('../../utils/getMusic.js');
//引用全局app.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songinfo: [],
    pic_s: '',
    comment: '',
    musicId: '', //标识
    offsetNum: 0, //偏移量变量
    flag: false, //音乐图标的状态 默认暂停 false
    musicname: '', //当前播放的音乐的名字
    index: 0, //默认的下标是0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    //监听音乐自然播放完毕 
    app.globalData.BackgroundAudioManager.onEnded(function() {
      //音乐播放完毕播放下一首
      app.globalData.index++;
      //播放 这里的index不是无休止的++ 要判断当前的列表里歌曲length是不是最后一首歌
      if (app.globalData.musiclist.length > app.globalData.index) { //如果当前的歌曲length大于下标 就可以继续播放
        //同样调用接口
        //-------
        getMusic(app.globalData.musiclist[app.globalData.index].song_id,function(res){
          console.log(res);//{flag:'',musicname:''}
          that.setData({
            flag:res.flag,
            musicname:res.musicname,
          })
        })
        // wx.request({
        //   url: 'http://iwenwiki.com/api/music/play.php?mid=' + app.globalData.musiclist[app.globalData.index].song_id,
        //   success: function(res) {
        //     console.log(res.data);
        //     //找到音乐地址
        //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
        //     app.globalData.BackgroundAudioManager.title = res.data.songinfo.title;
        //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
        //     // 歌曲的名字存在全局中
        //     app.globalData.musicname = res.data.songinfo.title;
        //     //准备就绪点击播放
        //     app.globalData.BackgroundAudioManager.onCanplay(function() {
        //       //播放后的配置 播放按钮 暂停
        //       app.globalData.BackgroundAudioManager.play();
        //       that.setData({
        //         flag: true,
        //         musicname: res.data.songinfo.title
        //       })

        //     })
        //   }
        // });
      } else {
        //停止播放
        app.globalData.BackgroundAudioManager.pause();
        this.setData({
          flag: false,
          musicname: '',
        });
        app.globalData.flag = false;
        app.globalData.musicname='';

      }

    });
    //如果之前的歌曲在播放 那么到另外一个榜单头部的信息和播放图标还是在继续显示
    // 进入页面判断是不是音乐还在播放
    if (app.globalData.BackgroundAudioManager.paused || app.globalData.BackgroundAudioManager.paused == undefined) { //是否是暂停的  ==undefined 是初始进来app.globalData.BackgroundAudioManager.paused是没有值的 所以一开始flag是显示的false；
      //true 代表现在是暂停的
      this.setData({
        flag: false,
        musicname: app.globalData.musicname,
      })
    } else {
      this.setData({
        flag: true,
        musicname: app.globalData.musicname,
      })
    }

    var that = this;
    this.setData({
      musicId: options.musicId
    })
    // console.log(options.musicId);//22
    //请求传递古来的musicId标识的数据
    http(options.musicId, 15, 0, function(res) {
      console.log(res);
      that.setData({
        songinfo: res.songinfo,
        pic_s: res.pic_s,
        comment: res.comment
      });
    });
  },
  // 点击音乐播放
  musicPlay: function(event) {
    var that = this;
    // console.log(event);
    // console.log(event.currentTarget.dataset.songid);
    //调用小程序 背景播放api
    // var BackgroundAudioManager = wx.getBackgroundAudioManager();
    getMusic(event.currentTarget.dataset.songid, function (res) {
      console.log(res);
      that.setData({
        flag: res.flag,
        musicname: res.musicname,
      })
    })
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/play.php?mid=' + event.currentTarget.dataset.songid,
    //   success: function(res) {
    //     console.log(res.data);
    //     //找到音乐地址
    //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
    //     app.globalData.BackgroundAudioManager.title = res.data.songinfo.title;
    //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
    //     // 歌曲的名字存在全局中
    //     app.globalData.musicname = res.data.songinfo.title;
    //     //准备就绪点击播放
    //     app.globalData.BackgroundAudioManager.onCanplay(function() {
    //       //播放后的配置 播放按钮 暂停
    //       app.globalData.BackgroundAudioManager.play();
    //       that.setData({
    //         flag: true,
    //         musicname: res.data.songinfo.title
    //       })

    //     })
    //   }
    // })
  },
  //头部点击控制音乐的播放
  controlmusic: function() {
    // 如果是播放的 那就暂停 如果是暂停就是播放、
    if (app.globalData.BackgroundAudioManager.paused) {
      //true 这里的状态是 是否暂停播放
      console.log('现在是暂停状态');
      // 音乐播放
      app.globalData.BackgroundAudioManager.play();
      this.setData({
        flag: true
      })

    } else {
      console.log('现在是播放状态');
      // 音乐暂停
      app.globalData.BackgroundAudioManager.pause();
      this.setData({
        flag: false
      })
    }
  },
  //全部播放
  playAll: function() {
    var that = this;
    console.log("点击全部播放")
    //获取当前播放的列表 存储到全局变量上
    app.globalData.musiclist = this.data.songinfo; //[{},{}...]
    //获取下标
    app.globalData.index = this.data.index;
    //开始播放 默认从第一个播放
    getMusic(app.globalData.musiclist[app.globalData.index].song_id, function (res) {
      console.log(res);
      that.setData({
        flag: res.flag,
        musicname: res.musicname,
      })
    })
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/play.php?mid=' + app.globalData.musiclist[app.globalData.index].song_id,
    //   success: function(res) {
    //     console.log(res.data);
    //     //找到音乐地址
    //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
    //     app.globalData.BackgroundAudioManager.title = res.data.songinfo.title;
    //     app.globalData.BackgroundAudioManager.src = res.data.bitrate.file_link;
    //     // 歌曲的名字存在全局中
    //     app.globalData.musicname = res.data.songinfo.title;
    //     //准备就绪点击播放
    //     app.globalData.BackgroundAudioManager.onCanplay(function() {
    //       //播放后的配置 播放按钮 暂停
    //       app.globalData.BackgroundAudioManager.play();
    //       that.setData({
    //         flag: true,
    //         musicname: res.data.songinfo.title
    //       })

    //     })
    //   }
    // });


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    var that = this;
    console.log("下拉执行");
    //1.清空数据
    this.setData({
      songinfo: []
    })
    //2.请求新的数据 请求的数据你要先确认是请求的是哪个 请求的id是onload中局部变量 所以讲onload中options.musicId的这个标识放置到data中
    http(this.data.musicId, 15, 0, function(res) {
      that.setData({
        songinfo: res.songinfo,
        offsetNum: 0, //这里是上拉过后 下次触底加载另外15条的偏移量重置
      })
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("触底触发");
    var that = this;
    //count=15 offset=0
    //请求数据
    //拼接 老数据+新的数据(偏移量是15 30 。。)
    this.data.offsetNum++;
    http(this.data.musicId, 15, this.data.offsetNum * 15, function(res) {
      // app.globalData.musiclist = that.data.songinfo.concat(res.songinfo);
      that.setData({
        songinfo: that.data.songinfo.concat(res.songinfo),
      })
    });


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})