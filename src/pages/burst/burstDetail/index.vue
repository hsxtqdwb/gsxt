<template>
  <div id="burstdetail">
    <page-head title="暴漏举报详情"></page-head>
    <div class="p-content-wrap">
      <h2 class="p-title" v-text="msg"></h2>
      <p class="p-time" v-text="date"></p>
      <p class="p-content" v-text="content"></p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../../components/pageHead/pageHead";
export default {
  data() {
    return {
      msg: "五一开始全国水价涨幅12%",
      date: "2019-05-17",
      content:
        "这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容"
    };
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#pricedetail {
  .p-content-wrap {
    padding: 35px;
    margin-top: 90px;
    background: #fff;
    .p-title {
      text-align: center;
      font-size: 32px;
      color: #333333;
      line-height: 40px;
    }
    .p-time {
      text-align: center;
      font-size: 22px;
      color: #999999;
      line-height: 80px;
    }
    .p-content {
      text-align: left;
      text-indent: 2em;
      font-size: 26px;
      color: #666666;
      line-height: 40px;
    }
  }
}
</style>

