<template>
  <div>
    <h3>Enemy board</h3>
    <div class="enemy-container">
      <enemy enemy-class="XXXX" hp=50 name="Xoxo"></enemy>
      <enemy enemy-class="XXXX" hp=50 name="Xoxo"></enemy>
      <enemy enemy-class="XXXX" hp=50 name="Xoxo"></enemy>
      <enemy enemy-class="XXXX" hp=50 name="Xoxo"></enemy>
    </div>
  </div>
</template>

<script>
import Enemy from '../Enemy/Enemy';

export default {
  name: "EnemyBoard",
  components: {'enemy': Enemy}
}
</script>

<style scoped>
  .enemy-container {
    display: grid;
    grid-template-columns: repeat(5, 200px);
  }
</style>