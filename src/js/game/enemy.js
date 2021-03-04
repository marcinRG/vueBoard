import {attackTypes} from "./attackTypes";

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

export function applyDebuffsToEnemy(enemy, attackProperties) {
    if (enemy.alive && attackProperties.applyEffect) {
        const found = enemy.debuffs.find((debuff) => {
            return debuff.name === attackProperties.attack;
        });
        if (found && found >= 0) {
            return refreshDebuff(attackProperties.attack, found);
        }
        return addDebuff(enemy, attackProperties.attack);
    }
    return [];
}

function refreshDebuff(enemy, debufName, found) {
    let debuffs = [...enemy.debuffs];
    debuffs[found] = createDebuff(debufName);
    return debuffs;
}

function addDebuff(enemy, debufName) {
    return [...enemy.debuffs, createDebuff(debufName)];
}

function createDebuff(debufName) {
    return {
        name: debufName,
        rounds: attackTypes[debufName].damageRounds,
    };
}



