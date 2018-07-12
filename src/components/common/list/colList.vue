<template>
  <section class="wrap">
    <ul class="my-list">
      <li class="flex"></li>
    </ul>
  </section>
</template>


<script>
export default {
  /**
   * list数组下参数
   * name -- list对象来自于哪一个模块
   * br : true / false  是否需要换行 
   * lfIcon  左边图片地址
   * rfIcon 右边图片地址
   */
  data(){
    return{
      list:[
        {
          name:'我的', 
          sublist:[
            {
              lfIcon:'',
              title:'',
              rfIcon:''
            }
          ]
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.wrap{
  width:100%;
  height:100%;
  ul.my-list{
    width:100%;
    padding:15px 20px;
    background-color: #fff;
    li{
      height:50px;
    }
  }
}
</style>
