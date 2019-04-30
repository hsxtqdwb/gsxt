<template>
  <div>
    <PageHead title="个人档案"></PageHead>
    <div class="r-avatar-wrap">
      <div class="r-avatar">
        <img src="../../assets/images/index/avatar.jpg" alt>
      </div>
      <div class="r-nick">123</div>
    </div>
    <div class="r-user-info">
      <div class="r-content">
        <div class="r-left">户名</div>
        <div class="r-right">
          <div>{{userData&&userData.USER_NO}}</div>
          <i class="r-arrow"></i>
        </div>
      </div>
      <div class="r-content">
        <div class="r-left">用户名称</div>
        <div class="r-right">
          {{userData&&userData.NAME}}
        </div>
      </div>
       <div class="r-content">
        <div class="r-left">地址</div>
        <div class="r-right">
          {{userData&&userData.ADDRESS}}
        </div>
      </div>
       <div class="r-content">
        <div class="r-left">性质</div>
        <div class="r-right">
          {{userData&&userData.WATER_NATURE}}
        </div>
      </div>
       <div class="r-content">
        <div class="r-left">电话</div>
        <div class="r-right">
          {{userData&&userData.PHONE}}
        </div>
      </div>
       <div class="r-content">
        <div class="r-left">口径</div>
        <div class="r-right">
          {{userData&&userData.CALIBER}}
        </div>
      </div>
       <div class="r-content">
        <div class="r-left">大小表</div>
        <div class="r-right">
          {{userData&&userData.METER_TYPE}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageHead from "components/pageHead/pageHead";
export default {
  data(){
    return{
      userData:{

      }
    }
  },
  mounted(){
    this.http.get(`/sw/metadata/DataSerController/getdata.do?servicecode=10009&grantcode=88888888`,{OPEN_ID:'1215451121215145501575242GHN'})
    .then(res=>{
      if(res.invokeResultCode === '000'){
        this.userData = res.result
      }
    })
  },
  components: {
    PageHead
  }
};
</script>
<style lang="less" scoped>
.images(@url){
    background-image: url("../../assets/images/user/@{url}@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
        background-image: url("../../assets/images/user/@{url}@3x.png");
    }
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.r-avatar-wrap {
  margin-top: 20px;
  width: 738px;
  height: 178px;
  background: #fff;
  display: flex;
  align-items: center;
  .r-avatar {
    width: 118px;
    height: 118px;
    border-radius: 59px;
    overflow: hidden;
    margin-left: 35px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .r-nick {
    margin-left: 30px;
    color: rgba(51, 51, 51, 1);
    font-size: 32px;
  }
}
.r-user-info {
  padding: 0 35px;
  background: #fff;
  margin-top: 20px;
  .r-content {
    height: 86px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .r-left{
        line-height: 86px;
        font-size: 28px;
        color: rgba(51, 51, 51, 1);
    };
    &:nth-of-type(1){
        border-top:none;
    }
  }
}
.r-arrow{
    .images('r_arrow');
    width:15px;
    height: 27px;
    display: block;
    margin-left: 22px;
}
.r-right{
    color: rgba(102, 102, 102, 1);
    font-size: 28px;
    font-family: "PingFang-SC-Medium";
    display: flex;
}
</style>
