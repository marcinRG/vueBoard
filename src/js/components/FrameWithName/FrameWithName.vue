<template>
  <div class="frame block-with-shadow">
    <div class="frame-name">{{ frameName }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FrameWithName",
  props: {
    frameName: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.frame {
  position: relative;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
  background-color: green;
}

.hidden {
  display: none;
}

.frame-name {
  position: absolute;
  color: white;
  top: -10px;
  background-color: green;
  text-shadow: black 3px 2px 0px;
  padding: 0 5px;
  left: 5px;
  text-align: left;
}


</style>