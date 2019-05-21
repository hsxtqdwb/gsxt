<template>
  <div id="burstdetail">
    <page-head title="报漏举报详情"></page-head>
    <div class="b-content-wrap">
      <div class="b-msg">
        <h2>基本信息</h2>
        <p>
          联系人
          <span>{{content['LINK_MAN']}}</span>
        </p>
        <p>
          手机号
          <span>{{content['PHONE']}}</span>
        </p>
        <p>
          地址
          <span>{{content['ADDRESS']}}</span>
        </p>
        <p>
          举报类型
          <span v-show="content['TYPE']==1">报漏</span>
          <span v-show="content['TYPE']==2">举报</span>
        </p>
        <p>
          申请状态
          <span v-show="content['STATUS']==0">待处理</span>
          <span v-show="content['STATUS']==1">已处理</span>
        </p>
        <p>
          爆漏举报时间
          <span>{{content['CREATE_TIME']?content['CREATE_TIME'].split(' ')[0]:""}}</span>
        </p>
      </div>
      <div class="b-msg">
        <h2>其它</h2>
        <p>问题描述</p>
        <p class="b-msg-b">{{content['PROBLEM_DESC']?content['PROBLEM_DESC']:"暂无描述"}}</p>
        <p>批复备注</p>
        <p class="b-msg-b">{{content['REPLY_REASON']?content['REPLY_REASON']:"暂无批复备注"}}</p>
        <p>文件</p>
        <div class="b-file">
          <div>
            <img :src="fileUrl" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../../components/pageHead/pageHead";
export default {
  data() {
    return {
      content: {
        LINK_MAN: "",
        PHONE: "",
        ADDRESS: "",
        TYPE: "",
        PROBLEM_DESC: "",
        CREATE_TIME: "",
        STATUS: "",
        REPLY_REASON: "",
        FILE_URL: ""
      },
      fileUrl: "",
      imgarr: [
        "../../../assets/images/index/avatar.jpg",
        "../../../assets/images/index/avatar.jpg",
        "../../../assets/images/index/avatar.jpg",
        "../../../assets/images/index/avatar.jpg",
        "../../../assets/images/index/avatar.jpg",
        "../../../assets/images/index/avatar.jpg"
      ]
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
          this.content = res.result;
          this.fileUrl =
            "http://www.cyszls.com:81/sw/" + res.result["FILE_URL"];
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
  .b-content-wrap {
    padding-top: 90px;
    .b-msg {
      overflow: hidden;
      margin-top: 20px;
      background: #ffffff;
      padding: 30px 35px 10px 35px;
      h2 {
        font-size: 28px;
        color: #333333;
        line-height: 50px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        border-bottom: solid 1px #eeeeee;
      }
      p {
        overflow: hidden;
        font-size: 26px;
        color: #666666;
        line-height: 70px;
        span {
          float: right;
          color: #999999;
        }
      }
      .b-msg-b {
        text-indent: 2em;
        color: #999999;
      }
      .b-file {
        .b-img {
          width: 220px;
          height: 146px;
          float: left;
          padding-bottom: 20px;
          overflow: hidden;
          margin-left: 6px;
          img {
            width: 100%;
            width: 220px;
            height: 146px;
          }
        }
      }
    }
  }
}
</style>

