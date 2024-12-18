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

    const generateDestroyer = (positionRow, positionColumn, direction) => { // TODO: Also reduce the double up of code here. Also check direction validation.
        let shipStatus = true;
        let occupied = false;
        let directionStatus = true;

        shipStatus = BattleShip.shipValidity(positionRow, positionColumn, 2, direction, shipStatus).shipStatus;
        const coordinates = BattleShip.shipValidity(positionRow, positionColumn, 2, direction, shipStatus).coordinates;
        occupied = isOccupied(coordinates, occupied)
        directionStatus = BattleShip.directionValidation(direction);
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            if (direction === 'left') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position.coordinates[0], (position.coordinates[1] - i)]
                    playerBoard[position.coordinates[0]][position.coordinates[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position.coordinates[0], (position.coordinates[1] + i)]
                    playerBoard[position.coordinates[0]][position.coordinates[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position.coordinates[0] - i, (position.coordinates[1])]
                    playerBoard[position.coordinates[0] - i][position.coordinates[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 2; i++) {
                    const position = BattleShip.positionValidation(positionRow, positionColumn);
                    const newCoordinates = [position.coordinates[0] + i, (position.coordinates[1])]
                    playerBoard[position.coordinates[0] + i][position.coordinates[1]] = newCoordinates;
                }
            }
        }
        return shipStatus;
    }

    const isOccupied = (coordinates, occupied) => {
        let gameboardCoordinates = [];
        coordinates.forEach((coordinate) => {
            gameboardCoordinates.push(playerBoard[coordinate[0]][coordinate[1]]);
        })
        let blankCoodinates = [];
        for (let i = 0; i < gameboardCoordinates.length; i++) {
            blankCoodinates.push(null);
        }
        if (JSON.stringify(gameboardCoordinates) !== JSON.stringify(blankCoodinates)) {
            occupied = true;
        }
        return occupied;
    } // TODO: Need to add this into the generate function

    return { generateGameboard, playerBoard, opponentBoard, generateCarrier, generateDestroyer }

})()

export { Gameboard };
import { BattleShip } from "./ships";