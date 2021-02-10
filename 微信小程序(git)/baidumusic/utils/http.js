// //封装调用的方法2 通过将that 和 变量 传递过来的方式 进行that.setData({})进行赋值 但是这里的形参cur 要加[]才能进行存储
// function http(type, count, offset, that,cur) {
//   //信息弹框
//   wx.showLoading({
//     title: '数据加载中',
//   });
//   wx.request({
//     url: 'http://iwenwiki.com/api/music/list.php?type=' + type + '&count=' + count + '&offset=' + offset + '',
//     method: 'get',
//     success: function (res) {
//       // console.log(res);
//       // console.log(that);
//       //信息框隐藏
//       wx.hideLoading();
//       wx.showToast({
//         title: '加载完成',
//       })
//       //图片
//       var obj = {};
//       obj.songinfo=[];//数据点击进入后的列表数据内容
//       obj.name = res.data.billboard.name;//歌榜的类型
//       obj.type = res.data.billboard.billboard_type;//歌榜的类型代号
//       obj.pic_s = res.data.billboard.pic_s192;//榜单的图片
//       obj.comment=res.data.billboard.comment;//榜单的介绍
//       obj.pic_big = [];
//       //循环接口取图片地址
//       for (var i = 0; i < res.data.song_list.length;i++){
//         obj.pic_big.push(res.data.song_list[i].pic_big);
//         //数据的歌曲列表内容
//         var songList={};
//         songList.title = res.data.song_list[i].title;
//         songList.author = res.data.song_list[i].author;
//         songList.song_id = res.data.song_list[i].song_id;
//         songList.pic_big = res.data.song_list[i].pic_big;
//         obj.songinfo.push(songList);//[{},{},{}]
//       }
//       // this.setData({key:value})
//       that.setData({
//         [cur]: obj
//       })
//       // console.log(obj);
//     }
//   })
// };

//封装调用的方法1 通过fun将值传回index.js中 让后进行that.setData({})
// function http(type,count,offset,fun){
//   wx.request({
//     url: 'http://iwenwiki.com/api/music/list.php?type=' + type+'&count='+count+'&offset='+offset+'',
//     method: 'get',
//     success: function (res) {
//       // console.log(res.data);
//       //图片
//       var obj = {};
//       obj.name = res.data.billboard.name;
//       obj.pic_big = res.data.song_list[0].pic_big;
//       fun(obj)
//     }
//   })
// }

//封装调用的方法1 通过fun将值传回index.js中 
function http(type, count, offset,fun) {
  //信息弹框
  wx.showLoading({
    title: '数据加载中',
  });
  wx.request({
    url: 'http://iwenwiki.com/api/music/list.php?type=' + type + '&count=' + count + '&offset=' + offset + '',
    method: 'get',
    success: function (res) {
      // console.log(res);
      // console.log(that);
      //信息框隐藏
      wx.hideLoading();
      wx.showToast({
        title: '加载完成',
      })
      //判断如果没有数据那就就不执行
      if (res.data.song_list){
        //图片
        var obj = {};
        obj.songinfo = [];//数据点击进入后的列表数据内容
        obj.name = res.data.billboard.name;//歌榜的类型
        obj.type = res.data.billboard.billboard_type;//歌榜的类型代号
        obj.pic_s = res.data.billboard.pic_s192;//榜单的图片
        obj.comment = res.data.billboard.comment;//榜单的介绍
        obj.pic_big = [];
        //循环接口取图片地址
        for (var i = 0; i < res.data.song_list.length; i++) {
          obj.pic_big.push(res.data.song_list[i].pic_big);
          //数据的歌曲列表内容
          var songList = {};
          songList.title = res.data.song_list[i].title;
          songList.author = res.data.song_list[i].author;
          songList.song_id = res.data.song_list[i].song_id;
          songList.pic_big = res.data.song_list[i].pic_big;
          obj.songinfo.push(songList);//[{},{},{}]
        }
        fun(obj)
      }else{
        console.log("没有数据了,开发者友好信息")
      }
    }
  })
};
// 暴露接口
module.exports=http;