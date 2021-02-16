<template>
  <div class="move-display">
    <move v-for="move in moves" v-bind:id="move"></move>
  </div>
</template>

<script>
import Move from '../Move/Move';

export default {
  components: {
    move: Move
  },
  props: {
    moves: {
      type: Number,
      required: false
    }
  },
  name: "MoveDisplay"
}
</script>

<style scoped>
.move-display {
  display: flex;
}
</style>