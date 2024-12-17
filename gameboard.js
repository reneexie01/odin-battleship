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

    const generateCarrier = (positionRow, positionColumn, direction) => { 
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

    const generateDestroyer = (positionRow, positionColumn, direction) => { // TODO: Validate if the position has been taken already and if new coordinates are valid.
        let shipStatus = true;
        shipStatus = BattleShip.shipValidity(positionRow, positionColumn, 2, direction, shipStatus)
        if (!shipStatus) {
            return 'Battleship is outside of bounds';
        } else {
            if (direction === 'left') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position[0][0], (position[0][1] - i)]
                    playerBoard[position[0][0]][position[0][1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position[0][0], (position[0][1] + i)]
                    playerBoard[position[0][0]][position[0][1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position[0][0] - i, (position[0][1])]
                    playerBoard[position[0][0] - i][position[0][1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position[0][0] + i, (position[0][1])]
                    playerBoard[position[0][0] + i][position[0][1]] = newCoordinates;
                }
            }
        }
        return shipStatus;
    }

    return { generateGameboard, playerBoard, opponentBoard, generateCarrier, generateDestroyer }

})()

export { Gameboard };
import { BattleShip } from "./ships";