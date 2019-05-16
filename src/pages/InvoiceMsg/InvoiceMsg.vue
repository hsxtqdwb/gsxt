<template>
  <div id="invoice">
    <page-head title="发票信息"></page-head>
    <div class="invoice-user-list">
      <van-cell title="选择用户" is-link value="0100056"/>
      <van-cell title="用户名" value="深圳市环保质量监督局"/>
    </div>
    <div class="invoice-select">
      <div>
        <span>选择时间</span>
        <img src="../../assets/images/invoice/bottom.png" alt srcset>
      </div>
      <div>
        <span>实缴发票</span>
        <img src="../../assets/images/invoice/bottom.png" alt srcset>
      </div>
      <div>
        <span>未开票</span>
        <img src="../../assets/images/invoice/bottom.png" alt srcset>
      </div>
    </div>
    <div class="invoice-batch">
      <div>
        <span class="invoice-batch-left">最大可开发票金额8888.88元</span>
        <span class="invoice-batch-right">批量开票</span>
      </div>
    </div>
    <div class="invoice-list-msg">
      <van-checkbox-group v-model="result">
        <van-checkbox v-for="(item, index) in list" :key="index" :name="item">
          <p class="invoice-list-msg-top">
            <span class="invoice-batch-left">{{item.name}}</span>
            <span class="invoice-batch-right">{{item.status}}</span>
          </p>
          <p class="invoice-list-msg-bottom">
            <span class="invoice-batch-left">{{item.time}}</span>
            <span class="invoice-batch-right">{{item.price}}</span>
          </p>
        </van-checkbox>
      </van-checkbox-group>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../components/pageHead/pageHead";
import { Cell, CellGroup, Actionsheet, Checkbox, CheckboxGroup } from "vant";
Vue.use(Cell)
  .use(CellGroup)
  .use(Actionsheet)
  .use(Checkbox)
  .use(CheckboxGroup);
export default {
  data() {
    return {
      list: [
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "200元"
        },
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "100元"
        },
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "100元"
        },
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "100元"
        },
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "100元"
        },
        {
          name: "实缴发票",
          status: "未开发票",
          time: "2018年10月",
          price: "100元"
        }
      ],
      result: []
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
    background: #ffffff;
    margin-top: 110px;
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
  .invoice-select {
    margin-top: 20px;
    background: #ffffff;
    overflow: hidden;
    line-height: 73px;
    div {
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 24px;
      color: #010101;
      img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
      }
    }
  }
  .invoice-batch {
    background: #ffffff;
    div {
      overflow: hidden;
      line-height: 84px;
      border-top: solid 1px #eeeeee;
      border-bottom: solid 1px #eeeeee;
      padding: 0 35px;
      .invoice-batch-left {
        float: left;
        font-size: 26px;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
      .invoice-batch-right {
        float: right;
        color: #34b8ef;
        font-size: 26px;
        font-weight: 500;
      }
    }
  }
  .invoice-list-msg {
    background: #ffffff;
    div {
      border-bottom: solid 1px #eeeeee;
      padding: 17px 35px;
      /deep/.van-checkbox {
        padding-right: 0;
        .van-checkbox__icon {
          display: none;
          margin: -30px 10px 0 0;
          .van-icon {
            transform: scale(1.6);
          }
        }
        .van-checkbox__label{
          width:600px;
        }
      }

      p {
        overflow: hidden;
        line-height: 46px;
        .invoice-batch-left {
          float: left;
          font-size: 28px;
          font-weight: 500;
          color: #333333;
        }
        .invoice-batch-right {
          float: right;
          color: #666666;
          font-size: 28px;
          font-weight: 500;
        }
        &:last-of-type {
          .invoice-batch-left {
            float: left;
            font-size: 26px;
            font-weight: 500;
            color: #999999;
          }
          .invoice-batch-right {
            float: right;
            color: #34b8ef;
            font-size: 26px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
