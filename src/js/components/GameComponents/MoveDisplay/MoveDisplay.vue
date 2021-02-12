<template>
  <div class="move-display">
    <move></move>
    <move></move>
  </div>
</template>

<script>
import Move from '../Move/Move';

export default {
  components: {
    move: Move
  },
  name: "MoveDisplay"
}
</script>

<style scoped>
  .move-display {
     display: flex;
  }
</style>