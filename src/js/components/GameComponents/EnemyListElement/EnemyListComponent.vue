<template>
  <div v-bind:class="setClassName">
    <p>
      Enemy
    </p>
    <div class="enemy-properties-container">
      <table>
        <tr>
          <td>id</td>
          <td> {{ this.id }}</td>
        </tr>
        <tr>
          <td>Selected</td>
          <td> {{ this.selected }}</td>
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

</style>