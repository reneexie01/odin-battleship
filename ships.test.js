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

test('Battleship Factory generates coordinates from position and left direction', () => {
    expect(BattleShip.ship(2, 2, 4, 'left').boardLocation).toEqual([[2,4],[2,3]]);
})

test('Battleship Factory generates coordinates from position and right direction', () => {
    expect(BattleShip.ship(3, 2, 4, 'right').boardLocation).toEqual([[2,4],[2,5],[2,6]]);
})

test('Battleship Factory generates coordinates from position and up direction', () => {
    expect(BattleShip.ship(2, 3, 4, 'up').boardLocation).toEqual([[3,4],[2,4]]);
})

test('Battleship Factory generates coordinates from position and down direction', () => {
    expect(BattleShip.ship(3, 3, 4, 'down').boardLocation).toEqual([[3,4],[4,4],[5,4]]);
})

test('Battleship Factory rejects generated coordinates that are out of bounds', () => {
    expect(BattleShip.ship(6, 3, 3, 'left').boardLocation).toEqual('Battleship is outside of bounds');
})