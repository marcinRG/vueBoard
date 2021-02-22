<template>
  <div class="debuff">
    <img class="debuff-img" v-bind:src="this.getDebuff.img" v-bind:alt="this.getDebuff.name"/>
  </div>
</template>

<script>
import {attackTypes} from './../../../game/attackTypes';

export default {
  name: "Debuff",
  props: {
    name: {
      type: String,
      required: false
    }
  },
  computed: {
    getDebuff() {
      return attackTypes[this.name];
    }
  }
}
</script>

<style scoped>
.debuff {
  width: 25px;
  height: 30px;
  background-color: white;
  border: 1px solid white;
  box-shadow: 5px 5px 0 0 black;
}

.debuff-img {
  width: 20px;
  height: 20px;
  display: block;
  margin: 5px auto;
}

</style>