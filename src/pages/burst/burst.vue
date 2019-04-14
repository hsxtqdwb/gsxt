<template>
    <div>
        <page-head title="暴漏举报">
            <i @click="join" class="burst-join"></i>
        </page-head>
        <div class="burst-list-wrap">
            <div class="burst-list">
                <div class="burst-list-l">
                    新闻路水漏
                </div>
                <i class="burst-list-r"></i>
            </div>
        </div>
    </div>
</template>
<script>
import PageHead from '../../components/pageHead/pageHead'
export default {
    methods:{
        join:function(){
            this.$router.push('/addBurst')
        }
    },
    components:{
        PageHead
    }
}
</script>
<style lang="less" scoped>
.images(@url) {
  background-image: url("../../assets/images/burst/@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("../../assets/images/burst/@{url}@3x.png");
  }
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.burst-join{
    position: absolute;
    top: 30px;
    right: 30px;
    .images('join');
    width: 30px;
    height: 30px;
    display: block;
}
.burst-list{
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 86px;
    background: #fff;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    .burst-list-l{
        color: rgba(51, 51, 51, 1);
        font-size: 28px;
    }
    .burst-list-r{
        width: 15px;
        height: 27px;
        .images('arrow');
        display: block;
    }
}
</style>
