import "./styles.css";
import { Player } from "./player.js";
import { DomManager } from "./domManager.js";

const domManager = DomManager();

const startGameButton = document.querySelector('.start-game');

const player1Container = document.querySelector('.player1-container');
const player2Container = document.querySelector('.player2-container');

const player1Gameboard = document.querySelector('.player1-gameboard');
const player2Gameboard = document.querySelector('.player2-gameboard');

const switchPlayerButton = document.querySelector('.switch-player');

const player1 = Player('player1');
const player2 = Player('player2');

domManager.createGameboard(player1Gameboard, 'player1');
domManager.createGameboard(player2Gameboard, 'player2');

// domManager.renderPlayerShips(player1);
// domManager.renderPlayerShips(player2);

// domManager.attackShip(player1Gameboard, player1);
// domManager.attackShip(player2Gameboard, player2);

function startGame() {
    startGameButton.addEventListener('click', () => {
        player1Container.classList.remove('hidden');
        switchPlayerButton.classList.remove('hidden');
        domManager.attackShip(player1Gameboard, player1);
    })
}

function switchPlayer() {
    switchPlayerButton.addEventListener('click', () => {
        const turn = domManager.getPlayerTurn();
        if (turn === 1) {
            player1Container.classList.add('hidden');
            player2Container.classList.remove('hidden');
            domManager.attackShip(player2Gameboard, player2);
        } else if (turn === 2) {
            player2Container.classList.add('hidden');
            player1Container.classList.remove('hidden');
            domManager.attackShip(player1Gameboard, player1);
        }
    });
}

startGame();
switchPlayer();

// TODO: Create a turn controllers that removes the event listener from the board after the user makes a click