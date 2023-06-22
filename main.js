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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n    align-content: center;\n    gap: min(3rem, 6.1vh);\n}\n\n.center {\n    height: min(24.5rem, 44vh);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: min(2.5rem, 5.2vh);\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: min(5rem, 10.2vh);\n}\n\ninput {\n    background-color: transparent;\n    border: min(2px, 0.31vh) solid whitesmoke;\n    border-radius: min(5px, 0.8vh);\n    height: min(2rem, 4.1vh);\n    width: min(12.5rem, 26vh);\n    color: white;\n    font-size: min(1.3rem, 2.7vh);\n    outline: 0;\n    padding-left: min(2px, 0.31vh);\n    padding-right: min(1.9rem, 3.9vh);\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: min(5px, 0.57vh);\n    align-self: center;\n    height: min(1.5rem, 3.1vh);\n}\n\n.currentweather {\n    display: flex;\n    gap: min(2rem, 4.1vh);\n}\n\n.separator {\n    background-color: whitesmoke;\n    border: min(2px, 0.41vh) solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: min(104rem, 170vh);\n    height: min(12.5rem, 21vh);\n    display: flex;\n    justify-content: space-evenly;\n    gap: min(2.5rem, 4vh);\n}\n\n.topdiv {\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: min(3.5rem, 5.7vh);\n}\n\n.topwrap {\n    font-size: min(1.25rem, 2.1vh);\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: min(1.5rem, 2.5vh);\n}\n\n.feelslike {\n    position: relative;\n    width: 9.28rem;\n}\n\n/*.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: min(-13px, -1.3vh);\n}*/\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: min(1rem, 1.7vh);\n    width: 9.6rem;\n}\n\n.humidity > img {\n    height: min(3.25rem, 5.3vh);\n    position: relative;\n    top: min(2px, 0.2vh);\n}\n\n.sunrise {\n    gap: min(1rem, 1.7vh);\n    width: 9.46rem;\n}\n\n.sunset {\n    gap: min(1rem, 1.7vh);\n    width: 10.03rem;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: min(4px, 0.5vh);\n}\n\n.windspeed {\n    gap: min(1rem, 1.7vh);\n    width: 12.2rem;\n}\n\n.windspeed > img {\n    height: min(3.6rem, 5.9vh);\n    position: relative;\n    top: min(3px, 0.4vh);\n}\n\n.pop {\n    gap: min(1rem, 1.7vh);\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: min(1rem, 1.7vh);\n    width: 9.84rem;\n}\n\n.maxtemperature {\n    gap: min(1rem, 1.7vh);\n    width: 10.2rem;\n}\n\n.bottom {\n    height: min(12.5rem, 21vh);\n    width: min(104rem, 170vh);\n    display: grid;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice {\n    display: flex;\n    align-items: center;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice > * {\n    border: min(2px, 0.31vh) solid white;\n    border-radius: min(5px, 1vh);\n    padding: min(4px, 0.4vh) min(15px, 1.6vh);\n    font-size: min(1.6rem, 2.7vh);\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: min(8.3rem, 14vh);\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: min(12.75rem, 21vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 2.8vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: min(5px, 1vh);\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: min(3.25rem, 5.3vh);\n}\n\n.dailyweather {\n    display: flex;\n    gap: min(1rem, 2.1vh);\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: min(1.6rem, 2.7vh);\n    gap: min(0.5rem, 1vh);\n    position: relative;\n    bottom: min(2px, 0.22vh);\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: min(7rem, 12.6vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 3.2vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.hourlyicon {\n    height: min(3rem, 6.2vh);\n}\n\n.unit {\n    font-size: min(1.25rem, 2.6vh);\n    font-weight: 500;\n    margin-top: max(-0.75rem, -1.9vh);\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: min(1.5rem, 3.1vh);\n    font-weight: 500;\n    margin-bottom: max(-3.3rem, -8.1vh);\n}\n\n.transparent {\n    visibility: hidden;\n}\n\n.currenticon {\n    align-self: center;\n    height: min(5rem, 10.2vh);\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: min-content min-content min-content;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n    align-content: center;\n    gap: min(3rem, 6.1vh);\n}\n\n.center {\n    height: min(24.5rem, 44vh);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: min(2.5rem, 5.2vh);\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: min(5rem, 10.2vh);\n}\n\ninput {\n    background-color: transparent;\n    border: min(2px, 0.31vh) solid whitesmoke;\n    border-radius: min(5px, 0.8vh);\n    height: min(2rem, 4.1vh);\n    width: min(12.5rem, 26vh);\n    color: white;\n    font-size: min(1.3rem, 2.7vh);\n    outline: 0;\n    padding-left: min(2px, 0.31vh);\n    padding-right: min(1.9rem, 3.9vh);\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: min(5px, 0.57vh);\n    align-self: center;\n    height: min(1.5rem, 3.1vh);\n}\n\n.currentweather {\n    display: flex;\n    gap: min(2rem, 4.1vh);\n}\n\n.separator {\n    background-color: whitesmoke;\n    border: min(2px, 0.41vh) solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: min(104rem, 170vh);\n    height: min(12.5rem, 21vh);\n    display: flex;\n    justify-content: space-evenly;\n    gap: min(2.5rem, 4vh);\n}\n\n.topdiv {\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: min(3.5rem, 5.7vh);\n}\n\n.topwrap {\n    font-size: min(1.25rem, 2.1vh);\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: min(1.5rem, 2.5vh);\n}\n\n.feelslike {\n    position: relative;\n    width: 9.28rem;\n}\n\n/*.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: min(-13px, -1.3vh);\n}*/\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: min(1rem, 1.7vh);\n    width: 9.6rem;\n}\n\n.humidity > img {\n    height: min(3.25rem, 5.3vh);\n    position: relative;\n    top: min(2px, 0.2vh);\n}\n\n.sunrise {\n    gap: min(1rem, 1.7vh);\n    width: 9.46rem;\n}\n\n.sunset {\n    gap: min(1rem, 1.7vh);\n    width: 10.03rem;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: min(4px, 0.5vh);\n}\n\n.windspeed {\n    gap: min(1rem, 1.7vh);\n    width: 12.2rem;\n}\n\n.windspeed > img {\n    height: min(3.6rem, 5.9vh);\n    position: relative;\n    top: min(3px, 0.4vh);\n}\n\n.pop {\n    gap: min(1rem, 1.7vh);\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: min(1rem, 1.7vh);\n    width: 9.84rem;\n}\n\n.maxtemperature {\n    gap: min(1rem, 1.7vh);\n    width: 10.2rem;\n}\n\n.bottom {\n    height: min(12.5rem, 21vh);\n    width: min(104rem, 170vh);\n    display: grid;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice {\n    display: flex;\n    align-items: center;\n    gap: min(1rem, 2.1vh);\n}\n\n.timechoice > * {\n    border: min(2px, 0.31vh) solid white;\n    border-radius: min(5px, 1vh);\n    padding: min(4px, 0.4vh) min(15px, 1.6vh);\n    font-size: min(1.6rem, 2.7vh);\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: min(8.3rem, 14vh);\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: min(12.75rem, 21vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 2.8vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: min(5px, 1vh);\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: min(3.25rem, 5.3vh);\n}\n\n.dailyweather {\n    display: flex;\n    gap: min(1rem, 2.1vh);\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: min(1.6rem, 2.7vh);\n    gap: min(0.5rem, 1vh);\n    position: relative;\n    bottom: min(2px, 0.22vh);\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: min(7rem, 12.6vh);\n    font-weight: 600;\n    color: white;\n    font-size: min(1.75rem, 3.2vh);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: max(-4.25rem, -7.25vh);\n    height: min(3.1rem, 5.6vh);\n    align-self: center;\n}\n\n.hourlyicon {\n    height: min(3rem, 6.2vh);\n}\n\n.unit {\n    font-size: min(1.25rem, 2.6vh);\n    font-weight: 500;\n    margin-top: max(-0.75rem, -1.9vh);\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: min(1.5rem, 3.1vh);\n    font-weight: 500;\n    margin-bottom: max(-3.3rem, -8.1vh);\n}\n\n.transparent {\n    visibility: hidden;\n}\n\n.currenticon {\n    align-self: center;\n    height: min(5rem, 10.2vh);\n}\n"],"sourceRoot":""}]);
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
            "url(./assets/Images/johannes-plenio-ESL1rIs9j48-unsplash.jpg)";
    } else if (code >= 300 && code < 400) {
        container.style.backgroundImage =
            "url(./assets/Images/roman-synkevych-qPvBmSvmohs-unsplash.jpg)";
    } else if (code >= 500 && code < 600) {
        container.style.backgroundImage =
            "url(./assets/Images/rodolfo-cuadros-8wKpFqxDJT0-unsplash.jpg)";
    } else if (code >= 600 && code < 700) {
        container.style.backgroundImage =
            "url(./assets/Images/the-nigmatic-RDh9V-c4iSI-unsplash\\ \\(1\\).jpg)";
    } else if (code > 800 && code < 900) {
        container.style.backgroundImage =
            "url(./assets/Images/nick-fewings-ZtDiJzokZi0-unsplash.jpg)";
    } else if (code === 701 || code === 741) {
        container.style.backgroundImage =
            "url(./assets/Images/dave-hoefler-od287vQyufw-unsplash.jpg)";
    } else if (
        code === 711 ||
        code === 721 ||
        code === 731 ||
        code === 751 ||
        code === 761 ||
        code === 762
    ) {
        container.style.backgroundImage =
            "url(./assets/Images/chris-leboutillier-be8mnFXzBgo-unsplash.jpg)";
    } else if (code === 771) {
        container.style.backgroundImage =
            "url(./assets/Images/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg)";
    } else if (code === 781) {
        container.style.backgroundImage =
            "url(./assets/Images/espen-bierud-W43gm6TD118-unsplash.jpg)";
    } else if (icon === "01n") {
        container.style.backgroundImage =
            "url(./assets/Images/ryan-hutton-Jztmx9yqjBw-unsplash.jpg)";
    } else {
        container.style.backgroundImage =
            "url(./assets/Images/william-bout-RPzWI0rolS8-unsplash.jpg)";
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
    hourlyIcon.src = "./assets/Images/cloud-drizzle.svg";
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
    rightArrow.setAttribute("src", "./assets/Images/arrow-right-circle.svg");
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
    leftArrow.setAttribute("src", "./assets/Images/arrow-left-circle.svg");
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
    if (code === "01d") return "./assets/Images/sun.svg";
    if (code === "01n") return "./assets/Images/moon.svg";
    if (code === "02d") return "./assets/Images/cloud-sun.svg";
    if (code === "02n") return "./assets/Images/cloud-moon.svg";
    if (code === "03d" || code === "03n") return "./assets/Images/cloud (1).svg";
    if (code === "04d" || code === "04n") return "./assets/Images/clouds.svg";
    if (code === "09d" || code === "09n" || code === "10d" || code === "10n")
        return "./assets/Images/cloud-rain (1).svg";
    if (code === "11d" || code === "11n")
        return "./assets/Images/cloud-lightning (2).svg";
    if (code === "13d" || code === "13n") return "./assets/Images/snow.svg";
    if (code === "50d" || code === "50n") return "./assets/Images/cloud-fog.svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlB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QUFtRDtBQUN4RCxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDRDQUE0QztBQUNqRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHVD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LFNBQVM7QUFDN0IsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0IsMkJBQTJCLDJCQUEyQixFQUFFLEtBQUs7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsdUNBQXVDLHdEQUEwQjs7QUFFakU7O0FBRUEsc0NBQXNDLHVEQUF5Qjs7QUFFL0QsdURBQXlCO0FBQ3pCLHFEQUF1Qjs7QUFFdkIsc0RBQXdCO0FBQ3hCLG9EQUFzQjs7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDNyZW0sIDYuMXZoKTtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGhlaWdodDogbWluKDI0LjVyZW0sIDQ0dmgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMi41cmVtLCA1LjJ2aCk7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogbWluKDVyZW0sIDEwLjJ2aCk7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbWluKDJweCwgMC4zMXZoKSBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oNXB4LCAwLjh2aCk7XFxuICAgIGhlaWdodDogbWluKDJyZW0sIDQuMXZoKTtcXG4gICAgd2lkdGg6IG1pbigxMi41cmVtLCAyNnZoKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjNyZW0sIDIuN3ZoKTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMnB4LCAwLjMxdmgpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oMS45cmVtLCAzLjl2aCk7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiBtaW4oNXB4LCAwLjU3dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDEuNXJlbSwgMy4xdmgpO1xcbn1cXG5cXG4uY3VycmVudHdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IG1pbigycmVtLCA0LjF2aCk7XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IG1pbigycHgsIDAuNDF2aCkgc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IG1pbigxMDRyZW0sIDE3MHZoKTtcXG4gICAgaGVpZ2h0OiBtaW4oMTIuNXJlbSwgMjF2aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IG1pbigyLjVyZW0sIDR2aCk7XFxufVxcblxcbi50b3BkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiBtaW4oMy41cmVtLCA1Ljd2aCk7XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiBtaW4oMS4yNXJlbSwgMi4xdmgpO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMi41dmgpO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogOS4yOHJlbTtcXG59XFxuXFxuLyouZmVlbHNsaWtlID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IGltZyB7XFxuICAgIGxlZnQ6IG1pbigtMTNweCwgLTEuM3ZoKTtcXG59Ki9cXG5cXG4uZmVlbHNsaWtlID4gLnRvcHdyYXAge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS42cmVtO1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IG1pbigzLjI1cmVtLCA1LjN2aCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiBtaW4oMnB4LCAwLjJ2aCk7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS40NnJlbTtcXG59XFxuXFxuLnN1bnNldCB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDEwLjAzcmVtO1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogbWluKDRweCwgMC41dmgpO1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogMTIuMnJlbTtcXG59XFxuXFxuLndpbmRzcGVlZCA+IGltZyB7XFxuICAgIGhlaWdodDogbWluKDMuNnJlbSwgNS45dmgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogbWluKDNweCwgMC40dmgpO1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuXFxuLm1pbnRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogOS44NHJlbTtcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMS43dmgpO1xcbiAgICB3aWR0aDogMTAuMnJlbTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGhlaWdodDogbWluKDEyLjVyZW0sIDIxdmgpO1xcbiAgICB3aWR0aDogbWluKDEwNHJlbSwgMTcwdmgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IG1pbigxcmVtLCAyLjF2aCk7XFxufVxcblxcbi50aW1lY2hvaWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMi4xdmgpO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IG1pbigycHgsIDAuMzF2aCkgc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IG1pbig1cHgsIDF2aCk7XFxuICAgIHBhZGRpbmc6IG1pbig0cHgsIDAuNHZoKSBtaW4oMTVweCwgMS42dmgpO1xcbiAgICBmb250LXNpemU6IG1pbigxLjZyZW0sIDIuN3ZoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiBtaW4oOC4zcmVtLCAxNHZoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYWlseWRpdnMge1xcbiAgICB3aWR0aDogbWluKDEyLjc1cmVtLCAyMXZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjc1cmVtLCAyLjh2aCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oNXB4LCAxdmgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiBtaW4oMy4yNXJlbSwgNS4zdmgpO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMi4xdmgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNnJlbSwgMi43dmgpO1xcbiAgICBnYXA6IG1pbigwLjVyZW0sIDF2aCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiBtaW4oMnB4LCAwLjIydmgpO1xcbn1cXG5cXG4uZmlyc3Rob3VybHlkaXZzLFxcbi5sYXN0aG91cmx5ZGl2cyB7XFxuICAgIHdpZHRoOiBtaW4oN3JlbSwgMTIuNnZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IG1pbigxLjc1cmVtLCAzLjJ2aCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IG1heCgtNC4yNXJlbSwgLTcuMjV2aCk7XFxuICAgIGhlaWdodDogbWluKDMuMXJlbSwgNS42dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IG1heCgtNC4yNXJlbSwgLTcuMjV2aCk7XFxuICAgIGhlaWdodDogbWluKDMuMXJlbSwgNS42dmgpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlpY29uIHtcXG4gICAgaGVpZ2h0OiBtaW4oM3JlbSwgNi4ydmgpO1xcbn1cXG5cXG4udW5pdCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuMjVyZW0sIDIuNnZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogbWF4KC0wLjc1cmVtLCAtMS45dmgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuNXJlbSwgMy4xdmgpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiBtYXgoLTMuM3JlbSwgLTguMXZoKTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY3VycmVudGljb24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWluKDVyZW0sIDEwLjJ2aCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYix1REFBdUQ7SUFDdkQscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFB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QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IG1pbigzcmVtLCA2LjF2aCk7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IG1pbigyNC41cmVtLCA0NHZoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIuNXJlbSwgNS4ydmgpO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IG1pbig1cmVtLCAxMC4ydmgpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG1pbigycHgsIDAuMzF2aCkgc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDVweCwgMC44dmgpO1xcbiAgICBoZWlnaHQ6IG1pbigycmVtLCA0LjF2aCk7XFxuICAgIHdpZHRoOiBtaW4oMTIuNXJlbSwgMjZ2aCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMS4zcmVtLCAyLjd2aCk7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogbWluKDJweCwgMC4zMXZoKTtcXG4gICAgcGFkZGluZy1yaWdodDogbWluKDEuOXJlbSwgMy45dmgpO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogbWluKDVweCwgMC41N3ZoKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbigxLjVyZW0sIDMuMXZoKTtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiBtaW4oMnJlbSwgNC4xdmgpO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiBtaW4oMnB4LCAwLjQxdmgpIHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiBtaW4oMTA0cmVtLCAxNzB2aCk7XFxuICAgIGhlaWdodDogbWluKDEyLjVyZW0sIDIxdmgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiBtaW4oMi41cmVtLCA0dmgpO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi50b3BpY29ucyB7XFxuICAgIGhlaWdodDogbWluKDMuNXJlbSwgNS43dmgpO1xcbn1cXG5cXG4udG9wd3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuMjVyZW0sIDIuMXZoKTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvcGNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IG1pbigxLjVyZW0sIDIuNXZoKTtcXG59XFxuXFxuLmZlZWxzbGlrZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDkuMjhyZW07XFxufVxcblxcbi8qLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiBtaW4oLTEzcHgsIC0xLjN2aCk7XFxufSovXFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDkuNnJlbTtcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiBtaW4oMy4yNXJlbSwgNS4zdmgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogbWluKDJweCwgMC4ydmgpO1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDkuNDZyZW07XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IG1pbigxcmVtLCAxLjd2aCk7XFxuICAgIHdpZHRoOiAxMC4wM3JlbTtcXG59XFxuXFxuLnN1bnJpc2VpY29uLFxcbi5zdW5zZXRpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IG1pbig0cHgsIDAuNXZoKTtcXG59XFxuXFxuLndpbmRzcGVlZCB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDEyLjJyZW07XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IG1pbigzLjZyZW0sIDUuOXZoKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IG1pbigzcHgsIDAuNHZoKTtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDkuODRyZW07XFxufVxcblxcbi5tYXh0ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogbWluKDFyZW0sIDEuN3ZoKTtcXG4gICAgd2lkdGg6IDEwLjJyZW07XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBoZWlnaHQ6IG1pbigxMi41cmVtLCAyMXZoKTtcXG4gICAgd2lkdGg6IG1pbigxMDRyZW0sIDE3MHZoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiBtaW4oMXJlbSwgMi4xdmgpO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogbWluKDFyZW0sIDIuMXZoKTtcXG59XFxuXFxuLnRpbWVjaG9pY2UgPiAqIHtcXG4gICAgYm9yZGVyOiBtaW4oMnB4LCAwLjMxdmgpIHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oNXB4LCAxdmgpO1xcbiAgICBwYWRkaW5nOiBtaW4oNHB4LCAwLjR2aCkgbWluKDE1cHgsIDEuNnZoKTtcXG4gICAgZm9udC1zaXplOiBtaW4oMS42cmVtLCAyLjd2aCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogbWluKDguM3JlbSwgMTR2aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IG1pbigxMi43NXJlbSwgMjF2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMS43NXJlbSwgMi44dmgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogbWluKDVweCwgMXZoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogbWluKDMuMjVyZW0sIDUuM3ZoKTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogbWluKDFyZW0sIDIuMXZoKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IG1pbigxLjZyZW0sIDIuN3ZoKTtcXG4gICAgZ2FwOiBtaW4oMC41cmVtLCAxdmgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogbWluKDJweCwgMC4yMnZoKTtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogbWluKDdyZW0sIDEyLjZ2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMS43NXJlbSwgMy4ydmgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGVhbGwgPiAqIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiBtYXgoLTQuMjVyZW0sIC03LjI1dmgpO1xcbiAgICBoZWlnaHQ6IG1pbigzLjFyZW0sIDUuNnZoKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBtYXgoLTQuMjVyZW0sIC03LjI1dmgpO1xcbiAgICBoZWlnaHQ6IG1pbigzLjFyZW0sIDUuNnZoKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogbWluKDNyZW0sIDYuMnZoKTtcXG59XFxuXFxuLnVuaXQge1xcbiAgICBmb250LXNpemU6IG1pbigxLjI1cmVtLCAyLjZ2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IG1heCgtMC43NXJlbSwgLTEuOXZoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBmb250LXNpemU6IG1pbigxLjVyZW0sIDMuMXZoKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogbWF4KC0zLjNyZW0sIC04LjF2aCk7XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmN1cnJlbnRpY29uIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IG1pbig1cmVtLCAxMC4ydmgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy90aGVybW9tZXRlci1oYWxmLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvdGhlcm1vbWV0ZXItc3VuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvdGhlcm1vbWV0ZXItc25vdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3VtYnJlbGxhLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvd2luZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL21vaXN0dXJlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvc3VucmlzZSAoMykuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW5zZXQgKDEpLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvc3VuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWRyaXp6bGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbGlnaHRuaW5nLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXJhaW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtc25vdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW4gKDEpLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzExX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE0X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMTVfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gICAgPGhlYWQ+XFxuICAgICAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICAgICAgPHRpdGxlPldlYXRoZXIgQXBwPC90aXRsZT5cXG4gICAgPC9oZWFkPlxcbiAgICA8Ym9keT5cXG4gICAgICAgIDxkaXYgaWQ9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmVlbHNsaWtlIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVlbHMgTGlrZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBmZWVsc2xpa2Vjb250ZW50XFxcIj4zMiDCukM8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1heHRlbXBlcmF0dXJlIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWF4aW11bTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBtYXhjb250ZW50XFxcIj4zNyDCukM8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1pbnRlbXBlcmF0dXJlIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWluaW11bTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBtaW5jb250ZW50XFxcIj4yOSDCukM8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvcCB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5jZSBPZiBSYWluPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHJhaW5jaGFuY2Vjb250ZW50XFxcIj4xMiU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpbmRzcGVlZCB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcInRvcGljb25zXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2luZCBTcGVlZDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCB3aW5kc3BlZWRjb250ZW50XFxcIj4yNiBLbS9IPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJodW1pZGl0eSB0b3BkaXZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRvcGljb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkh1bWlkaXR5PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IGh1bWlkaXR5Y29udGVudFxcXCI+MjIlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW5yaXNlIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnMgc3VucmlzZWljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3VucmlzZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBzdW5yaXNlY29udGVudFxcXCI+NjoyMiBBTTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Vuc2V0IHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnMgc3Vuc2V0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdW5zZXQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgc3Vuc2V0Y29udGVudFxcXCI+OToxMiBQTTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWF0aGVyZGVzY3JpcHRpb25cXFwiPkNsZWFyIFNreTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZW1wZXJhdHVyZVxcXCI+MzEgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXBhcmF0b3JcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiY3VycmVudGljb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fICsgXCJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2NhdGlvblxcXCI+TGlzYm9uLCBQb3J0dWdhbDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJsb2NhdGlvblxcXCIgaWQ9XFxcImxvY2F0aW9uaW5wdXRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzlfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcInNlYXJjaCBpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidW5pdFxcXCI+U3dpdGNoIHRvIMK6RjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvciB0cmFuc3BhcmVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSB1c2UgdGhpcyBmb3JtYXQ6IFxcXCJDaXR5LCBDb3VudHJ5XFxcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b21cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lY2hvaWNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRhaWx5XFxcIj5EYWlseTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaG91cmx5XFxcIj5Ib3VybHk8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+U2F0dXJkYXksIDEzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlN1bmRheSwgMTQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTFfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+TW9uZGF5LCAxNTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5UdWVzZGF5LCAxNjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xM19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5XZWRuZXNkYXksIDE3PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE0X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlRodXJzZGF5LCAxODwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xNV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5GcmlkYXksIDE5PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEwX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJHSW1hZ2UoY29kZSwgaWNvbikge1xuICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL2pvaGFubmVzLXBsZW5pby1FU0wxcklzOWo0OC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDMwMCAmJiBjb2RlIDwgNDAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDUwMCAmJiBjb2RlIDwgNjAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL3JvZG9sZm8tY3VhZHJvcy04d0twRnF4REpUMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDYwMCAmJiBjb2RlIDwgNzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL3RoZS1uaWdtYXRpYy1SRGg5Vi1jNGlTSS11bnNwbGFzaFxcXFwgXFxcXCgxXFxcXCkuanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+IDgwMCAmJiBjb2RlIDwgOTAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3MDEgfHwgY29kZSA9PT0gNzQxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL2RhdmUtaG9lZmxlci1vZDI4N3ZReXVmdy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgY29kZSA9PT0gNzExIHx8XG4gICAgICAgIGNvZGUgPT09IDcyMSB8fFxuICAgICAgICBjb2RlID09PSA3MzEgfHxcbiAgICAgICAgY29kZSA9PT0gNzUxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MSB8fFxuICAgICAgICBjb2RlID09PSA3NjJcbiAgICApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguL2Fzc2V0cy9JbWFnZXMvY2hyaXMtbGVib3V0aWxsaWVyLWJlOG1uRlh6QmdvLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc3MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4vYXNzZXRzL0ltYWdlcy9raGFta2VvLXZpbGF5c2luZy1XdHdTc3F3WWxBMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3ODEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguL2Fzc2V0cy9JbWFnZXMvZXNwZW4tYmllcnVkLVc0M2dtNlREMTE4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGljb24gPT09IFwiMDFuXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguL2Fzc2V0cy9JbWFnZXMvcnlhbi1odXR0b24tSnp0bXg5eXFqQnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi9hc3NldHMvSW1hZ2VzL3dpbGxpYW0tYm91dC1SUHpXSTByb2xTOC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wcm92ZVJlYWRhYmlsaXR5KGNvZGUsIGljb24pIHtcbiAgICBpZiAoY29kZSA+PSA1MDAgJiYgY29kZSA8IDYwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNDkpXCI7XG4gICAgfSBlbHNlIGlmIChpY29uID09PSBcIjAxblwiKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40KVwiO1xuICAgIH0gZWxzZSBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbn1cblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseWRpdnNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUb0hvdXJseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0ID4gKlwiKTtcbiAgICBmb3JlY2FzdENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICBjcmVhdGVIb3VybHlEaXYoXCJmaXJzdGhvdXJseWRpdnNcIik7XG4gICAgfVxuICAgIGNyZWF0ZVJpZ2h0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5RGl2KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VybHlEaXYpO1xuXG4gICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcbiAgICBob3VyLnRleHRDb250ZW50ID0gXCIxMiBBLk0uXCI7XG4gICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXIpO1xuXG4gICAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICBob3VybHlJY29uLnNyYyA9IFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkLWRyaXp6bGUuc3ZnXCI7XG4gICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJseVRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJob3VybHl0ZW1wZXJhdHVyZVwiKTtcbiAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDAgwrpDXCI7XG4gICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRBcnJvdygpIHtcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoXCJyaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2Fzc2V0cy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY3JlYXRlSG91cmx5RGl2KFwibGFzdGhvdXJseWRpdnNcIik7XG4gICAgfVxuICAgIGNyZWF0ZUxlZnRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vYXNzZXRzL0ltYWdlcy9hcnJvdy1sZWZ0LWNpcmNsZS5zdmdcIik7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbn1cblxuZnVuY3Rpb24gc2hvd0xhc3RIb3VybHlEaXZzKCkge1xuICAgIGhpZGVGaXJzdEhvdXJseURpdnMoKTtcblxuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGlmICghbGFzdEhvdXJseURpdnMpIGNyZWF0ZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgZWxzZSB1bmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0ZpcnN0SG91cmx5RGl2cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBoaWRlTGFzdEhvdXJseURpdnMoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZnVuY3Rpb24gdW5oaWRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgbGFzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9EYWlseUZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0ID4gKlwiKTtcbiAgICBmb3JlY2FzdENoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG5cbiAgICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGV4dENvbnRlbnQodGV4dCkge1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBcIjAxZFwiKSByZXR1cm4gXCIuL2Fzc2V0cy9JbWFnZXMvc3VuLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAxblwiKSByZXR1cm4gXCIuL2Fzc2V0cy9JbWFnZXMvbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMmRcIikgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkLXN1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMm5cIikgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkLW1vb24uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDNkXCIgfHwgY29kZSA9PT0gXCIwM25cIikgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSByZXR1cm4gXCIuL2Fzc2V0cy9JbWFnZXMvY2xvdWRzLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKVxuICAgICAgICByZXR1cm4gXCIuL2Fzc2V0cy9JbWFnZXMvY2xvdWQtcmFpbiAoMSkuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTFkXCIgfHwgY29kZSA9PT0gXCIxMW5cIilcbiAgICAgICAgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZyAoMikuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTNkXCIgfHwgY29kZSA9PT0gXCIxM25cIikgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL3Nub3cuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiNTBkXCIgfHwgY29kZSA9PT0gXCI1MG5cIikgcmV0dXJuIFwiLi9hc3NldHMvSW1hZ2VzL2Nsb3VkLWZvZy5zdmdcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURhaWx5Rm9yZWNhc3QoZGF5cywgY29kZXMsIG1heFRlbXBzLCBtaW5UZW1wcykge1xuICAgIGNvbnN0IGRhaWx5RGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdGljb25cIik7XG4gICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RtYXhcIik7XG4gICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RtaW5cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBkYWlseURhdGVzW2ldLnRleHRDb250ZW50ID0gZGF5c1tpXTtcblxuICAgICAgICBkYWlseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGRhaWx5TWF4VGVtcHNbaV0udGV4dENvbnRlbnQgPSBtYXhUZW1wc1tpXTtcblxuICAgICAgICBkYWlseU1pblRlbXBzW2ldLnRleHRDb250ZW50ID0gbWluVGVtcHNbaV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGNvZGVzLCB0ZW1wcykge1xuICAgIGNvbnN0IGhvdXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91clwiKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHlpY29uXCIpO1xuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHl0ZW1wZXJhdHVyZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBob3VyRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBob3Vyc1tpXTtcblxuICAgICAgICBob3VybHlGb3JlY2FzdEljb25zW2ldLnNyYyA9IGdldFdlYXRoZXJJY29uKGNvZGVzW2ldKTtcblxuICAgICAgICBob3VybHlUZW1wc1tpXS50ZXh0Q29udGVudCA9IHRlbXBzW2ldO1xuICAgIH1cbn1cbiIsImNvbnN0IGtleSA9IFwiOWIyZWNiYTc1M2EyZDBiNTAxYjE2YmUzNDUyNDY5ZmZcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgICAge21vZGU6IFwiY29yc1wifVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHtsYXQ6IGRhdGFbMF0ubGF0LCBsb246IGRhdGFbMF0ubG9ufTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mb0NlbHNpdXMobG9jYXRpb24pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpY2BcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mb0ZhaHJlbmhlaXQobG9jYXRpb24pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mYXBwaWQ9JHtrZXl9JnVuaXRzPWltcGVyaWFsYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZShsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkYXRhWzBdLm5hbWU7XG4gICAgbGV0IGNvdW50cnlOYW1lID0gZGF0YVswXS5jb3VudHJ5O1xuXG4gICAgY291bnRyeUxpc3QuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeS5jb2RlID09PSBjb3VudHJ5TmFtZSkgY291bnRyeU5hbWUgPSBjb3VudHJ5Lm5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2xvY2F0aW9uTmFtZSwgY291bnRyeU5hbWV9O1xufVxuXG5jb25zdCBjb3VudHJ5TGlzdCA9IFtcbiAgICB7Y29kZTogXCJBRlwiLCBuYW1lOiBcIkFmZ2hhbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkFYXCIsIG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQUxcIiwgbmFtZTogXCJBbGJhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkRaXCIsIG5hbWU6IFwiQWxnZXJpYVwifSxcbiAgICB7Y29kZTogXCJBU1wiLCBuYW1lOiBcIkFtZXJpY2FuIFNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIkFEXCIsIG5hbWU6IFwiQW5kb3JyYVwifSxcbiAgICB7Y29kZTogXCJBT1wiLCBuYW1lOiBcIkFuZ29sYVwifSxcbiAgICB7Y29kZTogXCJBSVwiLCBuYW1lOiBcIkFuZ3VpbGxhXCJ9LFxuICAgIHtjb2RlOiBcIkFRXCIsIG5hbWU6IFwiQW50YXJjdGljYVwifSxcbiAgICB7Y29kZTogXCJBR1wiLCBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIn0sXG4gICAge2NvZGU6IFwiQVJcIiwgbmFtZTogXCJBcmdlbnRpbmFcIn0sXG4gICAge2NvZGU6IFwiQU1cIiwgbmFtZTogXCJBcm1lbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFXXCIsIG5hbWU6IFwiQXJ1YmFcIn0sXG4gICAge2NvZGU6IFwiQVVcIiwgbmFtZTogXCJBdXN0cmFsaWFcIn0sXG4gICAge2NvZGU6IFwiQVRcIiwgbmFtZTogXCJBdXN0cmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFaXCIsIG5hbWU6IFwiQXplcmJhaWphblwifSxcbiAgICB7Y29kZTogXCJCU1wiLCBuYW1lOiBcIkJhaGFtYXNcIn0sXG4gICAge2NvZGU6IFwiQkhcIiwgbmFtZTogXCJCYWhyYWluXCJ9LFxuICAgIHtjb2RlOiBcIkJEXCIsIG5hbWU6IFwiQmFuZ2xhZGVzaFwifSxcbiAgICB7Y29kZTogXCJCQlwiLCBuYW1lOiBcIkJhcmJhZG9zXCJ9LFxuICAgIHtjb2RlOiBcIkJZXCIsIG5hbWU6IFwiQmVsYXJ1c1wifSxcbiAgICB7Y29kZTogXCJCRVwiLCBuYW1lOiBcIkJlbGdpdW1cIn0sXG4gICAge2NvZGU6IFwiQlpcIiwgbmFtZTogXCJCZWxpemVcIn0sXG4gICAge2NvZGU6IFwiQkpcIiwgbmFtZTogXCJCZW5pblwifSxcbiAgICB7Y29kZTogXCJCTVwiLCBuYW1lOiBcIkJlcm11ZGFcIn0sXG4gICAge2NvZGU6IFwiQlRcIiwgbmFtZTogXCJCaHV0YW5cIn0sXG4gICAge2NvZGU6IFwiQk9cIiwgbmFtZTogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwifSxcbiAgICB7Y29kZTogXCJCUVwiLCBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCJ9LFxuICAgIHtjb2RlOiBcIkJBXCIsIG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwifSxcbiAgICB7Y29kZTogXCJCV1wiLCBuYW1lOiBcIkJvdHN3YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJWXCIsIG5hbWU6IFwiQm91dmV0IElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJCUlwiLCBuYW1lOiBcIkJyYXppbFwifSxcbiAgICB7Y29kZTogXCJJT1wiLCBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwifSxcbiAgICB7Y29kZTogXCJCTlwiLCBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCJ9LFxuICAgIHtjb2RlOiBcIkJHXCIsIG5hbWU6IFwiQnVsZ2FyaWFcIn0sXG4gICAge2NvZGU6IFwiQkZcIiwgbmFtZTogXCJCdXJraW5hIEZhc29cIn0sXG4gICAge2NvZGU6IFwiQklcIiwgbmFtZTogXCJCdXJ1bmRpXCJ9LFxuICAgIHtjb2RlOiBcIkNWXCIsIG5hbWU6IFwiQ2FibyBWZXJkZVwifSxcbiAgICB7Y29kZTogXCJLSFwiLCBuYW1lOiBcIkNhbWJvZGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNNXCIsIG5hbWU6IFwiQ2FtZXJvb25cIn0sXG4gICAge2NvZGU6IFwiQ0FcIiwgbmFtZTogXCJDYW5hZGFcIn0sXG4gICAge2NvZGU6IFwiS1lcIiwgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDRlwiLCBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJURFwiLCBuYW1lOiBcIkNoYWRcIn0sXG4gICAge2NvZGU6IFwiQ0xcIiwgbmFtZTogXCJDaGlsZVwifSxcbiAgICB7Y29kZTogXCJDTlwiLCBuYW1lOiBcIkNoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIkNYXCIsIG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJDQ1wiLCBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNPXCIsIG5hbWU6IFwiQ29sb21iaWFcIn0sXG4gICAge2NvZGU6IFwiS01cIiwgbmFtZTogXCJDb21vcm9zXCJ9LFxuICAgIHtjb2RlOiBcIkNHXCIsIG5hbWU6IFwiQ29uZ29cIn0sXG4gICAge2NvZGU6IFwiQ0RcIiwgbmFtZTogXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJ9LFxuICAgIHtjb2RlOiBcIkNLXCIsIG5hbWU6IFwiQ29vayBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNSXCIsIG5hbWU6IFwiQ29zdGEgUmljYVwifSxcbiAgICB7Y29kZTogXCJDSVwiLCBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCJ9LFxuICAgIHtjb2RlOiBcIkhSXCIsIG5hbWU6IFwiQ3JvYXRpYVwifSxcbiAgICB7Y29kZTogXCJDVVwiLCBuYW1lOiBcIkN1YmFcIn0sXG4gICAge2NvZGU6IFwiQ1dcIiwgbmFtZTogXCJDdXJhw6dhb1wifSxcbiAgICB7Y29kZTogXCJDWVwiLCBuYW1lOiBcIkN5cHJ1c1wifSxcbiAgICB7Y29kZTogXCJDWlwiLCBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkRLXCIsIG5hbWU6IFwiRGVubWFya1wifSxcbiAgICB7Y29kZTogXCJESlwiLCBuYW1lOiBcIkRqaWJvdXRpXCJ9LFxuICAgIHtjb2RlOiBcIkRNXCIsIG5hbWU6IFwiRG9taW5pY2FcIn0sXG4gICAge2NvZGU6IFwiRE9cIiwgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiRUNcIiwgbmFtZTogXCJFY3VhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkVHXCIsIG5hbWU6IFwiRWd5cHRcIn0sXG4gICAge2NvZGU6IFwiU1ZcIiwgbmFtZTogXCJFbCBTYWx2YWRvclwifSxcbiAgICB7Y29kZTogXCJHUVwiLCBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVSXCIsIG5hbWU6IFwiRXJpdHJlYVwifSxcbiAgICB7Y29kZTogXCJFRVwiLCBuYW1lOiBcIkVzdG9uaWFcIn0sXG4gICAge2NvZGU6IFwiRVRcIiwgbmFtZTogXCJFdGhpb3BpYVwifSxcbiAgICB7Y29kZTogXCJGS1wiLCBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwifSxcbiAgICB7Y29kZTogXCJGT1wiLCBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiRkpcIiwgbmFtZTogXCJGaWppIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiRklcIiwgbmFtZTogXCJGaW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkZSXCIsIG5hbWU6IFwiRnJhbmNlXCJ9LFxuICAgIHtjb2RlOiBcIkdGXCIsIG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwifSxcbiAgICB7Y29kZTogXCJQRlwiLCBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIn0sXG4gICAge2NvZGU6IFwiVEZcIiwgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIn0sXG4gICAge2NvZGU6IFwiR0FcIiwgbmFtZTogXCJHYWJvblwifSxcbiAgICB7Y29kZTogXCJHTVwiLCBuYW1lOiBcIkdhbWJpYVwifSxcbiAgICB7Y29kZTogXCJHRVwiLCBuYW1lOiBcIkdlb3JnaWFcIn0sXG4gICAge2NvZGU6IFwiREVcIiwgbmFtZTogXCJHZXJtYW55XCJ9LFxuICAgIHtjb2RlOiBcIkdIXCIsIG5hbWU6IFwiR2hhbmFcIn0sXG4gICAge2NvZGU6IFwiR0lcIiwgbmFtZTogXCJHaWJyYWx0YXJcIn0sXG4gICAge2NvZGU6IFwiR1JcIiwgbmFtZTogXCJHcmVlY2VcIn0sXG4gICAge2NvZGU6IFwiR0xcIiwgbmFtZTogXCJHcmVlbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiR0RcIiwgbmFtZTogXCJHcmVuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIkdQXCIsIG5hbWU6IFwiR3VhZGVsb3VwZVwifSxcbiAgICB7Y29kZTogXCJHVVwiLCBuYW1lOiBcIkd1YW1cIn0sXG4gICAge2NvZGU6IFwiR1RcIiwgbmFtZTogXCJHdWF0ZW1hbGFcIn0sXG4gICAge2NvZGU6IFwiR0dcIiwgbmFtZTogXCJHdWVybnNleVwifSxcbiAgICB7Y29kZTogXCJHTlwiLCBuYW1lOiBcIkd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJHV1wiLCBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIn0sXG4gICAge2NvZGU6IFwiR1lcIiwgbmFtZTogXCJHdXlhbmFcIn0sXG4gICAge2NvZGU6IFwiSFRcIiwgbmFtZTogXCJIYWl0aVwifSxcbiAgICB7Y29kZTogXCJITVwiLCBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJWQVwiLCBuYW1lOiBcIkhvbHkgU2VlXCJ9LFxuICAgIHtjb2RlOiBcIkhOXCIsIG5hbWU6IFwiSG9uZHVyYXNcIn0sXG4gICAge2NvZGU6IFwiSEtcIiwgbmFtZTogXCJIb25nIEtvbmdcIn0sXG4gICAge2NvZGU6IFwiSFVcIiwgbmFtZTogXCJIdW5nYXJ5XCJ9LFxuICAgIHtjb2RlOiBcIklTXCIsIG5hbWU6IFwiSWNlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTlwiLCBuYW1lOiBcIkluZGlhXCJ9LFxuICAgIHtjb2RlOiBcIklEXCIsIG5hbWU6IFwiSW5kb25lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIklSXCIsIG5hbWU6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiSVFcIiwgbmFtZTogXCJJcmFxXCJ9LFxuICAgIHtjb2RlOiBcIklFXCIsIG5hbWU6IFwiSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTVwiLCBuYW1lOiBcIklzbGUgb2YgTWFuXCJ9LFxuICAgIHtjb2RlOiBcIklMXCIsIG5hbWU6IFwiSXNyYWVsXCJ9LFxuICAgIHtjb2RlOiBcIklUXCIsIG5hbWU6IFwiSXRhbHlcIn0sXG4gICAge2NvZGU6IFwiSk1cIiwgbmFtZTogXCJKYW1haWNhXCJ9LFxuICAgIHtjb2RlOiBcIkpQXCIsIG5hbWU6IFwiSmFwYW5cIn0sXG4gICAge2NvZGU6IFwiSkVcIiwgbmFtZTogXCJKZXJzZXlcIn0sXG4gICAge2NvZGU6IFwiSk9cIiwgbmFtZTogXCJKb3JkYW5cIn0sXG4gICAge2NvZGU6IFwiS1pcIiwgbmFtZTogXCJLYXpha2hzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIktFXCIsIG5hbWU6IFwiS2VueWFcIn0sXG4gICAge2NvZGU6IFwiS0lcIiwgbmFtZTogXCJLaXJpYmF0aVwifSxcbiAgICB7Y29kZTogXCJLUFwiLCBuYW1lOiBcIktvcmVhIChEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLUlwiLCBuYW1lOiBcIktvcmVhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1dcIiwgbmFtZTogXCJLdXdhaXRcIn0sXG4gICAge2NvZGU6IFwiS0dcIiwgbmFtZTogXCJLeXJneXpzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkxBXCIsIG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiTFZcIiwgbmFtZTogXCJMYXR2aWFcIn0sXG4gICAge2NvZGU6IFwiTEJcIiwgbmFtZTogXCJMZWJhbm9uXCJ9LFxuICAgIHtjb2RlOiBcIkxTXCIsIG5hbWU6IFwiTGVzb3Rob1wifSxcbiAgICB7Y29kZTogXCJMUlwiLCBuYW1lOiBcIkxpYmVyaWFcIn0sXG4gICAge2NvZGU6IFwiTFlcIiwgbmFtZTogXCJMaWJ5YVwifSxcbiAgICB7Y29kZTogXCJMSVwiLCBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIn0sXG4gICAge2NvZGU6IFwiTFRcIiwgbmFtZTogXCJMaXRodWFuaWFcIn0sXG4gICAge2NvZGU6IFwiTFVcIiwgbmFtZTogXCJMdXhlbWJvdXJnXCJ9LFxuICAgIHtjb2RlOiBcIk1PXCIsIG5hbWU6IFwiTWFjYW9cIn0sXG4gICAge2NvZGU6IFwiTUtcIiwgbmFtZTogXCJNYWNlZG9uaWEgKHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1HXCIsIG5hbWU6IFwiTWFkYWdhc2NhclwifSxcbiAgICB7Y29kZTogXCJNV1wiLCBuYW1lOiBcIk1hbGF3aVwifSxcbiAgICB7Y29kZTogXCJNWVwiLCBuYW1lOiBcIk1hbGF5c2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1WXCIsIG5hbWU6IFwiTWFsZGl2ZXNcIn0sXG4gICAge2NvZGU6IFwiTUxcIiwgbmFtZTogXCJNYWxpXCJ9LFxuICAgIHtjb2RlOiBcIk1UXCIsIG5hbWU6IFwiTWFsdGFcIn0sXG4gICAge2NvZGU6IFwiTUhcIiwgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk1RXCIsIG5hbWU6IFwiTWFydGluaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNUlwiLCBuYW1lOiBcIk1hdXJpdGFuaWFcIn0sXG4gICAge2NvZGU6IFwiTVVcIiwgbmFtZTogXCJNYXVyaXRpdXNcIn0sXG4gICAge2NvZGU6IFwiWVRcIiwgbmFtZTogXCJNYXlvdHRlXCJ9LFxuICAgIHtjb2RlOiBcIk1YXCIsIG5hbWU6IFwiTWV4aWNvXCJ9LFxuICAgIHtjb2RlOiBcIkZNXCIsIG5hbWU6IFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIn0sXG4gICAge2NvZGU6IFwiTURcIiwgbmFtZTogXCJNb2xkb3ZhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUNcIiwgbmFtZTogXCJNb25hY29cIn0sXG4gICAge2NvZGU6IFwiTU5cIiwgbmFtZTogXCJNb25nb2xpYVwifSxcbiAgICB7Y29kZTogXCJNRVwiLCBuYW1lOiBcIk1vbnRlbmVncm9cIn0sXG4gICAge2NvZGU6IFwiTVNcIiwgbmFtZTogXCJNb250c2VycmF0XCJ9LFxuICAgIHtjb2RlOiBcIk1BXCIsIG5hbWU6IFwiTW9yb2Njb1wifSxcbiAgICB7Y29kZTogXCJNWlwiLCBuYW1lOiBcIk1vemFtYmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTU1cIiwgbmFtZTogXCJNeWFubWFyXCJ9LFxuICAgIHtjb2RlOiBcIk5BXCIsIG5hbWU6IFwiTmFtaWJpYVwifSxcbiAgICB7Y29kZTogXCJOUlwiLCBuYW1lOiBcIk5hdXJ1XCJ9LFxuICAgIHtjb2RlOiBcIk5QXCIsIG5hbWU6IFwiTmVwYWxcIn0sXG4gICAge2NvZGU6IFwiTkxcIiwgbmFtZTogXCJOZXRoZXJsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOQ1wiLCBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIn0sXG4gICAge2NvZGU6IFwiTlpcIiwgbmFtZTogXCJOZXcgWmVhbGFuZFwifSxcbiAgICB7Y29kZTogXCJOSVwiLCBuYW1lOiBcIk5pY2FyYWd1YVwifSxcbiAgICB7Y29kZTogXCJORVwiLCBuYW1lOiBcIk5pZ2VyXCJ9LFxuICAgIHtjb2RlOiBcIk5HXCIsIG5hbWU6IFwiTmlnZXJpYVwifSxcbiAgICB7Y29kZTogXCJOVVwiLCBuYW1lOiBcIk5pdWVcIn0sXG4gICAge2NvZGU6IFwiTkZcIiwgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJNUFwiLCBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOT1wiLCBuYW1lOiBcIk5vcndheVwifSxcbiAgICB7Y29kZTogXCJPTVwiLCBuYW1lOiBcIk9tYW5cIn0sXG4gICAge2NvZGU6IFwiUEtcIiwgbmFtZTogXCJQYWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJQV1wiLCBuYW1lOiBcIlBhbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlBTXCIsIG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwifSxcbiAgICB7Y29kZTogXCJQQVwiLCBuYW1lOiBcIlBhbmFtYVwifSxcbiAgICB7Y29kZTogXCJQR1wiLCBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiUFlcIiwgbmFtZTogXCJQYXJhZ3VheVwifSxcbiAgICB7Y29kZTogXCJQRVwiLCBuYW1lOiBcIlBlcnVcIn0sXG4gICAge2NvZGU6IFwiUEhcIiwgbmFtZTogXCJQaGlsaXBwaW5lc1wifSxcbiAgICB7Y29kZTogXCJQTlwiLCBuYW1lOiBcIlBpdGNhaXJuXCJ9LFxuICAgIHtjb2RlOiBcIlBMXCIsIG5hbWU6IFwiUG9sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlBUXCIsIG5hbWU6IFwiUG9ydHVnYWxcIn0sXG4gICAge2NvZGU6IFwiUFJcIiwgbmFtZTogXCJQdWVydG8gUmljb1wifSxcbiAgICB7Y29kZTogXCJRQVwiLCBuYW1lOiBcIlFhdGFyXCJ9LFxuICAgIHtjb2RlOiBcIlJFXCIsIG5hbWU6IFwiUsOpdW5pb25cIn0sXG4gICAge2NvZGU6IFwiUk9cIiwgbmFtZTogXCJSb21hbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlJVXCIsIG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJXXCIsIG5hbWU6IFwiUndhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIkJMXCIsIG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIn0sXG4gICAge2NvZGU6IFwiU0hcIiwgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwifSxcbiAgICB7Y29kZTogXCJLTlwiLCBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wifSxcbiAgICB7Y29kZTogXCJMQ1wiLCBuYW1lOiBcIlNhaW50IEx1Y2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1GXCIsIG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiUE1cIiwgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCJ9LFxuICAgIHtjb2RlOiBcIlZDXCIsIG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIn0sXG4gICAge2NvZGU6IFwiV1NcIiwgbmFtZTogXCJTYW1vYVwifSxcbiAgICB7Y29kZTogXCJTTVwiLCBuYW1lOiBcIlNhbiBNYXJpbm9cIn0sXG4gICAge2NvZGU6IFwiU1RcIiwgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIn0sXG4gICAge2NvZGU6IFwiU0FcIiwgbmFtZTogXCJTYXVkaSBBcmFiaWFcIn0sXG4gICAge2NvZGU6IFwiU05cIiwgbmFtZTogXCJTZW5lZ2FsXCJ9LFxuICAgIHtjb2RlOiBcIlJTXCIsIG5hbWU6IFwiU2VyYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNDXCIsIG5hbWU6IFwiU2V5Y2hlbGxlc1wifSxcbiAgICB7Y29kZTogXCJTTFwiLCBuYW1lOiBcIlNpZXJyYSBMZW9uZVwifSxcbiAgICB7Y29kZTogXCJTR1wiLCBuYW1lOiBcIlNpbmdhcG9yZVwifSxcbiAgICB7Y29kZTogXCJTWFwiLCBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiU0tcIiwgbmFtZTogXCJTbG92YWtpYVwifSxcbiAgICB7Y29kZTogXCJTSVwiLCBuYW1lOiBcIlNsb3ZlbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNCXCIsIG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNPXCIsIG5hbWU6IFwiU29tYWxpYVwifSxcbiAgICB7Y29kZTogXCJaQVwiLCBuYW1lOiBcIlNvdXRoIEFmcmljYVwifSxcbiAgICB7Y29kZTogXCJHU1wiLCBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNTXCIsIG5hbWU6IFwiU291dGggU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiRVNcIiwgbmFtZTogXCJTcGFpblwifSxcbiAgICB7Y29kZTogXCJMS1wiLCBuYW1lOiBcIlNyaSBMYW5rYVwifSxcbiAgICB7Y29kZTogXCJTRFwiLCBuYW1lOiBcIlN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIlNSXCIsIG5hbWU6IFwiU3VyaW5hbWVcIn0sXG4gICAge2NvZGU6IFwiU0pcIiwgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCJ9LFxuICAgIHtjb2RlOiBcIlNaXCIsIG5hbWU6IFwiU3dhemlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNFXCIsIG5hbWU6IFwiU3dlZGVuXCJ9LFxuICAgIHtjb2RlOiBcIkNIXCIsIG5hbWU6IFwiU3dpdHplcmxhbmRcIn0sXG4gICAge2NvZGU6IFwiU1lcIiwgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJUV1wiLCBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiVEpcIiwgbmFtZTogXCJUYWppa2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRaXCIsIG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwifSxcbiAgICB7Y29kZTogXCJUSFwiLCBuYW1lOiBcIlRoYWlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlRMXCIsIG5hbWU6IFwiVGltb3ItTGVzdGVcIn0sXG4gICAge2NvZGU6IFwiVEdcIiwgbmFtZTogXCJUb2dvXCJ9LFxuICAgIHtjb2RlOiBcIlRLXCIsIG5hbWU6IFwiVG9rZWxhdVwifSxcbiAgICB7Y29kZTogXCJUT1wiLCBuYW1lOiBcIlRvbmdhXCJ9LFxuICAgIHtjb2RlOiBcIlRUXCIsIG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wifSxcbiAgICB7Y29kZTogXCJUTlwiLCBuYW1lOiBcIlR1bmlzaWFcIn0sXG4gICAge2NvZGU6IFwiVFJcIiwgbmFtZTogXCJUdXJrZXlcIn0sXG4gICAge2NvZGU6IFwiVE1cIiwgbmFtZTogXCJUdXJrbWVuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVENcIiwgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVFZcIiwgbmFtZTogXCJUdXZhbHVcIn0sXG4gICAge2NvZGU6IFwiVUdcIiwgbmFtZTogXCJVZ2FuZGFcIn0sXG4gICAge2NvZGU6IFwiVUFcIiwgbmFtZTogXCJVa3JhaW5lXCJ9LFxuICAgIHtjb2RlOiBcIkFFXCIsIG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIn0sXG4gICAge2NvZGU6IFwiR0JcIiwgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlVTXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIlVNXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlVZXCIsIG5hbWU6IFwiVXJ1Z3VheVwifSxcbiAgICB7Y29kZTogXCJVWlwiLCBuYW1lOiBcIlV6YmVraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVlVcIiwgbmFtZTogXCJWYW51YXR1XCJ9LFxuICAgIHtjb2RlOiBcIlZFXCIsIG5hbWU6IFwiVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJWTlwiLCBuYW1lOiBcIlZpZXRuYW1cIn0sXG4gICAge2NvZGU6IFwiVkdcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIn0sXG4gICAge2NvZGU6IFwiVklcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIn0sXG4gICAge2NvZGU6IFwiV0ZcIiwgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwifSxcbiAgICB7Y29kZTogXCJFSFwiLCBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCJ9LFxuICAgIHtjb2RlOiBcIllFXCIsIG5hbWU6IFwiWWVtZW5cIn0sXG4gICAge2NvZGU6IFwiWk1cIiwgbmFtZTogXCJaYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiWldcIiwgbmFtZTogXCJaaW1iYWJ3ZVwifSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbmlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlY29udGVudFwiKTtcbmNvbnN0IG1heFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXhjb250ZW50XCIpO1xuY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbmNvbnRlbnRcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW5jaGFuY2Vjb250ZW50XCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kc3BlZWRjb250ZW50XCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5Y29udGVudFwiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2Vjb250ZW50XCIpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRjb250ZW50XCIpO1xuXG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudGljb25cIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlYWxsXCIpO1xuXG5jb25zdCBjaGFuZ2VVbml0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdFwiKTtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlcigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbG9jYXRpb25DaG9zZW47XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gXCJMaXNib25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdFwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uQ2hvc2VuKTtcblxuICAgICAgICAgICAgYXdhaXQgc2hvd0RhdGEoZGF0YSwgXCLCukNcIiwgXCJLbS9IXCIsIGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvRmFocmVuaGVpdChsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgICAgIGF3YWl0IHNob3dEYXRhKGRhdGEsIFwiwrpGXCIsIFwiTXBoXCIsIGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VTd2l0Y2hVbml0cyk7XG5cbiAgICAgICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXNlU3dpdGNoVW5pdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VTd2l0Y2hVbml0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVzZVN3aXRjaFVuaXRzKCkge1xuICAgICAgICAgICAgc3dpdGNoVW5pdHMobG9jYXRpb25DaG9zZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVhbGxcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzApKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dEYXRhKGRhdGEsIHRlbXBVbml0cywgc3BlZWRVbml0cywgbG9jYXRpb25DaG9zZW4pIHtcbiAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0ucG9wICogMTAwKX0lYDtcblxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICBkYXRhLmN1cnJlbnQuc3VucmlzZSxcbiAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICk7XG4gICAgc3Vuc2V0LnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoZGF0YS5jdXJyZW50LnN1bnNldCwgZGF0YS50aW1lem9uZSk7XG5cbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb252ZXJ0VG9UaXRsZUNhc2UoXG4gICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5sb2NhdGlvbk5hbWVcbiAgICB9LCAkeyhhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmNvdW50cnlOYW1lfWA7XG5cbiAgICBjdXJyZW50SWNvbi5zcmMgPSBET00uZ2V0V2VhdGhlckljb24oZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG5cbiAgICBET00uY2hhbmdlQkdJbWFnZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCwgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gICAgRE9NLmltcHJvdmVSZWFkYWJpbGl0eShcbiAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQsXG4gICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb25cbiAgICApO1xuXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5jdXJyZW50LmZlZWxzX2xpa2VcbiAgICApfSAke3RlbXBVbml0c31gO1xuICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1heFxuICAgICl9ICR7dGVtcFVuaXRzfWA7XG4gICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgfSAke3NwZWVkVW5pdHN9YDtcblxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcblxuICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5LCB0ZW1wVW5pdHMpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHksIHRlbXBVbml0cyk7XG5cbiAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBkYWlseUljb25zLCBkYWlseU1heFRlbXBzLCBkYWlseU1pblRlbXBzKTtcblxuICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCB0ZW1wVW5pdHMpO1xuXG4gICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzd2l0Y2hVbml0cyhsb2NhdGlvbkNob3Nlbikge1xuICAgIGlmIChjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvQ2Vsc2l1cyhsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSl9IMK6Q2A7XG4gICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWF4KX0gwrpDYDtcbiAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0udGVtcC5taW4pfSDCukNgO1xuXG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgICAgIH0gS20vSGA7XG5cbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCl9IMK6Q2A7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShkYXRhLmRhaWx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG4gICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHksIFwiwrpDXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YS5ob3VybHksIFwiwrpDXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFocmVuaGVpdFwiKTtcbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byDCukZcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhRmFocmVuaGVpdCA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9GYWhyZW5oZWl0KFxuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW5cbiAgICAgICAgKTtcblxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuY3VycmVudC5mZWVsc19saWtlXG4gICAgICAgICl9IMK6RmA7XG4gICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5WzBdLnRlbXAubWF4XG4gICAgICAgICl9IMK6RmA7XG4gICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5WzBdLnRlbXAubWluXG4gICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGFGYWhyZW5oZWl0LmN1cnJlbnQud2luZF9zcGVlZCAqIDEwKSAvIDEwXG4gICAgICAgIH0gTXBoYDtcblxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuY3VycmVudC50ZW1wXG4gICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5LFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQudGltZXpvbmVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhRmFocmVuaGVpdC5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGFGYWhyZW5oZWl0LmRhaWx5LCBcIsK6RlwiKTtcbiAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YUZhaHJlbmhlaXQuZGFpbHksIFwiwrpGXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmhvdXJseSxcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LnRpbWV6b25lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhRmFocmVuaGVpdC5ob3VybHkpO1xuICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGFGYWhyZW5oZWl0LmhvdXJseSwgXCLCukZcIik7XG5cbiAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYWhyZW5oZWl0XCIpO1xuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dpdGNoIHRvIMK6Q1wiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF5c0FycmF5KGRheXMsIHRpbWVab25lKSB7XG4gICAgY29uc3QgZGF5c0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkRGF5ID0gYCR7Y29udmVydFVuaXhUb1dlZWtkYXkoXG4gICAgICAgICAgICBkYXlzW2ldLmR0LFxuICAgICAgICAgICAgdGltZVpvbmVcbiAgICAgICAgKX0sICR7Y29udmVydFVuaXhUb0RheShkYXlzW2ldLmR0LCB0aW1lWm9uZSl9YDtcbiAgICAgICAgZGF5c0FycmF5LnB1c2goY29udmVydGVkRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRheXMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgaWNvbnNBcnJheS5wdXNoKGRheXNbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWF4VGVtcHMoZGF5cywgdW5pdCkge1xuICAgIGNvbnN0IG1heFRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtYXhUZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWF4KX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gbWF4VGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNaW5UZW1wcyhkYXlzLCB1bml0KSB7XG4gICAgY29uc3QgbWluVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1pblRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5taW4pfSAke3VuaXR9YCk7XG4gICAgfVxuICAgIHJldHVybiBtaW5UZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0FycmF5KGhvdXJzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGhvdXJzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IGAke2NvbnZlcnRXaXRob3V0TWludXRlcyhob3Vyc1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGhvdXJzQXJyYXkucHVzaChjb252ZXJ0ZWRIb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXJzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUljb25zQXJyYXkoaG91cnMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChob3Vyc1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5VGVtcHMoaG91cnMsIHVuaXQpIHtcbiAgICBjb25zdCBUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGhvdXJzW2ldLnRlbXApfSAke3VuaXR9YCk7XG4gICAgfVxuICAgIHJldHVybiBUZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9UaXRsZUNhc2Uoc3RyaW5nKSB7XG4gICAgY29uc3QgYXJyYXlPZldvcmRzID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcblxuICAgIGNvbnN0IGNhcGl0YWxpemVkQXJyYXkgPSBbXTtcbiAgICBhcnJheU9mV29yZHMuZm9yRWFjaCgod29yZCkgPT5cbiAgICAgICAgY2FwaXRhbGl6ZWRBcnJheS5wdXNoKHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKSlcbiAgICApO1xuICAgIHJldHVybiBjYXBpdGFsaXplZEFycmF5LmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvSG91cih0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICB9O1xuXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gaG91ci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0V2l0aG91dE1pbnV0ZXModGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGhvdXIudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb0RheSh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGRheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvV2Vla2RheSh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgd2Vla2RheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gd2Vla2RheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFdlYXRoZXIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikgc2VhcmNoV2VhdGhlcigpO1xufSk7XG5cbmNvbnN0IGhvdXJseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0hvdXJseUZvcmVjYXN0KTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvRGFpbHlGb3JlY2FzdCk7XG5cbkRPTS5jcmVhdGVGaXJzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbkRPTS5jcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG5zZWFyY2hXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=