<template>
  <div class="enemy">
    <div class="enemy-image-container"></div>
    <div class="enemy-properties-container">
      <p>Name</p>
      <p>enemy class</p>
      <span>hp</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enemy",
  props: {
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
      type: Boolean,
      required: false
    }
  },
}
</script>

<style scoped>
.enemy {
  border: 3px solid black;
}

.enemy:first-of-type {
  border-left-width: 6px;
}

.enemy:last-of-type {
  border-right-width: 6px;
}

.enemy-image-container {
  height: 300px;
  background-color: red;
}

.enemy-properties-container {
  border-top: 5px solid black;
}

</style>