function gameboard() {
    const rows = 10;
    const columns = 10;
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = []
        for (let j = 0; j < rows; j++) {
            array[i][j] = null;
        }
    }
    return array;
}

module.exports = { gameboard }