<template>
    <div>
        <page-head title="绑定用户"></page-head>
        <div class="bind-wrap">
            <p class="bind-info">绑定信息</p>
            <p class="num-p">给水号</p>
            <div>
                <van-field ></van-field>
                <span>立即查询</span>
            </div>
        </div>
    </div>
</template>
<script>
import PageHead from '../../components/pageHead/pageHead'
import Vue from 'vue'
import {Field} from 'vant'
Vue.use(Field)
export default {
    components:{
        PageHead
    }
}
</script>
<style lang="less" scoped>
    .bind-wrap{
        width: 680px;
        margin: 30px 35px;
        background: #fff;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 30px;
        .bind-info{
            font-size:28px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:30px;
        }
        .num-p{
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(153,153,153,1);
            line-height:30px;
            margin-top: 25px;
        }
    }
</style>
