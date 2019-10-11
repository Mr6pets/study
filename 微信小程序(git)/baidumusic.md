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





