<template>
  <div id="chgangesign">
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
      <p class="apply-sign-title">变更用水性质</p>
      <div class="apply-sing-msg">
        <p>用户编码</p>
        <van-field v-model="params.USER_NO" placeholder="请输入用户编码"/>
        <p>用户名称</p>
        <van-field v-model="params.NAME" placeholder="请输入用户名称"/>
        <p>用户地址</p>
        <van-field v-model="params.ADDRESS" placeholder="请输入用户地址"/>
        <!-- <p>地址</p>
        <van-field v-model="ADDRESS" placeholder="请选择地址"/>-->
        <p>联系人</p>
        <van-field v-model="params.LINK_MAN" placeholder="请输入真实姓名"/>
        <p>联系人电话</p>
        <van-field
          v-model="params.PHONE"
          type="tel"
          maxlength="11"
          placeholder="请输入手机号（非常重要用于各项身份鉴权）"
        />
        <p>变更用水性质</p>
        <!-- <van-field v-model="params.WATER_NATURE" placeholder="请选择"/> --> 
        <p class="ys-select" @click="isShow(true)">{{this.params.WATER_NATURE?this.params.WATER_NATURE:"请选择用水性质"}}</p>
        <van-actionsheet v-model="show" @select="chooseList" :actions="waterList">
          <!-- <p>一些内容</p> -->
        </van-actionsheet>
        <p>申请理由</p>
        <van-field v-model="params.APPLY_REASON" placeholder="请输入申请理由"/>
      </div>
      <!-- <div class="apply-sing-content">
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
      </div>-->
    </div>
    <div class="apply-sign-wrap">
      <p class="apply-sign-title">证件资料</p>
      <div class="apply-sing-content-bottom">
        <p>1.您的证件信息需要提交审核才能通过</p>
        <p>2.以下图片上传部分，支持JPG、JEPG、PNG和BMP格式的图片格式，文件大小在1K和5M之间</p>
      </div>
      <van-uploader :after-read="(file,detail)=>onRead('one',file,detail)">
        <img
          :src="params.PROPERTY_CERT?params.PROPERTY_CERT:require('../../../assets/images/up/f.png')"
        >
      </van-uploader>
      <van-uploader :after-read="(file,detail)=>onRead('tow',file,detail)">
        <img
          :src="params.CARD_OPPOSITE_IMAGE?params.CARD_OPPOSITE_IMAGE:require('../../../assets/images/up/s.png')"
        >
      </van-uploader>
      <van-uploader :after-read="(file,detail)=>onRead('three',file,detail)">
        <img
          :src="params.CARD_POSITIVE_IMAGE?params.CARD_POSITIVE_IMAGE:require('../../../assets/images/up/sf.png')"
        >
      </van-uploader>
    </div>
    <div @click="applySign" class="apply-sign-save">
      提交审核
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Step from "components/step/step";
import { Field, Uploader, Button, Toast,Actionsheet } from "vant";
import { volidateFields, getItem } from "../../../utils/index.js";
Vue.use(Field)
  .use(Uploader)
  .use(Actionsheet)
  .use(Button);
import sfzz from "../../../assets/images/up/sf.png";
import sfzf from "../../../assets/images/up/s.png";
import fcz from "../../../assets/images/up/f.png";
export default {
  data() {
    return {
      show:false,
      waterList:[],
      activePropertype:'请选择用水性质',
      params: {
        PROPERTY_CERT: null,
        CARD_OPPOSITE_IMAGE: null,
        CARD_POSITIVE_IMAGE: null,
        USER_NO: "",
        NAME: "",
        ADDRESS: "",
        LINK_MAN: "",
        PHONE: "",
        WATER_NATURE: "",
        APPLY_REASON: ""
      }
    };
  },
  mounted(){
    this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10023&grantcode=88888888`).then(res=>{
      if(res.invokeResultCode === '000'){
        let obj = {}
        let arr=[]
        res.result.map(item=>{
          arr.push({name:item.DIC_NAME,value:item.DIC_VALUE})
        })
        this.waterList = arr
      }else{
        Toast.fail(res.msg)
      }
    })
  },
  components: {
    Step
  },
  methods: {
    chooseList(item,index){
      this.params.WATER_NATURE = item.name
      this.show = false
    },
    isShow(isShow){
      this.show = isShow
    },
    applySign() {
      const {
        PROPERTY_CERT,
        CARD_OPPOSITE_IMAGE,
        CARD_POSITIVE_IMAGE,
        USER_NO,
        NAME,
        ADDRESS,
        LINK_MAN,
        PHONE,
        WATER_NATURE,
        APPLY_REASON
      } = this.params;

      if (!USER_NO) {
        Toast("请输入用户编码");
        return;
      } else if (!NAME) {
        Toast("请输入用户名称");
        return;
      } else if (!ADDRESS) {
        Toast("请输入用户地址");
        return;
      } else if (!LINK_MAN) {
        Toast("请输入联系人");
        return;
      } else if (!PHONE) {
        Toast("请输入联系人电话");
        return;
      } else if (!WATER_NATURE) {
        Toast("请输入用水性质");
        return;
      } else if (!ADDRESS) {
        Toast("请输入理由");
        return;
      } else if(!PROPERTY_CERT){
          Toast("请上传房产证照");
        return;
      }
       else if(!CARD_OPPOSITE_IMAGE){
          Toast("请上传身份证反面照");
        return;
      } else if(!CARD_POSITIVE_IMAGE){
          Toast("请上传身份证正面照");
        return;
      }
      // TEST0001
      const OPEN_ID = getItem('OPEN_ID')
      this.http.post(`/sw/metadata/DataSerController/getdata.do?servicecode=10017&grantcode=88888888&OPEN_ID=${OPEN_ID}`,{
          ...this.params
      }).then(res=>{
        if(res.invokeResultCode==='000'){
          Toast.success(res.msg)
          this.params = {
              PROPERTY_CERT: null,
              CARD_OPPOSITE_IMAGE: null,
              CARD_POSITIVE_IMAGE: null,
              USER_NO: "",
              NAME: "",
              ADDRESS: "",
              LINK_MAN: "",
              PHONE: "",
              WATER_NATURE: "",
              APPLY_REASON: ""
          }
        }else{
          Toast.fail(res.msg)
        }
      })
    },
    onRead(type, file) {
      switch (type) {
        case "one":
          this.params.PROPERTY_CERT = file.content;
          break;
        case "tow":
          this.params.CARD_OPPOSITE_IMAGE = file.content;
          break;
        case "three":
          this.params.CARD_POSITIVE_IMAGE = file.content;
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
#chgangesign {
  width: 100%;
}
.ys-select{
  
}
.apply-sign-save {
  width: 680px;
  height: 90px;
  margin: 35px;
  // input {
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
  text-align: center;
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
    // .apply-sing-content {
    //   p {
    //     font-size: 24px;
    //     font-weight: 500;
    //     color: #666666;
    //     line-height: 42px;
    //     text-indent: 2em;
    //   }
    // }
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
