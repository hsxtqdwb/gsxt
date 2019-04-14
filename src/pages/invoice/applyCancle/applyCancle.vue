<template>
    <div>
        <page-head title="申请作废">
        </page-head>
        <div class="apply-content-wrap">
            <div class="apply-content-title">
                作废发票信息
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">办理时间</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">发票抬头</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">作废发票金额</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">作废发票邮回地址</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">联系电话</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">
                        作废发票代码
                        <span class="apply-content-p-span">
                            （位置在发票右上角）
                        </span>
                    </p>
                    <p class="apply-content-value"> 
                        <van-cell-group>
                            <van-field center v-model="value" placeholder="请输入用户名" >
                                <!-- <span>查看示例</span>  -->
                                <van-button slot="button" size="small">查看示例</van-button>
                            </van-field>
                            <!--  -->
                        </van-cell-group>
                    </p>
                </div>
            </div>
            <div class="apply-content">
                <div class="apply-content-list">
                    <p class="apply-content-p">申请理由</p>
                    <p class="apply-content-value"> 10000</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageHead from '../../../components/pageHead/pageHead'
import Vue from 'vue'
import { Field,CellGroup,Button } from 'vant';

Vue.use(Field).use(CellGroup).use(Button);
export default {
    data(){
        return{
            value:""
        }
    },
    components:{
        PageHead
    }
}
</script>

<style lang="less" scoped>
.apply-content-wrap{
    width: 680px;
    border-radius: 10px;
    background: #fff;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 0 30px;
    .apply-content-title{
        color:rgba(51, 51, 51, 1);
        font-size: 28px;
        font-family: 'PingFang-SC-Bold';
        font-weight: bold;
        margin: 30px 0;
    }
    .apply-content{
        
        .apply-content-list{
            margin-bottom: 30px;
            border-bottom:1px solid rgba(238, 238, 238, 1); 
            .apply-content-p{
                color:rgba(153, 153, 153, 1);
                font-size: 24px;
                .apply-content-p-span{
                    color:rgba(255, 156, 0, 1);
                    font-size: 24px;
                }
            }
            .apply-content-value{
                color: rgba(102, 102, 102, 1);
                font-size: 26px;
                padding: 30px 0;
                & /deep/ .van-field__control{
                    font-size: 26px;
                    height: 26px;
                    line-height: 26px;
                }
                & /deep/ .van-button{
                    color: rgba(52, 184, 239, 1);
                    font-size: 26px;
                    border:none
                }
                & /deep/ .van-hairline--top-bottom::after{
                    border-width:0
                }
            }
        }
    }
}
</style>
