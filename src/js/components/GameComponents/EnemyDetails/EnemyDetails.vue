<template>
  <div class="enemy-details">
    <p>
      Enemy details
    </p>
    <div class="enemy-wrapper"></div>
    <div class="damage-wrapper"></div>
    <move-display></move-display>
  </div>
</template>

<script>
import MoveDisplay from "../MoveDisplay/MoveDisplay";
export default {
name: "EnemyDetails",
  components: {MoveDisplay}
}
</script>

<style scoped>
   .enemy-details {
     padding: 7px;
     border: 4px solid white;
     box-shadow: 7px 7px 0 0 black;
     width: 280px;
     height: 420px;
     font-size: 14px;
   }
</style>