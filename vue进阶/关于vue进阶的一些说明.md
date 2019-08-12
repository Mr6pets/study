# vue进阶文档的一些说明 #
## chapter1:vue-router ##
前端路由>在web开发中，路由是根据URL分配到对应的处理程序
vue-router>作用：通过管理URL，实现URL和组件的对应和通过URL进行组件之间的切换

> 开始使用vue-router

> 使用步骤:

- 安装模块：npm install vue-router --save
- 引入模块：import VueRouter from 'vue-router'
- 作为Vue的插件：Vue.use(VueRouter)
- 创建路由实例对象：new VueRouter({配置参数})
- 注入vue选项参数：new Vue({router})
- 告诉路由渲染的位置：<router-view></router-view>



>对组件的注入

> 通过在Vue根实例的router配置传入router实例

- $router router实例对象
- $router 当前激活的路由信息对象，每个组件实例都会有
- beforeRouterEnter()进入组件前钩子函数
- beforeRouteLeave()离开组件前钩子函数


>$router 路由信息对象

- path字符串，对应当前路由路径
- params对象，包含动态路由参数
- qurey对象，URL查询参数
- hash字符串 当前路由的hash值
- fullPath字符串 URL包含查询参数和hash的完整路径
- matched数组，包含当前路由的所有嵌套路径片段的 路由记录
- name字符串，当前路由名称





##	chapter2:vuex 	##

>vuex是什么

- 专为vue.js应用程序开发的**状态管理模式**
- 采用集中式存储管理应用的所有组件的状态
- 以相应的规则保证状态以一种可预测的方式发生变化

>状态

- 组件内部状态：仅在一个组件内使用的状态（data字段）
- 应用级别状态：多个组件共用状态<br>

>什么情况下使用Vuex

- 多个视图依赖于同一状态

- 来自不同视图的行为需要变更同一状态

  
  
  ##	chapter3:axios服务器通信	##

> 暂时还木有笔记，稍安勿躁......