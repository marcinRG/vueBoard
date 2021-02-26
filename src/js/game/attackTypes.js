import imgSlash from '../../../src/images/paw.png';
import imgStun from '../../../src/images/superpower.png';
import imgBlind from '../../../src/images/fire-round-button.png';

export const attackNames = {
    stun: 'stun',
    slash: 'slash',
    blind: 'blind'
}

export const attackTypes = {
    stun: {
        title: 'stun',
        description: 'stun attack',
        criticalChance: 0.05,
        damageRounds: 1,
        effectProbability: {
            onCenter: {
                max: .75,
                min: .45
            },
            onTarget: {
                max: .3,
                min: .1
            },
        },
        dot: false,
        img: imgStun,
    },
    slash: {
        title: 'slash',
        description: 'slash attack',
        criticalChance: 0.05,
        effectProbability: {
            onCenter: {
                max: .75,
                min: .45
            },
            onTarget: {
                max: .3,
                min: .1
            },
        },
        damageRounds: 3,
        dot: true,
        img: imgSlash
    },
    blind: {
        title: 'blind',
        description: 'blind attack',
        dot: false,
        damageRounds: 1,
        effectProbability: {
            onCenter: {
                max: .75,
                min: .45
            },
            onTarget: {
                max: .3,
                min: .1
            },
        },
        criticalChance: 0.1,
        img: imgBlind
    }
};