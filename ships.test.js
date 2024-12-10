const { battleShip } = require('./ships');

test('Battleship Factory exists', () => {
    expect(battleShip.ship(4, 0, false, 2, 2, 'left')).toBeDefined();
})

test('Battleship Factory is an object', () => {
    expect(typeof battleShip.ship(4, 0, false, 2, 2, 'left')).toBe('object');
})

test('Battleship Factory has length of 4 units', () => {
    expect(battleShip.ship(4, 0, false, 2, 2, 'left').length).toBe(4);
})

test('Battleship Factory has 2 hits', () => {
    expect(battleShip.ship(4, 0, false, 2, 2, 'left').hit().hit().hitCount).toBe(2);
})

test('Battleship Factory with length 2 has been sunk after 2 hits', () => {
    expect(battleShip.ship(2, 0, false, 2, 2, 'left').hit().hit().sunk).toBe(true);
})

test('Battleship Factory accepts a position', () => {
    expect(battleShip.ship(2, 0, false, 2, 2, 'left').direction).toBe('left');
})
