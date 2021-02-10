//index.js
//引入文件
var http=require('../../utils/http.js');
Page({
  data: {
    jindian:{},
    rege:{},
    xingge:{},
    yaogun:{},
    yinshi:{}
  },
  //跳转每个榜单的内容
  linkTo:function(event){
    console.log(event.currentTarget.dataset.type);
    var num = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../musicList/musicList?musicId=' + num,
    })
  },
  onLoad: function () {
    var that=this;
    // 封装请求
    //1.22-经典老歌 方法2 
    // http(22, 1, 0,that,"jindian");
    //封装的http方法fun回调把值传递回来 方法1 22-经典老歌
    http(22, 1, 0, function(res){
      that.setData({
        jindian:res
      })
    });
    //请求数据 2-热歌榜 方法2
    // http(2, 1, 0, that, "rege");
    //封装的http方法fun回调把值传递回来 方法1 2-热歌榜
    http(2, 1, 0, function (res) {
      that.setData({
        rege: res
      })
    });
    //请求数据 1-新歌榜 方法2
    // http(1, 3, 0, that, "xingge");
    //封装的http方法fun回调把值传递回来 方法1 1-新歌榜
    http(1, 3, 0, function (res) {
      that.setData({
        xingge: res
      })
    });
    //请求数据 11-摇滚 方法2
    // http(11, 3, 0, that, "yaogun");
    //封装的http方法fun回调把值传递回来 方法1 11-摇滚
    http(11, 3, 0, function (res) {
      that.setData({
        yaogun: res
      })
    });
    //请求数据 24-影视金曲 方法2
    // http(24, 3, 0, that, "yinshi");
    //封装的http方法fun回调把值传递回来 方法1 24-影视金曲
    http(24, 3, 0, function (res) {
      that.setData({
        yinshi: res
      })
    });

    // //1.经典老歌 方法1 这里就是将http.js文件中的封装的obj通过回调函数形参的方式拿回来
    // http(22,1,0,function(res){
    //   console.log(res);
    //   that.setData({
    //     jindian:res
    //   })
    // })

    //逐一请求接口
    // 请求数据 22-经典老歌
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/list.php?type=22&count=1&offset=0',
    //   method:'get',
    //   success:function(res){
    //     // console.log(res.data);
    //     //图片
    //     var obj={};
    //     obj.name = res.data.billboard.name;
    //     obj.pic_big=res.data.song_list[0].pic_big;
    //     //请求数据 赋值给jingdain
    //     that.setData({
    //       jindian: obj
    //     })
    //   }
    // })
    // //请求数据 2-热歌榜
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/list.php?type=2&count=1&offset=0',
    //   success: function (res) {
    //     // console.log(res.data);
    //     //图片
    //     var obj = {};
    //     obj.name = res.data.billboard.name;
    //     obj.pic_big = res.data.song_list[0].pic_big;
    //     //请求数据 赋值给rege
    //     that.setData({
    //       rege: obj
    //     })
    //   }
    // })
    // //请求数据 1-新歌榜
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/list.php?type=1&count=3&offset=0',
    //   success:function(res){
    //     // console.log(res.data);
    //     var obj = {};
    //     obj.name = res.data.billboard.name;
    //     obj.pic_big=[];
    //     for (var i = 0; i < res.data.song_list.length;i++){
    //       obj.pic_big.push(res.data.song_list[i].pic_big)
    //     }
    //     //请求数据 赋值给xingge
    //     that.setData({
    //       xingge: obj
    //     })
    //   }
    // });
    // //请求数据 11-摇滚
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/list.php?type=11&count=3&offset=0',
    //   success: function (res) {
    //     console.log(res.data);
    //     var obj = {};
    //     obj.name = res.data.billboard.name;
    //     obj.pic_big = [];
    //     for (var i = 0; i < res.data.song_list.length; i++) {
    //       obj.pic_big.push(res.data.song_list[i].pic_big)
    //     }
    //     //请求数据 赋值给yoagun
    //     that.setData({
    //       yaogun: obj
    //     })
    //   }
    // });
    // //请求数据 24-影视金曲
    // wx.request({
    //   url: 'http://iwenwiki.com/api/music/list.php?type=24&count=3&offset=0',
    //   success: function (res) {
    //     console.log(res.data);
    //     var obj = {};
    //     obj.name = res.data.billboard.name;
    //     obj.pic_big = [];
    //     for (var i = 0; i < res.data.song_list.length; i++) {
    //       obj.pic_big.push(res.data.song_list[i].pic_big)
    //     }
    //     //请求数据 赋值给yinshi
    //     that.setData({
    //       yinshi: obj
    //     })
    //   }
    // });
  },
  
})
