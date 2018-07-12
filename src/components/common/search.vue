<template>
  <section class="wrap">
    <!-- 搜索框 -->
    <section class="search flex">
      <header class="flex flex-align-center">
        <span class="my-icon-search f14 c666">搜索</span>
        <mt-field class="my-input f14"></mt-field>
      </header>
      <span class="f14 cblue">取消</span>
    </section>
    <div style="height:60px;"></div>
    <!-- 搜索历史 -->
    <section class="history">
      <p class="f14 c666 margin-btm-5">搜索历史</p>
      <ul class="flex flex-align-center flex-justify-around flex-flow-row-wrap">
        <li class="his-item f14" v-for="item in 10" :key="item">{{item}}</li>
        <li class="flex-empty"></li>
      </ul>
    </section>
    <!-- 关注论坛 -->
    <section class="focus">
      <ul>
        <li class="f14 c666 margin-btm-10">关注论坛</li>
        <li class="focus-item" v-for="item in 12" :key="item">this is content</li>
      </ul>
    </section>
    <my-button class="my-button">
      <span slot='text'>创建论坛</span>
    </my-button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wrap{
  padding-bottom:15px;
  .search{
    position: fixed;
    top:0;
    left:0;
    height:60px;
    width:100%;
    padding:0 10px;
    background-color: #F4EFEF;
    box-sizing: border-box;
    header{
      flex:1;
      height: 40px;
      margin-right:4px;
      background-color: #fff;
      border-radius: 18px;
      .my-icon-search{
        margin-left:4px;
      }
      .my-input{
        flex:.9;
        min-height:40px;
        margin-left:4px;
      }
    }
  }
  .history{
    padding:10px;
    background-color: #fff;
    box-sizing: border-box;
    .his-item{
      min-width:47px;
      max-height:30px;
      padding:10px;
      margin-right:5px;
      margin-bottom:5px;
      background-color: rgba(255, 210, 135,.4);
      border-radius: 6px;
      text-align: center;
      line-height:10px;
      box-sizing: border-box;
    }
  }
  .focus{
    margin-top:10px;
    padding:10px;
    background-color: #fff;
    .focus-item{
      height:40px;
      line-height: 40px;
      border-bottom:1px solid #eee;
    }
    li:nth-child(2){
      border-top:1px solid #eee;
    }
  }
  .my-button{
    margin-top:20px;
  }
}
</style>
