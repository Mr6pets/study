<template>
    <div>
        <h3>这里是hell vue组件</h3>
        <p>{{n}}</p>
        <p>{{m}}</p>
        <button @click="changeCount">改变状态</button>
    </div>
</template>
<script>
/*
    安装 vuex模块：npm install vuex --save
    做为插件使用：Vue.use(Vuex)
    定义容器：new Vuex.Store()
    注入根实例：{
        store
    }
*/
export default {
    //date只能在本组件中变化
    data(){
        return {
            //这里的意思就是当前实例中通过在store文件下的index.js文件中Vue.use(Vuex); 每个组件中都会有 $store这个方法
            n:this.$store.state.count//n的初始值从vuex的state中拿；
            
        }
    },
    computed: {
        m(){
           return  this.$store.state.count
        }
    },
    methods: {
        changeCount(){
           //改变vuex的状态
            this.$store.commit('updataCount',{
                add:30
            })
        }
    }
}
</script>
<style>

</style>

