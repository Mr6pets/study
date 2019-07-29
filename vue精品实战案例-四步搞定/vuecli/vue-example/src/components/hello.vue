<template>
    <div>
        <h3>这里是hell vue组件</h3>
        <div :key="item.id" v-for="item in shopList">
            <button>-</button>
            <span>{{item.count}}</span>
            <button @click="add(item.id)">+</button>
        </div>
        
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
    computed: {
        shopList(){
           return  this.$store.state.shopList
        }
    },
    methods: {
        add(id){
           this.$store.commit('updateCountById',{
               id
           })    
        }
    }
}
</script>
<style>

</style>

