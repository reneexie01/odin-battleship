export { DomManager };

const DomManager = () => {

    function createGameboard(gameboard, player) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell')
                cell.classList.add(`${player}`)
                cell.setAttribute('row', i);
                cell.setAttribute('column', j);
                gameboard.appendChild(cell);
            }
        }
    }
    
    /*
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
    */

    function renderBoardShots(player) {
        const gameboard = player.gameboard.array;
        gameboard.forEach((row) => {
            row.forEach((column) => {
                if (column.shot === 'hit') {
                    const cellRow = column.coordinates[0];
                    const cellColumn = column.coordinates[1];
    
                    const occupiedCell = document.querySelector(`.${player.name}[row='${cellRow}'][column='${cellColumn}']`);
                    occupiedCell.classList.add('hit');
                } else if (column.shot === 'miss') {
                    const cellRow = column.coordinates[0];
                    const cellColumn = column.coordinates[1];
    
                    const occupiedCell = document.querySelector(`.${player.name}[row='${cellRow}'][column='${cellColumn}']`);
                    occupiedCell.classList.add('miss');
                }
            })
        })
    }

    function attackShip(gameboard, player) {
      gameboard.addEventListener('click', (e) => {
        console.log(e.target)
        const row = e.target.getAttribute('row');
        const column = e.target.getAttribute('column');
        player.gameboard.receiveAttack([row, column]);
        console.log(player.gameboard.array);
        renderBoardShots(player);
      })
    }

    return { createGameboard, attackShip }
}

// TODO: Add a turn controller to add a forEach event listener to the relevant player's board
// Add an indicator of whose turn it is
// On click display a colour depending on the shot in the gameboard.array.shot 
// Remove the occupied class or CSS so the other player can't see your ship