<template>
  <div class="hit-box">
    <div class="hit-panel" ref="box">
      <moving-line v-bind:position="x.position" v-bind:max="x.max" line-type="vertical"></moving-line>
      <moving-line v-bind:position="y.position" v-bind:max="y.max" line-type="horizontal"></moving-line>
    </div>
    <div class="hit-box-controls">
      <button v-on:click="buttonClickHandler"> {{ this.getButtonText }}</button>
    </div>
  </div>
</template>

<script>
import MovingLine from "../MovingLine/MovingLine";
import {stageStates} from "../../../game/stageStates";

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
    'moving-line': MovingLine
  },
  methods: {
    buttonClickHandler() {
      switch (this.getStageState) {
        case stageStates.IDLE: {
          this.runAnimation();
          this.$store.commit('changeStageState', stageStates.POS_X);
          break;
        }
        case stageStates.POS_X: {
          this.$store.commit('changeStageState', stageStates.POS_Y)
          this.runAnimation();
          break;
        }
        case stageStates.POS_Y: {
          this.$store.commit('changeStageState', stageStates.END);
          break;
        }
        case stageStates.END: {
          this.$store.commit('inflictDamageToEnemy', {x: this.x.position, y: this.y.position});
          this.$store.commit('changeStageState', stageStates.FINISHED);
        }
      }

    },
    move() {
      if (this.getStageState === stageStates.POS_X) {
        move(this.x);
      }
      if (this.getStageState === stageStates.POS_Y) {
        move(this.y);
      }
      if (this.getStageState !== stageStates.POS_X && this.getStageState !== stageStates.POS_X) {
        cancelAnimationFrame(this.intervalHandler);
      }
    },
    runAnimation() {
      this.move();
      this.intervalHandler = requestAnimationFrame(this.runAnimation);
    }

  },
  computed: {
    getButtonText() {
      switch (this.getStageState) {
        case stageStates.IDLE: {
          return 'Zacznij';
        }
        case stageStates.POS_X: {
          return 'Wyznacz X'
        }
        case stageStates.POS_Y: {
          return 'Wyznacz Y';
        }
        case stageStates.END: {
          return 'Atak!';
        }
        default: {
          return 'Nieakt.'
        }
      }
    },
    getStageState() {
      return this.$store.getters.getStageState;
    }
  },
  data() {
    return {
      x: {
        max: 0,
        position: -3,
        step: 2,
        direction: 1,
      },
      y: {
        max: 0,
        position: -3,
        step: 4,
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
  height: 500px;
  font-size: 14px;
}

.hit-box button {
  padding: 15px 30px;
  background-color: white;
  box-shadow: 7px 7px 0 0 black;
  cursor: pointer;
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
