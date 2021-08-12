<template>
  <div class="defense-phase-container">
    <frame-with-name frame-name="Enemies">
      <div class="enemies-container">
        <div v-for="(enemy,index) in getEnemies.enemies" class="enemy-miniature">
          <frame-with-name>
            <img class="enemy-image-small" v-bind:src="enemy.enemyImg" v-bind:alt="enemy.enemyClass"/>
            <attacks-debuffs-wrapper list-name="" v-bind:elements="enemy.specialAttacks"></attacks-debuffs-wrapper>
          </frame-with-name>
        </div>
      </div>
    </frame-with-name>
    <frame-with-name frame-name="Player">
      <stat-bar stat-name="HP" v-bind:value="this.getPlayer.Hp" v-bind:max="this.getPlayer.maxHp"></stat-bar>
    </frame-with-name>
    <fight-log v-bind:log-items="this.getEnemyAttacks"></fight-log>
    <div>
      <button v-on:click="showEnemy">Zakończ rundę</button>
    </div>
  </div>
</template>

<script>
import FightLog from "../../GameComponents/FightLog/FightLog";
import FrameWithName from "../../FrameWithName/FrameWithName";
import StatBar from "../../GameComponents/StatBar/StatBar";
import DebuffsAttacksList from "../../GameComponents/Debuffs-Attacks-List/DebuffsAttacksList";

export default {
  components: {
    FightLog,
    StatBar,
    'frame-with-name': FrameWithName,
    'attacks-debuffs-wrapper': DebuffsAttacksList
  },
  name: "DefendPhase",
  computed: {
    getEnemies() {
      return this.$store.getters.getEnemies;
    },
    getPlayer() {
      return this.$store.getters.getPlayer;
    },
    getEnemyAttacks() {
      return this.$store.getters.getEnemyAttacks;
    }
  },
  methods: {
    showEnemy() {
      console.log(this.getEnemies.enemies[0].specialAttacks)
    }
  }
}
</script>

<style scoped>

.defense-phase-container {
  padding: 50px;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
}

.enemies-container {
  display: flex;
  justify-content: center;
}

.enemy-miniature {
  padding: 10px;
  margin: 0 15px;
  min-width: 150px;
}

.enemy-image-small {
  display: block;
  margin: 0 auto;
  height: 90px;
  width: auto;
  background-color: white;
  border: 5px solid white;
  box-shadow: 5px 5px 0 0 black;
}

button {
  padding: 15px 30px;
  background-color: white;
  box-shadow: 7px 7px 0 0 black;
  cursor: pointer;
}
</style>