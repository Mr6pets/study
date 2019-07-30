<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
          <router-link to="/" exact tag="li" event="mouseover">
            <i class="fa fa-home"></i>
            <span>home</span>
          </router-link>
          <li>
            <router-link :to="{path:'/document'}" active-class="activeClass">document</router-link>
          </li>
          <li>
            <router-link to="/about">about</router-link>
          </li>
          <li>
            <router-link to="/user">user</router-link>
          </li>
      </ul>
    </div>
     <router-view name="slider"></router-view>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      index: '/home'
    }
  }
}
</script>

<style>

</style>
