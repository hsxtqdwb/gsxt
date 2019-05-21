<template>
  <div id="user">
    <page-head title="个人中心"></page-head>
    <div class="u-avatar-wrap">
      <div class="u-avatar">
        <img :src="avatar?avatar:'../../assets/images/index/avatar.jpg'" alt>
      </div>
      <div class="u-nick">{{nick}}</div>
    </div>
    <div class="u-content">
      <div class="u-left">户名</div>
      <div class="u-right">
        <div>{{userData.USER_NO}}</div>
        <i class="u-arrow"></i>
      </div>
    </div>
    <div class="u-content">
      <div class="u-left">用户名称</div>
      <div class="u-right mr-37">
        <div>{{userData.NAME}}</div>
      </div>
    </div>
    <div class="u-content">
      <div class="u-left">地址</div>
      <div class="u-right mr-37">
        <div>{{userData.ADDRESS}}</div>
      </div>
    </div>
    <div class="u-content">
      <div class="u-left u-flex">
        账户金额
        <i @click="taggleModal(true)" class="help"></i>
      </div>
      <div class="u-right mr-37">
        <div>{{userData.ACCOUNT_AMOUNT}}</div>
      </div>
    </div>
    <div class="u-btn" @click="payment">立即缴费</div>
    <help @close="taggleModal(false)" :visible="visible">
      <div class="hint">
        <div class="hint-title">提示</div>
        <p class="hint-contnet">
          尊敬的用户：账户金额是您每个月缴费的实
          时查询账号，为防止因为欠费关停水阀而无
          水可用，您可提前预付较多金额在您的账户
          上，当该账户欠费
          <span class="hint-amount">-50.00元</span>
          时，我们会自动
          关闭水阀，敬请留意！
        </p>
        <div @click="taggleModal(false)" class="hint-btn">
            知道了
        </div>
      </div>
    </help>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
import Help from "../../components/help/help";
import { getItem } from '../../utils';
export default {
  data() {
    return {
      visible: false,
      userData:{},
      nick:"",
      avatar:""
    };
  },
  mounted(){
    const OPEN_ID = getItem('OPEN_ID')
    const USER_INFO = getItem("USER_INFO");
    if (USER_INFO) {
      this.nick = USER_INFO.nickname;
      this.avatar = USER_INFO.headimgurl;
    }
    this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10006&grantcode=88888888`,{OPEN_ID}).then(res=>{
      if(res.invokeResultCode==='000'){
        this.userData = res.result
      }
    })
  },
  methods: {
    taggleModal(isShow) {
      this.visible = isShow;
    },
    payment(){
      this.$router.push('/payment')
    }
  },
  components: {
    PageHead,
    Help
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
.u-avatar-wrap {
  height: 178px;
  width: 738px;
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 110px;
  .u-avatar {
    width: 118px;
    height: 118px;
    border-radius: 59px;
    overflow: hidden;
    margin-left: 30px;
  }
  .u-nick {
    margin-left: 30px;
    color: rgba(51, 51, 51, 1);
    font-size: 32px;
  }
}
.u-content {
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 35px;
  background: #fff;
  margin-top: 20px;
  height: 86px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid rgba(238, 238, 238, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .u-left {
    line-height: 86px;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
  }
  &:nth-of-type(1) {
    border-top: none;
  }
  .u-arrow {
    .images("r_arrow");
    width: 15px;
    height: 27px;
    display: block;
    margin-left: 22px;
  }
  .u-right {
    color: rgba(102, 102, 102, 1);
    font-size: 28px;
    font-family: "PingFang-SC-Medium";
    display: flex;
  }
  .mr-37 {
    margin-right: 37px;
  }
  .help {
    .images("help");
    width: 30px;
    height: 30px;
    margin-left: 20px;
    display: block;
  }
  .u-flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
.u-btn {
  width: 680px;
  height: 90px;
  margin: 50px auto 0;
  color: #fff;
  background: rgba(54, 188, 240, 1);
  font-size: 28px;
  line-height: 90px;
  text-align: center;
}
.hint {
  width: 576px;
  height: 387px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.07);
  background: #fff;
  margin: 376px auto 0;
  box-sizing: border-box;
  overflow: hidden;
  .hint-title {
    color: rgba(51, 51, 51, 1);
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    font-size: 28px;
    margin: 50px 0 30px;
    text-align: center;
  }
  .hint-contnet {
        padding: 0 36px 30px;
    font-size: 26px;
    line-height: 35px;
    color: rgba(102, 102, 102, 1);
    .hint-amount{
        color: rgba(255, 156, 0, 1)
    }
  }
  .hint-btn{
      color: rgba(72, 188, 201, 1);
      font-size: 26px;
      font-family: "PingFang-SC-Bold";
      font-weight: bold;
      border-top:1px solid rgba(238, 238, 238, 1);
      height: 85px;
      line-height: 85px;
      text-align: center;
  }
}
</style>

