import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'
import user from '@/components/user'
import noFound from '@/components/404'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'
let router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',//这里是全局安装 设置激活状态的标签名 用来展示选中的样式 例如 导航选中后的样式是背景变红
    scrollBehavior(to,from,savePosition){//点击浏览器的前进后退或者切换导航的时候触发
        console.log(to)//要进入的目标路由对象 要去向哪里
        console.log(from)//离开的路由对象 从哪里来
        console.log(savePosition) //记录的滚动条的坐标 点击前进后退的时候记录
        // if(savePosition){
        //     return savePosition
        // }else{
        //     return {
        //         x:0,
        //         y:0
        //     }
        // }
        
    },
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/user/:userId?',
            name: 'User',
            component: user
        },
        {
            path: '/home',
            name: 'Home',
            component: home,
            alias: '/index'
        },
        {
            path: '/document',
            name: 'Document',
            components: {
                default: document,
                slider: slider
            }
        },
        {
            path: '/about',
            component: about,
            children:[
                {
                    path: '',//默认的子路由会到这里,同时设置了默认子路由 那么父路由的name就可以不要设置了
                    name: 'About',
                    component: study
                },
                {
                    //path: 'work',//这里的路径是http://localhost:8088/about/work 如果想变成相对根路径的话 要用以下
                    path: '/work',//http://localhost:8088/work
                    name: 'Work',
                    component: work
                },
                {
                    // path: 'hobby',
                    path: '/hobby',
                    name: 'Hobby',
                    component: hobby
                }
            ]
        },
        {
            path: '*',
            //component:noFound
            //重定向
            // redirect: '/home',
            // redirect: {path:'/home'},
            // redirect: { name: 'Home' },
            redirect:(to)=>{//动态设置重定向的目标
                // 目标路由对象，就是访问的路径的路由信息
                if(to.path === '/123'){
                    return '/home'
                }else if(to.path === '/123'){
                    return '/document'
                }else{
                    return '/about'
                }
                console.log(to)
                // return '/home'
            }
        }
    ]
})

export default router