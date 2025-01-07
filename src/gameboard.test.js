const { Gameboard } = require('./gameboard');

/*
test('Returns a 10x10 gameboard', () => {
    const gameboard1 = Gameboard(10);
    const gameboard2 = Gameboard(10);
    //console.log(gameboard1);
    expect(gameboard1.id).not.toEqual(gameboard2.id);
})
*/
/* TODO: Add to Gameboard function on gameboard.js
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
/* TODO: Add to Gameboard function on gameboard.js
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
test('Tests if a miss is correctly recorded on the gameboard', () => {
    const gameboard1 = Gameboard();
    gameboard1.receiveAttack([0,0]);
    gameboard1.receiveAttack([9,9]);
    gameboard1.receiveAttack([9,9]);
    console.log(gameboard1.array);
    console.log('Fleet:', gameboard1.getFleet());
    expect(gameboard1.array[0][0].shot).toEqual('miss');
    expect(gameboard1.array[9][9].shot).toEqual('hit');
})