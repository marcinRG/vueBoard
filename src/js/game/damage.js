import {hitBoxSizes, hitPointPositions} from "./hitPointsPositions";
import {attackNames, attackTypes} from "./attackTypes";

const criticalMultiplier = 1;
export const miss = 'miss';

export function getAttackProperties(x, y) {
    const point = {x, y};
    const target = getAttackTarget(point);
    const distance = distance2Points(point, target);
    const modifiers = getAttackModifiers(distance, target.radius, target.centerRadius, target.damageType);
    return {
        ...modifiers,
        attack: target.damageType
    };
}

export function getDamage(player, enemy, attackProperties) {
    let damage = 0
    if (attackProperties.attack !== miss) {
        damage = player.attackStrength;
        if (attackProperties.isCritical) {
            damage = damage + player.attackStrength * criticalMultiplier;
        }
    }
    return damage;
}

function getAttackModifiers(distance, radius, centerRadius, attackType) {
    if (distance <= radius) {
        const attackModifier = transformXToY(distance, 0, radius, 100, 0);
        if (distance <= centerRadius) {
            const onCenter = attackTypes[attackType].effectProbability.onCenter;
            const probabilityLevelCenter = transformXToY(distance, 0, centerRadius, onCenter.max, onCenter.min);
            return {
                isCritical: checkProbability(attackTypes[attackType].criticalChance),
                applyEffect: checkProbability(probabilityLevelCenter),
                attackModifier
            }

        }
        const onTarget = attackTypes[attackType].effectProbability.onTarget;
        const probabilityLevel = transformXToY(distance, 0, radius, onTarget.max, onTarget.min);
        return {
            isCritical: false,
            attackModifier,
            applyEffect: checkProbability(probabilityLevel),
        }
    }
}

function getAttackTarget(point) {
    let obj = {damageType: miss};
    const names = Object.keys(attackNames);
    for (let attackName of names) {
        let target = getCenterAndRadiusOfTarget(attackName);
        if (pointInsideCircle(point, target)) {
            obj = {...target, damageType: attackName};
            return obj;
        }
    }
    return obj;
}

function getCenterAndRadiusOfTarget(targetName) {
    return {
        x: hitPointPositions[targetName].x + hitBoxSizes.target.size / 2,
        y: hitPointPositions[targetName].y + hitBoxSizes.target.size / 2,
        radius: hitBoxSizes.target.size / 2,
        centerRadius: hitBoxSizes.target.targetSize / 2
    };
}

function pointInsideCircle(point, circle) {
    return circle.radius >= distance2Points(point, circle);
}

function distance2Points(pointA, pointB) {
    return Math.sqrt((Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)));
}

function transformXToY(x, xMin, xMax, yMin, yMax) {
    const y = yMin + (yMax - yMin) * (x - xMin) / (xMax - xMin);
    return y;
}

function checkProbability(probabilityLevel) {
    return Math.random() <= probabilityLevel;
}
