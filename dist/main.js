/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n    align-content: center;\n    gap: min(3rem, 6.1vh);\n}\n\n.center {\n    height: min(24.5rem, 44vh);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: min(2.5rem, 5.2vh);\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: min(5rem, 10.2vh);\n}\n\ninput {\n    background-color: transparent;\n    border: min(2px, 0.31vh) solid whitesmoke;\n    border-radius: min(5px, 0.8vh);\n    height: min(2rem, 4.1vh);\n    width: min(12.5rem, 26vh);\n    color: white;\n    font-size: min(1.3rem, 2.7vh);\n    outline: 0;\n    padding-left: min(2px, 0.31vh);\n    padding-right: min(1.9rem, 3.9vh);\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: min(5px, 0.57vh);\n    align-self: center;\n    height: min(1.5rem, 3.1vh);\n}\n\n.currentweather {\n    display: flex;\n    gap: min(2rem, 4.1vh);\n}\n\n.separator {\n    background-color: whitesmoke;\n    border: min(2px, 0.41vh) solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: min(104rem, 170vh);\n    height: min(12.5rem, 21vh);\n    display: flex;\n    justify-content: space-evenly;\n    gap: min(2.5rem, 4vh);\n}\n\n.topdiv {\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: min(3.5rem, 5.7vh);\n}\n\n.topwrap {\n    font-size: min(1.25rem, 2.1vh);\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: min(1.5rem, 2.5vh);\n}\n\n.feelslike {\n    position: relative;\n    width: 9.28rem;\n}\n\n/*.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: min(-13px, -1.3vh);\n}*/\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: min(1rem, 1.7vh);\n    width: 9.6rem;\n}\n\n.humidity > img {\n    height: min(3.25rem, 5.3vh);\n    position: relative;\n    top: min(2px, 0.2vh);\n}\n\n.sunrise {\n    gap: min(1rem, 1.7vh);\n    width: 9.46rem;\n\n}\n\n.sunset {\n    gap: min(1rem, 1.7vh);\n    width: 10.03rem;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: min(4px, 0.5vh);\n}\n\n.windspeed {\n    gap: min(1rem, 1.7vh);\n    width: 12.2rem;\n}\n\n.windspeed > img {\n    height: min(3.6rem, 5.9vh);\n    position: relative;\n    top: min(3px, 0.4vh);\n}\n\n.pop {\n    gap: min(1rem, 1.7vh);\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: min(1rem, 1.7vh);\n    width: 9.84rem;\n}\n\n.maxtemperature {\n    gap: min(1rem, 1.7vh);\n    width: 10.2rem;\n}\n\n.bottom {\n    height: min(12.5rem, 21vh);\n    width: min(104rem, 170vh);\n    display: grid;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice {\n    display: flex;\n    align-items: center;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice > * {\n    border: min(2px, 0.31vh) solid white;\n    border-radius: min(5px, 1vh);\n    padding: min(4px, 0.4vh) min(15px, 1.6vh);\n    font-size: min(1.6rem, 2.7vh);\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: min(8.3rem, 14vh);\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: min(12.75rem, 21vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 2.8vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: min(5px, 1vh);\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: min(3.25rem, 5.3vh);\n}\n\n.dailyweather {\n    display: flex;\n    gap: min(1rem, 2.1vh);\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: min(1.6rem, 2.7vh);\n    gap: min(0.5rem, 1vh);\n    position: relative;\n    bottom: min(2px, 0.22vh);\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: min(7rem, 12.6vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 3.2vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.hourlyicon {\n    height: min(3rem, 6.2vh);\n}\n\n.unit {\n    font-size: min(1.25rem, 2.6vh);\n    font-weight: 500;\n    margin-top: max(-0.75rem, -1.9vh);\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: min(1.5rem, 3.1vh);\n    font-weight: 500;\n    margin-bottom: max(-3.3rem, -8.1vh);\n}\n\n.transparent {\n    visibility: hidden;\n}\n\n.currenticon {\n    align-self: center;\n    height: min(5rem, 10.2vh);\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n    align-content: center;\n    gap: min(3rem, 6.1vh);\n}\n\n.center {\n    height: min(24.5rem, 44vh);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: min(2.5rem, 5.2vh);\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: min(5rem, 10.2vh);\n}\n\ninput {\n    background-color: transparent;\n    border: min(2px, 0.31vh) solid whitesmoke;\n    border-radius: min(5px, 0.8vh);\n    height: min(2rem, 4.1vh);\n    width: min(12.5rem, 26vh);\n    color: white;\n    font-size: min(1.3rem, 2.7vh);\n    outline: 0;\n    padding-left: min(2px, 0.31vh);\n    padding-right: min(1.9rem, 3.9vh);\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: min(5px, 0.57vh);\n    align-self: center;\n    height: min(1.5rem, 3.1vh);\n}\n\n.currentweather {\n    display: flex;\n    gap: min(2rem, 4.1vh);\n}\n\n.separator {\n    background-color: whitesmoke;\n    border: min(2px, 0.41vh) solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: min(104rem, 170vh);\n    height: min(12.5rem, 21vh);\n    display: flex;\n    justify-content: space-evenly;\n    gap: min(2.5rem, 4vh);\n}\n\n.topdiv {\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: min(3.5rem, 5.7vh);\n}\n\n.topwrap {\n    font-size: min(1.25rem, 2.1vh);\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: min(1.5rem, 2.5vh);\n}\n\n.feelslike {\n    position: relative;\n    width: 9.28rem;\n}\n\n/*.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: min(-13px, -1.3vh);\n}*/\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: min(1rem, 1.7vh);\n    width: 9.6rem;\n}\n\n.humidity > img {\n    height: min(3.25rem, 5.3vh);\n    position: relative;\n    top: min(2px, 0.2vh);\n}\n\n.sunrise {\n    gap: min(1rem, 1.7vh);\n    width: 9.46rem;\n\n}\n\n.sunset {\n    gap: min(1rem, 1.7vh);\n    width: 10.03rem;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: min(4px, 0.5vh);\n}\n\n.windspeed {\n    gap: min(1rem, 1.7vh);\n    width: 12.2rem;\n}\n\n.windspeed > img {\n    height: min(3.6rem, 5.9vh);\n    position: relative;\n    top: min(3px, 0.4vh);\n}\n\n.pop {\n    gap: min(1rem, 1.7vh);\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: min(1rem, 1.7vh);\n    width: 9.84rem;\n}\n\n.maxtemperature {\n    gap: min(1rem, 1.7vh);\n    width: 10.2rem;\n}\n\n.bottom {\n    height: min(12.5rem, 21vh);\n    width: min(104rem, 170vh);\n    display: grid;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice {\n    display: flex;\n    align-items: center;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice > * {\n    border: min(2px, 0.31vh) solid white;\n    border-radius: min(5px, 1vh);\n    padding: min(4px, 0.4vh) min(15px, 1.6vh);\n    font-size: min(1.6rem, 2.7vh);\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: min(8.3rem, 14vh);\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: min(12.75rem, 21vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 2.8vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: min(5px, 1vh);\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: min(3.25rem, 5.3vh);\n}\n\n.dailyweather {\n    display: flex;\n    gap: min(1rem, 2.1vh);\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: min(1.6rem, 2.7vh);\n    gap: min(0.5rem, 1vh);\n    position: relative;\n    bottom: min(2px, 0.22vh);\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: min(7rem, 12.6vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 3.2vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.hourlyicon {\n    height: min(3rem, 6.2vh);\n}\n\n.unit {\n    font-size: min(1.25rem, 2.6vh);\n    font-weight: 500;\n    margin-top: max(-0.75rem, -1.9vh);\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: min(1.5rem, 3.1vh);\n    font-weight: 500;\n    margin-bottom: max(-3.3rem, -8.1vh);\n}\n\n.transparent {\n    visibility: hidden;\n}\n\n.currenticon {\n    align-self: center;\n    height: min(5rem, 10.2vh);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/thermometer-half.svg */ "./src/Images/thermometer-half.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/thermometer-sun.svg */ "./src/Images/thermometer-sun.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/thermometer-snow.svg */ "./src/Images/thermometer-snow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/umbrella.svg */ "./src/Images/umbrella.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/wind.svg */ "./src/Images/wind.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/moisture.svg */ "./src/Images/moisture.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/sunrise (3).svg */ "./src/Images/sunrise (3).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/sunset (1).svg */ "./src/Images/sunset (1).svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/sun.svg */ "./src/Images/sun.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/search.svg */ "./src/Images/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/cloud-drizzle.svg */ "./src/Images/cloud-drizzle.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/cloud-lightning.svg */ "./src/Images/cloud-lightning.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/cloud-rain.svg */ "./src/Images/cloud-rain.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/cloud-snow.svg */ "./src/Images/cloud-snow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/cloud.svg */ "./src/Images/cloud.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Images/sun (1).svg */ "./src/Images/sun (1).svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <title>Weather App</title>\n    </head>\n    <body>\n        <div id=\"container\">\n            <div class=\"top\">\n                <div class=\"feelslike topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\n                        alt=\"\"\n                        class=\"topicons\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Feels Like</p>\n                        <p class=\"topcontent feelslikecontent\">32 ºC</p>\n                    </div>\n                </div>\n                <div class=\"maxtemperature topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n                        alt=\"\"\n                        class=\"topicons\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Maximum</p>\n                        <p class=\"topcontent maxcontent\">37 ºC</p>\n                    </div>\n                </div>\n                <div class=\"mintemperature topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n                        alt=\"\"\n                        class=\"topicons\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Minimum</p>\n                        <p class=\"topcontent mincontent\">29 ºC</p>\n                    </div>\n                </div>\n                <div class=\"pop topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                        alt=\"\"\n                        class=\"topicons\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Chance Of Rain</p>\n                        <p class=\"topcontent rainchancecontent\">12%</p>\n                    </div>\n                </div>\n                <div class=\"windspeed topdiv\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" class=\"topicons\" />\n                    <div class=\"topwrap\">\n                        <p>Wind Speed</p>\n                        <p class=\"topcontent windspeedcontent\">26 Km/H</p>\n                    </div>\n                </div>\n                <div class=\"humidity topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n                        alt=\"\"\n                        class=\"topicons\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Humidity</p>\n                        <p class=\"topcontent humiditycontent\">22%</p>\n                    </div>\n                </div>\n                <div class=\"sunrise topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                        alt=\"\"\n                        class=\"topicons sunriseicon\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Sunrise</p>\n                        <p class=\"topcontent sunrisecontent\">6:22 AM</p>\n                    </div>\n                </div>\n                <div class=\"sunset topdiv\">\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\n                        alt=\"\"\n                        class=\"topicons sunseticon\"\n                    />\n                    <div class=\"topwrap\">\n                        <p>Sunset</p>\n                        <p class=\"topcontent sunsetcontent\">9:12 PM</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"center\">\n                <div class=\"weatherdescription\">Clear Sky</div>\n                <div class=\"currentweather\">\n                    <div class=\"temperature\">31 ºC</div>\n                    <div class=\"separator\"></div>\n                    <img class=\"currenticon\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" />\n                </div>\n                <div class=\"location\">Lisbon, Portugal</div>\n                <div class=\"form\">\n                    <input type=\"text\" name=\"location\" id=\"locationinput\" />\n                    <img\n                        src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\n                        alt=\"search icon\"\n                        class=\"search\"\n                    />\n                </div>\n                <button class=\"unit\">Switch to ºF</button>\n                <div class=\"error transparent\">\n                    Location not found. Please use this format: \"City, Country\"\n                </div>\n            </div>\n            <div class=\"bottom\">\n                <div class=\"timechoice\">\n                    <button class=\"daily\">Daily</button>\n                    <button class=\"hourly\">Hourly</button>\n                </div>\n                <div class=\"forecast\">\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Saturday, 13</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Sunday, 14</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Monday, 15</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Tuesday, 16</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Wednesday, 17</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Thursday, 18</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"dailydivs\">\n                        <div class=\"date\">Friday, 19</div>\n                        <div class=\"dailyweather\">\n                            <img\n                                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\n                                alt=\"\"\n                                class=\"forecasticon\"\n                            />\n                            <div>\n                                <div class=\"forecastmax\">40 ºC</div>\n                                <div class=\"forecastmin\">32 ºC</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeBGImage": () => (/* binding */ changeBGImage),
/* harmony export */   "changeDailyForecast": () => (/* binding */ changeDailyForecast),
/* harmony export */   "changeHourlyForecast": () => (/* binding */ changeHourlyForecast),
/* harmony export */   "changeTextContent": () => (/* binding */ changeTextContent),
/* harmony export */   "createFirstHourlyDivs": () => (/* binding */ createFirstHourlyDivs),
/* harmony export */   "createLastHourlyDivs": () => (/* binding */ createLastHourlyDivs),
/* harmony export */   "getWeatherIcon": () => (/* binding */ getWeatherIcon),
/* harmony export */   "hideFirstHourlyDivs": () => (/* binding */ hideFirstHourlyDivs),
/* harmony export */   "hideLastHourlyDivs": () => (/* binding */ hideLastHourlyDivs),
/* harmony export */   "improveReadability": () => (/* binding */ improveReadability),
/* harmony export */   "switchToDailyForecast": () => (/* binding */ switchToDailyForecast),
/* harmony export */   "switchToHourlyForecast": () => (/* binding */ switchToHourlyForecast)
/* harmony export */ });
const container = document.getElementById("container");

function changeBGImage(code, icon) {
    if (code >= 200 && code < 300) {
        container.style.backgroundImage =
            "url(../src/Images/johannes-plenio-ESL1rIs9j48-unsplash.jpg)";
    } else if (code >= 300 && code < 400) {
        container.style.backgroundImage =
            "url(../src/Images/roman-synkevych-qPvBmSvmohs-unsplash.jpg)";
    } else if (code >= 500 && code < 600) {
        container.style.backgroundImage =
            "url(../src/Images/rodolfo-cuadros-8wKpFqxDJT0-unsplash.jpg)";
    } else if (code >= 600 && code < 700) {
        container.style.backgroundImage =
            "url(../src/Images/the-nigmatic-RDh9V-c4iSI-unsplash\\ \\(1\\).jpg)";
    } else if (code > 800 && code < 900) {
        container.style.backgroundImage =
            "url(../src/Images/nick-fewings-ZtDiJzokZi0-unsplash.jpg)";
    } else if (code === 701 || code === 741) {
        container.style.backgroundImage =
            "url(../src/Images/dave-hoefler-od287vQyufw-unsplash.jpg)";
    } else if (
        code === 711 ||
        code === 721 ||
        code === 731 ||
        code === 751 ||
        code === 761 ||
        code === 762
    ) {
        container.style.backgroundImage =
            "url(../src/Images/chris-leboutillier-be8mnFXzBgo-unsplash.jpg)";
    } else if (code === 771) {
        container.style.backgroundImage =
            "url(../src/Images/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg)";
    } else if (code === 781) {
        container.style.backgroundImage =
            "url(../src/Images/espen-bierud-W43gm6TD118-unsplash.jpg)";
    } else if (icon === "01n") {
        container.style.backgroundImage =
            "url(../src/Images/ryan-hutton-Jztmx9yqjBw-unsplash.jpg)";
    } else {
        container.style.backgroundImage =
            "url(../src/Images/william-bout-RPzWI0rolS8-unsplash.jpg)";
    }
}

function improveReadability(code, icon) {
    if (code >= 500 && code < 600) {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.49)";
    } else if (icon === "01n") {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else container.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

const dailyDivs = document.querySelectorAll(".dailydivs");

function switchToHourlyForecast() {
    const forecastChildren = document.querySelectorAll(".forecast > *");
    forecastChildren.forEach((child) => child.classList.add("hide"));

    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");
    firstHourlyDivs.forEach((div) => div.classList.remove("hide"));

    const rightArrow = document.querySelector(".rightarrow");
    rightArrow.classList.remove("hide");
}

const forecastDiv = document.querySelector(".forecast");

function createFirstHourlyDivs() {
    for (let i = 1; i <= 12; i++) {
        createHourlyDiv("firsthourlydivs");
    }
    createRightArrow();
}

function createHourlyDiv(className) {
    const hourlyDiv = document.createElement("div");
    hourlyDiv.classList.add(className);
    forecastDiv.appendChild(hourlyDiv);

    const hour = document.createElement("div");
    hour.classList.add("hour");
    hour.textContent = "12 A.M.";
    hourlyDiv.appendChild(hour);

    const hourlyIcon = document.createElement("img");
    hourlyIcon.classList.add("hourlyicon");
    hourlyIcon.src = "../src/Images/cloud-drizzle.svg";
    hourlyDiv.appendChild(hourlyIcon);

    const hourlyTemperature = document.createElement("div");
    hourlyTemperature.classList.add("hourlytemperature");
    hourlyTemperature.textContent = "40 ºC";
    hourlyDiv.appendChild(hourlyTemperature);
}

function createRightArrow() {
    const rightArrow = document.createElement("img");
    rightArrow.classList.add("rightarrow");
    rightArrow.classList.add("hide");
    rightArrow.setAttribute("src", "../src/Images/arrow-right-circle.svg");
    rightArrow.addEventListener("click", showLastHourlyDivs);
    forecastDiv.appendChild(rightArrow);
}

function createLastHourlyDivs() {
    for (let i = 13; i <= 24; i++) {
        createHourlyDiv("lasthourlydivs");
    }
    createLeftArrow();
}

function createLeftArrow() {
    const leftArrow = document.createElement("img");
    leftArrow.classList.add("leftarrow");
    leftArrow.classList.add("hide");
    leftArrow.setAttribute("src", "../src/Images/arrow-left-circle.svg");
    forecastDiv.appendChild(leftArrow);
}

function showLastHourlyDivs() {
    hideFirstHourlyDivs();

    const lastHourlyDivs = document.querySelector(".lasthourlydivs");

    if (!lastHourlyDivs) createLastHourlyDivs();
    else unhideLastHourlyDivs();

    this.classList.add("hide");

    const leftArrow = document.querySelector(".leftarrow");
    leftArrow.addEventListener("click", showFirstHourlyDivs);
}

function hideFirstHourlyDivs() {
    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");

    firstHourlyDivs.forEach((div) => div.classList.add("hide"));
}

function showFirstHourlyDivs() {
    const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");

    firstHourlyDivs.forEach((div) => div.classList.remove("hide"));

    hideLastHourlyDivs();
    this.classList.add("hide");

    const rightArrow = document.querySelector(".rightarrow");
    rightArrow.classList.remove("hide");
}

function hideLastHourlyDivs() {
    const lastHourlyDivs = document.querySelectorAll(".lasthourlydivs");

    lastHourlyDivs.forEach((div) => div.classList.add("hide"));
}

function unhideLastHourlyDivs() {
    const lastHourlyDivs = document.querySelectorAll(".lasthourlydivs");

    lastHourlyDivs.forEach((div) => div.classList.remove("hide"));

    const leftArrow = document.querySelector(".leftarrow");
    leftArrow.classList.remove("hide");
}

function switchToDailyForecast() {
    const forecastChildren = document.querySelectorAll(".forecast > *");
    forecastChildren.forEach((child) => child.classList.add("hide"));

    dailyDivs.forEach((div) => div.classList.remove("hide"));
}

function changeTextContent(text) {
    this.textContent = text;
}

function getWeatherIcon(code) {
    if (code === "01d") return "../src/Images/sun.svg";
    if (code === "01n") return "../src/Images/moon.svg";
    if (code === "02d") return "../src/Images/cloud-sun.svg";
    if (code === "02n") return "../src/Images/cloud-moon.svg";
    if (code === "03d" || code === "03n") return "../src/Images/cloud (1).svg";
    if (code === "04d" || code === "04n") return "../src/Images/clouds.svg";
    if (code === "09d" || code === "09n" || code === "10d" || code === "10n")
        return "../src/Images/cloud-rain (1).svg";
    if (code === "11d" || code === "11n")
        return "../src/Images/cloud-lightning (2).svg";
    if (code === "13d" || code === "13n") return "../src/Images/snow.svg";
    if (code === "50d" || code === "50n") return "../src/Images/cloud-fog.svg";
}

function changeDailyForecast(days, codes, maxTemps, minTemps) {
    const dailyDates = document.querySelectorAll(".date");
    const dailyForecastIcons = document.querySelectorAll(".forecasticon");
    const dailyMaxTemps = document.querySelectorAll(".forecastmax");
    const dailyMinTemps = document.querySelectorAll(".forecastmin");

    for (let i = 0; i < 7; i++) {
        dailyDates[i].textContent = days[i];

        dailyForecastIcons[i].src = getWeatherIcon(codes[i]);

        dailyMaxTemps[i].textContent = maxTemps[i];

        dailyMinTemps[i].textContent = minTemps[i];
    }
}

function changeHourlyForecast(hours, codes, temps) {
    const hourElements = document.querySelectorAll(".hour");
    const hourlyForecastIcons = document.querySelectorAll(".hourlyicon");
    const hourlyTemps = document.querySelectorAll(".hourlytemperature");

    for (let i = 0; i < 24; i++) {
        hourElements[i].textContent = hours[i];

        hourlyForecastIcons[i].src = getWeatherIcon(codes[i]);

        hourlyTemps[i].textContent = temps[i];
    }
}


/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationName": () => (/* binding */ getLocationName),
/* harmony export */   "getWeatherInfoCelsius": () => (/* binding */ getWeatherInfoCelsius),
/* harmony export */   "getWeatherInfoFahrenheit": () => (/* binding */ getWeatherInfoFahrenheit)
/* harmony export */ });
const key = "9b2ecba753a2d0b501b16be3452469ff";

async function getCoordinates(location) {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`,
        {mode: "cors"}
    );
    const data = await response.json();
    const coordinates = {lat: data[0].lat, lon: data[0].lon};
    return coordinates;
}

async function getWeatherInfoCelsius(location) {
    const coordinates = await getCoordinates(location);

    const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`
    );
    const data = await response.json();
    return data;
}

async function getWeatherInfoFahrenheit(location) {
    const coordinates = await getCoordinates(location);

    const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=imperial`
    );
    const data = await response.json();
    return data;
}

async function getLocationName(location) {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`,
        {mode: "cors"}
    );

    const data = await response.json();

    const locationName = data[0].name;
    let countryName = data[0].country;

    countryList.forEach((country) => {
        if (country.code === countryName) countryName = country.name;
    });

    return {locationName, countryName};
}

const countryList = [
    {code: "AF", name: "Afghanistan"},
    {code: "AX", name: "Åland Islands"},
    {code: "AL", name: "Albania"},
    {code: "DZ", name: "Algeria"},
    {code: "AS", name: "American Samoa"},
    {code: "AD", name: "Andorra"},
    {code: "AO", name: "Angola"},
    {code: "AI", name: "Anguilla"},
    {code: "AQ", name: "Antarctica"},
    {code: "AG", name: "Antigua and Barbuda"},
    {code: "AR", name: "Argentina"},
    {code: "AM", name: "Armenia"},
    {code: "AW", name: "Aruba"},
    {code: "AU", name: "Australia"},
    {code: "AT", name: "Austria"},
    {code: "AZ", name: "Azerbaijan"},
    {code: "BS", name: "Bahamas"},
    {code: "BH", name: "Bahrain"},
    {code: "BD", name: "Bangladesh"},
    {code: "BB", name: "Barbados"},
    {code: "BY", name: "Belarus"},
    {code: "BE", name: "Belgium"},
    {code: "BZ", name: "Belize"},
    {code: "BJ", name: "Benin"},
    {code: "BM", name: "Bermuda"},
    {code: "BT", name: "Bhutan"},
    {code: "BO", name: "Bolivia (Plurinational State of)"},
    {code: "BQ", name: "Bonaire, Sint Eustatius and Saba"},
    {code: "BA", name: "Bosnia and Herzegovina"},
    {code: "BW", name: "Botswana"},
    {code: "BV", name: "Bouvet Island"},
    {code: "BR", name: "Brazil"},
    {code: "IO", name: "British Indian Ocean Territory"},
    {code: "BN", name: "Brunei Darussalam"},
    {code: "BG", name: "Bulgaria"},
    {code: "BF", name: "Burkina Faso"},
    {code: "BI", name: "Burundi"},
    {code: "CV", name: "Cabo Verde"},
    {code: "KH", name: "Cambodia"},
    {code: "CM", name: "Cameroon"},
    {code: "CA", name: "Canada"},
    {code: "KY", name: "Cayman Islands"},
    {code: "CF", name: "Central African Republic"},
    {code: "TD", name: "Chad"},
    {code: "CL", name: "Chile"},
    {code: "CN", name: "China"},
    {code: "CX", name: "Christmas Island"},
    {code: "CC", name: "Cocos (Keeling) Islands"},
    {code: "CO", name: "Colombia"},
    {code: "KM", name: "Comoros"},
    {code: "CG", name: "Congo"},
    {code: "CD", name: "Congo (Democratic Republic of the)"},
    {code: "CK", name: "Cook Islands"},
    {code: "CR", name: "Costa Rica"},
    {code: "CI", name: "Côte d'Ivoire"},
    {code: "HR", name: "Croatia"},
    {code: "CU", name: "Cuba"},
    {code: "CW", name: "Curaçao"},
    {code: "CY", name: "Cyprus"},
    {code: "CZ", name: "Czech Republic"},
    {code: "DK", name: "Denmark"},
    {code: "DJ", name: "Djibouti"},
    {code: "DM", name: "Dominica"},
    {code: "DO", name: "Dominican Republic"},
    {code: "EC", name: "Ecuador"},
    {code: "EG", name: "Egypt"},
    {code: "SV", name: "El Salvador"},
    {code: "GQ", name: "Equatorial Guinea"},
    {code: "ER", name: "Eritrea"},
    {code: "EE", name: "Estonia"},
    {code: "ET", name: "Ethiopia"},
    {code: "FK", name: "Falkland Islands (Malvinas)"},
    {code: "FO", name: "Faroe Islands"},
    {code: "FJ", name: "Fiji (Republic of)"},
    {code: "FI", name: "Finland"},
    {code: "FR", name: "France"},
    {code: "GF", name: "French Guiana"},
    {code: "PF", name: "French Polynesia"},
    {code: "TF", name: "French Southern Territories"},
    {code: "GA", name: "Gabon"},
    {code: "GM", name: "Gambia"},
    {code: "GE", name: "Georgia"},
    {code: "DE", name: "Germany"},
    {code: "GH", name: "Ghana"},
    {code: "GI", name: "Gibraltar"},
    {code: "GR", name: "Greece"},
    {code: "GL", name: "Greenland"},
    {code: "GD", name: "Grenada"},
    {code: "GP", name: "Guadeloupe"},
    {code: "GU", name: "Guam"},
    {code: "GT", name: "Guatemala"},
    {code: "GG", name: "Guernsey"},
    {code: "GN", name: "Guinea"},
    {code: "GW", name: "Guinea-Bissau"},
    {code: "GY", name: "Guyana"},
    {code: "HT", name: "Haiti"},
    {code: "HM", name: "Heard Island and McDonald Islands"},
    {code: "VA", name: "Holy See"},
    {code: "HN", name: "Honduras"},
    {code: "HK", name: "Hong Kong"},
    {code: "HU", name: "Hungary"},
    {code: "IS", name: "Iceland"},
    {code: "IN", name: "India"},
    {code: "ID", name: "Indonesia"},
    {code: "IR", name: "Iran (Islamic Republic of)"},
    {code: "IQ", name: "Iraq"},
    {code: "IE", name: "Ireland"},
    {code: "IM", name: "Isle of Man"},
    {code: "IL", name: "Israel"},
    {code: "IT", name: "Italy"},
    {code: "JM", name: "Jamaica"},
    {code: "JP", name: "Japan"},
    {code: "JE", name: "Jersey"},
    {code: "JO", name: "Jordan"},
    {code: "KZ", name: "Kazakhstan"},
    {code: "KE", name: "Kenya"},
    {code: "KI", name: "Kiribati"},
    {code: "KP", name: "Korea (Democratic People's Republic of)"},
    {code: "KR", name: "Korea (Republic of)"},
    {code: "KW", name: "Kuwait"},
    {code: "KG", name: "Kyrgyzstan"},
    {code: "LA", name: "Lao People's Democratic Republic"},
    {code: "LV", name: "Latvia"},
    {code: "LB", name: "Lebanon"},
    {code: "LS", name: "Lesotho"},
    {code: "LR", name: "Liberia"},
    {code: "LY", name: "Libya"},
    {code: "LI", name: "Liechtenstein"},
    {code: "LT", name: "Lithuania"},
    {code: "LU", name: "Luxembourg"},
    {code: "MO", name: "Macao"},
    {code: "MK", name: "Macedonia (the former Yugoslav Republic of)"},
    {code: "MG", name: "Madagascar"},
    {code: "MW", name: "Malawi"},
    {code: "MY", name: "Malaysia"},
    {code: "MV", name: "Maldives"},
    {code: "ML", name: "Mali"},
    {code: "MT", name: "Malta"},
    {code: "MH", name: "Marshall Islands"},
    {code: "MQ", name: "Martinique"},
    {code: "MR", name: "Mauritania"},
    {code: "MU", name: "Mauritius"},
    {code: "YT", name: "Mayotte"},
    {code: "MX", name: "Mexico"},
    {code: "FM", name: "Micronesia (Federated States of)"},
    {code: "MD", name: "Moldova (Republic of)"},
    {code: "MC", name: "Monaco"},
    {code: "MN", name: "Mongolia"},
    {code: "ME", name: "Montenegro"},
    {code: "MS", name: "Montserrat"},
    {code: "MA", name: "Morocco"},
    {code: "MZ", name: "Mozambique"},
    {code: "MM", name: "Myanmar"},
    {code: "NA", name: "Namibia"},
    {code: "NR", name: "Nauru"},
    {code: "NP", name: "Nepal"},
    {code: "NL", name: "Netherlands"},
    {code: "NC", name: "New Caledonia"},
    {code: "NZ", name: "New Zealand"},
    {code: "NI", name: "Nicaragua"},
    {code: "NE", name: "Niger"},
    {code: "NG", name: "Nigeria"},
    {code: "NU", name: "Niue"},
    {code: "NF", name: "Norfolk Island"},
    {code: "MP", name: "Northern Mariana Islands"},
    {code: "NO", name: "Norway"},
    {code: "OM", name: "Oman"},
    {code: "PK", name: "Pakistan"},
    {code: "PW", name: "Palau"},
    {code: "PS", name: "Palestine, State of"},
    {code: "PA", name: "Panama"},
    {code: "PG", name: "Papua New Guinea"},
    {code: "PY", name: "Paraguay"},
    {code: "PE", name: "Peru"},
    {code: "PH", name: "Philippines"},
    {code: "PN", name: "Pitcairn"},
    {code: "PL", name: "Poland"},
    {code: "PT", name: "Portugal"},
    {code: "PR", name: "Puerto Rico"},
    {code: "QA", name: "Qatar"},
    {code: "RE", name: "Réunion"},
    {code: "RO", name: "Romania"},
    {code: "RU", name: "Russian Federation"},
    {code: "RW", name: "Rwanda"},
    {code: "BL", name: "Saint Barthélemy"},
    {code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha"},
    {code: "KN", name: "Saint Kitts and Nevis"},
    {code: "LC", name: "Saint Lucia"},
    {code: "MF", name: "Saint Martin (French part)"},
    {code: "PM", name: "Saint Pierre and Miquelon"},
    {code: "VC", name: "Saint Vincent and the Grenadines"},
    {code: "WS", name: "Samoa"},
    {code: "SM", name: "San Marino"},
    {code: "ST", name: "Sao Tome and Principe"},
    {code: "SA", name: "Saudi Arabia"},
    {code: "SN", name: "Senegal"},
    {code: "RS", name: "Serbia"},
    {code: "SC", name: "Seychelles"},
    {code: "SL", name: "Sierra Leone"},
    {code: "SG", name: "Singapore"},
    {code: "SX", name: "Sint Maarten (Dutch part)"},
    {code: "SK", name: "Slovakia"},
    {code: "SI", name: "Slovenia"},
    {code: "SB", name: "Solomon Islands"},
    {code: "SO", name: "Somalia"},
    {code: "ZA", name: "South Africa"},
    {code: "GS", name: "South Georgia and the South Sandwich Islands"},
    {code: "SS", name: "South Sudan"},
    {code: "ES", name: "Spain"},
    {code: "LK", name: "Sri Lanka"},
    {code: "SD", name: "Sudan"},
    {code: "SR", name: "Suriname"},
    {code: "SJ", name: "Svalbard and Jan Mayen"},
    {code: "SZ", name: "Swaziland"},
    {code: "SE", name: "Sweden"},
    {code: "CH", name: "Switzerland"},
    {code: "SY", name: "Syrian Arab Republic"},
    {code: "TW", name: "Taiwan, Province of China"},
    {code: "TJ", name: "Tajikistan"},
    {code: "TZ", name: "Tanzania, United Republic of"},
    {code: "TH", name: "Thailand"},
    {code: "TL", name: "Timor-Leste"},
    {code: "TG", name: "Togo"},
    {code: "TK", name: "Tokelau"},
    {code: "TO", name: "Tonga"},
    {code: "TT", name: "Trinidad and Tobago"},
    {code: "TN", name: "Tunisia"},
    {code: "TR", name: "Turkey"},
    {code: "TM", name: "Turkmenistan"},
    {code: "TC", name: "Turks and Caicos Islands"},
    {code: "TV", name: "Tuvalu"},
    {code: "UG", name: "Uganda"},
    {code: "UA", name: "Ukraine"},
    {code: "AE", name: "United Arab Emirates"},
    {code: "GB", name: "United Kingdom of Great Britain and Northern Ireland"},
    {code: "US", name: "United States of America"},
    {code: "UM", name: "United States Minor Outlying Islands"},
    {code: "UY", name: "Uruguay"},
    {code: "UZ", name: "Uzbekistan"},
    {code: "VU", name: "Vanuatu"},
    {code: "VE", name: "Venezuela (Bolivarian Republic of)"},
    {code: "VN", name: "Vietnam"},
    {code: "VG", name: "Virgin Islands (British)"},
    {code: "VI", name: "Virgin Islands (U.S.)"},
    {code: "WF", name: "Wallis and Futuna"},
    {code: "EH", name: "Western Sahara"},
    {code: "YE", name: "Yemen"},
    {code: "ZM", name: "Zambia"},
    {code: "ZW", name: "Zimbabwe"},
];


/***/ }),

/***/ "./src/Images/cloud-drizzle.svg":
/*!**************************************!*\
  !*** ./src/Images/cloud-drizzle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5c0f8556926567dd00b.svg";

/***/ }),

/***/ "./src/Images/cloud-lightning.svg":
/*!****************************************!*\
  !*** ./src/Images/cloud-lightning.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aaca9d16c6bfa2b0010.svg";

/***/ }),

/***/ "./src/Images/cloud-rain.svg":
/*!***********************************!*\
  !*** ./src/Images/cloud-rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50816e42231842d4567c.svg";

/***/ }),

/***/ "./src/Images/cloud-snow.svg":
/*!***********************************!*\
  !*** ./src/Images/cloud-snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cd24bfa252235321377.svg";

/***/ }),

/***/ "./src/Images/cloud.svg":
/*!******************************!*\
  !*** ./src/Images/cloud.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29917241d1cc23e87885.svg";

/***/ }),

/***/ "./src/Images/moisture.svg":
/*!*********************************!*\
  !*** ./src/Images/moisture.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13d9f89d91229449ddfe.svg";

/***/ }),

/***/ "./src/Images/search.svg":
/*!*******************************!*\
  !*** ./src/Images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7323df73bb46abf08c4d.svg";

/***/ }),

/***/ "./src/Images/sun (1).svg":
/*!********************************!*\
  !*** ./src/Images/sun (1).svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a59f0405b34e25bfdd3c.svg";

/***/ }),

/***/ "./src/Images/sun.svg":
/*!****************************!*\
  !*** ./src/Images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab6d0c1b47585762cfc9.svg";

/***/ }),

/***/ "./src/Images/sunrise (3).svg":
/*!************************************!*\
  !*** ./src/Images/sunrise (3).svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02dca46b845ae7aabb31.svg";

/***/ }),

/***/ "./src/Images/sunset (1).svg":
/*!***********************************!*\
  !*** ./src/Images/sunset (1).svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d39a614face1e43fe864.svg";

/***/ }),

/***/ "./src/Images/thermometer-half.svg":
/*!*****************************************!*\
  !*** ./src/Images/thermometer-half.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45d38bbfc6be015af18b.svg";

/***/ }),

/***/ "./src/Images/thermometer-snow.svg":
/*!*****************************************!*\
  !*** ./src/Images/thermometer-snow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd108b5dbf88c77f55b4.svg";

/***/ }),

/***/ "./src/Images/thermometer-sun.svg":
/*!****************************************!*\
  !*** ./src/Images/thermometer-sun.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "499a20d902641156bd1e.svg";

/***/ }),

/***/ "./src/Images/umbrella.svg":
/*!*********************************!*\
  !*** ./src/Images/umbrella.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cbd83f2390cb6b1afc6.svg";

/***/ }),

/***/ "./src/Images/wind.svg":
/*!*****************************!*\
  !*** ./src/Images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b8078c614d14cfc258.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis */ "./src/apis.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");





const locationInput = document.getElementById("locationinput");
const searchBtn = document.querySelector(".search");

const feelsLike = document.querySelector(".feelslikecontent");
const maxTemperature = document.querySelector(".maxcontent");
const minTemperature = document.querySelector(".mincontent");
const chanceOfRain = document.querySelector(".rainchancecontent");
const windSpeed = document.querySelector(".windspeedcontent");
const humidity = document.querySelector(".humiditycontent");
const sunrise = document.querySelector(".sunrisecontent");
const sunset = document.querySelector(".sunsetcontent");

const weatherDescription = document.querySelector(".weatherdescription");
const currentTemperature = document.querySelector(".temperature");
const currentIcon = document.querySelector(".currenticon");
const location = document.querySelector(".location");

const container = document.querySelector("#container");
container.classList.add("hideall");

const changeUnitsButton = document.querySelector(".unit");

const errorMessage = document.querySelector(".error");

async function searchWeather() {
    try {
        let locationChosen;

        if (locationInput.value) {
            locationChosen = locationInput.value;
        } else {
            locationChosen = "Lisbon";
        }

        if (!changeUnitsButton.classList.contains("fahrenheit")) {
            const data = await _apis__WEBPACK_IMPORTED_MODULE_2__.getWeatherInfoCelsius(locationChosen);

            await showData(data, "ºC", "Km/H", locationChosen);
        } else {
            const data = await _apis__WEBPACK_IMPORTED_MODULE_2__.getWeatherInfoFahrenheit(locationChosen);

            await showData(data, "ºF", "Mph", locationChosen);
        }

        changeUnitsButton.addEventListener("click", useSwitchUnits);

        searchBtn.addEventListener("click", () => {
            changeUnitsButton.removeEventListener("click", useSwitchUnits);
        });

        document.addEventListener("keydown", (e) => {
            if (e.code === "Enter")
                changeUnitsButton.removeEventListener("click", useSwitchUnits);
        });

        function useSwitchUnits() {
            switchUnits(locationChosen);
        }

        errorMessage.classList.add("transparent");

        container.classList.remove("hideall");
    } catch (error) {
        errorMessage.classList.add("transparent");
        await new Promise((resolve) => setTimeout(resolve, 30));
        errorMessage.classList.remove("transparent");
    }
}

async function showData(data, tempUnits, speedUnits, locationChosen) {
    chanceOfRain.textContent = `${Math.round(data.daily[0].pop * 100)}%`;

    humidity.textContent = `${data.current.humidity}%`;

    sunrise.textContent = convertUnixToHour(
        data.current.sunrise,
        data.timezone
    );
    sunset.textContent = convertUnixToHour(data.current.sunset, data.timezone);

    weatherDescription.textContent = convertToTitleCase(
        data.current.weather[0].description
    );
    location.textContent = `${
        (await _apis__WEBPACK_IMPORTED_MODULE_2__.getLocationName(locationChosen)).locationName
    }, ${(await _apis__WEBPACK_IMPORTED_MODULE_2__.getLocationName(locationChosen)).countryName}`;

    currentIcon.src = _DOM__WEBPACK_IMPORTED_MODULE_3__.getWeatherIcon(data.current.weather[0].icon);

    _DOM__WEBPACK_IMPORTED_MODULE_3__.changeBGImage(data.current.weather[0].id, data.current.weather[0].icon);
    _DOM__WEBPACK_IMPORTED_MODULE_3__.improveReadability(
        data.current.weather[0].id,
        data.current.weather[0].icon
    );

    feelsLike.textContent = `${Math.round(
        data.current.feels_like
    )} ${tempUnits}`;
    maxTemperature.textContent = `${Math.round(
        data.daily[0].temp.max
    )} ${tempUnits}`;
    minTemperature.textContent = `${Math.round(
        data.daily[0].temp.min
    )} ${tempUnits}`;
    windSpeed.textContent = `${
        Math.round(data.current.wind_speed * 3.6 * 10) / 10
    } ${speedUnits}`;

    currentTemperature.textContent = `${Math.round(
        data.current.temp
    )} ${tempUnits}`;

    const days = createDaysArray(data.daily, data.timezone);
    const dailyIcons = createDailyIconsArray(data.daily);
    const dailyMaxTemps = getDailyMaxTemps(data.daily, tempUnits);
    const dailyMinTemps = getDailyMinTemps(data.daily, tempUnits);

    _DOM__WEBPACK_IMPORTED_MODULE_3__.changeDailyForecast(days, dailyIcons, dailyMaxTemps, dailyMinTemps);

    const hours = createHoursArray(data.hourly, data.timezone);
    const hourlyIcons = createHourlyIconsArray(data.hourly);
    const hourlyTemps = getHourlyTemps(data.hourly, tempUnits);

    _DOM__WEBPACK_IMPORTED_MODULE_3__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);
}

async function switchUnits(locationChosen) {
    if (changeUnitsButton.classList.contains("fahrenheit")) {
        const data = await _apis__WEBPACK_IMPORTED_MODULE_2__.getWeatherInfoCelsius(locationChosen);

        feelsLike.textContent = `${Math.round(data.current.feels_like)} ºC`;
        maxTemperature.textContent = `${Math.round(data.daily[0].temp.max)} ºC`;
        minTemperature.textContent = `${Math.round(data.daily[0].temp.min)} ºC`;

        windSpeed.textContent = `${
            Math.round(data.current.wind_speed * 3.6 * 10) / 10
        } Km/H`;

        currentTemperature.textContent = `${Math.round(data.current.temp)} ºC`;

        const days = createDaysArray(data.daily, data.timezone);
        const dailyIcons = createDailyIconsArray(data.daily);
        const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºC");
        const dailyMinTemps = getDailyMinTemps(data.daily, "ºC");

        _DOM__WEBPACK_IMPORTED_MODULE_3__.changeDailyForecast(days, dailyIcons, dailyMaxTemps, dailyMinTemps);

        const hours = createHoursArray(data.hourly, data.timezone);
        const hourlyIcons = createHourlyIconsArray(data.hourly);
        const hourlyTemps = getHourlyTemps(data.hourly, "ºC");

        _DOM__WEBPACK_IMPORTED_MODULE_3__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

        changeUnitsButton.classList.remove("fahrenheit");
        changeUnitsButton.textContent = "Switch to ºF";
    } else {
        const dataFahrenheit = await _apis__WEBPACK_IMPORTED_MODULE_2__.getWeatherInfoFahrenheit(
            locationChosen
        );

        feelsLike.textContent = `${Math.round(
            dataFahrenheit.current.feels_like
        )} ºF`;
        maxTemperature.textContent = `${Math.round(
            dataFahrenheit.daily[0].temp.max
        )} ºF`;
        minTemperature.textContent = `${Math.round(
            dataFahrenheit.daily[0].temp.min
        )} ºF`;

        windSpeed.textContent = `${
            Math.round(dataFahrenheit.current.wind_speed * 10) / 10
        } Mph`;

        currentTemperature.textContent = `${Math.round(
            dataFahrenheit.current.temp
        )} ºF`;

        const days = createDaysArray(
            dataFahrenheit.daily,
            dataFahrenheit.timezone
        );
        const dailyIcons = createDailyIconsArray(dataFahrenheit.daily);
        const dailyMaxTemps = getDailyMaxTemps(dataFahrenheit.daily, "ºF");
        const dailyMinTemps = getDailyMinTemps(dataFahrenheit.daily, "ºF");

        _DOM__WEBPACK_IMPORTED_MODULE_3__.changeDailyForecast(days, dailyIcons, dailyMaxTemps, dailyMinTemps);

        const hours = createHoursArray(
            dataFahrenheit.hourly,
            dataFahrenheit.timezone
        );
        const hourlyIcons = createHourlyIconsArray(dataFahrenheit.hourly);
        const hourlyTemps = getHourlyTemps(dataFahrenheit.hourly, "ºF");

        _DOM__WEBPACK_IMPORTED_MODULE_3__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

        changeUnitsButton.classList.add("fahrenheit");
        changeUnitsButton.textContent = "Switch to ºC";
    }
}

function createDaysArray(days, timeZone) {
    const daysArray = [];

    for (let i = 1; i <= 7; i++) {
        const convertedDay = `${convertUnixToWeekday(
            days[i].dt,
            timeZone
        )}, ${convertUnixToDay(days[i].dt, timeZone)}`;
        daysArray.push(convertedDay);
    }
    return daysArray;
}

function createDailyIconsArray(days) {
    const iconsArray = [];

    for (let i = 1; i <= 7; i++) {
        iconsArray.push(days[i].weather[0].icon);
    }
    return iconsArray;
}

function getDailyMaxTemps(days, unit) {
    const maxTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        maxTempsArray.push(`${Math.round(days[i].temp.max)} ${unit}`);
    }
    return maxTempsArray;
}

function getDailyMinTemps(days, unit) {
    const minTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        minTempsArray.push(`${Math.round(days[i].temp.min)} ${unit}`);
    }
    return minTempsArray;
}

function createHoursArray(hours, timeZone) {
    const hoursArray = [];

    for (let i = 1; i <= 24; i++) {
        const convertedHour = `${convertWithoutMinutes(hours[i].dt, timeZone)}`;
        hoursArray.push(convertedHour);
    }
    return hoursArray;
}

function createHourlyIconsArray(hours) {
    const iconsArray = [];

    for (let i = 1; i <= 24; i++) {
        iconsArray.push(hours[i].weather[0].icon);
    }
    return iconsArray;
}

function getHourlyTemps(hours, unit) {
    const TempsArray = [];

    for (let i = 1; i <= 24; i++) {
        TempsArray.push(`${Math.round(hours[i].temp)} ${unit}`);
    }
    return TempsArray;
}

function convertToTitleCase(string) {
    const arrayOfWords = string.split(" ");

    const capitalizedArray = [];
    arrayOfWords.forEach((word) =>
        capitalizedArray.push(word.charAt(0).toUpperCase() + word.substr(1))
    );
    return capitalizedArray.join(" ");
}

function convertUnixToHour(time, timeZone) {
    const options = {
        hour: "numeric",
        timeZone,
        minute: "numeric",
    };

    const hour = new Date(time * 1000);
    return hour.toLocaleString("en-US", options);
}

function convertWithoutMinutes(time, timeZone) {
    const options = {
        hour: "numeric",
        timeZone,
    };

    const hour = new Date(time * 1000);
    return hour.toLocaleString("en-US", options);
}

function convertUnixToDay(time, timeZone) {
    const options = {
        day: "numeric",
        timeZone,
    };

    const day = new Date(time * 1000);
    return day.toLocaleString("en-US", options);
}

function convertUnixToWeekday(time, timeZone) {
    const options = {
        weekday: "long",
        timeZone,
    };

    const weekday = new Date(time * 1000);
    return weekday.toLocaleString("en-US", options);
}

searchBtn.addEventListener("click", searchWeather);

document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") searchWeather();
});

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_3__.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_3__.switchToDailyForecast);

_DOM__WEBPACK_IMPORTED_MODULE_3__.createFirstHourlyDivs();
_DOM__WEBPACK_IMPORTED_MODULE_3__.hideFirstHourlyDivs();

_DOM__WEBPACK_IMPORTED_MODULE_3__.createLastHourlyDivs();
_DOM__WEBPACK_IMPORTED_MODULE_3__.hideLastHourlyDivs();

searchWeather();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlB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QUFtRDtBQUN4RCxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDRDQUE0QztBQUNqRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHVD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LFNBQVM7QUFDN0IsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0IsMkJBQTJCLDJCQUEyQixFQUFFLEtBQUs7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsdUNBQXVDLHdEQUEwQjs7QUFFakU7O0FBRUEsc0NBQXNDLHVEQUF5Qjs7QUFFL0QsdURBQXlCO0FBQ3pCLHFEQUF1Qjs7QUFFdkIsc0RBQXdCO0FBQ3hCLG9EQUFzQjs7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDNyZW0sIDYuMXZoKTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGhlaWdodDogbWluKDI0LjVyZW0sIDQ0dmgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41cmVtLCA1LjJ2aCk7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogbWluKDVyZW0sIDEwLjJ2aCk7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbWluKDJweCwgMC4zMXZoKSBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oNXB4LCAwLjh2aCk7XFxuICAgIGhlaWdodDogbWluKDJyZW0sIDQuMXZoKTtcXG4gICAgd2lkdGg6IG1pbigxMi41cmVtLCAyNnZoKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjNyZW0sIDIuN3ZoKTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMnB4LCAwLjMxdmgpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMS45cmVtLCAzLjl2aCk7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiBtaW4oNXB4LCAwLjU3dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDEuNXJlbSwgMy4xdmgpO1xcbn1cXG5cXG4uY3VycmVudHdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IG1pbigycmVtLCA0LjF2aCk7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IG1pbigycHgsIDAuNDF2aCkgc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IG1pbigxMDRyZW0sIDE3MHZoKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTIuNXJlbSwgMjF2aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IG1pbigyLjVyZW0sIDR2aCk7XFxufVxcblxcbi50b3BkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiBtaW4oMy41cmVtLCA1Ljd2aCk7XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiBtaW4oMS4yNXJlbSwgMi4xdmgpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMi41dmgpO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogOS4yOHJlbTtcXG59XFxuXFxuLyouZmVlbHNsaWtlID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IGltZyB7XFxuICAgIGxlZnQ6IG1pbigtMTNweCwgLTEuM3ZoKTtcXG59Ki9cXG5cXG4uZmVlbHNsaWtlID4gLnRvcHdyYXAge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS42cmVtO1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IG1pbigzLjI1cmVtLCA1LjN2aCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiBtaW4oMnB4LCAwLjJ2aCk7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS40NnJlbTtcXG5cXG59XFxuXFxuLnN1bnNldCB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDEwLjAzcmVtO1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogbWluKDRweCwgMC41dmgpO1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogMTIuMnJlbTtcXG59XFxuXFxuLndpbmRzcGVlZCA+IGltZyB7XFxuICAgIGhlaWdodDogbWluKDMuNnJlbSwgNS45dmgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogbWluKDNweCwgMC40dmgpO1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuXFxuLm1pbnRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS44NHJlbTtcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogMTAuMnJlbTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGhlaWdodDogbWluKDEyLjVyZW0sIDIxdmgpO1xcbiAgICB3aWR0aDogbWluKDEwNHJlbSwgMTcwdmgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IG1pbigxcmVtLCAyLjF2aCk7XFxufVxcblxcbi50aW1lY2hvaWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMi4xdmgpO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IG1pbigycHgsIDAuMzF2aCkgc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbig1cHgsIDF2aCk7XFxuICAgIHBhZGRpbmc6IG1pbig0cHgsIDAuNHZoKSBtaW4oMTVweCwgMS42dmgpO1xcbiAgICBmb250LXNpemU6IG1pbigxLjZyZW0sIDIuN3ZoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiBtaW4oOC4zcmVtLCAxNHZoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYWlseWRpdnMge1xcbiAgICB3aWR0aDogbWluKDEyLjc1cmVtLCAyMXZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjc1cmVtLCAyLjh2aCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oNXB4LCAxdmgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiBtaW4oMy4yNXJlbSwgNS4zdmgpO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMi4xdmgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNnJlbSwgMi43dmgpO1xcbiAgICBnYXA6IG1pbigwLjVyZW0sIDF2aCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiBtaW4oMnB4LCAwLjIydmgpO1xcbn1cXG5cXG4uZmlyc3Rob3VybHlkaXZzLFxcbi5sYXN0aG91cmx5ZGl2cyB7XFxuICAgIHdpZHRoOiBtaW4oN3JlbSwgMTIuNnZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjc1cmVtLCAzLjJ2aCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IG1heCgtNC4yNXJlbSwgLTcuMjV2aCk7XFxuICAgIGhlaWdodDogbWluKDMuMXJlbSwgNS42dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IG1heCgtNC4yNXJlbSwgLTcuMjV2aCk7XFxuICAgIGhlaWdodDogbWluKDMuMXJlbSwgNS42dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlpY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oM3JlbSwgNi4ydmgpO1xcbn1cXG5cXG4udW5pdCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuMjVyZW0sIDIuNnZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogbWF4KC0wLjc1cmVtLCAtMS45dmgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMy4xdmgpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiBtYXgoLTMuM3JlbSwgLTguMXZoKTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY3VycmVudGljb24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDVyZW0sIDEwLjJ2aCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYix1REFBdUQ7SUFDdkQscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7Ozs7OztFQU1FOztBQUVGO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oM3JlbSwgNi4xdmgpO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjQuNXJlbSwgNDR2aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IG1pbigyLjVyZW0sIDUuMnZoKTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiBtaW4oNXJlbSwgMTAuMnZoKTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBtaW4oMnB4LCAwLjMxdmgpIHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbig1cHgsIDAuOHZoKTtcXG4gICAgaGVpZ2h0OiBtaW4oMnJlbSwgNC4xdmgpO1xcbiAgICB3aWR0aDogbWluKDEyLjVyZW0sIDI2dmgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuM3JlbSwgMi43dmgpO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigycHgsIDAuMzF2aCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigxLjlyZW0sIDMuOXZoKTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IG1pbig1cHgsIDAuNTd2aCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oMS41cmVtLCAzLjF2aCk7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogbWluKDJyZW0sIDQuMXZoKTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogbWluKDJweCwgMC40MXZoKSBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b3Age1xcbiAgICB3aWR0aDogbWluKDEwNHJlbSwgMTcwdmgpO1xcbiAgICBoZWlnaHQ6IG1pbigxMi41cmVtLCAyMXZoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogbWluKDIuNXJlbSwgNHZoKTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IG1pbigzLjVyZW0sIDUuN3ZoKTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IG1pbigxLjI1cmVtLCAyLjF2aCk7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiBtaW4oMS41cmVtLCAyLjV2aCk7XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA5LjI4cmVtO1xcbn1cXG5cXG4vKi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogbWluKC0xM3B4LCAtMS4zdmgpO1xcbn0qL1xcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiA5LjZyZW07XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICAgIGhlaWdodDogbWluKDMuMjVyZW0sIDUuM3ZoKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IG1pbigycHgsIDAuMnZoKTtcXG59XFxuXFxuLnN1bnJpc2Uge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiA5LjQ2cmVtO1xcblxcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogMTAuMDNyZW07XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiBtaW4oNHB4LCAwLjV2aCk7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiAxMi4ycmVtO1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiBtaW4oMy42cmVtLCA1Ljl2aCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiBtaW4oM3B4LCAwLjR2aCk7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiA5Ljg0cmVtO1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiAxMC4ycmVtO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgaGVpZ2h0OiBtaW4oMTIuNXJlbSwgMjF2aCk7XFxuICAgIHdpZHRoOiBtaW4oMTA0cmVtLCAxNzB2aCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogbWluKDFyZW0sIDIuMXZoKTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IG1pbigxcmVtLCAyLjF2aCk7XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogbWluKDJweCwgMC4zMXZoKSBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDVweCwgMXZoKTtcXG4gICAgcGFkZGluZzogbWluKDRweCwgMC40dmgpIG1pbigxNXB4LCAxLjZ2aCk7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNnJlbSwgMi43dmgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IG1pbig4LjNyZW0sIDE0dmgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiBtaW4oMTIuNzVyZW0sIDIxdmgpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNzVyZW0sIDIuOHZoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbig1cHgsIDF2aCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uZm9yZWNhc3RpY29uIHtcXG4gICAgd2lkdGg6IG1pbigzLjI1cmVtLCA1LjN2aCk7XFxufVxcblxcbi5kYWlseXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IG1pbigxcmVtLCAyLjF2aCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiBtaW4oMS42cmVtLCAyLjd2aCk7XFxuICAgIGdhcDogbWluKDAuNXJlbSwgMXZoKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IG1pbigycHgsIDAuMjJ2aCk7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IG1pbig3cmVtLCAxMi42dmgpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNzVyZW0sIDMuMnZoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogbWF4KC00LjI1cmVtLCAtNy4yNXZoKTtcXG4gICAgaGVpZ2h0OiBtaW4oMy4xcmVtLCA1LjZ2aCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogbWF4KC00LjI1cmVtLCAtNy4yNXZoKTtcXG4gICAgaGVpZ2h0OiBtaW4oMy4xcmVtLCA1LjZ2aCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IG1pbigzcmVtLCA2LjJ2aCk7XFxufVxcblxcbi51bml0IHtcXG4gICAgZm9udC1zaXplOiBtaW4oMS4yNXJlbSwgMi42dmgpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiBtYXgoLTAuNzVyZW0sIC0xLjl2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZm9udC1zaXplOiBtaW4oMS41cmVtLCAzLjF2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IG1heCgtMy4zcmVtLCAtOC4xdmgpO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jdXJyZW50aWNvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4oNXJlbSwgMTAuMnZoKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvdGhlcm1vbWV0ZXItaGFsZi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3RoZXJtb21ldGVyLXN1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3RoZXJtb21ldGVyLXNub3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy91bWJyZWxsYS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3dpbmQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9tb2lzdHVyZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1bnJpc2UgKDMpLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvc3Vuc2V0ICgxKS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1bi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3NlYXJjaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1kcml6emxlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1yYWluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXNub3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzE1X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvc3VuICgxKS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzEzX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzE0X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzE1X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICAgIDxoZWFkPlxcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgICAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgICAgIDx0aXRsZT5XZWF0aGVyIEFwcDwvdGl0bGU+XFxuICAgIDwvaGVhZD5cXG4gICAgPGJvZHk+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZlZWxzbGlrZSB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlZWxzIExpa2U8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgZmVlbHNsaWtlY29udGVudFxcXCI+MzIgwrpDPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXh0ZW1wZXJhdHVyZSB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1heGltdW08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgbWF4Y29udGVudFxcXCI+MzcgwrpDPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtaW50ZW1wZXJhdHVyZSB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1pbmltdW08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgbWluY29udGVudFxcXCI+MjkgwrpDPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwb3AgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuY2UgT2YgUmFpbjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCByYWluY2hhbmNlY29udGVudFxcXCI+MTIlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aW5kc3BlZWQgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldpbmQgU3BlZWQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgd2luZHNwZWVkY29udGVudFxcXCI+MjYgS20vSDwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaHVtaWRpdHkgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5IdW1pZGl0eTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBodW1pZGl0eWNvbnRlbnRcXFwiPjIyJTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VucmlzZSB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zIHN1bnJpc2VpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1bnJpc2U8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgc3VucmlzZWNvbnRlbnRcXFwiPjY6MjIgQU08L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bnNldCB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zIHN1bnNldGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3Vuc2V0PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHN1bnNldGNvbnRlbnRcXFwiPjk6MTIgUE08L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2VhdGhlcmRlc2NyaXB0aW9uXFxcIj5DbGVhciBTa3k8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VycmVudHdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVtcGVyYXR1cmVcXFwiPjMxIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VwYXJhdG9yXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImN1cnJlbnRpY29uXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9jYXRpb25cXFwiPkxpc2JvbiwgUG9ydHVnYWw8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibG9jYXRpb25cXFwiIGlkPVxcXCJsb2NhdGlvbmlucHV0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJzZWFyY2ggaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInVuaXRcXFwiPlN3aXRjaCB0byDCukY8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXJyb3IgdHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gbm90IGZvdW5kLiBQbGVhc2UgdXNlIHRoaXMgZm9ybWF0OiBcXFwiQ2l0eSwgQ291bnRyeVxcXCJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm90dG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWNob2ljZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkYWlseVxcXCI+RGFpbHk8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhvdXJseVxcXCI+SG91cmx5PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlNhdHVyZGF5LCAxMzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5TdW5kYXksIDE0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPk1vbmRheSwgMTU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTJfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+VHVlc2RheSwgMTY8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTNfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+V2VkbmVzZGF5LCAxNzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xNF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5UaHVyc2RheSwgMTg8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTVfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+RnJpZGF5LCAxOTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKGNvZGUsIGljb24pIHtcbiAgICBpZiAoY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvam9oYW5uZXMtcGxlbmlvLUVTTDFySXM5ajQ4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gMzAwICYmIGNvZGUgPCA0MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDUwMCAmJiBjb2RlIDwgNjAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb2RvbGZvLWN1YWRyb3MtOHdLcEZxeERKVDAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA2MDAgJiYgY29kZSA8IDcwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvdGhlLW5pZ21hdGljLVJEaDlWLWM0aVNJLXVuc3BsYXNoXFxcXCBcXFxcKDFcXFxcKS5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID4gODAwICYmIGNvZGUgPCA5MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3MDEgfHwgY29kZSA9PT0gNzQxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9kYXZlLWhvZWZsZXItb2QyODd2UXl1ZnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNvZGUgPT09IDcxMSB8fFxuICAgICAgICBjb2RlID09PSA3MjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzMxIHx8XG4gICAgICAgIGNvZGUgPT09IDc1MSB8fFxuICAgICAgICBjb2RlID09PSA3NjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYyXG4gICAgKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9jaHJpcy1sZWJvdXRpbGxpZXItYmU4bW5GWHpCZ28tdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzcxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9raGFta2VvLXZpbGF5c2luZy1XdHdTc3F3WWxBMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3ODEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2VzcGVuLWJpZXJ1ZC1XNDNnbTZURDExOC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChpY29uID09PSBcIjAxblwiKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yeWFuLWh1dHRvbi1KenRteDl5cWpCdy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3dpbGxpYW0tYm91dC1SUHpXSTByb2xTOC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wcm92ZVJlYWRhYmlsaXR5KGNvZGUsIGljb24pIHtcbiAgICBpZiAoY29kZSA+PSA1MDAgJiYgY29kZSA8IDYwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNDkpXCI7XG4gICAgfSBlbHNlIGlmIChpY29uID09PSBcIjAxblwiKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40KVwiO1xuICAgIH0gZWxzZSBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbn1cblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseWRpdnNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUb0hvdXJseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0ID4gKlwiKTtcbiAgICBmb3JlY2FzdENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICBjcmVhdGVIb3VybHlEaXYoXCJmaXJzdGhvdXJseWRpdnNcIik7XG4gICAgfVxuICAgIGNyZWF0ZVJpZ2h0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5RGl2KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VybHlEaXYpO1xuXG4gICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcbiAgICBob3VyLnRleHRDb250ZW50ID0gXCIxMiBBLk0uXCI7XG4gICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXIpO1xuXG4gICAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICBob3VybHlJY29uLnNyYyA9IFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1kcml6emxlLnN2Z1wiO1xuICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlJY29uKTtcblxuICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3VybHlUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5dGVtcGVyYXR1cmVcIik7XG4gICAgaG91cmx5VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBcIjQwIMK6Q1wiO1xuICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0QXJyb3coKSB7XG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwicmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIHJpZ2h0QXJyb3cuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL0ltYWdlcy9hcnJvdy1yaWdodC1jaXJjbGUuc3ZnXCIpO1xuICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dMYXN0SG91cmx5RGl2cyk7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQocmlnaHRBcnJvdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBmb3IgKGxldCBpID0gMTM7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBjcmVhdGVIb3VybHlEaXYoXCJsYXN0aG91cmx5ZGl2c1wiKTtcbiAgICB9XG4gICAgY3JlYXRlTGVmdEFycm93KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRBcnJvdygpIHtcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QuYWRkKFwibGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBsZWZ0QXJyb3cuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL0ltYWdlcy9hcnJvdy1sZWZ0LWNpcmNsZS5zdmdcIik7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbn1cblxuZnVuY3Rpb24gc2hvd0xhc3RIb3VybHlEaXZzKCkge1xuICAgIGhpZGVGaXJzdEhvdXJseURpdnMoKTtcblxuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGlmICghbGFzdEhvdXJseURpdnMpIGNyZWF0ZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgZWxzZSB1bmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0ZpcnN0SG91cmx5RGl2cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBoaWRlTGFzdEhvdXJseURpdnMoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZnVuY3Rpb24gdW5oaWRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgbGFzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9EYWlseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0ID4gKlwiKTtcbiAgICBmb3JlY2FzdENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG5cbiAgICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGV4dENvbnRlbnQodGV4dCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBcIjAxZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3N1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMW5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAyZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXN1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMm5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAzZFwiIHx8IGNvZGUgPT09IFwiMDNuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQgKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA0ZFwiIHx8IGNvZGUgPT09IFwiMDRuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWRzLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXJhaW4gKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjExZFwiIHx8IGNvZGUgPT09IFwiMTFuXCIpXG4gICAgICAgIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbGlnaHRuaW5nICgyKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxM2RcIiB8fCBjb2RlID09PSBcIjEzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3Nub3cuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiNTBkXCIgfHwgY29kZSA9PT0gXCI1MG5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1mb2cuc3ZnXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGNvZGVzLCBtYXhUZW1wcywgbWluVGVtcHMpIHtcbiAgICBjb25zdCBkYWlseURhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlXCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RpY29uXCIpO1xuICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWF4XCIpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWluXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgZGFpbHlEYXRlc1tpXS50ZXh0Q29udGVudCA9IGRheXNbaV07XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEljb25zW2ldLnNyYyA9IGdldFdlYXRoZXJJY29uKGNvZGVzW2ldKTtcblxuICAgICAgICBkYWlseU1heFRlbXBzW2ldLnRleHRDb250ZW50ID0gbWF4VGVtcHNbaV07XG5cbiAgICAgICAgZGFpbHlNaW5UZW1wc1tpXS50ZXh0Q29udGVudCA9IG1pblRlbXBzW2ldO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBjb2RlcywgdGVtcHMpIHtcbiAgICBjb25zdCBob3VyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5aWNvblwiKTtcbiAgICBjb25zdCBob3VybHlUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5dGVtcGVyYXR1cmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgaG91ckVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gaG91cnNbaV07XG5cbiAgICAgICAgaG91cmx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgaG91cmx5VGVtcHNbaV0udGV4dENvbnRlbnQgPSB0ZW1wc1tpXTtcbiAgICB9XG59XG4iLCJjb25zdCBrZXkgPSBcIjliMmVjYmE3NTNhMmQwYjUwMWIxNmJlMzQ1MjQ2OWZmXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7bGF0OiBkYXRhWzBdLmxhdCwgbG9uOiBkYXRhWzBdLmxvbn07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9GYWhyZW5oZWl0KGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1pbXBlcmlhbGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgICAge21vZGU6IFwiY29yc1wifVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZGF0YVswXS5uYW1lO1xuICAgIGxldCBjb3VudHJ5TmFtZSA9IGRhdGFbMF0uY291bnRyeTtcblxuICAgIGNvdW50cnlMaXN0LmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgICAgICAgaWYgKGNvdW50cnkuY29kZSA9PT0gY291bnRyeU5hbWUpIGNvdW50cnlOYW1lID0gY291bnRyeS5uYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtsb2NhdGlvbk5hbWUsIGNvdW50cnlOYW1lfTtcbn1cblxuY29uc3QgY291bnRyeUxpc3QgPSBbXG4gICAge2NvZGU6IFwiQUZcIiwgbmFtZTogXCJBZmdoYW5pc3RhblwifSxcbiAgICB7Y29kZTogXCJBWFwiLCBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkFMXCIsIG5hbWU6IFwiQWxiYW5pYVwifSxcbiAgICB7Y29kZTogXCJEWlwiLCBuYW1lOiBcIkFsZ2VyaWFcIn0sXG4gICAge2NvZGU6IFwiQVNcIiwgbmFtZTogXCJBbWVyaWNhbiBTYW1vYVwifSxcbiAgICB7Y29kZTogXCJBRFwiLCBuYW1lOiBcIkFuZG9ycmFcIn0sXG4gICAge2NvZGU6IFwiQU9cIiwgbmFtZTogXCJBbmdvbGFcIn0sXG4gICAge2NvZGU6IFwiQUlcIiwgbmFtZTogXCJBbmd1aWxsYVwifSxcbiAgICB7Y29kZTogXCJBUVwiLCBuYW1lOiBcIkFudGFyY3RpY2FcIn0sXG4gICAge2NvZGU6IFwiQUdcIiwgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCJ9LFxuICAgIHtjb2RlOiBcIkFSXCIsIG5hbWU6IFwiQXJnZW50aW5hXCJ9LFxuICAgIHtjb2RlOiBcIkFNXCIsIG5hbWU6IFwiQXJtZW5pYVwifSxcbiAgICB7Y29kZTogXCJBV1wiLCBuYW1lOiBcIkFydWJhXCJ9LFxuICAgIHtjb2RlOiBcIkFVXCIsIG5hbWU6IFwiQXVzdHJhbGlhXCJ9LFxuICAgIHtjb2RlOiBcIkFUXCIsIG5hbWU6IFwiQXVzdHJpYVwifSxcbiAgICB7Y29kZTogXCJBWlwiLCBuYW1lOiBcIkF6ZXJiYWlqYW5cIn0sXG4gICAge2NvZGU6IFwiQlNcIiwgbmFtZTogXCJCYWhhbWFzXCJ9LFxuICAgIHtjb2RlOiBcIkJIXCIsIG5hbWU6IFwiQmFocmFpblwifSxcbiAgICB7Y29kZTogXCJCRFwiLCBuYW1lOiBcIkJhbmdsYWRlc2hcIn0sXG4gICAge2NvZGU6IFwiQkJcIiwgbmFtZTogXCJCYXJiYWRvc1wifSxcbiAgICB7Y29kZTogXCJCWVwiLCBuYW1lOiBcIkJlbGFydXNcIn0sXG4gICAge2NvZGU6IFwiQkVcIiwgbmFtZTogXCJCZWxnaXVtXCJ9LFxuICAgIHtjb2RlOiBcIkJaXCIsIG5hbWU6IFwiQmVsaXplXCJ9LFxuICAgIHtjb2RlOiBcIkJKXCIsIG5hbWU6IFwiQmVuaW5cIn0sXG4gICAge2NvZGU6IFwiQk1cIiwgbmFtZTogXCJCZXJtdWRhXCJ9LFxuICAgIHtjb2RlOiBcIkJUXCIsIG5hbWU6IFwiQmh1dGFuXCJ9LFxuICAgIHtjb2RlOiBcIkJPXCIsIG5hbWU6IFwiQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZilcIn0sXG4gICAge2NvZGU6IFwiQlFcIiwgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwifSxcbiAgICB7Y29kZTogXCJCQVwiLCBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIn0sXG4gICAge2NvZGU6IFwiQldcIiwgbmFtZTogXCJCb3Rzd2FuYVwifSxcbiAgICB7Y29kZTogXCJCVlwiLCBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiQlJcIiwgbmFtZTogXCJCcmF6aWxcIn0sXG4gICAge2NvZGU6IFwiSU9cIiwgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIn0sXG4gICAge2NvZGU6IFwiQk5cIiwgbmFtZTogXCJCcnVuZWkgRGFydXNzYWxhbVwifSxcbiAgICB7Y29kZTogXCJCR1wiLCBuYW1lOiBcIkJ1bGdhcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkJGXCIsIG5hbWU6IFwiQnVya2luYSBGYXNvXCJ9LFxuICAgIHtjb2RlOiBcIkJJXCIsIG5hbWU6IFwiQnVydW5kaVwifSxcbiAgICB7Y29kZTogXCJDVlwiLCBuYW1lOiBcIkNhYm8gVmVyZGVcIn0sXG4gICAge2NvZGU6IFwiS0hcIiwgbmFtZTogXCJDYW1ib2RpYVwifSxcbiAgICB7Y29kZTogXCJDTVwiLCBuYW1lOiBcIkNhbWVyb29uXCJ9LFxuICAgIHtjb2RlOiBcIkNBXCIsIG5hbWU6IFwiQ2FuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIktZXCIsIG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ0ZcIiwgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiVERcIiwgbmFtZTogXCJDaGFkXCJ9LFxuICAgIHtjb2RlOiBcIkNMXCIsIG5hbWU6IFwiQ2hpbGVcIn0sXG4gICAge2NvZGU6IFwiQ05cIiwgbmFtZTogXCJDaGluYVwifSxcbiAgICB7Y29kZTogXCJDWFwiLCBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiQ0NcIiwgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDT1wiLCBuYW1lOiBcIkNvbG9tYmlhXCJ9LFxuICAgIHtjb2RlOiBcIktNXCIsIG5hbWU6IFwiQ29tb3Jvc1wifSxcbiAgICB7Y29kZTogXCJDR1wiLCBuYW1lOiBcIkNvbmdvXCJ9LFxuICAgIHtjb2RlOiBcIkNEXCIsIG5hbWU6IFwiQ29uZ28gKERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwifSxcbiAgICB7Y29kZTogXCJDS1wiLCBuYW1lOiBcIkNvb2sgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDUlwiLCBuYW1lOiBcIkNvc3RhIFJpY2FcIn0sXG4gICAge2NvZGU6IFwiQ0lcIiwgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwifSxcbiAgICB7Y29kZTogXCJIUlwiLCBuYW1lOiBcIkNyb2F0aWFcIn0sXG4gICAge2NvZGU6IFwiQ1VcIiwgbmFtZTogXCJDdWJhXCJ9LFxuICAgIHtjb2RlOiBcIkNXXCIsIG5hbWU6IFwiQ3VyYcOnYW9cIn0sXG4gICAge2NvZGU6IFwiQ1lcIiwgbmFtZTogXCJDeXBydXNcIn0sXG4gICAge2NvZGU6IFwiQ1pcIiwgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJES1wiLCBuYW1lOiBcIkRlbm1hcmtcIn0sXG4gICAge2NvZGU6IFwiREpcIiwgbmFtZTogXCJEamlib3V0aVwifSxcbiAgICB7Y29kZTogXCJETVwiLCBuYW1lOiBcIkRvbWluaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkRPXCIsIG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkVDXCIsIG5hbWU6IFwiRWN1YWRvclwifSxcbiAgICB7Y29kZTogXCJFR1wiLCBuYW1lOiBcIkVneXB0XCJ9LFxuICAgIHtjb2RlOiBcIlNWXCIsIG5hbWU6IFwiRWwgU2FsdmFkb3JcIn0sXG4gICAge2NvZGU6IFwiR1FcIiwgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJFUlwiLCBuYW1lOiBcIkVyaXRyZWFcIn0sXG4gICAge2NvZGU6IFwiRUVcIiwgbmFtZTogXCJFc3RvbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkVUXCIsIG5hbWU6IFwiRXRoaW9waWFcIn0sXG4gICAge2NvZGU6IFwiRktcIiwgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIn0sXG4gICAge2NvZGU6IFwiRk9cIiwgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkZKXCIsIG5hbWU6IFwiRmlqaSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIkZJXCIsIG5hbWU6IFwiRmlubGFuZFwifSxcbiAgICB7Y29kZTogXCJGUlwiLCBuYW1lOiBcIkZyYW5jZVwifSxcbiAgICB7Y29kZTogXCJHRlwiLCBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIn0sXG4gICAge2NvZGU6IFwiUEZcIiwgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIlRGXCIsIG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCJ9LFxuICAgIHtjb2RlOiBcIkdBXCIsIG5hbWU6IFwiR2Fib25cIn0sXG4gICAge2NvZGU6IFwiR01cIiwgbmFtZTogXCJHYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiR0VcIiwgbmFtZTogXCJHZW9yZ2lhXCJ9LFxuICAgIHtjb2RlOiBcIkRFXCIsIG5hbWU6IFwiR2VybWFueVwifSxcbiAgICB7Y29kZTogXCJHSFwiLCBuYW1lOiBcIkdoYW5hXCJ9LFxuICAgIHtjb2RlOiBcIkdJXCIsIG5hbWU6IFwiR2licmFsdGFyXCJ9LFxuICAgIHtjb2RlOiBcIkdSXCIsIG5hbWU6IFwiR3JlZWNlXCJ9LFxuICAgIHtjb2RlOiBcIkdMXCIsIG5hbWU6IFwiR3JlZW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkdEXCIsIG5hbWU6IFwiR3JlbmFkYVwifSxcbiAgICB7Y29kZTogXCJHUFwiLCBuYW1lOiBcIkd1YWRlbG91cGVcIn0sXG4gICAge2NvZGU6IFwiR1VcIiwgbmFtZTogXCJHdWFtXCJ9LFxuICAgIHtjb2RlOiBcIkdUXCIsIG5hbWU6IFwiR3VhdGVtYWxhXCJ9LFxuICAgIHtjb2RlOiBcIkdHXCIsIG5hbWU6IFwiR3Vlcm5zZXlcIn0sXG4gICAge2NvZGU6IFwiR05cIiwgbmFtZTogXCJHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiR1dcIiwgbmFtZTogXCJHdWluZWEtQmlzc2F1XCJ9LFxuICAgIHtjb2RlOiBcIkdZXCIsIG5hbWU6IFwiR3V5YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkhUXCIsIG5hbWU6IFwiSGFpdGlcIn0sXG4gICAge2NvZGU6IFwiSE1cIiwgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVkFcIiwgbmFtZTogXCJIb2x5IFNlZVwifSxcbiAgICB7Y29kZTogXCJITlwiLCBuYW1lOiBcIkhvbmR1cmFzXCJ9LFxuICAgIHtjb2RlOiBcIkhLXCIsIG5hbWU6IFwiSG9uZyBLb25nXCJ9LFxuICAgIHtjb2RlOiBcIkhVXCIsIG5hbWU6IFwiSHVuZ2FyeVwifSxcbiAgICB7Y29kZTogXCJJU1wiLCBuYW1lOiBcIkljZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiSU5cIiwgbmFtZTogXCJJbmRpYVwifSxcbiAgICB7Y29kZTogXCJJRFwiLCBuYW1lOiBcIkluZG9uZXNpYVwifSxcbiAgICB7Y29kZTogXCJJUlwiLCBuYW1lOiBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIklRXCIsIG5hbWU6IFwiSXJhcVwifSxcbiAgICB7Y29kZTogXCJJRVwiLCBuYW1lOiBcIklyZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiSU1cIiwgbmFtZTogXCJJc2xlIG9mIE1hblwifSxcbiAgICB7Y29kZTogXCJJTFwiLCBuYW1lOiBcIklzcmFlbFwifSxcbiAgICB7Y29kZTogXCJJVFwiLCBuYW1lOiBcIkl0YWx5XCJ9LFxuICAgIHtjb2RlOiBcIkpNXCIsIG5hbWU6IFwiSmFtYWljYVwifSxcbiAgICB7Y29kZTogXCJKUFwiLCBuYW1lOiBcIkphcGFuXCJ9LFxuICAgIHtjb2RlOiBcIkpFXCIsIG5hbWU6IFwiSmVyc2V5XCJ9LFxuICAgIHtjb2RlOiBcIkpPXCIsIG5hbWU6IFwiSm9yZGFuXCJ9LFxuICAgIHtjb2RlOiBcIktaXCIsIG5hbWU6IFwiS2F6YWtoc3RhblwifSxcbiAgICB7Y29kZTogXCJLRVwiLCBuYW1lOiBcIktlbnlhXCJ9LFxuICAgIHtjb2RlOiBcIktJXCIsIG5hbWU6IFwiS2lyaWJhdGlcIn0sXG4gICAge2NvZGU6IFwiS1BcIiwgbmFtZTogXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1JcIiwgbmFtZTogXCJLb3JlYSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIktXXCIsIG5hbWU6IFwiS3V3YWl0XCJ9LFxuICAgIHtjb2RlOiBcIktHXCIsIG5hbWU6IFwiS3lyZ3l6c3RhblwifSxcbiAgICB7Y29kZTogXCJMQVwiLCBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkxWXCIsIG5hbWU6IFwiTGF0dmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxCXCIsIG5hbWU6IFwiTGViYW5vblwifSxcbiAgICB7Y29kZTogXCJMU1wiLCBuYW1lOiBcIkxlc290aG9cIn0sXG4gICAge2NvZGU6IFwiTFJcIiwgbmFtZTogXCJMaWJlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxZXCIsIG5hbWU6IFwiTGlieWFcIn0sXG4gICAge2NvZGU6IFwiTElcIiwgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCJ9LFxuICAgIHtjb2RlOiBcIkxUXCIsIG5hbWU6IFwiTGl0aHVhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxVXCIsIG5hbWU6IFwiTHV4ZW1ib3VyZ1wifSxcbiAgICB7Y29kZTogXCJNT1wiLCBuYW1lOiBcIk1hY2FvXCJ9LFxuICAgIHtjb2RlOiBcIk1LXCIsIG5hbWU6IFwiTWFjZWRvbmlhICh0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJNR1wiLCBuYW1lOiBcIk1hZGFnYXNjYXJcIn0sXG4gICAge2NvZGU6IFwiTVdcIiwgbmFtZTogXCJNYWxhd2lcIn0sXG4gICAge2NvZGU6IFwiTVlcIiwgbmFtZTogXCJNYWxheXNpYVwifSxcbiAgICB7Y29kZTogXCJNVlwiLCBuYW1lOiBcIk1hbGRpdmVzXCJ9LFxuICAgIHtjb2RlOiBcIk1MXCIsIG5hbWU6IFwiTWFsaVwifSxcbiAgICB7Y29kZTogXCJNVFwiLCBuYW1lOiBcIk1hbHRhXCJ9LFxuICAgIHtjb2RlOiBcIk1IXCIsIG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJNUVwiLCBuYW1lOiBcIk1hcnRpbmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTVJcIiwgbmFtZTogXCJNYXVyaXRhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIk1VXCIsIG5hbWU6IFwiTWF1cml0aXVzXCJ9LFxuICAgIHtjb2RlOiBcIllUXCIsIG5hbWU6IFwiTWF5b3R0ZVwifSxcbiAgICB7Y29kZTogXCJNWFwiLCBuYW1lOiBcIk1leGljb1wifSxcbiAgICB7Y29kZTogXCJGTVwiLCBuYW1lOiBcIk1pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1EXCIsIG5hbWU6IFwiTW9sZG92YSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1DXCIsIG5hbWU6IFwiTW9uYWNvXCJ9LFxuICAgIHtjb2RlOiBcIk1OXCIsIG5hbWU6IFwiTW9uZ29saWFcIn0sXG4gICAge2NvZGU6IFwiTUVcIiwgbmFtZTogXCJNb250ZW5lZ3JvXCJ9LFxuICAgIHtjb2RlOiBcIk1TXCIsIG5hbWU6IFwiTW9udHNlcnJhdFwifSxcbiAgICB7Y29kZTogXCJNQVwiLCBuYW1lOiBcIk1vcm9jY29cIn0sXG4gICAge2NvZGU6IFwiTVpcIiwgbmFtZTogXCJNb3phbWJpcXVlXCJ9LFxuICAgIHtjb2RlOiBcIk1NXCIsIG5hbWU6IFwiTXlhbm1hclwifSxcbiAgICB7Y29kZTogXCJOQVwiLCBuYW1lOiBcIk5hbWliaWFcIn0sXG4gICAge2NvZGU6IFwiTlJcIiwgbmFtZTogXCJOYXVydVwifSxcbiAgICB7Y29kZTogXCJOUFwiLCBuYW1lOiBcIk5lcGFsXCJ9LFxuICAgIHtjb2RlOiBcIk5MXCIsIG5hbWU6IFwiTmV0aGVybGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTkNcIiwgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5aXCIsIG5hbWU6IFwiTmV3IFplYWxhbmRcIn0sXG4gICAge2NvZGU6IFwiTklcIiwgbmFtZTogXCJOaWNhcmFndWFcIn0sXG4gICAge2NvZGU6IFwiTkVcIiwgbmFtZTogXCJOaWdlclwifSxcbiAgICB7Y29kZTogXCJOR1wiLCBuYW1lOiBcIk5pZ2VyaWFcIn0sXG4gICAge2NvZGU6IFwiTlVcIiwgbmFtZTogXCJOaXVlXCJ9LFxuICAgIHtjb2RlOiBcIk5GXCIsIG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiTVBcIiwgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTk9cIiwgbmFtZTogXCJOb3J3YXlcIn0sXG4gICAge2NvZGU6IFwiT01cIiwgbmFtZTogXCJPbWFuXCJ9LFxuICAgIHtjb2RlOiBcIlBLXCIsIG5hbWU6IFwiUGFraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiUFdcIiwgbmFtZTogXCJQYWxhdVwifSxcbiAgICB7Y29kZTogXCJQU1wiLCBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIn0sXG4gICAge2NvZGU6IFwiUEFcIiwgbmFtZTogXCJQYW5hbWFcIn0sXG4gICAge2NvZGU6IFwiUEdcIiwgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIlBZXCIsIG5hbWU6IFwiUGFyYWd1YXlcIn0sXG4gICAge2NvZGU6IFwiUEVcIiwgbmFtZTogXCJQZXJ1XCJ9LFxuICAgIHtjb2RlOiBcIlBIXCIsIG5hbWU6IFwiUGhpbGlwcGluZXNcIn0sXG4gICAge2NvZGU6IFwiUE5cIiwgbmFtZTogXCJQaXRjYWlyblwifSxcbiAgICB7Y29kZTogXCJQTFwiLCBuYW1lOiBcIlBvbGFuZFwifSxcbiAgICB7Y29kZTogXCJQVFwiLCBuYW1lOiBcIlBvcnR1Z2FsXCJ9LFxuICAgIHtjb2RlOiBcIlBSXCIsIG5hbWU6IFwiUHVlcnRvIFJpY29cIn0sXG4gICAge2NvZGU6IFwiUUFcIiwgbmFtZTogXCJRYXRhclwifSxcbiAgICB7Y29kZTogXCJSRVwiLCBuYW1lOiBcIlLDqXVuaW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJPXCIsIG5hbWU6IFwiUm9tYW5pYVwifSxcbiAgICB7Y29kZTogXCJSVVwiLCBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwifSxcbiAgICB7Y29kZTogXCJSV1wiLCBuYW1lOiBcIlJ3YW5kYVwifSxcbiAgICB7Y29kZTogXCJCTFwiLCBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCJ9LFxuICAgIHtjb2RlOiBcIlNIXCIsIG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIn0sXG4gICAge2NvZGU6IFwiS05cIiwgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIn0sXG4gICAge2NvZGU6IFwiTENcIiwgbmFtZTogXCJTYWludCBMdWNpYVwifSxcbiAgICB7Y29kZTogXCJNRlwiLCBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCJ9LFxuICAgIHtjb2RlOiBcIlBNXCIsIG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwifSxcbiAgICB7Y29kZTogXCJWQ1wiLCBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCJ9LFxuICAgIHtjb2RlOiBcIldTXCIsIG5hbWU6IFwiU2Ftb2FcIn0sXG4gICAge2NvZGU6IFwiU01cIiwgbmFtZTogXCJTYW4gTWFyaW5vXCJ9LFxuICAgIHtjb2RlOiBcIlNUXCIsIG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCJ9LFxuICAgIHtjb2RlOiBcIlNBXCIsIG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNOXCIsIG5hbWU6IFwiU2VuZWdhbFwifSxcbiAgICB7Y29kZTogXCJSU1wiLCBuYW1lOiBcIlNlcmJpYVwifSxcbiAgICB7Y29kZTogXCJTQ1wiLCBuYW1lOiBcIlNleWNoZWxsZXNcIn0sXG4gICAge2NvZGU6IFwiU0xcIiwgbmFtZTogXCJTaWVycmEgTGVvbmVcIn0sXG4gICAge2NvZGU6IFwiU0dcIiwgbmFtZTogXCJTaW5nYXBvcmVcIn0sXG4gICAge2NvZGU6IFwiU1hcIiwgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCJ9LFxuICAgIHtjb2RlOiBcIlNLXCIsIG5hbWU6IFwiU2xvdmFraWFcIn0sXG4gICAge2NvZGU6IFwiU0lcIiwgbmFtZTogXCJTbG92ZW5pYVwifSxcbiAgICB7Y29kZTogXCJTQlwiLCBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJTT1wiLCBuYW1lOiBcIlNvbWFsaWFcIn0sXG4gICAge2NvZGU6IFwiWkFcIiwgbmFtZTogXCJTb3V0aCBBZnJpY2FcIn0sXG4gICAge2NvZGU6IFwiR1NcIiwgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJTU1wiLCBuYW1lOiBcIlNvdXRoIFN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIkVTXCIsIG5hbWU6IFwiU3BhaW5cIn0sXG4gICAge2NvZGU6IFwiTEtcIiwgbmFtZTogXCJTcmkgTGFua2FcIn0sXG4gICAge2NvZGU6IFwiU0RcIiwgbmFtZTogXCJTdWRhblwifSxcbiAgICB7Y29kZTogXCJTUlwiLCBuYW1lOiBcIlN1cmluYW1lXCJ9LFxuICAgIHtjb2RlOiBcIlNKXCIsIG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwifSxcbiAgICB7Y29kZTogXCJTWlwiLCBuYW1lOiBcIlN3YXppbGFuZFwifSxcbiAgICB7Y29kZTogXCJTRVwiLCBuYW1lOiBcIlN3ZWRlblwifSxcbiAgICB7Y29kZTogXCJDSFwiLCBuYW1lOiBcIlN3aXR6ZXJsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNZXCIsIG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiVFdcIiwgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIlRKXCIsIG5hbWU6IFwiVGFqaWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJUWlwiLCBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIn0sXG4gICAge2NvZGU6IFwiVEhcIiwgbmFtZTogXCJUaGFpbGFuZFwifSxcbiAgICB7Y29kZTogXCJUTFwiLCBuYW1lOiBcIlRpbW9yLUxlc3RlXCJ9LFxuICAgIHtjb2RlOiBcIlRHXCIsIG5hbWU6IFwiVG9nb1wifSxcbiAgICB7Y29kZTogXCJUS1wiLCBuYW1lOiBcIlRva2VsYXVcIn0sXG4gICAge2NvZGU6IFwiVE9cIiwgbmFtZTogXCJUb25nYVwifSxcbiAgICB7Y29kZTogXCJUVFwiLCBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIn0sXG4gICAge2NvZGU6IFwiVE5cIiwgbmFtZTogXCJUdW5pc2lhXCJ9LFxuICAgIHtjb2RlOiBcIlRSXCIsIG5hbWU6IFwiVHVya2V5XCJ9LFxuICAgIHtjb2RlOiBcIlRNXCIsIG5hbWU6IFwiVHVya21lbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRDXCIsIG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlRWXCIsIG5hbWU6IFwiVHV2YWx1XCJ9LFxuICAgIHtjb2RlOiBcIlVHXCIsIG5hbWU6IFwiVWdhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIlVBXCIsIG5hbWU6IFwiVWtyYWluZVwifSxcbiAgICB7Y29kZTogXCJBRVwiLCBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCJ9LFxuICAgIHtjb2RlOiBcIkdCXCIsIG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJVU1wiLCBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwifSxcbiAgICB7Y29kZTogXCJVTVwiLCBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJVWVwiLCBuYW1lOiBcIlVydWd1YXlcIn0sXG4gICAge2NvZGU6IFwiVVpcIiwgbmFtZTogXCJVemJla2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlZVXCIsIG5hbWU6IFwiVmFudWF0dVwifSxcbiAgICB7Y29kZTogXCJWRVwiLCBuYW1lOiBcIlZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiVk5cIiwgbmFtZTogXCJWaWV0bmFtXCJ9LFxuICAgIHtjb2RlOiBcIlZHXCIsIG5hbWU6IFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCJ9LFxuICAgIHtjb2RlOiBcIlZJXCIsIG5hbWU6IFwiVmlyZ2luIElzbGFuZHMgKFUuUy4pXCJ9LFxuICAgIHtjb2RlOiBcIldGXCIsIG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIn0sXG4gICAge2NvZGU6IFwiRUhcIiwgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwifSxcbiAgICB7Y29kZTogXCJZRVwiLCBuYW1lOiBcIlllbWVuXCJ9LFxuICAgIHtjb2RlOiBcIlpNXCIsIG5hbWU6IFwiWmFtYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlpXXCIsIG5hbWU6IFwiWmltYmFid2VcIn0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgKiBhcyBhcGlzIGZyb20gXCIuL2FwaXNcIjtcbmltcG9ydCAqIGFzIERPTSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpO1xuXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzbGlrZWNvbnRlbnRcIik7XG5jb25zdCBtYXhUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4Y29udGVudFwiKTtcbmNvbnN0IG1pblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5jb250ZW50XCIpO1xuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYWluY2hhbmNlY29udGVudFwiKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZHNwZWVkY29udGVudFwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eWNvbnRlbnRcIik7XG5jb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlY29udGVudFwiKTtcbmNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0Y29udGVudFwiKTtcblxuY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyZGVzY3JpcHRpb25cIik7XG5jb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRpY29uXCIpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZWFsbFwiKTtcblxuY29uc3QgY2hhbmdlVW5pdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRcIik7XG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGxvY2F0aW9uQ2hvc2VuO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IFwiTGlzYm9uXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImZhaHJlbmhlaXRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvQ2Vsc2l1cyhsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgICAgIGF3YWl0IHNob3dEYXRhKGRhdGEsIFwiwrpDXCIsIFwiS20vSFwiLCBsb2NhdGlvbkNob3Nlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0ZhaHJlbmhlaXQobG9jYXRpb25DaG9zZW4pO1xuXG4gICAgICAgICAgICBhd2FpdCBzaG93RGF0YShkYXRhLCBcIsK6RlwiLCBcIk1waFwiLCBsb2NhdGlvbkNob3Nlbik7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXNlU3dpdGNoVW5pdHMpO1xuXG4gICAgICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVzZVN3aXRjaFVuaXRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXNlU3dpdGNoVW5pdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiB1c2VTd2l0Y2hVbml0cygpIHtcbiAgICAgICAgICAgIHN3aXRjaFVuaXRzKGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlYWxsXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwKSk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNwYXJlbnRcIik7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93RGF0YShkYXRhLCB0ZW1wVW5pdHMsIHNwZWVkVW5pdHMsIGxvY2F0aW9uQ2hvc2VuKSB7XG4gICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnBvcCAqIDEwMCl9JWA7XG5cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcblxuICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgZGF0YS5jdXJyZW50LnN1bnJpc2UsXG4gICAgICAgIGRhdGEudGltZXpvbmVcbiAgICApO1xuICAgIHN1bnNldC50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKGRhdGEuY3VycmVudC5zdW5zZXQsIGRhdGEudGltZXpvbmUpO1xuXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29udmVydFRvVGl0bGVDYXNlKFxuICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgKGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkubG9jYXRpb25OYW1lXG4gICAgfSwgJHsoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5jb3VudHJ5TmFtZX1gO1xuXG4gICAgY3VycmVudEljb24uc3JjID0gRE9NLmdldFdlYXRoZXJJY29uKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuXG4gICAgRE9NLmNoYW5nZUJHSW1hZ2UoZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQsIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuICAgIERPTS5pbXByb3ZlUmVhZGFiaWxpdHkoXG4gICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkLFxuICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uXG4gICAgKTtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIGRhdGEuY3VycmVudC5mZWVsc19saWtlXG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcbiAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5tYXhcbiAgICApfSAke3RlbXBVbml0c31gO1xuICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1pblxuICAgICl9ICR7dGVtcFVuaXRzfWA7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgIE1hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQgKiAzLjYgKiAxMCkgLyAxMFxuICAgIH0gJHtzcGVlZFVuaXRzfWA7XG5cbiAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICBkYXRhLmN1cnJlbnQudGVtcFxuICAgICl9ICR7dGVtcFVuaXRzfWA7XG5cbiAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KGRhdGEuZGFpbHksIGRhdGEudGltZXpvbmUpO1xuICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgdGVtcFVuaXRzKTtcbiAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5LCB0ZW1wVW5pdHMpO1xuXG4gICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoZGF5cywgZGFpbHlJY29ucywgZGFpbHlNYXhUZW1wcywgZGFpbHlNaW5UZW1wcyk7XG5cbiAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoZGF0YS5ob3VybHksIGRhdGEudGltZXpvbmUpO1xuICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhLmhvdXJseSwgdGVtcFVuaXRzKTtcblxuICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3dpdGNoVW5pdHMobG9jYXRpb25DaG9zZW4pIHtcbiAgICBpZiAoY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdFwiKSkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0NlbHNpdXMobG9jYXRpb25DaG9zZW4pO1xuXG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpfSDCukNgO1xuICAgICAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1heCl9IMK6Q2A7XG4gICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWluKX0gwrpDYDtcblxuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQgKiAzLjYgKiAxMCkgLyAxMFxuICAgICAgICB9IEttL0hgO1xuXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXApfSDCukNgO1xuXG4gICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGEuZGFpbHksIFwiwrpDXCIpO1xuICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcblxuICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBkYWlseUljb25zLCBkYWlseU1heFRlbXBzLCBkYWlseU1pblRlbXBzKTtcblxuICAgICAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoZGF0YS5ob3VybHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICBjb25zdCBob3VybHlJY29ucyA9IGNyZWF0ZUhvdXJseUljb25zQXJyYXkoZGF0YS5ob3VybHkpO1xuICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCBcIsK6Q1wiKTtcblxuICAgICAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG5cbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZhaHJlbmhlaXRcIik7XG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggdG8gwrpGXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0YUZhaHJlbmhlaXQgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvRmFocmVuaGVpdChcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuXG4gICAgICAgICk7XG5cbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmN1cnJlbnQuZmVlbHNfbGlrZVxuICAgICAgICApfSDCukZgO1xuICAgICAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5kYWlseVswXS50ZW1wLm1heFxuICAgICAgICApfSDCukZgO1xuICAgICAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5kYWlseVswXS50ZW1wLm1pblxuICAgICAgICApfSDCukZgO1xuXG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhRmFocmVuaGVpdC5jdXJyZW50LndpbmRfc3BlZWQgKiAxMCkgLyAxMFxuICAgICAgICB9IE1waGA7XG5cbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmN1cnJlbnQudGVtcFxuICAgICAgICApfSDCukZgO1xuXG4gICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5kYWlseSxcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LnRpbWV6b25lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YUZhaHJlbmhlaXQuZGFpbHkpO1xuICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhRmFocmVuaGVpdC5kYWlseSwgXCLCukZcIik7XG4gICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGFGYWhyZW5oZWl0LmRhaWx5LCBcIsK6RlwiKTtcblxuICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBkYWlseUljb25zLCBkYWlseU1heFRlbXBzLCBkYWlseU1pblRlbXBzKTtcblxuICAgICAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5ob3VybHksXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC50aW1lem9uZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBob3VybHlJY29ucyA9IGNyZWF0ZUhvdXJseUljb25zQXJyYXkoZGF0YUZhaHJlbmhlaXQuaG91cmx5KTtcbiAgICAgICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhRmFocmVuaGVpdC5ob3VybHksIFwiwrpGXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFocmVuaGVpdFwiKTtcbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byDCukNcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURheXNBcnJheShkYXlzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZERheSA9IGAke2NvbnZlcnRVbml4VG9XZWVrZGF5KFxuICAgICAgICAgICAgZGF5c1tpXS5kdCxcbiAgICAgICAgICAgIHRpbWVab25lXG4gICAgICAgICl9LCAke2NvbnZlcnRVbml4VG9EYXkoZGF5c1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGRheXNBcnJheS5wdXNoKGNvbnZlcnRlZERheSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXlzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChkYXlzW2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgfVxuICAgIHJldHVybiBpY29uc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXREYWlseU1heFRlbXBzKGRheXMsIHVuaXQpIHtcbiAgICBjb25zdCBtYXhUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbWF4VGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoZGF5c1tpXS50ZW1wLm1heCl9ICR7dW5pdH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWluVGVtcHMoZGF5cywgdW5pdCkge1xuICAgIGNvbnN0IG1pblRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtaW5UZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWluKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gbWluVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNBcnJheShob3VycywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBob3Vyc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEhvdXIgPSBgJHtjb252ZXJ0V2l0aG91dE1pbnV0ZXMoaG91cnNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBob3Vyc0FycmF5LnB1c2goY29udmVydGVkSG91cik7XG4gICAgfVxuICAgIHJldHVybiBob3Vyc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlJY29uc0FycmF5KGhvdXJzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goaG91cnNbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseVRlbXBzKGhvdXJzLCB1bml0KSB7XG4gICAgY29uc3QgVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBUZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChob3Vyc1tpXS50ZW1wKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvVGl0bGVDYXNlKHN0cmluZykge1xuICAgIGNvbnN0IGFycmF5T2ZXb3JkcyA9IHN0cmluZy5zcGxpdChcIiBcIik7XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZEFycmF5ID0gW107XG4gICAgYXJyYXlPZldvcmRzLmZvckVhY2goKHdvcmQpID0+XG4gICAgICAgIGNhcGl0YWxpemVkQXJyYXkucHVzaCh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkpXG4gICAgKTtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZWRBcnJheS5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb0hvdXIodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGhvdXIudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFdpdGhvdXRNaW51dGVzKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9EYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb1dlZWtkYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IHdlZWtkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIHdlZWtkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHNlYXJjaFdlYXRoZXIoKTtcbn0pO1xuXG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET00uc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCk7XG5cbmNvbnN0IGRhaWx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcblxuZGFpbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0RhaWx5Rm9yZWNhc3QpO1xuXG5ET00uY3JlYXRlRmlyc3RIb3VybHlEaXZzKCk7XG5ET00uaGlkZUZpcnN0SG91cmx5RGl2cygpO1xuXG5ET00uY3JlYXRlTGFzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuc2VhcmNoV2VhdGhlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9