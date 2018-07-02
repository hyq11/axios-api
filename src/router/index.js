import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hot from "@/components/Hot"
import Soon from '@/components/Soon'
import Top250 from '@/components/Top250'
import Detail from "@/components/Detail/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children:[
        {
          path:'/',
          redirect:'/hot',
          meta:{
            keepAlive:true
          }
        },
        {
          path:'/hot',
          component:Hot
        },
        {
          path:'/soon',
          component:Soon
        },
        {
          path:'/top250',
          component:Top250
        },
      ]
    },
    {
      name:'detial',
    	path:'/detail/:id',
      component:Detail,
      
    }
  ]
})
