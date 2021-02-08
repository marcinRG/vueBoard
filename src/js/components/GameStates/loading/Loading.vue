<template>
  <div class="game-loading">
    <h2>Loading ...</h2>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.game-loading {
  background-color: green;
  width: 100%;
  height: 100%;
  position: relative;
}

.game-loading h2 {
  color: white;
  text-shadow: black 4px 2px 0px;
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>