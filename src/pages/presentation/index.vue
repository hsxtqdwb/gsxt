<template>
  <div id="presentation">
    <page-head class="headNode" title="水质报告"></page-head>
    <div class="scroll-wrapper">
      <div class="scroll-wrap">
        <div class="presentation-list">
          <template v-if="reportList.length">
            <div @click="getUrl('/preDetail')" v-for="(item,index) in reportList" :key="index">
              <p>
                <span class="presentation-list-left">{{item.DIC_NAME}}</span>
                <span class="presentation-list-right">{{item.DIC_VALUE}}</span>
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import BScroll from "better-scroll";
import { Toast, Cell, CellGroup, Actionsheet } from "vant";
Vue.use(Cell)
  .use(CellGroup)
  .use(Actionsheet);
export default {
  data() {
    return {
      params: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 20,
        TYPE: 3
      },
      reportList: []
    };
  },
  mounted() {
    this.getReportList();
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  components: {
    PageHead
  },
  methods: {
    initScroll() {
      const headNode = document.getElementsByClassName("headNode")[0];
      let wrapNode = document.getElementsByClassName("scroll-wrapper")[0];
      this.scroll = new BScroll(".scroll-wrapper", {
        pullUpLoad: true,
        click: true,
        scrollY: true
      });
      wrapNode.style.height =
        document.documentElement.clientHeight - headNode.offsetHeight + "px";
      this.scroll.on("pullingUp", () => {
        this.params.CURRENT_PAGE = this.params.CURRENT_PAGE + 1;
        this.getReportList();
      });
      window.addEventListener("resize", () => {
        const headNode = document.getElementsByClassName("headNode")[0];
        let wrapNode = document.getElementsByClassName("scroll-wrapper")[0];
        wrapNode.style.height =
          document.documentElement.clientHeight - headNode.offsetHeight + "px";
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      });
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Vant.Toast(item.name);
    },
    getReportList() {
      this.http
        .get(
          `sw/metadata/DataSerController/getdata.do?servicecode=10020&grantcode=88888888`,
          {
            ...this.params
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            console.log(res);
            alert("需要加CURRENT_PAGE");
            if (!res.result.list.length && this.page.CURRENT_PAGE == 0) {
              Toast("水质列表为空");
              return;
            } else if (!res.result.list.length) {
              Toast("没有新数据");
              return;
            }
            this.reportList = [...this.reportList, ...res.result.list];
            this.scroll.finishPullUp();
          }
        });
    },
    getUrl(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
#presentation {
  background: #ffffff;
  .u-header {
    border-bottom: solid 1px #eeeeee;
  }
  .presentation-list {
    margin-top: 110px;
    div {
      border-bottom: solid 1px #eeeeee;
      p {
        padding: 0 35px;
        line-height: 85px;
        overflow: hidden;
        .presentation-list-left {
          float: left;
          font-size: 28px;
          color: #333333;
        }
        .presentation-list-right {
          float: right;
          font-size: 24px;
          color: #999999;
        }
      }
    }
  }
}
</style>
