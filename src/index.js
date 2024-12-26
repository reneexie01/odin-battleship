const player1 = document.querySelector('.player1');
const player1Board = document.querySelector('.player1-board');

generateBoard(10);

// Carrier
const carrierSubmit = document.querySelector('.carrier-submit');
const carrierCoordinateRow = document.querySelector('.player1-carrier-row');
const carrierCoordinateColumn = document.querySelector('.player1-carrier-column');

carrierSubmit.addEventListener('click', () => {
    const startingRow = parseInt(carrierCoordinateRow.value);
    const startingColumn = parseInt(carrierCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    const coordinatesArray = Gameboard.generateCarrier(startingRow, startingColumn, direction).shipValidity.coordinates;
    shipClass(coordinatesArray);

    })

// Battleship
const battleshipSubmit = document.querySelector('.battleship-submit');
const battleshipCoordinateRow = document.querySelector('.player1-battleship-row');
const battleshipCoordinateColumn = document.querySelector('.player1-battleship-column');

battleshipSubmit.addEventListener('click', () => {
    const startingRow = parseInt(battleshipCoordinateRow.value);
    const startingColumn = parseInt(battleshipCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    const coordinatesArray = Gameboard.generateBattleship(startingRow, startingColumn, direction).shipValidity.coordinates;
    shipClass(coordinatesArray);

    })
    
// Cruiser
const cruiserSubmit = document.querySelector('.cruiser-submit');
const cruiserCoordinateRow = document.querySelector('.player1-cruiser-row');
const cruiserCoordinateColumn = document.querySelector('.player1-cruiser-column');

cruiserSubmit.addEventListener('click', () => {
    const startingRow = parseInt(cruiserCoordinateRow.value);
    const startingColumn = parseInt(cruiserCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    const coordinatesArray = Gameboard.generateCruiser(startingRow, startingColumn, direction).shipValidity.coordinates;
    shipClass(coordinatesArray);

    })

// Submarine
const submarineSubmit = document.querySelector('.submarine-submit');
const submarineCoordinateRow = document.querySelector('.player1-submarine-row');
const submarineCoordinateColumn = document.querySelector('.player1-submarine-column');

submarineSubmit.addEventListener('click', () => {
    const startingRow = parseInt(submarineCoordinateRow.value);
    const startingColumn = parseInt(submarineCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    const coordinatesArray = Gameboard.generateSubmarine(startingRow, startingColumn, direction).shipValidity.coordinates;
    shipClass(coordinatesArray);

    })

// Destroyer
const destroyerSubmit = document.querySelector('.destroyer-submit');
const destroyerCoordinateRow = document.querySelector('.player1-destroyer-row');
const destroyerCoordinateColumn = document.querySelector('.player1-destroyer-column');

destroyerSubmit.addEventListener('click', () => {
    const startingRow = parseInt(destroyerCoordinateRow.value);
    const startingColumn = parseInt(destroyerCoordinateColumn.value);
    const direction = document.querySelector('#directions').value;

    const coordinatesArray = Gameboard.generateDestroyer(startingRow, startingColumn, direction).shipValidity.coordinates;
    shipClass(coordinatesArray);

    })

function shipClass(coordinatesArray) {
    coordinatesArray.forEach((coordinate) => {
        const id = `${coordinate[0]}-${coordinate[1]}`
        const coordinateSelector = document.getElementById(`${id}`);
        coordinateSelector.classList.add('ship');
    })
}

function generateBoard(num) {
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
