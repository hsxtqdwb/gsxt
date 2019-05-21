<template>
  <div>授权中</div>
</template>
<script>
export default {
  mounted() {
      console.log(1)
    let URL = window.location.href;
    this.http
      .get(
        `/sw/metadata/DataSerController/getdata.do?servicecode=10026&grantcode=88888888`,
        {
          URL
        }
      )
      .then(res => {
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          res.appid
        }&redirect_uri=http://www.cyszls.com:81/gsxt&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
      });
  }
};
</script>

<style lang="less" scoped>
</style>
