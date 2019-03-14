<template>
    <div id="user">
        <div class="u_header">
            <i class="u_arrow_icon"></i>
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
}
.u_header{
    .u_arrow_icon{
        .images('l_arrow')
    }
}
</style>

