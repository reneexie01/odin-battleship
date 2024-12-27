/* PLAYER 1 */
const player1Board = document.querySelector('.player1-board');
const player1DOMGameboard = generateDOMBoard(player1Board, 10, 'p1');
const player1Gameboard = Gameboard.playerBoard;
const player1PlayerShips = Gameboard.playerShips;
player1DOMGameboard
player1Gameboard;

//TODO: Need to limit to one response only - right now you can create as many ships as you want.
//TODO: Switch hidden to the next player when submit button is clicked.

// Carrier
const p1carrierSubmit = document.querySelector('.p1-carrier-submit');
const p1carrierCoordinateRow = document.querySelector('.player1-carrier-row');
const p1carrierCoordinateColumn = document.querySelector('.player1-carrier-column');

p1carrierSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p1carrierCoordinateRow.value);
    const startingColumn = parseInt(p1carrierCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCarrier(startingRow, startingColumn, direction, player1PlayerShips);
    const p1coordinatesArray = player1PlayerShips.carrierObject.shipValidity.coordinates;
    shipClass('p1', p1coordinatesArray);

    console.log(player1Gameboard);
    console.log(player1PlayerShips);
    })

// Battleship
const p1battleshipSubmit = document.querySelector('.p1-battleship-submit');
const p1battleshipCoordinateRow = document.querySelector('.player1-battleship-row');
const p1battleshipCoordinateColumn = document.querySelector('.player1-battleship-column');

p1battleshipSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p1battleshipCoordinateRow.value);
    const startingColumn = parseInt(p1battleshipCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateBattleship(startingRow, startingColumn, direction, player1PlayerShips);
    const p1coordinatesArray = player1PlayerShips.battleshipObject.shipValidity.coordinates;
    shipClass('p1', p1coordinatesArray);

    console.log(player1Gameboard);
    console.log(player1PlayerShips);
    })
    
// Cruiser
const p1cruiserSubmit = document.querySelector('.p1-cruiser-submit');
const p1cruiserCoordinateRow = document.querySelector('.player1-cruiser-row');
const p1cruiserCoordinateColumn = document.querySelector('.player1-cruiser-column');

p1cruiserSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p1cruiserCoordinateRow.value);
    const startingColumn = parseInt(p1cruiserCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCruiser(startingRow, startingColumn, direction, player1PlayerShips);
    const p1coordinatesArray = player1PlayerShips.cruiserObject.shipValidity.coordinates;
    shipClass('p1', p1coordinatesArray);

    console.log(player1Gameboard);
    console.log(player1PlayerShips);
    })

// Submarine
const p1submarineSubmit = document.querySelector('.p1-submarine-submit');
const p1submarineCoordinateRow = document.querySelector('.player1-submarine-row');
const p1submarineCoordinateColumn = document.querySelector('.player1-submarine-column');

p1submarineSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p1submarineCoordinateRow.value);
    const startingColumn = parseInt(p1submarineCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateSubmarine(startingRow, startingColumn, direction, player1PlayerShips);
    const p1coordinatesArray = player1PlayerShips.submarineObject.shipValidity.coordinates;
    shipClass('p1', p1coordinatesArray);

    console.log(player1Gameboard);
    console.log(player1PlayerShips);
    })

// Destroyer
const p1destroyerSubmit = document.querySelector('.p1-destroyer-submit');
const p1destroyerCoordinateRow = document.querySelector('.player1-destroyer-row');
const p1destroyerCoordinateColumn = document.querySelector('.player1-destroyer-column');

p1destroyerSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p1destroyerCoordinateRow.value);
    const startingColumn = parseInt(p1destroyerCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;
    
    Gameboard.generateDestroyer(startingRow, startingColumn, direction, player1PlayerShips);
    const p1coordinatesArray = player1PlayerShips.destroyerObject.shipValidity.coordinates;
    shipClass('p1', p1coordinatesArray);

    console.log(player1Gameboard);
    console.log(player1PlayerShips);
    })

/* PLAYER 2 */
const player2Board = document.querySelector('.player2-board');
const player2DOMGameboard = generateDOMBoard(player2Board, 10, 'p2');
const player2Gameboard = Gameboard.playerBoard;
const player2PlayerShips = Gameboard.playerShips;
player2DOMGameboard
player2Gameboard;

// Carrier
const p2carrierSubmit = document.querySelector('.p2-carrier-submit');
const p2carrierCoordinateRow = document.querySelector('.player2-carrier-row');
const p2carrierCoordinateColumn = document.querySelector('.player2-carrier-column');

p2carrierSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p2carrierCoordinateRow.value);
    const startingColumn = parseInt(p2carrierCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCarrier(startingRow, startingColumn, direction, player2PlayerShips);
    const p2coordinatesArray = player2PlayerShips.carrierObject.shipValidity.coordinates;
    shipClass('p2', p2coordinatesArray);

    console.log(player2Gameboard);
    console.log(player2PlayerShips);
    })

// Battleship
const p2battleshipSubmit = document.querySelector('.p2-battleship-submit');
const p2battleshipCoordinateRow = document.querySelector('.player2-battleship-row');
const p2battleshipCoordinateColumn = document.querySelector('.player2-battleship-column');

p2battleshipSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p2battleshipCoordinateRow.value);
    const startingColumn = parseInt(p2battleshipCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateBattleship(startingRow, startingColumn, direction, player2PlayerShips);
    const p2coordinatesArray = player2PlayerShips.battleshipObject.shipValidity.coordinates;
    shipClass('p2', p2coordinatesArray);

    console.log(player2Gameboard);
    console.log(player2PlayerShips);
    })
    
// Cruiser
const p2cruiserSubmit = document.querySelector('.p2-cruiser-submit');
const p2cruiserCoordinateRow = document.querySelector('.player2-cruiser-row');
const p2cruiserCoordinateColumn = document.querySelector('.player2-cruiser-column');

p2cruiserSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p2cruiserCoordinateRow.value);
    const startingColumn = parseInt(p2cruiserCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCruiser(startingRow, startingColumn, direction, player2PlayerShips);
    const p2coordinatesArray = player2PlayerShips.cruiserObject.shipValidity.coordinates;
    shipClass('p2', p2coordinatesArray);

    console.log(player2Gameboard);
    console.log(player2PlayerShips);
    })

// Submarine
const p2submarineSubmit = document.querySelector('.p2-submarine-submit');
const p2submarineCoordinateRow = document.querySelector('.player2-submarine-row');
const p2submarineCoordinateColumn = document.querySelector('.player2-submarine-column');

p2submarineSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p2submarineCoordinateRow.value);
    const startingColumn = parseInt(p2submarineCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateSubmarine(startingRow, startingColumn, direction, player2PlayerShips);
    const p2coordinatesArray = player2PlayerShips.submarineObject.shipValidity.coordinates;
    shipClass('p2', p2coordinatesArray);

    console.log(player2Gameboard);
    console.log(player2PlayerShips);
    })

// Destroyer
const p2destroyerSubmit = document.querySelector('.p2-destroyer-submit');
const p2destroyerCoordinateRow = document.querySelector('.player2-destroyer-row');
const p2destroyerCoordinateColumn = document.querySelector('.player2-destroyer-column');

p2destroyerSubmit.addEventListener('click', () => {
    const startingRow = parseInt(p2destroyerCoordinateRow.value);
    const startingColumn = parseInt(p2destroyerCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;
    
    Gameboard.generateDestroyer(startingRow, startingColumn, direction, player2PlayerShips);
    const p2coordinatesArray = player2PlayerShips.destroyerObject.shipValidity.coordinates;
    shipClass('p2', p2coordinatesArray);

    console.log(player2Gameboard);
    console.log(player2PlayerShips);
    })


function shipClass(player, coordinatesArray) {
    coordinatesArray.forEach((coordinate) => {
        const id = `${coordinate[0]}-${coordinate[1]}`
        const coordinateSelector = document.getElementById(`${player}-${id}`);
        coordinateSelector.classList.add('ship');
    })
}

function generateDOMBoard(board, num, player) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        board.appendChild(row);
        for (let j = 0; j < num; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('id', `${player}-${i}-${j}`);
            row.appendChild(column); 
        }
    }
}


import { Gameboard } from "./gameboard.js";
import './styles.css';