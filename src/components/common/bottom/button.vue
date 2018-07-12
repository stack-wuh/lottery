<template>
  <section class="wrap flex flex-align-center flex-justify-center">
    <div class="btn-area">
     <span class="btn">
       <slot name="text"></slot>
     </span>
    </div>
  </section>
</template>


<script>
export default{
  props:['type'], 
  data(){
    return{

    }
  }
}  
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  height:60px;
  background-color: #fff;
  .btn-area{
    .btn{
      display: block;
      width:220px;
      height:46px;
      margin:0 auto;
      font-size: 18px;
      text-align: center;
      line-height: 46px;
      color: #fff;
      border-radius: 23px;
      background:-webkit-linear-gradient(left,#F6A638,#FF0000);
    }
  }

}
</style>
