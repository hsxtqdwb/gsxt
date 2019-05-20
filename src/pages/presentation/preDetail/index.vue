<template>
  <div id="waterdetail">
    <page-head class="detail-head" title="水质详情"></page-head>
    <div v-if="content" class="p-content-wrap">
      <h2 class="p-title">{{content.TITLE}}</h2>
      <p class="p-time" >{{content.UPDATE_TIME}}</p>
      <p class="p-content" v-html="content.CONTENTS"></p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import PageHead from "../../../components/pageHead/pageHead";
import { Toast } from 'vant';
Vue.use(Toast)
export default {
  data() {
    return {
      content:null,
    }
  },
  mounted(){
    const ID = this.$route.params.id
    this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10025&grantcode=88888888`,{
      ID
    }).then(res=>{
      if(res.invokeResultCode === '000'){
        this.content = res.result
      }else{
        Toast.fail(res.msg)
      }
    })
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
#waterdetail {
  .p-content-wrap {
    padding: 35px;
    padding-top: 125px;
    box-sizing: border-box;
    background: #fff;
    min-height: 100vh;
    .p-title {
      text-align: center;
      font-size: 32px;
      color: #333333;
      line-height: 40px;
    }
    .p-time {
      text-align: center;
      font-size: 22px;
      color: #999999;
      line-height: 80px;
    }
    .p-content {
      text-align: left;
      text-indent: 2em;
      font-size: 26px;
      color: #666666;
      line-height: 40px;
    }
  }
}
</style>

