<template>
  <div class="u-header">
    <i @click="goPrev" class="u-arrow-icon"></i>
    {{title}}
    <slot></slot>    
  </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    methods:{
        goPrev(){
            this.$router.go(-1)
        }
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
.u-header{
    z-index:99;
    text-align: center;
    font-size: 32px;
    height: 90px;
    line-height: 90px;
    width: 750px;
    background-color:#fff; 
    position: relative;
    .u-arrow-icon{
        .images('l_arrow');
        width: 16px;
        height: 30px;
        display: block;
        position: absolute;
        top:30px;
        left:35px;
    }
}
</style>
