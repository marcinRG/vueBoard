export function createEnemy(enemyType) {
    const newEnemy = {...enemyType, Hp: enemyType.maxHp, alive: true, debuffs: []};
    return newEnemy;
}

export function inflictDamageToEnemy(enemy, damage, attackProperties) {
    if (enemy.Hp - damage > 0) {
        enemy.Hp = enemy.Hp - damage;
    } else {
        enemy.Hp = 0;
        enemy.alive = false;
    }
}

export function applyDebbufsToEnemy(enemy, attackProperties) {
    if (enemy.alive) {
        console.log(enemy.debuffs);
    }
}


