<template>
  <div>
    <page-head title="水费账单"></page-head>
    <div class="w-user">
      <div class="w-left">户名</div>
      <div class="w-right">
        <div>01000030</div>
        <i class="w-arrow"></i>
      </div>
    </div>
    <div class="w-content-wrap">
      <div class="w-content">
        <div class="w-left">
          <div>充值缴费时间</div>
          <div>充值缴费金额</div>
        </div>
        <div class="w-right">
          <div class="w-recharge-time">2017年12月23日23点23分24秒</div>
          <div class="w-recharge-amount">￥1230</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "components/pageHead/pageHead";
export default {
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.images(@url) {
  background-image: url("../../assets/images/user/@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("../../assets/images/user/@{url}@3x.png");
  }
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.w-user {
  height: 86px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 36px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .w-left {
    line-height: 86px;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
  }
}
.w-arrow {
  .images("r_arrow");
  width: 15px;
  height: 27px;
  display: block;
  margin-left: 22px;
}
.w-right {
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-family: "PingFang-SC-Medium";
  display: flex;
}
.w-content-wrap {
  margin-top: 30px;
  box-sizing: border-box;
  padding: 0 36px;
  background: #fff;
  .w-content {
    height: 142px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .w-left {
      font-size: 28px;
      line-height: 56px;
      color: rgba(51, 51, 51, 1);
    }
    .w-right {
      font-size: 28px;
      line-height: 56px;
      color: rgba(51, 51, 51, 1);
      display: flex;
      flex-direction: column;
      .w-recharge-time{
        color:rgba(102, 102, 102, 1);
        // line-height: 30px;
        text-align: right;
      }
      .w-recharge-amount{
        color:rgba(52, 184, 239, 1);
        text-align: right;
      }
    }
    &:nth-of-type(1) {
      border-top: none;
    }
  }
}
</style>
