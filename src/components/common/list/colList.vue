<template>
  <section class="wrap col-list">
    <mt-cell-swipe :right="right">
      <div class="list flex flex-align-stretch flex-justify-between">
        <slot name="left"></slot>
        <div class="center">
          <ul class="list-item">
            <li class="title f18 margin-btm-5 c000">{{data.title}}</li>
            <li class="f13 li-item" v-for="(item,index) in data.sub" :key="index">
              <span class="sub">{{item.key}}</span>: 
              <span class="desc">{{item.val}}</span>
            </li>
          </ul>
        </div>
        <div>
            <slot name="right"></slot>
        </div>
 
      </div>
    </mt-cell-swipe>
  </section>
</template>


<script>
export default {
  /**
   * 循环组件 col-list 
   * 参数 :  data
   * {
   *  title:'这是标题',
   *  slot-left:自定义列表左部内容,
   *  slot-right:自定义列表右部内容,
   *  sub:[
   *  {
   *    key:键名 -- 创建者/简介/双色球  ,
   *    val:键值 -- shadow/is a boy / 222
   * }
   * ]
   * }
   */
  props:['data'],
  data(){
    return{
      right:[{content:'删除',style:{background:'red',color:'#fff',display:'flex',alignItems:'center'},handler:this.handleDeleteItem}]
    }
  },
  methods:{
    handleDeleteItem(){
      this.$messagebox('shanchu ')
    }
  },
  created(){
    // console.log(this.data)
  }
}
</script>


<style lang="less" scoped>
.wrap{
  width:100%;
    .list{
      width:100%;
      padding:.625rem;
      background-color: #fff;
      .li-item{
        height:.9375rem;
      }
    }
}
</style>
