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

const hitBoxStates = {
  BEGIN: 'begin',
  POS_X: 'position x',
  POS_Y: 'position y',
  END: 'calculated',
  FINISHED: 'finish'
};

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
      switch (this.componentState) {
        case hitBoxStates.BEGIN: {
          this.runAnimation();
          this.componentState = hitBoxStates.POS_X;
          break;
        }
        case hitBoxStates.POS_X: {
          this.componentState = hitBoxStates.POS_Y;
          this.runAnimation();
          break;
        }
        case hitBoxStates.POS_Y: {
          this.componentState = hitBoxStates.END;
          break;
        }
        case hitBoxStates.END: {
          this.$store.commit('inflictDamageToEnemy', {x: this.x.position, y: this.y.position});
          this.componentState = hitBoxStates.FINISHED;
        }
      }

    },
    move() {
      if (this.componentState === hitBoxStates.POS_X) {
        move(this.x);
      }
      if (this.componentState === hitBoxStates.POS_Y) {
        move(this.y);
      }
      if (this.componentState !== hitBoxStates.POS_X && this.componentState !== hitBoxStates.POS_X) {
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
      switch (this.componentState) {
        case hitBoxStates.BEGIN: {
          return 'Zacznij';
        }
        case hitBoxStates.POS_X: {
          return 'Wyznacz X'
        }
        case hitBoxStates.POS_Y: {
          return 'Wyznacz Y';
        }
        case hitBoxStates.END: {
          return 'Koniec rundy';
        }
        default: {
          return 'Nieakt.'
        }
      }
    },
    getBackButtonDiableState() {
      if (this.componentState === hitBoxStates.BEGIN || this.componentState === hitBoxStates.FINISHED) {
        return false;
      }
      return true;
    }
  },
  data() {
    return {
      componentState: hitBoxStates.BEGIN,
      x: {
        max: 0,
        position: -3,
        step: 12,
        direction: 1,
      },
      y: {
        max: 0,
        position: -3,
        step: 20,
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