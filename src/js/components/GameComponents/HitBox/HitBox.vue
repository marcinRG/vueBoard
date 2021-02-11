<template>
  <div class="hit-box">
    <div class="hit-panel" ref="box">
      <moving-line2 v-bind:position="x.position" v-bind:max="x.max" line-type="vertical"></moving-line2>
      <moving-line2 v-bind:position="y.position" v-bind:max="y.max" line-type="horizontal"></moving-line2>
    </div>
    <div class="hit-box-controls">
      <button v-on:click="move">Check state</button>
    </div>
  </div>
</template>

<script>
import MovingLine from "../MovingLine/MovingLine";
import MovingLine2 from "../MovingLine/MovingLine2";

function move(obj) {
  if (obj.direction === 1 && obj.position >= obj.max) {
    obj.direction = -1;
  }
  if (obj.direction === -1 && obj.position <= 0) {
    obj.direction = 1;
  }
  obj.position = obj.position + obj.direction * obj.step;
}

export default {
  mounted() {
    this.maxX = this.$refs.box.getBoundingClientRect().width;
    this.maxY = this.$refs.box.getBoundingClientRect().height;
    this.x.max = this.$refs.box.getBoundingClientRect().width;
    this.y.max = this.$refs.box.getBoundingClientRect().height;
  },
  components: {
    MovingLine2,
    'moving-line': MovingLine
  },
  methods: {
    move() {
      move(this.x);
      move(this.y);
    }
  },
  data() {
    return {
      runState: 'run',
      x: {
        max: 0,
        position: 0,
        step: 5,
        direction: 1,
      },
      y: {
        max: 0,
        position: 0,
        step: 5,
        direction: 1,
      }
    }
  },
  name: "HitBox"
}
</script>

<style scoped>
.hit-box {
  padding: 7px;
  border: 4px solid white;
  box-shadow: 7px 7px 0 0 black;
  width: 280px;
  height: 420px;
  font-size: 14px;
}

.hit-panel {
  width: 85%;
  margin: 20px auto;
  background-color: white;
  height: 350px;
  position: relative;
  overflow: hidden;
}


</style>