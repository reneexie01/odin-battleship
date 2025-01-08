const { Player } = require('./player.js');

test('Creates two distinct players with distinct gameboards', () => {
    const player1 = Player();
    const player2 = Player();
    console.log(player1)
    expect(player1.id).not.toEqual(player2.id);
    expect(player1.gameboard.id).not.toEqual(player2.gameboard.id);
})

test('Player 2 receives a hit to their carrier', () => {
    const player1 = Player();
    const player2 = Player();
    player2.gameboard.receiveAttack([9,9])
    player1.gameboard.receiveAttack([9,9])
    expect(player2.gameboard.playerFleet[0].hitCount()).toEqual(1);
    expect(player1.gameboard.playerFleet[0].hitCount()).toEqual(1);
})