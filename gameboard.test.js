import { Gameboard } from './gameboard';


test('Gameboard returns an array', () => {
    expect(Array.isArray(Gameboard.generateGameboard())).toBe(true);
})

test('Gameboard returns 10 indexes', () => {
    expect(Gameboard.generateGameboard().length).toBe(10)
})
/*
test('Adds Carrier ship on the relevant section of the gameboard with direction left', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateCarrier(2, 7, 'left');
    expect(player[2]).toEqual([null, null, null, [2,3], [2,4], [2,5], [2,6], [2,7], null, null]);
})
*/

test('Adds Destroyer ship on the relevant section of the gameboard with direction right', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(2, 4, 'right');
    expect(player[2]).toEqual([null, null, null, null, [2,4], [2,5], null, null, null, null]);
})

/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(3, 4, 'up');
    expect(player[2]).toEqual([null, null, null, null, [2,4], null, null, null, null, null]);
    expect(player[3]).toEqual([null, null, null, null, [3,4], null, null, null, null, null]);
})
*/
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(3, 4, 'down');
    expect(player[3]).toEqual([null, null, null, null, [3,4], null, null, null, null, null]);
    expect(player[4]).toEqual([null, null, null, null, [4,4], null, null, null, null, null]);
})
*/
/*
test('Fails Destroyer ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(0, 3, 'up');
    expect(destroyer).toBe('Battleship is outside of bounds');
})
*/
/*
test('Fails Destroyer ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(0, 9, 'right');
    expect(destroyer).toBe('Battleship is outside of bounds');
})
*/
/*
test('Fails Destroyer ship when any of the coordinates are already occupied', () => {
    const player = Gameboard.playerBoard;
    player[2][4] = [2,4]
    const destroyer = Gameboard.generateDestroyer(2, 4, 'left');
    expect(destroyer).toBe('Coordinates are occupied');
})
*/
test('Fails Destroyer ship when direction is invalid', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(2, 4, 'lefts');
    expect(destroyer).toBe('Invalid direction received');
})