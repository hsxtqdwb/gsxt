<template>
  <div>
    <page-head ref="head" title="暴漏举报">
      <i @click="join" class="burst-join"></i>
    </page-head>
    <div class="burst-list-wrap">
      <div ref="scrollNode" class="scroll-wrapper">
        <div class="scroll-wrapp">
          <template v-if="burstList.length">
            <div
              @click="getUrl('/burstDetail')"
              v-for="item in burstList"
              :key="item.ID"
              class="burst-list"
            >
              <div class="burst-list-l">{{item.PROBLEM_DESC}}</div>
              <i class="burst-list-r"></i>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "../../components/pageHead/pageHead";
import { getItem } from "../../utils";
import { Toast } from "vant";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      params: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 20,
        OPEN_ID: null
      },
      burstList: []
    };
  },
  mounted() {
    const OPEN_ID = getItem("OPEN_ID");
    const { head, scrollNode } = this.$refs;
    this.params.OPEN_ID = OPEN_ID;
    this.getBurstList();
    const headHeight = head.$el.offsetHeight;
    scrollNode.style.height =
      document.documentElement.clientHeight - headHeight + "px";
    this.scroll = new BScroll(".scroll-wrapper", {
      pullUpLoad: true,
      click: true,
      scrollY: true
    });
    this.scroll.on("pullingUp", () => {
      this.params.CURRENT_PAGE = this.params.CURRENT_PAGE + 1;
      this.getBurstList();
    });
    window.addEventListener("resize", () => {
      const headHeight = head.$el.offsetHeight;
      scrollNode.style.height =
        document.documentElement.clientHeight - headHeight + "px";
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    });
  },
  methods: {
    join: function() {
      this.$router.push("/addBurst");
    },
    getBurstList() {
      this.params;
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10021&grantcode=88888888`,
          {
            ...this.params
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (res.length === this.params.PAGE_SIZE) {
              this.scroll.finishPullUp();
            }
            this.burstList = [...this.burstList, ...res.result.list];
            this.$nextTick(() => {
              this.scroll.refresh();
            });
          } else {
            Toast.fail(res.msg);
          }
        });
    },
    getUrl(url) {
      this.$router.push(url);
    }
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.images(@url) {
  background-image: url("../../assets/images/burst/@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("../../assets/images/burst/@{url}@3x.png");
  }
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.burst-join {
  position: absolute;
  top: 30px;
  right: 30px;
  .images("join");
  width: 30px;
  height: 30px;
  display: block;
}
.burst-list-wrap {
  margin-top: 90px;
  .burst-list {
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 86px;
    background: #fff;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    .burst-list-l {
      color: rgba(51, 51, 51, 1);
      font-size: 28px;
    }
    .burst-list-r {
      width: 15px;
      height: 27px;
      .images("arrow");
      display: block;
    }
  }
}
</style>
