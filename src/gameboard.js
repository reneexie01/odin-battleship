import { toolsManager } from "./tools.js";
import { Ship } from "./ships.js";

export { Gameboard };

const Gameboard = () => {
    const num = 10;
    const gameboard = { 
        id: toolsManager.generateUniqueId(),
        array: [],
        playerFleet: [],
        receiveAttack(coordinates) {
        const targetedCoordinates = gameboard.array[coordinates[0]][coordinates[1]];
            if (targetedCoordinates.id === null) {
                targetedCoordinates.shot = 'miss';
            } else if (targetedCoordinates.id !== null && targetedCoordinates.shot !== 'hit') {
                gameboard.playerFleet.forEach((ship) => {
                    if (ship.id === targetedCoordinates.id) {
                        ship.hit();
                    }
                })
                targetedCoordinates.shot = 'hit';
            } else {
                return;
            }
            fleetStatusChecker(); // Notes: Checks if all ships in the fleet are sunk
        },
        fleetStatus: true,
     }
     
    for (let i = 0; i < num; i++) {
        gameboard.array.push([]);
        for (let j = 0; j < num; j++) {
            gameboard.array[i].push({ cellId: toolsManager.generateUniqueId(), id: null, shot: null, coordinates: [i,j] });
        }
    }

    function fleetStatusChecker() {
        const playerFleet = gameboard.playerFleet;
        const carrierSunkStatus = playerFleet[0].sunkStatus();
        const battleshipSunkStatus = playerFleet[1].sunkStatus();
        const cruiserSunkStatus = playerFleet[2].sunkStatus();
        const submarineSunkStatus = playerFleet[3].sunkStatus();
        const destroyerSunkStatus = playerFleet[4].sunkStatus();

        if (
            carrierSunkStatus === true &&
            battleshipSunkStatus === true &&
            cruiserSunkStatus === true &&
            submarineSunkStatus === true &&
            destroyerSunkStatus === true
        ) {
            gameboard.fleetStatus = false; 
        }
    }

    const carrier = Ship('carrier', 5, [9,9], "up");
    const battleship = Ship('battleship', 4, [0,1], "right");
    const cruiser = Ship('cruiser', 3, [3,2], "down");
    const submarine = Ship('submarine', 3, [3,9], "left");
    const destroyer = Ship('destroyer', 2, [8,4], "down");

    gameboard.playerFleet = [
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
        console.log(`${ship.name} ${ship.id} has not been added.`)
        return; // Notes: Does not add the ship to the board if any of the coordinates are occupied
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