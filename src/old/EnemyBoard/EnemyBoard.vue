<template>
  <div>
    <h3>Enemy board</h3>
    <div class="enemy-container" v-on:keyup="keyEventHandler" tabindex="0"
         ref="enemyBoardRef" v-on:click="clickEventHandler">
      <enemy enemy-class="rogue" hp="50" name="Bolo" v-bind:id=1 v-bind:selected="this.selected"
             v-on:changeSelectedElement="handleChangeSelected($event)"></enemy>
      <enemy enemy-class="warrior" hp="50" name="Conan" v-bind:id=2 v-bind:selected="this.selected"
             v-on:changeSelectedElement="handleChangeSelected($event)"></enemy>
      <enemy enemy-class="mage" hp="50" name="Sonia" v-bind:id=3 v-bind:selected="this.selected"
             v-on:changeSelectedElement="handleChangeSelected($event)"></enemy>
      <enemy enemy-class="archer" hp="50" name="Xoxo" v-bind:id=4 v-bind:selected="this.selected"
             v-on:changeSelectedElement="handleChangeSelected($event)"></enemy>
    </div>
  </div>
</template>

<script>
import Enemy from '../Enemy/Enemy';

export default {
  name: "EnemyBoard",
  components: {'enemy': Enemy},
  mounted() {
    this.setFocus();
  },
  data() {
    return {
      selected: 1
    }
  },
  methods: {
    setFocus() {
      this.$refs.enemyBoardRef.focus();
    },
    keyEventHandler(event) {
      switch (event.code) {
        case 'ArrowLeft': {
          this.selected = this.selected - 1;
          break;
        }
        case 'ArrowRight': {
          this.selected = this.selected + 1;
          break;
        }
      }
      console.log(this.selected);
    },
    clickEventHandler() {
      this.setFocus();
    },
    handleChangeSelected(event) {
      this.selected = event.selected;
      this.setFocus();
    }
  }
}
</script>

<style scoped>
.enemy-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  outline: 0;
}
</style>