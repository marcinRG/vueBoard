<template>
  <div class="attack-enemy">
    <div class="enemy-wrapper">
      <div>
        <frame-with-name frame-name="Enemy">
          <enemy-details></enemy-details>
        </frame-with-name>
        <frame-with-name frame-name="Player">
          <player-details></player-details>

        </frame-with-name>
      </div>

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
import PlayerDetails from "../../GameComponents/PlayerDetails/PlayerDetails";
import FrameWithName from "../../GameComponents/FrameWithName/FrameWithName";


export default {
  components: {
    'player-details': PlayerDetails,
    'hit-box': HitBox,
    'enemy-details': EnemyDetails,
    'frame-with-name': FrameWithName,
  },
  computed: {
    getSelectedEnemy() {
      return this.$store.getters.getSelectedEnemy;
    }
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
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  justify-content: center;
}

.enemy-wrapper > div {
  margin: 0 20px;
}

</style>
