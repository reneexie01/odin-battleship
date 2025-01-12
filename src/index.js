import "./styles.css";
import { Player } from "./player.js";
import { DomManager } from "./domManager.js";

const domManager = DomManager();

const startGameButton = document.querySelector('.start-game');
const playerTurnAnnouncement = document.querySelector('.player-turn-announcement');
const playerTurnText = document.querySelector('.player-turn');
const winningAnnouncement = document.querySelector('.winning-announcement');

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
        startGameButton.classList.add('hidden');
        playerTurnAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        switchPlayerButton.classList.remove('hidden');
        domManager.attackShip(player1Gameboard, player1);
        playerTurnText.innerHTML = `Player 2's turn`;
    })
}

function switchPlayer() {
    switchPlayerButton.addEventListener('click', () => {
        const turn = domManager.getPlayerTurn();
        if (turn === 1) {
            player1Container.classList.add('hidden');
            player2Container.classList.remove('hidden');
            playerTurnText.innerHTML = `Player 1's turn`
            domManager.attackShip(player2Gameboard, player2);
            winnerChecker();
        } else if (turn === 2) {
            player2Container.classList.add('hidden');
            player1Container.classList.remove('hidden');
            playerTurnText.innerHTML = `Player 2's turn`
            domManager.attackShip(player1Gameboard, player1);
            winnerChecker(); 
        }
    });
}

function winnerChecker() {
    if (!player1.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 1 Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
    } else if (!player2.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 2 Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
    } else {
        console.log('Both players active')
    }
}

startGame();
switchPlayer();

// TODO: Create a turn controllers that removes the event listener from the board after the user makes a click