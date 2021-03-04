import Vue from 'vue';
import Vuex from 'vuex';
import {gameStates} from "../game/gameStates";
import {getEnemies} from "../game/game";
import {getAttackProperties, getDamage} from "../game/damage";
import {stageStates} from "../game/stageStates";
import {createPlayer, doAction} from "../game/player";
import {createAttackLog, initLog} from "../game/fightLog";
import {applyDebuffsToEnemy, inflictDamageToEnemy} from "../game/enemy";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        GameState: gameStates.LOADING,
        StageState: stageStates.IDLE,
        log: [],
        enemies: [],
        enemy: {},
        player: {},
        selectedEnemy: 0,
        level: 0,
        score: 0,
    },
    getters: {
        getEnemies(state) {
            return {
                enemy: state.enemy,
                selectedEnemy: state.selectedEnemy,
                enemies: state.enemies
            };
        },
        getPlayer(state) {
            return state.player;
        },
        getSelectedEnemy(state) {
            return state.enemy;
        },
        getStageState(state) {
            return state.StageState;
        },
        getGameLog(state) {
            return state.log;
        },
        getCurrentEnemyLog(state) {
            const log = [...state.log];
            return log.reverse().filter((logElem) => {
                return ((logElem.enemy === state.selectedEnemy) && (logElem.level === state.level));
            });
        }
    },
    mutations: {
        test(state) {
            console.log('mutation test fired');
        },

        changeStageState(state, newState) {
            state.StageState = newState;
        },
        //game states
        initGame(state) {
            state.level = 0;
            state.selectedEnemy = 0;
            state.score = 0;
            state.GameState = gameStates.START;
        },

        startGame(state) {
            const enemies = getEnemies(1);
            state.player = createPlayer();
            state.GameState = gameStates.CHOOSE_ENEMIES;
            state.selectedEnemy = 0;
            state.level = 1;
            state.log = initLog();
            state.enemies = enemies;
        },

        attackEnemy(state) {
            state.GameState = gameStates.ATTACK_ENEMY;
            state.StageState = stageStates.IDLE;
            state.enemy = state.enemies[state.selectedEnemy];
        },

        goBackToSelectEnemyState(state) {
            state.enemy = {};
            state.GameState = gameStates.CHOOSE_ENEMIES;
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

        inflictDamageToEnemy(state, obj) {
            const attackProps = getAttackProperties(obj.x, obj.y);
            const damage = getDamage(state.player, state.enemy, attackProps);
            const newLog = createAttackLog(state.player, state.enemy, damage, attackProps, {
                level: state.level,
                enemy: state.selectedEnemy
            });
            state.log = [...state.log, newLog];
            inflictDamageToEnemy(state.enemy, damage);
            state.player.debuffs = applyDebuffsToEnemy(state.enemy, attackProps);
            console.log(state.player.debuffs);

            state.player = doAction(state.player, attackProps);

            state.StageState = stageStates.IDLE;
        }

    }

});
