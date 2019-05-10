<template>
  <div id="business">
    <page-head title="业务办理"></page-head>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="申请变更" id="1">
        <change-apply></change-apply>
      </van-tab>
      <van-tab title="变更审核" id="2">
        <auditing-sign></auditing-sign>
      </van-tab>
      <van-tab title="变更列表" id="3">
        <change-list></change-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
import ChangeApply from "./changeinfoAuditing/index"
import AuditingSign from "./changeinfoSign/index";
import ChangeList from "./changeinfoContract/index";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: "0"
    };
  },
  components: {
    PageHead,
    ChangeApply,
    AuditingSign,
    ChangeList
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
