###	豆瓣

- 电影
  - 热映的电影
    - subjects数组里面是具体的信息
      - rating:电影评分 average评分 stars星星
      - title:电影名称
      - images：图片 large
- 数据处理
  - data:'变量1：变量2'
    - 把变量2的值赋值给变量1







> ###	回顾：

~~~javascript
1.页面布局 重复的内容 使用模板 wxml wxss
	1.定义模板：
    	<template name='模板名字'>...</template>
	2.引入模板
    	wxml:<import src="模板路径*.wxml">
        wxss:@import 'wxss路径'
	3.使用wxml
    	<template is='模板名字' data="{{传输的数据}}"></template>
	4.模板中传递不同的数据
    	<template is='模板名字' data="{{nows}}"></template>
		<template is='模板名字' data="{{coming}}"></template>
		数据处理：
        	data="{{变量1：变量2}}"//变量2赋值给变量1
			<template is='模板名字' data="{{temp:nows}}"></template>
			<template is='模板名字' data="{{temp:coming}}"></template>
	5.小程序页面跳转 数据传值
    	1.页面跳转
        	导航：<vavigator url="../more/more?val={{temp.movietype}}" open-type="">更多</navigator>
			跳转：<view bindtap="tiao">更多</view>
					tiao:function(){
                        wx.navigatorTo({
                            url:.....
                        })
                    }
		2.页面跳转传值
        	导航：
           		<vavigator url="xxx?code={{}}" open-type="">更多</navigator>
        	点击事件跳转:
            	<view bindtap="tiao" data-type="当前操作的标识">更多</view>
				tiao:function(event){
                    wx.navigatorTo({
                        url:'xxxx?+code='+event.currentTarget.dataset.type
                    })
                }
			对应的页面接收 传递的值
                onLoad:function(options){
                    console.log(options.code);
                }
		






~~~

