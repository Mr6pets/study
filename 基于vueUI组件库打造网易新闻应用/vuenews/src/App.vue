<template>
  <div id="app">
    <view-box>
      <x-header
      class="header"
      slot="header"
       :left-options="{showBack:false, backText:'Back'}"
      >
        <div slot="left">直播</div>
        <div>网易</div>
        <div slot="right">搜索</div>
      </x-header>
      
      <sc 
      class="scroller"
      :lock-y="true"
      >
        <div class="tab">
          <tab>
            <tab-item selected>推荐</tab-item>
            <tab-item>要闻</tab-item>
            <tab-item>游戏</tab-item>
            <tab-item>科技</tab-item>
            <tab-item>娱乐</tab-item>
            <tab-item>体育</tab-item>
          </tab>
        </div>
      </sc>
      <scroller 
        class="my-scroller"
        :on-refresh="refresh"
        :on-infinite="infinite"
        ref="myRef"
      >
          <swiper 
            :list="swiperList"
            v-model="swiperIndex"
            :loop="true"
          >
          </swiper>
          <marquee class="my-marquee">
            <marquee-item v-for="list in marqueeList" >{{list.title}}</marquee-item>
          </marquee>
          <panel
            :list="dataList"
          >
          </panel>
          <panel
            :list="moreDataList"
          >
          </panel>
          
      </scroller>
      <tabbar slot="bottom" class="tabber_bottom">
        <tabbar-item >
          <img src="./assets/icon_nav_button.png" slot="icon">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
           <img src="./assets/icon_nav_article.png" slot="icon">
          <span slot="label">推荐</span>
        </tabbar-item>
        <tabbar-item>
           <img src="./assets/icon_nav_cell.png" slot="icon">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
    <router-view/>
  </div>
</template>

<script>
import {ViewBox,XHeader,Tabbar, TabbarItem, Tab, TabItem,Scroller as sc,Swiper,Marquee, MarqueeItem,Panel} from 'vux';
var refreshKey=['A','B01','B02','B03','B04','B05','B06','B07','B08','B09','B10'];
var key =0;
var start=0;
var end=start+9;
var keyValue = 'A';
var initLoaded=false//初始化数据是否加载
function getRefreshKey(){
  key++
  if(key == refreshKey.length){
    key=0;
  }
  keyValue = refreshKey[key];
}
export default {
  name: 'App',
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    sc,
    Swiper,
    Marquee,
    MarqueeItem,
    Panel,
  },
  created(){
    //轮播图api接口数据
    //http://3g.163.com/touch/jsonp/sy/recommend/0-9.html
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data=>{
      // console.log(data);
      // 传入的参数规则是
      /** 
       * {
        url: 'javascript:',
        img: './assets/cat1.jpg',
        title: '送你一只猫1'
      }
      */
      //轮播图api接口数据
      this.swiperList=data.focus.filter(item=>{
        return item.addata===null&&item.picInfo[0];
      }).map(item=>{
        return{
            url: item.link,
            img: item.picInfo[0].url,
            title: item.title
        }
      });
      //滚动新闻数据
      this.marqueeList=data.live.filter(item=>{
        return item.addata===null&&item.picInfo[0];
      }).map(item=>{
        return{
          title: item.title
        }
      });
      //首屏新闻列表的数据
      this.dataList=data.list.filter(item=>{
        return item.addata===null&&item.picInfo[0];
      }).map(item=>{
        return{
          src: item.picInfo[0].url,
          title: item.title,
          desc: item.digest,
          url: item.link
        }
      });
      initLoaded = true;
    })
  },
  data(){
    // var dataList=[]
    // for(var i=0;i<10;i++){
    //   dataList.push({
    //     src: 'http://somedomain.somdomain/x.jpg',
    //     title: '标题一',
    //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
    //     url: '/component/cell'
    //   })
    // }
    return{
      swiperList:[],
      swiperIndex:0,
      marqueeList:[],
      dataList:[],
      moreDataList:[]
    }
  },
  methods: {
    refresh(){
      getRefreshKey()
      //下拉数据加载
      this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',{
        miss:'00',
        refresh:keyValue
      }).then(data=>{
        console.log(data);
        // console.log(this.$refs.myRef)
        //刷新新闻列表的数据
        this.dataList=data.list.filter(item=>{
          return item.addata===null&&item.picInfo[0];
        }).map(item=>{
          return{
            src: item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        });
        //通过vue的scroller组件告诉此实例已经完成
        this.$refs.myRef.finishPullToRefresh();
        this.$vux.toast.text(`这次一共刷新了${this.dataList.length}条数据`, 'top')
      })
    },
    infinite(){
      //http://3g/163.com/touch/jsonp/sy/recommend/'+start+'-'+end+'.html
      if(!initLoaded){
        this.$refs.myRef.finishInfinite();
        return
      }
      console.log("2")
      this.$jsonp(`http://3g.163.com/touch/jsonp/sy/recommend/${start}-${end}.html`,{
        miss:'00',
        refresh:keyValue
      }).then(data=>{
        console.log(data);
        //上拉加载更多
        var dataList=data.list.filter(item=>{
          return item.addata===null&&item.picInfo[0];
        }).map(item=>{
          return{
            src: item.picInfo[0].url,
            title: item.title,
            desc: item.digest,
            url: item.link
          }
        });
        this.moreDataList=this.moreDataList.concat(dataList)
        start+=10;
        end=start+9;
      })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
  html,body{
    margin:0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  #app{
    height: 100%;
    .header{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 10
    }
    .my-scroller{
      top:84px;
    }
    .loading-layer{
      padding-bottom: 90px;
    }
    .tab{
      width: 600px;
      margin-top: 40px;
    }
    .my-marquee{
      margin-top:10px;
    }
    .weui-media-box__hd,.weui-media-box__hd img{
      width:102px;
      height: 78px;
    }
    .weui-media-box__hd{
      height: 78px;
    }
    .tabber_bottom{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 11;
    }
  }
  
</style>
