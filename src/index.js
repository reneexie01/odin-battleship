import "./styles.css";
import { Player } from "./player.js";
import { DomManager } from "./domManager.js";
import { ComputerPlayer } from "./player-1-computer.js";
import { coordinates } from "./ships.js";

const domManager = DomManager();

const startGameButton = document.querySelector('.start-game');
const playerTurnAnnouncement = document.querySelector('.player-turn-announcement');
const playerTurnText = document.querySelector('.player-turn');
const winningAnnouncement = document.querySelector('.winning-announcement');

const player1Container = document.querySelector('.player1-container');
const player2Container = document.querySelector('.player2-container');

const player1Gameboard = document.querySelector('.player1-gameboard');
const player2Gameboard = document.querySelector('.player2-gameboard');

// Carrier starting elements
const carrierElement = document.querySelector('.player1-carrier');
const carrierRow = document.querySelector('#carrier-row');
const carrierColumn = document.querySelector('#carrier-column');
const carrierDirection = document.querySelector('#carrier-direction');

// Battleship starting elements
const battleshipElement = document.querySelector('.player1-battleship');
const battleshipRow = document.querySelector('#battleship-row');
const battleshipColumn = document.querySelector('#battleship-column');
const battleshipDirection = document.querySelector('#battleship-direction');

// Cruiser starting elements
const cruiserElement = document.querySelector('.player1-cruiser');
const cruiserRow = document.querySelector('#cruiser-row');
const cruiserColumn = document.querySelector('#cruiser-column');
const cruiserDirection = document.querySelector('#cruiser-direction');

// Submarine starting elements
const submarineElement = document.querySelector('.player1-submarine');
const submarineRow = document.querySelector('#submarine-row');
const submarineColumn = document.querySelector('#submarine-column');
const submarineDirection = document.querySelector('#submarine-direction');

// Destroyer starting elements
const destroyerElement = document.querySelector('.player1-destroyer');
const destroyerRow = document.querySelector('#destroyer-row');
const destroyerColumn = document.querySelector('#destroyer-column');
const destroyerDirection = document.querySelector('#destroyer-direction');

const errorCoordinatesExceed = document.querySelector('.submission-error-coordinates-exceed');
const errorCoordinatesOverlapping = document.querySelector('.submission-error-coordinates-overlapping');
const switchPlayerButton = document.querySelector('.switch-player');

const pregamePlacement = document.querySelector('.pre-game-container');

let player1;
let player2;

// Generating player1 ships DOM (when initially placing ships)
domManager.shipGenerator(5, carrierElement, 'carrier');
domManager.shipGenerator(4, battleshipElement, 'battleship');
domManager.shipGenerator(3, cruiserElement, 'cruiser');
domManager.shipGenerator(3, submarineElement, 'submarine');
domManager.shipGenerator(2, destroyerElement, 'destroyer');

// TODO: Generating DOM gameboard for ship placement

// Generating gameboards on DOM
domManager.createGameboard(player1Gameboard, 'player1');
domManager.createGameboard(player2Gameboard, 'player2');

function startGame() {
    startGameButton.addEventListener('click', () => {

        const carrierCoordinates = { coordinates: [Number(carrierRow.value), Number(carrierColumn.value)], direction: carrierDirection.value };
        const battleshipCoordinates = { coordinates: [Number(battleshipRow.value), Number(battleshipColumn.value)], direction: battleshipDirection.value };
        const cruiserCoordinates = { coordinates: [Number(cruiserRow.value), Number(cruiserColumn.value)], direction: cruiserDirection.value };
        const submarineCoordinates = { coordinates: [Number(submarineRow.value), Number(submarineColumn.value)], direction: submarineDirection.value };
        const destroyerCoordinates = { coordinates: [Number(destroyerRow.value), Number(destroyerColumn.value)], direction: destroyerDirection.value };

        // Validates that coordinates and directions inputted do not result in ships overlapping
        const preCalculatedCoordinates = [];
        preCalculatedCoordinates.push(coordinates(carrierCoordinates.coordinates, 5, carrierCoordinates.direction));
        preCalculatedCoordinates.push(coordinates(battleshipCoordinates.coordinates, 4, battleshipCoordinates.direction));
        preCalculatedCoordinates.push(coordinates(cruiserCoordinates.coordinates, 4, cruiserCoordinates.direction));
        preCalculatedCoordinates.push(coordinates(submarineCoordinates.coordinates, 3, submarineCoordinates.direction));
        preCalculatedCoordinates.push(coordinates(destroyerCoordinates.coordinates, 2, destroyerCoordinates.direction));
        
        const flattenedArray = preCalculatedCoordinates.flat();
        const newArray = [];
        flattenedArray.forEach((array) => newArray.push(JSON.stringify(array)))
        const duplicates = newArray.filter((item, index) => newArray.indexOf(item) !== index);

        if ( // Validates all coordinates are within border boundaries
            carrierCoordinates.coordinates[0] < 0 || carrierCoordinates.coordinates[0] > 9 ||
            carrierCoordinates.coordinates[1] < 0 || carrierCoordinates.coordinates[1] > 9 ||
            battleshipCoordinates.coordinates[0] < 0 || battleshipCoordinates.coordinates[0] > 9 ||
            battleshipCoordinates.coordinates[1] < 0 || battleshipCoordinates.coordinates[1] > 9 ||
            cruiserCoordinates.coordinates[0] < 0 || cruiserCoordinates.coordinates[0] > 9 ||
            cruiserCoordinates.coordinates[1] < 0 || cruiserCoordinates.coordinates[1] > 9 ||
            submarineCoordinates.coordinates[0] < 0 || submarineCoordinates.coordinates[0] > 9 ||
            submarineCoordinates.coordinates[1] < 0 || submarineCoordinates.coordinates[1] > 9 ||
            destroyerCoordinates.coordinates[0] < 0 || destroyerCoordinates.coordinates[0] > 9 ||
            destroyerCoordinates.coordinates[1] < 0 || destroyerCoordinates.coordinates[1] > 9
        ) {
            errorCoordinatesExceed.classList.remove('hidden');
            return;
        } else if (duplicates.length !== 0) {
            errorCoordinatesOverlapping.classList.remove('hidden');
        } else {

            player1 = Player('player1', carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates);
            player2 = Player('player2', carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates); // TODO: Need to generate this randomly for computer
            console.log(player1);

            pregamePlacement.classList.add('hidden');
    
            startGameButton.classList.add('hidden');
            playerTurnAnnouncement.classList.remove('hidden');
            player1Container.classList.remove('hidden');
            switchPlayerButton.classList.remove('hidden');
            domManager.attackShip(player1Gameboard, player1);
            playerTurnText.innerHTML = `Player 2's turn (You)`;
        }
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
} // TOFIX: If you click switch player multiple times, it allows you to hit the board multiple times maybe use { once }.

function winnerChecker() {
    if (!player1.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 1 (Computer) Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
        switchPlayerButton.classList.add('hidden');
    } else if (!player2.gameboard.fleetStatus) {
        winningAnnouncement.innerHTML = 'Player 2 (You) Lost';
        winningAnnouncement.classList.remove('hidden');
        player1Container.classList.remove('hidden');
        player2Container.classList.remove('hidden');
        switchPlayerButton.classList.add('hidden');
    } else {
        console.log('Both players active')
    }
}

startGame();
switchPlayer();