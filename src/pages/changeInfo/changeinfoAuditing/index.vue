<template>
  <div id="apply-sign">
    <div class="apply-sign-wrap">
      <div>
        <Step class="auditing-step" :index="1" :step="2"></Step>
      </div>
      <div class="apply-sign-tip">
        <p>
          <span>变更申请办理</span>
          <span>2017年12月12日</span>
        </p>
        <p>请认真填写核实下列资料</p>
      </div>
      <p class="apply-sign-title">变更前信息</p>
      <div class="apply-sing-msg">
        <p>用户编码</p>
        <van-field v-model="value1" placeholder="请输入用户编码"/>
        <p>用户名称</p>
        <van-field v-model="value2" placeholder="请输入用户名称"/>
        <p>用户地址</p>
        <van-field v-model="value3" placeholder="请输入用户地址"/>
      </div>
      <p class="apply-sign-title">变更后信息</p>
      <div class="apply-sing-msg">
        <p>用户名称</p>
        <van-field v-model="value4" placeholder="请输入用户名称"/>
        <p>联系人</p>
        <van-field v-model="value5" placeholder="请输入真实姓名"/>
        <p>联系人电话</p>
        <van-field v-model="value6" placeholder="请输入手机号（非常重要用于各项身份鉴权）"/>
        <p>验证码</p>
        <van-field v-model="value7" placeholder="请输入您手机收到得验证码"/>
        <p>身份证号码</p>
        <van-field v-model="value8" placeholder="请输入您的身份证号码"/>
        <p>申请理由</p>
        <van-field v-model="value9" placeholder="请输入申请理由"/>
      </div>
    </div>
    <div class="apply-sign-wrap">
      <p class="apply-sign-title">证件资料</p>
      <div class="apply-sing-content-bottom">
        <p>1.您的证件信息需要提交审核才能通过</p>
        <p>2.以下图片上传部分，支持JPG、JEPG、PNG和BMP格式的图片格式，文件大小在1K和5M之间</p>
      </div>
      <van-uploader :after-read="onRead">
        <img :src="sfzz">
      </van-uploader>
      <van-uploader :after-read="onRead">
        <img :src="sfzf">
      </van-uploader>
      <van-uploader :after-read="onRead">
        <img :src="fcz">
      </van-uploader>
    </div>
    <div class="apply-sign-save">
      <input type="button" value="提交审核">
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Step from "components/step/step";
import { Field, Uploader } from "vant";
Vue.use(Field).use(Uploader);
import sfzz from "../../../assets/images/up/sf.png";
import sfzf from "../../../assets/images/up/s.png";
import fcz from "../../../assets/images/up/f.png";
export default {
  data() {
    return {
      sfzz: sfzz,
      sfzf: sfzf,
      fcz: fcz,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: ""
    };
  },
  components: {
    Step
  },
  methods: {
    onRead(file) {
      console.log(file);
      this.sfzz = file.content;
    }
  }
};
</script>
<style lang="less" scoped>
#apply-sign {
  width: 100%;
}

.apply-sign-save {
  width: 680px;
  height: 90px;
  margin: 35px;
  input {
    width: 680px;
    height: 90px;
    border: none;
    background: linear-gradient(
      90deg,
      rgba(52, 184, 239, 1),
      rgba(90, 206, 251, 1)
    );
    border-radius: 5px;
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
    line-height: 90px;
  }
}
.van-uploader {
  width: 296px;
  height: 188px;
  img {
    width: 296px;
    height: 188px;
  }
}
.van-tabs__content {
  overflow: hidden;
  .apply-sign-wrap {
    &:last-of-type {
      margin-bottom: 15px;
    }
    width: 620px;
    margin: 60px auto 0;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
    background: #fff;
    padding: 0 30px 30px 30px;
    .auditing-step {
      width: 680px;
      height: 116px;
      display: flex;
      justify-items: center;
      padding-left: 150px;
      box-sizing: border-box;
    }
    .apply-sign-tip {
      padding: 40px 30px;
      height: 80px;
      border: solid rgba(52, 184, 239, 0.07) 1px;
      box-shadow: 0px 2px 16px 4px rgba(52, 184, 239, 0.07);
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
    .apply-sign-title {
      color: #333333;
      font-size: 28px;
      line-height: 106px;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .apply-sing-msg {
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
    }
    .apply-sing-content {
      p {
        font-size: 24px;
        font-weight: 500;
        color: #666666;
        line-height: 42px;
        text-indent: 2em;
      }
    }
    .apply-sing-content-bottom {
      p {
        font-size: 24px;
        font-weight: 500;
        color: #666666;
        line-height: 42px;
      }
    }
  }
}
</style>
