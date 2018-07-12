<template>
  <section class="wrapper">
    <div style="height:15px;"></div>
    <section class="card">
      <ul>
        <li class="header">
          <header class="flex flex-flow-col-wrap flex-align-center flex-justify-center">
            <img @click="jump2other('user')" src="../../../static/img/avatar.png" alt="avatar">
            <div class="flex">
              <mt-field @focus.native.capture="focusEvent" @blur.native.capture="blurEvent" :disableClear='clearAble' class="my-edit-input" :disabled="inputAble" placeholder="编辑你的昵称"></mt-field>
              <img @click="changeInputAbled" src="../../../static/img/user/icon-edit.png" alt="edit">
            </div>
          </header>
        </li>
        <li>
          <img src="../../../static/img/user/icon-1.png" alt="icon">
          <strong>钱包</strong>
          <span class="flex-empty"></span>
          <span>￥222</span>
          <span class="my-icon-more"></span>
        </li>
        <li>
          <p class="flex flex-align-center flex-justify-between" style="width:100%;">
            <span class="flex flex-justify-center" style="flex:1;height:30px;border-right:1px solid #FEF1E6;">
              <img src="../../../static/img/user/icon-2.png" alt="icon">
              <strong>充值</strong>
            </span>
            <span class="flex flex-justify-center" style="flex:1;">
              <img src="../../../static/img/user/icon-3.png" alt="icon">
              <strong>提现</strong>
            </span>
          </p>
        </li>
      </ul>
    </section>
    <section class="card" v-for="(item,index) in list" :key="index">
      <ul>
        <li @touchstart="" @touchover="" @click="handleClickItem(list)" v-for="(list,index) in item" :key="index">
          <img :src="list.icon" alt="icon">
          <strong>{{list.title}}</strong>
          <span class="flex-empty"></span>
          <span class="my-icon-more"></span>
        </li>
      </ul>
    </section>
  </section>  
</template>

<script>
export default {
  data() {
    return {
      list: [
        [
          {
            title: "关注",
            icon: "../../../static/img/user/icon-4.png",
            // params:'',
            path:'userAtten',
          },
          {
            title: "购彩记录",
            icon: "../../../static/img/user/icon-5.png",
            params:'',
            path:''
          },
          {
            title: "票站入驻",
            icon: "../../../static/img/user/icon-6.png",
            params:'site',
            path:'userForm',
          }
        ],
        [
          {
            title: "帮助中心",
            icon: "../../../static/img/user/icon-7.png",
            params:'',
            path:'',
          },
          {
            title: "联系客服",
            icon: "../../../static/img/user/icon-8.png",
            params:'',
            path:'',
          }
        ]
      ],
      inputAble:true,
      clearAble:true
    };
  },
  methods:{
    handleClickItem(item){
      let {path,params} = item
      this.jump2other(params,path)
    },
    changeInputAbled(){
      this.inputAble = false
    },
    blurEvent(){
      console.log('is blur')
      this.inputAble = true
    },
    focusEvent(){
      console.log('is focues')
    },
    jump2other(type,path = 'userForm'){
      this.$router.push({name:path,query:{type:type}})
    }
  }
};
</script>


<style lang="less" scoped>
.wrapper{
  height: 100%;
  padding:10px 0;
  box-sizing: border-box !important;
  .card {
    width: 100%;
    padding: 10px 20px 0 20px;
    border-radius: 4px;
    box-sizing: border-box;
    ul {
      width: 100%;
      background-color: #fff;
      li {
        -webkit-tap-highlight-color:rgb(255, 255, 255,0);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 50px;
        margin:0 20px;
        line-height: 50px;
        border-bottom: 1px solid #FEF1E6;
      }
      li:last-of-type {
        border: none;
      }
      li.header{
        position: relative;
        height:90px;
        header{
          position: absolute;
          top:-30px;
          display: flex;
          width:100%;
          .my-edit-input{
            margin-left:15px;
          }
        }
      }
    }
  }
  img[alt="icon"] {
    width: 22px;
    height: 22px;
    margin-right:10px;
  }
  img[alt='avatar']{
    width:60px;
    height:60px;
    border-radius: 50%;
  }
  img[alt="edit"]{
    margin-left:5px;
  }
  .list-item:active{
    color: red;
  }
}
</style>
