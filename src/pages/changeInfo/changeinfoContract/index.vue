<template>
  <div id="changecontract">
    <div class="change-contract-wrap">
      <div class="auditing-content">
        <div class="auditing-change-title">变更前信息</div>
        <div class="auditing-content-list">
          <div class="change-list">
            <div class="change-list-l">用户编码</div>
            <div class="change-list-r">0100678</div>
          </div>
          <div class="change-list">
            <div class="change-list-l">用户名称</div>
            <div class="change-list-r">0100678</div>
          </div>
          <div class="change-list">
            <div class="change-list-l">用户地址</div>
            <div class="change-list-r">0100678</div>
          </div>
        </div>
        <div class="auditing-change-title">变更后信息</div>
        <div class="auditing-content-list">
          <div class="change-list">
            <div class="change-list-l">用户名称</div>
            <div class="change-list-r">0100678</div>
          </div>
          <div class="change-list">
            <div class="change-list-l">联系人</div>
            <div class="change-list-r">0100678</div>
          </div>
          <div class="change-list">
            <div class="change-list-l">联系人电话</div>
            <div class="change-list-r">0100678</div>
          </div>
          <div class="change-list">
            <div class="change-list-l">身份证号码</div>
            <div class="change-list-r">0100678</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.change-contract-wrap {
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  .auditing-content {
    padding: 0 30px;
    box-sizing: border-box;
  }
  .auditing-change-title {
    color: rgba(51, 51, 51, 1);
    font-size: 28px;
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    height: 88px;
    line-height: 88px;
  }
  .change-list {
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 86px;
    .change-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 86px;
    }
    .change-list-r {
      color: rgba(102, 102, 102, 1);
      font-size: 28px;
      line-height: 86px;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(238, 238, 238, 1);
      display: block;
    }
    &:nth-last-of-type(1)::after {
      height: 0;
      width: 0;
    }
  }
}
</style>
