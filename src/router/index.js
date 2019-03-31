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
  import('../pages/userRecord/userRecord').then(module => {
    resolve(module)
  })
}
const WaterAmount = (resolve) => {
  import('../pages/waterAmount/waterAmount.vue').then(module => {
    resolve(module)
  })
}
const TaggleUser = (resolve) => {
  import('../pages/taggleUser/taggleUser.vue').then(module => {
    resolve(module)
  })
}
const Business = (resolve) => {
  import('../pages/business/business.vue').then(module => {
    resolve(module)
  })
}
const ApplySign = (resolve) => {
  import('../pages/business/applySign/applySign.vue').then(module => {
    resolve(module)
  })
}
const AuditingSign = (resolve) => {
  import('../pages/business/auditingSign/auditingSign.vue').then(module => {
    resolve(module)
  })
}
const ContractList = (resolve) => {
  import('../pages/business/contractList/contractList.vue').then(module => {
    resolve(module)
  })
}
const StopWater = (resolve) => {
  import('../pages/stopWater/stopWater.vue').then(module => {
    resolve(module)
  })
}
const WaterPrice = (resolve) => {
  import('../pages/waterPrice/waterPrice.vue').then(module => {
    resolve(module)
  })
} 
const Invoice = (resolve) => {
  import('../pages/invoice/invoice.vue').then(module =>{
    resolve(module)
  })
} 
const InvoiceMsg = (resolve) => {
  import('../pages/InvoiceMsg/InvoiceMsg.vue').then(module => {
    resolve(module)
  })
}
const ChangeWaterProperty = (resolve) =>{
  import('../pages/changeWaterProperty/index.vue').then(module =>{
    resolve(module)
  })
}
export default new Router({
  routes: [
   {		
      path:"/test",
      component:ChangeWaterProperty
    },{
      path: '/',
      component: App
    },
    {
      path: '/userrecord',
      component: UserRecord
    },
    {
      path: '/wateramount',
      component: WaterAmount
    },
    {
      path: '/payment',
      component: Payment
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/taggleuser',
      component: TaggleUser
    },
    {
      path: '/stopWater',
      component: StopWater
    },
    {
      path: '/waterPrice',
      component: WaterPrice
    },
    {
      path: '/invoiceMsg',
      component: InvoiceMsg
    },
    {
      path: '/business',
      component: Business,
      children: [{
          path: 'applysign',
          component: ApplySign
        },
        {
          path: 'auditingsign',
          component: AuditingSign
        },
        {
          path: 'contractList',
          component: ContractList
        }
      ]
    }
  ]
})
