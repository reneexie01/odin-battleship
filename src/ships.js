import { toolsManager } from "./tools";
export { Ship };

const Ship = (length, [row, column], direction) => {
    return {
        id: toolsManager.generateUniqueId(),
        length: length,
        hitCount: 0,
        sunk: false,
        hit() {
            if(!this.sunk) {
                this.hitCount++;
                this.isSunk();
            }
            return this;
        },
        isSunk() {
            if (this.hitCount === this.length) {
                this.sunk = true;
            }
        },
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