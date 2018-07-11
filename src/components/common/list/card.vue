<template>
  <section class="wrap" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
    <p>这个是带着时间和查看详情的</p>
    <div v-for="item in 4" :key="item">
      <p class="text-center sub-title">{{new Date()}}</p>
      <ul>
        <li class="f18 item-title">3D推荐号码</li>
        <li class="f12 c666">【最强中奖】。。。。</li>
        <li class="f12 c666">《建瓯市的》。。。。</li>
        <li class="flex flex-align-center flex-justify-between btn-detail">
          <span class="f14 c666">查看详情</span>
          <span class="my-icon-more c666"></span>
        </li>
      </ul>
    </div>
    <p>这个是什么都不带的</p>
    <div>
      <ul class="ul-list">
        <li class="f18 item-title">这里是标题</li>
        <li class="f12">创建者: name</li>
        <li class="f12">简介: desc</li>
        <li class="f12">彩种: 双色球、3D</li>
        <li class="f12 flex flex-justify-between flex-align-start"><p>帖子数: 1000 | 成员: 500人</p> <span class="btn-join">加入</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading:false
    };
  },
  methods: {
    loadMore(){
      console.log('this is infinite')
    }
  },
  created(){

  }
};
</script>

<style lang="less" scoped>
.wrap{
  height:300px;
  overflow-y: scroll;
  ul{
    width:100%;
    padding:5px 0 0 0;
    background-color: #fff;
    li{
      padding:0 10px;
      margin:5px 0;
    }
  }
  .ul-list{
    padding:0;
    padding:10px 0;
  }
  .item-title{
    margin-bottom:10px;
  }
  .sub-title{
    padding:10px 0;
  }
  .btn-detail{
    margin-top:10px;
    padding-top:10px;
    padding-bottom:10px;
    border-top:1px solid #ccc;
    box-sizing: border-box;
  }
  .btn-join{
    display: inline-block;
    width:60px;
    height:30px;
    border-radius: 23px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background-color: #FF7500;
  }
}
</style>
