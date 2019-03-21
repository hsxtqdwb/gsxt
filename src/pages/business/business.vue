<template>
  <div id="business">
    <page-head title="业务办理"></page-head>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">申请签约</mt-tab-item>
      <mt-tab-item id="2">审核签约</mt-tab-item>
      <mt-tab-item id="3">签约列表</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container :swipeable="true" v-model="selected">
      <mt-tab-container-item id="1">
        <apply-sign></apply-sign>
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <auditing-sign></auditing-sign>
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <contract-list></contract-list>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Vue from "vue";
import { Navbar, TabContainer, TabContainerItem, TabItem } from "mint-ui";
import PageHead from "../../components/pageHead/pageHead";
import ApplySign from "./applySign/applySign";
import AuditingSign from "./auditingSign/auditingSign";
import ContractList from "./contractList/contractList";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  data() {
    return {
      selected: "1"
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
  /deep/ .mint-navbar {
    height: 76px;
    font-size: 26px;
    /deep/ .mint-tab-item {
      border: none;
      padding: 0;
      /deep/ .mint-tab-item-label {
        display: inline-block;
        color: #999999;
        font-size: 26px;
        line-height: 74px;
        font-weight:bold;
      }
    }
    /deep/ .is-selected {
      /deep/ .mint-tab-item-label {
        border-bottom: solid 4px #34b8ef;
        color: #34B8EF;
      }
    }
  }
  & /deep/ .mt-tab-container-item {
    width: 100%;
  }
}
</style>
