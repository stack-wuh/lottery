import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Home  = resolve => require(['@/components/home'],resolve)
const ForumSearch  = resolve => require(['@/components/common/search'],resolve) 
const Publish = resolve => require(['@/components/common/publish'],resolve) 

const UserIndex  = resolve => require(['@/components/user/index'],resolve)
const UserForm = resolve => require(['@/components/user/form'],resolve)
const UserAtten = resolve => require(['@/components/user/attention'],resolve)
const UserWallet = resolve => require(['@/components/user/wallet'],resolve)
const UserHelp = resolve => require(['@/components/user/help'],resolve)
const UserConcat = resolve => require(['@/components/user/concat'],resolve)


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
      path:'/publish',
      name:'publish',
      component:Publish
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
    },
    {
      path:'/user/wallet',
      name:'userWallet',
      component:UserWallet
    },
    {
      path:'/user/help',
      name:'userHelp',
      component:UserHelp
    },
    {
      path:'/user/concat',
      name:'userConcat',
      component:UserConcat
    }
  ]
})
