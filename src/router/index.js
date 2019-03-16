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
<<<<<<< HEAD
}
const Payment = (resolve) => {
  import('../pages/payment/payment').then(module => {
    resolve(module)
  })
}

=======
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
>>>>>>> 05efb749ab459ecb19023986f115e5ce47a30d38
export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      component: Payment
    }
=======
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
>>>>>>> 05efb749ab459ecb19023986f115e5ce47a30d38
  ]
})
