const { gameboard } = require('./gameboard');

test('Gameboard returns an array', () => {
    expect(Array.isArray(gameboard())).toBe(true);
})

test('Gameboard returns 10 indexes', () => {
    expect(gameboard().length).toBe(10)
})