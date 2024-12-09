const { ship } = require('./ships');

test('Battleship Factory exists', () => {
    expect(ship(4)).toBeDefined();
})

test('Battleship Factory is an object', () => {
    expect(typeof ship(4)).toBe('object');
})

test('Battleship Factory has length of 4 units', () => {
    expect(ship(4).length).toBe(4);
})

test('Battleship Factory has 2 hits', () => {
    expect(ship(4).hit().hit().hitCount).toBe(2);
})

test('Battleship Factory with length 2 has been sunk after 2 hits', () => {
    expect(ship(2).hit().hit().sunk).toBe(true);
})

