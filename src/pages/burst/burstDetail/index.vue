<template>
  <div id="burstdetail">
    <page-head title="暴漏举报详情"></page-head>
    <div class="p-content-wrap">
      <h2>基本信息</h2>
      <div class="title">联系人</div>
      <p>{{content['LINK_MAN']}}</p>
      <div class="title">手机号码</div>
      <p>{{content['PHONE']}}</p>
      <div class="title">地址</div>
      <p>{{content['ADDRESS']}}</p>
      <div class="title">类型</div>
      <p>{{content['TYPE']}}</p>
      <div class="title">暴露举报时间</div>
      <p>{{content['CREATE_TIME']}}</p>
      <div class="title">申请状态</div>
      <p>{{content['STATUS']}}</p>
      <h2>问题描述</h2>
      <div class="title">问题描述</div>
      <p>{{content['PROBLEM_DESC']}}</p>
      <div class="title">批复备注</div>
      <p>{{content['REPLY_REASON']}}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../../components/pageHead/pageHead";
export default {
  data() {
    return {
      msg: "五一开始全国水价涨幅12%",
      date: "2019-05-17",
      content: {
        LINK_MAN: "",
        PHONE: "",
        ADDRESS: "",
        TYPE: "",
        PROBLEM_DESC: "",
        CREATE_TIME: "",
        STATUS: "",
        REPLY_REASON: ""
      }
    };
  },
  mounted() {
    const ID = this.$route.params.id;
    this.http
      .get(
        `/sw/metadata/DataSerController/getdata.do?servicecode=10024&grantcode=88888888`,
        {
          ID
        }
      )
      .then(res => {
        if (res.invokeResultCode === "000") {
          console.log(res);
          this.content = res.result;
        }
      });
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#burstdetail {
  .p-content-wrap {
    padding: 35px;
    margin-top: 90px;
    background: #fff;
    h2 {
      font-size: 28px;
      color: #333333;
      line-height: 40px;
    }
    .title {
      font-size: 24px;
      color: #999999;
      line-height: 40px;
    }
    p {
      font-size: 26px;
      color: #666666;
      line-height: 70px;
      border-bottom: solid #eeeeee 1px;
    }
  }
}
</style>

