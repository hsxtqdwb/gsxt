<template>
  <div id="changeInfo">
    <page-head  class="change-head" title="业务办理"></page-head>
    <van-tabs v-model="active" :swipeable="false" animated>
      <van-tab>
        <div slot="title" @click="changeActive('changeinfoAuditing',0)">申请变更</div>
        <div>
          <router-view name="ChangeinfoAuditing"></router-view>
        </div>
      </van-tab>
      <van-tab>
        <div @click="changeActive('ChangeinfoSign',1)" slot="title">变更审核</div>
        
        <div>
          <router-view name="ChangeinfoSign"></router-view>
        </div>
      </van-tab>
      <van-tab>
        <div @click="changeActive('changeinfoContract',2)" slot="title">变更列表</div>
        <div>
          <router-view name="ChangeinfoContract"></router-view>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
// import ChangeApply from "./changeinfoAuditing/index"
// import AuditingSign from "./changeinfoSign/index";
// import ChangeList from "./changeinfoContract/index";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted(){
    this.initTab()
  },
  methods: {
    changeActive(path, i) {
      this.$router.replace(`/changeInfo/${path}`);
      this.active = i;
    },
    initTab() {
      let arr = this.$route.path.split("/");
      let pathname = arr[arr.length - 1];
      if (pathname === "changeinfoAuditing") {
        this.active = 0;
      } else if (pathname === "ChangeinfoSign") {
        this.active = 1;
      } else if (pathname === "changeinfoContract") {
        this.active = 2;
      }
    }
  },
  components: {
    PageHead
    // ChangeApply,
    // AuditingSign,
    // ChangeList
  }
};
</script>
<style lang="less" scoped>
#changeInfo {
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
