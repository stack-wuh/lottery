// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/base.less'
import '../static/css/mint.less'
import '../static/css/font/iconfont.css'

import MyTabbar from '@/components/common/bottom/tabbar'
import MyButton from '@/components/common/bottom/button'
import MyContext from '@/components/common/bottom/context'
import MyBtmpay from '@/components/common/bottom/btmpay'
import MyBtmorder from '@/components/common/bottom/btmorder'
import MyNavbar from '@/components/common/navbar'
import MyColList from '@/components/common/list/colList'
// import MyPublish from '@/components/common/publish'
Vue.component('my-tabbar',MyTabbar)
Vue.component('my-button',MyButton)
Vue.component('my-context',MyContext)
Vue.component('my-btmorder',MyBtmorder)
Vue.component('my-btmpay',MyBtmpay)
Vue.component('my-navbar',MyNavbar)
Vue.component('my-col-list',MyColList)
// Vue.component('my-publish',MyPublish)

import MyCard from '@/components/common/list/card'
Vue.component('my-card',MyCard)

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
