<template>
  <div v-bind:class="setClassName" v-on:click="handleClickEvent">
    <img class="enemy-img" v-bind:src="enemy.enemyImg" v-bind:alt="enemy.enemyClass"/>
    <div class="enemy-properties-container">
      <stat-bar stat-name="HP" v-bind:value="this.enemy.Hp" v-bind:max="this.enemy.maxHp"></stat-bar>
      <span class="stats-details">class: {{ this.enemy.enemyClass }}</span>
      <span class="stats-details">atk: {{ this.enemy.attackStrength }}</span>
      <attacks-debuffs-wrapper list-name="attacks:" v-bind:elements="this.enemy.specialAttacks"></attacks-debuffs-wrapper>
    </div>
  </div>
</template>

<script>
import StatBar from "../StatBar/StatBar";
import Debuff from "../Debuff/Debuff";
import DebuffsAttacksList from "../Debuffs-Attacks-List/DebuffsAttacksList";

export default {
  name: "EnemyListComponent",
  components: {'debuff': Debuff, 'stat-bar': StatBar, 'attacks-debuffs-wrapper': DebuffsAttacksList},
  props: {
    enemy: {
      type: Object,
      required: false,
    },
    id: {
      type: Number,
      required: false
    },
    selected: {
      type: Number,
      required: false
    },
    enemyClass: {
      type: String,
      required: false
    },
    hp: {
      type: Number,
      required: false
    },
  },
  methods: {
    handleClickEvent() {
      this.$store.commit('selectEnemy', {id: this.id});
    }
  },
  computed: {
    setClassName() {
      let className = 'enemy';
      if (this.id === this.selected) {
        className = className + ' ' + 'selected';
      }
      return className;
    }
  }
}
</script>

<style scoped>

.stats-details {
  width: 100%;
  display: block;
  text-align: left;
  margin: 5px 0;
  color: white;
  text-shadow: black 2px 1px 0;
  align-self: center;
}

.enemy {
  margin: 60px 20px;
  padding: 7px 15px;
  border: 4px solid white;
  box-shadow: 7px 7px 0 0 black;
  width: 300px;
  /*height: 420px;*/
  font-size: 14px;
  color: white;
  position: relative;
  cursor: pointer;
}

.enemy-img {
  width: auto;
  height: 210px;
  display: block;
  margin: 10px auto 20px;
  border: 3px solid white;
  box-shadow: 5px 5px 0 0 black;
}

/*.enemy-image-container {*/
/*  background-color: white;*/
/*  height: 214px;*/
/*  width: 150px;*/
/*  border: 2px solid white;*/
/*}*/

.enemy.selected {
  background-color: deeppink;
}

.enemy-properties-container {
  color: white;
  font-size: 14px;
  text-shadow: black 2px 1px 0px;
}

.table-props {
  padding: 5px;
  vertical-align: middle;
}

.table-props td {
  padding: 5px;
}

.enemy.selected::before, .enemy.selected::after {
  color: white;
  text-shadow: black 4px 2px 0;
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.enemy.selected::before {
  content: '\25BC';
  top: -40px;
}

.enemy.selected::after {
  content: '\25B2';
  bottom: -40px;
}

</style>