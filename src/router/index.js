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
  import('../pages/bindUser/taggleUser/taggleUser.vue').then(module => {
    resolve(module)
  })
}
const BindUser = (resolve) => {
  import('../pages/bindUser/bindUser.vue').then(module => {
    resolve(module)
  })
}
const BindUserSearch = (resolve) => {
  import('../pages/bindUser/bindUserSearch.vue').then(module => {
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
  import('../pages/invoice/invoice.vue').then(module => {
    resolve(module)
  })
}
const InvoiceMsg = (resolve) => {
  import('../pages/InvoiceMsg/InvoiceMsg.vue').then(module => {
    resolve(module)
  })
}
const ChangeInfo = (resolve) => {
  import('../pages/changeInfo/').then(module => {
    resolve(module)
  })
}
const ChangeinfoAuditing = (resolve) => {
  import('../pages/ChangeInfo/changeinfoAuditing/').then(module => {
    resolve(module)
  })
}
const ChangeinfoContract = (resolve) => {
  import('../pages/ChangeInfo/changeinfoContract/').then(module => {
    resolve(module)
  })
}
const ChangeinfoSign = (resolve) => {
  import('../pages/ChangeInfo/changeinfoSign/').then(module => {
    resolve(module)
  })
}
const ChangeWaterProperty = (resolve) => {
  import('../pages/changeWaterProperty/index.vue').then(module => {
    resolve(module)
  })
}
const ChangeApply = (resolve) => {
  import('../pages/changeWaterProperty/changeApply/').then(module => {
    resolve(module)
  })
}
const ChangeAuditing = (resolve) => {
  import('../pages/changeWaterProperty/changeAuditing/').then(module => {
    resolve(module)
  })
}
const ChangeList = (resolve) => {
  import('../pages/changeWaterProperty/changeList/index.vue').then(module => {
    resolve(module)
  })
}
const Management = (resolve) => {
  import('../pages/management/management.vue').then(module => {
    resolve(module)
  })
}
const ApplyCancle = (resolve) => {
  import('../pages/invoice/applyCancle/applyCancle.vue').then(module => {
    resolve(module)
  })
}
const Burst = (resolve) => {
  import('../pages/burst/burst.vue').then(module => {
    resolve(module)
  })
}
const AddBurst = (resolve) => {
  import('../pages/burst/addBurst/addBurst.vue').then(module => {
    resolve(module)
  })
}
const Presentation = (resolve) => {
  import('../pages/presentation').then(module => {
    resolve(module)
  })
}
const IdentityVerification = (resolve) => {
  import('../pages/identityVerification').then(module => {
    resolve(module)
  })
}
export default new Router({
  mode:"history",
  routes: [
    {
      path: "/test",
      component: ApplyCancle
    }, {
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
      path: "/bindUserSearch",
      component: BindUserSearch
    },
    {
      path: "/bindUser/:id",
      component: BindUser
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
      path: '/management',
      component: Management
    },
    {
      path: '/business',
      component: Business,
      redirect:"/business/applysign",
      children: [{
        path: 'applysign',
        components: {
          default:ApplySign,
          applysign:ApplySign
        }
      },
      {
        path: 'auditingsign',
        components:{
          default:AuditingSign,
          auditingsign:AuditingSign
        } 
      },
      {
        path: 'contractList',
        components: {
          default:ContractList,
          contractList:ContractList
        }
      }
      ]
    },
    {
      path: '/changeWaterProperty',
      component: ChangeWaterProperty,
      children: [
        {
          path: 'changeApply',
          component: ChangeApply
        },
        {
          path: 'changeAuditing',
          component: ChangeAuditing
        },
        {
          path: 'changeList',
          component: ChangeList
        }
      ]
    },
    {
      path: '/changeInfo',
      component: ChangeInfo,
      children: [
        {
          path: 'changeinfoAuditing',
          component: ChangeinfoAuditing
        },
        {
          path: 'changeinfoContract',
          component: ChangeinfoContract
        },
        {
          path: 'changeinfoSign',
          component: ChangeinfoSign
        }
      ]
    },
    {
      path: '/burst',
      component: Burst
    },
    {
      path: '/addBurst',
      component: AddBurst
    },
    {
      path: '/presentation',
      component: Presentation
    },
    {
      path: '/identityVerification',
      component: IdentityVerification
    }
  ]
})
