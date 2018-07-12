<template>
  <section class="wrapper flex flex-flow-col-wrap flex-align-start">
    <section class="my-body">
      <router-view></router-view>
    </section>
    <my-tabbar class="my-tabbar"></my-tabbar>
  </section>  
</template>

<script>
export default {
  
}
</script>


<style lang="less" scoped>
.wrapper{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .my-body{
    flex:1;
    width:100%;
    box-sizing: border-box;
  }
  .my-tabbar{
    height:50px;
  }
}
</style>
