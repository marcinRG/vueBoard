<template>
  <div class="attacks-debuffs-wrapper">
    <span class="stats-details">{{ this.listName }}</span>
    <debuff v-for="elem in this.elements" v-bind:name="elem"></debuff>
  </div>
</template>

<script>
import Debuff from "../Debuff/Debuff";

export default {
  name: "Debuffs-Attacks-List",
  components: {'debuff': Debuff},
  props: {
    elements: {
      type: Array,
      required: true
    },
    listName: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

.attacks-debuffs-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
}

.attacks-debuffs-wrapper span, .attacks-debuffs-wrapper div {
   align-self: center;
}

.attacks-debuffs-wrapper span {
  color: white;
  text-shadow: black 2px 1px 0;
  text-align: left;
}

</style>