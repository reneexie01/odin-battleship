import './styles.css';

const player1Gameboard = document.querySelector('.player1-gameboard');

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

createGameboard(player1Gameboard, 'player1')