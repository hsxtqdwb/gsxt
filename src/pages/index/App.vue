<template>
  <div id="app">
    <div class="i_header">
      <div class="i_userinfo">
        <div class="i_avatar_wrap">
          <img :src="avatar" alt>
        </div>
        <div class="i_nickinfo">
          <div class="i_nick">{{nick}}</div>
          <div class="i_verify_wrap">
            <i class="i_verify_icon"></i>
            <span class="i_verify">已认证</span>
          </div>
        </div>
        <div @click="getUrl('/user')" class="i_view-detail">查看详情</div>
      </div>
    </div>
    <div class="i_content">
      <!-- <div> -->
      <div @click="getUrl('/userrecord')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-1.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">我的档案</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>
      <div @click="getUrl('/wateramount')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-2.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">水费账单</p>
          <p class="i_desc_info">了解当月账单</p>
        </div>
      </div>
      <div class="i_nav_list" @click="getUrl('/management')">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-3.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">业务办理</p>
          <p class="i_desc_info">快速办理</p>
        </div>
      </div>
      <div @click="getUrl('/stopWater')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-4.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">停水通知</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>
      <div @click="getUrl('/waterPrice')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-5.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">水价标准</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>
      <!-- <div @click="getUrl('/invoiceMsg')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-6.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">发票管家</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>-->
      <div class="i_nav_list" @click="getUrl('/burst')">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-7.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">报漏举报</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>
      <div class="i_nav_list" @click="getUrl('/bindUserSearch')">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-8.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">绑定用户</p>
          <p class="i_desc_info">便于操作</p>
        </div>
      </div>
      <div @click="getUrl('/presentation')" class="i_nav_list">
        <div class="i_list_icon">
          <img src="../../assets/images/index/icon-9.png" alt>
        </div>
        <div class="i_list_desc">
          <p class="i_desc_title">水质报告</p>
          <p class="i_desc_info">个人信息登记</p>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { getItem } from "../../utils";
export default {
  name: "App",
  data() {
    return {
      nick: "",
      avatar: ""
    };
  },
  mounted() {
    const USER_INFO = getItem("USER_INFO");
    if (USER_INFO) {
      this.nick = USER_INFO.nickname;
      this.avatar = USER_INFO.headimgurl;
    }
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
  z-index:99;
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
        display: block;
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
  z-index:999;
  top: -35px;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.06);
  .i_nav_list {
    width: 340px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    box-sizing: border-box;
    border-top: 1px solid rgba(238, 238, 238, 1);
    .i_list_icon {
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .i_list_desc {
      width: 150px;
      .i_desc_title {
        color: #333;
        font-size: 28px;
      }
      .i_desc_info {
        margin-top: 15px;
        font-size: 24px;
        color: #999;
      }
    }
    &:nth-of-type(2n-1)::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      height: 160px;
      width: 1px;
      background: rgba(238, 238, 238, 1);
    }
    &:nth-of-type(1),
    &:nth-of-type(2) {
      border-top: none;
    }
  }
}
</style>
