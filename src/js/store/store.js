import Vue from 'vue';
import Vuex from 'vuex';
import {gameStates} from "../game/gameStates";
import {calculateDamage, getEnemies} from "../game/game";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        GameState: gameStates.LOADING,
        enemies: [],
        enemy: {},
        player: {
            moves: 5,
            debuffs: [],
        },
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
        },

        attackEnemy(state) {
            state.GameState = gameStates.ATTACK_ENEMY;
            state.enemy = state.enemies[state.selectedEnemy];
        },

        selectEnemy(state, data) {
            state.selectedEnemy = data.id;
        },

        selectEnemyUp(state) {
            if (state.selectedEnemy < state.enemies.length - 1) {
                state.selectedEnemy = state.selectedEnemy + 1;
            }
        },

        selectEnemyDown(state) {
            if (state.selectedEnemy > 0) {
                state.selectedEnemy = state.selectedEnemy - 1;
            }
        },

        inflictDamageToEnemy(state,obj) {
            console.log('inflict damage to enemy');
            const dmg = calculateDamage(obj.x,obj.y);
        }


    }

});