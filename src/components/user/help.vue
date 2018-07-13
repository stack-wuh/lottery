<template>
  <section class="wrapper">
    <section class="content" v-infinite-scroll="loadMore">
      <section v-for="item in 10" class="item-list margin-btm-10 flex flex-align-start">
        <div class="margin-right-5">
          <img src="../../../static/img/user/icon-question.png" alt="question">
        </div>
        <div>
          <h3 class="margin-btm-10">如何成为专家?</h3>
          <article class="f16">
            专家与普通彩民的区别是根据在平台上购买彩票的命中率的高低，命中率高的会自动成为专家。
          </article>
        </div>
      </section>
    </section>
  </section>
</template>


<script>
export default {
  data(){
    return{
      isLoadMore:false
    }
  },
  methods:{
    loadMore(){
      console.log('is load')
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  width:100%;
  height:100%;
  overflow: hidden;
  .content{
    height:100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling:touch;
    .item-list{
      padding:.625rem 1.25rem;
      background-color: #fff;
    }
  }
}
</style>
