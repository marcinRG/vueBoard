<template>
  <div class="player-details">
    <stat-bar stat-name="HP" v-bind:value="this.getPlayer.Hp" v-bind:max="this.getPlayer.maxHp"></stat-bar>
    <p class="label-details">moves:</p>
    <div class="moves-wrapper">
      <move-display v-bind:moves="getPlayer.moves"></move-display>
    </div>
    <p class="label-details" v-if="getPlayer.debuffs.length">debuffs:</p>
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
</style>