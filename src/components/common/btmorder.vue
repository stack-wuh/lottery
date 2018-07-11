<template>
  <section class="wrap flex flex-align-center flex-justify-around">
    <div class="content flex-empty flex">
      <img src="../../../static/img/icon-clear.png" alt="clear">
      <strong>0</strong>注 &nbsp;<strong>0</strong>元
    </div>
    <div class="btn btn-prev">发起合购</div>
    <div class="btn btn-next">下单</div>
  </section>
</template>

<script>
export default {
  
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
