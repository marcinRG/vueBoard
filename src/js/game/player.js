export function doAction(player) {
    if (player.moves > 0) {
        player.moves = player.moves - 1;
    }
    return player;
}

export function createPlayer() {
    return {
        Hp: 100,
        maxHp: 100,
        moves: 5,
        attackStrength: 15,
        debuffs: []
    }
}