import { toolsManager } from "./tools.js";
import { Gameboard } from "./gameboard.js";

export { Player };

const Player = (name, carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates) => {
    const player = {
        id: toolsManager.generateUniqueId(),
        name: name,
        gameboard: Gameboard(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates),
    }
    
    return player;
}