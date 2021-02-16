<template>
  <div class="stat-bar">
     <span class="stat-text">
         {{ statName }}:{{ value }}/{{ max }}
     </span>
    <div class="property-bar" v-bind:style="setBarStyle"></div>
    <div class="max-property-bar"></div>
  </div>
</template>

<script>
export default {
  name: "StatBar",
  props: {
    statName: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false
    }

  },
  computed: {
    setBarStyle() {
      return {
        width: Math.round((this.value / this.max) * 100) + '%',
        backgroundColor: this.color || 'red'
      }
    }
  }
}
</script>

<style scoped>
.stat-bar {
  padding: 5px 0;
  text-align: left;
  color: white;
  text-shadow: black 2px 1px 0;
  position: relative;
  height: 25px;
  margin: 10px 0;
  box-shadow: 5px 5px 0 0 black;
}

.stat-text {
  position: absolute;
  z-index: 5;
  padding-left: 3px;
}

.property-bar {
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 4;
}

.max-property-bar {
  position: absolute;
  background-color: yellow;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}


</style>