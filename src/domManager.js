export { DomManager };

const DomManager = () => {

    let playerTurn = 2;

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

    // TODO: Add option to drag and drop ships

    function shipGenerator(num, el, type) {
        for (let i = 0; i < num; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell')
            cell.classList.add(`${type}`)
            el.appendChild(cell);
        }
    }

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
                } else {
                    return;
                }
            })
        })
    }

    function attackShip(gameboard, player) {

        function attackHandler(e) {
            const row = e.target.getAttribute('row');
            const column = e.target.getAttribute('column');
            if (player.gameboard.array[row][column].shot) {
                console.log('Coordinates have already been shot, try again.');
                return;
            } else {
                player.gameboard.receiveAttack([row, column]);
                renderBoardShots(player);
                turnSwitcher();
                gameboard.removeEventListener('click', attackHandler);
            }
        }

        gameboard.addEventListener('click', attackHandler);
    }

    function turnSwitcher() {
        playerTurn = playerTurn === 1 ? 2 : 1;
    }

    function getPlayerTurn() {
        return playerTurn;
    }

    return { createGameboard, renderBoardShots, attackShip, getPlayerTurn, turnSwitcher, shipGenerator }
}
