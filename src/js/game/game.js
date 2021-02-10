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
        enemies.push(enemiesTable[getRandomIntInclusive(0, enemiesTable.length - 1)]);
    }
    return enemies;
}


