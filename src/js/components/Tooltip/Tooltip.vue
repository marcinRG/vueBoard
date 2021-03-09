<template>
  <div class="tooltip block-with-shadow" v-bind:class="getClass" v-bind:style="setStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    positionX: {
      type: Number,
      required: false
    },
    positionY: {
      type: Number,
      required: false
    },
    showToolTip: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    getClass() {
      if (this.showToolTip) {
        return 'visible';
      }
      return '';
    },
    setStyle() {
      return {
        left: this.positionX + 'px',
        top: this.positionY + 'px'
      }
    }
  }
}
</script>

<style scoped>
.tooltip {
  position: fixed;
  z-index: 100;
  display: block;
  color: white;
  background-color: green;
  text-shadow: black 3px 2px 0;
  max-width: 250px;
  padding: 10px;
  left: 100px;
  top: 100px;
  opacity: 0;
  visibility: hidden;
}

.visible {
  visibility: visible;
  opacity: 1;
}

.tooltip h4 {
  font-weight: normal;
  text-transform: capitalize;
  text-decoration: underline;
  text-align: left;
  margin-bottom: 12px;
}

.tooltip p {
  text-align: justify;
  word-break: break-all
}


</style>