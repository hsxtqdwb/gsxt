<template>
  <div id="identity">
    <PageHead title="身份验证"></PageHead>
    <div class="i-content">
      <div class="i-userid">
        <p>
          <span>用户编码（编水号）</span>
          <span>0100030</span>
        </p>
      </div>
      <div class="i-form">
        <p>请输入手机号</p>
        <van-field v-model="value1" placeholder="请输入办理时的手机号"/>
      </div>
      <div class="i-form">
        <span @click="getCode" class="i-getCode">获取验证码</span>
        <p>手机号验证码</p>
        <van-field v-model="value2" placeholder="请输入您收到的验证码"/>
      </div>
      <p class="i-tip">验证码发送到签署一户一表协议联系人手机上</p>
      <input @click="save" class="i-save" type="button" value="提交">
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "components/pageHead/pageHead";
import { Field } from "vant";
Vue.use(Field);
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  components: {
    PageHead
  },
  methods: {
    getCode() {
      console.log("获取验证码");
    },
    save() {
      console.log("提交");
      console.log(this.value1);
      console.log(this.value2);
    }
  }
};
</script>
<style lang="less" scoped>
#identity {
  .i-content {
    margin-top: 20px;
    background: #ffffff;
    .i-userid {
      height: 88px;
      border-bottom: solid 1px #eeeeee;
      padding: 0 35px;
      line-height: 88px;
      p {
        overflow: hidden;
        span {
          font-size: 28px;
          &:first-of-type {
            float: left;
            color: #333333;
          }
          &:last-of-type {
            float: right;
            color: #666666;
          }
        }
      }
    }
    .i-form {
      padding: 0 35px;
      position: relative;
      border-bottom: solid 1px #eeeeee;
      /deep/ p {
        font-size: 24px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        line-height: 68px;
        border: none;
      }
      .van-cell {
        padding: 0 0;
        line-height: 68px;
        font-size: 26px;
        color: #666666;
        input {
          &::placeholder {
            color: #999999;
          }
        }
      }
      .i-getCode {
        display: inline-block;
        width: 130px;
        padding-right: 35px;
        line-height: 136px;
        height: 136px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 999;
        color: #34b8ef;
        font-size: 26px;
      }
    }
    .i-tip {
      font-size: 24px;
      color: #999999;
      line-height: 83px;
      padding: 0 35px;
    }
    .i-save {
      width: 680px;
      height: 90px;
      background: #34b8ef;
      margin: 35px;
      border: none;
      font-size: 28px;
      color: #ffffff;
      font-weight: bold;
      border-radius: 5px;
    }
  }
}
</style>
