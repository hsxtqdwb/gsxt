<template>
  <div class="payment">
    <div class="u_header">
      <i class="u_arrow_icon"></i>
      充值缴费
    </div>
    <div class="user">
      <span>用户名</span>
      <span>深圳市环保质量监督局</span>
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
        <p>
          你已欠费:
          <span>1111</span>元
        </p>
        <p>充值欠费</p>
      </div>
      <input type="button" class="save" value="立即缴费"/>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: [100, 300, 500, 1000],
      aClass: 0,
      yourPrice: null
    };
  },
  methods: {
    active(i, index) {
      this.aClass = index;
      console.log(i);
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
  height:100vh;
}
.u_header {
  text-align: center;
  font-size: 32px;
  height: 90px;
  line-height: 90px;
  width: 750px;
  background-color: #fff;
  position: relative;
  .u_arrow_icon {
    .images("l_arrow");
    width: 16px;
    height: 30px;
    display: block;
    position: absolute;
    top: 30px;
    left: 35px;
  }
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
.p{
  padding:20px 35px;
  p{
    font-size:24px;
    color:rgba(153,153,153,1);
    line-height:30px;
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
    height:80px;
    width: 620px;
    padding: 0 30px;
    font-size: 24px;
    color: #999999;
    border:solid 1px #d3d3d3;
    margin-bottom:30px;
    border-radius:10px;
    line-height:80px;
    outline:none;
    &::placeholder {
      font-size: 24px;
      color: #999999;
    }
  }
  .arrears {
    border-top:solid 1px #eeeeee;
    line-height:88px;
    overflow:hidden;
    p{
      color:#333333;
      font-size:28px;
      float:left;
      &:last-of-type{
        float:right;
        color:#34B8EF;
      }
      span{
        color:orange;
      }
    }
  }
  .save{
    width:680px;
    height:90px;
    background:linear-gradient(90deg,rgba(52,184,239,1),rgba(90,206,251,1));
    border-radius:5px;
    font-size:28px;
    margin:50px 0;
    color:#ffffff;
    border-radius:10px;
    border:none;
    outline:none;
  }
}

</style>

