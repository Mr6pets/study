<h3>使用vue-cli安装一个webpack的vue的项目为vuenews.</h3>

<b>ps:组件的分类</b>
<ul>
<li>功能型</li>
<li>UI型</li>
<li>混合型</li>
</ul>
<h4>这里的github上有很多组件 http://github.com/opendigg/awesome-github-vue</h4>

**要使用到的vux的组件库**<br/>

**组件的基本使用
props
slots
events
methods**
# 前期第一步配置 #
<ul>
	<li><b>1.在项目文件下执行 npm i -S vux安装vux的依赖</b></li>
	<li><b>2.在项目文件下执行 npm i -D less less-loader</b></li>
	<h4>语言包设置</h4>
	<li>
		<b>3.在项目文件下执行 npm install vux-loader --save-dev </b>
		<ul>
			<h5>配置build/webpack.dev.conf.js</h5>
			<li>const vuxLoader=require('vux-loader')</li>
			<li>baseWebpackConfig=vuxLoader.merge(baseWebpackConfig,{plugins:['vux-ui']})</li><hr>
			<li>
				在build文件夹下webpack.base.conf.js 文件进行配置​
				webpack.base.conf.js文件修改如下：
				//将module.exports = {
					改为
					var originalConfig = {

				const vuxLoader = require('vux-loader')
				const webpackConfig = originalConfig
				module.exports = vuxLoader.merge(webpackConfig,{
				  plugins: ['vux-ui']
				})
			</li>
		</ul>
	</li>
</ul>	
<hr>
# vux组件的使用 #
## vux底部组件的使用 ##
<ul>
<li>
	tab组件<br>
导入：import{Tab,TabItem}from 'vux';<br>
设置容器 div.my-tab<br>
TabItem的selected属性
</li>
<hr>
<li>
Scroller组件<br>
介绍：自定义滚动组件<br>
导入：import{Scroller}from 'vux';<br>
:lock-y="true"
</li>
<hr>
<li>
Swiper组件<br>
介绍：轮播组件<br>
导入：import{Swiper}from 'vux';<br>
设置数据：:list="slideData"<br>
设置当前显示项：v-model="slideIndex"
</li>
<hr>
<li>
Marquee MarqueeItem组件<br>
介绍：滚动（跑马灯）组件<br>
导入：import{Marquee,MarqueeItem}from 'vux';<br>
通过v-for指令设置item<br>
</li>
<hr>
<li>
Panel组件<br>
介绍：图文列表组件<br>
导入：import{Panel}from 'vux';<br>
设置数据： ：list="list"<br>
设置样式： class="pannel-list"
</li>
<hr>
<li>
数据接口交互-接口
首屏推荐新闻数据
http://3g.163.com/touch/jsonp/sy/recommend/0-9.html<br>
推荐下拉刷新
http://3g.163.com/touch/jsonp/sy/recommend/0-9.html<br>
miss:'00'<br>
refresh:['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B10']<Br>
推荐新闻更多数据
http://3g/163.com/touch/jsonp/sy/recommend/'+start+'-'+end+'.html
</li>
<hr>
<li>
数据交互组件 vue-jsonp<br>
介绍：http://www.npmjs.com/package/vue-jsonp<br>
导入：import VueJsonp from 'vue-jsonp';<br>
vue.use(VueJsonp)
使用<br>
组件中：this.$jsonp() 
</li>
<hr>
<li>
第三方组件 vue-scroller<br>
自定义滚动刷新加载组件
介绍：http://www.npmjs.com/package/vue-scroller<br>

安装 npm i vue-scroller -S<br>
</li>
<li>99</li>
<li>99</li>
<li>99</li>
<li>99</li>
<li>99</li>
<li>99</li>
<li>99</li>
<li>99</li>
</ul>
	
	


