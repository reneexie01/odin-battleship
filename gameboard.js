const Gameboard = (function() {
    const generateGameboard = () => {
        const rows = 10;
        const columns = 10;
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = []
            for (let j = 0; j < columns; j++) {
                array[i][j] = null;
            }
        }
        return array;
    }

    const playerBoard = generateGameboard();
    const opponentBoard = generateGameboard();

    const generateCarrier = (positionRow, positionColumn, direction) => { // TODO: Push coordinates to the gameboard and check if coordinates exist
        return BattleShip.ship(5, positionRow, positionColumn, direction);
    }

    const generateBattleship = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(4, positionRow, positionColumn, direction);
    }

    const generateCruiser = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(3, positionRow, positionColumn, direction);
    }

    const generateSubmarine = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(3, positionRow, positionColumn, direction);
    }

    const generateDestroyer = (positionRow, positionColumn, direction) => {
        let shipStatus = true;
        const position = BattleShip.positionValidation(positionRow, positionColumn);
        if (direction === 'left') {
            for (let i = 0; i < 2; i++) {
                const newCoordinates = [position[0][0], (position[0][1] - i)]
                playerBoard[position[0][0]][position[0][1] - i] = newCoordinates;
            }
        }
        // TODO: Write the code that pushes positions into gameboard array, also needs to validate if the position has been taken already. Resuse board location code.
        return playerBoard;
    }

    return { generateGameboard, playerBoard, opponentBoard, generateCarrier, generateDestroyer }

})()

export { Gameboard };
import { BattleShip } from "./ships";