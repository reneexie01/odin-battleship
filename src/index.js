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

        // Human user pregame inputs //
        const carrierCoordinates = { coordinates: [Number(carrierRow.value), Number(carrierColumn.value)], direction: carrierDirection.value };
        const battleshipCoordinates = { coordinates: [Number(battleshipRow.value), Number(battleshipColumn.value)], direction: battleshipDirection.value };
        const cruiserCoordinates = { coordinates: [Number(cruiserRow.value), Number(cruiserColumn.value)], direction: cruiserDirection.value };
        const submarineCoordinates = { coordinates: [Number(submarineRow.value), Number(submarineColumn.value)], direction: submarineDirection.value };
        const destroyerCoordinates = { coordinates: [Number(destroyerRow.value), Number(destroyerColumn.value)], direction: destroyerDirection.value };

        const humanFleet = { carrier: carrierCoordinates, battleship: battleshipCoordinates, cruiser: cruiserCoordinates, submarine: submarineCoordinates, destroyer: destroyerCoordinates };

        let player2Duplicates = validateNotOverlapping(humanFleet.carrier, humanFleet.battleship, humanFleet.cruiser, humanFleet.submarine, humanFleet.destroyer);
        let player2WithinBoundaries = validateWithinBoundaries(humanFleet.carrier, humanFleet.battleship, humanFleet.cruiser, humanFleet.submarine, humanFleet.destroyer);

        // Computer pregame inputs
        const computerFleet = generateComputerCoordinates();

        if (!player2WithinBoundaries) {
            errorCoordinatesExceed.classList.remove('hidden');
            return;
        } else if (player2Duplicates.length !== 0) {
            errorCoordinatesOverlapping.classList.remove('hidden');
        } else {
            player1 = Player('player1', computerFleet.carrier, computerFleet.battleship, computerFleet.cruiser, computerFleet.submarine, computerFleet.destroyer); 
            player2 = Player('player2', humanFleet.carrier, humanFleet.battleship, humanFleet.cruiser, humanFleet.submarine, humanFleet.destroyer);

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

function generateComputerCoordinates() {
    let computerFleet = {};
    const computerCarrierCoordinates = { coordinates: [ComputerPlayer().randomNumberGenerator(0,9), ComputerPlayer().randomNumberGenerator(0,9)], direction: ComputerPlayer().randomDirectionGenerator() };
    const computerBattleshipCoordinates = { coordinates: [ComputerPlayer().randomNumberGenerator(0,9), ComputerPlayer().randomNumberGenerator(0,9)], direction: ComputerPlayer().randomDirectionGenerator() };
    const computerCruiserCoordinates = { coordinates: [ComputerPlayer().randomNumberGenerator(0,9), ComputerPlayer().randomNumberGenerator(0,9)], direction: ComputerPlayer().randomDirectionGenerator() };
    const computerSubmarineCoordinates = { coordinates: [ComputerPlayer().randomNumberGenerator(0,9), ComputerPlayer().randomNumberGenerator(0,9)], direction: ComputerPlayer().randomDirectionGenerator() };
    const computerDestroyerCoordinates = { coordinates: [ComputerPlayer().randomNumberGenerator(0,9), ComputerPlayer().randomNumberGenerator(0,9)], direction: ComputerPlayer().randomDirectionGenerator() };
    let computerDuplicates = validateNotOverlapping(computerCarrierCoordinates, computerBattleshipCoordinates, computerCruiserCoordinates, computerSubmarineCoordinates, computerDestroyerCoordinates);
    let computerWithinBoundaries = validateWithinBoundaries(computerCarrierCoordinates, computerBattleshipCoordinates, computerCruiserCoordinates, computerSubmarineCoordinates, computerDestroyerCoordinates);
    if (!computerWithinBoundaries || computerDuplicates.length !== 0) {
        return generateComputerCoordinates();
    } else {
        computerFleet = { carrier: computerCarrierCoordinates, battleship: computerBattleshipCoordinates, cruiser: computerCruiserCoordinates, submarine: computerSubmarineCoordinates, destroyer: computerDestroyerCoordinates }
    }
    return computerFleet;
}

function preCalculateCoordinates(carrier, battleship, cruiser, submarine, destroyer) {
    const preCalculatedCoordinates = [];
        preCalculatedCoordinates.push(coordinates(carrier.coordinates, 5, carrier.direction));
        preCalculatedCoordinates.push(coordinates(battleship.coordinates, 4, battleship.direction));
        preCalculatedCoordinates.push(coordinates(cruiser.coordinates, 4, cruiser.direction));
        preCalculatedCoordinates.push(coordinates(submarine.coordinates, 3, submarine.direction));
        preCalculatedCoordinates.push(coordinates(destroyer.coordinates, 2, destroyer.direction));
    return preCalculatedCoordinates;
}

// Validates that all coordinates that are requested are within the boundaries of the board
function validateWithinBoundaries(carrier, battleship, cruiser, submarine, destroyer) {
    let withinBoundaries = true;
    const preCalculatedCoordinates = preCalculateCoordinates(carrier, battleship, cruiser, submarine, destroyer)
    const flattenedArray = preCalculatedCoordinates.flat().flat();
    flattenedArray.forEach((item) => {
        if (item < 0 || item > 9) {
            withinBoundaries = false;
            return;
        }
    })
    return withinBoundaries;
}

// Validates that coordinates and directions inputted do not result in ships overlapping
function validateNotOverlapping(carrier, battleship, cruiser, submarine, destroyer) {
    const preCalculatedCoordinates = preCalculateCoordinates(carrier, battleship, cruiser, submarine, destroyer)
    const flattenedArray = preCalculatedCoordinates.flat();
    const newArray = [];
    flattenedArray.forEach((array) => newArray.push(JSON.stringify(array)))
    return newArray.filter((item, index) => newArray.indexOf(item) !== index);
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