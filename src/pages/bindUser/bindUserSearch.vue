<template>
  <div>
    <page-head title="绑定用户"></page-head>

    <div class="bind-wrap">
      <div class="bind-list">已绑定用户列表</div>
      <div class="bind-search">
        <p class="bind-info">绑定信息</p>
        <p class="num-p">给水号</p>
        <div class="input-sid">
          <van-field placeholder="请输入给水号"></van-field>
          <span class="input-search">立即查询</span>
        </div>
        <div class="bind-tip">
          <p>温馨提示：</p>
          <p>1.同一微信号最多只能绑定6个用户</p>
          <p>2.已绑定用户请直接点击"水费缴纳"，选择“我要缴费”</p>
          <p>
            3.任何单位或者个人未经户主许可，不得绑定他人账户，因
            此而造成的损失和法律责任将由绑定者承担
          </p>
          <p>
            4.如您对以上信息有疑问，请您拨打深圳供水热线0755-8
            7766555
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
export default {
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.bind-wrap {
  .bind-list {
    position: relative;
    background: #fff;
    padding: 0 30px;
    width: 680px;
    height: 84px;
    line-height: 84px;
    margin: 30px 35px;
    font-size: 24px;
    color: #666666;
    box-sizing: border-box;
    border-radius: 10px;
    &::after {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      content: "";
      display: block;
      width: 15px;
      height: 28px;
      background-image: url("../../assets/images/burst/arrow@2x.png");
      background-repeat: no-repeat;
      background-size: 15px 28px;
    }
  }
  .bind-search {
    width: 680px;
    margin: 30px 35px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px;
    .bind-info {
      font-size: 28px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 30px;
    }
    .num-p {
      font-size: 24px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #999999;
      margin-top: 25px;
    }
    .input-sid {
      position: relative;
      /deep/.van-cell {
        padding: 20px 0 30px 0;
      }
      .input-search {
        position: absolute;
        right: 0;
        top: 18px;
        color: #34b8ef;
        padding: 10px;
        font-size: 26px;
      }
    }
    .bind-tip {
      padding: 30px 0;
      p {
        font-size: 24px;
        color: #999999;
        line-height: 30px;
      }
    }
  }
}
</style>
