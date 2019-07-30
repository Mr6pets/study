<template>
    <div>
        这里是user的内容
        <div class="user-list">
            <router-link :to="'/user/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>
        </div>
    </div>
</template>
<script>
let data = [
        {
            id:1,
            userName:"liu1",
            sex:'男',
            hobby:"codeing"
        },
        {
            id:2,
            userName:"liu2",
            sex:'男',
            hobby:"sing"
        },
        {
            id:3,
            userName:"liu3",
            sex:'男',
            hobby:"playing"
        }
    ]
export default {
    data(){
        return {
            userList:data
        }
    }
}
</script>
<style>

</style>

