import {attackNames} from "./attackTypes";
import imgRogue from '../../images/rogue.jpg';
import imgMage from '../../images/mage.jpg';
import imgWarrior from '../../images/warrior.jpg';

export const enemyTypes = {
    rogue: {
        enemyClass: 'rogue',
        maxHp: 120,
        attackStrength: 8,
        specialAttacks: [attackNames.slash],
        enemyImg: imgRogue,
        Hp: 100,
    },
    warrior: {
        enemyClass: 'warrior',
        maxHp: 85,
        attackStrength: 10,
        specialAttacks: [attackNames.stun, attackNames.slash, attackNames.blind],
        enemyImg: imgWarrior,
        Hp: 85,
    },
    mage: {
        enemyClass: 'mage',
        maxHp: 55,
        attackStrength: 20,
        specialAttacks: [attackNames.blind, attackNames.slash],
        enemyImg: imgMage,
        hp: 55,
    }
};
