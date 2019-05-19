<template>
  <div>
    <page-head title="绑定用户"></page-head>

    <div class="bind-wrap">
      <div class="bind-list" @click="getUserList">已绑定用户列表</div>
      <div class="bind-input" v-if="userData">
        <p class="bind-info">绑定信息</p>
        <p class="num-p">给水号</p>
        <p class="bind-msg">{{userData.USER_NO}}</p>
        <p class="num-p">用户名称</p>
        <p class="bind-msg">{{userData.NAME}}</p>
        <p class="num-p">用户地址</p>
        <p class="bind-msg">{{userData.ADDRESS}}</p>
        <p class="num-p">手机号码</p>
        <p class="bind-msg">{{userData.PHONE}}</p>
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
      <button
      v-if="userData"
        @click="bindUserNo(userData.IS_BIND,$event)"
        :class="['bind-save',userData&&userData.IS_BIND==='Y'?'bind':'']"
      >立即绑定</button>
    </div>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
import Vue from "vue";
import { Field, Toast } from "vant";
import { getItem } from "../../utils";
Vue.use(Field).use(Toast);
export default {
  data() {
    return {
      userData: null
    };
  },
  mounted() {
    this.getUserNo();
  },
  methods: {
    getUserList() {
      this.$router.push(`/taggleUser`);
    },
    bindUserNo(flag, ev) {
      ev.preventDefault();
      if (flag === "Y") {
        Toast("此给水号已绑定");
        return;
      }
      this.bindUser();
    },
    bindUser() {
      const OPEN_ID = getItem("OPEN_ID");
      const USER_NO = this.$route.params.id;
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10002&grantcode=88888888`,
          {
            OPEN_ID,
            USER_NO
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            Toast.success(res.msg);
          } else {
            Toast.fail(res.msg);
          }
        });
    },
    getUserNo() {
      const USER_NO = this.$route.params.id;
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10001&grantcode=88888888`,
          {
            USER_NO
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (!res.result) {
              Toast('查无此用户')
            }
            this.userData = res.result;
          } else {
            Toast.fail(res.msg);
          }
        });
    }
  },
  beforeDestroy(){
    Toast.clear()
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.bind-wrap {
  margin-top: 110px;
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
  .bind-input {
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
    .bind-msg {
      color: #666666;
      font-size: 26px;
      line-height: 40px;
      padding: 20px 0;
      border-bottom: solid 1px #eeeeee;
      font-weight: 500;
    }
    .bind-tip {
      padding-top: 20px;
      p {
        font-size: 24px;
        color: #999999;
        line-height: 30px;
      }
    }
  }
  .bind-save {
    width: 680px;
    height: 90px;
    background: linear-gradient(
      90deg,
      rgba(52, 184, 239, 1),
      rgba(90, 206, 251, 1)
    );
    border-radius: 5px;
    margin: 0 30px 30px 30px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
    &.bind {
      background: #e6e6e6;
    }
  }
}
</style>
