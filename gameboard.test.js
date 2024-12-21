import { Gameboard } from './gameboard';

test('Generates gameboard with relevant objects in each index', () => {
    const player = Gameboard.playerBoard;
    expect(player[0][0]).toEqual({ id: null, type: null, shot: null });
})

/*
test('Generates a Carrier ship', () => {
    expect(Gameboard.generateCarrier(2, 3, 'right').shipValidity.coordinates).toEqual([[2,3], [2,4], [2,5], [2,6], [2,7]])
})
*/

test('Adds Carrier ship on the relevant section of the gameboard with direction right', () => {
    const player = Gameboard.playerBoard;
    const carrier = Gameboard.generateCarrier(2, 3, 'right');
    expect(player[2][3].type).toEqual('carrier');
    expect(player[2][4].type).toEqual('carrier');
    expect(player[2][5].type).toEqual('carrier');
    expect(player[2][6].type).toEqual('carrier');
    expect(player[2][7].type).toEqual('carrier');
    expect(player[2][8].type).toEqual(null);
})

/*
test('Adds Battleship ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const battleship = Gameboard.generateBattleship(4, 4, 'down');
    expect(player[4][4].type).toEqual('battleship');
    expect(player[5][4].type).toEqual('battleship');
    expect(player[6][4].type).toEqual('battleship');
    expect(player[7][4].type).toEqual('battleship');
})
*/
/*
test('Adds Cruiser ship on the relevant section of the gameboard with direction down', () => {
    const player = Gameboard.playerBoard;
    const cruiser = Gameboard.generateCruiser(4, 5, 'down');
    expect(player[4][5].type).toEqual('cruiser');
    expect(player[5][5].type).toEqual('cruiser');
    expect(player[6][5].type).toEqual('cruiser');
})
*/
/*
test('Adds Submarine ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const submarine = Gameboard.generateSubmarine(9, 1, 'up');
    expect(player[7][1].type).toEqual('submarine');
    expect(player[8][1].type).toEqual('submarine');
    expect(player[9][1].type).toEqual('submarine');
})
*/
/*
test('Adds Destroyer ship on the relevant section of the gameboard with direction up', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(9, 1, 'up');
    expect(player[8][1].type).toEqual('destroyer');
    expect(player[9][1].type).toEqual('destroyer');
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
/*
test('Fails Carrier ship when any part of the ship is outside of bounds', () => {
    const player = Gameboard.playerBoard;
    const carrier = Gameboard.generateCarrier(0, 3, 'up');
    expect(carrier).toBe('Battleship is outside of bounds');
})
*/

//TODO: Change generateGameboard function to object with { shipId, type, shot } - this will impact the generateDestroyer functions
//TODO: Change generateDestroyer function to replace position with updated object once it has been added