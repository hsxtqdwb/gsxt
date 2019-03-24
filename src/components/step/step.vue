<template>
  <div id="step">
    <div v-if="step" class="step-wrap">
      <div v-for="(item,key) in getStep" :key="key" :class="['no-step',failIndex&&failIndex==key?'fail':'',index&&index==key?'active':'']">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    step: [String, Number],//几个步骤
    index:[String, Number],//当前进行的步骤
    failIndex:[String, Number],//失败的步骤
  },
  mounted() {
  },
  computed: {
    getStep: function() {
      let b = [];
      for (let i = 0; i < this.step; i++) {
        b.push(i + 1);
      }
      return b;
    }
  }
};
</script>
<style lang="less" scoped>
.no-step {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid rgba(211, 211, 211, 1);
  text-align: center;
  line-height: 58px;
  box-sizing: border-box;
  color: rgba(211, 211, 211, 1);
  font-size: 28px;
  font-family: "PingFang-SC-Bold";
  font-weight: bold;
  margin-right: 50px;
  &.active{
      color: #fff;
      background-image: linear-gradient(rgba(52, 184, 239, 1) 0%, rgba(90, 206, 251, 1) 100%);
      border: none
  }
  &.fail{
      color: #fff;
      background-image: linear-gradient(rgba(239, 52, 52, 1) 0%, rgba(229, 98, 98, 1) 100%);
      border: none
  }
  &::after{
      content: "";
      width: 50px;
      height: 0px;
      border-top:2px dashed rgba(211, 211, 211, 1) ;
      display: block;
      position: absolute;
      left:60px;
      top:30px;
  }
  &:nth-last-of-type(1)::after{
      border:none
  }
}
.step-wrap {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
</style>
