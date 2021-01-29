<template>
  <div>
    <h2>Game on!</h2>
    <div>
      <p>To jest jakiś tekst</p>
      <enemy-board></enemy-board>
    </div>

  </div>
</template>

<script>
import EnemyBoard from "../EnemyBoard/EnemyBoard";
export default {
  name: "Game",
  components: {EnemyBoard},
}
</script>

<style scoped>

</style>