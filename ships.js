const battleShip = (function() {
    const ship = (length, hitCount = 0, sunk = false, positionRow, positionColumn, direction) => {
        return {
            length: length,
            hitCount: hitCount,
            sunk: sunk,
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
            boardLocation: boardLocation(positionRow, positionColumn, length, direction) // TODO: Do we need an array for all coordinates like boardLocation?
        }
    }

    const positionValidation = (positionRow, positionColumn) => {
        if (positionRow < 0 || positionRow > 9) {
            return 'Row coordinate is outside of bounds'
        }
        if (positionColumn < 0 || positionColumn > 9) {
            return 'Column coordinate is outside of bounds'
        }
        return [positionRow, positionColumn]
    }

    const directionValidation = (direction) => {
        if (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down') {
            return direction
        }
        // TODO: Need to consider if the direction causes the ship to go out of bounds
        return 'Invalid direction received';
    }

    const boardLocation = (positionRow, positionColumn, length, direction) => { // How to handle validation of positions
        let boardCoordinates = [];
        const position = [positionRow, positionColumn]
        boardCoordinates.push(position)
        if (direction === 'left') {
            for (let i = 0; i < length; i++) {
                const newCoordinates = [position[0], (position[0] - i)]
                boardCoordinates.push(newCoordinates);
            }
        }
        return boardCoordinates;
    }

    return { ship }

})()

module.exports = { battleShip };