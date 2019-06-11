<template>
  <div class="payment">
    <page-head title="充值缴费"></page-head>
    <div class="user">
      <span>用户名</span>
      <span v-if="userData">{{userData.NAME}}</span>
    </div>
    <div class="p">
      <p>尊敬的用户：账户金额是您每个月缴费的实时查询账号，为防止因为欠费关停水阀而无水可用，您可提前预付较多金额在您的账户上，当该账户欠费-50.00元时，我们会自动关闭水阀，敬请留意！</p>
    </div>
    <div class="content">
      <div class="title">充值面额</div>
      <div class="price">
        <span
          @click="active(item,index)"
          :class="index==aClass?'active':''"
          v-for="(item , index) in price"
          :key="index"
        >{{item}}元</span>
      </div>
      <div class="else-price">输入其它金额</div>
      <input class="userInput" v-model="yourPrice" placeholder="请输入您要充值的金额">
      <div class="arrears">
        <p v-if="userData">
          <span>您已欠费:</span>
          <span class="i-money" v-if="userData.ACCOUNT_AMOUNT<0">{{Math.abs(userData.ACCOUNT_AMOUNT)}}</span>
          <span class="i-money" v-else>0</span>
          元
        </p>
        <p>充值欠费</p>
      </div>
      <div @click="rechargeAmount" class="save">立即缴费</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { getItem, setItem } from "../../utils";
import { Toast,Dialog } from "vant";
Vue.use(Toast).use(Dialog);
export default {
  components: {
    PageHead
  },
  data() {
    return {
      price: [100, 300, 500, 1000],
      aClass: 0,
      yourPrice: 100,
      userData: null,
      params:null
    };
  },
  mounted() {
    this.getUserData();
    let URL = window.location.href
    this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10026&grantcode=88888888`,{
      URL
    }).then(res=>{
      if(res.invokeResultCode === '000'){
        const {appid,nonceStr,signature,timestamp} = res.result
        wx.config({
          // debug: true,
          appId:appid,
          nonceStr,
          signature,
          timestamp,
          jsApiList: ['chooseWXPay']
        })
      }else{
        Toast.fail(res.msg)
      }
    })
  },
  methods: {
    active(i, index) {
      this.aClass = index;
      this.yourPrice = i;
    },
    getUserData() {
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10006&grantcode=88888888`,
          {
            OPEN_ID
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if(!res.result||!res.result.USER_NO){
             Dialog.alert({
                message: '您还未绑定给水号，请前往绑定用户'
              }).then(() => {
              this.$router.push(`/`)
              });
            }
            this.userData = res.result;
          } else {
            Toast.fail(res.msg);
          }
        });
    },
    rechargeAmount() {
      const OPEN_ID = getItem("OPEN_ID");
      const _this = this
      this.http
        .get(`/sw/wxpay?OPEN_ID=${OPEN_ID}`, {
          MONEY: this.yourPrice,
          BODY_DESC: "昌邑市自来水公司",
          USER_NO:this.userData.USER_NO
        })
        .then(res => {
          if (res.success === true) {
            this.params = {
              OPEN_ID,
              MONEY:this.yourPrice,
              BODY_DESC:"昌邑市自来水公司"
            }
            setItem('amountData',this.params)
            // timestamp times
            // nonceStr nonce
            // package packg
            // signType signType
            // paySign sign
            const {
              times:timeStamp,
              nonce:nonceStr,
              packg,
              signType,
              sign:paySign,
              appId
            } = res.result
            wx.chooseWXPay(
              {
              // appId,
              timestamp:timeStamp,
              package:packg,
              nonceStr,
              signType,
              paySign,
              success:(res)=>{
                this.$router.push('/user')
               const amountData = getItem('amountData')
                this.rechargeSuccess(amountData)
              }
            })
          } else {
            Toast.fail("出错");
          }
        });
    },
    rechargeSuccess(params){
      const OPEN_ID = getItem('OPEN_ID')
      this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10008&grantcode=88888888&OPEN_ID=${OPEN_ID}`,{
        USER_NO:this.userData.USER_NO,
        ACCOUNT_AMOUNT:params.MONEY
      }).then(res=>{
        if(res.invokeResultCode === '000'){
          Toast.success(res.msg)
        }else{
          Toast.fail(res.msg)
        }
      })
    }
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
.payment {
  background: #eeeeee;
  height: 100vh;
}
.user {
  margin-top: 20px;
  padding: 0 35px;
  height: 85px;
  line-height: 85px;
  background: #ffffff;
  span {
    float: left;
    font-size: 28px;
    color: #333333;
    &:last-of-type {
      float: right;
      color: #666666;
    }
  }
}
.p {
  padding: 20px 35px;
  p {
    font-size: 24px;
    color: rgba(153, 153, 153, 1);
    line-height: 30px;
  }
}
.content {
  background: #ffffff;
  padding: 0 35px;
  .title {
    padding: 30px 0 10px 0;
    color: #999999;
    font-size: 24px;
  }
  .price {
    overflow: hidden;
    span {
      display: inline-block;
      width: 212px;
      height: 80px;
      margin: 20px 20px 0 0;
      line-height: 80px;
      text-align: center;
      border: solid 1px #d3d3d3;
      border-radius: 10px;
      color: #333333;
      font-size: 24px;
      &:nth-of-type(3n) {
        box-sizing: border-box;
        margin-right: 0;
      }
      &.active {
        border: solid 1px #34b8ef;
        color: #34b8ef;
      }
    }
  }
  .else-price {
    padding: 26px 0;
    font-size: 24px;
    color: #999999;
  }
  .userInput {
    height: 80px;
    width: 620px;
    padding: 0 30px;
    font-size: 24px;
    color: #999999;
    border: solid 1px #d3d3d3;
    margin-bottom: 30px;
    border-radius: 10px;
    line-height: 80px;
    outline: none;
    &::placeholder {
      font-size: 24px;
      color: #999999;
    }
  }
  .arrears {
    border-top: solid 1px #eeeeee;
    line-height: 88px;
    overflow: hidden;
    p {
      color: #333333;
      font-size: 28px;
      float: left;
      &:last-of-type {
        float: right;
        color: #34b8ef;
      }
      .i-money {
        color: orange;
      }
    }
  }
  .save {
    width: 680px;
    height: 90px;
    line-height: 90px;
    background: linear-gradient(
      90deg,
      rgba(52, 184, 239, 1),
      rgba(90, 206, 251, 1)
    );
    border-radius: 5px;
    font-size: 28px;
    margin: 50px 0;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    text-align: center;
  }
}
</style>

