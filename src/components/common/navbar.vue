<template>
  <section class="wrap">
    <mt-navbar v-model="select">
      <mt-tab-item @click.native="handleClick" v-for="(item,index) in navList" :key="index" :id="item.value">{{item.name}}</mt-tab-item>
    </mt-navbar>
  </section>
</template>


<script>
export default {
  data(){
    return {
      list:{
        atten:[
          {
            name:'论坛',
            value:1,
          },
          {
            name:'彩票站',
            value:2,
          },
          {
            name:'专家',
            value:3,
          }
        ]
      },
      select:1
    }
  },
  computed:{
    navList(){
      return this.list.atten
    }
  },
  methods:{
    handleClick(){
      this.$emit('navSelect',this.select)
    }
  }
}
</script>


<style lang="less" scoped>

</style>
