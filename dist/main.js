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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: -3.3rem;\n}\n\n.transparent {\n    visibility: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,+BAA+B;IAC/B,0BAA0B;IAC1B,qBAAqB;IACrB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;IAC5B,kBAAkB;IAClB,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,UAAU;IACV,4BAA4B;IAC5B,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,mCAAmC;IACnC,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,kBAAkB;IAClB,WAAW;AACf;;AAEA;;IAEI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,6BAA6B;IAC7B,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n\n.error {\n    font-size: 1.5rem;\n    font-weight: 500;\n    margin-bottom: -3.3rem;\n}\n\n.transparent {\n    visibility: hidden;\n}\n"],"sourceRoot":""}]);
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
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`,
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
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${key}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFL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LEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssc0RBQXNEO0FBQzNELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssOEJBQThCO0FBQ25DLEtBQUssK0NBQStDO0FBQ3BELEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNERBQTREO0FBQ2pFLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUsscURBQXFEO0FBQzFELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssZ0VBQWdFO0FBQ3JFLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscURBQXFEO0FBQzFELEtBQUssMENBQTBDO0FBQy9DLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssa0NBQWtDO0FBQ3ZDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssbUNBQW1DO0FBQ3hDLEtBQUssNkNBQTZDO0FBQ2xELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUsscUNBQXFDO0FBQzFDLEtBQUssaUVBQWlFO0FBQ3RFLEtBQUssMENBQTBDO0FBQy9DLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssK0NBQStDO0FBQ3BELEtBQUssOENBQThDO0FBQ25ELEtBQUsscURBQXFEO0FBQzFELEtBQUssMEJBQTBCO0FBQy9CLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssMENBQTBDO0FBQy9DLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssOEJBQThCO0FBQ25DLEtBQUssOENBQThDO0FBQ25ELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssb0NBQW9DO0FBQ3pDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssaUVBQWlFO0FBQ3RFLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssOEJBQThCO0FBQ25DLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssMkNBQTJDO0FBQ2hELEtBQUssOEJBQThCO0FBQ25DLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUsseUNBQXlDO0FBQzlDLEtBQUssOENBQThDO0FBQ25ELEtBQUssK0JBQStCO0FBQ3BDLEtBQUssaURBQWlEO0FBQ3RELEtBQUssNkJBQTZCO0FBQ2xDLEtBQUssZ0NBQWdDO0FBQ3JDLEtBQUsseUJBQXlCO0FBQzlCLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssd0NBQXdDO0FBQzdDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssaUNBQWlDO0FBQ3RDLEtBQUssNkNBQTZDO0FBQ2xELEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUsseUNBQXlDO0FBQzlDLEtBQUsseUVBQXlFO0FBQzlFLEtBQUssNkNBQTZDO0FBQ2xELEtBQUsseURBQXlEO0FBQzlELEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssK0JBQStCO0FBQ3BDLEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssdURBQXVEO0FBQzVELEtBQUssNEJBQTRCO0FBQ2pDLEtBQUssNkNBQTZDO0FBQ2xELEtBQUssMENBQTBDO0FBQy9DLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssbUNBQW1DO0FBQ3hDLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssMkJBQTJCO0FBQ2hDLEtBQUssNkJBQTZCO0FBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNXO0FBQ0Q7QUFDRjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix3REFBMEI7O0FBRXpEO0FBQ0EsVUFBVTtBQUNWLCtCQUErQiwyREFBNkI7O0FBRTVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxvQ0FBb0M7O0FBRXRFLDhCQUE4QixzQkFBc0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtEQUFvQjtBQUNuQyxLQUFLLElBQUksT0FBTyxrREFBb0IsOEJBQThCOztBQUVsRSxzQkFBc0IsZ0RBQWtCOztBQUV4QyxJQUFJLCtDQUFpQjtBQUNyQixJQUFJLG9EQUFzQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0EsT0FBTyxFQUFFLFVBQVU7QUFDbkIsb0NBQW9DO0FBQ3BDO0FBQ0EsT0FBTyxFQUFFLFVBQVU7QUFDbkIsb0NBQW9DO0FBQ3BDO0FBQ0EsT0FBTyxFQUFFLFVBQVU7QUFDbkI7QUFDQTtBQUNBLE1BQU0sRUFBRSxXQUFXOztBQUVuQix3Q0FBd0M7QUFDeEM7QUFDQSxPQUFPLEVBQUUsVUFBVTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBdUI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUF3QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUEwQjs7QUFFckQsbUNBQW1DLHFDQUFxQztBQUN4RSx3Q0FBd0Msb0NBQW9DO0FBQzVFLHdDQUF3QyxvQ0FBb0M7O0FBRTVFO0FBQ0E7QUFDQSxVQUFVOztBQUVWLDRDQUE0QywrQkFBK0I7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQXVCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBd0I7O0FBRWhDO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUNBQXFDLDJEQUE2QjtBQUNsRTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLFdBQVc7QUFDWCx3Q0FBd0M7QUFDeEM7QUFDQSxXQUFXO0FBQ1gsd0NBQXdDO0FBQ3hDO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsVUFBVTs7QUFFViw0Q0FBNEM7QUFDNUM7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQXVCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBd0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxVQUFVLElBQUksdUNBQXVDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1Qiw4QkFBOEIsOEJBQThCLEVBQUUsS0FBSztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1Qiw4QkFBOEIsOEJBQThCLEVBQUUsS0FBSztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QixpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QiwyQkFBMkIsMkJBQTJCLEVBQUUsS0FBSztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSx1Q0FBdUMsd0RBQTBCOztBQUVqRTs7QUFFQSxzQ0FBc0MsdURBQXlCOztBQUUvRCx1REFBeUI7QUFDekIscURBQXVCOztBQUV2QixzREFBd0I7QUFDeEIsb0RBQXNCOztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi51bml0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTMuM3JlbTtcXG59XFxuXFxuLnRyYW5zcGFyZW50IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ks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b29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgNGZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3LjV2dztcXG59XFxuXFxuLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiAtMTNweDtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC45dnc7XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjY1dnc7XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMC4ydnc7XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljg1dnc7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiAxMy41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiAzLjI1cmVtO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDJweDtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnVuaXQge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMy4zcmVtO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3RoZXJtb21ldGVyLWhhbGYuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy90aGVybW9tZXRlci1zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy90aGVybW9tZXRlci1zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvdW1icmVsbGEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy93aW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvbW9pc3R1cmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW5yaXNlICgzKS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1bnNldCAoMSkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1saWdodG5pbmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL3NyYy9JbWFnZXMvY2xvdWQtcmFpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMTNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zbm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvSW1hZ2VzL3N1biAoMSkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF85X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xNV9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgICA8aGVhZD5cXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICAgICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgICAgICA8dGl0bGU+V2VhdGhlciBBcHA8L3RpdGxlPlxcbiAgICA8L2hlYWQ+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPGRpdiBpZD1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmZWVsc2xpa2UgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GZWVscyBMaWtlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IGZlZWxzbGlrZWNvbnRlbnRcXFwiPjMyIMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF4dGVtcGVyYXR1cmUgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYXhpbXVtPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IG1heGNvbnRlbnRcXFwiPjM3IMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWludGVtcGVyYXR1cmUgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaW5pbXVtPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IG1pbmNvbnRlbnRcXFwiPjI5IMK6QzwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicG9wIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmNlIE9mIFJhaW48L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgcmFpbmNoYW5jZWNvbnRlbnRcXFwiPjEyJTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2luZHNwZWVkIHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwidG9waWNvbnNcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5XaW5kIFNwZWVkPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHdpbmRzcGVlZGNvbnRlbnRcXFwiPjI2IEttL0g8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImh1bWlkaXR5IHRvcGRpdlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidG9waWNvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wd3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SHVtaWRpdHk8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRvcGNvbnRlbnQgaHVtaWRpdHljb250ZW50XFxcIj4yMiU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bnJpc2UgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29ucyBzdW5yaXNlaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3B3cmFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdW5yaXNlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b3Bjb250ZW50IHN1bnJpc2Vjb250ZW50XFxcIj42OjIyIEFNPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW5zZXQgdG9wZGl2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0b3BpY29ucyBzdW5zZXRpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcHdyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1bnNldDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9wY29udGVudCBzdW5zZXRjb250ZW50XFxcIj45OjEyIFBNPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYXRoZXJkZXNjcmlwdGlvblxcXCI+Q2xlYXIgU2t5PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnR3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRlbXBlcmF0dXJlXFxcIj4zMSDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcGFyYXRvclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJjdXJyZW50aWNvblxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzhfX18gKyBcIlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5MaXNib24sIFBvcnR1Z2FsPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImxvY2F0aW9uXFxcIiBpZD1cXFwibG9jYXRpb25pbnB1dFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwic2VhcmNoIGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1bml0XFxcIj5Td2l0Y2ggdG8gwrpGPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yIHRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG5vdCBmb3VuZC4gUGxlYXNlIHVzZSB0aGlzIGZvcm1hdDogXFxcIkNpdHksIENvdW50cnlcXFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVjaG9pY2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGFpbHlcXFwiPkRhaWx5PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJob3VybHlcXFwiPkhvdXJseTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5TYXR1cmRheSwgMTM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+U3VuZGF5LCAxNDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5d2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xMV9fXyArIFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9yZWNhc3RpY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtYXhcXFwiPjQwIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3RtaW5cXFwiPjMyIMK6QzwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHlkaXZzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5Nb25kYXksIDE1PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEyX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlR1ZXNkYXksIDE2PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzEzX19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPldlZG5lc2RheSwgMTc8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTRfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5ZGl2c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+VGh1cnNkYXksIDE4PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGFpbHl3ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzE1X19fICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JlY2FzdGljb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1heFxcXCI+NDAgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdG1pblxcXCI+MzIgwrpDPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseWRpdnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPkZyaWRheSwgMTk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMTBfX18gKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcmVjYXN0aWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWF4XFxcIj40MCDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0bWluXFxcIj4zMiDCukM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQkdJbWFnZShjb2RlLCBpY29uKSB7XG4gICAgaWYgKGNvZGUgPj0gMjAwICYmIGNvZGUgPCAzMDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2pvaGFubmVzLXBsZW5pby1FU0wxcklzOWo0OC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDMwMCAmJiBjb2RlIDwgNDAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb21hbi1zeW5rZXZ5Y2gtcVB2Qm1Tdm1vaHMtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA1MDAgJiYgY29kZSA8IDYwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcm9kb2xmby1jdWFkcm9zLTh3S3BGcXhESlQwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gNjAwICYmIGNvZGUgPCA3MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3RoZS1uaWdtYXRpYy1SRGg5Vi1jNGlTSS11bnNwbGFzaFxcXFwgXFxcXCgxXFxcXCkuanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+IDgwMCAmJiBjb2RlIDwgOTAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9uaWNrLWZld2luZ3MtWnREaUp6b2taaTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzAxIHx8IGNvZGUgPT09IDc0MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvZGF2ZS1ob2VmbGVyLW9kMjg3dlF5dWZ3LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjb2RlID09PSA3MTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzIxIHx8XG4gICAgICAgIGNvZGUgPT09IDczMSB8fFxuICAgICAgICBjb2RlID09PSA3NTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MlxuICAgICkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvY2hyaXMtbGVib3V0aWxsaWVyLWJlOG1uRlh6QmdvLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc3MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMva2hhbWtlby12aWxheXNpbmctV3R3U3Nxd1lsQTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzgxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9lc3Blbi1iaWVydWQtVzQzZ202VEQxMTgtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gXCIwMW5cIikge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcnlhbi1odXR0b24tSnp0bXg5eXFqQnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcHJvdmVSZWFkYWJpbGl0eShjb2RlLCBpY29uKSB7XG4gICAgaWYgKGNvZGUgPj0gNTAwICYmIGNvZGUgPCA2MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjQ5KVwiO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PT0gXCIwMW5cIikge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNClcIjtcbiAgICB9IGVsc2UgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG59XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlkaXZzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY3JlYXRlSG91cmx5RGl2KFwiZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgIH1cbiAgICBjcmVhdGVSaWdodEFycm93KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseURpdihjbGFzc05hbWUpIHtcbiAgICBjb25zdCBob3VybHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoaG91cmx5RGl2KTtcblxuICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgaG91ci50ZXh0Q29udGVudCA9IFwiMTIgQS5NLlwiO1xuICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgIGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseWljb25cIik7XG4gICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbik7XG5cbiAgICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgIGhvdXJseVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gXCI0MCDCukNcIjtcbiAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcInJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICByaWdodEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY3JlYXRlSG91cmx5RGl2KFwibGFzdGhvdXJseWRpdnNcIik7XG4gICAgfVxuICAgIGNyZWF0ZUxlZnRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctbGVmdC1jaXJjbGUuc3ZnXCIpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG59XG5cbmZ1bmN0aW9uIHNob3dMYXN0SG91cmx5RGl2cygpIHtcbiAgICBoaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBpZiAoIWxhc3RIb3VybHlEaXZzKSBjcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuICAgIGVsc2UgdW5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGaXJzdEhvdXJseURpdnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgaGlkZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHVuaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRleHRDb250ZW50KHRleHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gXCIwMWRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDFuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMmRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDJuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwM2RcIiB8fCBjb2RlID09PSBcIjAzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3Vkcy5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwOWRcIiB8fCBjb2RlID09PSBcIjA5blwiIHx8IGNvZGUgPT09IFwiMTBkXCIgfHwgY29kZSA9PT0gXCIxMG5cIilcbiAgICAgICAgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1yYWluICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxMWRcIiB8fCBjb2RlID09PSBcIjExblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZyAoMikuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTNkXCIgfHwgY29kZSA9PT0gXCIxM25cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zbm93LnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjUwZFwiIHx8IGNvZGUgPT09IFwiNTBuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZm9nLnN2Z1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBjb2RlcywgbWF4VGVtcHMsIG1pblRlbXBzKSB7XG4gICAgY29uc3QgZGFpbHlEYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0aWNvblwiKTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1heFwiKTtcbiAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1pblwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGRhaWx5RGF0ZXNbaV0udGV4dENvbnRlbnQgPSBkYXlzW2ldO1xuXG4gICAgICAgIGRhaWx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgZGFpbHlNYXhUZW1wc1tpXS50ZXh0Q29udGVudCA9IG1heFRlbXBzW2ldO1xuXG4gICAgICAgIGRhaWx5TWluVGVtcHNbaV0udGV4dENvbnRlbnQgPSBtaW5UZW1wc1tpXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgY29kZXMsIHRlbXBzKSB7XG4gICAgY29uc3QgaG91ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VyXCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseWljb25cIik7XG4gICAgY29uc3QgaG91cmx5VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseXRlbXBlcmF0dXJlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGhvdXJFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IGhvdXJzW2ldO1xuXG4gICAgICAgIGhvdXJseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGhvdXJseVRlbXBzW2ldLnRleHRDb250ZW50ID0gdGVtcHNbaV07XG4gICAgfVxufVxuIiwiY29uc3Qga2V5ID0gXCI5YjJlY2JhNzUzYTJkMGI1MDFiMTZiZTM0NTI0NjlmZlwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7bGF0OiBkYXRhWzBdLmxhdCwgbG9uOiBkYXRhWzBdLmxvbn07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9GYWhyZW5oZWl0KGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1pbXBlcmlhbGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkYXRhWzBdLm5hbWU7XG4gICAgbGV0IGNvdW50cnlOYW1lID0gZGF0YVswXS5jb3VudHJ5O1xuXG4gICAgY291bnRyeUxpc3QuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeS5jb2RlID09PSBjb3VudHJ5TmFtZSkgY291bnRyeU5hbWUgPSBjb3VudHJ5Lm5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2xvY2F0aW9uTmFtZSwgY291bnRyeU5hbWV9O1xufVxuXG5jb25zdCBjb3VudHJ5TGlzdCA9IFtcbiAgICB7Y29kZTogXCJBRlwiLCBuYW1lOiBcIkFmZ2hhbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkFYXCIsIG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQUxcIiwgbmFtZTogXCJBbGJhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkRaXCIsIG5hbWU6IFwiQWxnZXJpYVwifSxcbiAgICB7Y29kZTogXCJBU1wiLCBuYW1lOiBcIkFtZXJpY2FuIFNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIkFEXCIsIG5hbWU6IFwiQW5kb3JyYVwifSxcbiAgICB7Y29kZTogXCJBT1wiLCBuYW1lOiBcIkFuZ29sYVwifSxcbiAgICB7Y29kZTogXCJBSVwiLCBuYW1lOiBcIkFuZ3VpbGxhXCJ9LFxuICAgIHtjb2RlOiBcIkFRXCIsIG5hbWU6IFwiQW50YXJjdGljYVwifSxcbiAgICB7Y29kZTogXCJBR1wiLCBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIn0sXG4gICAge2NvZGU6IFwiQVJcIiwgbmFtZTogXCJBcmdlbnRpbmFcIn0sXG4gICAge2NvZGU6IFwiQU1cIiwgbmFtZTogXCJBcm1lbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFXXCIsIG5hbWU6IFwiQXJ1YmFcIn0sXG4gICAge2NvZGU6IFwiQVVcIiwgbmFtZTogXCJBdXN0cmFsaWFcIn0sXG4gICAge2NvZGU6IFwiQVRcIiwgbmFtZTogXCJBdXN0cmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFaXCIsIG5hbWU6IFwiQXplcmJhaWphblwifSxcbiAgICB7Y29kZTogXCJCU1wiLCBuYW1lOiBcIkJhaGFtYXNcIn0sXG4gICAge2NvZGU6IFwiQkhcIiwgbmFtZTogXCJCYWhyYWluXCJ9LFxuICAgIHtjb2RlOiBcIkJEXCIsIG5hbWU6IFwiQmFuZ2xhZGVzaFwifSxcbiAgICB7Y29kZTogXCJCQlwiLCBuYW1lOiBcIkJhcmJhZG9zXCJ9LFxuICAgIHtjb2RlOiBcIkJZXCIsIG5hbWU6IFwiQmVsYXJ1c1wifSxcbiAgICB7Y29kZTogXCJCRVwiLCBuYW1lOiBcIkJlbGdpdW1cIn0sXG4gICAge2NvZGU6IFwiQlpcIiwgbmFtZTogXCJCZWxpemVcIn0sXG4gICAge2NvZGU6IFwiQkpcIiwgbmFtZTogXCJCZW5pblwifSxcbiAgICB7Y29kZTogXCJCTVwiLCBuYW1lOiBcIkJlcm11ZGFcIn0sXG4gICAge2NvZGU6IFwiQlRcIiwgbmFtZTogXCJCaHV0YW5cIn0sXG4gICAge2NvZGU6IFwiQk9cIiwgbmFtZTogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwifSxcbiAgICB7Y29kZTogXCJCUVwiLCBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCJ9LFxuICAgIHtjb2RlOiBcIkJBXCIsIG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwifSxcbiAgICB7Y29kZTogXCJCV1wiLCBuYW1lOiBcIkJvdHN3YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJWXCIsIG5hbWU6IFwiQm91dmV0IElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJCUlwiLCBuYW1lOiBcIkJyYXppbFwifSxcbiAgICB7Y29kZTogXCJJT1wiLCBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwifSxcbiAgICB7Y29kZTogXCJCTlwiLCBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCJ9LFxuICAgIHtjb2RlOiBcIkJHXCIsIG5hbWU6IFwiQnVsZ2FyaWFcIn0sXG4gICAge2NvZGU6IFwiQkZcIiwgbmFtZTogXCJCdXJraW5hIEZhc29cIn0sXG4gICAge2NvZGU6IFwiQklcIiwgbmFtZTogXCJCdXJ1bmRpXCJ9LFxuICAgIHtjb2RlOiBcIkNWXCIsIG5hbWU6IFwiQ2FibyBWZXJkZVwifSxcbiAgICB7Y29kZTogXCJLSFwiLCBuYW1lOiBcIkNhbWJvZGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNNXCIsIG5hbWU6IFwiQ2FtZXJvb25cIn0sXG4gICAge2NvZGU6IFwiQ0FcIiwgbmFtZTogXCJDYW5hZGFcIn0sXG4gICAge2NvZGU6IFwiS1lcIiwgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDRlwiLCBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJURFwiLCBuYW1lOiBcIkNoYWRcIn0sXG4gICAge2NvZGU6IFwiQ0xcIiwgbmFtZTogXCJDaGlsZVwifSxcbiAgICB7Y29kZTogXCJDTlwiLCBuYW1lOiBcIkNoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIkNYXCIsIG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJDQ1wiLCBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNPXCIsIG5hbWU6IFwiQ29sb21iaWFcIn0sXG4gICAge2NvZGU6IFwiS01cIiwgbmFtZTogXCJDb21vcm9zXCJ9LFxuICAgIHtjb2RlOiBcIkNHXCIsIG5hbWU6IFwiQ29uZ29cIn0sXG4gICAge2NvZGU6IFwiQ0RcIiwgbmFtZTogXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJ9LFxuICAgIHtjb2RlOiBcIkNLXCIsIG5hbWU6IFwiQ29vayBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNSXCIsIG5hbWU6IFwiQ29zdGEgUmljYVwifSxcbiAgICB7Y29kZTogXCJDSVwiLCBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCJ9LFxuICAgIHtjb2RlOiBcIkhSXCIsIG5hbWU6IFwiQ3JvYXRpYVwifSxcbiAgICB7Y29kZTogXCJDVVwiLCBuYW1lOiBcIkN1YmFcIn0sXG4gICAge2NvZGU6IFwiQ1dcIiwgbmFtZTogXCJDdXJhw6dhb1wifSxcbiAgICB7Y29kZTogXCJDWVwiLCBuYW1lOiBcIkN5cHJ1c1wifSxcbiAgICB7Y29kZTogXCJDWlwiLCBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkRLXCIsIG5hbWU6IFwiRGVubWFya1wifSxcbiAgICB7Y29kZTogXCJESlwiLCBuYW1lOiBcIkRqaWJvdXRpXCJ9LFxuICAgIHtjb2RlOiBcIkRNXCIsIG5hbWU6IFwiRG9taW5pY2FcIn0sXG4gICAge2NvZGU6IFwiRE9cIiwgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiRUNcIiwgbmFtZTogXCJFY3VhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkVHXCIsIG5hbWU6IFwiRWd5cHRcIn0sXG4gICAge2NvZGU6IFwiU1ZcIiwgbmFtZTogXCJFbCBTYWx2YWRvclwifSxcbiAgICB7Y29kZTogXCJHUVwiLCBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVSXCIsIG5hbWU6IFwiRXJpdHJlYVwifSxcbiAgICB7Y29kZTogXCJFRVwiLCBuYW1lOiBcIkVzdG9uaWFcIn0sXG4gICAge2NvZGU6IFwiRVRcIiwgbmFtZTogXCJFdGhpb3BpYVwifSxcbiAgICB7Y29kZTogXCJGS1wiLCBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwifSxcbiAgICB7Y29kZTogXCJGT1wiLCBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiRkpcIiwgbmFtZTogXCJGaWppIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiRklcIiwgbmFtZTogXCJGaW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkZSXCIsIG5hbWU6IFwiRnJhbmNlXCJ9LFxuICAgIHtjb2RlOiBcIkdGXCIsIG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwifSxcbiAgICB7Y29kZTogXCJQRlwiLCBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIn0sXG4gICAge2NvZGU6IFwiVEZcIiwgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIn0sXG4gICAge2NvZGU6IFwiR0FcIiwgbmFtZTogXCJHYWJvblwifSxcbiAgICB7Y29kZTogXCJHTVwiLCBuYW1lOiBcIkdhbWJpYVwifSxcbiAgICB7Y29kZTogXCJHRVwiLCBuYW1lOiBcIkdlb3JnaWFcIn0sXG4gICAge2NvZGU6IFwiREVcIiwgbmFtZTogXCJHZXJtYW55XCJ9LFxuICAgIHtjb2RlOiBcIkdIXCIsIG5hbWU6IFwiR2hhbmFcIn0sXG4gICAge2NvZGU6IFwiR0lcIiwgbmFtZTogXCJHaWJyYWx0YXJcIn0sXG4gICAge2NvZGU6IFwiR1JcIiwgbmFtZTogXCJHcmVlY2VcIn0sXG4gICAge2NvZGU6IFwiR0xcIiwgbmFtZTogXCJHcmVlbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiR0RcIiwgbmFtZTogXCJHcmVuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIkdQXCIsIG5hbWU6IFwiR3VhZGVsb3VwZVwifSxcbiAgICB7Y29kZTogXCJHVVwiLCBuYW1lOiBcIkd1YW1cIn0sXG4gICAge2NvZGU6IFwiR1RcIiwgbmFtZTogXCJHdWF0ZW1hbGFcIn0sXG4gICAge2NvZGU6IFwiR0dcIiwgbmFtZTogXCJHdWVybnNleVwifSxcbiAgICB7Y29kZTogXCJHTlwiLCBuYW1lOiBcIkd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJHV1wiLCBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIn0sXG4gICAge2NvZGU6IFwiR1lcIiwgbmFtZTogXCJHdXlhbmFcIn0sXG4gICAge2NvZGU6IFwiSFRcIiwgbmFtZTogXCJIYWl0aVwifSxcbiAgICB7Y29kZTogXCJITVwiLCBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJWQVwiLCBuYW1lOiBcIkhvbHkgU2VlXCJ9LFxuICAgIHtjb2RlOiBcIkhOXCIsIG5hbWU6IFwiSG9uZHVyYXNcIn0sXG4gICAge2NvZGU6IFwiSEtcIiwgbmFtZTogXCJIb25nIEtvbmdcIn0sXG4gICAge2NvZGU6IFwiSFVcIiwgbmFtZTogXCJIdW5nYXJ5XCJ9LFxuICAgIHtjb2RlOiBcIklTXCIsIG5hbWU6IFwiSWNlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTlwiLCBuYW1lOiBcIkluZGlhXCJ9LFxuICAgIHtjb2RlOiBcIklEXCIsIG5hbWU6IFwiSW5kb25lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIklSXCIsIG5hbWU6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiSVFcIiwgbmFtZTogXCJJcmFxXCJ9LFxuICAgIHtjb2RlOiBcIklFXCIsIG5hbWU6IFwiSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTVwiLCBuYW1lOiBcIklzbGUgb2YgTWFuXCJ9LFxuICAgIHtjb2RlOiBcIklMXCIsIG5hbWU6IFwiSXNyYWVsXCJ9LFxuICAgIHtjb2RlOiBcIklUXCIsIG5hbWU6IFwiSXRhbHlcIn0sXG4gICAge2NvZGU6IFwiSk1cIiwgbmFtZTogXCJKYW1haWNhXCJ9LFxuICAgIHtjb2RlOiBcIkpQXCIsIG5hbWU6IFwiSmFwYW5cIn0sXG4gICAge2NvZGU6IFwiSkVcIiwgbmFtZTogXCJKZXJzZXlcIn0sXG4gICAge2NvZGU6IFwiSk9cIiwgbmFtZTogXCJKb3JkYW5cIn0sXG4gICAge2NvZGU6IFwiS1pcIiwgbmFtZTogXCJLYXpha2hzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIktFXCIsIG5hbWU6IFwiS2VueWFcIn0sXG4gICAge2NvZGU6IFwiS0lcIiwgbmFtZTogXCJLaXJpYmF0aVwifSxcbiAgICB7Y29kZTogXCJLUFwiLCBuYW1lOiBcIktvcmVhIChEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLUlwiLCBuYW1lOiBcIktvcmVhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1dcIiwgbmFtZTogXCJLdXdhaXRcIn0sXG4gICAge2NvZGU6IFwiS0dcIiwgbmFtZTogXCJLeXJneXpzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkxBXCIsIG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiTFZcIiwgbmFtZTogXCJMYXR2aWFcIn0sXG4gICAge2NvZGU6IFwiTEJcIiwgbmFtZTogXCJMZWJhbm9uXCJ9LFxuICAgIHtjb2RlOiBcIkxTXCIsIG5hbWU6IFwiTGVzb3Rob1wifSxcbiAgICB7Y29kZTogXCJMUlwiLCBuYW1lOiBcIkxpYmVyaWFcIn0sXG4gICAge2NvZGU6IFwiTFlcIiwgbmFtZTogXCJMaWJ5YVwifSxcbiAgICB7Y29kZTogXCJMSVwiLCBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIn0sXG4gICAge2NvZGU6IFwiTFRcIiwgbmFtZTogXCJMaXRodWFuaWFcIn0sXG4gICAge2NvZGU6IFwiTFVcIiwgbmFtZTogXCJMdXhlbWJvdXJnXCJ9LFxuICAgIHtjb2RlOiBcIk1PXCIsIG5hbWU6IFwiTWFjYW9cIn0sXG4gICAge2NvZGU6IFwiTUtcIiwgbmFtZTogXCJNYWNlZG9uaWEgKHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1HXCIsIG5hbWU6IFwiTWFkYWdhc2NhclwifSxcbiAgICB7Y29kZTogXCJNV1wiLCBuYW1lOiBcIk1hbGF3aVwifSxcbiAgICB7Y29kZTogXCJNWVwiLCBuYW1lOiBcIk1hbGF5c2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1WXCIsIG5hbWU6IFwiTWFsZGl2ZXNcIn0sXG4gICAge2NvZGU6IFwiTUxcIiwgbmFtZTogXCJNYWxpXCJ9LFxuICAgIHtjb2RlOiBcIk1UXCIsIG5hbWU6IFwiTWFsdGFcIn0sXG4gICAge2NvZGU6IFwiTUhcIiwgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk1RXCIsIG5hbWU6IFwiTWFydGluaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNUlwiLCBuYW1lOiBcIk1hdXJpdGFuaWFcIn0sXG4gICAge2NvZGU6IFwiTVVcIiwgbmFtZTogXCJNYXVyaXRpdXNcIn0sXG4gICAge2NvZGU6IFwiWVRcIiwgbmFtZTogXCJNYXlvdHRlXCJ9LFxuICAgIHtjb2RlOiBcIk1YXCIsIG5hbWU6IFwiTWV4aWNvXCJ9LFxuICAgIHtjb2RlOiBcIkZNXCIsIG5hbWU6IFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIn0sXG4gICAge2NvZGU6IFwiTURcIiwgbmFtZTogXCJNb2xkb3ZhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUNcIiwgbmFtZTogXCJNb25hY29cIn0sXG4gICAge2NvZGU6IFwiTU5cIiwgbmFtZTogXCJNb25nb2xpYVwifSxcbiAgICB7Y29kZTogXCJNRVwiLCBuYW1lOiBcIk1vbnRlbmVncm9cIn0sXG4gICAge2NvZGU6IFwiTVNcIiwgbmFtZTogXCJNb250c2VycmF0XCJ9LFxuICAgIHtjb2RlOiBcIk1BXCIsIG5hbWU6IFwiTW9yb2Njb1wifSxcbiAgICB7Y29kZTogXCJNWlwiLCBuYW1lOiBcIk1vemFtYmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTU1cIiwgbmFtZTogXCJNeWFubWFyXCJ9LFxuICAgIHtjb2RlOiBcIk5BXCIsIG5hbWU6IFwiTmFtaWJpYVwifSxcbiAgICB7Y29kZTogXCJOUlwiLCBuYW1lOiBcIk5hdXJ1XCJ9LFxuICAgIHtjb2RlOiBcIk5QXCIsIG5hbWU6IFwiTmVwYWxcIn0sXG4gICAge2NvZGU6IFwiTkxcIiwgbmFtZTogXCJOZXRoZXJsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOQ1wiLCBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIn0sXG4gICAge2NvZGU6IFwiTlpcIiwgbmFtZTogXCJOZXcgWmVhbGFuZFwifSxcbiAgICB7Y29kZTogXCJOSVwiLCBuYW1lOiBcIk5pY2FyYWd1YVwifSxcbiAgICB7Y29kZTogXCJORVwiLCBuYW1lOiBcIk5pZ2VyXCJ9LFxuICAgIHtjb2RlOiBcIk5HXCIsIG5hbWU6IFwiTmlnZXJpYVwifSxcbiAgICB7Y29kZTogXCJOVVwiLCBuYW1lOiBcIk5pdWVcIn0sXG4gICAge2NvZGU6IFwiTkZcIiwgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJNUFwiLCBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOT1wiLCBuYW1lOiBcIk5vcndheVwifSxcbiAgICB7Y29kZTogXCJPTVwiLCBuYW1lOiBcIk9tYW5cIn0sXG4gICAge2NvZGU6IFwiUEtcIiwgbmFtZTogXCJQYWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJQV1wiLCBuYW1lOiBcIlBhbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlBTXCIsIG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwifSxcbiAgICB7Y29kZTogXCJQQVwiLCBuYW1lOiBcIlBhbmFtYVwifSxcbiAgICB7Y29kZTogXCJQR1wiLCBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiUFlcIiwgbmFtZTogXCJQYXJhZ3VheVwifSxcbiAgICB7Y29kZTogXCJQRVwiLCBuYW1lOiBcIlBlcnVcIn0sXG4gICAge2NvZGU6IFwiUEhcIiwgbmFtZTogXCJQaGlsaXBwaW5lc1wifSxcbiAgICB7Y29kZTogXCJQTlwiLCBuYW1lOiBcIlBpdGNhaXJuXCJ9LFxuICAgIHtjb2RlOiBcIlBMXCIsIG5hbWU6IFwiUG9sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlBUXCIsIG5hbWU6IFwiUG9ydHVnYWxcIn0sXG4gICAge2NvZGU6IFwiUFJcIiwgbmFtZTogXCJQdWVydG8gUmljb1wifSxcbiAgICB7Y29kZTogXCJRQVwiLCBuYW1lOiBcIlFhdGFyXCJ9LFxuICAgIHtjb2RlOiBcIlJFXCIsIG5hbWU6IFwiUsOpdW5pb25cIn0sXG4gICAge2NvZGU6IFwiUk9cIiwgbmFtZTogXCJSb21hbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlJVXCIsIG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJXXCIsIG5hbWU6IFwiUndhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIkJMXCIsIG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIn0sXG4gICAge2NvZGU6IFwiU0hcIiwgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwifSxcbiAgICB7Y29kZTogXCJLTlwiLCBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wifSxcbiAgICB7Y29kZTogXCJMQ1wiLCBuYW1lOiBcIlNhaW50IEx1Y2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1GXCIsIG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiUE1cIiwgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCJ9LFxuICAgIHtjb2RlOiBcIlZDXCIsIG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIn0sXG4gICAge2NvZGU6IFwiV1NcIiwgbmFtZTogXCJTYW1vYVwifSxcbiAgICB7Y29kZTogXCJTTVwiLCBuYW1lOiBcIlNhbiBNYXJpbm9cIn0sXG4gICAge2NvZGU6IFwiU1RcIiwgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIn0sXG4gICAge2NvZGU6IFwiU0FcIiwgbmFtZTogXCJTYXVkaSBBcmFiaWFcIn0sXG4gICAge2NvZGU6IFwiU05cIiwgbmFtZTogXCJTZW5lZ2FsXCJ9LFxuICAgIHtjb2RlOiBcIlJTXCIsIG5hbWU6IFwiU2VyYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNDXCIsIG5hbWU6IFwiU2V5Y2hlbGxlc1wifSxcbiAgICB7Y29kZTogXCJTTFwiLCBuYW1lOiBcIlNpZXJyYSBMZW9uZVwifSxcbiAgICB7Y29kZTogXCJTR1wiLCBuYW1lOiBcIlNpbmdhcG9yZVwifSxcbiAgICB7Y29kZTogXCJTWFwiLCBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiU0tcIiwgbmFtZTogXCJTbG92YWtpYVwifSxcbiAgICB7Y29kZTogXCJTSVwiLCBuYW1lOiBcIlNsb3ZlbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNCXCIsIG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNPXCIsIG5hbWU6IFwiU29tYWxpYVwifSxcbiAgICB7Y29kZTogXCJaQVwiLCBuYW1lOiBcIlNvdXRoIEFmcmljYVwifSxcbiAgICB7Y29kZTogXCJHU1wiLCBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNTXCIsIG5hbWU6IFwiU291dGggU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiRVNcIiwgbmFtZTogXCJTcGFpblwifSxcbiAgICB7Y29kZTogXCJMS1wiLCBuYW1lOiBcIlNyaSBMYW5rYVwifSxcbiAgICB7Y29kZTogXCJTRFwiLCBuYW1lOiBcIlN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIlNSXCIsIG5hbWU6IFwiU3VyaW5hbWVcIn0sXG4gICAge2NvZGU6IFwiU0pcIiwgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCJ9LFxuICAgIHtjb2RlOiBcIlNaXCIsIG5hbWU6IFwiU3dhemlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNFXCIsIG5hbWU6IFwiU3dlZGVuXCJ9LFxuICAgIHtjb2RlOiBcIkNIXCIsIG5hbWU6IFwiU3dpdHplcmxhbmRcIn0sXG4gICAge2NvZGU6IFwiU1lcIiwgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJUV1wiLCBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiVEpcIiwgbmFtZTogXCJUYWppa2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRaXCIsIG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwifSxcbiAgICB7Y29kZTogXCJUSFwiLCBuYW1lOiBcIlRoYWlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlRMXCIsIG5hbWU6IFwiVGltb3ItTGVzdGVcIn0sXG4gICAge2NvZGU6IFwiVEdcIiwgbmFtZTogXCJUb2dvXCJ9LFxuICAgIHtjb2RlOiBcIlRLXCIsIG5hbWU6IFwiVG9rZWxhdVwifSxcbiAgICB7Y29kZTogXCJUT1wiLCBuYW1lOiBcIlRvbmdhXCJ9LFxuICAgIHtjb2RlOiBcIlRUXCIsIG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wifSxcbiAgICB7Y29kZTogXCJUTlwiLCBuYW1lOiBcIlR1bmlzaWFcIn0sXG4gICAge2NvZGU6IFwiVFJcIiwgbmFtZTogXCJUdXJrZXlcIn0sXG4gICAge2NvZGU6IFwiVE1cIiwgbmFtZTogXCJUdXJrbWVuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVENcIiwgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVFZcIiwgbmFtZTogXCJUdXZhbHVcIn0sXG4gICAge2NvZGU6IFwiVUdcIiwgbmFtZTogXCJVZ2FuZGFcIn0sXG4gICAge2NvZGU6IFwiVUFcIiwgbmFtZTogXCJVa3JhaW5lXCJ9LFxuICAgIHtjb2RlOiBcIkFFXCIsIG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIn0sXG4gICAge2NvZGU6IFwiR0JcIiwgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlVTXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIlVNXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlVZXCIsIG5hbWU6IFwiVXJ1Z3VheVwifSxcbiAgICB7Y29kZTogXCJVWlwiLCBuYW1lOiBcIlV6YmVraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVlVcIiwgbmFtZTogXCJWYW51YXR1XCJ9LFxuICAgIHtjb2RlOiBcIlZFXCIsIG5hbWU6IFwiVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJWTlwiLCBuYW1lOiBcIlZpZXRuYW1cIn0sXG4gICAge2NvZGU6IFwiVkdcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIn0sXG4gICAge2NvZGU6IFwiVklcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIn0sXG4gICAge2NvZGU6IFwiV0ZcIiwgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwifSxcbiAgICB7Y29kZTogXCJFSFwiLCBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCJ9LFxuICAgIHtjb2RlOiBcIllFXCIsIG5hbWU6IFwiWWVtZW5cIn0sXG4gICAge2NvZGU6IFwiWk1cIiwgbmFtZTogXCJaYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiWldcIiwgbmFtZTogXCJaaW1iYWJ3ZVwifSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbmlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlY29udGVudFwiKTtcbmNvbnN0IG1heFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXhjb250ZW50XCIpO1xuY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbmNvbnRlbnRcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW5jaGFuY2Vjb250ZW50XCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kc3BlZWRjb250ZW50XCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5Y29udGVudFwiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2Vjb250ZW50XCIpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRjb250ZW50XCIpO1xuXG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudGljb25cIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlYWxsXCIpO1xuXG5jb25zdCBjaGFuZ2VVbml0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdFwiKTtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlcigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbG9jYXRpb25DaG9zZW47XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gXCJMaXNib25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFocmVuaGVpdFwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uQ2hvc2VuKTtcblxuICAgICAgICAgICAgYXdhaXQgc2hvd0RhdGEoZGF0YSwgXCLCukNcIiwgXCJLbS9IXCIsIGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvRmFocmVuaGVpdChsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgICAgIGF3YWl0IHNob3dEYXRhKGRhdGEsIFwiwrpGXCIsIFwiTXBoXCIsIGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VTd2l0Y2hVbml0cyk7XG5cbiAgICAgICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXNlU3dpdGNoVW5pdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1c2VTd2l0Y2hVbml0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVzZVN3aXRjaFVuaXRzKCkge1xuICAgICAgICAgICAgc3dpdGNoVW5pdHMobG9jYXRpb25DaG9zZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVhbGxcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzApKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dEYXRhKGRhdGEsIHRlbXBVbml0cywgc3BlZWRVbml0cywgbG9jYXRpb25DaG9zZW4pIHtcbiAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0ucG9wICogMTAwKX0lYDtcblxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuXG4gICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICBkYXRhLmN1cnJlbnQuc3VucmlzZSxcbiAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICk7XG4gICAgc3Vuc2V0LnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoZGF0YS5jdXJyZW50LnN1bnNldCwgZGF0YS50aW1lem9uZSk7XG5cbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb252ZXJ0VG9UaXRsZUNhc2UoXG4gICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5sb2NhdGlvbk5hbWVcbiAgICB9LCAkeyhhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmNvdW50cnlOYW1lfWA7XG5cbiAgICBjdXJyZW50SWNvbi5zcmMgPSBET00uZ2V0V2VhdGhlckljb24oZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG5cbiAgICBET00uY2hhbmdlQkdJbWFnZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCwgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG4gICAgRE9NLmltcHJvdmVSZWFkYWJpbGl0eShcbiAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQsXG4gICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb25cbiAgICApO1xuXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5jdXJyZW50LmZlZWxzX2xpa2VcbiAgICApfSAke3RlbXBVbml0c31gO1xuICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1heFxuICAgICl9ICR7dGVtcFVuaXRzfWA7XG4gICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgfSAke3NwZWVkVW5pdHN9YDtcblxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgKX0gJHt0ZW1wVW5pdHN9YDtcblxuICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5LCB0ZW1wVW5pdHMpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHksIHRlbXBVbml0cyk7XG5cbiAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBkYWlseUljb25zLCBkYWlseU1heFRlbXBzLCBkYWlseU1pblRlbXBzKTtcblxuICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCB0ZW1wVW5pdHMpO1xuXG4gICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzd2l0Y2hVbml0cyhsb2NhdGlvbkNob3Nlbikge1xuICAgIGlmIChjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWhyZW5oZWl0XCIpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvQ2Vsc2l1cyhsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSl9IMK6Q2A7XG4gICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWF4KX0gwrpDYDtcbiAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0udGVtcC5taW4pfSDCukNgO1xuXG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgICAgIH0gS20vSGA7XG5cbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCl9IMK6Q2A7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShkYXRhLmRhaWx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG4gICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHksIFwiwrpDXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YS5ob3VybHksIFwiwrpDXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFocmVuaGVpdFwiKTtcbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byDCukZcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhRmFocmVuaGVpdCA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9GYWhyZW5oZWl0KFxuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW5cbiAgICAgICAgKTtcblxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuY3VycmVudC5mZWVsc19saWtlXG4gICAgICAgICl9IMK6RmA7XG4gICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5WzBdLnRlbXAubWF4XG4gICAgICAgICl9IMK6RmA7XG4gICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5WzBdLnRlbXAubWluXG4gICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGFGYWhyZW5oZWl0LmN1cnJlbnQud2luZF9zcGVlZCAqIDEwKSAvIDEwXG4gICAgICAgIH0gTXBoYDtcblxuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQuY3VycmVudC50ZW1wXG4gICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmRhaWx5LFxuICAgICAgICAgICAgZGF0YUZhaHJlbmhlaXQudGltZXpvbmVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhRmFocmVuaGVpdC5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGFGYWhyZW5oZWl0LmRhaWx5LCBcIsK6RlwiKTtcbiAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YUZhaHJlbmhlaXQuZGFpbHksIFwiwrpGXCIpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LmhvdXJseSxcbiAgICAgICAgICAgIGRhdGFGYWhyZW5oZWl0LnRpbWV6b25lXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhRmFocmVuaGVpdC5ob3VybHkpO1xuICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGFGYWhyZW5oZWl0LmhvdXJseSwgXCLCukZcIik7XG5cbiAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYWhyZW5oZWl0XCIpO1xuICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU3dpdGNoIHRvIMK6Q1wiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF5c0FycmF5KGRheXMsIHRpbWVab25lKSB7XG4gICAgY29uc3QgZGF5c0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkRGF5ID0gYCR7Y29udmVydFVuaXhUb1dlZWtkYXkoXG4gICAgICAgICAgICBkYXlzW2ldLmR0LFxuICAgICAgICAgICAgdGltZVpvbmVcbiAgICAgICAgKX0sICR7Y29udmVydFVuaXhUb0RheShkYXlzW2ldLmR0LCB0aW1lWm9uZSl9YDtcbiAgICAgICAgZGF5c0FycmF5LnB1c2goY29udmVydGVkRGF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRheXNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRheXMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgaWNvbnNBcnJheS5wdXNoKGRheXNbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWF4VGVtcHMoZGF5cywgdW5pdCkge1xuICAgIGNvbnN0IG1heFRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtYXhUZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWF4KX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gbWF4VGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNaW5UZW1wcyhkYXlzLCB1bml0KSB7XG4gICAgY29uc3QgbWluVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1pblRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5taW4pfSAke3VuaXR9YCk7XG4gICAgfVxuICAgIHJldHVybiBtaW5UZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0FycmF5KGhvdXJzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGhvdXJzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IGAke2NvbnZlcnRXaXRob3V0TWludXRlcyhob3Vyc1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGhvdXJzQXJyYXkucHVzaChjb252ZXJ0ZWRIb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXJzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUljb25zQXJyYXkoaG91cnMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChob3Vyc1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5VGVtcHMoaG91cnMsIHVuaXQpIHtcbiAgICBjb25zdCBUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGhvdXJzW2ldLnRlbXApfSAke3VuaXR9YCk7XG4gICAgfVxuICAgIHJldHVybiBUZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9UaXRsZUNhc2Uoc3RyaW5nKSB7XG4gICAgY29uc3QgYXJyYXlPZldvcmRzID0gc3RyaW5nLnNwbGl0KFwiIFwiKTtcblxuICAgIGNvbnN0IGNhcGl0YWxpemVkQXJyYXkgPSBbXTtcbiAgICBhcnJheU9mV29yZHMuZm9yRWFjaCgod29yZCkgPT5cbiAgICAgICAgY2FwaXRhbGl6ZWRBcnJheS5wdXNoKHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKSlcbiAgICApO1xuICAgIHJldHVybiBjYXBpdGFsaXplZEFycmF5LmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvSG91cih0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICAgICAgbWludXRlOiBcIm51bWVyaWNcIixcbiAgICB9O1xuXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gaG91ci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0V2l0aG91dE1pbnV0ZXModGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGhvdXIudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb0RheSh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGRheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvV2Vla2RheSh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3Qgd2Vla2RheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gd2Vla2RheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFdlYXRoZXIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikgc2VhcmNoV2VhdGhlcigpO1xufSk7XG5cbmNvbnN0IGhvdXJseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0hvdXJseUZvcmVjYXN0KTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvRGFpbHlGb3JlY2FzdCk7XG5cbkRPTS5jcmVhdGVGaXJzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbkRPTS5jcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG5zZWFyY2hXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=