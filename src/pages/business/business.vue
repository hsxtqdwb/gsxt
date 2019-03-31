<template>
  <div id="business">
    <page-head title="业务办理"></page-head>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="申请签约" id="1">
        <apply-sign></apply-sign>
      </van-tab>
      <van-tab title="审核列表" id="1">
        <auditing-sign></auditing-sign>
      </van-tab>
      <van-tab title="签约列表" id="1">
        <contract-list></contract-list>
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
  }
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
