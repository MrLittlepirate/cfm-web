import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'

/* 使用路由 */
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

const routers = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    children: [
      // {
      //   path: 'hello',
      //   name: 'HelloWorld',
      //   component: HelloWorld
      // }
    ]
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

/* 定义路由规则 */
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  /* 打开新界面时，定位到最顶端 */
  routes: routers
})
