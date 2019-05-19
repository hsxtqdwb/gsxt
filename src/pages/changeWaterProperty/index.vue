<template>
  <div id="changeWaterProperty">
    <page-head class="change-list-head" title="业务办理"></page-head>
    <van-tabs v-model="active" :swipeable="false" animated>
      <van-tab>
        <div @click="changeActive('changeApply',0)" slot="title">申请变更</div>
        <div>
          <router-view name="changeApply"></router-view>
        </div>
      </van-tab>
      <van-tab>
        <div @click="changeActive('changeAuditing',1)" slot="title">审核列表</div>
        <div>
          <router-view name="changeAuditing"></router-view>
        </div>
      </van-tab>
      <van-tab>
        <div @click="changeActive('changeList',2)" slot="title">变更列表</div>
        <div>
          <router-view name="changeList"></router-view>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import PageHead from "../../components/pageHead/pageHead";
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
      this.$router.replace(`/changeWaterProperty/${path}`);
      this.active = i;
    },
    initTab() {
      let arr = this.$route.path.split("/");
      let pathname = arr[arr.length - 1];
      if (pathname === "changeApply") {
        this.active = 0;
      } else if (pathname === "changeAuditing") {
        this.active = 1;
      } else if (pathname === "changeList") {
        this.active = 2;
      }
    }
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#changeWaterProperty {
  /deep/ .van-tabs__wrap {
    margin-top: 90px;
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
  /deep/.van-tabs__content {
    margin-top: 50px;
  }
}
</style>
