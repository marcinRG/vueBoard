<template>
  <div class="hit-box">
    <div class="hit-panel" ref="box">
      <hit-target v-bind:position="this.imageBlind.position" v-bind:img="this.imageBlind.img"></hit-target>
      <hit-target v-bind:position="this.imageScratch.position" v-bind:img="this.imageScratch.img"></hit-target>
      <hit-target v-bind:position="this.imageStun.position" v-bind:img="this.imageStun.img"></hit-target>
      <moving-line v-bind:position="x.position" v-bind:max="x.max" line-type="vertical"></moving-line>
      <moving-line v-bind:position="y.position" v-bind:max="y.max" line-type="horizontal"></moving-line>
    </div>
    <div class="hit-box-controls">
      <span class="label-details" v-if="this.getPlayer.moves<=0">Brak ruchów</span>
      <button v-on:click="buttonClickHandler" v-if="this.getPlayer.moves>0"> {{ this.getButtonText }}</button>
    </div>
  </div>
</template>

<script>
import MovingLine from '../MovingLine/MovingLine';
import {stageStates} from '../../../game/stageStates';
import HitTarget from '../HitTarget/HitTarget';
import {hitPointPositions} from '../../../game/hitPointsPositions';
import imgBlind from './../../../../images/fire-round-button.png';
import imgScratch from './../../../../images/paw.png';
import imgStn from './../../../../images/superpower.png';

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
    HitTarget,
    'moving-line': MovingLine
  },
  methods: {
    buttonClickHandler() {
      switch (this.getStageState) {
        case stageStates.IDLE: {
          this.$store.commit('changeStageState', stageStates.POS_X);
          this.runAnimation();
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
          cancelAnimationFrame(this.intervalHandler);
          this.resetPositions();
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
    },
    resetPositions() {
      this.x.position = -3;
      this.y.position = -3;
    }

  },
  computed: {
    getButtonText() {
      switch (this.getStageState) {
        case stageStates.IDLE: {
          return 'Zacznij walkę';
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
      }
    },
    getStageState() {
      return this.$store.getters.getStageState;
    },
    getPlayer() {
      return this.$store.getters.getPlayer;
    }
  },
  data() {
    return {
      x: {
        max: 0,
        position: -3,
        step: 1,
        direction: 1,
      },
      y: {
        max: 0,
        position: -3,
        step: 1,
        direction: 1,
      },
      imageBlind: {
        img: imgBlind,
        position: {
          left: hitPointPositions.blind.x + 'px',
          top: hitPointPositions.blind.y + 'px'
        }
      },
      imageStun: {
        img: imgStn,
        position: {
          left: hitPointPositions.stun.x + 'px',
          top: hitPointPositions.stun.y + 'px'
        }
      },
      imageScratch: {
        img: imgScratch,
        position: {
          left: hitPointPositions.slash.x + 'px',
          top: hitPointPositions.slash.y + 'px'
        }
      },
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

.hit-box .label-details {
  text-align: center;
}

.hit-panel {
  width: 220px;
  margin: 20px auto;
  background-color: white;
  height: 350px;
  position: relative;
  overflow: hidden;
}


</style>
