<template>
  <frame-with-name frame-name="Log" v-bind:class="getClass">
    <div class="log-wrapper">
      <span v-for="logMsg in fightLog" class="log-msg">{{ logMsg.message }}</span>
    </div>
  </frame-with-name>
</template>

<script>
import FrameWithName from "../FrameWithName/FrameWithName";

export default {
  name: "FightLog",
  components: {
    'frame-with-name': FrameWithName,
  },
  computed: {
    fightLog() {
      return this.$store.getters.getCurrentEnemyLog;
    },
    getClass() {
      return (this.fightLog.length > 0) ? '' : 'hidden';
    }
  }

}
</script>

<style scoped>
.log-wrapper {
  overflow: hidden;
  height: 85px;
  padding: 5px;
  width: 410px;
}

.log-msg {
  display: block;
  width: 100%;
  color: white;
  text-align: left;
  text-shadow: black 2px 1px 0;
}

.log-msg:nth-of-type(2) {
  opacity: .65;
}

.log-msg:nth-of-type(3) {
  opacity: .35;
}

.log-msg:nth-of-type(4) {
  opacity: .15;
}

</style>