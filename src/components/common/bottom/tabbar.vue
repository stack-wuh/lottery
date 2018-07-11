<template >
  <section class="wrap">
    <mt-tabbar class="my-tabbar" fixed>
      <mt-tab-item @click.native="handleClickChange(item,index)" v-for="(item,index) in list" :id="item.id" :key="index">
        <img slot="icon" :src="item.icon || item.defaultPath" alt="icon">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
    <slot></slot>
  </section>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {
          id:'论坛',
          name:'论坛',
          defaultPath:'static/img/icon-1-default.png',
          activePath:'static/img/icon-1-active.png',
          icon:'',
        },
        {
          id:'彩票站',
          name:'彩票站',
          defaultPath:'static/img/icon-2-default.png',
          activePath:'static/img/icon-2-active.png',
          icon:'',
        },
        {
          id:'专家',
          name:'专家',
          defaultPath:'static/img/icon-3-default.png',
          activePath:'static/img/icon-3-active.png',
          icon:'',
        },
        {
          id:'我的',
          name:'我的',
          defaultPath:'static/img/icon-4-default.png',
          activePath:'static/img/icon-4-active.png',
          icon:'',
        }        
      ]
    }
  },
  methods:{
    handleClickChange(item,index){
      this.$set(this.list[index],'icon',item.activePath)
      this.list.map((list,lindex) => {
        if(index !== lindex){
          this.$set(this.list[lindex],'icon',list.defaultPath)
        }
      })
    }
  }
}
</script>


<style lang="less" scoped>
.my-tabbar{
  height:50px;
  font-size: 10px;
  color: #666;
  background-color: #F1F0EF;
  .mint-tab-item{

  }
}
</style>
