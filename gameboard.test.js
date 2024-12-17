import { Gameboard } from './gameboard';


test('Gameboard returns an array', () => {
    expect(Array.isArray(Gameboard.generateGameboard())).toBe(true);
})

test('Gameboard returns 10 indexes', () => {
    expect(Gameboard.generateGameboard().length).toBe(10)
})

test('Generates a Carrier ship with length 5', () => {
    expect(Gameboard.generateCarrier(2, 9, 'left').length).toBe(5)
})

test('Generates a Carrier ship with starting position [2,9] direction left', () => {
    expect(Gameboard.generateCarrier(2, 9, 'left').position[0]).toEqual([2,9])
})

/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction left', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(2, 4, 'left');
    expect(player[2]).toEqual([null, null, null, [2,3], [2,4], null, null, null, null, null]);
})
*/
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction right', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(2, 4, 'right');
    expect(player[2]).toEqual([null, null, null, null, [2,4], [2,5], null, null, null, null]);
})
*/
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(3, 4, 'up');
    expect(player[2]).toEqual([null, null, null, null, [2,4], null, null, null, null, null]);
    expect(player[3]).toEqual([null, null, null, null, [3,4], null, null, null, null, null]);
})
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(3, 4, 'down');
    expect(player[3]).toEqual([null, null, null, null, [3,4], null, null, null, null, null]);
    expect(player[4]).toEqual([null, null, null, null, [4,4], null, null, null, null, null]);
})
*/
test('Fails Destroyer ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(0, 3, 'up');
    expect(destroyer).toBe('Battleship is outside of bounds');
})
