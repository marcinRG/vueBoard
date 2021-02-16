<template>
  <div class="player-details">
    <stat-bar stat-name="HP" v-bind:value="this.getPlayer.Hp" v-bind:max="this.getPlayer.maxHp"></stat-bar>
    <p class="label-player-details">moves:</p>
    <div class="moves-wrapper">
      <move-display v-bind:moves="getPlayer.moves"></move-display>
    </div>
    <p class="label-player-details" v-if="getPlayer.debuffs.length">debuffs:</p>
  </div>
</template>

<script>
import MoveDisplay from "../MoveDisplay/MoveDisplay";
import StatBar from "../StatBar/StatBar";

export default {
  name: "PlayerDetails",
  components: {StatBar, MoveDisplay},
  computed: {
    getPlayer() {
      return this.$store.getters.getPlayer;
    }
  }
}
</script>

<style scoped>

.label-player-details {
  width: 100%;
  display: block;
  text-align: left;
  margin: 20px 0 10px;
  color: white;
  text-shadow: black 2px 1px 0;
}

</style>