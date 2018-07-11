<template>
  <section class="wrap flex flex-align-center flex-justify-around">
    <div class="content flex-empty flex">
      <div v-if="type == 'text'">
        共<strong>0</strong>注 &nbsp;<strong>0</strong>元
      </div> 
      <div v-if="type == 'rate'">
        <span>信心指数</span>
        <img @click="handleClickGetRate(item,index)" v-for="(item,index) in rateOffList" :src="item" alt="star">
      </div>
      <div v-if="type == 'radio'" class="radio flex flex-align-center ">
        <mt-checklist v-model="radio" :options="['保密']"></mt-checklist>
        <p style="text-align:center;">
          <span>共<strong>1</strong>注<strong>10</strong>元</span></br>
          <span>奖金预测:<strong>123.30</strong>元</span>
        </p>
      </div>
    </div>
    <div class="btn btn-next">下单</div>
  </section>
</template>

<script>
export default {
  /**
   * 支付类bottom
   * params type
   * type: text , rate ,radio
   */
  props:['type'], 
  data(){
    return{
      rateOffList:new Array(5).fill('../../../static/img/icon-star-off.png'),
      radio:[]
    }
  },
  computed:{
    rateList(){
      return new Array(5).fill('../../../static/img/icon-star-off.png').concat(new Array(5).fill('../../../static/img/icon-star-on.png'))
    },

  },
  methods:{
    handleClickGetRate(item,index){
      this.rateOffList = this.rateList.slice(index+1,index+6).reverse()
    }
  },
  created(){

  }
}
</script>


<style lang="less" scoped>
.wrap{
  width:100%;
  height:60px;
  box-sizing: border-box;
  background-color: #fff;
  .content{
    height:100%;
    padding:20px 10px;
    font-size: 14px;
    box-sizing: border-box;
    strong{
      margin:0 2px;
      color:#DD0000;
    }
    .radio{
      flex:1;
    }
  }
  .btn{
    height:100%;
    color: #fff;
    font-size: 18px;
    line-height:60px;
    text-align: center;
  }
  .btn-prev{
    width:100px;
    background-color: #FF7500;
  }
  .btn-next{
    width:80px;
    background-color: #DD0000;
  }
}
</style>
