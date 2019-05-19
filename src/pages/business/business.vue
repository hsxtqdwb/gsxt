<template>
  <div id="business">
    <page-head class="business-head" ref="businessHead" title="业务办理"></page-head>
    <van-tabs v-model="active" :swipeable="false" animated>
      <van-tab >
        <div @click="changeActive('applysign',0)" slot="title" >申请签约</div>
        <div>
          <router-view  name="applysign"></router-view>
        </div>
      </van-tab>
      <van-tab >
        <div  @click="changeActive('auditingsign',1)" slot="title" >审核列表</div>
        <div><router-view :setActive='setActive'  name="auditingsign"></router-view></div>
      </van-tab>
      <van-tab >
        <div @click="changeActive('contractList',2)" slot="title"  >签约列表</div>
        <div><router-view :setActive='setActive' name="contractList"></router-view></div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
// import ApplySign from "./applySign/applySign";
// import AuditingSign from "./auditingSign/auditingSign";
// import ContractList from "./contractList/contractList";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0,
    };
  },
  mounted(){
    let arr = this.$route.path.split('/')
    let pathname = arr[arr.length-1]
    if(pathname === 'applysign'){
      this.active = 0
    }else if(pathname === 'auditingsign'){
      this.active = 1
    }else if(pathname === 'contractList'){
      this.active = 2
    }
  },
  methods:{
    changeActive(path,i){
      this.$router.replace(`/business/${path}`)
      this.active = i
    },
    setActive(active){
      this.active = active
    }
  },
  components: {
    PageHead,
    // ApplySign,
    // AuditingSign,
    // ContractList
  },
};
</script>
<style lang="less" scoped>
#business {
  margin-top: 90px;
  /deep/ .van-tabs__wrap {
    height: 76px;
    line-height: 76px;
    .van-tabs__line {
      background-color: #34b8ef;
    }
    .van-tab {
      line-height: 76px;
      &.van-tab--active {
        color: #34b8ef;
      }
    }
  }
  /deep/ .van-tab {
    height: 76px;
    font-size: 26px;
    color: #999999;
  }
}
</style>
