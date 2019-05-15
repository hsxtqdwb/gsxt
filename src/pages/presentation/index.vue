<template>
  <div id="presentation">
    <page-head title="水质报告"></page-head>
    <div class="presentation-list">
      <div v-for="(item,index) in list" :key="index">
        <p>
          <span class="presentation-list-left">{{item.title}}</span>
          <span class="presentation-list-right">{{item.time}}</span>
        </p>
      </div>
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
      params:{
        CURRENT_PAGE:1,
        PAGE_SIZE:10,
        TYPE:3
      },
      reportList:[],
      list: [
        {
          title: "某某小区水质量抽查报告",
          time: "2017-01-02"
        },
        {
          title: "某某小区水质量抽查报告",
          time: "2017-01-02"
        },
        {
          title: "某某小区水质量抽查报告",
          time: "2017-01-02"
        },
        {
          title: "某某小区水质量抽查报告",
          time: "2017-01-02"
        },
        {
          title: "某某小区水质量抽查报告",
          time: "2017-01-02"
        }
      ]
    };
  },
  mounted(){
    this.http.get(`sw/metadata/DataSerController/getdata.do?servicecode=10020&grantcode=88888888`,{
      ...this.params
    }).then(res =>{
      console.log(res)
      if(res.invokeResultCode === '000'){
        this.reportList=res.result.list
      }
    })
  },
  components: {
    PageHead
  },
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Vant.Toast(item.name);
    },
    getReportList(){}
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
