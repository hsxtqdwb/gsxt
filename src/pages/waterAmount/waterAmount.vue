<template>
  <div>
    <page-head class="headN" ref="head" title="水费账单"></page-head>
    <div ref="user" class="w-user-wrap">
      <div class="w-user">
        <div class="w-left">户名</div>
        <div class="w-right">
          <div v-if="userData">{{userData.USER_NO}}</div>
          <i class="w-arrow"></i>
        </div>
      </div>
    </div>
    <div ref="scorll" class="scroll-wrapper">
      <div class="scroll-wrap">
        <template v-if="list.length">
          <div :key="index" v-for="(item,index) in list" class="w-content-wrap">
            <div class="w-content">
              <div class="w-left">
                <div>充值缴费时间</div>
                <div>充值缴费金额</div>
              </div>
              <div class="w-right">
                <div class="w-recharge-time">{{item.CREATE_TIME}}</div>
                <div class="w-recharge-amount">￥{{item.RECHARGE_AMOUNT}}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "components/pageHead/pageHead";
import { getItem } from "../../utils";
import BScroll from "better-scroll";
import { Toast } from "vant";
export default {
  data() {
    return {
      page: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 30
      },
      list: [],
      userData: null
    };
  },
  mounted() {
    this.getUserData();
    this.getList();
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      const scrollNode = document.querySelector(".scroll-wrapper");
      const userNode = document.querySelector(".w-user-wrap");
      const headNode = document.querySelector(".headN");
      scrollNode.style.height =
        document.documentElement.clientHeight -
        userNode.offsetHeight -
        headNode.offsetHeight +
        "px";
      this.scroll = new BScroll(".scroll-wrapper", {
        pullUpLoad: true,
        click: true
      });
      this.scroll.on("pullingUp", () => {
        this.getList();
      });
    },
    getList: function() {
      const USER_NO = getItem("USER_NO");
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10010&grantcode=88888888`,
          {
            PAGE_SIZE: this.page.PAGE_SIZE,
            CURRENT_PAGE: this.page.CURRENT_PAGE,
            USER_NO,
            OPEN_ID
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (!res.result.list.length && this.page.CURRENT_PAGE == 0) {
              Toast("水费账单列表为空");
              return;
            } else if (!res.result.list.length) {
              Toast("没有新账单");
              return;
            }
            this.list = [...this.list, ...res.result.list];
            this.page.CURRENT_PAGE = res.result.pageInfo.currentPage + 1;
            if (res.result.list.length === 10) {
              this.scroll.finishPullUp();
            }
          }
        });
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
            this.userData = res.result;
          } else {
            Toast.fail(res.msg);
          }
        });
    }
  },
  beforeDestroy() {
    this.scroll.destroy();
  },
  components: {
    PageHead
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
.headN {
  position: relative;
  z-index: 99;
}
.w-user-wrap {
  margin-top: 90px;
  height: 136px;
  z-index: 99;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 20px 0 30px;
  background: rgba(238, 238, 238, 1);
}
.w-user {
  padding: 0 36px 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .w-left {
    line-height: 86px;
    font-size: 28px;
    color: rgba(51, 51, 51, 1);
  }
}
.w-arrow {
  .images("r_arrow");
  width: 15px;
  height: 27px;
  display: block;
  margin-left: 22px;
}
.w-right {
  color: rgba(102, 102, 102, 1);
  font-size: 28px;
  font-family: "PingFang-SC-Medium";
  display: flex;
}
.w-content-wrap {
  box-sizing: border-box;
  padding: 0 36px;
  background: #fff;
  .w-content {
    height: 142px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .w-left {
      font-size: 28px;
      line-height: 56px;
      color: rgba(51, 51, 51, 1);
    }
    .w-right {
      font-size: 28px;
      line-height: 56px;
      color: rgba(51, 51, 51, 1);
      display: flex;
      flex-direction: column;
      .w-recharge-time {
        color: rgba(102, 102, 102, 1);
        // line-height: 30px;
        text-align: right;
      }
      .w-recharge-amount {
        color: rgba(52, 184, 239, 1);
        text-align: right;
      }
    }
    &:nth-of-type(1) {
      border-top: none;
    }
  }
}
</style>
