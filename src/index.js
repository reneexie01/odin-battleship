import "./styles.css";
import { Player } from "./player.js";
import { DomManager } from "./domManager.js";

const player1Gameboard = document.querySelector('.player1-gameboard');
const player2Gameboard = document.querySelector('.player2-gameboard');

const player1 = Player('player1');
const player2 = Player('player2');

console.log(player1)
console.log(player1Gameboard)

DomManager().createGameboard(player1Gameboard, 'player1');
DomManager().createGameboard(player2Gameboard, 'player2');

// DomManager().renderPlayerShips(player1);
// DomManager().renderPlayerShips(player2);

DomManager().attackShip(player1Gameboard, player1);
DomManager().attackShip(player2Gameboard, player2);
