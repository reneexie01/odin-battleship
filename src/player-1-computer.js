export { ComputerPlayer };

const ComputerPlayer = () => {
    
    function computerAttackShip(player, dom) {
        let row = randomNumberGenerator(0,9)
        let column = randomNumberGenerator(0,9)
        if (player.gameboard.array[row][column].shot) {
            console.log('Coordinates have already been shot... generating new numbers');
            computerAttackShip(player, dom);
        } else {
            player.gameboard.receiveAttack([row, column]);
            dom.renderBoardShots(player);
            dom.turnSwitcher();
        }
    }

    function randomNumberGenerator(max, min) {
        return Math.round(Math.random() * (max - min) + min, 0);
    }

    function randomDirectionGenerator() {
        const direction = Math.round(Math.random() * (0 - 3) + 3, 0);
        if (direction === 0) {
            return 'left';
        } else if (direction === 1) {
            return 'right'
        } else if (direction === 2) {
            return 'up'
        } else if (direction === 3) {
            return 'down'
        }
    }

    return { computerAttackShip, randomNumberGenerator, randomDirectionGenerator };
}