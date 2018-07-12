import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Home  = resolve => require(['@/components/home'],resolve)
const ForumSearch  = resolve => require(['@/components/common/search'],resolve) 


const UserIndex  = resolve => require(['@/components/user/index'],resolve)
const UserForm = resolve => require(['@/components/user/form'],resolve)
const UserAtten = resolve => require(['@/components/user/attention'],resolve)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/user',
          name:'user',
          component:UserIndex
        },
      ]
    },
    {
      path:'/search',
      name:'search',
      component:ForumSearch
    },
    {
      path:'/user/form',
      name:'userForm',
      component:UserForm
    },
    {
      path:'/user/atten',
      name:'userAtten',
      component:UserAtten
    }
  ]
})
