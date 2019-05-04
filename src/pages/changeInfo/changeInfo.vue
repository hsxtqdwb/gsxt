<template>
  <div id="changeInfo">
    <page-head title="业务办理"></page-head>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="申请变更" id="1">
        <apply-sign></apply-sign>
      </van-tab>
      <van-tab title="变更审核" id="2">
        <change-auditing></change-auditing>
      </van-tab>
      <van-tab title="变更列表" id="3">
        <change-contract></change-contract>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
import ApplySign from "./applySign/applySign";
import ChangeAuditing from "./changeAuditing/changeAuditing";
import ChangeContract from "./changeContract/changeContract";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    PageHead,
    ChangeAuditing
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
        font-weight: bold;
      }
    }
    /deep/ .is-selected {
      /deep/ .mint-tab-item-label {
        border-bottom: solid 4px #34b8ef;
        color: #34b8ef;
      }
    }
  }
  & /deep/ .mt-tab-container-item {
    width: 100%;
  }
}
</style>
