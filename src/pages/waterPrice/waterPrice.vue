<template>
  <div id="waterPrice">
    <page-head title="水价标准"></page-head>
    <div class="waterPrice-list">
      <van-cell
        @click="getUrl(`/priceDetail/${item.ID}`)"
        v-for="(item,index) in list"
        :key="index"
        :title="item.title"
        is-link
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { getItem } from "../../utils";
import BScroll from "better-scroll";
import { Toast } from "vant";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {
  data() {
    return {
      page: {
        CURRENT_PAGE: 0,
        PAGE_SIZE: 10
      },
      list: []
    };
  },
  components: {
    PageHead
  },
  mounted() {
    this.getList();
  },
  methods: {
    getUrl(url) {
      this.$router.push(url);
    },
    getList() {
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .post(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10020&grantcode=88888888`,
          {
            PAGE_SIZE: this.page.PAGE_SIZE,
            CURRENT_PAGE: this.page.CURRENT_PAGE,
            TYPE: 3
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            if (!res.result.list.length && this.page.CURRENT_PAGE == 0) {
              Toast("水价标准列表为空");
              return;
            } else if (!res.result.list.length) {
              Toast("没有新数据");
              return;
            }
            this.list = [...this.list, ...res.result.list];
            this.page.CURRENT_PAGE = res.result.pageInfo.currentPage + 1;
            if (res.result.list.length === 10) {
              this.scroll.finishPullUp();
            }
          }
        });
    }
  },
  beforeDestroy(){
    Toast.clear()
  }
};
</script>
<style lang="less" scoped>
#waterPrice {
  .waterPrice-list {
    margin-top: 110px;
    .van-cell {
      padding: 0 35px;
      .van-cell__title {
        height: 88px;
        line-height: 88px;
        font-size: 28px;
      }
      .van-icon {
        height: 88px;
        line-height: 88px;
        font-size: 30px;
      }
    }
  }
}
</style>
