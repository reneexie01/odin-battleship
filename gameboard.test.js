import { Gameboard } from './gameboard';


test('Gameboard returns an array', () => {
    expect(Array.isArray(Gameboard.generateGameboard())).toBe(true);
})

test('Gameboard returns 10 indexes', () => {
    expect(Gameboard.generateGameboard().length).toBe(10)
})
/*
test('Generates a Carrier ship', () => {
    expect(Gameboard.generateCarrier(2, 3, 'right').shipValidity.coordinates).toEqual([[2,3], [2,4], [2,5], [2,6], [2,7]])
})
*/

test('Adds Carrier ship on the relevant section of the gameboard with direction right', () => {
    const player = Gameboard.playerBoard;
    const carrier = Gameboard.generateCarrier(2, 3, 'right');
    expect(player[2]).toEqual([null, null, null, [2,3], [2,4], [2,5], [2,6], [2,7], null, null]);
})

test('Adds Battleship ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const battleship = Gameboard.generateBattleship(4, 4, 'down');
    expect(player[4]).toEqual([null, null, null, null, [4,4], null, null, null, null, null]);
    expect(player[5]).toEqual([null, null, null, null, [5,4], null, null, null, null, null]);
    expect(player[6]).toEqual([null, null, null, null, [6,4], null, null, null, null, null]);
    expect(player[7]).toEqual([null, null, null, null, [7,4], null, null, null, null, null]);
})

/*
test('Adds Cruiser ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const cruiser = Gameboard.generateCruiser(4, 5, 'down');
    expect(player[4]).toEqual([null, null, null, null, null, [4,5], null, null, null, null]);
    expect(player[5]).toEqual([null, null, null, null, null, [5,5], null, null, null, null]);
    expect(player[6]).toEqual([null, null, null, null, null, [6,5], null, null, null, null]);
})
*/
/*
test('Adds Submarine ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const submarine = Gameboard.generateSubmarine(9, 1, 'up');
    expect(player[7]).toEqual([null, [7,1], null, null, null, null, null, null, null, null]);
    expect(player[8]).toEqual([null, [8,1], null, null, null, null, null, null, null, null]);
    expect(player[9]).toEqual([null, [9,1], null, null, null, null, null, null, null, null]);
})
*/
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(9, 1, 'up');
    expect(player[8]).toEqual([null, [8,1], null, null, null, null, null, null, null, null]);
    expect(player[9]).toEqual([null, [9,1], null, null, null, null, null, null, null, null]);
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
test('Fails Destroyer ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(0, 9, 'up');
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
/*
test('Fails Destroyer ship when direction is invalid', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(2, 4, 'leftt');
    expect(destroyer).toBe('Invalid direction received');
})
*/
/*
test('Fails Destroyer ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(0, 9, 'up');
    expect(destroyer).toBe('Battleship is outside of bounds');
})
*/

test('Fails Carrier ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const carrier = Gameboard.generateCarrier(0, 3, 'up');
    expect(carrier).toBe('Battleship is outside of bounds');
})