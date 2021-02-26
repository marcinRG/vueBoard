<template>
  <div class="target" v-bind:style="this.position">
    <img class="background-image" src="../../../../images/aim.png"/>
    <img class="target-image" v-bind:src="this.img" v-if="this.img"/>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: false
    },
    position: {
      type: Object,
      required: false
    }
  },
  name: "HitTarget"
}
</script>

<style scoped>
.target {
  position: absolute;
  width: 120px;
  height: 120px;
  /*top: 30px;*/
  /*left: 50px;*/
}

.target-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 30px;
  height: 30px;
  z-index: 10;
}

.background-image {
  top: 0;
  left: 0;
  z-index: 5;
  position: absolute;
  width: 120px;
  height: 120px;
}
</style>
