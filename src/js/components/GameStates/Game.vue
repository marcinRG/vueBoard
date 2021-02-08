<template>
  <div class="game-panels">
    <component v-bind:is="getComponentName"></component>
  </div>
</template>

<script>

import {gameStates} from "../../game/gameStates";
import Loading from "./loading/Loading";
import Start from "./start/Start";

function getComponent(gameState) {
  switch (gameState) {
    case gameStates.LOADING: {
      return 'game-loading';
    }
    case gameStates.START: {
      return 'game-start';
    }
    case gameStates.CHOOSE_ENEMIES: {
      return 'choose-enemies';
    }
    case gameStates.ATTACK_ENEMY: {
      return 'attack-enemy';
    }
    case gameStates.DEFEND_PLAYER: {
      return 'defend-player';
    }
    default: {
      return 'game-loading';
    }
  }
}

export default {
  name: "Game",
  components: {'game-loading': Loading, 'game-start': Start},
  mounted() {
  },
  computed: {
    gameState() {
      return this.$store.state;
    },
    getComponentName() {
      return getComponent(this.$store.state.GameState)
    }
  },
  methods: {
    checkState() {
      this.$store.commit('initGame');
    }
  }
}
</script>

<style scoped>
.game-panels {
  background-color: green;
  width: 100%;
  height: 750px;
}
</style>