import Vue from 'vue';
import Vuex from 'vuex';
import {gameStates} from "../game/gameStates";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        GameState: gameStates.LOADING,
        enemies: {},
        enemy: {},
        player: {},
        selectedEnemy: 0,
        level: 0,
        score: 0
    },
    getters: {},
    mutations: {
        test(state) {
          console.log('mutation test fired');
        },
        initGame(state) {
            state.level = 0;
            state.selectedEnemy = 0;
            state.score = 0;
            state.GameState = gameStates.START
        }
    }

});