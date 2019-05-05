<template>
  <div id="app">
    <page-head title="业务办理"></page-head>
    <div class="i_header">
      <div class="i_userinfo">
        <div class="i_avatar_wrap">
          <img src="../../assets/images/index/avatar.jpg" alt>
        </div>
        <div class="i_nickinfo">
          <div class="i_nick">123456</div>
          <div class="i_verify_wrap">
            <i class="i_verify_icon"></i>
            <span class="i_verify">已认证</span>
          </div>
        </div>
        <div @click="getUrl('/user')" class="i_view-detail">查看详情</div>
      </div>
    </div>
    <div class="i_content">
      <div @click="getUrl('/business')" class="i_nav_list">
        <img class="i_icon_before" src="../../assets/images/management/m1.png" alt>
        <p class="i_desc_title">一户一表供水协议</p>
        <img class="i_icon_after" src="../../assets/images/management/arr.png" alt>
      </div>
      <div @click="getUrl('/changeInfo')" class="i_nav_list">
        <img class="i_icon_before" src="../../assets/images/management/m2.png" alt>
        <p class="i_desc_title">变更用户名称及过户登记</p>
        <img class="i_icon_after" src="../../assets/images/management/arr.png" alt>
      </div>
      <div @click="getUrl('/changeWaterProperty')" class="i_nav_list">
        <img class="i_icon_before" src="../../assets/images/management/m3.png" alt>
        <p class="i_desc_title">变更用水性质</p>
        <img class="i_icon_after" src="../../assets/images/management/arr.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import PageHead from "../../components/pageHead/pageHead";
export default {
  name: "App",
  components: {
    PageHead
  },
  methods: {
    getUrl(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style lang='less' scoped>
.i_header {
  width: 750px;
  height: 319px;
  background: url("../../assets/images/index/bg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .i_userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    .i_avatar_wrap {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .i_nickinfo {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      .i_nick {
        color: #fff;
        font-size: 24px;
      }
      .i_verify_wrap {
        display: flex;
        justify-content: center;
        margin-left: 20px;
        .i_verify {
          color: #fff;
          font-size: 24px;
        }
        .i_verify_icon {
          height: 25px;
          width: 20px;
          background: url("../../assets/images/index/icon-10.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .i_view-detail {
      margin-top: 15px;
      width: 120px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 10px;
      line-height: 40px;
      font-size: 24px;
      color: #fff;
      text-align: center;
    }
  }
}
.i_content {
  display: flex;
  flex-wrap: wrap;
  width: 680px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  position: relative;
  top: -35px;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.06);
  .i_nav_list {
    width: 680px;
    padding: 0 35px;
    box-sizing: border-box;
    position: relative;
    border-bottom: solid 1px #eeeeee;
    // display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
    line-height: 90px;
    box-sizing: border-box;
    .i_icon_before {
      float: left;
      width: 36px;
      margin-top: 44px;
      transform: translateY(-50%);
    }
    .i_desc_title {
      float: left;
      font-size: 28px;
      padding-left: 30px;
      color: #666666;
    }
    .i_icon_after {
      float: right;
      width: 20px;
      margin-top: 28px;
    }
  }
}
</style>
