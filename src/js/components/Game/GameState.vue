<template>
  <div></div>
</template>

<script>

import {gameStates} from "../../utils/gameStates";

export default {
  name: "Game",
  data() {
    return {
      enemyTypes: [
        {
          name: 'Baba',
          hp: 100,
          enemyClass: 'rogue'
        },
        {
          name: 'Byq',
          hp: 85,
          enemyClass: 'tank'
        },
        {
          name: 'Wydra',
          hp: 55,
          enemyClass: 'berserk'
        }
      ],
      state: {
        state: gameStates.START,
        score: 0,
        level: 0
      }
    }
  },
}
</script>

<style scoped>
.game-panel {
  width: 100%;
}
</style>