const { ships } = require('./ships');

test('Battleship Factory exists', () => {
    expect(ships.battleShips(4)).toBeDefined();
})

test('Battleship Factory is an object', () => {
    expect(typeof ships.battleShips(4)).toBe('object');
})

test('Battleship Factory has length of 4 units', () => {
    expect(ships.battleShips(4).length).toBe(4);
})

test('Battleship Factory has 2 hits', () => {
    expect(ships.battleShips(4).hit().hit().hitCount).toBe(2);
})

test('Battleship Factory with length 2 has been sunk after 2 hits', () => {
    expect(ships.battleShips(2).hit().hit().sunk).toBe(true);
})