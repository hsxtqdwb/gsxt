<template>
  <div>
    <page-head title="用户列表"></page-head>
    <div class="u-list-wrap">
      <div class="u-list-title">已绑定用户列表</div>
      <div class="u-list-content-wrap">
        <mt-cell-swipe
            :right="[
                    {
                    content: '删除',
                    handler: () => this.$messagebox('delete')
                    }
                ]"
        >
        <div class="u-list-content">
            <div>0100000</div>
            <div>深圳******局</div>
        </div>
        </mt-cell-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
import { CellSwipe } from "mint-ui";
import Vue from 'vue'
Vue.component(CellSwipe.name, CellSwipe);
export default {
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.u-list-wrap {
  background: #fff;
  margin-top: 20px;
  overflow: hidden;
  .u-list-content-wrap{
      padding: 0 30px;
  }
  .u-list-title {
    color: rgba(51, 51, 51, 1);
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    font-size: 28px;
    height: 86px;
    line-height: 86px;
    padding: 0 35px;
  }
  .u-list-content{
      color: rgba(102, 102, 102, 1);
      font-size: 26px;
      line-height: 40px;
      height: 127px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    //   padding: 0 30px;
  }
  & /deep/ .mint-cell-title{
      flex:0;
  }
  & /deep/ .mint-cell-swipe-button{
      color: #fff;
      background: rgba(255, 156, 0, 1);
      line-height: 127px;
      text-align: center;
      font-size: 28px;
      width: 177px;
  }
}
</style>
