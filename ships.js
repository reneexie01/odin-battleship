function ship(length, hitCount = 0, sunk = false) {
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
        }
    }
}

module.exports = { ship };