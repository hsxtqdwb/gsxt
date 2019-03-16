<template>
    <div>
        <page-head title="用户列表"></page-head>
        <div class="u-list-wrap">
            <div class="u-list-title">已绑定用户列表</div>
        </div>
    </div>
</template>
<script>
import PageHead from '../../components/pageHead/pageHead'
export default {
    components:{
        PageHead
    }
}
</script>
<style lang="less" scoped>
.u-list-wrap{
    background: #fff;
    margin-top:20px;
    overflow: hidden;
    .u-list-title{
        color: rgba(51, 51, 51, 1);
        font-size: 'PingFang-SC-Bold';
        font-weight: bold;
        height: 86px;
        line-height: 86px;
        padding: 0 35px;
    }
}
</style>
