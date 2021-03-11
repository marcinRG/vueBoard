<template>
  <div class="splash-screen">
    
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  props: {
    duration: {
      type: Number,
      required: false
    },
    action: {
      type: Function,
      required: false
    },
  },
  methods: {
    showsSplashScreen(show) {
      return show ? 'show' : '';
    }
  },
  data() {
    return {
      timeHandler: null
    }
  }
}
</script>

<style scoped>
.splash-screen {
  z-index: 200;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: goldenrod;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
}

.splash-screen.show {
  visibility: visible;
  opacity: 1;
}
</style>