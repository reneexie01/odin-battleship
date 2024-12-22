const Gameboard = (function() {
    const generateGameboard = () => {
        const rows = 10;
        const columns = 10;
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = []
            for (let j = 0; j < columns; j++) {
                array[i][j] = { id: null, type: null, shot: null };
            }
        }
        return array;
    }

    const playerBoard = generateGameboard();

    const playerShips = {}

    const generateCarrier = (positionRow, positionColumn, direction) => { 
        const directionStatus = BattleShip.directionValidation(direction)
        if (!directionStatus) {
            return 'Invalid direction received' 
        }
    
        const carrier = BattleShip.ship(5, 'carrier', positionRow, positionColumn, direction)
        playerShips.carrierObject = carrier;

        const shipStatus = carrier.shipValidity.shipStatus;
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        }
        
        const carrierCoordinates = carrier.shipValidity.coordinates;
        let occupied = false;    
        occupied = isOccupied(carrierCoordinates, occupied)
        
        if (occupied) {
            return 'Coordinates are occupied';
        } else {
            const startingPosition = carrier.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 5; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: carrier.id, type: carrier.type, shot: null };
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 5; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: carrier.id, type: carrier.type, shot: null };
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 5; i++) {
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 5; i++) {
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };
                }
            }
        }
        return carrier;
    }

    const generateBattleship = (positionRow, positionColumn, direction) => {
        const directionStatus = BattleShip.directionValidation(direction)
        if (!directionStatus) {
            return 'Invalid direction received' 
        }
    
        const battleship = BattleShip.ship(4, 'battleship', positionRow, positionColumn, direction)
        playerShips.battleshipObject = battleship;

        const shipStatus = battleship.shipValidity.shipStatus;
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        }
        
        const battleshipCoordinates = battleship.shipValidity.coordinates;
        let occupied = false;    
        occupied = isOccupied(battleshipCoordinates, occupied)
        
        if (occupied) {
            return 'Coordinates are occupied';
        } else {
            const startingPosition = battleship.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 4; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: battleship.id, type: battleship.type, shot: null };
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 4; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: battleship.id, type: battleship.type, shot: null };
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 4; i++) {
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 4; i++) {
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };
                }
            }
        }
        return battleship;
    }

    const generateCruiser = (positionRow, positionColumn, direction) => {
        const directionStatus = BattleShip.directionValidation(direction)
        if (!directionStatus) {
            return 'Invalid direction received' 
        }
    
        const cruiser = BattleShip.ship(3, 'cruiser', positionRow, positionColumn, direction)
        playerShips.cruiserObject = cruiser;

        const shipStatus = cruiser.shipValidity.shipStatus;
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        }
        
        const cruiserCoordinates = cruiser.shipValidity.coordinates;
        let occupied = false;    
        occupied = isOccupied(cruiserCoordinates, occupied)
        
        if (occupied) {
            return 'Coordinates are occupied';
        } else {
            const startingPosition = cruiser.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: cruiser.id, type: cruiser.type, shot: null };
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: cruiser.id, type: cruiser.type, shot: null };
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;
                }
            }
        }
        return cruiser;
    }

    const generateSubmarine = (positionRow, positionColumn, direction) => {
        const directionStatus = BattleShip.directionValidation(direction)
        if (!directionStatus) {
            return 'Invalid direction received' 
        }
    
        const submarine = BattleShip.ship(3, 'submarine', positionRow, positionColumn, direction)
        playerShips.submarineObject = submarine;

        const shipStatus = submarine.shipValidity.shipStatus;
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        }
        
        const submarineCoordinates = submarine.shipValidity.coordinates;
        let occupied = false;    
        occupied = isOccupied(submarineCoordinates, occupied)
        
        if (occupied) {
            return 'Coordinates are occupied';
        } else {
            const startingPosition = submarine.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: submarine.id, type: submarine.type, shot: null };
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: submarine.id, type: submarine.type, shot: null };
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 3; i++) {
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };
                }
            }
        }
        return submarine;
    }

    const generateDestroyer = (positionRow, positionColumn, direction) => { 
        const directionStatus = BattleShip.directionValidation(direction)
        if (!directionStatus) {
            return 'Invalid direction received' 
        }
        
        const destroyer = BattleShip.ship(2, 'destroyer', positionRow, positionColumn, direction)
        playerShips.destroyerObject = destroyer;
        
        const shipStatus = destroyer.shipValidity.shipStatus;
        if (!shipStatus ) {
            return 'Battleship is outside of bounds';
        }
        
        const destroyerCoordinates = destroyer.shipValidity.coordinates;
        let occupied = false;    
        occupied = isOccupied(destroyerCoordinates, occupied)
        
        if (occupied) {
            return 'Coordinates are occupied';
        } else {
            const startingPosition = destroyer.position.coordinates;
            if (direction === 'left') {
                for (let i = 0; i < 2; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: destroyer.id, type: destroyer.type, shot: null }
                }
            } else if (direction === 'right') {
                for (let i = 0; i < 2; i++) {
                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: destroyer.id, type: destroyer.type, shot: null }
                }
            } else if (direction === 'up') {
                for (let i = 0; i < 2; i++) {
                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }
                }
            } else if (direction === 'down') {
                for (let i = 0; i < 2; i++) {
                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }
                }
            }
        }
        return destroyer;
    }

    const isOccupied = (coordinates, occupied) => {
        let gameboardCoordinates = [];
        coordinates.forEach((coordinate) => {
            gameboardCoordinates.push(playerBoard[coordinate[0]][coordinate[1]])
        })
        let blankCoodinates = [];
        for (let i = 0; i < gameboardCoordinates.length; i++) {
            blankCoodinates.push({ id: null, type: null, shot: null });
        }
        if (JSON.stringify(gameboardCoordinates) !== JSON.stringify(blankCoodinates)) {
            occupied = true;
        }
        return occupied;
    } 

    const receiveAttack = (positionRow, positionColumn) => {
        const boardLocation = playerBoard[positionRow][positionColumn];
        if (boardLocation.type !== null && boardLocation.shot !== 'hit') {
            boardLocation.shot = 'hit';
            playerShips[`${boardLocation.type}Object`].hitCount++;
            playerShips[`${boardLocation.type}Object`].isSunk();
            fleetStatus();
        } else if (boardLocation.type === null) {
            boardLocation.shot = 'miss';
        } else {
            return;
        }
    }

    const fleetStatus = () => {
        let status = 'inactive';
        Object.entries(playerShips).forEach((ship) => {
            if (!ship[1].sunk) {
                status = 'active';
            }
        })
        return status;
    } 

    return { playerBoard, playerShips, fleetStatus, generateCarrier, generateBattleship, generateCruiser, generateSubmarine, generateDestroyer, receiveAttack }

})()

export { Gameboard };
import { BattleShip } from "../ships.js";