<template>
  <div>
    <page-head title="用户列表"></page-head>
    <div class="u-list-wrap">
      <div class="u-list-title">已绑定用户列表</div>
      <template v-if="list.length">
        <div v-for="(item,index) in list" :key="item.USER_NO" class="u-list-content-wrap">
          <van-swipe-cell :right-width="113">
            <van-cell-group>
              <div class="u-list-content">
                <div
                  class="u-list-l"
                  :style="{borderBottom:index===list.length-1?'none':'1px solid #eee'}"
                >
                  <div>
                    <div class="u-list-l-n">{{item.USER_NO}}</div>
                    <div>{{item.NAME}}</div>
                  </div>
                  <i class="u-true"></i>
                </div>
              </div>
            </van-cell-group>
            <span @click="delUser(item.USER_NO)" slot="right">删除</span>
          </van-swipe-cell>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import PageHead from "../../../components/pageHead/pageHead";
import { SwipeCell, CellGroup, Cell, Toast } from "vant";
import Vue from "vue";
import { getItem } from "../../../utils";
Vue.use(SwipeCell);
Vue.use(CellGroup);
Vue.use(Cell);
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    delUser(USER_NO) {
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10005&grantcode=88888888`,
          {
            OPEN_ID,
            USER_NO
          }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            Toast.success(res.msg);
            this.getUser();
          } else {
            Toast.fail(res.msg);
          }
        });
    },
    getUser() {
      const OPEN_ID = getItem("OPEN_ID");
      this.http
        .get(
          `/sw/metadata/DataSerController/getdata.do?servicecode=10003&grantcode=88888888`,
          { OPEN_ID }
        )
        .then(res => {
          if (res.invokeResultCode === "000") {
            this.list = res.result;
          }
        });
    }
  },
  beforeDestroy() {
    Toast.clear();
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.images(@url) {
  background-image: url("../../../assets/images/taggleUser/@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("../../../assets/images/taggleUser/@{url}@3x.png");
  }
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.u-list-wrap {
  background: #fff;
  margin-top: 110px;
  overflow: hidden;
  .u-list-title {
    color: rgba(51, 51, 51, 1);
    font-family: "PingFang-SC-Bold";
    font-weight: bold;
    font-size: 28px;
    height: 86px;
    line-height: 86px;
    padding: 0 35px;
  }
  .u-list-content {
    color: rgba(102, 102, 102, 1);
    font-size: 26px;
    line-height: 40px;
    height: 127px;
    .u-list-l {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 0 30px;
      height: 127px;
      box-sizing: border-box;
    }
    .u-list-l-n{
      margin-bottom: 10px;
    }
  }
  .u-true{
    display: block;
    height: 19px;
    width: 28px;
    .images('true')
  }
  & /deep/ .van-cell__title {
    color: rgba(102, 102, 102, 1);
    font-size: 26px;
    line-height: 40px;
    // padding: 0 35px;
  }
  & /deep/ .van-cell__value {
    color: rgba(102, 102, 102, 1);
    font-size: 26px;
    line-height: 40px;
    // color: #fff;
    // background: rgba(255, 156, 0, 1);
    // line-height: 127px;
    // text-align: center;
    // font-size: 28px;
    // width: 177px;
  }
  & /deep/ .van-swipe-cell__right {
    color: #fff;
    background: rgba(255, 156, 0, 1);
    line-height: 127px;
    text-align: center;
    font-size: 28px;
    width: 177px;
  }
  & /deep/ .van-cell {
    padding: 0 35px;
  }
}
</style>
