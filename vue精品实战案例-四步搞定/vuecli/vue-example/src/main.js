// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//引入依赖模块
import App from './App'//引入这个是根组件
import store from './store/index'

Vue.config.productionTip = false//不开启生产环境

//组件的使用需要三步 引入组件 注册组件 使用组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,//store注入到根容器中
  components: { App },
  template: '<App/>'
})
