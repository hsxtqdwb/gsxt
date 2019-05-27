<template>
  <div>授权中</div>
</template>
<script>
export default {
  mounted() {
    let URL = window.location.href;
    this.http
      .get(
        `/sw/metadata/DataSerController/getdata.do?servicecode=10026&grantcode=88888888`,
        {
          URL
        }
      )
      .then(res => {
        if(res.invokeResultCode === '000'){
           window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${res.result.appid}&redirect_uri=http://www.cyszls.com/&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
        }
       });
  }
};
</script>

<style lang="less" scoped>
</style>
