<template>
  <div id="apply-sign">
    <div class="apply-sign-wrap">
        <div class="apply-sign-step">

        </div>
      <div class="apply-sign-tip">
        <p>
          <span>申请签约办理</span>
          <span>2017年12月12日</span>
        </p>
        <p>请认真填写核实下列资料</p>
      </div>
      <p class="apply-sign-title">一户一表供用水协议</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#apply-sign {
  width: 100%;
}
.apply-sign-wrap {
  height: 1200px;
  margin: 30px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  padding: 0 30px;
  .apply-sign-step{
      height: 110px;
  }
  .apply-sign-tip {
      padding: 40px 30px;
      height: 80px;
      border: solid rgba(52, 184, 239, 0.07) 1px;
      box-shadow:0px 2px 16px 4px rgba(52,184,239,0.07);
    p {
      overflow: hidden;
      line-height: 40px;
      span {
        &:first-of-type {
          float: left;
          font-size: 28px;
          color: #34b8ef;
        }
        &:last-of-type {
          float: right;
          font-size: 24px;
          color: #999999;
        }
      }
      &:last-of-type {
        font-size: 26px;
        color: #666666;
      }
    }
  }
  .apply-sign-title{
      color: #333333;
      font-size: 28px;
      line-height: 106px;
      font-weight: bold;
      letter-spacing: 4px;
  }
}
</style>
