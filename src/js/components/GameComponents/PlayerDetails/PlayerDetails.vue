<template>
  <div class="player-details block-with-shadow">
    <div><p>Moves</p>
      <move-display></move-display>
    </div>

    <div>debuffs:</div>
  </div>
</template>

<script>
import MoveDisplay from "../MoveDisplay/MoveDisplay";

export default {
  name: "PlayerDetails",
  components: {MoveDisplay}
}
</script>

<style scoped>

</style>