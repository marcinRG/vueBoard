<template>
  <div class="enemy-board">
    <splash-screen v-bind:visible=this.isVisible
                   v-bind:hasTimeout=false>
      <div class="center-frame">
        <frame-with-name>
          <div class="small-frame">
            <p>Czy chcesz zakończyć rundę?</p>
            <div class="buttons-wrapper">
              <button v-on:click="hideScreen">Anuluj</button>
              <button v-on:click="hideScreen">Zakończ</button>
            </div>
          </div>
        </frame-with-name>
      </div>
    </splash-screen>
    <div class="enemy-container" v-on:keyup="keyEventHandler">
      <div class="enemies-list" tabindex="0"
           ref="enemyBoardRef" v-on:click="clickEventHandler">
        <enemy v-for="(enemy,index) in getEnemies.enemies" v-bind:id="index" v-bind:enemy-class="enemy.enemyClass"
               v-bind:hp="enemy.hp"
               v-bind:selected="getEnemies.selectedEnemy"
               v-bind:enemy="enemy">
        </enemy>
      </div>
    </div>
    <div class="enemy-controls">
      <div>
        <button v-on:click="buttonDownHandler">&#9668;</button>
        <button v-on:click="buttonUpHandler">&#9654;</button>
      </div>
      <div>
        <button v-on:click="attackButtonHandler" v-bind:disabled="this.getEnemies.enemy.Hp<=0">Atakuj !!!
        </button>
      </div>
      <div>
        <button v-on:click="attackButtonHandler">Zakończenie rundy</button>
      </div>

    </div>
    <button v-on:click="checkState">re-roll</button>
  </div>
</template>

<script>
import EnemyListComponent from "../../GameComponents/EnemyListElement/EnemyListComponent";
import SplashScreen from "../../SplashScreen/SplashScreen";
import FrameWithName from "../../FrameWithName/FrameWithName";

export default {
  name: "ChooseEnemies",
  mounted() {
    this.setFocus();
    console.log(this.getEnemies)
  },
  data() {
    return {
      isVisible: true
    }
  },
  components: {
    FrameWithName,
    'enemy': EnemyListComponent,
    'splash-screen': SplashScreen
  },
  methods: {
    hideScreen() {
      this.isVisible = false;
    },
    someAction() {
      console.log('action')
    },
    checkState() {
      this.$store.commit('startGame');
    },
    setFocus() {
      this.$refs.enemyBoardRef.focus();
    },

    keyEventHandler(event) {
      switch (event.code) {
        case 'ArrowLeft': {
          this.$store.commit('selectEnemyDown');
          break;
        }
        case 'ArrowRight': {
          this.$store.commit('selectEnemyUp');
          break;
        }
      }
    },

    buttonUpHandler() {
      this.$store.commit('selectEnemyUp');
    },

    buttonDownHandler() {
      this.$store.commit('selectEnemyDown');
    },

    attackButtonHandler() {
      this.$store.commit('attackEnemy');
    },

    clickEventHandler() {
      this.setFocus();
    }
  },
  computed: {
    getEnemies() {
      return this.$store.getters.getEnemies;
    }
  }
}
</script>

<style scoped>
.enemy-board {
  margin: 0 auto;
  /*position: relative;*/
}

.small-frame {
  text-align: center;
  padding: 3em;
}

.buttons-wrapper {
  margin-top: 45px;
  display: flex;
  width: 100%;
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.center-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50%;
  height: 50vh;
}

.enemy-board button {
  padding: 15px 30px;
  background-color: white;
  box-shadow: 7px 7px 0 0 black;
  cursor: pointer;
}

.enemy-controls {
  display: grid;
  justify-items: center;
  grid-row-gap: 20px;
}

.enemies-list {
  width: 100%;
  display: flex;
  justify-content: center;
  outline: 0;
}

</style>