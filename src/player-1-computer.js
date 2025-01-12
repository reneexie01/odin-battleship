import { DomManager } from "./domManager.js";
export { ComputerPlayer };

const ComputerPlayer = () => {
    
    function computerAttackShip(player, dom) {
        const row = randomNumberGenerator(0,9)
        const column = randomNumberGenerator(0,9)
        console.log([row, column]);
        player.gameboard.receiveAttack([row, column]);
        dom.renderBoardShots(player);
        dom.turnSwitcher();
    }

    function randomNumberGenerator(max, min) {
        return Math.round(Math.random() * (max - min) + min, 0);
    }    

    return { computerAttackShip };
}