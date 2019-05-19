<template>
  <div id="auditing-sign">
    <template v-if="AuditingData">
      <div v-for="(item, index) in AuditingData"  :key="index" class="auditing-sign-wrap">
        <div>
          <Step class="auditing-step" :failIndex="item.APPLY_STATUS==='-1'?'2':''" :index="2" :step="2"></Step>
        </div>
        <div class="auditing-audit-brand">
          <div :class="['auditing-brand-l',item.APPLY_STATUS==='-1'?'fail':'']">
            <div>{{item.APPLY_STATUS==='0'?'待审核':item.APPLY_STATUS==='1'?"审核成功":"审核失败"}}</div>
            <p>{{item.REPLY_CONTENT}}</p>
          </div>
          <div class="auditing-brand-time">
            <P>{{item.APPLY_DATE_TIME}}</P>
          </div>
        </div>
        <div class="auditing-list-wrap">
          <div class="auditing-list">
            <div class="auditing-list-l">用户编码</div>
            <div class="auditing-list-r">{{item.USER_NO}}</div>
          </div>
          <div class="auditing-list">
            <div class="auditing-list-l">申请单位</div>
            <div class="auditing-list-r">{{item.NAME}}</div>
          </div>
          <div class="auditing-list">
            <div class="auditing-list-l">单位地址</div>
            <div class="auditing-list-r">{{item.ADDRESS}}</div>
          </div>
          <div class="auditing-list">
            <div class="auditing-list-l">联系人</div>
            <div class="auditing-list-r">{{item.LINK_MAN}}</div>
          </div>
          <div class="auditing-list">
            <div class="auditing-list-l">联系人电话</div>
            <div class="auditing-list-r">{{item.PHONE}}</div>
          </div>
          <div class="auditing-list">
            <div class="auditing-list-l">变更详情描述</div>
            <div class="auditing-list-r">{{item.APPLY_REASON}}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import Step from "components/step/step";
import Vue from "vue";
import { Toast } from "vant";
import { getItem } from "../../../utils";
Vue.use(Toast);
export default {
  data() {
    return {
      AuditingData: null
    };
  },
  mounted() {
    this.getUserData().then(res => {
      this.getAuditingData(res.USER_NO);
    });
  },
  methods: {
    getUserData() {
      return new Promise((resolve, reject) => {
        const OPEN_ID = getItem("OPEN_ID");
        this.http
          .get(
            `/sw/metadata/DataSerController/getdata.do?servicecode=10006&grantcode=88888888&OPEN_ID=${OPEN_ID}`
          )
          .then(res => {
            if (res.invokeResultCode === "000") {
              resolve(res.result);
            } else {
              Toast.fail(res.msg);
            }
          });
      });
    },
    getAuditingData(USER_NO) {
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10018&grantcode=88888888`,
          {
            USER_NO
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (!res.result.length) {
              Toast("变更审核没有数据");
            }
            this.AuditingData = res.result;
          } else {
            Toast.fail(res.msg);
          }
        });
    }
  },
  beforeDestroy() {
    Toast.clear();
  },
  components: {
    Step
  }
};
</script>
<style lang="less" scoped>
#auditing-sign {
  width: 100%;
}
.auditing-step {
  width: 680px;
  height: 116px;
  display: flex;
  justify-items: center;
  padding-left: 150px;
  box-sizing: border-box;
}
.auditing-sign-wrap {
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  .auditing-audit-brand {
    display: flex;
    justify-content: space-between;
    width: 620px;
    margin: 0 auto;
    height: 160px;
    padding: 40px 30px;
    box-sizing: border-box;
    box-shadow: 0px 2px 16px 4px rgba(52, 184, 239, 0.07);
    .auditing-brand-l {
      div {
        color: rgba(52, 184, 239, 1);
        font-size: 28px;
        line-height: 30px;
        font-family: "PingFang-SC-Bold";
      }
      p {
        font-size: 26px;
        line-height: 30px;
        color: rgba(102, 102, 102, 1);
      }
      &.fail{
          color:#ef3434 
      }
    }
    .auditing-brand-time {
      p {
        color: rgba(153, 153, 153, 1);
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
}
.auditing-list-wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  .auditing-list {
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 86px;
    .auditing-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 86px;
    }
    .auditing-list-r {
      color: rgba(102, 102, 102, 1);
      font-size: 28px;
      line-height: 86px;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(238, 238, 238, 1);
      display: block;
    }
    &:nth-last-of-type(1)::after {
      height: 0;
      width: 0;
    }
  }
}
</style>
