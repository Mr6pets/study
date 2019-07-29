import Vue from 'vue'//引入必要的项vue
import Vuex from 'vuex'//引入必要的2项vuex

/*
    vuex的核心概念：
    store(仓库)：就是一个容器，它包含着你的应用中大部分的状态；状态存储是响应的；不能直接改变store中状态
    -state(状态):定义应用的单一状态树，用一个对象就包含了全部的应用层级状态
    -getter(派发的状态):抽离操作状态的逻辑，可被多组件使用
    -mutation(修改状态的唯一途径):要使改变状态可被记录，必须要commit一个mutation；mutation必须是同步更新状态
    -action(异步操作):异步操作产生的结果：Action提交的是mutation 而不是直接变更状态
 */

// 做为插件使用
Vue.use(Vuex);

//  定义容器store

//mock购物车数据
const shopList=[
    {
        id:123,
        count:2
    },{
        id:456,
        count:3
    }
]

//vuex的状态是响应的
var store = new Vuex.Store({
    state:{
        shopList
    },
    getters:{//对state中数据进行统计
        totals(state){
           return state.shopList.reduce((n,item)=>n+item.count,0)
        }
    },
    mutations:{
        updateCountById(state,payload){
            let item = state.shopList.find(item=>item.id==payload.id)
            item.count+=1;
        }
    }
})
//store的实例暴露出去
export default store




