<template>
  <div id="invoice">
    <page-head title="发票信息"></page-head>
    <div class="invoice-user-list">
      <van-cell title="选择用户" is-link value="0100056"/>
      <van-cell title="用户名" value="深圳市环保质量监督局"/>
    </div>
    <div class="invoice-select">
      <p @select="onSelect">1231</p>
      <van-actionsheet v-model="show" :actions="actions"/>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { Cell, CellGroup, Actionsheet } from "vant";
Vue.use(Cell)
  .use(CellGroup)
  .use(Actionsheet);
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
      ],
      show: false,
      actions: [
        {
          name: "选项"
        },
        {
          name: "选项",
          subname: "描述信息"
        },
        {
          loading: true
        },
        {
          name: "禁用选项",
          disabled: true
        }
      ]
    };
  },
  components: {
    PageHead
  },
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Vant.Toast(item.name);
    }
  }
};
</script>
<style lang="less" scoped>
#invoice {
  .invoice-user-list {
    margin-top: 20px;
    .van-cell {
      padding: 0 35px;
      .van-cell__title {
        height: 88px;
        line-height: 88px;
        font-size: 28px;
      }
      .van-cell__value {
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
