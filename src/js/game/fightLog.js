import {attackTypes} from "./attackTypes";

export function createAttackLog(player, enemy, damage, attackProperties, appState) {
    let msg = '';
    if (attackProperties.attack !== 'miss') {
        if (attackProperties.isCritical) {
            msg = msg + 'Critical attack!'
        }
        msg = msg + ' You dealt: ' + damage + ' points of damage.';
        msg = msg + ' Enemy ' + attackTypes[attackProperties.attack].logMsg;

    } else {
        msg = 'You missed!!!'
    }

    return {
        level: appState.level,
        enemy: appState.enemy,
        message: msg
    }
}

export function initLog() {
    return [];
}
