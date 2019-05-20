<template>
  <div id="stopWater">
    <page-head class="headN" title="停水通知"></page-head>
    <div class="scroll-wrapper">
      <div class="scroll-wrapp">
        <template v-if="msg.length">
          <div @click="getDetail(item.ID)" class="stopWater-msg" v-for="(item,index) in msg" :key="index">
            <div class="stopWater-msg-top">
              <div class="stopWater-msg-title">{{item.TITLE}}</div>
              <div class="stopWater-msg-time">{{item.UPDATE_TIME}}</div>
            </div>
            <div class="stopWater-msg-bottom">
              <p>{{item.CONTENTS}}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import BScroll from "better-scroll";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      selected: "1",
      page: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 10
      },
      msg: []
    };
  },
  mounted() {
    this.getList();
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      const scrollNode = document.querySelector(".scroll-wrapper");
      const headNode = document.querySelector(".headN");
      scrollNode.style.height =
        document.documentElement.clientHeight - headNode.offsetHeight + "px";
      this.scroll = new BScroll(".scroll-wrapper", {
        pullUpLoad: true,
        click: true
      });
      this.scroll.on("pullingUp", () => {
        this.getList();
      });
    },
    getList: function() {
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10020&grantcode=88888888`,
          {
            TYPE: 1,
            CURRENT_PAGE: this.page.CURRENT_PAGE,
            PAGE_SIZE: this.page.PAGE_SIZE
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (!res.result.list.length && this.page.CURRENT_PAGE == 0) {
              Toast("通知列表列表为空");
              return;
            } else if (!res.result.list.length) {
              Toast("没有新的通知");
              return;
            }
            this.page.CURRENT_PAGE = this.page.CURRENT_PAGE + 1;
            this.msg = [...this.msg, ...res.result.list];
          }
        });
    },
    getDetail(id){
      this.$router.push(`/stopWaterDetail/${id}`)
    }
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#stopWater {
  .scroll-wrapper {
    overflow: hidden;
    margin-top: 90px;
  }
  .stopWater-msg {
    background: #ffffff;
    margin: 20px 0 10px 0;
    .stopWater-msg-top {
      padding: 0 35px;
      overflow: hidden;
      line-height: 88px;
      border-bottom: solid 1px #eeeeee;
      .stopWater-msg-title {
        float: left;
        font-size: 28px;
        color: #333333;
      }
      .stopWater-msg-time {
        float: right;
        font-size: 24px;
        color: #999999;
      }
    }
    .stopWater-msg-bottom {
      padding: 30px 35px;
      p {
        font-size: 26px;
        line-height: 30px;
        color: #666666;
      }
    }
  }
}
</style>
