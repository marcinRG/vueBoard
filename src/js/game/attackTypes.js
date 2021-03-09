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
        description: 'This is stun attack description',
        logMsg: 'is stunned',
        criticalChance: 0.1,
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
        description: 'This is slash attack description',
        logMsg: 'is slashed',
        criticalChance: 0.15,
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
        description: 'This is blind attack description',
        logMsg: 'is blinded',
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
        criticalChance: 0.2,
        img: imgBlind
    }
};