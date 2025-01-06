const { Ship } = require('./ships');

test('Records 2 hits to the ship', () => {
    const ship = Ship(4, [0,0], 'right');
    console.log(ship);
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(2);
    expect(ship.sunk).toBe(false);
})

test('Records 4 hits to a ship and sunk is false', () => {
    const ship = Ship(4, [0,0], 'right');
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(4);
    expect(ship.sunk).toBe(true);
})

test('Creates two separate ships', () => {
    const ship1 = Ship(4, [0,0], 'right');
    const ship2 = Ship(4, [0,0], 'right');
    expect(ship1.id).not.toEqual(ship2.id);
})
/*
test('Rejects invalid coordinates', () => {
    const ship1 = Ship(4, [100,0], 'left');
    const ship2 = Ship(4, [0,-90], 'left');
    expect(ship1.startingCoordinates).toEqual([false, 0]);
    expect(ship2.startingCoordinates).toEqual([0, false]);
})

test('Rejects invalid direction', () => {
    const ship1 = Ship(4, [0,0], 'leftt');
    expect(ship1.direction).toEqual(false);
})
    */