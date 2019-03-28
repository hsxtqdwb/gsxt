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
          <div class="invoice-list-l"></div>
          <div class="invoice-list-r"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
export default {
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
  }
  .invoice-list{
      
  }
}
</style>
