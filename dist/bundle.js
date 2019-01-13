/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/board */ \"./src/lib/board.js\");\n/* harmony import */ var _lib_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/pad */ \"./src/lib/pad.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    const AudioContext = window.AudioContext || window.webkitAudioContext;\n    const audioCtx = new AudioContext();\n    audioCtx.suspend(); // AudioContext resume once user presses a button\n\n    const pad = new _lib_pad__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('', audioCtx);\n\n    const board = new _lib_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](audioCtx);\n\n    const playPause = document.querySelector('button');\n\n    playPause.addEventListener('click', function () {\n\n            if (playPause.getAttribute('data-playing') === 'false') {\n                console.log(\"YES\");\n                \n                playPause.setAttribute('data-playing', true);\n                audioCtx.resume();\n            } else {\n                console.log(playPause.getAttribute('data-playing'));\n                \n                playPause.setAttribute('data-playing', false);\n                audioCtx.suspend();\n            }\n\n            pad.play(audioCtx, pad.audioBuffer);\n\n    }); \n    \n    // pad.play(audioCtx, pad.audioBuffer);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/board.js":
/*!**************************!*\
  !*** ./src/lib/board.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pad */ \"./src/lib/pad.js\");\n/* harmony import */ var _playpause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playpause */ \"./src/lib/playpause.js\");\n\n\n\nclass Board {\n\n    constructor(audioCtx) {\n        this.audioCtx = audioCtx;\n    }\n\n    // const pad = new Pad('', audioCtx);\n\n    initializePlayButton() {\n        const playButton = new _playpause__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.audioCtx);\n    }\n\n\n}\n\n// const AudioContext = window.AudioContext || window.webkitAudioContext;\n// const audioCtx = new AudioContext();\n\n\n\n// console.log(pad);\n\n// pad.play(audioCtx, pad.audioBuffer);\n\n//# sourceURL=webpack:///./src/lib/board.js?");

/***/ }),

/***/ "./src/lib/pad.js":
/*!************************!*\
  !*** ./src/lib/pad.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pad; });\nclass Pad { \n\n    // Pass in Audio Context from board\n    constructor(soundType, audioCtx) {\n        this.soundType = soundType;\n        this.audioCtx = audioCtx;\n        this.audioBuffer;\n        this.sound = '';\n        this.volume = 0;\n\n        // this.addEventListener('click', () => {\n        //     if (this.getAttribute('aria-checked') === false) {\n        //         this.setAttribute('aria-checked', 'true');\n        //     } else {\n        //         this.setAttribute('aria-checked', 'false');\n        //     }\n        // })\n\n        this.setupSample()\n            .then((sample) => {\n\n                // const playButton = document.querySelector('playpause');\n\n                // if (!playButton.classList.contains('init')) {\n                //     playButton.addEventListener('click', e => {\n                        \n                //     })\n                // }\n\n            })\n\n        // this.sound.connect(audioCtx.destination);\n    }\n\n    determineSound() {\n        switch (this.soundType) {\n            case 'hihat':\n                return '../src/assets/audio/hihat.wav';\n            case 'tom1':\n                return '../src/assets/audio/tom1.wav';\n            case 'tom2':\n                return '../src/assets/audio/tom2.wav';\n            case 'tom3':\n                return '../src/assets/audio/tom3.wav';\n            case 'tom4':\n                return '../src/assets/audio/tom4.wav';\n            case 'snare1':\n                return '../src/assets/audio/snare1.wav';\n            case 'snare2':\n                return '../src/assets/audio/snare1.wav';\n            case 'clap':\n                return '../src/assets/audio/clap.wav';\n            case 'kick':\n                return '../src/assets/audio/kick.wav';\n            case 'sub':\n                return '../src/assets/audio/subbass.wav';\n            default:\n                return '../src/assets/audio/drums.wav';\n        }\n    }\n\n    async getFile(audioCtx, filepath) { // this works now\n        const res = await fetch(filepath);\n\n        const arrayBuffer = await res.arrayBuffer();\n        const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);\n        this.audioBuffer = audioBuffer;    \n        return audioBuffer;\n    }\n\n    async setupSample() {\n        const filePath = this.determineSound();\n        \n        const sample = await this.getFile(this.audioCtx, filePath);\n        return sample;\n    }\n\n\n    play(audioCtx, audioBuffer) {\n        const sampleSource = audioCtx.createBufferSource();\n        sampleSource.buffer = audioBuffer; // AudioBuffer comes from this.audioBuffer\n        sampleSource.connect(audioCtx.destination);\n        sampleSource.start();\n        return sampleSource;\n    }\n}\n\n//# sourceURL=webpack:///./src/lib/pad.js?");

/***/ }),

/***/ "./src/lib/playpause.js":
/*!******************************!*\
  !*** ./src/lib/playpause.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayButton; });\nclass PlayButton {\n\n    constructor(audioCtx) {\n        this.audioCtx = audioCtx;\n        // const playPause = document.querySelector('playpause');\n\n        // playPause.addEventListener('click', () => {\n\n        //     if (playPause.hasAttribute('data-playing')) {\n        //         console.log(\"YES\");\n\n        //     }\n        // }) This might have to go in index.js\n    }\n\n}\n\n//# sourceURL=webpack:///./src/lib/playpause.js?");

/***/ })

/******/ });