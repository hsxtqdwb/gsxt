<template>
  <div>
    <div class="change-wrap">
        <div class="font-s">通</div>
      <div class="label">变更信息</div>
      <div class="change-list-wrap">
        <div class="change-list">
          <div class="change-list-l">用户编码</div>
          <div class="change-list-r">0100678</div>
        </div>
        <div class="change-list">
          <div class="change-list-l">申请单位</div>
          <div class="change-list-r">0100678</div>
        </div>
        <div class="change-list">
          <div class="change-list-l">单位地址</div>
          <div class="change-list-r">0100678</div>
        </div>
        <div class="change-list">
          <div class="change-list-l">联系人</div>
          <div class="change-list-r">0100678</div>
        </div>
        <div class="change-list">
          <div class="change-list-l">联系电话</div>
          <div class="change-list-r">0100678</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.change-wrap {
  position: relative;
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  padding: 0 30px;
  box-sizing: border-box;
  overflow: hidden;
  .label {
    color: rgba(0, 0, 0, 1);
    font-size: 28px;
    height: 75px;
    line-height: 75px;
  }
  .change-list-wrap {
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
  .font-s{
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 28px;
    width: 38px;
    height: 76px;
    line-height: 45px;
    text-align: center;
    z-index: 2;
  }
  &::after {
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    color: #fff;
    //   line-height: 0px;
    height: 0;
    width: 0;
    //   background: rgba(52, 184, 239, 1);
    display: block;
    font-size: 28px;
    border: 38px solid rgba(52, 184, 239, 1);
    border-left: 38px solid transparent;
    border-bottom: 38px solid transparent;
  }
}
</style>
