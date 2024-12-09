const ships = (function() {

    const battleShips = (length, hitCount = 0, sunk = false) => {
        const battleShip = {
            length: length,
            hitCount: hitCount,
            sunk: sunk,
            hit() {
                if(!this.sunk) {
                    this.hitCount++;
                    this.isSunk();
                }
                return battleShip;
            },
            isSunk() {
                if (this.hitCount === this.length) {
                    this.sunk = true;
                } else {
                    this.sunk = false;
                }
            }
        }
        return battleShip;
    }

    return { battleShips }
})();

module.exports = { ships };