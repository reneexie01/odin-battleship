import "./styles.css";
import { Player } from "./player.js";

const player1Gameboard = document.querySelector('.player1-gameboard');
const player2Gameboard = document.querySelector('.player2-gameboard');

function createGameboard(grid, player) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell')
            cell.classList.add(`${player}`)
            cell.setAttribute('row', i);
            cell.setAttribute('column', j);
            grid.appendChild(cell);
        }
    }
}

function renderPlayerShips(player) {
    const gameboard = player.gameboard.array;
    gameboard.forEach((row) => {
        row.forEach((column) => {
            if (column.id) {
                const cellRow = column.coordinates[0];
                const cellColumn = column.coordinates[1];

                const occupiedCell = document.querySelector(`.${player.name}[row='${cellRow}'][column='${cellColumn}']`);
                occupiedCell.classList.add('occupied');
            }
        })
    })
    
}

const player1 = Player('player1');
const player2 = Player('player2');

createGameboard(player1Gameboard, 'player1');
createGameboard(player2Gameboard, 'player2');

renderPlayerShips(player1);
renderPlayerShips(player2);

