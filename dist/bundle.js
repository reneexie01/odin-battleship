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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    font-family: 'Times New Roman', Times, serif;\n    color: red;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\nconst Gameboard = (function() {\n    const generateGameboard = () => {\n        const rows = 10;\n        const columns = 10;\n        let array = [];\n        for (let i = 0; i < rows; i++) {\n            array[i] = []\n            for (let j = 0; j < columns; j++) {\n                array[i][j] = { id: null, type: null, shot: null };\n            }\n        }\n        return array;\n    }\n\n    const playerBoard = generateGameboard();\n\n    const playerShips = {}\n\n    const generateCarrier = (positionRow, positionColumn, direction) => { \n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const carrier = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(5, 'carrier', positionRow, positionColumn, direction)\n        playerShips.carrierObject = carrier;\n\n        const shipStatus = carrier.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const carrierCoordinates = carrier.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(carrierCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = carrier.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 5; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: carrier.id, type: carrier.type, shot: null };\n                }\n            }\n        }\n        return carrier;\n    }\n\n    const generateBattleship = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const battleship = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(4, 'battleship', positionRow, positionColumn, direction)\n        playerShips.battleshipObject = battleship;\n\n        const shipStatus = battleship.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const battleshipCoordinates = battleship.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(battleshipCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = battleship.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 4; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: battleship.id, type: battleship.type, shot: null };\n                }\n            }\n        }\n        return battleship;\n    }\n\n    const generateCruiser = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const cruiser = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(3, 'cruiser', positionRow, positionColumn, direction)\n        playerShips.cruiserObject = cruiser;\n\n        const shipStatus = cruiser.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const cruiserCoordinates = cruiser.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(cruiserCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = cruiser.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: cruiser.id, type: cruiser.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: cruiser.id, type: cruiser.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: cruiser.id, type: cruiser.type, shot: null };;\n                }\n            }\n        }\n        return cruiser;\n    }\n\n    const generateSubmarine = (positionRow, positionColumn, direction) => {\n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n    \n        const submarine = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(3, 'submarine', positionRow, positionColumn, direction)\n        playerShips.submarineObject = submarine;\n\n        const shipStatus = submarine.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const submarineCoordinates = submarine.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(submarineCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = submarine.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 3; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: submarine.id, type: submarine.type, shot: null };\n                }\n            }\n        }\n        return submarine;\n    }\n\n    const generateDestroyer = (positionRow, positionColumn, direction) => { \n        const directionStatus = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.directionValidation(direction)\n        if (!directionStatus) {\n            return 'Invalid direction received' \n        }\n        \n        const destroyer = _ships_js__WEBPACK_IMPORTED_MODULE_0__.BattleShip.ship(2, 'destroyer', positionRow, positionColumn, direction)\n        playerShips.destroyerObject = destroyer;\n        \n        const shipStatus = destroyer.shipValidity.shipStatus;\n        if (!shipStatus ) {\n            return 'Battleship is outside of bounds';\n        }\n        \n        const destroyerCoordinates = destroyer.shipValidity.coordinates;\n        let occupied = false;    \n        occupied = isOccupied(destroyerCoordinates, occupied)\n        \n        if (occupied) {\n            return 'Coordinates are occupied';\n        } else {\n            const startingPosition = destroyer.position.coordinates;\n            if (direction === 'left') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] - i] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'right') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0]][startingPosition[1] + i] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'up') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0] - i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            } else if (direction === 'down') {\n                for (let i = 0; i < 2; i++) {\n                    playerBoard[startingPosition[0] + i][startingPosition[1]] = { id: destroyer.id, type: destroyer.type, shot: null }\n                }\n            }\n        }\n        return destroyer;\n    }\n\n    const isOccupied = (coordinates, occupied) => {\n        let gameboardCoordinates = [];\n        coordinates.forEach((coordinate) => {\n            gameboardCoordinates.push(playerBoard[coordinate[0]][coordinate[1]])\n        })\n        let blankCoodinates = [];\n        for (let i = 0; i < gameboardCoordinates.length; i++) {\n            blankCoodinates.push({ id: null, type: null, shot: null });\n        }\n        if (JSON.stringify(gameboardCoordinates) !== JSON.stringify(blankCoodinates)) {\n            occupied = true;\n        }\n        return occupied;\n    } \n\n    const receiveAttack = (positionRow, positionColumn) => {\n        const boardLocation = playerBoard[positionRow][positionColumn];\n        if (boardLocation.type !== null && boardLocation.shot !== 'hit') {\n            boardLocation.shot = 'hit';\n            playerShips[`${boardLocation.type}Object`].hitCount++;\n            playerShips[`${boardLocation.type}Object`].isSunk();\n            fleetStatus();\n        } else if (boardLocation.type === null) {\n            boardLocation.shot = 'miss';\n        } else {\n            return;\n        }\n    }\n\n    const fleetStatus = () => {\n        let status = 'inactive';\n        Object.entries(playerShips).forEach((ship) => {\n            if (!ship[1].sunk) {\n                status = 'active';\n            }\n        })\n        return status;\n    } \n\n    return { playerBoard, playerShips, fleetStatus, generateCarrier, generateBattleship, generateCruiser, generateSubmarine, generateDestroyer, receiveAttack }\n\n})()\n\n\n;\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nconsole.log('hello world!')\n\n;\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BattleShip: () => (/* binding */ BattleShip)\n/* harmony export */ });\n/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.js */ \"./src/tools.js\");\nconst BattleShip = (function() {\n    const ship = (length, type, positionRow, positionColumn, direction, hitCount = 0, sunk = false, shipStatus = true) => {\n        return {\n            id: _tools_js__WEBPACK_IMPORTED_MODULE_0__.toolsManager.generateUniqueId(),\n            type: type,\n            length: length,\n            hit() {\n                if(!this.sunk) {\n                    this.hitCount++;\n                    this.isSunk();\n                }\n                return this;\n            },\n            isSunk() {\n                if (this.hitCount === this.length) {\n                    this.sunk = true;\n                }\n            },\n            position: positionValidation(positionRow, positionColumn),\n            direction: directionValidation(direction),\n            shipValidity: shipValidity(positionRow, positionColumn, length, direction, shipStatus), // TODO: Do we need an array for all coordinates like boardLocation?\n            hitCount: hitCount,\n            sunk: sunk,\n        }\n    }\n\n    const positionValidation = (positionRow, positionColumn) => {\n        let rowStatus = true;\n        let columnStatus = true;\n        if (positionRow < 0 || positionRow > 9) {\n            rowStatus = false;\n            return { coordinates: ['Row coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }\n        }\n        if (positionColumn < 0 || positionColumn > 9) {\n            columnStatus = false;\n            return { coordinates: ['Column coordinate is outside of bounds'], rowStatus: rowStatus, columnStatus: columnStatus }\n        }\n        return { coordinates: [positionRow, positionColumn], rowStatus: rowStatus, columnStatus: columnStatus }\n    }\n\n    const directionValidation = (direction) => {\n        if (direction === 'left' || direction === 'right' || direction === 'up' || direction === 'down') {\n            return true;\n        }\n        return false;\n    }\n\n    const shipValidity = (positionRow, positionColumn, length, direction, shipStatus) => {\n        let boardCoordinates = [];\n        const startPosition = [positionRow, positionColumn];\n        for (let i = 0; i < length; i++) {\n            let newCoordinates;\n            if (direction === 'left') {\n                newCoordinates = [startPosition[0], startPosition[1] - i];\n            } else if (direction === 'right') {\n                newCoordinates = [startPosition[0], startPosition[1] + i];\n            } else if (direction === 'up') {\n                newCoordinates = [startPosition[0] - i, startPosition[1]];\n            } else if (direction === 'down') {\n                newCoordinates = [startPosition[0] + i, startPosition[1]];\n            }\n            boardCoordinates.push(newCoordinates);\n    \n            const validatedCoordinates = positionValidation(newCoordinates[0], newCoordinates[1]);\n            if (!validatedCoordinates.rowStatus || !validatedCoordinates.columnStatus) {\n                shipStatus = false;\n            }\n        }\n        return { shipStatus: shipStatus, coordinates: boardCoordinates };\n    };\n    \n\n    return { ship, positionValidation, directionValidation, shipValidity }\n\n})()\n\n\n;\n\n//# sourceURL=webpack://odin-battleship/./src/ships.js?");

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