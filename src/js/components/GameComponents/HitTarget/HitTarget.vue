<template>
  <div class="target">
    <img class="background-image" src="../../../../images/aim.png"/>
    <img class="target-image" src="../../../../images/fire-round-button.png"/>
  </div>
</template>

<script>
export default {
  name: "HitTarget"
}
</script>

<style scoped>
.target {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 30px;
  left: 50px;
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