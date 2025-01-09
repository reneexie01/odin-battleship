import { toolsManager } from "./tools.js";
export { Ship };

const Ship = (name, length, [row, column], direction) => {
    let hits = 0;
    let sunk = false;

    const hitCount = () => {
        return hits;
    }

    const hit = () => {
        if(!sunk) {
            hits++;
            isSunk();
        }
        return hits;
    }

    const isSunk = () => {
        if (hits === length) {
            sunk = true;
        }
    }

    const sunkStatus = () => {
        return sunk;
    }

    return {
        id: toolsManager.generateUniqueId(),
        name: name,
        length: length,
        hitCount,
        hit,
        isSunk,
        sunkStatus,
        coordinates: coordinates([row, column], length, direction),
        direction: direction,
    }
}

function coordinates(startingCoordinates, length, direction) {
    let coordinates = [];
    if (direction === 'down') {
        for (let i = 0; i < length; i++) {
            coordinates.push([(startingCoordinates[0] + i), startingCoordinates[1]])
        }
    } else if (direction === 'up') {
        for (let i = 0; i < length; i++) {
            coordinates.push([(startingCoordinates[0] - i), startingCoordinates[1]])
        }
    } else if (direction === 'right') {
        for (let i = 0; i < length; i++) {
            coordinates.push([startingCoordinates[0], (startingCoordinates[1] + i)])
        }
    } else if (direction === 'left') {
        for (let i = 0; i < length; i++) {
            coordinates.push([startingCoordinates[0], (startingCoordinates[1] - i)])
        }
    }
    return coordinates;
}


//TODO: Need to relook at the validation - prevent the user from creating the object if coordinates or direction are invalid?