const BattleShip = (function() {
    const ship = (length, positionRow, positionColumn, direction, hitCount = 0, sunk = false, shipStatus = true) => {
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
            shipValidity: shipValidity(positionRow, positionColumn, length, direction, shipStatus), // TODO: Do we need an array for all coordinates like boardLocation?
            hitCount: hitCount,
            sunk: sunk,
        }
    }

    const positionValidation = (positionRow, positionColumn) => {
        let rowStatus = true;
        let columnStatus = true;
        if (positionRow < 0 || positionRow > 9) {
            rowStatus = false;
            return { coordinates: ['Row coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }
        }
        if (positionColumn < 0 || positionColumn > 9) {
            columnStatus = false;
            return { coordinates: ['Column coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }
        }
        return { coordinates: [positionRow, positionColumn], rowStatus: rowStatus, columnStatus: columnStatus }
    }

    const directionValidation = (direction) => {
        if (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down') {
            return true;
        }
        return false;
    }

    const coordinatesValidation = (coordinates, shipStatus) => {
        coordinates.forEach((coordinate) => {
            const validatedCoordinates = positionValidation(coordinate[0], coordinate[1])
            if (!validatedCoordinates.rowStatus || !validatedCoordinates.columnStatus) {
                shipStatus = false;
            }
        })
        return shipStatus;
    }

    const shipValidity = (positionRow, positionColumn, length, direction, shipStatus) => {
        let boardCoordinates = [];
        const position = positionValidation(positionRow, positionColumn)
        if (direction === 'left') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [position.coordinates[0], (position.coordinates[1] - i)]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'right') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [position.coordinates[0], (position.coordinates[1] + i)]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'up') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [(position.coordinates[0] - i), position.coordinates[1]]
                boardCoordinates.push(newCoordinates);
            }
        } else if (direction === 'down') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [(position.coordinates[0] + i), position.coordinates[1]]
                boardCoordinates.push(newCoordinates);
            }
        }
        shipStatus = coordinatesValidation(boardCoordinates, shipStatus)
        return { shipStatus: shipStatus, coordinates: boardCoordinates }
        /*
        if (!shipStatus) {
            return 'Battleship is outside of bounds';
        } else {
            return boardCoordinates;
        }
        */
    }

    return { ship, positionValidation, directionValidation, shipValidity }

})()

export { BattleShip };