<template>
   <div>
     <h2>Game</h2>
     <p>Game page</p>
     <enemy-board></enemy-board>
   </div>
</template>

<script>
import EnemyBoard from "../Game/EnemyBoard/EnemyBoard";
export default {
name: "GamePage",
  components: {EnemyBoard}
}
</script>

<style scoped>

</style>