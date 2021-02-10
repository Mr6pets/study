//index.js
//导入存在data文件夹下的数据
var nows=require('../../data/nows.js');
var coming = require('../../data/coming.js');
var top250 = require('../../data/top250.js');
Page({
  data: {
    //电影数据
    // nows: nows.now.subjects.slice(0,3),
    // coming: coming.coming.subjects.slice(0, 3),
    // top250: top250.top250.subjects.slice(0, 3),
    nows:{},
    coming:{},
    top250:{}
  },
  onLoad: function () {
    // console.log(this.data.nows);
    // console.log(this.data.coming);
    // console.log(this.data.top250);
    this.data.nows.title="正在热映";
    this.data.nows.movietype="reying";
    this.data.nows.list = nows.now.subjects.slice(0, 3);
    this.data.coming.title = "即将上映";
    this.data.coming.movietype = "jijiang";
    this.data.coming.list = coming.coming.subjects.slice(0, 3);
    this.data.top250.title = "正在热播";
    this.data.top250.movietype = "rebo";
    this.data.top250.list = top250.top250.subjects.slice(0, 3);
    //设置到data中
    this.setData({
      nows: this.data.nows,
      coming: this.data.coming,
      top250: this.data.top250
    },function(){
      console.log(this.data.nows);
     
    })
  },
})
