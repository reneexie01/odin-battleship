const player1Board = document.querySelector('.player1-board');
const player1DOMGameboard = generateDOMBoard(10);
const player1Gameboard = Gameboard.playerBoard;
player1DOMGameboard
player1Gameboard;

//TODO: Need to limit to one response only - right now you can create as many ships as you want.
//TODO: Switch hidden to the next player when submit button is clicked.

// Carrier
const carrierInput = document.querySelector('.player1-carrier');
const carrierSubmit = document.querySelector('.carrier-submit');
const carrierCoordinateRow = document.querySelector('.player1-carrier-row');
const carrierCoordinateColumn = document.querySelector('.player1-carrier-column');

carrierSubmit.addEventListener('click', () => {
    const startingRow = parseInt(carrierCoordinateRow.value);
    const startingColumn = parseInt(carrierCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCarrier(startingRow, startingColumn, direction);
    const coordinatesArray = Gameboard.playerShips.carrierObject.shipValidity.coordinates;
    shipClass(coordinatesArray);

    console.log(player1Gameboard);
    })

// Battleship
const battleshipInput = document.querySelector('.player1-battleship');
const battleshipSubmit = document.querySelector('.battleship-submit');
const battleshipCoordinateRow = document.querySelector('.player1-battleship-row');
const battleshipCoordinateColumn = document.querySelector('.player1-battleship-column');

battleshipSubmit.addEventListener('click', () => {
    const startingRow = parseInt(battleshipCoordinateRow.value);
    const startingColumn = parseInt(battleshipCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateBattleship(startingRow, startingColumn, direction);
    const coordinatesArray = Gameboard.playerShips.battleshipObject.shipValidity.coordinates;
    shipClass(coordinatesArray);

    console.log(player1Gameboard);
    })
    
// Cruiser
const cruiserInput = document.querySelector('.player1-cruiser');
const cruiserSubmit = document.querySelector('.cruiser-submit');
const cruiserCoordinateRow = document.querySelector('.player1-cruiser-row');
const cruiserCoordinateColumn = document.querySelector('.player1-cruiser-column');

cruiserSubmit.addEventListener('click', () => {
    const startingRow = parseInt(cruiserCoordinateRow.value);
    const startingColumn = parseInt(cruiserCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateCruiser(startingRow, startingColumn, direction);
    const coordinatesArray = Gameboard.playerShips.cruiserObject.shipValidity.coordinates;
    shipClass(coordinatesArray);

    console.log(player1Gameboard);
    })

// Submarine
const submarineInput = document.querySelector('.player1-submarine');
const submarineSubmit = document.querySelector('.submarine-submit');
const submarineCoordinateRow = document.querySelector('.player1-submarine-row');
const submarineCoordinateColumn = document.querySelector('.player1-submarine-column');

submarineSubmit.addEventListener('click', () => {
    const startingRow = parseInt(submarineCoordinateRow.value);
    const startingColumn = parseInt(submarineCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    Gameboard.generateSubmarine(startingRow, startingColumn, direction);
    const coordinatesArray = Gameboard.playerShips.submarineObject.shipValidity.coordinates;
    shipClass(coordinatesArray);

    console.log(player1Gameboard);
    })

// Destroyer
const destroyerInput = document.querySelector('.player1-destroyer');
const destroyerSubmit = document.querySelector('.destroyer-submit');
const destroyerCoordinateRow = document.querySelector('.player1-destroyer-row');
const destroyerCoordinateColumn = document.querySelector('.player1-destroyer-column');

destroyerSubmit.addEventListener('click', () => {
    const startingRow = parseInt(destroyerCoordinateRow.value);
    const startingColumn = parseInt(destroyerCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;
    
    Gameboard.generateDestroyer(startingRow, startingColumn, direction);
    const coordinatesArray = Gameboard.playerShips.destroyerObject.shipValidity.coordinates;
    shipClass(coordinatesArray);

    console.log(player1Gameboard);
    })

function shipClass(coordinatesArray) {
    coordinatesArray.forEach((coordinate) => {
        const id = `${coordinate[0]}-${coordinate[1]}`
        const coordinateSelector = document.getElementById(`${id}`);
        coordinateSelector.classList.add('ship');
    })
}

function generateDOMBoard(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        player1Board.appendChild(row);
        for (let j = 0; j < num; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('id', `${i}-${j}`);
            row.appendChild(column); 
        }
    }
}


import { Gameboard } from "./gameboard.js";
import './styles.css';
