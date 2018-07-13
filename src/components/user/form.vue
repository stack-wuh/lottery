<template>
  <section class="wrapper flex flex-flow-col-wrap flex-justify-around">
    <section class="form-area">
      <mt-field v-if="item.isInput" v-for="(item,index) in validForm" :key="index" :value="item.value" :label="item.name" :placeholder="'请编辑'+ item.name" type="item.type">
        <div>
          <mt-button v-if="item.slot && item.slot.type == 'button'" size="small">{{item.slot && item.slot.text}}</mt-button>
        </div>
      </mt-field>
      <div v-else-if="item.isArea" class="my-imgarea flex flex-align-center flex-justify-between">
        <span class="item-title">{{item.name}}</span>
        <div class="img-list flex flex-align-center" style="flex:1;">
          <img src="../../../static/img/icon-upload.png" alt="upload">
        </div>
      </div>
      <div v-else-if="item.isPicker" class="my-picker flex flex-align-center">
        <span class="item-title">{{item.name}}</span>
        <div style="flex:1;">
          <p @click="visible = true" class="flex flex-align-center flex-justify-around">
            <span>请选择</span>
            <span class="flex-empty"></span>
            <span class="my-icon-more"></span>
          </p>
          <mt-popup class="my-pupop" position="bottom" v-model="visible">
            <mt-picker class="my-picker" :slots="slots"></mt-picker>
          </mt-popup>
        </div>
      </div>

    </section>
    <div class="flex-empty"></div>
    <my-button class="my-button">
      <span slot="text">确定</span>
    </my-button>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        user: [
          {
            name: "昵称",
            value: "",
            type: "default",
            isInput: true
          },
          {
            name: "联系电话",
            value: "",
            type: "default",
            isInput: true,
            slot: {
              type: "button",
              text: "获取验证码",
              click: ""
            }
          },
          {
            name: "验证码",
            value: "",
            type: "default",
            isInput: true
          },
          {
            name: "身份证号",
            value: "",
            type: "default",
            isInput: true
          }
        ],
        site: [
          {
            name: "名称",
            value: "",
            type: "default",
            isInput: true
          },
          {
            name: "许可证号",
            value: "",
            type: "default",
            isInput: true
          },
          {
            name: "门头照",
            value: "",
            type: "img",
            isArea: true
          },
          {
            name: "省市区",
            value: [],
            type: "picker",
            isPicker: true
          },
          {
            name: "详细地址",
            value: "",
            type: "default",
            isInput: true
          }
        ],
        pay:[
          {
            name:'充值金额',
            value:'',
            type:'default',
            isInput:true,
          }
        ]
      },
      visible: false,
      modal: true,
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          textAlign: "right",
          className: "slot1"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          textAlign: "left",
          className: "slot3"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          textAlign: "left",
          className: "slot3"
        }
      ]
    };
  },
  computed: {
    validForm() {
      const type = this.$route.query.type;
      let valid = null;
      switch (type) {
        case "user":
          valid = this.form.user;
          break;
        case "site":
          valid = this.form.site;
          break;
        case 'pay' :
          valid = this.form.pay
      }
      return valid;
    }
  },
  methods: {}
};
</script>


<style lang="less" scoped>
.wrapper {
  height: 100%;
  padding-bottom: 15px;
  box-sizing: border-box;
  .form-area {
    width: 100%;
    box-sizing: border-box;
    .my-imgarea {
      height: 90px;
      padding: 0 10px;
      background-color: #fff;
    }
    .my-picker {
      height: 48px;
      width:100%;
      padding: 0 10px;
      background-color: #fff;
      box-sizing: border-box;
    }
    .item-title {
      display: block;
      width: 108px;
    }
    img[alt="upload"] {
      width: 60px;
      height: 60px;
    }
  }
  .my-pupop {
    width: 100%;
    height: 220px;
    .my-picker {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
