<template>
  <div id="changecontract">
    <div class="scroll-wrapper">
      <div class="scroll-wrap">
        <div v-for="(item, index) in list" :key="index" class="change-contract-wrap">
          <div class="auditing-content">
            <div class="auditing-change-title">变更前信息</div>
            <div class="auditing-content-list">
              <div class="change-list">
                <div class="change-list-l">用户编码</div>
                <div class="change-list-r">{{item.USER_NO}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">用户名称</div>
                <div class="change-list-r">{{item.NAME}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">用户地址</div>
                <div class="change-list-r">{{item.ADDRESS}}</div>
              </div>
            </div>
            <div class="auditing-change-title">变更后信息</div>
            <div class="auditing-content-list">
              <div class="change-list">
                <div class="change-list-l">用户名称</div>
                <div class="change-list-r">{{item.CHANGE_USER_NAME}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">联系人</div>
                <div class="change-list-r">{{item.CHANGE_LINK_MAN}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">联系人电话</div>
                <div class="change-list-r">{{item.CHANGE_PHONE}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">身份证号码</div>
                <div class="change-list-r">{{item.CHANGE_ID_CARD_NO}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import BScroll from "better-scroll";
import { Toast } from "vant";
import { getItem } from '../../../utils';
Vue.use(Toast);
export default {
  data() {
    return {
      params: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 15
      },
      userNo:null,
      list: []
    };
  },
  mounted() {
    this.getUserData().then(res =>{
      this.getContractList(res.USER_NO)
    })
    this.$nextTick(() => {
      this.initScroll();
    });
  },
   beforeDestroy(){
    Toast.clear()
    this.scroll.destroy()
  },
  methods: {
    initScroll() {
      let headNode = document.getElementsByClassName("change-head")[0];
      let navNode = document.getElementsByClassName("van-tabs__nav")[0];
      let scrollNode = document.getElementsByClassName("scroll-wrapper")[0];
      scrollNode.style.height =
        document.documentElement.clientHeight -
        headNode.offsetHeight -
        navNode.offsetHeight +
        "px";
      this.scroll = new BScroll(".scroll-wrapper", {
        pullUpLoad: true,
        click: true,
        scrollY: true
      });
      this.scroll.on("pullingUp", () => {
        this.params.CURRENT_PAGE = this.params.CURRENT_PAGE + 1;
        this.getContractList(this.userNo);
      });
      window.addEventListener("resize", () => {
        scrollNode.style.height =
          document.documentElement.clientHeight -
          headNode.offsetHeight -
          navNode.offsetHeight +
          "px";
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      });
    },
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
              this.userNo = res.USER_NO
            } else {
              Toast.fail(res.msg);
            }
          });
      });
    },
    getContractList(USER_NO) {
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10016&grantcode=88888888`,
          {
            USER_NO,
            ...this.params
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (res.result.list === this.params.PAGE_SIZE) {
              this.scroll.finishPullUp();
            }
            this.list = [...this.list, ...res.result.list];
          } else {
            Toast.fail(res.mag);
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
#changecontract {
  width: 100%;
  padding-top: 20px;
}
.scroll-wrap {
  overflow: hidden;
}
.change-contract-wrap {
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  .auditing-content {
    padding: 0 30px;
    box-sizing: border-box;
  }
  .auditing-change-title {
    color: rgba(51, 51, 51, 1);
    font-size: 28px;
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    height: 88px;
    line-height: 88px;
  }
  .change-list {
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 86px;
    .change-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 86px;
    }
    .change-list-r {
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
