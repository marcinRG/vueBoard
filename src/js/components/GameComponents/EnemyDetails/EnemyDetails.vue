<template>
  <div class="enemy-details">
    <div class="enemy-wrapper">
      <img class="enemy-image" v-bind:src="getEnemy.enemyImg" v-bind:alt="getEnemy.enemyClass"/>
      <div class="enemy-stats">
        <stat-bar v-bind:max="getEnemy.maxHp" v-bind:value="getEnemy.Hp" stat-name="Hp"></stat-bar>
        <attacks-debuffs-wrapper list-name="attacks:" v-bind:elements="getEnemy.specialAttacks"></attacks-debuffs-wrapper>
      </div>
    </div>
    <div class="damage-wrapper"></div>
  </div>
</template>
<script>

import StatBar from "../StatBar/StatBar";
import DebuffsAttacksList from "../../GameComponents/Debuffs-Attacks-List/DebuffsAttacksList";

export default {
  name: "EnemyDetails",
  components: {StatBar,
    'attacks-debuffs-wrapper': DebuffsAttacksList},
  computed: {
    getEnemy() {
      return this.$store.getters.getSelectedEnemy;
    }
  }
}
</script>

<style scoped>
.enemy-details {
  padding: 7px;
  width: 440px;
  height: 180px;
  font-size: 14px;
}

.enemy-wrapper {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-column-gap: 10px;
}

.enemy-stats {
  height: 80px;
}

.enemy-image {
  height: 130px;
  width: auto;
  background-color: white;
  border: 5px solid white;
  box-shadow: 5px 5px 0 0 black;
}

</style>
