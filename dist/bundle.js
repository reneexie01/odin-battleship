/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ships.js":
/*!******************!*\
  !*** ./ships.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BattleShip: () => (/* binding */ BattleShip)\n/* harmony export */ });\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.js */ \"./tools.js\");\nconst BattleShip = (function() {\n    const ship = (length, type, positionRow, positionColumn, direction, hitCount = 0, sunk = false, shipStatus = true) => {\n        return {\n            id: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n            type: type,\n            length: length,\n            hit() {\n                if(!this.sunk) {\n                    this.hitCount++;\n                    this.isSunk();\n                }\n                return this;\n            },\n            isSunk() {\n                if (this.hitCount === this.length) {\n                    this.sunk = true;\n                }\n            },\n            position: positionValidation(positionRow, positionColumn),\n            direction: directionValidation(direction),\n            shipValidity: shipValidity(positionRow, positionColumn, length, direction, shipStatus), // TODO: Do we need an array for all coordinates like boardLocation?\n            hitCount: hitCount,\n            sunk: sunk,\n        }\n    }\n\n    const positionValidation = (positionRow, positionColumn) => {\n        let rowStatus = true;\n        let columnStatus = true;\n        if (positionRow < 0 || positionRow > 9) {\n            rowStatus = false;\n            return { coordinates: ['Row coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }\n        }\n        if (positionColumn < 0 || positionColumn > 9) {\n            columnStatus = false;\n            return { coordinates: ['Column coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }\n        }\n        return { coordinates: [positionRow, positionColumn], rowStatus: rowStatus, columnStatus: columnStatus }\n    }\n\n    const directionValidation = (direction) => {\n        if (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down') {\n            return true;\n        }\n        return false;\n    }\n\n    const shipValidity = (positionRow, positionColumn, length, direction, shipStatus) => {\n        let boardCoordinates = [];\n        const startPosition = [positionRow, positionColumn];\n        for (let i = 0; i < length; i++) {\n            let newCoordinates;\n            if (direction === 'left') {\n                newCoordinates = [startPosition[0], startPosition[1] - i];\n            } else if (direction === 'right') {\n                newCoordinates = [startPosition[0], startPosition[1] + i];\n            } else if (direction === 'up') {\n                newCoordinates = [startPosition[0] - i, startPosition[1]];\n            } else if (direction === 'down') {\n                newCoordinates = [startPosition[0] + i, startPosition[1]];\n            }\n            boardCoordinates.push(newCoordinates);\n    \n            const validatedCoordinates = positionValidation(newCoordinates[0], newCoordinates[1]);\n            if (!validatedCoordinates.rowStatus || !validatedCoordinates.columnStatus) {\n                shipStatus = false;\n            }\n        }\n        return { shipStatus: shipStatus, coordinates: boardCoordinates };\n    };\n    \n\n    return { ship, positionValidation, directionValidation, shipValidity }\n\n})()\n\n\n;\n\n//# sourceURL=webpack://odin-battleship/./ships.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ships.js */ \"./ships.js\");\nconst Gameboard = (function() {\n    const generateGameboard = () => {\n        const rows = 10;\n        const columns = 10;\n        let array = [];\n        for (let i = 0; i < rows; i++) {\n            array[i] = []\n            for (let j = 0; j < columns; j++) {\n                array[i][j] = { id: null, type: null, shot: null };\n            }\n        }\n        return array;\n    }\n\n    const playerBoard = generateGameboard();\n\n    const playerShips = {}\n\n    const generateCarrier = (positionRow, positionColumn, direction) => { \n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const carrier = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(5, 'carrier', positionRow, positionColumn, direction)\n        playerShips.carrierObject = carrier;\n\n        const shipStatus = carrier.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const carrierCoordinates = carrier.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(carrierCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = carrier.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            }\n        }\n        return carrier;\n    }\n\n    const generateBattleship = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const battleship = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(4, 'battleship', positionRow, positionColumn, direction)\n        playerShips.battleshipObject = battleship;\n\n        const shipStatus = battleship.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const battleshipCoordinates = battleship.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(battleshipCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = battleship.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            }\n        }\n        return battleship;\n    }\n\n    const generateCruiser = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const cruiser = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(3, 'cruiser', positionRow, positionColumn, direction)\n        playerShips.cruiserObject = cruiser;\n\n        const shipStatus = cruiser.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const cruiserCoordinates = cruiser.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(cruiserCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = cruiser.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: cruiser.id, type: cruiser.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: cruiser.id, type: cruiser.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;\n                }\n            }\n        }\n        return cruiser;\n    }\n\n    const generateSubmarine = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const submarine = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(3, 'submarine', positionRow, positionColumn, direction)\n        playerShips.submarineObject = submarine;\n\n        const shipStatus = submarine.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const submarineCoordinates = submarine.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(submarineCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = submarine.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            }\n        }\n        return submarine;\n    }\n\n    const generateDestroyer = (positionRow, positionColumn, direction) => { \n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n        \n        const destroyer = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(2, 'destroyer', positionRow, positionColumn, direction)\n        playerShips.destroyerObject = destroyer;\n        \n        const shipStatus = destroyer.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const destroyerCoordinates = destroyer.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(destroyerCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = destroyer.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            }\n        }\n        return destroyer;\n    }\n\n    const isOccupied = (coordinates, occupied) => {\n        let gameboardCoordinates = [];\n        coordinates.forEach((coordinate) => {\n            gameboardCoordinates.push(playerBoard[coordinate[0]][coordinate[1]])\n        })\n        let blankCoodinates = [];\n        for (let i = 0; i < gameboardCoordinates.length; i++) {\n            blankCoodinates.push({ id: null, type: null, shot: null });\n        }\n        if (JSON.stringify(gameboardCoordinates) !== JSON.stringify(blankCoodinates)) {\n            occupied = true;\n        }\n        return occupied;\n    } \n\n    const receiveAttack = (positionRow, positionColumn) => {\n        const boardLocation = playerBoard[positionRow][positionColumn];\n        if (boardLocation.type !== null && boardLocation.shot !== 'hit') {\n            boardLocation.shot = 'hit';\n            playerShips[`${boardLocation.type}Object`].hitCount++;\n            playerShips[`${boardLocation.type}Object`].isSunk();\n            fleetStatus();\n        } else if (boardLocation.type === null) {\n            boardLocation.shot = 'miss';\n        } else {\n            return;\n        }\n    }\n\n    const fleetStatus = () => {\n        let status = 'inactive';\n        Object.entries(playerShips).forEach((ship) => {\n            if (!ship[1].sunk) {\n                status = 'active';\n            }\n        })\n        return status;\n    } \n\n    return { playerBoard, playerShips, fleetStatus, generateCarrier, generateBattleship, generateCruiser, generateSubmarine, generateDestroyer, receiveAttack }\n\n})()\n\n\n;\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nconsole.log('hello world!')\n\n;\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./tools.js":
/*!******************!*\
  !*** ./tools.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toolsManager: () => (/* binding */ toolsManager)\n/* harmony export */ });\n\n\nconst toolsManager = (function ToolsManager() {\n  const generateUniqueId = () => {\n    return \"_\" + Math.random().toString(36).substr(2, 9);\n  };\n\n  return { generateUniqueId };\n})();\n\n//# sourceURL=webpack://odin-battleship/./tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;