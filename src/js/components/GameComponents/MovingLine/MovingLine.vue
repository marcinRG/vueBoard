<template>
  <div>
    <div class="line" v-bind:class="lineType" v-bind:style="setStyle"></div>
  </div>
</template>

<script>

import {movableObjectMixin} from '../../../mixins/movableObjectMixin'

export default {
  name: "Moving-Line",
  props: {
    position: {
      type: Number,
      required: true
    },
    lineType: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    run: {
      type: String,
      required: false
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
  },
  mixins: [movableObjectMixin]
}
</script>

<style scoped>
.line {
  position: absolute;
}

.text {
  position: absolute;
}

.line.horizontal {
  width: 100%;
  height: 2px;
  background-color: darkorange;
}

.line.vertical {
  height: 100%;
  width: 2px;
  background-color: indianred;
}

</style>