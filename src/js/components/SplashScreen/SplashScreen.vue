<template>
  <div v-bind:class="setClassName">
    <slot></slot>
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
    hasTimeout: {
      type: Boolean,
      required: false
    }


  },
  methods: {
    showsSplashScreen(show) {
      return show ? 'show' : '';
    }
  },
  watch: {
    visible: function (value) {
      if (value && this.action && this.duration && this.hasTimeout) {
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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
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