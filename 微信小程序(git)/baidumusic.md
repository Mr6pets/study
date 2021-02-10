###		仿百度音乐

> ​	百度音乐接口文档地址

http://iwenwiki.com/api/music/

~~~javascript
音乐获取列表

http://iwenwiki.com/api/music/list.php?type=1&count=20&offset=0

获取列表
list.php

参数：type：类型，count：数量

type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜

数据说明：
billboard:{
    comment:"当前的歌榜的介绍",
    name:"榜名",
    pic_s192:'图片'
}
song_list:[
    {
        author:'...',
        title："歌名"，
        pic_big:"歌曲名称"
    }
]


搜索
search.php

参数：content：搜索内容

播放
play.php

参数：mid：歌曲id

歌词
lrc.php

参数：mid：歌曲id
~~~

-	3.网络请求

~~~JavaScript
wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
})

ps_tips:
1.发起请求数据需要配置
2.发起HTTPS网络请求 其他的方式不支持
	开发工具 详情-不校验合法域名勾选（本地开发使用  发布版本不可用）

~~~





回顾：

- 百度音乐思路步骤

  ~~~JavaScript
  1.点击音乐  对应的音乐播放
  	获取点击的音乐的id 请求对应的数据
      小程序提供的背景音乐的api wx.getBackgroundAudioManager()
  	把音乐获取的对象 存在app.js全局变量上
  		获取全局变量
          	var app=getApp();
  			app.globalData.变量
  2.点击播放的图标：播放的点击后  暂停 暂停的点击后 播放
  	判断当前的音乐是不是暂停的
  3.进入页面 判断当前的音乐是否播放还是暂停 在onload中判断
  	1.播放了 把播放的名字和图片显示出来
      2.不播放 就是不显示的
  ~~~

- 全部播放

  ~~~JavaScript
  1.点击全部播放要获取当前音乐的列表 列表要存储到全局中去
  2.列表定义一个下标 index 用于下一首的播放
  3.播放完毕 寻找下一首播放
  	index++
  ~~~

  