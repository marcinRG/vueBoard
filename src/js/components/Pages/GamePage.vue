<template>
   <div>
      <game-panel></game-panel>
   </div>
</template>

<script>
import Game from "../Game/GameScreen/Game";
export default {
name: "GamePage",
  components: {'game-panel': Game}
}
</script>

<style scoped>

</style>