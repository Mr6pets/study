# vue进阶文档的一些说明 #
## chapter1:vue-router ##
前端路由>z在web开发中，路由是根据URL分配到对应的处理程序
vue-router>作用：通过管理URL，实现URL和组件的对应和通过URL进行组件之间的切换

> 开始使用vue-router<br>
> 使用步骤:
<ul>
<li>安装模块：npm install vue-router --save</li>
<li>引入模块：import VueRouter from 'vue-router'</li>
<li>作为Vue的插件：Vue.use(VueRouter)</li>
<li>创建路由实例对象：new VueRouter({配置参数})</li>
<li>注入vue选项参数：new Vue({router})</li>
<li>告诉路由渲染的位置：<router-view></router-view></li>
</ul>


>对组件的注入<br>

通过在Vue根实例的router配置传入router实例<br>
<ul>
<li>$router router实例对象</li>
<li>$router 当前激活的路由信息对象，每个组件实例都会有</li>
<li>beforeRouterEnter()进入组件前钩子函数</li>
<li>beforeRouteLeave()离开组件前钩子函数</li>
</ul>

><li>$router 路由信息对象</li>
<ul>
<li>path字符串，对应当前路由路径</li>
<li>params对象，包含动态路由参数</li>
<li>qurey对象，URL查询参数</li>
<li>hash字符串 当前路由的hash值</li>
<li>fullPath字符串 URL包含查询参数和hash的完整路径</li>
<li>matched数组，包含当前路由的所有嵌套路径片段的 路由记录</li>
<li>name字符串，当前路由名称</li>
</ul>





##chapter2:vuex##
>vuex是什么<br>

专为vue.js应用程序开发的**状态管理模式**<br>
采用集中式存储管理应用的所有组件的状态<br>
以相应的规则保证状态以一种可预测的方式发生变化<br>

>状态

组件内部状态：仅在一个组件内使用的状态（data字段）<br>
应用级别状态：多个组件共用状态<br>

>什么情况下使用Vuex

多个视图依赖于同一状态<br>
来自不同视图的行为需要变更同一状态<br>

##chapter3:axios服务器通信##
