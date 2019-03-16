<template>
  <div v-if='visible' class='my-model center-flex'>
    <div @click='close' ref='model' class='bg'></div>
    <div class='wrapper'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
      }
    },
    watch: {
      visible() {
        this.disabledScroll()
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      initModel() {
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      },
      disabledScroll() {
        if (this.visible) {
          this.$nextTick(() => {
            this.$refs.model.ontouchmove = (e) => {
              e.preventDefault()
            }
          })
        }
      }
    },
    mounted() {
      this.initModel()
      this.disabledScroll()
    },
    beforeDestroy() {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>

<style lang='less' scoped>
  .my-model {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .bg {
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
  }

  .wrapper {
    position: relative;
    z-index: 1;
    // background: white;
    
  }
</style>
