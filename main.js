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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: -3.3rem;\n}\n\n.transparent {\n    visibility: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: -3.3rem;\n}\n\n.transparent {\n    visibility: hidden;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFL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LEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssc0RBQXNEO0FBQzNELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssOEJBQThCO0FBQ25DLEtBQUssK0NBQStDO0FBQ3BELEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNERBQTREO0FBQ2pFLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUsscURBQXFEO0FBQzFELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssZ0VBQWdFO0FBQ3JFLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscURBQXFEO0FBQzFELEtBQUssMENBQTBDO0FBQy9DLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssbUNBQW1DO0FBQ3hDLEtBQUssNkNBQTZDO0FBQ2xELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssaUVBQWlFO0FBQ3RFLEtBQUssMENBQTBDO0FBQy9DLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssK0NBQStDO0FBQ3BELEtBQUssOENBQThDO0FBQ25ELEtBQUsscURBQXFEO0FBQzFELEtBQUssMEJBQTBCO0FBQy9CLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMENBQTBDO0FBQy9DLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssOENBQThDO0FBQ25ELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssb0NBQW9DO0FBQ3pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssaUVBQWlFO0FBQ3RFLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssOEJBQThCO0FBQ25DLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkNBQTJDO0FBQ2hELEtBQUssOEJBQThCO0FBQ25DLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUsseUNBQXlDO0FBQzlDLEtBQUssOENBQThDO0FBQ25ELEtBQUssK0JBQStCO0FBQ3BDLEtBQUssaURBQWlEO0FBQ3RELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssNkNBQTZDO0FBQ2xELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUsseUNBQXlDO0FBQzlDLEtBQUsseUVBQXlFO0FBQzlFLEtBQUssNkNBQTZDO0FBQ2xE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b0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QiwyQkFBMkIsMkJBQTJCLEVBQUUsS0FBSztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSx1Q0FBdUMsd0RBQTBCOztBQUVqRTs7QUFFQSxzQ0FBc0MsdURBQXlCOztBQUUvRCx1REFBeUI7QUFDekIscURBQXVCOztBQUV2QixzREFBd0I7QUFDeEIsb0RBQXNCOztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi51bml0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMuM3JlbTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ks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b29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgNGZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3LjV2dztcXG59XFxuXFxuLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiAtMTNweDtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC45dnc7XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjY1dnc7XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMC4ydnc7XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljg1dnc7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiAxMy41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiAzLjI1cmVtO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDJweDtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnVuaXQge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMy4zcmVtO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3RoZXJtb21ldGVyLWhhbGYuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy90aGVybW9tZXRlci1zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy90aGVybW9tZXRlci1zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvdW1icmVsbGEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy93aW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvbW9pc3R1cmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW5yaXNlICgzKS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1bnNldCAoMSkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1saWdodG5pbmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtcmFpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1biAoMSkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgICA8aGVhZD5cXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICAgICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgICAgICA8dGl0bGU+V2VhdGhlciBBcHA8L3RpdGxlPlxcbiAgICA8L2hlYWQ+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZWVsc2xpa2UgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GZWVscyBMaWtlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IGZlZWxzbGlrZWNvbnRlbnRcXFwiPjMyIMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF4dGVtcGVyYXR1cmUgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXhpbXVtPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IG1heGNvbnRlbnRcXFwiPjM3IMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWludGVtcGVyYXR1cmUgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5pbXVtPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IG1pbmNvbnRlbnRcXFwiPjI5IMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmNlIE9mIFJhaW48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgcmFpbmNoYW5jZWNvbnRlbnRcXFwiPjEyJTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2luZHNwZWVkIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwidG9waWNvbnNcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaW5kIFNwZWVkPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHdpbmRzcGVlZGNvbnRlbnRcXFwiPjI2IEttL0g8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImh1bWlkaXR5IHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SHVtaWRpdHk8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgaHVtaWRpdHljb250ZW50XFxcIj4yMiU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bnJpc2UgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29ucyBzdW5yaXNlaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdW5yaXNlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHN1bnJpc2Vjb250ZW50XFxcIj42OjIyIEFNPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW5zZXQgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29ucyBzdW5zZXRpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1bnNldDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBzdW5zZXRjb250ZW50XFxcIj45OjEyIFBNPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYXRoZXJkZXNjcmlwdGlvblxcXCI+Q2xlYXIgU2t5PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnR3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlbXBlcmF0dXJlXFxcIj4zMSDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcGFyYXRvclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjdXJyZW50aWNvblxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gKyBcIlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5MaXNib24sIFBvcnR1Z2FsPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImxvY2F0aW9uXFxcIiBpZD1cXFwibG9jYXRpb25pbnB1dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwic2VhcmNoIGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1bml0XFxcIj5Td2l0Y2ggdG8gwrpGPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yIHRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG5vdCBmb3VuZC4gUGxlYXNlIHVzZSB0aGlzIGZvcm1hdDogXFxcIkNpdHksIENvdW50cnlcXFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVjaG9pY2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGFpbHlcXFwiPkRhaWx5PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJob3VybHlcXFwiPkhvdXJseTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5TYXR1cmRheSwgMTM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+U3VuZGF5LCAxNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5Nb25kYXksIDE1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlR1ZXNkYXksIDE2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPldlZG5lc2RheSwgMTc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTRfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+VGh1cnNkYXksIDE4PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPkZyaWRheSwgMTk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQkdJbWFnZShjb2RlLCBpY29uKSB7XG4gICAgaWYgKGNvZGUgPj0gMjAwICYmIGNvZGUgPCAzMDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2pvaGFubmVzLXBsZW5pby1FU0wxcklzOWo0OC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDMwMCAmJiBjb2RlIDwgNDAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb21hbi1zeW5rZXZ5Y2gtcVB2Qm1Tdm1vaHMtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA1MDAgJiYgY29kZSA8IDYwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcm9kb2xmby1jdWFkcm9zLTh3S3BGcXhESlQwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gNjAwICYmIGNvZGUgPCA3MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3RoZS1uaWdtYXRpYy1SRGg5Vi1jNGlTSS11bnNwbGFzaFxcXFwgXFxcXCgxXFxcXCkuanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+IDgwMCAmJiBjb2RlIDwgOTAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9uaWNrLWZld2luZ3MtWnREaUp6b2taaTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzAxIHx8IGNvZGUgPT09IDc0MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvZGF2ZS1ob2VmbGVyLW9kMjg3dlF5dWZ3LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjb2RlID09PSA3MTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzIxIHx8XG4gICAgICAgIGNvZGUgPT09IDczMSB8fFxuICAgICAgICBjb2RlID09PSA3NTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MlxuICAgICkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvY2hyaXMtbGVib3V0aWxsaWVyLWJlOG1uRlh6QmdvLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc3MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMva2hhbWtlby12aWxheXNpbmctV3R3U3Nxd1lsQTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzgxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9lc3Blbi1iaWVydWQtVzQzZ202VEQxMTgtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gXCIwMW5cIikge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcnlhbi1odXR0b24tSnp0bXg5eXFqQnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcHJvdmVSZWFkYWJpbGl0eShjb2RlLCBpY29uKSB7XG4gICAgaWYgKGNvZGUgPj0gNTAwICYmIGNvZGUgPCA2MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjQ5KVwiO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gXCIwMW5cIikge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNClcIjtcbiAgICB9IGVsc2UgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG59XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlkaXZzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY3JlYXRlSG91cmx5RGl2KFwiZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgIH1cbiAgICBjcmVhdGVSaWdodEFycm93KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseURpdihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBob3VybHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoaG91cmx5RGl2KTtcblxuICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgaG91ci50ZXh0Q29udGVudCA9IFwiMTIgQS5NLlwiO1xuICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgIGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseWljb25cIik7XG4gICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbik7XG5cbiAgICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgIGhvdXJseVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gXCI0MCDCukNcIjtcbiAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcInJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICByaWdodEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY3JlYXRlSG91cmx5RGl2KFwibGFzdGhvdXJseWRpdnNcIik7XG4gICAgfVxuICAgIGNyZWF0ZUxlZnRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctbGVmdC1jaXJjbGUuc3ZnXCIpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG59XG5cbmZ1bmN0aW9uIHNob3dMYXN0SG91cmx5RGl2cygpIHtcbiAgICBoaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBpZiAoIWxhc3RIb3VybHlEaXZzKSBjcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuICAgIGVsc2UgdW5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGaXJzdEhvdXJseURpdnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgaGlkZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHVuaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRleHRDb250ZW50KHRleHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gXCIwMWRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDFuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMmRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDJuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwM2RcIiB8fCBjb2RlID09PSBcIjAzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3Vkcy5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwOWRcIiB8fCBjb2RlID09PSBcIjA5blwiIHx8IGNvZGUgPT09IFwiMTBkXCIgfHwgY29kZSA9PT0gXCIxMG5cIilcbiAgICAgICAgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1yYWluICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxMWRcIiB8fCBjb2RlID09PSBcIjExblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZyAoMikuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTNkXCIgfHwgY29kZSA9PT0gXCIxM25cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zbm93LnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjUwZFwiIHx8IGNvZGUgPT09IFwiNTBuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZm9nLnN2Z1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBjb2RlcywgbWF4VGVtcHMsIG1pblRlbXBzKSB7XG4gICAgY29uc3QgZGFpbHlEYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0aWNvblwiKTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1heFwiKTtcbiAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1pblwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGRhaWx5RGF0ZXNbaV0udGV4dENvbnRlbnQgPSBkYXlzW2ldO1xuXG4gICAgICAgIGRhaWx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgZGFpbHlNYXhUZW1wc1tpXS50ZXh0Q29udGVudCA9IG1heFRlbXBzW2ldO1xuXG4gICAgICAgIGRhaWx5TWluVGVtcHNbaV0udGV4dENvbnRlbnQgPSBtaW5UZW1wc1tpXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgY29kZXMsIHRlbXBzKSB7XG4gICAgY29uc3QgaG91ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VyXCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseWljb25cIik7XG4gICAgY29uc3QgaG91cmx5VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseXRlbXBlcmF0dXJlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGhvdXJFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IGhvdXJzW2ldO1xuXG4gICAgICAgIGhvdXJseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGhvdXJseVRlbXBzW2ldLnRleHRDb250ZW50ID0gdGVtcHNbaV07XG4gICAgfVxufVxuIiwiY29uc3Qga2V5ID0gXCI5YjJlY2JhNzUzYTJkMGI1MDFiMTZiZTM0NTI0NjlmZlwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge2xhdDogZGF0YVswXS5sYXQsIGxvbjogZGF0YVswXS5sb259O1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvQ2Vsc2l1cyhsb2NhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufSZhcHBpZD0ke2tleX0mdW5pdHM9bWV0cmljYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvRmFocmVuaGVpdChsb2NhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufSZhcHBpZD0ke2tleX0mdW5pdHM9aW1wZXJpYWxgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRhdGFbMF0ubmFtZTtcbiAgICBsZXQgY291bnRyeU5hbWUgPSBkYXRhWzBdLmNvdW50cnk7XG5cbiAgICBjb3VudHJ5TGlzdC5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5LmNvZGUgPT09IGNvdW50cnlOYW1lKSBjb3VudHJ5TmFtZSA9IGNvdW50cnkubmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7bG9jYXRpb25OYW1lLCBjb3VudHJ5TmFtZX07XG59XG5cbmNvbnN0IGNvdW50cnlMaXN0ID0gW1xuICAgIHtjb2RlOiBcIkFGXCIsIG5hbWU6IFwiQWZnaGFuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiQVhcIiwgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJBTFwiLCBuYW1lOiBcIkFsYmFuaWFcIn0sXG4gICAge2NvZGU6IFwiRFpcIiwgbmFtZTogXCJBbGdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFTXCIsIG5hbWU6IFwiQW1lcmljYW4gU2Ftb2FcIn0sXG4gICAge2NvZGU6IFwiQURcIiwgbmFtZTogXCJBbmRvcnJhXCJ9LFxuICAgIHtjb2RlOiBcIkFPXCIsIG5hbWU6IFwiQW5nb2xhXCJ9LFxuICAgIHtjb2RlOiBcIkFJXCIsIG5hbWU6IFwiQW5ndWlsbGFcIn0sXG4gICAge2NvZGU6IFwiQVFcIiwgbmFtZTogXCJBbnRhcmN0aWNhXCJ9LFxuICAgIHtjb2RlOiBcIkFHXCIsIG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwifSxcbiAgICB7Y29kZTogXCJBUlwiLCBuYW1lOiBcIkFyZ2VudGluYVwifSxcbiAgICB7Y29kZTogXCJBTVwiLCBuYW1lOiBcIkFybWVuaWFcIn0sXG4gICAge2NvZGU6IFwiQVdcIiwgbmFtZTogXCJBcnViYVwifSxcbiAgICB7Y29kZTogXCJBVVwiLCBuYW1lOiBcIkF1c3RyYWxpYVwifSxcbiAgICB7Y29kZTogXCJBVFwiLCBuYW1lOiBcIkF1c3RyaWFcIn0sXG4gICAge2NvZGU6IFwiQVpcIiwgbmFtZTogXCJBemVyYmFpamFuXCJ9LFxuICAgIHtjb2RlOiBcIkJTXCIsIG5hbWU6IFwiQmFoYW1hc1wifSxcbiAgICB7Y29kZTogXCJCSFwiLCBuYW1lOiBcIkJhaHJhaW5cIn0sXG4gICAge2NvZGU6IFwiQkRcIiwgbmFtZTogXCJCYW5nbGFkZXNoXCJ9LFxuICAgIHtjb2RlOiBcIkJCXCIsIG5hbWU6IFwiQmFyYmFkb3NcIn0sXG4gICAge2NvZGU6IFwiQllcIiwgbmFtZTogXCJCZWxhcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkJFXCIsIG5hbWU6IFwiQmVsZ2l1bVwifSxcbiAgICB7Y29kZTogXCJCWlwiLCBuYW1lOiBcIkJlbGl6ZVwifSxcbiAgICB7Y29kZTogXCJCSlwiLCBuYW1lOiBcIkJlbmluXCJ9LFxuICAgIHtjb2RlOiBcIkJNXCIsIG5hbWU6IFwiQmVybXVkYVwifSxcbiAgICB7Y29kZTogXCJCVFwiLCBuYW1lOiBcIkJodXRhblwifSxcbiAgICB7Y29kZTogXCJCT1wiLCBuYW1lOiBcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIkJRXCIsIG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIn0sXG4gICAge2NvZGU6IFwiQkFcIiwgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJXXCIsIG5hbWU6IFwiQm90c3dhbmFcIn0sXG4gICAge2NvZGU6IFwiQlZcIiwgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkJSXCIsIG5hbWU6IFwiQnJhemlsXCJ9LFxuICAgIHtjb2RlOiBcIklPXCIsIG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCJ9LFxuICAgIHtjb2RlOiBcIkJOXCIsIG5hbWU6IFwiQnJ1bmVpIERhcnVzc2FsYW1cIn0sXG4gICAge2NvZGU6IFwiQkdcIiwgbmFtZTogXCJCdWxnYXJpYVwifSxcbiAgICB7Y29kZTogXCJCRlwiLCBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wifSxcbiAgICB7Y29kZTogXCJCSVwiLCBuYW1lOiBcIkJ1cnVuZGlcIn0sXG4gICAge2NvZGU6IFwiQ1ZcIiwgbmFtZTogXCJDYWJvIFZlcmRlXCJ9LFxuICAgIHtjb2RlOiBcIktIXCIsIG5hbWU6IFwiQ2FtYm9kaWFcIn0sXG4gICAge2NvZGU6IFwiQ01cIiwgbmFtZTogXCJDYW1lcm9vblwifSxcbiAgICB7Y29kZTogXCJDQVwiLCBuYW1lOiBcIkNhbmFkYVwifSxcbiAgICB7Y29kZTogXCJLWVwiLCBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNGXCIsIG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlREXCIsIG5hbWU6IFwiQ2hhZFwifSxcbiAgICB7Y29kZTogXCJDTFwiLCBuYW1lOiBcIkNoaWxlXCJ9LFxuICAgIHtjb2RlOiBcIkNOXCIsIG5hbWU6IFwiQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiQ1hcIiwgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkNDXCIsIG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ09cIiwgbmFtZTogXCJDb2xvbWJpYVwifSxcbiAgICB7Y29kZTogXCJLTVwiLCBuYW1lOiBcIkNvbW9yb3NcIn0sXG4gICAge2NvZGU6IFwiQ0dcIiwgbmFtZTogXCJDb25nb1wifSxcbiAgICB7Y29kZTogXCJDRFwiLCBuYW1lOiBcIkNvbmdvIChEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIn0sXG4gICAge2NvZGU6IFwiQ0tcIiwgbmFtZTogXCJDb29rIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ1JcIiwgbmFtZTogXCJDb3N0YSBSaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkNJXCIsIG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIn0sXG4gICAge2NvZGU6IFwiSFJcIiwgbmFtZTogXCJDcm9hdGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNVXCIsIG5hbWU6IFwiQ3ViYVwifSxcbiAgICB7Y29kZTogXCJDV1wiLCBuYW1lOiBcIkN1cmHDp2FvXCJ9LFxuICAgIHtjb2RlOiBcIkNZXCIsIG5hbWU6IFwiQ3lwcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkNaXCIsIG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiREtcIiwgbmFtZTogXCJEZW5tYXJrXCJ9LFxuICAgIHtjb2RlOiBcIkRKXCIsIG5hbWU6IFwiRGppYm91dGlcIn0sXG4gICAge2NvZGU6IFwiRE1cIiwgbmFtZTogXCJEb21pbmljYVwifSxcbiAgICB7Y29kZTogXCJET1wiLCBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJFQ1wiLCBuYW1lOiBcIkVjdWFkb3JcIn0sXG4gICAge2NvZGU6IFwiRUdcIiwgbmFtZTogXCJFZ3lwdFwifSxcbiAgICB7Y29kZTogXCJTVlwiLCBuYW1lOiBcIkVsIFNhbHZhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkdRXCIsIG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiRVJcIiwgbmFtZTogXCJFcml0cmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVFXCIsIG5hbWU6IFwiRXN0b25pYVwifSxcbiAgICB7Y29kZTogXCJFVFwiLCBuYW1lOiBcIkV0aGlvcGlhXCJ9LFxuICAgIHtjb2RlOiBcIkZLXCIsIG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCJ9LFxuICAgIHtjb2RlOiBcIkZPXCIsIG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJGSlwiLCBuYW1lOiBcIkZpamkgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJGSVwiLCBuYW1lOiBcIkZpbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiRlJcIiwgbmFtZTogXCJGcmFuY2VcIn0sXG4gICAge2NvZGU6IFwiR0ZcIiwgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCJ9LFxuICAgIHtjb2RlOiBcIlBGXCIsIG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwifSxcbiAgICB7Y29kZTogXCJURlwiLCBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wifSxcbiAgICB7Y29kZTogXCJHQVwiLCBuYW1lOiBcIkdhYm9uXCJ9LFxuICAgIHtjb2RlOiBcIkdNXCIsIG5hbWU6IFwiR2FtYmlhXCJ9LFxuICAgIHtjb2RlOiBcIkdFXCIsIG5hbWU6IFwiR2VvcmdpYVwifSxcbiAgICB7Y29kZTogXCJERVwiLCBuYW1lOiBcIkdlcm1hbnlcIn0sXG4gICAge2NvZGU6IFwiR0hcIiwgbmFtZTogXCJHaGFuYVwifSxcbiAgICB7Y29kZTogXCJHSVwiLCBuYW1lOiBcIkdpYnJhbHRhclwifSxcbiAgICB7Y29kZTogXCJHUlwiLCBuYW1lOiBcIkdyZWVjZVwifSxcbiAgICB7Y29kZTogXCJHTFwiLCBuYW1lOiBcIkdyZWVubGFuZFwifSxcbiAgICB7Y29kZTogXCJHRFwiLCBuYW1lOiBcIkdyZW5hZGFcIn0sXG4gICAge2NvZGU6IFwiR1BcIiwgbmFtZTogXCJHdWFkZWxvdXBlXCJ9LFxuICAgIHtjb2RlOiBcIkdVXCIsIG5hbWU6IFwiR3VhbVwifSxcbiAgICB7Y29kZTogXCJHVFwiLCBuYW1lOiBcIkd1YXRlbWFsYVwifSxcbiAgICB7Y29kZTogXCJHR1wiLCBuYW1lOiBcIkd1ZXJuc2V5XCJ9LFxuICAgIHtjb2RlOiBcIkdOXCIsIG5hbWU6IFwiR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkdXXCIsIG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwifSxcbiAgICB7Y29kZTogXCJHWVwiLCBuYW1lOiBcIkd1eWFuYVwifSxcbiAgICB7Y29kZTogXCJIVFwiLCBuYW1lOiBcIkhhaXRpXCJ9LFxuICAgIHtjb2RlOiBcIkhNXCIsIG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlZBXCIsIG5hbWU6IFwiSG9seSBTZWVcIn0sXG4gICAge2NvZGU6IFwiSE5cIiwgbmFtZTogXCJIb25kdXJhc1wifSxcbiAgICB7Y29kZTogXCJIS1wiLCBuYW1lOiBcIkhvbmcgS29uZ1wifSxcbiAgICB7Y29kZTogXCJIVVwiLCBuYW1lOiBcIkh1bmdhcnlcIn0sXG4gICAge2NvZGU6IFwiSVNcIiwgbmFtZTogXCJJY2VsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklOXCIsIG5hbWU6IFwiSW5kaWFcIn0sXG4gICAge2NvZGU6IFwiSURcIiwgbmFtZTogXCJJbmRvbmVzaWFcIn0sXG4gICAge2NvZGU6IFwiSVJcIiwgbmFtZTogXCJJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJJUVwiLCBuYW1lOiBcIklyYXFcIn0sXG4gICAge2NvZGU6IFwiSUVcIiwgbmFtZTogXCJJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklNXCIsIG5hbWU6IFwiSXNsZSBvZiBNYW5cIn0sXG4gICAge2NvZGU6IFwiSUxcIiwgbmFtZTogXCJJc3JhZWxcIn0sXG4gICAge2NvZGU6IFwiSVRcIiwgbmFtZTogXCJJdGFseVwifSxcbiAgICB7Y29kZTogXCJKTVwiLCBuYW1lOiBcIkphbWFpY2FcIn0sXG4gICAge2NvZGU6IFwiSlBcIiwgbmFtZTogXCJKYXBhblwifSxcbiAgICB7Y29kZTogXCJKRVwiLCBuYW1lOiBcIkplcnNleVwifSxcbiAgICB7Y29kZTogXCJKT1wiLCBuYW1lOiBcIkpvcmRhblwifSxcbiAgICB7Y29kZTogXCJLWlwiLCBuYW1lOiBcIkthemFraHN0YW5cIn0sXG4gICAge2NvZGU6IFwiS0VcIiwgbmFtZTogXCJLZW55YVwifSxcbiAgICB7Y29kZTogXCJLSVwiLCBuYW1lOiBcIktpcmliYXRpXCJ9LFxuICAgIHtjb2RlOiBcIktQXCIsIG5hbWU6IFwiS29yZWEgKERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIktSXCIsIG5hbWU6IFwiS29yZWEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLV1wiLCBuYW1lOiBcIkt1d2FpdFwifSxcbiAgICB7Y29kZTogXCJLR1wiLCBuYW1lOiBcIkt5cmd5enN0YW5cIn0sXG4gICAge2NvZGU6IFwiTEFcIiwgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJMVlwiLCBuYW1lOiBcIkxhdHZpYVwifSxcbiAgICB7Y29kZTogXCJMQlwiLCBuYW1lOiBcIkxlYmFub25cIn0sXG4gICAge2NvZGU6IFwiTFNcIiwgbmFtZTogXCJMZXNvdGhvXCJ9LFxuICAgIHtjb2RlOiBcIkxSXCIsIG5hbWU6IFwiTGliZXJpYVwifSxcbiAgICB7Y29kZTogXCJMWVwiLCBuYW1lOiBcIkxpYnlhXCJ9LFxuICAgIHtjb2RlOiBcIkxJXCIsIG5hbWU6IFwiTGllY2h0ZW5zdGVpblwifSxcbiAgICB7Y29kZTogXCJMVFwiLCBuYW1lOiBcIkxpdGh1YW5pYVwifSxcbiAgICB7Y29kZTogXCJMVVwiLCBuYW1lOiBcIkx1eGVtYm91cmdcIn0sXG4gICAge2NvZGU6IFwiTU9cIiwgbmFtZTogXCJNYWNhb1wifSxcbiAgICB7Y29kZTogXCJNS1wiLCBuYW1lOiBcIk1hY2Vkb25pYSAodGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUdcIiwgbmFtZTogXCJNYWRhZ2FzY2FyXCJ9LFxuICAgIHtjb2RlOiBcIk1XXCIsIG5hbWU6IFwiTWFsYXdpXCJ9LFxuICAgIHtjb2RlOiBcIk1ZXCIsIG5hbWU6IFwiTWFsYXlzaWFcIn0sXG4gICAge2NvZGU6IFwiTVZcIiwgbmFtZTogXCJNYWxkaXZlc1wifSxcbiAgICB7Y29kZTogXCJNTFwiLCBuYW1lOiBcIk1hbGlcIn0sXG4gICAge2NvZGU6IFwiTVRcIiwgbmFtZTogXCJNYWx0YVwifSxcbiAgICB7Y29kZTogXCJNSFwiLCBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTVFcIiwgbmFtZTogXCJNYXJ0aW5pcXVlXCJ9LFxuICAgIHtjb2RlOiBcIk1SXCIsIG5hbWU6IFwiTWF1cml0YW5pYVwifSxcbiAgICB7Y29kZTogXCJNVVwiLCBuYW1lOiBcIk1hdXJpdGl1c1wifSxcbiAgICB7Y29kZTogXCJZVFwiLCBuYW1lOiBcIk1heW90dGVcIn0sXG4gICAge2NvZGU6IFwiTVhcIiwgbmFtZTogXCJNZXhpY29cIn0sXG4gICAge2NvZGU6IFwiRk1cIiwgbmFtZTogXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwifSxcbiAgICB7Y29kZTogXCJNRFwiLCBuYW1lOiBcIk1vbGRvdmEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJNQ1wiLCBuYW1lOiBcIk1vbmFjb1wifSxcbiAgICB7Y29kZTogXCJNTlwiLCBuYW1lOiBcIk1vbmdvbGlhXCJ9LFxuICAgIHtjb2RlOiBcIk1FXCIsIG5hbWU6IFwiTW9udGVuZWdyb1wifSxcbiAgICB7Y29kZTogXCJNU1wiLCBuYW1lOiBcIk1vbnRzZXJyYXRcIn0sXG4gICAge2NvZGU6IFwiTUFcIiwgbmFtZTogXCJNb3JvY2NvXCJ9LFxuICAgIHtjb2RlOiBcIk1aXCIsIG5hbWU6IFwiTW96YW1iaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNTVwiLCBuYW1lOiBcIk15YW5tYXJcIn0sXG4gICAge2NvZGU6IFwiTkFcIiwgbmFtZTogXCJOYW1pYmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5SXCIsIG5hbWU6IFwiTmF1cnVcIn0sXG4gICAge2NvZGU6IFwiTlBcIiwgbmFtZTogXCJOZXBhbFwifSxcbiAgICB7Y29kZTogXCJOTFwiLCBuYW1lOiBcIk5ldGhlcmxhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5DXCIsIG5hbWU6IFwiTmV3IENhbGVkb25pYVwifSxcbiAgICB7Y29kZTogXCJOWlwiLCBuYW1lOiBcIk5ldyBaZWFsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk5JXCIsIG5hbWU6IFwiTmljYXJhZ3VhXCJ9LFxuICAgIHtjb2RlOiBcIk5FXCIsIG5hbWU6IFwiTmlnZXJcIn0sXG4gICAge2NvZGU6IFwiTkdcIiwgbmFtZTogXCJOaWdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5VXCIsIG5hbWU6IFwiTml1ZVwifSxcbiAgICB7Y29kZTogXCJORlwiLCBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk1QXCIsIG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5PXCIsIG5hbWU6IFwiTm9yd2F5XCJ9LFxuICAgIHtjb2RlOiBcIk9NXCIsIG5hbWU6IFwiT21hblwifSxcbiAgICB7Y29kZTogXCJQS1wiLCBuYW1lOiBcIlBha2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlBXXCIsIG5hbWU6IFwiUGFsYXVcIn0sXG4gICAge2NvZGU6IFwiUFNcIiwgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlBBXCIsIG5hbWU6IFwiUGFuYW1hXCJ9LFxuICAgIHtjb2RlOiBcIlBHXCIsIG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJQWVwiLCBuYW1lOiBcIlBhcmFndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlBFXCIsIG5hbWU6IFwiUGVydVwifSxcbiAgICB7Y29kZTogXCJQSFwiLCBuYW1lOiBcIlBoaWxpcHBpbmVzXCJ9LFxuICAgIHtjb2RlOiBcIlBOXCIsIG5hbWU6IFwiUGl0Y2Fpcm5cIn0sXG4gICAge2NvZGU6IFwiUExcIiwgbmFtZTogXCJQb2xhbmRcIn0sXG4gICAge2NvZGU6IFwiUFRcIiwgbmFtZTogXCJQb3J0dWdhbFwifSxcbiAgICB7Y29kZTogXCJQUlwiLCBuYW1lOiBcIlB1ZXJ0byBSaWNvXCJ9LFxuICAgIHtjb2RlOiBcIlFBXCIsIG5hbWU6IFwiUWF0YXJcIn0sXG4gICAge2NvZGU6IFwiUkVcIiwgbmFtZTogXCJSw6l1bmlvblwifSxcbiAgICB7Y29kZTogXCJST1wiLCBuYW1lOiBcIlJvbWFuaWFcIn0sXG4gICAge2NvZGU6IFwiUlVcIiwgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIn0sXG4gICAge2NvZGU6IFwiUldcIiwgbmFtZTogXCJSd2FuZGFcIn0sXG4gICAge2NvZGU6IFwiQkxcIiwgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwifSxcbiAgICB7Y29kZTogXCJTSFwiLCBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCJ9LFxuICAgIHtjb2RlOiBcIktOXCIsIG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCJ9LFxuICAgIHtjb2RlOiBcIkxDXCIsIG5hbWU6IFwiU2FpbnQgTHVjaWFcIn0sXG4gICAge2NvZGU6IFwiTUZcIiwgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJQTVwiLCBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIn0sXG4gICAge2NvZGU6IFwiVkNcIiwgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wifSxcbiAgICB7Y29kZTogXCJXU1wiLCBuYW1lOiBcIlNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIlNNXCIsIG5hbWU6IFwiU2FuIE1hcmlub1wifSxcbiAgICB7Y29kZTogXCJTVFwiLCBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwifSxcbiAgICB7Y29kZTogXCJTQVwiLCBuYW1lOiBcIlNhdWRpIEFyYWJpYVwifSxcbiAgICB7Y29kZTogXCJTTlwiLCBuYW1lOiBcIlNlbmVnYWxcIn0sXG4gICAge2NvZGU6IFwiUlNcIiwgbmFtZTogXCJTZXJiaWFcIn0sXG4gICAge2NvZGU6IFwiU0NcIiwgbmFtZTogXCJTZXljaGVsbGVzXCJ9LFxuICAgIHtjb2RlOiBcIlNMXCIsIG5hbWU6IFwiU2llcnJhIExlb25lXCJ9LFxuICAgIHtjb2RlOiBcIlNHXCIsIG5hbWU6IFwiU2luZ2Fwb3JlXCJ9LFxuICAgIHtjb2RlOiBcIlNYXCIsIG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJTS1wiLCBuYW1lOiBcIlNsb3Zha2lhXCJ9LFxuICAgIHtjb2RlOiBcIlNJXCIsIG5hbWU6IFwiU2xvdmVuaWFcIn0sXG4gICAge2NvZGU6IFwiU0JcIiwgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU09cIiwgbmFtZTogXCJTb21hbGlhXCJ9LFxuICAgIHtjb2RlOiBcIlpBXCIsIG5hbWU6IFwiU291dGggQWZyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkdTXCIsIG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU1NcIiwgbmFtZTogXCJTb3V0aCBTdWRhblwifSxcbiAgICB7Y29kZTogXCJFU1wiLCBuYW1lOiBcIlNwYWluXCJ9LFxuICAgIHtjb2RlOiBcIkxLXCIsIG5hbWU6IFwiU3JpIExhbmthXCJ9LFxuICAgIHtjb2RlOiBcIlNEXCIsIG5hbWU6IFwiU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiU1JcIiwgbmFtZTogXCJTdXJpbmFtZVwifSxcbiAgICB7Y29kZTogXCJTSlwiLCBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIn0sXG4gICAge2NvZGU6IFwiU1pcIiwgbmFtZTogXCJTd2F6aWxhbmRcIn0sXG4gICAge2NvZGU6IFwiU0VcIiwgbmFtZTogXCJTd2VkZW5cIn0sXG4gICAge2NvZGU6IFwiQ0hcIiwgbmFtZTogXCJTd2l0emVybGFuZFwifSxcbiAgICB7Y29kZTogXCJTWVwiLCBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlRXXCIsIG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwifSxcbiAgICB7Y29kZTogXCJUSlwiLCBuYW1lOiBcIlRhamlraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVFpcIiwgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlRIXCIsIG5hbWU6IFwiVGhhaWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVExcIiwgbmFtZTogXCJUaW1vci1MZXN0ZVwifSxcbiAgICB7Y29kZTogXCJUR1wiLCBuYW1lOiBcIlRvZ29cIn0sXG4gICAge2NvZGU6IFwiVEtcIiwgbmFtZTogXCJUb2tlbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlRPXCIsIG5hbWU6IFwiVG9uZ2FcIn0sXG4gICAge2NvZGU6IFwiVFRcIiwgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCJ9LFxuICAgIHtjb2RlOiBcIlROXCIsIG5hbWU6IFwiVHVuaXNpYVwifSxcbiAgICB7Y29kZTogXCJUUlwiLCBuYW1lOiBcIlR1cmtleVwifSxcbiAgICB7Y29kZTogXCJUTVwiLCBuYW1lOiBcIlR1cmttZW5pc3RhblwifSxcbiAgICB7Y29kZTogXCJUQ1wiLCBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJUVlwiLCBuYW1lOiBcIlR1dmFsdVwifSxcbiAgICB7Y29kZTogXCJVR1wiLCBuYW1lOiBcIlVnYW5kYVwifSxcbiAgICB7Y29kZTogXCJVQVwiLCBuYW1lOiBcIlVrcmFpbmVcIn0sXG4gICAge2NvZGU6IFwiQUVcIiwgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wifSxcbiAgICB7Y29kZTogXCJHQlwiLCBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVVNcIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIn0sXG4gICAge2NvZGU6IFwiVU1cIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVVlcIiwgbmFtZTogXCJVcnVndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlVaXCIsIG5hbWU6IFwiVXpiZWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJWVVwiLCBuYW1lOiBcIlZhbnVhdHVcIn0sXG4gICAge2NvZGU6IFwiVkVcIiwgbmFtZTogXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIlZOXCIsIG5hbWU6IFwiVmlldG5hbVwifSxcbiAgICB7Y29kZTogXCJWR1wiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwifSxcbiAgICB7Y29kZTogXCJWSVwiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwifSxcbiAgICB7Y29kZTogXCJXRlwiLCBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCJ9LFxuICAgIHtjb2RlOiBcIkVIXCIsIG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIn0sXG4gICAge2NvZGU6IFwiWUVcIiwgbmFtZTogXCJZZW1lblwifSxcbiAgICB7Y29kZTogXCJaTVwiLCBuYW1lOiBcIlphbWJpYVwifSxcbiAgICB7Y29kZTogXCJaV1wiLCBuYW1lOiBcIlppbWJhYndlXCJ9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xuaW1wb3J0ICogYXMgYXBpcyBmcm9tIFwiLi9hcGlzXCI7XG5pbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc2xpa2Vjb250ZW50XCIpO1xuY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heGNvbnRlbnRcIik7XG5jb25zdCBtaW5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluY29udGVudFwiKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmNoYW5jZWNvbnRlbnRcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRzcGVlZGNvbnRlbnRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHljb250ZW50XCIpO1xuY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZWNvbnRlbnRcIik7XG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldGNvbnRlbnRcIik7XG5cbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlcmRlc2NyaXB0aW9uXCIpO1xuY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50aWNvblwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVhbGxcIik7XG5cbmNvbnN0IGNoYW5nZVVuaXRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0XCIpO1xuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBsb2NhdGlvbkNob3NlbjtcblxuICAgICAgICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBcIkxpc2JvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0NlbHNpdXMobG9jYXRpb25DaG9zZW4pO1xuXG4gICAgICAgICAgICBhd2FpdCBzaG93RGF0YShkYXRhLCBcIsK6Q1wiLCBcIkttL0hcIiwgbG9jYXRpb25DaG9zZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9GYWhyZW5oZWl0KGxvY2F0aW9uQ2hvc2VuKTtcblxuICAgICAgICAgICAgYXdhaXQgc2hvd0RhdGEoZGF0YSwgXCLCukZcIiwgXCJNcGhcIiwgbG9jYXRpb25DaG9zZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVzZVN3aXRjaFVuaXRzKTtcblxuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VTd2l0Y2hVbml0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVzZVN3aXRjaFVuaXRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXNlU3dpdGNoVW5pdHMoKSB7XG4gICAgICAgICAgICBzd2l0Y2hVbml0cyhsb2NhdGlvbkNob3Nlbik7XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZWFsbFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMCkpO1xuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zcGFyZW50XCIpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd0RhdGEoZGF0YSwgdGVtcFVuaXRzLCBzcGVlZFVuaXRzLCBsb2NhdGlvbkNob3Nlbikge1xuICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS5wb3AgKiAxMDApfSVgO1xuXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG5cbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoXG4gICAgICAgIGRhdGEuY3VycmVudC5zdW5yaXNlLFxuICAgICAgICBkYXRhLnRpbWV6b25lXG4gICAgKTtcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihkYXRhLmN1cnJlbnQuc3Vuc2V0LCBkYXRhLnRpbWV6b25lKTtcblxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbnZlcnRUb1RpdGxlQ2FzZShcbiAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICApO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgIChhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmxvY2F0aW9uTmFtZVxuICAgIH0sICR7KGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkuY291bnRyeU5hbWV9YDtcblxuICAgIGN1cnJlbnRJY29uLnNyYyA9IERPTS5nZXRXZWF0aGVySWNvbihkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uKTtcblxuICAgIERPTS5jaGFuZ2VCR0ltYWdlKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkLCBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uKTtcbiAgICBET00uaW1wcm92ZVJlYWRhYmlsaXR5KFxuICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCxcbiAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvblxuICAgICk7XG5cbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICBkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZVxuICAgICl9ICR7dGVtcFVuaXRzfWA7XG4gICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWF4XG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcbiAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5taW5cbiAgICApfSAke3RlbXBVbml0c31gO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC53aW5kX3NwZWVkICogMy42ICogMTApIC8gMTBcbiAgICB9ICR7c3BlZWRVbml0c31gO1xuXG4gICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5jdXJyZW50LnRlbXBcbiAgICApfSAke3RlbXBVbml0c31gO1xuXG4gICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShkYXRhLmRhaWx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGEuZGFpbHkpO1xuICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGEuZGFpbHksIHRlbXBVbml0cyk7XG4gICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YS5kYWlseSwgdGVtcFVuaXRzKTtcblxuICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KGRhdGEuaG91cmx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICBjb25zdCBob3VybHlJY29ucyA9IGNyZWF0ZUhvdXJseUljb25zQXJyYXkoZGF0YS5ob3VybHkpO1xuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YS5ob3VybHksIHRlbXBVbml0cyk7XG5cbiAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN3aXRjaFVuaXRzKGxvY2F0aW9uQ2hvc2VuKSB7XG4gICAgaWYgKGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImZhaHJlbmhlaXRcIikpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uQ2hvc2VuKTtcblxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKX0gwrpDYDtcbiAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0udGVtcC5tYXgpfSDCukNgO1xuICAgICAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1pbil9IMK6Q2A7XG5cbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC53aW5kX3NwZWVkICogMy42ICogMTApIC8gMTBcbiAgICAgICAgfSBLbS9IYDtcblxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wKX0gwrpDYDtcblxuICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KGRhdGEuZGFpbHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGEuZGFpbHkpO1xuICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcbiAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG5cbiAgICAgICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoZGF5cywgZGFpbHlJY29ucywgZGFpbHlNYXhUZW1wcywgZGFpbHlNaW5UZW1wcyk7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KGRhdGEuaG91cmx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICAgICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhLmhvdXJseSwgXCLCukNcIik7XG5cbiAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWhyZW5oZWl0XCIpO1xuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dpdGNoIHRvIMK6RlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGFGYWhyZW5oZWl0ID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0ZhaHJlbmhlaXQoXG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlblxuICAgICAgICApO1xuXG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5jdXJyZW50LmZlZWxzX2xpa2VcbiAgICAgICAgKX0gwrpGYDtcbiAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuZGFpbHlbMF0udGVtcC5tYXhcbiAgICAgICAgKX0gwrpGYDtcbiAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICAgKX0gwrpGYDtcblxuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YUZhaHJlbmhlaXQuY3VycmVudC53aW5kX3NwZWVkICogMTApIC8gMTBcbiAgICAgICAgfSBNcGhgO1xuXG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC5jdXJyZW50LnRlbXBcbiAgICAgICAgKX0gwrpGYDtcblxuICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuZGFpbHksXG4gICAgICAgICAgICBkYXRhRmFocmVuaGVpdC50aW1lem9uZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGFGYWhyZW5oZWl0LmRhaWx5KTtcbiAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YUZhaHJlbmhlaXQuZGFpbHksIFwiwrpGXCIpO1xuICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhRmFocmVuaGVpdC5kYWlseSwgXCLCukZcIik7XG5cbiAgICAgICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoZGF5cywgZGFpbHlJY29ucywgZGFpbHlNYXhUZW1wcywgZGFpbHlNaW5UZW1wcyk7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuaG91cmx5LFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQudGltZXpvbmVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGFGYWhyZW5oZWl0LmhvdXJseSk7XG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YUZhaHJlbmhlaXQuaG91cmx5LCBcIsK6RlwiKTtcblxuICAgICAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG5cbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhaHJlbmhlaXRcIik7XG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggdG8gwrpDXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlzQXJyYXkoZGF5cywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBkYXlzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWREYXkgPSBgJHtjb252ZXJ0VW5peFRvV2Vla2RheShcbiAgICAgICAgICAgIGRheXNbaV0uZHQsXG4gICAgICAgICAgICB0aW1lWm9uZVxuICAgICAgICApfSwgJHtjb252ZXJ0VW5peFRvRGF5KGRheXNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBkYXlzQXJyYXkucHVzaChjb252ZXJ0ZWREYXkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5c0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF5cykge1xuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goZGF5c1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNYXhUZW1wcyhkYXlzLCB1bml0KSB7XG4gICAgY29uc3QgbWF4VGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1heFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5tYXgpfSAke3VuaXR9YCk7XG4gICAgfVxuICAgIHJldHVybiBtYXhUZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXREYWlseU1pblRlbXBzKGRheXMsIHVuaXQpIHtcbiAgICBjb25zdCBtaW5UZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbWluVGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoZGF5c1tpXS50ZW1wLm1pbil9ICR7dW5pdH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pblRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzQXJyYXkoaG91cnMsIHRpbWVab25lKSB7XG4gICAgY29uc3QgaG91cnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRIb3VyID0gYCR7Y29udmVydFdpdGhvdXRNaW51dGVzKGhvdXJzW2ldLmR0LCB0aW1lWm9uZSl9YDtcbiAgICAgICAgaG91cnNBcnJheS5wdXNoKGNvbnZlcnRlZEhvdXIpO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cmx5SWNvbnNBcnJheShob3Vycykge1xuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgaWNvbnNBcnJheS5wdXNoKGhvdXJzW2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgfVxuICAgIHJldHVybiBpY29uc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRIb3VybHlUZW1wcyhob3VycywgdW5pdCkge1xuICAgIGNvbnN0IFRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgVGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoaG91cnNbaV0udGVtcCl9ICR7dW5pdH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1RpdGxlQ2FzZShzdHJpbmcpIHtcbiAgICBjb25zdCBhcnJheU9mV29yZHMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWRBcnJheSA9IFtdO1xuICAgIGFycmF5T2ZXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PlxuICAgICAgICBjYXBpdGFsaXplZEFycmF5LnB1c2god29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpKVxuICAgICk7XG4gICAgcmV0dXJuIGNhcGl0YWxpemVkQXJyYXkuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9Ib3VyKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRXaXRob3V0TWludXRlcyh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gaG91ci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvRGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9XZWVrZGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiB3ZWVrZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoV2VhdGhlcik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSBzZWFyY2hXZWF0aGVyKCk7XG59KTtcblxuY29uc3QgaG91cmx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5cbmhvdXJseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvSG91cmx5Rm9yZWNhc3QpO1xuXG5jb25zdCBkYWlseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5cbmRhaWx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET00uc3dpdGNoVG9EYWlseUZvcmVjYXN0KTtcblxuRE9NLmNyZWF0ZUZpcnN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVGaXJzdEhvdXJseURpdnMoKTtcblxuRE9NLmNyZWF0ZUxhc3RIb3VybHlEaXZzKCk7XG5ET00uaGlkZUxhc3RIb3VybHlEaXZzKCk7XG5cbnNlYXJjaFdlYXRoZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==