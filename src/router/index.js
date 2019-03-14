import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const App = (resolve) => {
  import('../pages/index/App').then(module =>{
    resolve(module)
  })
} 
const User = (resolve) => {
  import('../pages/user/user').then(module =>{
    resolve(module)
  })
} 

export default new Router({
  routes: [
    {
      path: '/',
      component: User
    }
  ]
})
