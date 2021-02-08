<template>
  <div v-bind:class="setClassName" v-on:click="handleClickEvent">
    <div class="enemy-image-container"></div>
    <div class="enemy-properties-container">
      <table>
        <tr>
          <td>Name</td>
          <td> {{ this.name }}</td>
        </tr>
        <tr>
          <td>Enemy class</td>
          <td> {{ this.enemyClass }}</td>
        </tr>
        <tr>
          <td>HP</td>
          <td> {{ this.hp }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enemy",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    enemyClass: {
      type: String,
      required: true
    },
    hp: {
      type: String,
      required: false
    },
    selected: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleClickEvent() {
      this.$emit('changeSelectedElement', {
        selected: this.id
      });
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
  border: 3px solid black;
  background-color: aquamarine;
}

.enemy.selected {
  background-color: indianred;
}

.enemy:first-of-type {
  border-left-width: 6px;
}

.enemy:last-of-type {
  border-right-width: 6px;
}

.enemy-image-container {
  height: 300px;
  background-color: white;
}

.enemy-properties-container {
  border-top: 5px solid black;
}

</style>