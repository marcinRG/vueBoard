<template>
  <frame-with-name frame-name="Log" v-bind:class="getClass">
    <div class="log-wrapper">
      <span v-for="logMsg in getGameLog" class="log-msg">{{ logMsg.message }}</span>
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
    getGameLog() {
      return this.$store.getters.getGameLog;
    },
    getClass() {
      return (this.getGameLog.length > 0) ? '' : 'hidden';
    }
  }

}
</script>

<style scoped>
.log-wrapper {
  overflow: hidden;
  max-height: 80px;
  padding: 5px;
  max-width: 410px;
}

.log-msg {
  display: block;
  width: 100%;
  color: white;
  text-align: left;
  text-shadow: black 2px 1px 0;
}


</style>