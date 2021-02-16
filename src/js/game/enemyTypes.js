import {attackNames} from "./attackTypes";

export const enemyTypes = {
    rogue: {
        enemyClass: 'rogue',
        maxHp: 120,
        attackStrength: 8,
        specialAttacks: [attackNames.slash],
        enemyImg: '',
        hp: 100,
    },
    warrior: {
        enemyClass: 'warrior',
        maxHp: 85,
        attackStrength: 10,
        specialAttacks: [attackNames.stun],
        enemyImg: '',
        hp: 85,
    },
    mage: {
        enemyClass: 'mage',
        maxHp: 55,
        attackStrength: 20,
        specialAttacks: [attackNames.blind],
        enemyImg: '',
        hp: 55,
    }
};
