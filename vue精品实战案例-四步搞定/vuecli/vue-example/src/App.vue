<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <hello></hello>
    <hr>
    <miaov></miaov>
  </div>
</template>

<script>
//组件的使用需要三步 引入组件 注册组件 使用组件
import Hello from './components/Hello'//1.引入组件
import miaov from './components/miaov'

export default {
  name: 'App',
  components: {//2.这里进行注册组件 3.以上的APP中进行使用
    Hello:Hello,
    miaov:miaov
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
