const { Gameboard } = require('./gameboard');

/*
test('Returns a 10x10 gameboard', () => {
    const gameboard1 = Gameboard(10);
    const gameboard2 = Gameboard(10);
    //console.log(gameboard1);
    expect(gameboard1.id).not.toEqual(gameboard2.id);
})
*/
/*
    const carrier = Ship('carrier', 5, [0,0], "down");
    const battleship = Ship('battleship', 4, [0,1], "down");
    const cruiser = Ship('cruiser', 3, [0,2], "down");
    const submarine = Ship('submarine', 3, [0,3], "down");
    const destroyer = Ship('destroyer', 2, [0,4], "down");
*/
/*
test('Generates the ships on the board', () => {
    const gameboard = Gameboard();
    console.log(gameboard.array)
    // Carrier
    expect(gameboard.array[0][0].id).not.toEqual(null);
    expect(gameboard.array[1][0].id).not.toEqual(null);
    expect(gameboard.array[2][0].id).not.toEqual(null);
    expect(gameboard.array[3][0].id).not.toEqual(null);
    expect(gameboard.array[4][0].id).not.toEqual(null);
    // Battleship
    expect(gameboard.array[0][1].id).not.toEqual(null);
    expect(gameboard.array[1][1].id).not.toEqual(null);
    expect(gameboard.array[2][1].id).not.toEqual(null);
    expect(gameboard.array[3][1].id).not.toEqual(null);
     // Cruiser
    expect(gameboard.array[0][2].id).not.toEqual(null);
    expect(gameboard.array[1][2].id).not.toEqual(null);
    expect(gameboard.array[2][2].id).not.toEqual(null);
    // Submarine
    expect(gameboard.array[0][3].id).not.toEqual(null);
    expect(gameboard.array[1][3].id).not.toEqual(null);
    expect(gameboard.array[2][3].id).not.toEqual(null);
    // Destroyer
    expect(gameboard.array[0][4].id).not.toEqual(null);
    expect(gameboard.array[1][4].id).not.toEqual(null);
})
*/
/* 
    const carrier = Ship('carrier', 5, [9,9], "up");
    const battleship = Ship('battleship', 4, [0,1], "right");
    const cruiser = Ship('cruiser', 3, [1,2], "down");
    const submarine = Ship('submarine', 3, [3,9], "left");
    const destroyer = Ship('destroyer', 2, [8,4], "down");
*/
/*
test('Tests other directions add ships correctly on the board', () => {
    const gameboard = Gameboard();
    // Carrier
    expect(gameboard.array[9][9].id).not.toEqual(null);
    expect(gameboard.array[8][9].id).not.toEqual(null);
    expect(gameboard.array[7][9].id).not.toEqual(null);
    expect(gameboard.array[6][9].id).not.toEqual(null);
    expect(gameboard.array[5][9].id).not.toEqual(null);
    // Battleship
    expect(gameboard.array[0][1].id).not.toEqual(null);
    expect(gameboard.array[0][2].id).not.toEqual(null);
    expect(gameboard.array[0][3].id).not.toEqual(null);
    expect(gameboard.array[0][4].id).not.toEqual(null);
     // Cruiser
    expect(gameboard.array[1][2].id).not.toEqual(null);
    expect(gameboard.array[2][2].id).not.toEqual(null);
    expect(gameboard.array[3][2].id).not.toEqual(null);
    // Submarine
    expect(gameboard.array[3][9].id).not.toEqual(null);
    expect(gameboard.array[3][8].id).not.toEqual(null);
    expect(gameboard.array[3][7].id).not.toEqual(null);
    // Destroyer
    expect(gameboard.array[8][4].id).not.toEqual(null);
    expect(gameboard.array[9][4].id).not.toEqual(null);
})
*/
/*
test('Tests if replacement happens when same coordinates are used for two ships', () => {
    const gameboard = Gameboard();
    const gameboard1 = Gameboard();
    // console.log(gameboard.array);
    // console.log(gameboard1.array);
    // Carrier
    expect(gameboard.array[9][9].id).not.toEqual(null);
    expect(gameboard.array[8][9].id).toEqual(gameboard.array[9][9].id);
    expect(gameboard.array[7][9].id).toEqual(gameboard.array[9][9].id);
    expect(gameboard.array[6][9].id).toEqual(gameboard.array[9][9].id);
    expect(gameboard.array[5][9].id).toEqual(gameboard.array[9][9].id);
    // Carrier
    expect(gameboard1.array[9][9].id).not.toEqual(null);
    expect(gameboard1.array[8][9].id).toEqual(gameboard1.array[9][9].id);
    expect(gameboard1.array[7][9].id).toEqual(gameboard1.array[9][9].id);
    expect(gameboard1.array[6][9].id).toEqual(gameboard1.array[9][9].id);
    expect(gameboard1.array[5][9].id).toEqual(gameboard1.array[9][9].id);
})
*/
/*
test('Tests if a miss is correctly recorded on the gameboard', () => {
    const gameboard = Gameboard();
    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([9,9]);
    gameboard.receiveAttack([9,9]);
    expect(gameboard.array[0][0].shot).toEqual('hit');
    expect(gameboard.array[9][9].shot).toEqual('miss');
    expect(gameboard.array[9][8].shot).toEqual(null);
})
*/
/*
test('Tests if a ship is correctly recorded as sunk', () => {
    const gameboard1 = Gameboard();
    gameboard1.receiveAttack([0,4]);
    gameboard1.receiveAttack([1,4]);
    const fleet = gameboard1.playerFleet;
    expect(fleet[4].sunkStatus()).toEqual(true);
    expect(fleet[3].sunkStatus()).toEqual(false);
})
*/
/*
test('Tests if fleetStatus records true', () => {
    const gameboard1 = Gameboard();
    console.log(gameboard1)
    // Carrier
    gameboard1.receiveAttack([0,0]);
    gameboard1.receiveAttack([1,0]);
    gameboard1.receiveAttack([2,0]);
    gameboard1.receiveAttack([3,0]);
    gameboard1.receiveAttack([4,0]);
    expect(gameboard1.playerFleet[0].sunkStatus()).toEqual(true);
    // Battleship
    gameboard1.receiveAttack([0,1]);
    gameboard1.receiveAttack([1,1]);
    gameboard1.receiveAttack([2,1]);
    gameboard1.receiveAttack([3,1]);
    expect(gameboard1.playerFleet[1].sunkStatus()).toEqual(true);
    // Cruiser
    gameboard1.receiveAttack([0,2]);
    gameboard1.receiveAttack([1,2]);
    gameboard1.receiveAttack([2,2]);
    gameboard1.receiveAttack([3,2]);
    expect(gameboard1.playerFleet[2].sunkStatus()).toEqual(true);
    // Submarine
    gameboard1.receiveAttack([0,3]);
    gameboard1.receiveAttack([1,3]);
    gameboard1.receiveAttack([2,3]);
    expect(gameboard1.playerFleet[3].sunkStatus()).toEqual(true);
    expect(gameboard1.fleetStatus).toEqual(true);
    // Destroyer
    gameboard1.receiveAttack([0,4]);
    gameboard1.receiveAttack([1,4]);
    expect(gameboard1.playerFleet[4].sunkStatus()).toEqual(true);
    expect(gameboard1.fleetStatus).toEqual(false);
})
*/
test('Tests if fleetStatus records true', () => {
    const gameboard1 = Gameboard();
    console.log(gameboard1)
    // Carrier
    gameboard1.receiveAttack([9,9]);
    gameboard1.receiveAttack([8,9]);
    gameboard1.receiveAttack([7,9]);
    gameboard1.receiveAttack([6,9]);
    gameboard1.receiveAttack([5,9]);
    expect(gameboard1.playerFleet[0].sunkStatus()).toEqual(true);
    // Battleship
    gameboard1.receiveAttack([0,1]);
    gameboard1.receiveAttack([0,2]);
    gameboard1.receiveAttack([0,3]);
    gameboard1.receiveAttack([0,4]);
    expect(gameboard1.playerFleet[1].sunkStatus()).toEqual(true);
    // Cruiser
    gameboard1.receiveAttack([1,2]);
    gameboard1.receiveAttack([2,2]);
    gameboard1.receiveAttack([3,2]);
    expect(gameboard1.playerFleet[2].sunkStatus()).toEqual(true);
    // Submarine
    gameboard1.receiveAttack([3,9]);
    gameboard1.receiveAttack([3,8]);
    gameboard1.receiveAttack([3,7]);
    expect(gameboard1.playerFleet[3].sunkStatus()).toEqual(true);
    expect(gameboard1.fleetStatus).toEqual(true);
    // Destroyer
    gameboard1.receiveAttack([8,4]);
    gameboard1.receiveAttack([9,4]);
    expect(gameboard1.playerFleet[4].sunkStatus()).toEqual(true);
    expect(gameboard1.fleetStatus).toEqual(false);
})