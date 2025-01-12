import "./styles.css";
import { Player } from "./player.js";
import { DomManager } from "./domManager.js";
import { ComputerPlayer } from "./player-1-computer.js";

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

function startGame() {
    startGameButton.addEventListener('click', () => {
        startGameButton.classList.add('hidden');
        playerTurnAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        switchPlayerButton.classList.remove('hidden');
        domManager.attackShip(player1Gameboard, player1);
        playerTurnText.innerHTML = `Player 2's turn (You)`;
    })
}

function switchPlayer() {
    switchPlayerButton.addEventListener('click', () => {
        const turn = domManager.getPlayerTurn();
        if (turn === 1) {
            player1Container.classList.add('hidden');
            player2Container.classList.remove('hidden');
            playerTurnText.innerHTML = `Player 1's turn (Computer)`
            ComputerPlayer().computerAttackShip(player2, domManager);
            winnerChecker();
            console.log(player1.gameboard.array)
            console.log(player2.gameboard.array)
        } else if (turn === 2) {
            player2Container.classList.add('hidden');
            player1Container.classList.remove('hidden');
            playerTurnText.innerHTML = `Player 2's turn (You)`
            domManager.attackShip(player1Gameboard, player1);
            winnerChecker(); 
            console.log(player1.gameboard.array)
            console.log(player2.gameboard.array)
        }
    });
} // TOFIX: If you click switch player multiple times, it allows you to hit the board multiple times

function winnerChecker() {
    if (!player1.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 1 (Computer) Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
    } else if (!player2.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 2 (You) Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
    } else {
        console.log('Both players active')
    }
}

startGame();
switchPlayer();