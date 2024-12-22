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
/*
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
*/
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
/*
test('Board records a hit on a ship', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(9, 1, 'up');
    Gameboard.receiveAttack(9,1);
    expect(player[9][1].shot).toEqual('hit');
})
*/
/*
test('Board records a miss', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(9, 1, 'up');
    Gameboard.receiveAttack(1,1);
    expect(player[1][1].shot).toEqual('miss');
})
*/
/*
test('Player ships are made and added to object', () => {
    const destroyer = Gameboard.generateDestroyer(6, 1, 'up');
    destroyer.id = '_qvgslejdt';
    destroyer.hit = 'function';
    destroyer.isSunk = 'function';
    destroyer.shipValidity.coordinates =[ 'arrays' ];
    expect(Gameboard.playerShips.destroyerObject).toEqual(
        {
            id: '_qvgslejdt',
            type: 'destroyer',
            length: 2,
            hit: 'function',
            isSunk: 'function',
            position: { coordinates: [ 6, 1 ], rowStatus: true, columnStatus: true },
            direction: true,
            shipValidity: { shipStatus: true, coordinates: [ 'arrays' ] },
            hitCount: 0,
            sunk: false
          }
    );
})
*/
/*
test('Player ships records a hit', () => {
    const destroyer = Gameboard.generateDestroyer(6, 1, 'up');
    Gameboard.receiveAttack(6,1);
    destroyer.id = '_qvgslejdt';
    destroyer.hit = 'function';
    destroyer.isSunk = 'function';
    destroyer.shipValidity.coordinates =[ 'arrays' ];
    expect(Gameboard.playerShips.destroyerObject).toEqual(
        {
            id: '_qvgslejdt',
            type: 'destroyer',
            length: 2,
            hit: 'function',
            isSunk: 'function',
            position: { coordinates: [ 6, 1 ], rowStatus: true, columnStatus: true },
            direction: true,
            shipValidity: { shipStatus: true, coordinates: [ 'arrays' ] },
            hitCount: 2,
            sunk: false
          }
    );
})
*/
/*
test('Player ships does not a hit when shot is missed', () => {
    const destroyer = Gameboard.generateDestroyer(6, 1, 'up');
    Gameboard.receiveAttack(1,1);
    destroyer.id = '_qvgslejdt';
    destroyer.hit = 'function';
    destroyer.isSunk = 'function';
    destroyer.shipValidity.coordinates =[ 'arrays' ];
    expect(Gameboard.playerShips.destroyerObject).toEqual(
        {
            id: '_qvgslejdt',
            type: 'destroyer',
            length: 2,
            hit: 'function',
            isSunk: 'function',
            position: { coordinates: [ 6, 1 ], rowStatus: true, columnStatus: true },
            direction: true,
            shipValidity: { shipStatus: true, coordinates: [ 'arrays' ] },
            hitCount: 0,
            sunk: false
          }
    );
})
*/
/*
test('Player ships does not double count a hit', () => {
    const player = Gameboard.playerBoard;
    const destroyer = Gameboard.generateDestroyer(6, 1, 'up');
    Gameboard.receiveAttack(6,1);
    Gameboard.receiveAttack(6,1);
    destroyer.id = '_qvgslejdt';
    destroyer.hit = 'function';
    destroyer.isSunk = 'function';
    destroyer.shipValidity.coordinates =[ 'arrays' ];
    expect(Gameboard.playerShips.destroyerObject).toEqual(
        {
            id: '_qvgslejdt',
            type: 'destroyer',
            length: 2,
            hit: 'function',
            isSunk: 'function',
            position: { coordinates: [ 6, 1 ], rowStatus: true, columnStatus: true },
            direction: true,
            shipValidity: { shipStatus: true, coordinates: [ 'arrays' ] },
            hitCount: 1,
            sunk: false
          }
    );
})
*/
/*
test('Adds all relevant ships to playerShip object', () => {
    const player = Gameboard.playerBoard;
    const playerShips = Gameboard.playerShips;
    const carrier = Gameboard.generateCarrier(1, 1, 'down');
    const battleship = Gameboard.generateBattleship(1, 2, 'down');
    const cruiser = Gameboard.generateCruiser(1, 3, 'down');
    const submarine = Gameboard.generateSubmarine(1, 4, 'down');
    const destroyer = Gameboard.generateDestroyer(1, 5, 'down');
    console.log(playerShips)
    expect(0).toEqual(0)})
*/
/*
test('Player ships records when sunk', () => {
    const cruiser = Gameboard.generateCruiser(6, 1, 'up');
    Gameboard.receiveAttack(6,1);
    Gameboard.receiveAttack(5,1);
    Gameboard.receiveAttack(4,1);
    cruiser.id = '_qvgslejdt';
    cruiser.hit = 'function';
    cruiser.isSunk = 'function';
    cruiser.shipValidity.coordinates =[ 'arrays' ];
    expect(Gameboard.playerShips.cruiserObject).toEqual(
        {
            id: '_qvgslejdt',
            type: 'cruiser',
            length: 3,
            hit: 'function',
            isSunk: 'function',
            position: { coordinates: [ 6, 1 ], rowStatus: true, columnStatus: true },
            direction: true,
            shipValidity: { shipStatus: true, coordinates: [ 'arrays' ] },
            hitCount: 3,
            sunk: true
            }
    );
})
*/ 
test('Identify when the fleet has been sunk', () => {
    const player = Gameboard.playerBoard;
    const playerShips = Gameboard.playerShips;
    const carrier = Gameboard.generateCarrier(1, 1, 'down');
    const battleship = Gameboard.generateBattleship(1, 2, 'down');
    const cruiser = Gameboard.generateCruiser(1, 3, 'down');
    const submarine = Gameboard.generateSubmarine(1, 4, 'down');
    const destroyer = Gameboard.generateDestroyer(1, 5, 'down');
    Gameboard.playerShips.carrierObject.sunk = true;
    Gameboard.playerShips.battleshipObject.sunk = true;
    Gameboard.playerShips.cruiserObject.sunk = true;
    //Gameboard.playerShips.submarineObject.sunk = true;
    Gameboard.playerShips.destroyerObject.sunk = true;
    console.log(playerShips)
    const result = Gameboard.fleetStatus();
    expect(result).toBe('active');
})
   
//TODO: For the player, identify when all ships are sunk