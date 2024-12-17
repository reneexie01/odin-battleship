import { BattleShip } from './ships';

test('Battleship Factory exists', () => {
    expect(BattleShip.ship(4, 2, 2, 'left')).toBeDefined();
})

test('Battleship Factory is an object', () => {
    expect(typeof BattleShip.ship(4, 2, 2, 'left')).toBe('object');
})

test('Battleship Factory has length of 4 units', () => {
    expect(BattleShip.ship(4, 2, 2, 'left').length).toBe(4);
})

test('Battleship Factory has 2 hits', () => {
    expect(BattleShip.ship(4, 2, 2, 'left').hit().hit().hitCount).toBe(2);
})

test('Battleship Factory with length 2 has been sunk after 2 hits', () => {
    expect(BattleShip.ship(2, 2, 2, 'left').hit().hit().sunk).toBe(true);
})

test('Battleship Factory accepts a position', () => {
    expect(BattleShip.ship(2, 2, 2, 'left').direction).toBe('left');
})

test('Battleship Factory rejects generated coordinates that are out of bounds', () => {
    expect(BattleShip.ship(6, 3, 3, 'left').shipValidity.shipStatus).toEqual(false);
})
