<template>
  <div id="business">
    <page-head title="业务办理"></page-head>
    <van-tabs v-model="active" swipeable animated>
      <van-tab id="1">
        <router-link slot="title" to="/business/applysign" >申请签约</router-link>
        <!-- <apply-sign></apply-sign> -->
        <router-view name="applysign"></router-view>
      </van-tab>
      <van-tab id="2">
        <router-link slot="title" to="/business/auditingsign" >审核列表</router-link>
        <router-view name="auditingsign"></router-view>
      </van-tab>
      <van-tab  id="3">
        <router-link slot="title" to="/business/contractList" >签约列表</router-link>
        <router-view name="contractList"></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
import ApplySign from "./applySign/applySign";
import AuditingSign from "./auditingSign/auditingSign";
import ContractList from "./contractList/contractList";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: "0"
    };
  },
  components: {
    PageHead,
    ApplySign,
    AuditingSign,
    ContractList
  },

};
</script>
<style lang="less" scoped>
#business {
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
