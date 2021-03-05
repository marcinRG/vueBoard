import {attackTypes} from "./attackTypes";

export function createEnemy(enemyType) {
    const newEnemy = {...enemyType, Hp: enemyType.maxHp, alive: true, debuffs: []};
    return newEnemy;
}

export function inflictDamageToEnemy(enemy, damage, attackProperties) {
    let Hp = enemy.Hp;
    let alive = enemy.alive;
    if (Hp - damage > 0) {
        Hp = Hp - damage;
    } else {
        Hp = 0;
    }
    if (Hp <= 0) {
        alive = false;
    }

    return {
        Hp,
        alive
    };
}

export function applyDebuffsToEnemy(enemy, attackProperties) {
    let debuffs = [...enemy.debuffs];
    if (enemy.alive && attackProperties.applyEffect) {
        const found = debuffs.find((debuff) => {
            return debuff.name === attackProperties.attack;
        });
        if (found && found >= 0) {
            return refreshDebuff(debuffs, attackProperties.attack, found);
        }
        debuffs = addDebuff(debuffs, attackProperties.attack);
    }
    return debuffs;
}

function refreshDebuff(debuffs, debufName, found) {
    debuffs[found] = createDebuff(debufName);
    return debuffs;
}

function addDebuff(debuffs, debufName) {
    return [...debuffs, createDebuff(debufName)];
}

function createDebuff(debufName) {
    return {
        name: debufName,
        rounds: attackTypes[debufName].damageRounds,
    };
}



