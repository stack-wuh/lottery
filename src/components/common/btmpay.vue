<template>
  <section class="wrap flex flex-align-center flex-justify-around">
    <div class="content flex-empty flex">
      <div v-if="type == 'text'">
        共<strong>0</strong>注 &nbsp;<strong>0</strong>元
      </div> 
      <div v-if="type == 'rate'">
        <span>信心指数</span>
        
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
   * type: 区分文字内容更rate评分
   */
  props:['type'], 
  data(){
    return{

    }
  }
}
</script>


<style lang="less" scoped>
.wrap{
  width:100%;
  height:60px;
  box-sizing: border-box;
  .content{
    height:100%;
    padding:20px 10px;
    font-size: 14px;
    box-sizing: border-box;
    strong{
      margin:0 2px;
      color:#DD0000;
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
