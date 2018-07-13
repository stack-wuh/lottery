<template>
  <section class="wrap flex flex-flow-col-wrap flex-justify-between">
    <section style="width:100%;">
      <section class="form-area" v-for="(item,index) in validForm" :key="index">
        <mt-field v-if="item.desc == 'input'" :rows="item.rows" v-model="item.value" :type="item.type" :placeholder="item.placeholder"></mt-field>
        <div class="img-list flex flex-align-center flex-flow-row-wrap" v-else-if="item.desc == 'img'">
          <img src="../../../static/img/icon-upload.png" alt="upload">
          <div class="img-box" v-for="item in 4">
            <img src="../../../static/img/icon-upload.png" alt="upload">
            <img src="../../../static/img/icon-delete.png" alt="delete">
          </div>
        </div>
        <div v-else-if="item.desc == 'picker'">
          <mt-cell @click.native="handleClickPicker" :title='item.title'>
            <span>{{item.value || item.placeholder}}</span>
            <span class="my-icon-more"></span>
            <mt-popup class="my-popup" position="bottom"  v-model="isShowPicker" popup-transition='popup-fade'>
              <div class="btn-list flex flex-align-center flex-justify-between">
                <span @click.stop.prevent="isShowPicker = false" class="cancel">取消</span>
                <span @click.stop.prevent="handleClickChange" class="ok">确定</span>
              </div>
              <mt-picker class="my-picker"  :slots="lists" @change="pickerValueChange"></mt-picker>
            </mt-popup>
          </mt-cell>
        </div>
        <div v-else-if="item.desc == 'switch'">
          <mt-cell :title="item.title">
            <mt-switch v-model="item.value"></mt-switch>
          </mt-cell>
        </div>
      </section>
    </section>
    <my-button class="margin-btm-10">
      <span slot="text">确定</span>
    </my-button>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        concat: [
          {
            label: "",
            value: "",
            placeholder: "请描述你的问题",
            type: "textarea",
            rows:'8',
            desc: "input"
          },
          {
            label: "",
            value: "",
            placeholder: "",
            desc: "img"
          }
        ],
        create:[
          {
            label:'',
            value:'',
            placeholder:'论坛名称',
            type:'default',
            desc:'input'
          },
          {
            label:'',
            value:'',
            placeholder:'论坛简介',
            type:'textarea',
            desc:'input',
            rows:'8'
          },
          {
            title:'彩种',
            label:'',
            value:'',
            placeholder:'请选择',
            type:'cell',
            desc:'picker'
          }
        ],
        post:[
          {
            label:'',
            value:'',
            placeholder:'请编辑内容',
            type:'textarea',
            desc:'input',
            rows:'5',
          },
          {
            label:'',
            value:'',
            placeholder:'',
            desc:'img'
          },
          {
            title:'论坛',
            label:'',
            value:'',
            placeholder:'摩尔城体彩',
            type:'cell',
            desc:'picker'
          },
          {
            title:'晒单',
            label:'',
            value:'',
            placerholder:'',
            type:'cell',
            desc:'switch'
          },
          {
            title:'红包',
            label:'',
            value:'',
            placeholder:'无',
            type:'cell',
            desc:'picker'
          }
        ]
      },
      isShowPicker:false,
      lists:[
        {
          flex:1,
          values:['1','2','3'],
          className:'slot1',
          textAlign:'center'
        },
      ]
    };
  },
  computed:{
    validForm(){
      const query = this.$route.query
      let valid = null
      switch(query.type){
        case 'concat' : valid = this.form.concat    // 联系客服
                    break;  
        case 'create' : valid = this.form.create   // 新建论坛
                    break;
        case 'post' : valid = this.form.post      // 发布帖子
                    break;
      }
      return valid
    }
  },
  methods:{
    handleClickPicker(){
      this.isShowPicker = true
      console.log(this.isShowPicker)
    },
    pickerValueChange(picker,values){
      console.log(picker,values)
    },
    handleClickChange(){
      this.isShowPicker = false
      console.log('is ok',this.isShowPicker)
    },
  }
};
</script>

<style lang="less" scoped>
.wrap{
  width:100%;
  height:100%;
  .my-popup{
    width:100%;
    .my-picker{
      width:100% !important;
      height:9.375rem;
    }
    .btn-list{
      height:3.125rem;
      text-align:center;
      span{
        flex:.2;
      }
      .cancel{

      }
      .ok{
        color: #26a2ff;
      }
    }
  }
}
.form-area{
  background-color: #fff;
  .img-list{
    padding:.625rem;
    .img-box{
      position: relative;
      img[alt="delete"]{
        position: absolute;
        top:-.625rem;
        right:0;
      }
    }
  }
  img[alt='upload']{
    width:5rem;
    height:5rem;
    margin-right:.3125rem;
    margin-bottom:.625rem;
  }
}
</style>
