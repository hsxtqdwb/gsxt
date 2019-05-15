<template>
  <div id="business">
    <page-head ref="businessHead" title="业务办理"></page-head>
    <van-tabs v-model="active" swipeable animated>
      <van-tab >
        <div @click="changeActive('applysign',0)" slot="title" >申请签约</div>
        <div>
          <router-view  name="applysign"></router-view>
        </div>
      </van-tab>
      <van-tab >
        <div  @click="changeActive('auditingsign',1)" slot="title" >审核列表</div>
        <div><router-view name="auditingsign"></router-view></div>
      </van-tab>
      <van-tab >
        <div @click="changeActive('contractList',2)" slot="title"  >签约列表</div>
        <div><router-view name="contractList"></router-view></div>
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
      active: 0
    };
  },
  methods:{
    changeActive(path,i){
      this.$router.push(`/business/${path}`)
      this.active = i
      console.log(this.active)
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
