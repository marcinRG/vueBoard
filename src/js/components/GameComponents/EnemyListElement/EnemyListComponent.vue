<template>
  <div v-bind:class="setClassName" v-on:click="handleClickEvent">
    <div class="enemy-image-container"></div>
    <div class="enemy-properties-container">
      <table class="table-props">
        <tr>
          <td>id</td>
          <td> {{ this.id }}</td>
        </tr>
        <tr>
          <td>wybrany</td>
          <td> {{ this.selected }}</td>
        </tr>
        <tr>
          <td>klasa</td>
          <td> {{ this.enemyClass }}</td>
        </tr>
        <tr>
          <td>PŻ</td>
          <td> {{ this.hp }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnemyListComponent",
  props: {
    id: {
      type: Number,
      required: false
    },
    selected: {
      type: Number,
      required: false
    },
    enemyClass: {
      type: String,
      required: false
    },
    hp: {
      type: Number,
      required: false
    },
  },
  methods: {
    handleClickEvent() {
      this.$store.commit('selectEnemy',{id: this.id});
    }
  },
  computed: {
    setClassName() {
      let className = 'enemy';
      if (this.id === this.selected) {
        className = className + ' ' + 'selected';
      }
      return className;
    }
  }
}
</script>

<style scoped>


.enemy {
  margin: 60px 20px;
  padding: 7px;
  border: 4px solid white;
  box-shadow: 7px 7px 0 0 black;
  width: 280px;
  height: 420px;
  font-size: 14px;
  color: white;
  position: relative;
  cursor: pointer;
}

.enemy-image-container {
  background-color: white;
  height: 280px;
  width: 100%;
}

.enemy.selected {
  background-color: deeppink;
}

.enemy-properties-container {
  color: white;
  font-size: 14px;
  text-shadow: black 2px 1px 0px;
}

.table-props {
  padding: 5px;
  vertical-align: middle;
}

.table-props td {
   padding: 5px;
}

.enemy.selected::before, .enemy.selected::after {
  color: white;
  text-shadow: black 4px 2px 0;
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.enemy.selected::before {
  content: '\25BC';
  top: -40px;
}

.enemy.selected::after {
  content: '\25B2';
  bottom: -40px;
}

</style>