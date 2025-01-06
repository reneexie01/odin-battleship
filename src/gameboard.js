import { toolsManager } from "./tools";
import { Ship } from "./ships";

export { Gameboard };

const Gameboard = () => {
    const num = 10;
    const gameboard = { 
        id: toolsManager.generateUniqueId(),
        array: [],
        receiveAttack(coordinates) {
        const targetedCoordinates = gameboard.array[coordinates[0]][coordinates[1]];
            if (targetedCoordinates.id === null) {
                targetedCoordinates.shot = 'miss';
            } else if (targetedCoordinates.id !== null && targetedCoordinates.shot !== 'hit') {
                playerFleet.forEach((ship) => {
                    if (ship.id === targetedCoordinates.id) {
                        ship.hit();
                        console.log(ship)
                    }
                })
                targetedCoordinates.shot = 'hit';
            } else {
                return;
            }
        }
     }

    for (let i = 0; i < num; i++) {
        gameboard.array.push([]);
        for (let j = 0; j < num; j++) {
            gameboard.array[i].push({ cellId: toolsManager.generateUniqueId(), id: null, shot: null });
        }
    }

    const carrier = Ship(5, [9,9], "up");
    const battleship = Ship(4, [6,9], "down");
    const cruiser = Ship(3, [1,2], "down");
    const submarine = Ship(3, [3,9], "left");
    const destroyer = Ship(2, [8,4], "down");

    const playerFleet = [
        carrier,
        battleship,
        cruiser,
        submarine,
        destroyer
    ]

    addToBoard(gameboard, carrier);
    addToBoard(gameboard, battleship);
    addToBoard(gameboard, cruiser);
    addToBoard(gameboard, submarine);
    addToBoard(gameboard, destroyer);

//TODO: Place ships generated on the board and validate if the coordinates are within the bounds of the board.

    return gameboard;
}

function addToBoard(gameboard, ship) {
    const coordinates = ship.coordinates;
    const shipId = ship.id;
    let occupied = false;

    occupied = isOccupied(gameboard, ship, occupied);

    if (occupied) {
        console.log(`${ship.id} has not been added.`)
        return; // Does not add the ship to the board if any of the coordinates are occupied
    } else {
        coordinates.forEach((coordinate) => {
            let gameboardCoordinate = gameboard.array[coordinate[0]][coordinate[1]];
            gameboardCoordinate.id = shipId;
        })
    }
}

function isOccupied(gameboard, ship, occupied) {
    let isOccupied = occupied;
    const shipCoordinates = ship.coordinates;
    const shipLength = ship.length;
    let gameboardArray = [];
    let emptyArray = [];
    
    shipCoordinates.forEach((coordinate) => {
        const gameboardCoordinate = gameboard.array[coordinate[0]][coordinate[1]];
        gameboardArray.push(gameboardCoordinate.id);
    })

    for (let i = 0; i < shipLength; i++) {
        emptyArray.push(null);
    }

    if (JSON.stringify(gameboardArray) !== JSON.stringify(emptyArray)) {
        isOccupied = true;
    }
    return isOccupied;
}
