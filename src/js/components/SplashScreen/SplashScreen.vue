<template>
  <div v-bind:class="setClassName">
    <div>
      Komponent
    </div>
    <div>
      {{ duration }}
    </div>
    <div>
      {{ visible }}
    </div>
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
    visible: {
      type: Boolean,
      required: false
    },

  },
  methods: {
    showsSplashScreen(show) {
      return show ? 'show' : '';
    }
  },
  watch: {
    visible: function (value) {
      if (value && this.action && this.duration) {
        this.timeHandler = setTimeout(() => {
          this.action();
        }, this.duration);
      } else {
        this.timeHandler = null;
      }
    }
  },
  computed: {
    setClassName() {
      let className = 'splash-screen'
      if (this.visible) {
        className = className + ' ' + 'show';
      }
      return className;
    },
  },
  data() {
    return {
      self: null,
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
  height: 20vh;
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