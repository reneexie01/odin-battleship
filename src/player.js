import { toolsManager } from "./tools.js";
import { Gameboard } from "./gameboard.js";

export { Player };

const Player = (name) => {
    const player = {
        id: toolsManager.generateUniqueId(),
        name: name,
        gameboard: Gameboard(),
    }
    
    return player;
}