<template>
  <section class="wrapper">
    <section class="card">
      <section @click="jump2other(item.path,item.params)" class="flex list-item flex-align-center" v-for="(item,index) in list" :key="index" >
        <img :src="item.icon" alt="icon">
        <p>{{item.name}}</p>
        <span class="flex-empty"></span>
        <p>{{item.value}}</p>
        <span class="my-icon-more"></span>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          icon:'../../../static/img/user/icon-11.png',
          name:'意见反馈',
          value:'',
          path:'publish',
          params:'concat'
        },
        {
          icon:'../../../static/img/user/icon-8.png',
          name:'在线客服',
          value:'',
          path:'',
        },
        {
          icon:'../../../static/img/user/icon-9.png',
          name:'客服电话',
          value:'400-5623-1251',
          path:'',
        }
      ]
    }
  },
  methods:{
    jump2other(path,type){
      (path && type) && this.$router.push({name:path,query:{type:type}})
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  .card {
    width: 100%;
    padding:.625rem 1.25rem 0 1.25rem;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;   
    .list-item{
      height:3.125rem;
      line-height:3.125rem;
      border-bottom:1px solid #FEF1E6;
      color: #000;
      -webkit-tap-highlight-color:rgb(255, 255, 255,0);
    }
  }
  img[alt='icon']{
    width:1.25rem;
    height:1.25rem;
    margin-right:.625rem;
  }
}
</style>
