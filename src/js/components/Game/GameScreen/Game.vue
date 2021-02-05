<template>
  <div class="game-panel">
    <start-screen></start-screen>
    <enemy-board></enemy-board>
  </div>
</template>

<script>
import EnemyBoard from "../EnemyBoard/EnemyBoard";
import Start from '../GameStart/Start';

export default {
  name: "Game",
  components: {'enemy-board': EnemyBoard, 'start-screen': Start},
}
</script>

<style scoped>

</style>