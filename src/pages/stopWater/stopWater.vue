<template>
  <div id="stopWater">
    <page-head title="停水通知"></page-head>
    <div class="stopWater-msg" v-for="(item,index) in msg" :key="index">
      <div class="stopWater-msg-top">
        <div class="stopWater-msg-title">{{item.title}}</div>
        <div class="stopWater-msg-time">{{item.time}}</div>
      </div>
      <div class="stopWater-msg-bottom">
        <p>{{item.detail}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
export default {
  data() {
    return {
      selected: "1",
      msg: [
        {
          title: "停水通知",
          time: "2017-03-21",
          detail:
            "广东省深圳市宝安区固戍某某某村，由于水厂检修，决定于2018年3月14日早上8点开始停水，于下午五点恢复正常，请做好停水准备。"
        },
        {
          title: "停水通知",
          time: "2017-03-21",
          detail:
            "广东省深圳市宝安区固戍某某某村，由于水厂检修，决定于2018年3月14日早上8点开始停水，于下午五点恢复正常，请做好停水准备。"
        }
      ]
    };
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#stopWater {
  .stopWater-msg {
    background: #ffffff;
    margin: 20px 0 10px 0;
    .stopWater-msg-top {
      padding: 0 35px;
      overflow: hidden;
      line-height: 88px;
      border-bottom: solid 1px #eeeeee;
      .stopWater-msg-title {
        float: left;
        font-size: 28px;
        color: #333333;
      }
      .stopWater-msg-time {
        float: right;
        font-size: 24px;
        color: #999999;
      }
    }
    .stopWater-msg-bottom {
      padding: 30px 35px;
      p {
        font-size: 26px;
        line-height: 30px;
        color: #666666;
      }
    }
  }
}
</style>
