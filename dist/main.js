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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/gameboard */ \"./src/module/gameboard.js\");\n/* harmony import */ var _module_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/player */ \"./src/module/player.js\");\n/* harmony import */ var _module_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/ship */ \"./src/module/ship.js\");\n\n\n\n\nfunction rgbToHex(col) {\n  if (col.charAt(0) == \"r\") {\n    col = col.replace(\"rgb(\", \"\").replace(\")\", \"\").split(\",\");\n    var r = parseInt(col[0], 10).toString(16);\n    var g = parseInt(col[1], 10).toString(16);\n    var b = parseInt(col[2], 10).toString(16);\n    r = r.length == 1 ? \"0\" + r : r;\n    g = g.length == 1 ? \"0\" + g : g;\n    b = b.length == 1 ? \"0\" + b : b;\n    var colHex = \"#\" + r + g + b;\n    return colHex;\n  }\n}\n\nconst NewGame = () => {\n  const gameboard = (0,_module_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const opponentGameboard = (0,_module_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const player1 = (0,_module_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const player2 = (0,_module_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const shipyardData = [\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"cruiser\", 1),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"submarine\", 2),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"destroyer\", 3),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"battleship\", 4),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"carrier\", 5),\n  ];\n  const opShipyardData = [\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"cruiser\", 1),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"submarine\", 2),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"destroyer\", 3),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"battleship\", 4),\n    (0,_module_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"carrier\", 5),\n  ];\n  const shipyard = document.querySelector(\".shipyard\");\n  const ships = document.querySelectorAll(\".shipyard .ship\");\n  const blocks = document.querySelectorAll(\".board .block\");\n\n  let nbrShips = 5;\n\n  const opBoard = document.querySelector(\"#opponentboard\");\n  const opBoardBlocks = document.querySelectorAll(\"#opponentboard .block\");\n\n  const gameStart = () => {\n    opBoardBlocks.forEach((block) => {\n      block.style.backgroundColor = \"#9abac5\";\n\n      block.addEventListener(\"click\", () => {\n        let cordX = (block.getAttribute(\"id\") - 1) % 6;\n        let cordY = Math.floor((block.getAttribute(\"id\") - 1) / 6);\n        const shipHit = opponentGameboard.receiveAttack(cordX, cordY);\n\n        if (!shipHit) {\n          block.style.backgroundColor = \"#000000\";\n          return;\n        }\n        block.style.backgroundColor = \"#ffffff\";\n\n        opShipyardData.forEach((ship) => {\n          if (ship.getShipName() == shipHit.shipName) {\n            let rootCord = ship.getRootCord();\n            let hitCord = shipHit.cordX - rootCord;\n            ship.hit(hitCord);\n            if (ship.isSunk()) {\n            }\n          }\n        });\n      });\n    });\n  };\n\n  const opponentShipPlacement = () => {\n    opShipyardData.forEach((ship) => {\n      let cordX;\n      let cordY;\n      do {\n        cordX = Math.round(Math.random() * 5);\n        cordY = Math.round(Math.random() * 5);\n        ship.setRootCord(cordX);\n      } while (!opponentGameboard.placeShip(cordX, cordY, ship));\n    });\n  };\n  const shipPlacement = () => {\n    let shipSelected = false;\n    let theShip;\n    ships.forEach((ship) => {\n      ship.addEventListener(\"click\", () => {\n        shipSelected = true;\n        shipyardData.forEach((s) => {\n          if (s.getShipName() == ship.getAttribute(\"id\")) {\n            theShip = s;\n          }\n        });\n        ship.style.visibility = \"hidden\";\n        ship.style.position = \"absolute\";\n      });\n    });\n\n    blocks.forEach((block) => {\n      block.addEventListener(\"click\", () => {\n        if (!shipSelected) return;\n        let cordX = (block.getAttribute(\"id\") - 1) % 6;\n        let cordY = Math.floor((block.getAttribute(\"id\") - 1) / 6);\n        if (!gameboard.placeShip(cordX, cordY, theShip)) {\n          return;\n        }\n        let sibling = block;\n        for (let i = 0; i < theShip.getBody().length; i++) {\n          sibling.style.backgroundColor = \"#058514\";\n          sibling = sibling.nextElementSibling;\n        }\n        shipSelected = false;\n        //Start the game after placing all ships\n        nbrShips--;\n        if (nbrShips === 0) {\n          gameStart();\n        }\n      });\n      block.addEventListener(\"mouseover\", () => {\n        if (shipSelected) {\n          let sibling = block;\n          for (let i = 0; i < theShip.getBody().length; i++) {\n            if (rgbToHex(sibling.style.backgroundColor) != \"#058514\") {\n              sibling.style.backgroundColor = \"#991b08\";\n              sibling = sibling.nextElementSibling;\n            }\n          }\n        }\n      });\n      block.addEventListener(\"mouseout\", () => {\n        if (shipSelected) {\n          let sibling = block;\n          for (let i = 0; i < theShip.getBody().length; i++) {\n            if (rgbToHex(sibling.style.backgroundColor) != \"#058514\") {\n              sibling.style.backgroundColor = \"#9abac5\";\n              sibling = sibling.nextElementSibling;\n            }\n          }\n        }\n      });\n    });\n  };\n\n  opponentShipPlacement();\n  shipPlacement();\n};\n\nNewGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/module/gameboard.js":
/*!*********************************!*\
  !*** ./src/module/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction Gameboard() {\n  let gameboard = [];\n  for (let i = 0; i < 6; i++) {\n    gameboard.push([]);\n    for (let j = 0; j < 6; j++) {\n      gameboard[i][j] = \"\";\n    }\n  }\n  const checkAvailability = (cordX, cordY, shipLength) => {\n    for (let j = 0; j < shipLength; j++) {\n      if (gameboard[cordY][cordX + j] !== \"\") return false;\n    }\n    return true;\n  };\n\n  const placeShip = (cordX, cordY, ship) => {\n    if (checkAvailability(cordX, cordY, ship.getBody().length)) {\n      for (let j = 0; j < ship.getBody().length; j++) {\n        gameboard[cordY][cordX + j] = ship.getShipName();\n      }\n      return true;\n    }\n    return false;\n  };\n\n  const receiveAttack = (cordX, cordY) => {\n    if (gameboard[cordY][cordX] == \"\") {\n      gameboard[cordY][cordX] == \"miss\";\n      console.log(\"missed\");\n      return false;\n    }\n    let shipName = gameboard[cordY][cordX];\n    gameboard[cordY][cordX] = \"hit\";\n    return { cordX, cordY, shipName };\n  };\n  const allShipsSunk = () => {\n    for (let i = 0; i < gameboard.length; i++) {\n      for (let j = 0; j < gameboard.length; j++) {\n        if (\n          gameboard[i][j] !== \"hit\" &&\n          gameboard[i][j] !== \"miss\" &&\n          gameboard[i][j] !== \"\"\n        ) {\n          return false;\n        }\n      }\n    }\n    return true;\n  };\n\n  const getGameBoard = () => {\n    return gameboard;\n  };\n\n  return {\n    checkAvailability,\n    placeShip,\n    receiveAttack,\n    allShipsSunk,\n    getGameBoard,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/module/gameboard.js?");

/***/ }),

/***/ "./src/module/player.js":
/*!******************************!*\
  !*** ./src/module/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player() {\n  let turn = 0;\n  const setTurn = (value) => {\n    turn = value;\n  };\n  const getTurn = () => {\n    return turn;\n  };\n  return { setTurn, getTurn };\n}\n\n\n//# sourceURL=webpack://battleship/./src/module/player.js?");

/***/ }),

/***/ "./src/module/ship.js":
/*!****************************!*\
  !*** ./src/module/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(shipName, len) {\n  let shipN = shipName;\n  let length = len;\n  let rootCord = 0;\n  let body = [];\n  (function () {\n    for (let i = 0; i < length; i++) {\n      body.push(\"\");\n    }\n  })();\n  const hit = (position) => {\n    body[position] = \"hit\";\n    return true;\n  };\n  const getBody = () => {\n    return body;\n  };\n  const getShipName = () => {\n    return shipN;\n  };\n  const isSunk = () => {\n    console.log(getBody());\n    let state = true;\n    getBody().forEach((unit) => {\n      if (unit != \"hit\") {\n        state = false;\n      }\n    });\n    return state;\n  };\n  const setRootCord = (root) => {\n    rootCord = root;\n  };\n  const getRootCord = () => {\n    return rootCord;\n  };\n  return {\n    getShipName,\n    getBody,\n    hit,\n    isSunk,\n    setRootCord,\n    getRootCord,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/module/ship.js?");

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