<template>
  <div class="line" v-bind:class="lineType" v-bind:style="setStyle"></div>
</template>

<script>
export default {
  name: "MovingLine",
  props: {
    position: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    lineType: {
      type: String,
      required: true
    }
  },
  computed: {
    setStyle() {
      let objStyle = {
        left: '0px',
        top: '0px'
      }
      if (this.lineType === 'horizontal') {
        objStyle.top = this.position + 'px';
      }
      if (this.lineType === 'vertical') {
        objStyle.left = this.position + 'px';
      }
      return objStyle;
    }
  }
}
</script>

<style scoped>

.line {
  position: absolute;
}

.line.horizontal {
  width: 100%;
  height: 3px;
  background-color: deeppink;
  z-index: 20;
}

.line.vertical {
  height: 100%;
  width: 3px;
  z-index: 20;
  background-color: magenta;
}


</style>
