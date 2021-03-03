import {attackTypes} from "./attackTypes";

export function logFight(player, enemy, damage, attackProperties) {
    console.log(' damage:' + damage);
    if (attackProperties.isCritical) {
        console.log('critical damage');
    }
    console.log(attackTypes[attackProperties.attack].description);
}