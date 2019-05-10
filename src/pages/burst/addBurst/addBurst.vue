<template>
  <div>
    <page-head title="暴漏举报"></page-head>
    <div class="apply-content-wrap">
      <div class="apply-content-title">基本信息</div>
      <div class="apply-content">
        <div class="apply-content-list">
          <p class="apply-content-p">联系人</p>
          <p class="apply-content-value">
            <van-field v-model="params.LINK_MAN" :required="true" placeholder="请输入真实姓名"></van-field>
          </p>
        </div>
      </div>
      <div class="apply-content">
        <div class="apply-content-list">
          <p class="apply-content-p">手机号码</p>
          <p class="apply-content-value">
            <van-field :required="true" type="tel" v-model="params.PHONE" placeholder="请输入手机号码" maxlength="11"/>
          </p>
        </div>
      </div>
      <div class="apply-content">
        <div class="apply-content-list">
          <p class="apply-content-p">地址</p>
          <p class="apply-content-value">
            <van-field :required="true" v-model="params.ADDRESS" placeholder="请输入真实地址"></van-field>
          </p>
        </div>
      </div>
      <div class="apply-content">
        <div class="apply-content-list">
          <p class="apply-content-p">类型</p>
          <div class="apply-content-value apply-content-type">
            <div @click="chooseType(1,$event)" class="type">报漏</div>
            <div @click="chooseType(2,$event)" class="type">举报</div>
          </div>
        </div>
      </div>
      <div class="apply-content-title">问题描述</div>
      <div class="apply-content">
        <div class="apply-content-list">
          <p class="apply-content-p">问题描述</p>
          <p class="apply-content-value">
            <van-field :required="true" v-model="params.PROBLEM_DESC" type="textarea" placeholder="问题描述" autosize></van-field>
          </p>
        </div>
      </div>
    </div>
    <div class="apply-content-wrap">
      <div class="apply-content-title apply-content-title2">证明文件</div>
      <van-uploader :after-read="onRead">
        <van-icon v-if="!params.FILE_URL" name="photograph"/>
        <img v-else :src="params.FILE_URL">
      </van-uploader>
    </div>
    <div @click="submitInfo" class="sub-btn">提交信息</div>
  </div>
</template>
<script>
import PageHead from "../../../components/pageHead/pageHead";
import Vue from "vue";
import { Field, Button, Icon, Uploader, Toast } from "vant";
import { getItem, hasClass, addClass, removeClass } from "../../../utils";
Vue.use(Field)
  .use(Button)
  .use(Uploader)
  .use(Icon)
  .use(Toast);
export default {
  data() {
    return {
      params: {
        LINK_MAN: "",
        PHONE: "",
        ADDRESS: "",
        PROBLEM_DESC: "",
        TYPE: 0,
        FILE_URL: ""
      }
    };
  },
  methods: {
    chooseType(active, ev) {
      if (active !== this.TYPE) {
        this.params.TYPE = active;
        const nodes = document.querySelectorAll(".type");
        Object.keys(nodes).map(item => {
          removeClass(nodes[item], "active");
        });
        addClass(ev.target, "active");
      }
    },
    onRead(file, detail) {
      this.params.FILE_URL = file.content;
    },
    submitInfo() {
      const {
        TYPE,
        PHONE,
        LINK_MAN,
        PROBLEM_DESC,
        ADDRESS,
        FILE_URL
      } = this.params;
      if (!PHONE) {
        Toast("请输入手机号吗");
        return
      } else if (!LINK_MAN) {
        Toast("请输入真实姓名");
         return
      } else if (!PROBLEM_DESC) {
        Toast("请输入问题描述");
         return
      } else if (!ADDRESS) {
        Toast("请输入地址");
         return
      } else if (!TYPE) {
        Toast("请输入类型");
         return
      }
      const OPEN_ID = getItem("OPEN_ID");
      const param = {
        TYPE,
        PHONE,
        LINK_MAN,
        PROBLEM_DESC,
        ADDRESS,
        OPEN_ID
      };
      if(FILE_URL){
          param.FILE_URL=FILE_URL
      }
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10022&grantcode=88888888`,
          {...param}
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            Toast(res.msg);
            this.initParams();
          } else {
            Toast(res.msg);
          }
        });
    },
    //初始化参数状态
    initParams() {
      this.params = {
        LINK_MAN: "",
        PHONE: "",
        ADDRESS: "",
        PROBLEM_DESC: "",
        TYPE: 0,
        FILE_URL: ""
      };
    }
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.apply-content-type {
  display: flex;
}
.type {
  box-sizing: border-box;
  width: 104px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  color: #d3d3d3;
  border: 1px solid #d3d3d3;
  text-align: center;
  &.active {
    color: #fff;
    background: #34b8ef;
    border: 1px solid #34b8ef;
  }
  &:nth-of-type(2) {
    margin-left: 20px;
  }
}
.apply-content-wrap {
  background: #fff;
  border-radius: 10px;
  width: 680px;
  box-sizing: border-box;
  padding: 0 30px;
  margin: 30px auto 0;
  overflow: hidden;
  .apply-content-title {
    color: rgba(51, 51, 51, 1);
    font-size: 28px;
    margin-top: 50px;
  }
  .apply-content {
    margin-top: 30px;
    .apply-content-list {
      border-bottom: 1px solid rgba(238, 238, 238, 1);
      .apply-content-p {
        color: rgba(153, 153, 153, 1);
        font-size: 24px;
      }
      .apply-content-value {
        color: rgba(102, 102, 102, 1);
        font-size: 26px;
        padding: 30px 0;
        & /deep/ .van-field__control {
          font-size: 26px;
          height: 26px;
          line-height: 26px;
        }
        & /deep/ .van-button {
          color: rgba(52, 184, 239, 1);
          font-size: 26px;
          border: none;
        }
        & /deep/ .van-hairline--top-bottom::after {
          border-width: 0;
        }
      }
    }
  }
  .apply-content-title2 {
    margin: 30px 0;
  }
}
.sub-btn {
  background: rgba(54, 188, 240, 1);
  border-radius: 5px;
  width: 680px;
  margin: 50px auto 0;
  line-height: 90px;
  color: #fff;
  font-size: 28px;
  text-align: center;
}
</style>
