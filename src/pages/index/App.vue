<template>
  <div >
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
        <div class="i_view-detail">查看详情</div>
      </div>
    </div>
    <div class="i_content">
      <!-- <div> -->
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
        <div class="i_nav_list">
          <div class="i_list_icon">
            <img src="../../assets/images/index/icon-1.png" alt="">
          </div>
          <div class="i_list_desc">
            <p class="i_desc_title">我的档案</p>
            <p class="i_desc_info">个人信息登记</p>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
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
  padding: 0 40px 200px;
  box-sizing: border-box;
  .i_nav_list {
    margin-top: 50px;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    box-sizing: border-box;
    .i_list_icon{
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .i_list_desc {
      .i_desc_title{
        color: #333;
        font-size: 28px;
      }
      .i_desc_info{
        margin-top: 15px;
        font-size: 24px;
        color: #999;
      }
    }
    &:nth-of-type(2n){
      padding-left:50px;
    }
  }
  &::after{
    position: absolute;
    top:0;
    left:340px;
    width: 1px;
    height: 100%;
    background-color: rgba(238,238,238,1);
    content:"",;
    display:block;
  }
}
</style>
