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

    const shipValidity = (positionRow, positionColumn, length, direction, shipStatus) => {
        let boardCoordinates = [];
        const startPosition = [positionRow, positionColumn];
        for (let i = 0; i < length; i++) {
            let newCoordinates;
            if (direction === 'left') {
                newCoordinates = [startPosition[0], startPosition[1] - i];
            } else if (direction === 'right') {
                newCoordinates = [startPosition[0], startPosition[1] + i];
            } else if (direction === 'up') {
                newCoordinates = [startPosition[0] - i, startPosition[1]];
            } else if (direction === 'down') {
                newCoordinates = [startPosition[0] + i, startPosition[1]];
            }
            boardCoordinates.push(newCoordinates);
    
            const validatedCoordinates = positionValidation(newCoordinates[0], newCoordinates[1]);
            if (!validatedCoordinates.rowStatus || !validatedCoordinates.columnStatus) {
                shipStatus = false;
            }
        }
        return { shipStatus: shipStatus, coordinates: boardCoordinates };
    };
    

    return { ship, positionValidation, directionValidation, shipValidity }

})()

export { BattleShip };