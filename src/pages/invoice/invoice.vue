<template>
  <div id="invoice">
    <page-head title="发票信息"></page-head>
    <div class="invioce-wrap">
      <div class="invioce-header">
        <i class="invioce-icon"></i>
        <p class="invoice-desc">已开票</p>
        <p class="invoice-cost">费用：100元</p>
      </div>
      <div class="invoice-content">
        <div class="invoice-list">
          <div class="invoice-list-l">户名</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">发票代码</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">发票号码</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">账期</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">账户标识</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">费用</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
        <div class="invoice-list">
          <div class="invoice-list-l">发票状态</div>
          <div class="invoice-list-r">深圳环保局</div>
        </div>
      </div>
    </div>
    <div class="btn">
      <div @click="applyCancel">申请发票作废</div>
      <div @click="getAccount">推送邮箱</div>
      <div>下载电子发票</div>
    </div>
    <van-dialog v-model="show" :before-close="beforeClose">
      <div class="dialog-content">
        <div class="hint">提示</div>
        <div v-if="canCancel">
          <p class="label">请输入您的发票接收账号：</p>
          <van-field v-model="username" placeholder="请输入用户名"/>
        </div>
        <div v-if="!canCancel">
          <p class="label">您不能申请作废</p>
          <p class="cancel-desc">
            尊敬的用户，符合以下2个条件，均不能作废发
            票：1、收到退回的发票联、抵扣联时间超过了
            销售方开票当月；2、开票抬头为自然人。
          </p>
        </div>
      </div>
    </van-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { Dialog, Field } from "vant";
Vue.use(Dialog).use(Field);
export default {
  data() {
    return {
      show: false,
      username: "",
      canCancel: false
    };
  },
  methods: {
    getAccount: function() {
      this.show = true;
    },
    beforeClose: function() {
      this.show = false;
    }
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.images(@url) {
  background-image: url("../../assets/images/invoice/@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("../../assets/images/invoice/@{url}@3x.png");
  }
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.invioce-wrap {
  width: 680px;
  margin: 30px auto 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(211, 211, 211, 0.3);
  overflow: hidden;
  position: relative;
  .invioce-icon {
    .images("invoice");
    width: 140px;
    height: 140px;
    margin: 50px auto 40px;
    display: block;
  }
  .invoice-desc {
    color: rgba(51, 51, 51, 1);
    font-size: 30px;
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    text-align: center;
  }
  .invoice-cost {
    color: rgba(153, 153, 153, 1);
    font-size: 28px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .invoice-content {
    box-sizing: border-box;
    padding: 0 30px;
  }
  .invoice-list {
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 86px;
    .invoice-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 86px;
    }
    .invoice-list-r {
      color: rgba(102, 102, 102, 1);
      font-size: 28px;
      line-height: 86px;
    }
  }
  &::before {
    content: "";
    height: 30px;
    width: 20px;
    position: absolute;
    background: rgba(238, 238, 238, 1);
    border-radius: 0 30px 30px 0;
    top: 140px;
    left: 0;
  }
  &::after {
    content: "";
    height: 30px;
    width: 20px;
    position: absolute;
    background: rgba(238, 238, 238, 1);
    border-radius: 30px 0 0 30px;
    top: 140px;
    right: 0;
  }
}
.btn {
  width: 680px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-between;
  div {
    height: 80px;
    width: 205px;
    color: #fff;
    line-height: 80px;
    font-size: 26px;
    text-align: center;
    border-radius: 10px;
    &:nth-of-type(1) {
      background: rgba(174, 174, 174, 1);
    }
    &:nth-of-type(2) {
      background: rgba(52, 184, 239, 1);
    }
    &:nth-of-type(3) {
      background: rgba(255, 156, 0, 1);
    }
  }
}

.dialog-content {
  padding: 0 35px;
  box-sizing: border-box;
  .hint {
    text-align: center;
    margin-top: 40px;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
  }
  .label {
    line-height: 35px;
    height: 35px;
    color: rgba(102, 102, 102, 1);
    font-size: 26px;
    margin-top: 30px;
  }
  & /deep/ .van-field__body {
    border: 1px solid rgba(211, 211, 211, 1);
  }
  & /deep/ .van-field__control {
    height: 80px;
    line-height: 80px;
    width: 560px;
    margin: 0 auto;
    font-size: 30px;
  }
}
/deep/ .van-dialog .van-button {
  font-size: 26px;
  color: rgba(72, 188, 201, 1);
  line-height: 100px;
  height: 100px;
}
/deep/ .van-dialog{
  width: 575px;
}
.cancel-desc{
  font-size: 24px;
  line-height: 35px;
  color: rgba(102, 102, 102, 1);
  width: 495px;
  margin: 30px auto 0;
}
</style>
