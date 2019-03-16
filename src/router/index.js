import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const App = (resolve) => {
  import('../pages/index/App').then(module => {
    resolve(module)
  })
}
const User = (resolve) => {
  import('../pages/user/user').then(module => {
    resolve(module)
  })
} 
const Payment = (resolve) => {
  import('../pages/payment/payment').then(module => {
    resolve(module)
  })
}
const UserRecord = (resolve) => {
  import('../pages/userRecord/userRecord').then(module =>{
    resolve(module)
  })
} 
const WaterAmount = (resolve) => {
  import('../pages/waterAmount/waterAmount.vue').then(module =>{
    resolve(module)
  })
} 
export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path:'/userrecord',
      component:UserRecord
    },
    {
      path:'/wateramount',
      component:WaterAmount
    },
    {
      path:'/payment',
      component:Payment
    },
  ]
})
