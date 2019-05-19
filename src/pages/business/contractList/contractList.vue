<template>
  <div id="contract-list">
    <div class="scroll-wrapper">
      <div class="scroll-wrap">
        <template v-if="list.length">
          <div v-for="(item, index) in list" :key="index" class="contract-list-wrap">
            <div
              :class='["contract-list-title",item.APPLY_STATUS==="-1"?"active":""]'
            >{{item.APPLY_STATUS==="0"?'待审核':item.APPLY_STATUS==="1"?"审核通过":"审核不通过"}}</div>
            <div class="contract-list-wrapper">
              <div class="contract-list">
                <div class="contract-list-l">用户名</div>
                <div class="contract-list-r">{{item.USER_NO}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">用户名称</div>
                <div class="contract-list-r">{{item.NAME}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">性质</div>
                <div class="contract-list-r">{{item.WATER_NATURE}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">地址</div>
                <div class="contract-list-r">{{item.ADDRESS}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">电话</div>
                <div class="contract-list-r">{{item.PHONE}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">口径</div>
                <div class="contract-list-r">{{item.CALIBER}}</div>
              </div>
              <div class="contract-list">
                <div class="contract-list-l">大小表</div>
                <div class="contract-list-r">{{item.METER_TYPE}}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { getItem } from "../../../utils";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      params: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 15
      },
      list: []
    };
  },
  mounted() {
    console.log(this.$route)
    this.props.setActive(2)
    this.getContractList();
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      let headNode = document.getElementsByClassName("business-head")[0];
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
        this.getContractList();
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
    getContractList() {
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10013&grantcode=88888888`,
          {
            OPEN_ID,
            ...this.params
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if(res.result.list === this.params.PAGE_SIZE){
              this.scroll.finishPullUp();
            }
            this.list = [...this.list, ...res.result.list];
          }
        });
    }
  },
  beforeDestroy(){
    this.scroll.destroy()
  }
};
</script>
<style lang="less" scoped>
#contract-list {
  width: 100%;
  padding-top: 20px;
}
.scroll-wrapper {
  overflow: hidden;
}
.contract-list-wrap {
  width: 680px;
  margin: 60px auto 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(51, 51, 51, 0.06);
  background: #fff;
  .contract-list-title {
    color: rgba(52, 184, 239, 1);
    font-size: 28px;
    height: 88px;
    line-height: 88px;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .contract-list-wrapper {
    width: 680px;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .contract-list {
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 86px;
    .contract-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
      line-height: 86px;
    }
    .contract-list-r {
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
  
    .active{
      color:#ef3434
    }
}
</style>
