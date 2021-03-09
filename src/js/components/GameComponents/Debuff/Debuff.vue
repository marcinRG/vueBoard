<template>
  <div class="debuff" v-on:mouseover="onMouseOver" v-on:mouseout="onMouseOut">
    <img class="debuff-img" v-bind:src="this.getDebuff.img" v-bind:alt="this.getDebuff.name"/>
    <tooltip v-bind:show-tool-tip="showToolTip" v-bind:position-x="positionX" v-bind:position-y="positionY">
      <h4>{{ this.getDebuff.title }}</h4>
      <p>{{ this.getDebuff.description }}</p>
    </tooltip>
  </div>
</template>

<script>
import {attackTypes} from './../../../game/attackTypes';
import Tooltip from "../../Tooltip/Tooltip";

const toolTipOffset = 4;

export default {
  name: "Debuff",
  components: {Tooltip},
  props: {
    name: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      showToolTip: false,
      positionX: 0,
      positionY: 0,
    }
  },
  methods: {
    onMouseOver(event) {
      const elementPos = event.target.getBoundingClientRect();
      this.positionY = elementPos.y + elementPos.height + toolTipOffset;
      this.positionX = elementPos.x + elementPos.width - toolTipOffset;
      this.showToolTip = true;
    },
    onMouseOut() {
      this.showToolTip = false;
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
  pointer-events: none;
}

</style>