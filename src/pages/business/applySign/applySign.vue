<template>
  <div id="apply-sign">
    <div class="apply-sign-wrap">
      <div>
        <Step class="auditing-step" :index="1" :step="2"></Step>
      </div>
      <div class="apply-sign-tip">
        <p>
          <span>申请签约办理</span>
          <span>{{new Date().getFullYear()}}年{{new Date().getMonth()+1}}月{{new Date().getDate()}}日</span>
        </p>
        <p>请认真填写核实下列资料</p>
      </div>
      <p class="apply-sign-title">一户一表供用水协议</p>
      <div class="apply-sing-msg">
        <p>甲方</p>
        <van-field :disabled="true" v-model="value1" placeholder="请输入甲方名称"/>
        <p>地址</p>
        <van-field :disabled="true" v-model="value2" placeholder="请输入甲方地址"/>
        <p>乙方</p>
        <van-field  v-model="params.NAME" placeholder="请输入用户名称"/>
        <p>地址</p>
        <van-field v-model="params.ADDRESS" placeholder="请选择地址"/>
        <p>详细地址</p>
        <van-field  v-model="params.ADDRESS_DETAIL" placeholder="请输入您的详细地址"/>
        <p>联系人</p>
        <van-field  v-model="params.LINK_MAN" placeholder="请输入联系人姓名"/>
        <p>联系电话</p>
        <van-field  v-model="params.PHONE" maxLength="11" type="tel" placeholder="请输入您的联系方式"/>
        <!-- <p>验证码</p> -->
        <!-- <van-field  v-model="params.value8" placeholder="请输入您手机收到得验证码"/> -->
        <p>身份证号码</p>
        <van-field  v-model="params.ID_CARD_NO" placeholder="请输入您的身份证号码"/>
      </div>
      <div class="apply-sing-content">
        <p>
          深圳市自来水公司（以下简称甲方），为确保一户一表用户
          （以下简称乙方）的正常供水，设施的正常维护，水费及时
          收缴，甲乙双方自愿签订协议如下:
        </p>
        <p>一、乙方自愿选择缴费方式：网络上支付</p>
        <p>
          二、线上支付用户：详情请关注公众号：************，
          绑定用户信息，查询水费后微信、支付宝、公众号缴费。
        </p>
        <p>
          三、乙方如需水费收据或发票，应在扣费线上支付当月25
          号前到甲方客户服务中心领取。
        </p>
        <p>
          四、乙方应遵守《青岛市城市供水条例》关于“城市居民生
          活用水适时实行阶梯式计量水价”，“用户应当按照实际用
          水量和规定时间缴纳水费”，“乙方接到短信用水量告知后
          无正当理由仍未交水费，甲方将对其限时供水并按0.5%不
          超过本金之日收取违约金”的规定。
        </p>
        <p>
          五、乙方对水费有异议或变更用户名称、联系方式等信息，
          请持有效身份证到甲方辖区供水服务所或者跨区域网点咨询
          或办理相关手续。
        </p>
        <p>
          六、乙方停止用水三个月以上，为了防止跑水或者因水压波
          动导致水表指针异常等损失，应及时到辖区服务所或网点办
          理暂停用水手续，或者自行将水表前阀门关闭。
        </p>
        <p>
          七、甲方在正常情况下应当保证不间断供水，应当将其供水
          区域、销售价格、服务事项的办理程序、服务承诺和供水水
          质内容向社会公开。
        </p>
        <p>
          八、本协议授权事项未尽事宜或纠纷由双方是协商解决，协
          商不成，可按有关法律规定解决。本协议一式贰份，甲乙双
          方各执壹份；本协议自签订之日起生效。
        </p>
      </div>
    </div>
    <div class="apply-sign-wrap">
      <p class="apply-sign-title">证件资料</p>
      <div class="apply-sing-content-bottom">
        <p>1.您的证件信息需要提交审核才能通过</p>
        <p>2.以下图片上传部分，支持JPG、JEPG、PNG和BMP格式的图片格式，文件大小在1K和5M之间</p>
      </div>
      <van-uploader :max-size="maxSize" :after-read="(file,detail)=>onRead('one',file,detail)">
        <img :src="CARD_POSITIVE_IMAGE?CARD_POSITIVE_IMAGE:require('../../../assets/images/up/f.png')">
      </van-uploader>
      <van-uploader :max-size="maxSize" :after-read="(file,detail)=>onRead('tow',file,detail)">
        <img :src="CARD_OPPOSITE_IMAGE?CARD_OPPOSITE_IMAGE:require('../../../assets/images/up/s.png')">
      </van-uploader>
      <van-uploader :max-size="maxSize" :after-read="(file,detail)=>onRead('three',file,detail)">
        <img :src="PROPERTY_CERT?PROPERTY_CERT:require('../../../assets/images/up/sf.png')">
      </van-uploader>
    </div>
    <div class="apply-sign-save">
      <van-button @click="applySign" type="info" size="large">提交审核</van-button>
    </div>
  </div>
</template>
<script>

import Vue from "vue";
import Step from "components/step/step";
import { Field,Toast, Uploader,Button  } from "vant";
Vue.use(Field).use(Uploader).use(Toast).use(Button );
import {getItem} from '../../../utils/index.js'
import sfzz from "../../../assets/images/up/sf.png";
import sfzf from "../../../assets/images/up/s.png";
import fcz from "../../../assets/images/up/f.png";
export default {
    name:"applysign",
  data() {
    return {
      maxSize:5000000,
      PROPERTY_CERT: null,
      CARD_OPPOSITE_IMAGE: null,
      CARD_POSITIVE_IMAGE: null,
      value1: "昌巴市自来水公司",
      value2: "昌巴市北海路486号",
      params:{
        NAME: "",
        ADDRESS: "",
        ADDRESS_DETAIL: "",
        LINK_MAN: "",
        PHONE: "",
        value8: "",
        ID_CARD_NO: ""
      }
    };
  },
  mounted(){
  },
  components: {
    Step
  },
  methods: {
    applySign(){
      const {NAME,ADDRESS,ADDRESS_DETAIL,LINK_MAN,PHONE,value8,ID_CARD_NO,} = this.params
      const {CARD_POSITIVE_IMAGE,CARD_OPPOSITE_IMAGE,PROPERTY_CERT } = this
       if(!NAME){
          Toast('请输入乙方用户名称')
          return
      }else if(!ADDRESS){
          Toast('请输入乙方地址')
          return
      }else if(!ADDRESS_DETAIL){
          Toast('请输入乙方详细地址')
          return
      }else if(!LINK_MAN){
          Toast('请输入乙方联系人姓名')
          return
      }else if(!PHONE){
          Toast('请输入乙方联系方式')
          return
      }else if(!ID_CARD_NO){
          Toast('请输入身份证号码')
          return
      }
      if(!CARD_POSITIVE_IMAGE||!CARD_OPPOSITE_IMAGE||!PROPERTY_CERT){
        Toast('请上传证件照')
        return
      }
      const OPEN_ID = getItem('OPEN_ID')
      let formData = new FormData()
      let obj = {
        NAME,
        ADDRESS:ADDRESS+ADDRESS_DETAIL,
        LINK_MAN,
        PHONE,
        ID_CARD_NO,
        PROPERTY_CERT,
        CARD_OPPOSITE_IMAGE,
        CARD_POSITIVE_IMAGE
      }
      Object.keys(obj).map(item=>{
        formData.append(item,obj[item])
      })
      this.http.post(`/sw/metadata/DataSerController/getdata.do?servicecode=10012&grantcode=88888888&OPEN_ID=${OPEN_ID}`,formData).then(res=>{
        if(res.invokeResultCode ==='000'){
          Toast.success(res.msg)
          this.params={
            NAME: "",
            ADDRESS: "",
            ADDRESS_DETAIL: "",
            LINK_MAN: "",
            PHONE: "",
            value8: "",
            ID_CARD_NO: ""
          }
            this.PROPERTY_CERT=null
            this.CARD_OPPOSITE_IMAGE= null
            this.CARD_POSITIVE_IMAGE=null
        }else{
          Toast.error(res.msg)
        }
      })
    },
    onRead(type,file) {
      switch(type){
        case 'one':
          this.CARD_POSITIVE_IMAGE = file.content;
          break;
        case 'tow':
          this.CARD_OPPOSITE_IMAGE = file.content;
          break;
        case 'three':
          this.PROPERTY_CERT = file.content;
          break;    
      }
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
