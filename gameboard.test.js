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

test('Fails a Carrier ship with position [2,1] direction right', () => {
    expect(Gameboard.generateCarrier(2, 1, 'left').boardLocation).toBe('Battleship is outside of bounds')
})