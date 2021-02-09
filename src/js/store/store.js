import Vue from 'vue';
import Vuex from 'vuex';
import {gameStates} from "../game/gameStates";
import {getEnemies} from "../game/game";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        GameState: gameStates.LOADING,
        enemies: [],
        player: {},
        selectedEnemy: 0,
        level: 0,
        score: 0
    },
    getters: {
        getEnemies(state) {
            return {
                enemy: state.enemy,
                selectedEnemy: state.selectedEnemy,
                enemies: state.enemies
            };
        }
    },
    mutations: {
        test(state) {
            console.log('mutation test fired');
        },
        initGame(state) {
            state.level = 0;
            state.selectedEnemy = 0;
            state.score = 0;
            state.GameState = gameStates.START;
        },
        startGame(state) {
            const enemies = getEnemies(1);
            state.GameState = gameStates.CHOOSE_ENEMIES;
            state.selectedEnemy = 0;
            state.level = 1;
            state.enemies = enemies;
        }
    }

});