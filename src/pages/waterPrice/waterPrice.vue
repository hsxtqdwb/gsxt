<template>
  <div id="waterPrice">
    <page-head title="水价标准"></page-head>
    <div class="waterPrice-list">
      <van-cell v-for="(item,index) in msg" :key="index" :title="item.title" is-link/>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);
export default {
  data() {
    return {
      selected: "1",
      msg: [
        {
          title: "居民用水水价标准"
        },
        {
          title: "非居民用水水价标准"
        },
        {
          title: "污水处理费水价调整"
        }
      ]
    };
  },
  components: {
    PageHead
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
