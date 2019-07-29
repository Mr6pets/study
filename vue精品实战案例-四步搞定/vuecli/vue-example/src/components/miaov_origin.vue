<template>
    <div>
        <h2>这里是妙味maiov组件</h2> 
        <!-- 另外一种取状态  -->
        <p>{{$store.state.count}}</p>
        <button @click="changeCount">改变count</button>
    </div>
</template>

<script>
export default {
    methods: {
        changeCount(){
            this.$store.commit('updataCount',{
                add:10
            })
        }
    }
}
</script>

<style>

</style>
