import {enemyTypes} from "./enemyTypes";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMaxEnemies(level) {
    return getRandomIntInclusive(1, 5);
}

export function getEnemies(level) {
    const enemiesCount = getMaxEnemies(level);
    const enemiesTable = Object.values(enemyTypes);
    let enemies = [];
    for (let i = 1; i <= enemiesCount; i++) {
        const enemy = createEnemy(enemiesTable[getRandomIntInclusive(0, enemiesTable.length - 1)]);
        enemies.push(enemy);
    }
    return enemies;
}

export function createEnemy(enemyType) {
    const newEnemy = {...enemyType, Hp: enemyType.maxHp, alive: true, debuffs: []};
    return newEnemy;
}

export function createPlayer() {
    return {
        Hp: 100,
        maxHp: 100,
        moves: 5,
        attackStrength: 15,
        debuffs: []
    }
}
