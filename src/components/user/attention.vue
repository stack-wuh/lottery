<template>
  <section class="wrapper">
    <my-navbar @navSelect="navSelect" class="my-navbar"></my-navbar>
    <div style="height:3.125rem;"></div>
    <mt-tab-container class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoadMore"  v-model="select">
      <mt-tab-container-item :id="1">
        <my-col-list v-for="(item,index) in list" :data='item' :key="index" class="my-list"></my-col-list>
      </mt-tab-container-item>
      <mt-tab-container-item :id='2' v-if="isshow1">
        <my-col-list v-for="(item,index) in list" :data="item" :key="index" class="my-list">
          <span slot='left'>
            <img :src="item.img" alt="avatar">
          </span>
          <span slot="right">
            <div class="flex flex-flow-col-wrap flex-justify-start" >
              <p class="item-title f14 margin-btm-10">授信彩粉</p>
              <p class="f13">距离: 1.0km</p>
              <p class="f13">中奖率: 95%</p>
            </div>
          </span>
        </my-col-list>
      </mt-tab-container-item>
      <mt-tab-container-item :id='3' v-if="isshow2">
        <my-col-list v-for="(item,index) in list" :data="item" :key="index" class="my-list"></my-col-list>
      </mt-tab-container-item>
    </mt-tab-container> 
  </section>
</template>


<script>
export default {
  data(){
    return{
      list:[
        {
          title:'标题1',
          sub:[
            {
              key:'创建者',
              val:'shadow'
            },
            {
              key:'简介',
              val:'暂无'
            },
            {
              key:'彩种',
              val:'双色球/3D/大乐透'
            }
          ],
          img:'../../../static/img/avatar.png'
        },
        {
          title:'标题2',
          sub:[
            {
              key:'创建者1',
              val:'shadow1'
            },
            {
              key:'简介1',
              val:'暂无1'
            },
            {
              key:'彩种1',
              val:'双色球/3D/大乐透1'
            }
          ],
          img:'../../../static/img/avatar.png'
        },
      ],
      select:1,
      isshow1:false,
      isshow2:false,
      isLoadMore:false
    }
  },
  methods:{
    navSelect(e){ // 获取navbar组件emit的 nav-index
      this.select = e
      e == 2 ? (this.isshow1 = true) : (this.isshow2 = true)
    },
    loadMore(){ // 无限滚动加载
        this.isLoadMore = true
        console.log('is ok')
        this.isLoadMore = false
        console.log(this.isLoadMore)
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  height:100%;
  width:100%;
  .content{
    height:calc(100% - 3.125rem);
    box-sizing: border-box;
    overflow-y: scroll;
    -webkit-overflow-scrolling : touch;
  }
  .my-navbar{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:3.125rem;
    background-color: #fff;
    z-index:1000;
  }
  .my-list{
    margin-bottom:.625rem;
    box-sizing: border-box;
  }
  .item-title{
    color: #FF7500;
    background-color: #FEF1E6;
  }
  img[alt="avatar"]{
    width:70px;
    height:70px;
  }
}
</style>
