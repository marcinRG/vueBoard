<template>
  <div class='game-panels'>
    <component v-bind:is='getComponentName'></component>
    <splash-screen v-bind:duration=5000 v-bind:visible="this.isVisible" v-bind:action="this.someAction"></splash-screen>
    <button v-on:click="changeVisibility">Set visible</button>
  </div>
</template>

<script>

import {gameStates} from '../../game/gameStates';
import Loading from './loading/Loading';
import Start from './start/Start';
import ChooseEnemies from './choose-enemies/ChooseEnemies';
import AttackEnemy from "./attatck-enemy/AttackEnemy";
import SplashScreen from "../SplashScreen/SplashScreen";

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
  name: 'Game',
  components: {
    SplashScreen,
    'game-loading': Loading,
    'game-start': Start,
    'choose-enemies': ChooseEnemies,
    'attack-enemy': AttackEnemy
  },
  computed: {
    gameState() {
      return this.$store.state;
    },
    getComponentName() {
      return getComponent(this.$store.state.GameState)
    }
  },
  data() {
    return {
      isVisible:true
  }
  },
  methods: {
    changeVisibility() {
      this.isVisible = !this.isVisible
      console.log(this.isVisible)
    },
    someAction() {
      console.log('some action')
    }
  }
}
</script>

<style scoped>
.game-panels {
  background-color: green;
  width: 100%;
  height: 700px;
}
</style>