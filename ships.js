const BattleShip = (function() {
    const ship = (length, positionRow, positionColumn, direction, hitCount = 0, sunk = false) => {
        return {
            length: length,
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
            position: positionValidation(positionRow, positionColumn),
            direction: directionValidation(direction),
            boardLocation: boardLocation(positionRow, positionColumn, length, direction), // TODO: Do we need an array for all coordinates like boardLocation?
            hitCount: hitCount,
            sunk: sunk,
        }
    }

    const positionValidation = (positionRow, positionColumn) => {
        let rowStatus = true;
        let columnStatus = true;
        if (positionRow < 0 || positionRow > 9) {
            rowStatus = false;
            return [['Row coordinate is outside of bounds'], [rowStatus], [columnStatus]]
        }
        if (positionColumn < 0 || positionColumn > 9) {
            columnStatus = false;
            return [['Column coordinate is outside of bounds'], [rowStatus], [columnStatus]]
        }
        return [[positionRow, positionColumn], [rowStatus], [columnStatus]]
    }

    const directionValidation = (direction) => {
        if (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down') {
            return direction
        }
        return 'Invalid direction received';
    }

    const coordinatesValidation = (coordinates, shipStatus) => {
        coordinates.forEach((coordinate) => {
            const validatedCoordinates = positionValidation(coordinate[0], coordinate[1])
            if (!validatedCoordinates[2][0]) {
                shipStatus = false;
            }
        })
        return shipStatus
    }

    const boardLocation = (positionRow, positionColumn, length, direction) => { // TODO: How to handle validation of new coordinates
        let shipStatus = true;
        let boardCoordinates = [];
        const position = positionValidation(positionRow, positionColumn)
        if (direction === 'left') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [position[0][0], (position[0][1] - i)]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'right') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [position[0][0], (position[0][1] + i)]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'up') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [(position[0][0] - i), position[0][1]]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'down') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [(position[0][0] + i), position[0][1]]
                boardCoordinates.push(newCoordinates);
            }
        }
        shipStatus = coordinatesValidation(boardCoordinates, shipStatus);
        if (!shipStatus) {
            return 'Battleship is outside of bounds';
        } else {
            return boardCoordinates;
        }
    }

    return { ship, positionValidation }

})()

export { BattleShip };