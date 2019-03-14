<template>
    <div id="user">
        <div class="u_header">
            <i class="u_arrow_icon"></i>
            个人中心
        </div>
        <div class="u_avatar_wrap">
            <div class="u_avatar">
                <img src="../../assets/images/index/avatar.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
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
.u_header{
    text-align: center;
    font-size: 32px;
    height: 90px;
    line-height: 90px;
    width: 750px;
    background-color:#fff; 
    position: relative;
    .u_arrow_icon{
        .images('l_arrow');
        width: 16px;
        height: 30px;
        display: block;
        position: absolute;
        top:30px;
        left:35px;
    }
}
.u_avatar_wrap{
    height: 178px;
    width: 738px;
    .u_avatar{
        width: 118px;
        height: 118px;
        border-radius: 59px;
        overflow: hidden;
    }
}
</style>

