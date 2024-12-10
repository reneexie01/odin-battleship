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
        return 'Invalid direction received';
    }

    return { ship }

})()

module.exports = { battleShip };