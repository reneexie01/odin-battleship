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
        let occupied = false;
        const carrier = BattleShip.ship(5, positionRow, positionColumn, direction)

        let shipStatus = carrier.shipValidity.shipStatus;
        const carrierCoordinates = carrier.shipValidity.coordinates;
        occupied = isOccupied(carrierCoordinates, occupied)
        const directionStatus = carrier.direction;
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            const startingPosition = carrier.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 5; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] - i)]
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 5; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] + i)]
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 5; i++) {
                    const newCoordinates = [startingPosition[0] - i, (startingPosition[1])]
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 5; i++) {
                    const newCoordinates = [startingPosition[0] + i, (startingPosition[1])]
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = newCoordinates;
                }
            }
        }
        return carrier;
    }

    const generateBattleship = (positionRow, positionColumn, direction) => {
        let occupied = false;
        const battleship = BattleShip.ship(4, positionRow, positionColumn, direction)

        let shipStatus = battleship.shipValidity.shipStatus;
        const battleshipCoordinates = battleship.shipValidity.coordinates;
        occupied = isOccupied(battleshipCoordinates, occupied)
        const directionStatus = battleship.direction;
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            const startingPosition = battleship.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 4; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] - i)]
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 4; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] + i)]
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 4; i++) {
                    const newCoordinates = [startingPosition[0] - i, (startingPosition[1])]
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 4; i++) {
                    const newCoordinates = [startingPosition[0] + i, (startingPosition[1])]
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = newCoordinates;
                }
            }
        }
        return battleship;
    }

    const generateCruiser = (positionRow, positionColumn, direction) => {
        let occupied = false;
        const cruiser = BattleShip.ship(3, positionRow, positionColumn, direction)

        let shipStatus = cruiser.shipValidity.shipStatus;
        const cruiserCoordinates = cruiser.shipValidity.coordinates;
        occupied = isOccupied(cruiserCoordinates, occupied)
        const directionStatus = cruiser.direction;
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            const startingPosition = cruiser.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] - i)]
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] + i)]
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0] - i, (startingPosition[1])]
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0] + i, (startingPosition[1])]
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = newCoordinates;
                }
            }
        }
        return cruiser;
    }

    const generateSubmarine = (positionRow, positionColumn, direction) => {
        let occupied = false;
        const submarine = BattleShip.ship(3, positionRow, positionColumn, direction)

        let shipStatus = submarine.shipValidity.shipStatus;
        const submarineCoordinates = submarine.shipValidity.coordinates;
        occupied = isOccupied(submarineCoordinates, occupied)
        const directionStatus = submarine.direction;
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            const startingPosition = submarine.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] - i)]
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] + i)]
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0] - i, (startingPosition[1])]
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 3; i++) {
                    const newCoordinates = [startingPosition[0] + i, (startingPosition[1])]
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = newCoordinates;
                }
            }
        }
        return submarine;
    }

    const generateDestroyer = (positionRow, positionColumn, direction) => { // TODO: Reduce the double up of code here.
        let occupied = false;
        const destroyer = BattleShip.ship(2, positionRow, positionColumn, direction)

        let shipStatus = destroyer.shipValidity.shipStatus;
        const destroyerCoordinates = destroyer.shipValidity.coordinates;
        occupied = isOccupied(destroyerCoordinates, occupied)
        const directionStatus = destroyer.direction;
        
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        } else if (occupied) {
            return 'Coordinates are occupied';
        } else if (!directionStatus) {
            return 'Invalid direction received'
        } else {
            const startingPosition = destroyer.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 2; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] - i)]
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = newCoordinates;
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 2; i++) {
                    const newCoordinates = [startingPosition[0], (startingPosition[1] + i)]
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = newCoordinates;
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 2; i++) {
                    const newCoordinates = [startingPosition[0] - i, (startingPosition[1])]
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = newCoordinates;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 2; i++) {
                    const newCoordinates = [startingPosition[0] + i, (startingPosition[1])]
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = newCoordinates;
                }
            }
        }
        console.log(destroyer)
        return destroyer;
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
    } 

    return { generateGameboard, playerBoard, opponentBoard, generateCarrier, generateBattleship, generateCruiser, generateSubmarine, generateDestroyer }

})()

export { Gameboard };
import { BattleShip } from "./ships";