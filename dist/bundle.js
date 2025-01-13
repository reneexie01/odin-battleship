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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.player1-gameboard, .player2-gameboard {\n    display: flex;\n    flex-wrap: wrap;\n    border: 1px solid black;\n    width: 300px;\n    height: 300px;\n}\n\n.cell {\n    border: 1px solid black;\n    width: 28px;\n    height: 28px;\n}\n\n.occupied {\n    background-color: green;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: gray;\n}\n\n.hidden {\n    display: none;\n}\n\n.player1-fleet {\n    display: flex;\n    margin-bottom: 10px;\n}\n\ninput {\n    max-width: 30px;\n}\n\n.coordinate-submission {\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n}\n\ninput {\n    max-width: 30px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DomManager: () => (/* binding */ DomManager)\n/* harmony export */ });\n\n\nconst DomManager = () => {\n\n    let playerTurn = 2;\n\n    function createGameboard(gameboard, player) {\n        for (let i = 0; i < 10; i++) {\n            for (let j = 0; j < 10; j++) {\n                const cell = document.createElement('div');\n                cell.classList.add('cell')\n                cell.classList.add(`${player}`)\n                cell.setAttribute('row', i);\n                cell.setAttribute('column', j);\n                gameboard.appendChild(cell);\n            }\n        }\n    }\n\n    // TODO: Add option to drag and drop ships\n\n    function shipGenerator(num, el, type) {\n        for (let i = 0; i < num; i++) {\n            const cell = document.createElement('div');\n            cell.classList.add('cell')\n            cell.classList.add(`${type}`)\n            el.appendChild(cell);\n        }\n    }\n\n    function renderBoardShots(player) {\n        const gameboard = player.gameboard.array;\n        gameboard.forEach((row) => {\n            row.forEach((column) => {\n                if (column.shot === 'hit') {\n                    const cellRow = column.coordinates[0];\n                    const cellColumn = column.coordinates[1];\n    \n                    const occupiedCell = document.querySelector(`.${player.name}[row='${cellRow}'][column='${cellColumn}']`);\n                    occupiedCell.classList.add('hit');\n                } else if (column.shot === 'miss') {\n                    const cellRow = column.coordinates[0];\n                    const cellColumn = column.coordinates[1];\n    \n                    const occupiedCell = document.querySelector(`.${player.name}[row='${cellRow}'][column='${cellColumn}']`);\n                    occupiedCell.classList.add('miss');\n                } else {\n                    return;\n                }\n            })\n        })\n    }\n\n    function attackShip(gameboard, player) {\n\n        function attackHandler(e) {\n            const row = e.target.getAttribute('row');\n            const column = e.target.getAttribute('column');\n            if (player.gameboard.array[row][column].shot) {\n                console.log('Coordinates have already been shot, try again.');\n                return;\n            } else {\n                player.gameboard.receiveAttack([row, column]);\n                renderBoardShots(player);\n                turnSwitcher();\n                gameboard.removeEventListener('click', attackHandler);\n            }\n        }\n\n        gameboard.addEventListener('click', attackHandler);\n    }\n\n    function turnSwitcher() {\n        playerTurn = playerTurn === 1 ? 2 : 1;\n    }\n\n    function getPlayerTurn() {\n        return playerTurn;\n    }\n\n    return { createGameboard, renderBoardShots, attackShip, getPlayerTurn, turnSwitcher, shipGenerator }\n}\n\n\n//# sourceURL=webpack://odin-battleship/./src/domManager.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n\n\n\n\n\nconst Gameboard = (carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates) => {\n    const num = 10;\n    const gameboard = { \n        id: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n        array: [],\n        playerFleet: [],\n        receiveAttack(coordinates) {\n        const targetedCoordinates = gameboard.array[coordinates[0]][coordinates[1]];\n            if (targetedCoordinates.id === null) {\n                targetedCoordinates.shot = 'miss';\n            } else if (targetedCoordinates.id !== null && targetedCoordinates.shot !== 'hit') {\n                gameboard.playerFleet.forEach((ship) => {\n                    if (ship.id === targetedCoordinates.id) {\n                        ship.hit();\n                    }\n                })\n                targetedCoordinates.shot = 'hit';\n            } else {\n                return;\n            }\n            fleetStatusChecker(); // Notes: Checks if all ships in the fleet are sunk\n        },\n        fleetStatus: true,\n        coordinates: { // TODO: Eventually take these coordinates and input them into the Ship function for each ship. Index0 is row index1 is column index2 is direction.\n            carrier: [carrierCoordinates[0], carrierCoordinates[1], carrierCoordinates[2]],\n            battleship: [battleshipCoordinates[0], battleshipCoordinates[1], battleshipCoordinates[2]],\n            cruiser: [cruiserCoordinates[0], cruiserCoordinates[1], cruiserCoordinates[2]],\n            submarine: [submarineCoordinates[0], submarineCoordinates[1], submarineCoordinates[2]],\n            destroyer: [destroyerCoordinates[0], destroyerCoordinates[1], destroyerCoordinates[2]],\n        }\n     }\n     \n    for (let i = 0; i < num; i++) {\n        gameboard.array.push([]);\n        for (let j = 0; j < num; j++) {\n            gameboard.array[i].push({ cellId: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(), id: null, shot: null, coordinates: [i,j] });\n        }\n    }\n\n    function fleetStatusChecker() {\n        const playerFleet = gameboard.playerFleet;\n        const carrierSunkStatus = playerFleet[0].sunkStatus();\n        const battleshipSunkStatus = playerFleet[1].sunkStatus();\n        const cruiserSunkStatus = playerFleet[2].sunkStatus();\n        const submarineSunkStatus = playerFleet[3].sunkStatus();\n        const destroyerSunkStatus = playerFleet[4].sunkStatus();\n\n        if (\n            carrierSunkStatus === true &&\n            battleshipSunkStatus === true &&\n            cruiserSunkStatus === true &&\n            submarineSunkStatus === true &&\n            destroyerSunkStatus === true\n        ) {\n            gameboard.fleetStatus = false; \n        }\n    }\n\n    const carrier = (0,_ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('carrier', 5, [carrierCoordinates[0], carrierCoordinates[1]], carrierCoordinates[2]);\n    const battleship = (0,_ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('battleship', 4, [battleshipCoordinates[0], battleshipCoordinates[1]], battleshipCoordinates[2]);\n    const cruiser = (0,_ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('cruiser', 3, [cruiserCoordinates[0], cruiserCoordinates[1]], cruiserCoordinates[2]);\n    const submarine = (0,_ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('submarine', 3, [submarineCoordinates[0], submarineCoordinates[1]], submarineCoordinates[2]);\n    const destroyer = (0,_ships_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('destroyer', 2, [destroyerCoordinates[0], destroyerCoordinates[1]], destroyerCoordinates[2]);\n\n    gameboard.playerFleet = [\n        carrier,\n        battleship,\n        cruiser,\n        submarine,\n        destroyer\n    ]\n\n    addToBoard(gameboard, carrier);\n    addToBoard(gameboard, battleship);\n    addToBoard(gameboard, cruiser);\n    addToBoard(gameboard, submarine);\n    addToBoard(gameboard, destroyer);\n\n//TODO: Place ships generated on the board and validate if the coordinates are within the bounds of the board.\n\n    return gameboard;\n}\n\nfunction addToBoard(gameboard, ship) {\n    const coordinates = ship.coordinates;\n    const shipId = ship.id;\n    let occupied = false;\n\n    occupied = isOccupied(gameboard, ship, occupied);\n\n    if (occupied) {\n        console.log(`${ship.name} ${ship.id} has not been added.`)\n        return; // Notes: Does not add the ship to the board if any of the coordinates are occupied\n    } else {\n        coordinates.forEach((coordinate) => {\n            let gameboardCoordinate = gameboard.array[coordinate[0]][coordinate[1]];\n            gameboardCoordinate.id = shipId;\n        })\n    }\n}\n\nfunction isOccupied(gameboard, ship, occupied) {\n    let isOccupied = occupied;\n    const shipCoordinates = ship.coordinates;\n    const shipLength = ship.length;\n    let gameboardArray = [];\n    let emptyArray = [];\n    \n    shipCoordinates.forEach((coordinate) => {\n        const gameboardCoordinate = gameboard.array[coordinate[0]][coordinate[1]];\n        gameboardArray.push(gameboardCoordinate.id);\n    })\n\n    for (let i = 0; i < shipLength; i++) {\n        emptyArray.push(null);\n    }\n\n    if (JSON.stringify(gameboardArray) !== JSON.stringify(emptyArray)) {\n        isOccupied = true;\n    }\n    return isOccupied;\n}\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n/* harmony import */ var _player_1_computer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-1-computer.js */ \"./src/player-1-computer.js\");\n\n\n\n\n\nconst domManager = (0,_domManager_js__WEBPACK_IMPORTED_MODULE_2__.DomManager)();\n\nconst startGameButton = document.querySelector('.start-game');\nconst playerTurnAnnouncement = document.querySelector('.player-turn-announcement');\nconst playerTurnText = document.querySelector('.player-turn');\nconst winningAnnouncement = document.querySelector('.winning-announcement');\n\nconst player1Container = document.querySelector('.player1-container');\nconst player2Container = document.querySelector('.player2-container');\n\nconst player1Gameboard = document.querySelector('.player1-gameboard');\nconst player2Gameboard = document.querySelector('.player2-gameboard');\n\n// Carrier starting elements\nconst carrierElement = document.querySelector('.player1-carrier');\nconst carrierRow = document.querySelector('#carrier-row');\nconst carrierColumn = document.querySelector('#carrier-column');\nconst carrierDirection = document.querySelector('#carrier-direction');\n\n// Battleship starting elements\nconst battleshipElement = document.querySelector('.player1-battleship');\nconst battleshipRow = document.querySelector('#battleship-row');\nconst battleshipColumn = document.querySelector('#battleship-column');\nconst battleshipDirection = document.querySelector('#battleship-direction');\n\n// Cruiser starting elements\nconst cruiserElement = document.querySelector('.player1-cruiser');\nconst cruiserRow = document.querySelector('#cruiser-row');\nconst cruiserColumn = document.querySelector('#cruiser-column');\nconst cruiserDirection = document.querySelector('#cruiser-direction');\n\n// Submarine starting elements\nconst submarineElement = document.querySelector('.player1-submarine');\nconst submarineRow = document.querySelector('#submarine-row');\nconst submarineColumn = document.querySelector('#submarine-column');\nconst submarineDirection = document.querySelector('#submarine-direction');\n\n// Destroyer starting elements\nconst destroyerElement = document.querySelector('.player1-destroyer');\nconst destroyerRow = document.querySelector('#destroyer-row');\nconst destroyerColumn = document.querySelector('#destroyer-column');\nconst destroyerDirection = document.querySelector('#destroyer-direction');\n\nconst errorCoordinatesExceed = document.querySelector('.submission-error-coordinates-exceed');\nconst errorCoordinatesOverlapping = document.querySelector('.submission-error-coordinates-overlapping');\nconst switchPlayerButton = document.querySelector('.switch-player');\n\nlet player1;\nlet player2;\n\n// Generating player1 ships DOM (when initially placing ships)\ndomManager.shipGenerator(5, carrierElement, 'carrier');\ndomManager.shipGenerator(4, battleshipElement, 'battleship');\ndomManager.shipGenerator(3, cruiserElement, 'cruiser');\ndomManager.shipGenerator(3, submarineElement, 'submarine');\ndomManager.shipGenerator(2, destroyerElement, 'destroyer');\n\n// TODO: Generating DOM gameboard for ship placement\n\n// Generating gameboards on DOM\ndomManager.createGameboard(player1Gameboard, 'player1');\ndomManager.createGameboard(player2Gameboard, 'player2');\n\nfunction startGame() {\n    startGameButton.addEventListener('click', () => {\n\n        // TODO: Validation for two ships in the same coordinates/overlapping\n        const carrierCoordinates = [carrierRow.value, carrierColumn.value, carrierDirection.value];\n        const battleshipCoordinates = [battleshipRow.value, battleshipColumn.value, battleshipDirection.value];\n        const cruiserCoordinates = [cruiserRow.value, cruiserColumn.value, cruiserDirection.value];\n        const submarineCoordinates = [submarineRow.value, submarineColumn.value, submarineDirection.value];\n        const destroyerCoordinates = [destroyerRow.value, destroyerColumn.value, destroyerDirection.value];\n\n        if (\n            carrierCoordinates[0] < 0 || carrierCoordinates[0] > 9 ||\n            carrierCoordinates[1] < 0 || carrierCoordinates[1] > 9 ||\n            battleshipCoordinates[0] < 0 || battleshipCoordinates[0] > 9 ||\n            battleshipCoordinates[1] < 0 || battleshipCoordinates[1] > 9 ||\n            cruiserCoordinates[0] < 0 || cruiserCoordinates[0] > 9 ||\n            cruiserCoordinates[1] < 0 || cruiserCoordinates[1] > 9 ||\n            submarineCoordinates[0] < 0 || submarineCoordinates[0] > 9 ||\n            submarineCoordinates[1] < 0 || submarineCoordinates[1] > 9 ||\n            destroyerCoordinates[0] < 0 || destroyerCoordinates[0] > 9 ||\n            destroyerCoordinates[1] < 0 || destroyerCoordinates[1] > 9\n        ) {\n            errorCoordinatesExceed.classList.remove('hidden');\n            return;\n        } else {\n            player1 = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('player1', carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates);\n            player2 = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('player2', carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates); // TODO: Need to generate this randomly for computer\n            console.log(player1);\n\n            errorCoordinatesExceed.classList.add('hidden');\n    \n            startGameButton.classList.add('hidden');\n            playerTurnAnnouncement.classList.remove('hidden');\n            player1Container.classList.remove('hidden');\n            switchPlayerButton.classList.remove('hidden');\n            domManager.attackShip(player1Gameboard, player1);\n            playerTurnText.innerHTML = `Player 2's turn (You)`;\n        }\n    })\n}\n\nfunction switchPlayer() {\n    switchPlayerButton.addEventListener('click', () => {\n        const turn = domManager.getPlayerTurn();\n        if (turn === 1) {\n            player1Container.classList.add('hidden');\n            player2Container.classList.remove('hidden');\n            playerTurnText.innerHTML = `Player 1's turn (Computer)`\n            ;(0,_player_1_computer_js__WEBPACK_IMPORTED_MODULE_3__.ComputerPlayer)().computerAttackShip(player2, domManager);\n            winnerChecker();\n            console.log(player1.gameboard.array)\n            console.log(player2.gameboard.array)\n        } else if (turn === 2) {\n            player2Container.classList.add('hidden');\n            player1Container.classList.remove('hidden');\n            playerTurnText.innerHTML = `Player 2's turn (You)`\n            domManager.attackShip(player1Gameboard, player1);\n            winnerChecker(); \n            console.log(player1.gameboard.array)\n            console.log(player2.gameboard.array)\n        }\n    });\n} // TOFIX: If you click switch player multiple times, it allows you to hit the board multiple times maybe use { once }.\n\nfunction winnerChecker() {\n    if (!player1.gameboard.fleetStatus) {\n        winningAnnouncement.innerHTML = 'Player 1 (Computer) Lost';\n        winningAnnouncement.classList.remove('hidden');\n        player1Container.classList.remove('hidden');\n        player2Container.classList.remove('hidden');\n        switchPlayerButton.classList.add('hidden');\n    } else if (!player2.gameboard.fleetStatus) {\n        winningAnnouncement.innerHTML = 'Player 2 (You) Lost';\n        winningAnnouncement.classList.remove('hidden');\n        player1Container.classList.remove('hidden');\n        player2Container.classList.remove('hidden');\n        switchPlayerButton.classList.add('hidden');\n    } else {\n        console.log('Both players active')\n    }\n}\n\nstartGame();\nswitchPlayer();\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player-1-computer.js":
/*!**********************************!*\
  !*** ./src/player-1-computer.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer)\n/* harmony export */ });\n\n\nconst ComputerPlayer = () => {\n    \n    function computerAttackShip(player, dom) {\n        let row = randomNumberGenerator(0,9)\n        let column = randomNumberGenerator(0,9)\n        if (player.gameboard.array[row][column].shot) {\n            console.log('Coordinates have already been shot... generating new numbers');\n            computerAttackShip(player, dom);\n        } else {\n            player.gameboard.receiveAttack([row, column]);\n            dom.renderBoardShots(player);\n            dom.turnSwitcher();\n        }\n    }\n\n    function randomNumberGenerator(max, min) {\n        return Math.round(Math.random() * (max - min) + min, 0);\n    }\n\n    return { computerAttackShip };\n}\n\n//# sourceURL=webpack://odin-battleship/./src/player-1-computer.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\n\n\n\nconst Player = (name, carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates) => {\n    const player = {\n        id: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n        name: name,\n        gameboard: (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(carrierCoordinates, battleshipCoordinates, cruiserCoordinates, submarineCoordinates, destroyerCoordinates),\n    }\n    \n    return player;\n}\n\n//# sourceURL=webpack://odin-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\n\n\n\nconst Ship = (name, length, [row, column], direction) => {\n    let hits = 0;\n    let sunk = false;\n\n    const hitCount = () => {\n        return hits;\n    }\n\n    const hit = () => {\n        if(!sunk) {\n            hits++;\n            isSunk();\n        }\n        return hits;\n    }\n\n    const isSunk = () => {\n        if (hits === length) {\n            sunk = true;\n        }\n    }\n\n    const sunkStatus = () => {\n        return sunk;\n    }\n\n    return {\n        id: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n        name: name,\n        length: length,\n        hitCount,\n        hit,\n        isSunk,\n        sunkStatus,\n        coordinates: coordinates([row, column], length, direction),\n        direction: direction,\n    }\n}\n\nfunction coordinates(startingCoordinates, length, direction) {\n    let coordinates = [];\n    if (direction === 'down') {\n        for (let i = 0; i < length; i++) {\n            coordinates.push([(startingCoordinates[0] + i), startingCoordinates[1]])\n        }\n    } else if (direction === 'up') {\n        for (let i = 0; i < length; i++) {\n            coordinates.push([(startingCoordinates[0] - i), startingCoordinates[1]])\n        }\n    } else if (direction === 'right') {\n        for (let i = 0; i < length; i++) {\n            coordinates.push([startingCoordinates[0], (startingCoordinates[1] + i)])\n        }\n    } else if (direction === 'left') {\n        for (let i = 0; i < length; i++) {\n            coordinates.push([startingCoordinates[0], (startingCoordinates[1] - i)])\n        }\n    }\n    return coordinates;\n}\n\n\n//TODO: Need to relook at the validation - prevent the user from creating the object if coordinates or direction are invalid?\n\n//# sourceURL=webpack://odin-battleship/./src/ships.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toolsManager: () => (/* binding */ toolsManager)\n/* harmony export */ });\n\n\nconst toolsManager = (function ToolsManager() {\n  const generateUniqueId = () => {\n    return \"_\" + Math.random().toString(36).substr(2, 9);\n  };\n\n  return { generateUniqueId };\n})();\n\n//# sourceURL=webpack://odin-battleship/./src/tools.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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