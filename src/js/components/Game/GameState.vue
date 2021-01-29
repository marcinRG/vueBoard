<template>
  <div>
    <h2>Game on!</h2>
    <div>
      <p>To jest jakiś tekst</p>
      <enemy-board></enemy-board>
    </div>

  </div>
</template>

<script>

import EnemyBoard from "./EnemyBoard/EnemyBoard";
export default {
  name: "Game",
  components: {EnemyBoard},
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
        state: 'start',
        score: 0,
        level: 0
      }
    }
  },
}
</script>

<style scoped>

</style>