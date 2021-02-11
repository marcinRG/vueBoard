<template>
  <div class="attack-enemy">
    <p>Attack enenmy</p>
    <div class="enemy-wrapper">
      <enemy-details></enemy-details>
      <hit-box></hit-box>
    </div>
    <div class="enemy-controls">
      <button>Powrót</button>
    </div>
  </div>
</template>

<script>
import HitBox from "../../GameComponents/HitBox/HitBox";
import EnemyDetails from "../../GameComponents/EnemyDetails/EnemyDetails";

export default {
  components: {
    'hit-box': HitBox,
    'enemy-details': EnemyDetails
  },
  name: "AttackEnemy"
}
</script>

<style scoped>

.attack-enemy {
  text-align: center;
}

.attack-enemy button {
  padding: 15px 30px;
  background-color: white;
  box-shadow: 7px 7px 0 0 black;
  cursor: pointer;
}

.enemy-controls {
  margin: 30px auto;
}

.enemy-wrapper {
  margin: 30px auto;
  display: flex;
  justify-content: center;
}

.enemy-wrapper > div {
  margin: 0 20px;
}

</style>