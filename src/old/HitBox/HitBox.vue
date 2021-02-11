<template>
  <div class="hit-box-wrapper">
    <div class="hit-box" ref="box">
      <moving-line v-bind:position="positionX" line-type="vertical"></moving-line>
      <moving-line v-bind:position="positionY" line-type="horizontal"></moving-line>
    </div>
    <div class="buttons">
      <button v-on:click="runX">RUN X</button>
      <button v-on:click="runY">RUN Y</button>
    </div>
  </div>
</template>

<script>
import MovingLine from "../../js/components/GameComponents/MovingLine/MovingLine";

export default {
  name: "HitBox",
  mounted() {
    this.maxX = this.$refs.box.getBoundingClientRect().width;
    this.maxY = this.$refs.box.getBoundingClientRect().height;
  },
  components: {
    'moving-line': MovingLine
  },
  data() {
    return {
      maxX: 0,
      maxY: 0,
      directionX: 1,
      directionY: 1,
      positionX: -2,
      positionY: -2,
      xState: true,
      yState: true,
      intervalHandler: null,
      stepX: 2,
      stepY: 10,
    }
  },
  methods: {

    runX() {
      if (this.xState) {
        this.runXAnimation();
        this.xState = false;
      } else {
        cancelAnimationFrame(this.intervalHandler);
      }
    },

    runY() {
      if (this.yState) {
        this.runYAnimation();
        this.yState = false;
      } else {
        cancelAnimationFrame(this.intervalHandler);
      }
    },

    runXAnimation() {
      this.moveX();
      this.intervalHandler = requestAnimationFrame(this.runXAnimation);
    },

    runYAnimation() {
      this.moveY();
      this.intervalHandler = requestAnimationFrame(this.runYAnimation);
    },

    moveX() {
      if (this.directionX === 1 && this.positionX >= this.maxX) {
        this.directionX = -1;
      }
      if (this.directionX === -1 && this.positionX <= 0) {
        this.directionX = 1;
      }
      this.positionX = this.positionX + this.directionX * this.stepX;

    },
    moveY() {
      if (this.directionY === 1 && this.positionY >= this.maxY) {
        this.directionY = -1;
      }
      if (this.directionY === -1 && this.positionY <= 0) {
        this.directionY = 1;
      }
      this.positionY = this.positionY + this.directionY * this.stepY;
    },
    printObjectProperties() {
      console.log('x:' + this.positionX + ', y:' + this.positionY);
      console.log('maxX:' + this.maxX + ', maxY:' + this.maxY);
    }
  }
}
</script>

<style scoped>
.hit-box {
  display: block;
  width: 150px;
  height: 300px;
  border: 1px dashed black;
  background-color: azure;
  position: relative;
  overflow: hidden;
}
</style>