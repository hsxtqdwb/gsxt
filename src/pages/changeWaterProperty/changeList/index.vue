<template>
  <div id="changeList">
    <div class="scroll-wrapper">
      <div class="scroll-wrap">
        <template v-if="list.length">
          <div v-for="(item, index) in list" :key="index" :class="['change-wrap',item.APPLY_STATUS==='1'?'tong':'']">
            <div  v-if="item.APPLY_STATUS==='1'" class="font-s">通</div>
            <div class="label">变更信息</div>
            <div class="change-list-wrap">
              <div class="change-list">
                <div class="change-list-l">用户编码</div>
                <div class="change-list-r">{{item.USER_NO}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">申请单位</div>
                <div class="change-list-r">{{item.NAME}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">单位地址</div>
                <div class="change-list-r">{{item.ADDRESS}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">联系人</div>
                <div class="change-list-r">{{item.LINK_MAN}}</div>
              </div>
              <div class="change-list">
                <div class="change-list-l">联系电话</div>
                <div class="change-list-r">{{item.PHONE}}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { getItem } from "../../../utils";
import BScroll from "better-scroll";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      params: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 15
      },
      list: [],
      userNo: null
    };
  },
  mounted() {
    this.getContractList();
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      let headNode = document.getElementsByClassName("change-list-head")[0];
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
              this.userNo = res.USER_NO;
            } else {
              Toast.fail(res.msg);
            }
          });
      });
    },
    getContractList(USER_NO) {
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10019&grantcode=88888888`,
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
  },
  beforeDestroy(){
    this.scroll.destroy()
    Toast.clear()
  }
};
</script>
<style lang="less" scoped>
#changeList {
  width: 100%;
  padding-top: 20px;
}
.scroll-wrap {
  overflow: hidden;
}
.change-wrap {
  position: relative;
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  padding: 0 30px;
  box-sizing: border-box;
  overflow: hidden;
  .label {
    color: rgba(0, 0, 0, 1);
    font-size: 28px;
    height: 75px;
    line-height: 75px;
  }
  .change-list-wrap {
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
  .font-s {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    font-size: 28px;
    width: 38px;
    height: 76px;
    line-height: 45px;
    text-align: center;
    z-index: 2;
  }
  &.tong {
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      content: "";
      color: #fff;
      //   line-height: 0px;
      height: 0;
      width: 0;
      //   background: rgba(52, 184, 239, 1);
      display: block;
      font-size: 28px;
      border: 38px solid rgba(52, 184, 239, 1);
      border-left: 38px solid transparent;
      border-bottom: 38px solid transparent;
    }
  }
}
</style>
