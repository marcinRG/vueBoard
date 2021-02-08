<template>
  <div>
    <p>Choose enemies</p>
    <button v-on:click="checkState">Check state</button>
  </div>
</template>

<script>
export default {
  name: "ChooseEnemies",
  methods: {
    checkState() {
      console.log(this.$store.state);
    }
  }
}
</script>

<style scoped>

</style>