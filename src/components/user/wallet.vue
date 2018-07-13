<template>
  <section class="wrapper">
    <header class="flex flex-flow-col-wrap flex-align-center">
      <strong class="margin-btm-5">￥302.00</strong>
      <p class="flex">
        <span @click="jump2other" class="c000">
          <img src="../../../static/img/user/icon-2.png" alt="">
          充值
        </span>
        <span @click="jump2other" class="c000"> 
          <img src="../../../static/img/user/icon-2.png" alt="">
          提现
        </span>
      </p>
    </header>
    <p class="sub-title f12 c666 ">明细</p>
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoadMore">
      <li v-for="item in total" :key="item" class="flex flex-align-center flex-justify-between">
        <span class="f16 c333">充值</span>
        <time class="f14 c666">2018-06-26</time>
        <strong class="up">+100</strong>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  data(){
    return{
      isLoadMore:false,
      total:10
    }
  },
  methods:{
    loadMore(){ // 无限下拉加载
      console.log('is ok')
      this.total += 5
    },
    jump2other(){
      this.$router.push({name:'userForm',query:{type:'pay'}})
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  width:100%;
  header{
    padding:1.25rem .9375rem .625rem .9375rem;
    strong{
      font-size: 48px;
      color: #DD0000;
    }
    strong + p{
      width:20rem;
      height:3.75rem;
      background-color: #fff;
      border-radius: 4px;
      span{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          margin-right:.3125rem;
        }
      }
      span:first-of-type{
        border-right:1px solid #FEF1E6;
      }
    }
  }
  p.sub-title{
    margin-left:1.25rem;
    margin-bottom:.3125rem;
  }
  ul{
    width:100%;
    background-color: #fff;
    li{
      height:3.125rem;
      padding:0 1.25rem;
      line-height:3.125rem;
      border-bottom:1px solid #eee;
    }
    .up{
      color: #FD7500;
    }
    .down{
      color: #DD0000;
    }
  }
}
</style>
