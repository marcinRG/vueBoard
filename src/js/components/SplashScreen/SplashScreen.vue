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
  mounted() {
    console.log(this)
  },
  methods: {
    showsSplashScreen(show) {
      return show ? 'show' : '';
    }
  },
  watch: {
    visible: function (value) {
      console.log('visible changed');
      console.log(`value: ${value} , duration: ${this.duration}`)
      if (value && this.action && this.duration) {
        this.timeHandler = setTimeout(() => {
          this.action();
        }, 10000);
      } else {
        this.timeHandler = null;
      }
    }
  },
  computed: {
    setClassName() {
      console.log('props changed setClassName')
      let className = 'splash-screen'
      if (this.visible) {
        className = className + ' ' + 'show';
      }
      return className;
    },

    // showSplashScreen() {
    //   let handler = null;
    //   console.log('show spashscreen')
    //   if (this.visible && this.duration && this.action) {
    //     handler = setTimeout(() => {
    //       this.action();
    //     }, 3000);
    //   }
    //   return handler
    // }
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