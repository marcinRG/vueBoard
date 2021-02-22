<template>
  <div class="enemy-details">
    <div class="enemy-wrapper">
      <div class="enemy-image"></div>
      <div class="enemy-stats">
        <stat-bar max="100" value="80" stat-name="Hp"></stat-bar>
      </div>
    </div>
    <div class="damage-wrapper"></div>
  </div>
</template>
<script>

import StatBar from "../StatBar/StatBar";

export default {
  name: "EnemyDetails",
  components: {StatBar},
  props: {
    enemy: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>
.enemy-details {
  padding: 7px;
  width: 400px;
  height: 250px;
  font-size: 14px;
}

.enemy-wrapper {
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-column-gap: 10px;
}

.enemy-stats {
  height: 80px;
}

.enemy-image {
  height: 140px;
  width: auto;
  background-color: white;
}

</style>