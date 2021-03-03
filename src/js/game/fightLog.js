import {attackTypes} from "./attackTypes";

export function logAttack(player, enemy, damage, attackProperties, appState) {
    console.log(' damage:' + damage);
    if (attackProperties.isCritical) {
        console.log('critical damage');
    }
    console.log(attackTypes[attackProperties.attack].description);
}

export function initLog() {
    return [];
}
