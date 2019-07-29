<template>
    <div>
        <h2>统计总数{{$store.getters.totals}}</h2> 
       
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
