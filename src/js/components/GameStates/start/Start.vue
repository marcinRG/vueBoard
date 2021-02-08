<template>
  <div class="start-screen">
    <div class="title-wrapper">
      <h2>App title</h2>
      <button v-on:click="startGame">Start</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "start",
  methods: {
    startGame() {
      this.$store.commit('startGame');
    }
  }
}
</script>

<style scoped>
.start-screen {
  background-color: #ec72fc;
  width: 100%;
  height: 100%;
  position: relative;
}

.start-screen .title-wrapper {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.start-screen h2 {
  color: white;
  text-shadow: black 4px 2px 0;
  padding: 30px;
  font-size: 35px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.start-screen button {
  padding: 15px 30px;
  background-color: white;
  box-shadow: 7px 7px 0 0 black;
  cursor: pointer;
}


</style>