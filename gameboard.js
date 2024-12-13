const Gameboard = (function() {
    const generateGameboard = () => {
        const rows = 10;
        const columns = 10;
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = []
            for (let j = 0; j < columns; j++) {
                array[i][j] = null;
            }
        }
        return array;
    }

    const generateCarrier = (positionRow, positionColumn, direction) => { // TODO: Push coordinates to the gameboard and check if coordinates exist
        return BattleShip.ship(5, positionRow, positionColumn, direction);
    }

    const generateBattleship = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(4, positionRow, positionColumn, direction);
    }

    const generateCruiser = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(3, positionRow, positionColumn, direction);
    }

    const generateSubmarine = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(3, positionRow, positionColumn, direction);
    }

    const generateDestroyer = (positionRow, positionColumn, direction) => {
        return BattleShip.ship(2, positionRow, positionColumn, direction);
    }

    return { generateGameboard, generateCarrier }

})()

export { Gameboard };
import { BattleShip } from "./ships";