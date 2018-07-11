<template>
  <section class="wrap">
    <div class="btn-area flex flex-align-center flex-justify-between">
      <span>
        <img src="../../../static/img/icon-edit.png" alt="edit">
        写评论...
      </span>
      <span class="flex-empty"></span>
      <span>
        <img src="../../../static/img/icon-coment.png" alt="">
        100
      </span>
      <span>
        <img src="../../../static/img/icon-like-active.png" alt="">
      </span>
      <span>
        <img src="../../../static/img/icon-parise-active.png" alt="">
      </span>
      <span>
        <img src="../../../static/img/icon-share.png" alt="">
      </span>
    </div>
    <div class="text-area">
      <mt-field placeholder="请编辑评论内容" type="textarea" rows="2"></mt-field>
      <div class="img-list flex flex-justify-start">
        <img src="../../../static/img/icon-upload.png" alt="upload">
        <div class="img-box">
          <img src="../../../static/img/icon-delete.png" alt="delete">
          <img src="../../../static/img/icon-upload.png" alt="upload">
        </div>
        <div class="flex-empty"></div>
        <span class="my-btn">发表</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>


<style lang="less" scoped>
.wrap{
  width:100%;
  padding:15px 20px;
  box-sizing: border-box;
  background-color: #fff;
  .btn-area{
    height:50px;
    span + span{
      display: flex;
      align-items: center;
      margin:0 10px;
      font-size: 16px;
      img{
        margin-right:5px;
      }
    }
    span:last-child{
      margin-right:0;
    }
  }
  .text-area{
    height:120px;
    .img-list{
      padding:0 10px;
    }
    .img-box{
      position: relative;
      width:40px;
      height:40px;
      margin-left:10px;
      img[alt="delete"]{
        position: absolute;
        top:-5px;
        right:-10px;
      }
    }
    .my-btn{
      width:48px;
      height:24px;
      border:1px solid #ccc;
      color: #ccc;
      font-size: 14px;
      text-align: center;
      line-height:24px;
      border-radius: 2px;
    }
  }
}
</style>
