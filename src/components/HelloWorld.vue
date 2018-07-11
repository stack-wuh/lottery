<template>
  <div class="hello">
    <my-button></my-button>
    <my-tabbar></my-tabbar>
    <my-context></my-context>
    <my-btmpay type="text"></my-btmpay>
    <my-btmpay type="rate"></my-btmpay>
    <my-btmpay type="radio"></my-btmpay>
    <my-btmorder></my-btmorder>
    <my-card></my-card>

    <div style="height:90px"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>

</style>
