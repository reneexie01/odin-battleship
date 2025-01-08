import { toolsManager } from "./tools";
import { Gameboard } from "./gameboard";

export { Player };

const Player = () => {
    const player = {
        id: toolsManager.generateUniqueId(),
        gameboard: Gameboard(),
    }
    
    return player;
}