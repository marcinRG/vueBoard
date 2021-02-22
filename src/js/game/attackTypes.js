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
        dot: false,
        img: imgStun,
    },
    slash: {
        title: 'slash',
        description: 'slash attack',
        dot: true,
        img: imgSlash
    },
    blind: {
        title: 'blind',
        description: 'blind attack',
        dot: false,
        img: imgBlind
    }
};