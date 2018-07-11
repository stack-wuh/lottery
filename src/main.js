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

import MyTabbar from '@/components/common/tabbar'
import MyButton from '@/components/common/button'
import MyContext from '@/components/common/context'
import MyBtmpay from '@/components/common/btmpay'
import MyBtmorder from '@/components/common/btmorder'
Vue.component('my-tabbar',MyTabbar)
Vue.component('my-button',MyButton)
Vue.component('my-context',MyContext)
Vue.component('my-btmorder',MyBtmorder)
Vue.component('my-btmpay',MyBtmpay)

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
