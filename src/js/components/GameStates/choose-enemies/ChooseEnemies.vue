<template>
  <div class="enemy-board">
    <p>Choose enemies</p>
    <div class="enemy-container" v-on:keyup="keyEventHandler" tabindex="0"
         ref="enemyBoardRef" v-on:click="clickEventHandler">
      <div v-for="(enemy,index) in getEnemies.enemies">
        <enemy v-bind:id="index" v-bind:enemy-class="enemy.enemyClass" v-bind:hp="enemy.hp"
               v-bind:selected="getEnemies.selectedEnemy"></enemy>
      </div>
    </div>
    <button v-on:click="checkState">Check state</button>
  </div>
</template>

<script>
import EnemyListComponent from "../../GameComponents/EnemyListElement/EnemyListComponent";

export default {
  name: "ChooseEnemies",
  mounted() {
    this.setFocus();
  },
  components: {'enemy': EnemyListComponent},
  methods: {
    checkState() {
      console.log(this.getEnemies);
    },
    setFocus() {
      this.$refs.enemyBoardRef.focus();
    },
    keyEventHandler(event) {
      switch (event.code) {
        case 'ArrowLeft': {
          console.log('left');
          break;
        }
        case 'ArrowRight': {
          console.log('right');
          break;
        }
      }
    },
    clickEventHandler() {
      this.setFocus();
    }
  },
  computed: {
    getEnemies() {
      return this.$store.getters.getEnemies;
    }
  }
}
</script>

<style scoped>
.enemy-board {
  border: 1px dotted black;
}

</style>