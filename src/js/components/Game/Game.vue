<template>
  <div>
    <h2>Game on!</h2>
    <hit-box></hit-box>
  </div>
</template>

<script>
import HitBox from "./HitBox/HitBox";

export default {
  name: "Game",
  components: {
    'hit-box': HitBox
  }
}
</script>

<style scoped>

</style>