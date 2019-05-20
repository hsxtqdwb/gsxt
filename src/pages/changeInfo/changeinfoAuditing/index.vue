<template>
  <div id="apply-sign">
    <div class="apply-sign-wrap">
      <div>
        <Step class="auditing-step" :index="1" :step="2"></Step>
      </div>
      <div class="apply-sign-tip">
        <p>
          <span>变更申请办理</span>
          <span>{{new Date().getFullYear()}}年{{new Date().getMonth()+1}}月{{new Date().getDate()}}日</span>
        </p>
        <p>请认真填写核实下列资料</p>
      </div>
      <p class="apply-sign-title">变更前信息</p>
      <template v-if="userData">
        <div class="apply-sing-msg">
          <p>用户编码</p>
          <van-field :disabled="disable" v-model="userData.USER_NO" placeholder="请输入用户编码"/>
          <p>用户名称</p>
          <van-field :disabled="disable" v-model="userData.NAME" placeholder="请输入用户名称"/>
          <p>用户地址</p>
          <van-field :disabled="disable" v-model="userData.ADDRESS" placeholder="请输入用户地址"/>
        </div>
      </template>
      <p class="apply-sign-title">变更后信息</p>
      <div class="apply-sing-msg">
        <p>用户名称</p>
        <van-field v-model="params.CHANGE_USER_NAME" placeholder="请输入用户名称"/>
        <p>联系人</p>
        <van-field v-model="params.CHANGE_LINK_MAN" placeholder="请输入真实姓名"/>
        <p>联系人电话</p>
        <van-field maxLength="11" v-model="params.CHANGE_PHONE" placeholder="请输入手机号（非常重要用于各项身份鉴权）"/>
        <!-- <p>验证码</p>
        <van-field v-model="value7" placeholder="请输入您手机收到得验证码"/> -->
        <p>身份证号码</p>
        <van-field maxLength="18" v-model="params.CHANGE_ID_CARD_NO" placeholder="请输入您的身份证号码"/>
        <p>申请理由</p>
        <van-field v-model="params.APPLY_REASON" placeholder="请输入申请理由"/>
      </div>
    </div>
    <div class="apply-sign-wrap">
      <p class="apply-sign-title">证件资料</p>
      <div class="apply-sing-content-bottom">
        <p>1.您的证件信息需要提交审核才能通过</p>
        <p>2.以下图片上传部分，支持JPG、JEPG、PNG和BMP格式的图片格式，文件大小在1K和5M之间</p>
      </div>
      <van-uploader :after-read="(file)=>onRead('one',file)">
        <img :src="params.PROPERTY_CERT?params.PROPERTY_CERT:require('../../../assets/images/up/f.png')">
      </van-uploader>
      <van-uploader :after-read="(file)=>onRead('tow',file)">
        <img :src="params.CARD_OPPOSITE_IMAGE?params.CARD_OPPOSITE_IMAGE:require('../../../assets/images/up/s.png')">
      </van-uploader>
      <van-uploader :after-read="(file)=>onRead('three',file)">
        <img :src="params.CARD_POSITIVE_IMAGE?params.CARD_POSITIVE_IMAGE:require('../../../assets/images/up/sf.png')">
      </van-uploader>
    </div>
    <div @click="applyChange" class="apply-sign-save">
      提交审核
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Step from "components/step/step";
import { Field, Uploader, Toast } from "vant";
Vue.use(Field).use(Uploader).use(Toast);
import sfzz from "../../../assets/images/up/sf.png";
import sfzf from "../../../assets/images/up/s.png";
import fcz from "../../../assets/images/up/f.png";
import { getItem } from '../../../utils';
export default {
  data() {
    return {
      userData:null,
      disable:true,
      params:{
        APPLY_REASON:"",
        CHANGE_USER_NAME:"",
        CHANGE_LINK_MAN:"",
        CHANGE_PHONE:"",
        CHANGE_ID_CARD_NO:"",
        PROPERTY_CERT:null,
        CARD_OPPOSITE_IMAGE:null,
        CARD_POSITIVE_IMAGE:null,
      }
    };
  },
  mounted(){
    this.getUserInfo()
  },
  components: {
    Step
  },
  methods: {
    applyChange(){
      const {APPLY_REASON,
          CHANGE_USER_NAME,
          CHANGE_LINK_MAN,
          CHANGE_PHONE,
          CHANGE_ID_CARD_NO,
          PROPERTY_CERT,
          CARD_OPPOSITE_IMAGE,
          CARD_POSITIVE_IMAGE,} = this.params
          if(!CHANGE_USER_NAME){
            Toast('请输入变更后的用户名称')
            return
          } else if(!CHANGE_LINK_MAN){
            Toast('请输入联系人')
            return
          } else if(!CHANGE_PHONE){
            Toast('请输入联系电话')
            return
          } else if(!PROPERTY_CERT){
            Toast('请上传房产证照片')
            return
          } else if(!CARD_OPPOSITE_IMAGE){
            Toast('请上传身份证反面照')
            return
          } else if(!APPLY_REASON){
            Toast('请上传身份证正面照')
            return
          }
        this.changeUserInfo()
    },
    onRead(type,file) {
      switch(type){
        case 'one':
          this.params.PROPERTY_CERT = file.content
          break;
        case 'tow':
          this.params.CARD_OPPOSITE_IMAGE = file.content
          break;
        case 'three':
          this.params.CARD_POSITIVE_IMAGE = file.content
          break;    
      }
    },
    //获取用户信息
    getUserInfo(){
      const OPEN_ID = getItem('OPEN_ID')
      this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10006&grantcode=88888888`,{
        OPEN_ID
      }).then(res =>{
        if(res.invokeResultCode === '000'){
          this.userData = res.result
        }
      })
    },
    //请求变更
    changeUserInfo(){
      const OPEN_ID = getItem('OPEN_ID')
      console.log(this.params)
      this.http.post(`/sw/metadata/DataSerController/getdata.do?servicecode=10014&grantcode=88888888&OPEN_ID=${OPEN_ID}`,{
        
        USER_NAME:this.userData.NAME,
        ADDRESS:this.userData.ADDRESS,
          USER_NO:this.userData.USER_NO,
        ...this.params,
      }).then(res=>{
        if(res.invokeResultCode==='000'){
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
#apply-sign {
  width: 100%;
}

.apply-sign-save {
  width: 680px;
  height: 90px;
  margin: 35px;
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
    text-align: center;
  // input {
  //   width: 680px;
  //   height: 90px;
  //   border: none;
  //   background: linear-gradient(
  //     90deg,
  //     rgba(52, 184, 239, 1),
  //     rgba(90, 206, 251, 1)
  //   );
  //   border-radius: 5px;
  //   font-size: 28px;
  //   font-weight: bold;
  //   color: #ffffff;
  //   line-height: 90px;
  // }
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
