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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/william-bout-RPzWI0rolS8-unsplash.jpg */ "./src/Images/william-bout-RPzWI0rolS8-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-image: url(./Images/william-bout-RPzWI0rolS8-unsplash.jpg);\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony export */   "switchToDailyForecast": () => (/* binding */ switchToDailyForecast),
/* harmony export */   "switchToHourlyForecast": () => (/* binding */ switchToHourlyForecast)
/* harmony export */ });
const container = document.getElementById("container");

function changeBGImage(code) {
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
    } else
        container.style.backgroundImage =
            "url(../src/Images/william-bout-RPzWI0rolS8-unsplash.jpg)";
}

const dailyDivs = document.querySelectorAll(".dailydivs");

function hideDailyForecast() {
    dailyDivs.forEach((div) => div.classList.add("hide"));
}

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
        const hourlyDiv = document.createElement("div");
        hourlyDiv.classList.add("firsthourlydivs");
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
    createRightArrow();
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
        const hourlyDiv = document.createElement("div");
        hourlyDiv.classList.add("lasthourlydivs");
        forecastDiv.appendChild(hourlyDiv);

        const hour = document.createElement("div");
        hour.classList.add("hour");
        hour.textContent = "1 A.M.";
        hourlyDiv.appendChild(hour);

        const hourlyIcon = document.createElement("img");
        hourlyIcon.classList.add("hourlyicon");
        hourlyIcon.src = "../src/Images/cloud-drizzle.svg";
        hourlyDiv.appendChild(hourlyIcon);

        const hourlyTemperature = document.createElement("div");
        hourlyTemperature.classList.add("hourlytemperature");
        hourlyTemperature.textContent = "41 ºC";
        hourlyDiv.appendChild(hourlyTemperature);
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

const currentIcon = document.querySelector(".currenticon");

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
    console.log(dailyForecastIcons);

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
/* harmony export */   "getWeatherInfo": () => (/* binding */ getWeatherInfo)
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

async function getWeatherInfo(location) {
    const coordinates = await getCoordinates(location);

    const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`
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

/***/ "./src/Images/william-bout-RPzWI0rolS8-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/Images/william-bout-RPzWI0rolS8-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07470fccd893bb956016.jpg";

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
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis */ "./src/apis.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");




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

async function searchWeather() {
    try {
        let locationChosen;

        if (locationInput.value) {
            locationChosen = locationInput.value;
        } else {
            locationChosen = "Lisbon";
        }

        const data = await _apis__WEBPACK_IMPORTED_MODULE_1__.getWeatherInfo(locationChosen);
        console.log(data);

        _DOM__WEBPACK_IMPORTED_MODULE_2__.changeBGImage(data.current.weather[0].id);

        feelsLike.textContent = `${Math.round(data.current.feels_like)} ºC`;
        maxTemperature.textContent = `${Math.round(data.daily[0].temp.max)} ºC`;
        minTemperature.textContent = `${Math.round(data.daily[0].temp.min)} ºC`;
        chanceOfRain.textContent = `${Math.round(data.daily[0].pop * 100)}%`;
        windSpeed.textContent = `${
            Math.round(data.current.wind_speed * 3.6 * 10) / 10
        } Km/H`;
        humidity.textContent = `${data.current.humidity}%`;
        sunrise.textContent = convertUnixToHour(
            data.current.sunrise,
            data.timezone
        );
        sunset.textContent = convertUnixToHour(
            data.current.sunset,
            data.timezone
        );

        weatherDescription.textContent = convertToTitleCase(
            data.current.weather[0].description
        );
        location.textContent = `${
            (await _apis__WEBPACK_IMPORTED_MODULE_1__.getLocationName(locationChosen)).locationName
        }, ${(await _apis__WEBPACK_IMPORTED_MODULE_1__.getLocationName(locationChosen)).countryName}`;
        currentTemperature.textContent = `${Math.round(data.current.temp)} ºC`;

        currentIcon.src = _DOM__WEBPACK_IMPORTED_MODULE_2__.getWeatherIcon(data.current.weather[0].icon);

        const days = createDaysArray(data.daily, data.timezone);
        const dailyIcons = createDailyIconsArray(data.daily);
        const dailyMaxTemps = getDailyMaxTemps(data.daily);
        const dailyMinTemps = getDailyMinTemps(data.daily);

        _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(days, dailyIcons, dailyMaxTemps, dailyMinTemps);

        const hours = createHoursArray(data.hourly, data.timezone);
        const hourlyIcons = createHourlyIconsArray(data.hourly);
        const hourlyTemps = getHourlyTemps(data.hourly);

        _DOM__WEBPACK_IMPORTED_MODULE_2__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);
    } catch (error) {
        console.log(error);
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

function getDailyMaxTemps(days) {
    const maxTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        maxTempsArray.push(`${Math.round(days[i].temp.max)} ºC`);
    }
    return maxTempsArray;
}

function getDailyMinTemps(days) {
    const minTempsArray = [];

    for (let i = 1; i <= 7; i++) {
        minTempsArray.push(`${Math.round(days[i].temp.min)} ºC`);
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

function getHourlyTemps(hours) {
    const TempsArray = [];

    for (let i = 1; i <= 24; i++) {
        TempsArray.push(`${Math.round(hours[i].temp)} ºC`);
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

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_2__.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_2__.switchToDailyForecast);

_DOM__WEBPACK_IMPORTED_MODULE_2__.createFirstHourlyDivs();
_DOM__WEBPACK_IMPORTED_MODULE_2__.hideFirstHourlyDivs();

_DOM__WEBPACK_IMPORTED_MODULE_2__.createLastHourlyDivs();
_DOM__WEBPACK_IMPORTED_MODULE_2__.hideLastHourlyDivs();

searchWeather();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxxQ0FBcUM7QUFDMUMsS0FBSyw0Q0FBNEM7QUFDakQsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx1REFBdUQ7QUFDNUQsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxtQ0FBbUM7QUFDeEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyxnREFBZ0Q7QUFDckQsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSyxxQ0FBcUM7QUFDMUMsS0FBSyxnREFBZ0Q7QUFDckQsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxzREFBc0Q7QUFDM0QsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywrQ0FBK0M7QUFDcEQsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw0REFBNEQ7QUFDakUsS0FBSyx3Q0FBd0M7QUFDN0MsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyxxREFBcUQ7QUFDMUQsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxnRUFBZ0U7QUFDckUsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxxQ0FBcUM7QUFDMUMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxxREFBcUQ7QUFDMUQsS0FBSywwQ0FBMEM7QUFDL0MsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyxrQ0FBa0M7QUFDdkMsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyxtQ0FBbUM7QUFDeEMsS0FBSyw2Q0FBNkM7QUFDbEQsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx3Q0FBd0M7QUFDN0MsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxxQ0FBcUM7QUFDMUMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxxQ0FBcUM7QUFDMUMsS0FBSyxpRUFBaUU7QUFDdEUsS0FBSywwQ0FBMEM7QUFDL0MsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSywrQ0FBK0M7QUFDcEQsS0FBSyw4Q0FBOEM7QUFDbkQsS0FBSyxxREFBcUQ7QUFDMUQsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywrQkFBK0I7QUFDcEMsS0FBSywwQ0FBMEM7QUFDL0MsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSyw4Q0FBOEM7QUFDbkQsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyxvQ0FBb0M7QUFDekMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSyxpRUFBaUU7QUFDdEUsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSywyQ0FBMkM7QUFDaEQsS0FBSyw4QkFBOEI7QUFDbkMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyx5Q0FBeUM7QUFDOUMsS0FBSyw4Q0FBOEM7QUFDbkQsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyxpREFBaUQ7QUFDdEQsS0FBSyw2QkFBNkI7QUFDbEMsS0FBSyxnQ0FBZ0M7QUFDckMsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx3Q0FBd0M7QUFDN0MsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyxpQ0FBaUM7QUFDdEMsS0FBSyw2Q0FBNkM7QUFDbEQsS0FBSywyQkFBMkI7QUFDaEMsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx5Q0FBeUM7QUFDOUMsS0FBSyx5RUFBeUU7QUFDOUUsS0FBSyw2Q0FBNkM7QUFDbEQsS0FBSyx5REFBeUQ7QUFDOUQsS0FBSyw0QkFBNEI7QUFDakMsS0FBSywrQkFBK0I7QUFDcEMsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx1REFBdUQ7QUFDNUQsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyw2Q0FBNkM7QUFDbEQsS0FBSywwQ0FBMEM7QUFDL0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxtQ0FBbUM7QUFDeEMsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywyQkFBMkI7QUFDaEMsS0FBSyw2QkFBNkI7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbFNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVTtBQUNGOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSwyQkFBMkIsaURBQW1CO0FBQzlDOztBQUVBLFFBQVEsK0NBQWlCOztBQUV6QixtQ0FBbUMscUNBQXFDO0FBQ3hFLHdDQUF3QyxvQ0FBb0M7QUFDNUUsd0NBQXdDLG9DQUFvQztBQUM1RSxzQ0FBc0Msb0NBQW9DO0FBQzFFO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysa0NBQWtDLHNCQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFvQjtBQUN2QyxTQUFTLElBQUksT0FBTyxrREFBb0IsOEJBQThCO0FBQ3RFLDRDQUE0QywrQkFBK0I7O0FBRTNFLDBCQUEwQixnREFBa0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQXVCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBd0I7QUFDaEMsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsVUFBVSxJQUFJLHVDQUF1QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1Qiw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCLGlDQUFpQyw2Q0FBNkM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXVDLHdEQUEwQjs7QUFFakU7O0FBRUEsc0NBQXNDLHVEQUF5Qjs7QUFFL0QsdURBQXlCO0FBQ3pCLHFEQUF1Qjs7QUFFdkIsc0RBQXdCO0FBQ3hCLG9EQUFzQjs7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvd2lsbGlhbS1ib3V0LVJQeldJMHJvbFM4LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA0ZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFB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QUNYLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgNGZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTIuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudHdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b3Age1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi50b3BkaXYge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi50b3BpY29ucyB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4udG9wd3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvcGNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZlZWxzbGlrZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDcuNXZ3O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IGltZyB7XFxuICAgIGxlZnQ6IC0xM3B4O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gLnRvcHdyYXAge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICAgIGhlaWdodDogMy4yNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG59XFxuXFxuLnN1bnJpc2Uge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljl2dztcXG59XFxuXFxuLnN1bnNldCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNjV2dztcXG59XFxuXFxuLnN1bnJpc2VpY29uLFxcbi5zdW5zZXRpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDRweDtcXG59XFxuXFxuLndpbmRzcGVlZCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwLjJ2dztcXG59XFxuXFxuLndpbmRzcGVlZCA+IGltZyB7XFxuICAgIGhlaWdodDogMy42cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogM3B4O1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuXFxuLm1pbnRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5tYXh0ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguODV2dztcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2UgPiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IDEzLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYWlseWRpdnMge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uZm9yZWNhc3RpY29uIHtcXG4gICAgd2lkdGg6IDMuMjVyZW07XFxufVxcblxcbi5kYWlseXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZmlyc3Rob3VybHlkaXZzLFxcbi5sYXN0aG91cmx5ZGl2cyB7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlpY29uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvam9oYW5uZXMtcGxlbmlvLUVTTDFySXM5ajQ4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gMzAwICYmIGNvZGUgPCA0MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDUwMCAmJiBjb2RlIDwgNjAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb2RvbGZvLWN1YWRyb3MtOHdLcEZxeERKVDAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA2MDAgJiYgY29kZSA8IDcwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvdGhlLW5pZ21hdGljLVJEaDlWLWM0aVNJLXVuc3BsYXNoXFxcXCBcXFxcKDFcXFxcKS5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID4gODAwICYmIGNvZGUgPCA5MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3MDEgfHwgY29kZSA9PT0gNzQxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9kYXZlLWhvZWZsZXItb2QyODd2UXl1ZnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNvZGUgPT09IDcxMSB8fFxuICAgICAgICBjb2RlID09PSA3MjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzMxIHx8XG4gICAgICAgIGNvZGUgPT09IDc1MSB8fFxuICAgICAgICBjb2RlID09PSA3NjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYyXG4gICAgKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9jaHJpcy1sZWJvdXRpbGxpZXItYmU4bW5GWHpCZ28tdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzcxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9raGFta2VvLXZpbGF5c2luZy1XdHdTc3F3WWxBMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3ODEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2VzcGVuLWJpZXJ1ZC1XNDNnbTZURDExOC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKVwiO1xufVxuXG5jb25zdCBkYWlseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5ZGl2c1wiKTtcblxuZnVuY3Rpb24gaGlkZURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvSG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgPiAqXCIpO1xuICAgIGZvcmVjYXN0Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VybHlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VyLmNsYXNzTGlzdC5hZGQoXCJob3VyXCIpO1xuICAgICAgICBob3VyLnRleHRDb250ZW50ID0gXCIxMiBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDAgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuICAgIGNyZWF0ZVJpZ2h0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRBcnJvdygpIHtcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoXCJyaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvSW1hZ2VzL2Fycm93LXJpZ2h0LWNpcmNsZS5zdmdcIik7XG4gICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0xhc3RIb3VybHlEaXZzKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxMzsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKFwibGFzdGhvdXJseWRpdnNcIik7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGhvdXJseURpdik7XG5cbiAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgICAgIGhvdXIudGV4dENvbnRlbnQgPSBcIjEgQS5NLlwiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cik7XG5cbiAgICAgICAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseWljb25cIik7XG4gICAgICAgIGhvdXJseUljb24uc3JjID0gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWRyaXp6bGUuc3ZnXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlJY29uKTtcblxuICAgICAgICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseVRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJob3VybHl0ZW1wZXJhdHVyZVwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBcIjQxIMK6Q1wiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xuICAgIH1cbiAgICBjcmVhdGVMZWZ0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGVmdEFycm93KCkge1xuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJsZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvSW1hZ2VzL2Fycm93LWxlZnQtY2lyY2xlLnN2Z1wiKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xufVxuXG5mdW5jdGlvbiBzaG93TGFzdEhvdXJseURpdnMoKSB7XG4gICAgaGlkZUZpcnN0SG91cmx5RGl2cygpO1xuXG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgaWYgKCFsYXN0SG91cmx5RGl2cykgY3JlYXRlTGFzdEhvdXJseURpdnMoKTtcbiAgICBlbHNlIHVuaGlkZUxhc3RIb3VybHlEaXZzKCk7XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rmlyc3RIb3VybHlEaXZzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5mdW5jdGlvbiBzaG93Rmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGhpZGVMYXN0SG91cmx5RGl2cygpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgbGFzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5mdW5jdGlvbiB1bmhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUb0RhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgPiAqXCIpO1xuICAgIGZvcmVjYXN0Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcblxuICAgIGRhaWx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZXh0Q29udGVudCh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50aWNvblwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gXCIwMWRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDFuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMmRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDJuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwM2RcIiB8fCBjb2RlID09PSBcIjAzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3Vkcy5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwOWRcIiB8fCBjb2RlID09PSBcIjA5blwiIHx8IGNvZGUgPT09IFwiMTBkXCIgfHwgY29kZSA9PT0gXCIxMG5cIilcbiAgICAgICAgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1yYWluICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxMWRcIiB8fCBjb2RlID09PSBcIjExblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZyAoMikuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTNkXCIgfHwgY29kZSA9PT0gXCIxM25cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zbm93LnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjUwZFwiIHx8IGNvZGUgPT09IFwiNTBuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZm9nLnN2Z1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBjb2RlcywgbWF4VGVtcHMsIG1pblRlbXBzKSB7XG4gICAgY29uc3QgZGFpbHlEYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0aWNvblwiKTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1heFwiKTtcbiAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1pblwiKTtcbiAgICBjb25zb2xlLmxvZyhkYWlseUZvcmVjYXN0SWNvbnMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgZGFpbHlEYXRlc1tpXS50ZXh0Q29udGVudCA9IGRheXNbaV07XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEljb25zW2ldLnNyYyA9IGdldFdlYXRoZXJJY29uKGNvZGVzW2ldKTtcblxuICAgICAgICBkYWlseU1heFRlbXBzW2ldLnRleHRDb250ZW50ID0gbWF4VGVtcHNbaV07XG5cbiAgICAgICAgZGFpbHlNaW5UZW1wc1tpXS50ZXh0Q29udGVudCA9IG1pblRlbXBzW2ldO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBjb2RlcywgdGVtcHMpIHtcbiAgICBjb25zdCBob3VyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5aWNvblwiKTtcbiAgICBjb25zdCBob3VybHlUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5dGVtcGVyYXR1cmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgaG91ckVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gaG91cnNbaV07XG5cbiAgICAgICAgaG91cmx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgaG91cmx5VGVtcHNbaV0udGV4dENvbnRlbnQgPSB0ZW1wc1tpXTtcbiAgICB9XG59XG4iLCJjb25zdCBrZXkgPSBcIjliMmVjYmE3NTNhMmQwYjUwMWIxNmJlMzQ1MjQ2OWZmXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgICAge21vZGU6IFwiY29yc1wifVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHtsYXQ6IGRhdGFbMF0ubGF0LCBsb246IGRhdGFbMF0ubG9ufTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mbyhsb2NhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufSZhcHBpZD0ke2tleX0mdW5pdHM9bWV0cmljYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZShsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRhdGFbMF0ubmFtZTtcbiAgICBsZXQgY291bnRyeU5hbWUgPSBkYXRhWzBdLmNvdW50cnk7XG5cbiAgICBjb3VudHJ5TGlzdC5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5LmNvZGUgPT09IGNvdW50cnlOYW1lKSBjb3VudHJ5TmFtZSA9IGNvdW50cnkubmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7bG9jYXRpb25OYW1lLCBjb3VudHJ5TmFtZX07XG59XG5cbmNvbnN0IGNvdW50cnlMaXN0ID0gW1xuICAgIHtjb2RlOiBcIkFGXCIsIG5hbWU6IFwiQWZnaGFuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiQVhcIiwgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJBTFwiLCBuYW1lOiBcIkFsYmFuaWFcIn0sXG4gICAge2NvZGU6IFwiRFpcIiwgbmFtZTogXCJBbGdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFTXCIsIG5hbWU6IFwiQW1lcmljYW4gU2Ftb2FcIn0sXG4gICAge2NvZGU6IFwiQURcIiwgbmFtZTogXCJBbmRvcnJhXCJ9LFxuICAgIHtjb2RlOiBcIkFPXCIsIG5hbWU6IFwiQW5nb2xhXCJ9LFxuICAgIHtjb2RlOiBcIkFJXCIsIG5hbWU6IFwiQW5ndWlsbGFcIn0sXG4gICAge2NvZGU6IFwiQVFcIiwgbmFtZTogXCJBbnRhcmN0aWNhXCJ9LFxuICAgIHtjb2RlOiBcIkFHXCIsIG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwifSxcbiAgICB7Y29kZTogXCJBUlwiLCBuYW1lOiBcIkFyZ2VudGluYVwifSxcbiAgICB7Y29kZTogXCJBTVwiLCBuYW1lOiBcIkFybWVuaWFcIn0sXG4gICAge2NvZGU6IFwiQVdcIiwgbmFtZTogXCJBcnViYVwifSxcbiAgICB7Y29kZTogXCJBVVwiLCBuYW1lOiBcIkF1c3RyYWxpYVwifSxcbiAgICB7Y29kZTogXCJBVFwiLCBuYW1lOiBcIkF1c3RyaWFcIn0sXG4gICAge2NvZGU6IFwiQVpcIiwgbmFtZTogXCJBemVyYmFpamFuXCJ9LFxuICAgIHtjb2RlOiBcIkJTXCIsIG5hbWU6IFwiQmFoYW1hc1wifSxcbiAgICB7Y29kZTogXCJCSFwiLCBuYW1lOiBcIkJhaHJhaW5cIn0sXG4gICAge2NvZGU6IFwiQkRcIiwgbmFtZTogXCJCYW5nbGFkZXNoXCJ9LFxuICAgIHtjb2RlOiBcIkJCXCIsIG5hbWU6IFwiQmFyYmFkb3NcIn0sXG4gICAge2NvZGU6IFwiQllcIiwgbmFtZTogXCJCZWxhcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkJFXCIsIG5hbWU6IFwiQmVsZ2l1bVwifSxcbiAgICB7Y29kZTogXCJCWlwiLCBuYW1lOiBcIkJlbGl6ZVwifSxcbiAgICB7Y29kZTogXCJCSlwiLCBuYW1lOiBcIkJlbmluXCJ9LFxuICAgIHtjb2RlOiBcIkJNXCIsIG5hbWU6IFwiQmVybXVkYVwifSxcbiAgICB7Y29kZTogXCJCVFwiLCBuYW1lOiBcIkJodXRhblwifSxcbiAgICB7Y29kZTogXCJCT1wiLCBuYW1lOiBcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIkJRXCIsIG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIn0sXG4gICAge2NvZGU6IFwiQkFcIiwgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJXXCIsIG5hbWU6IFwiQm90c3dhbmFcIn0sXG4gICAge2NvZGU6IFwiQlZcIiwgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkJSXCIsIG5hbWU6IFwiQnJhemlsXCJ9LFxuICAgIHtjb2RlOiBcIklPXCIsIG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCJ9LFxuICAgIHtjb2RlOiBcIkJOXCIsIG5hbWU6IFwiQnJ1bmVpIERhcnVzc2FsYW1cIn0sXG4gICAge2NvZGU6IFwiQkdcIiwgbmFtZTogXCJCdWxnYXJpYVwifSxcbiAgICB7Y29kZTogXCJCRlwiLCBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wifSxcbiAgICB7Y29kZTogXCJCSVwiLCBuYW1lOiBcIkJ1cnVuZGlcIn0sXG4gICAge2NvZGU6IFwiQ1ZcIiwgbmFtZTogXCJDYWJvIFZlcmRlXCJ9LFxuICAgIHtjb2RlOiBcIktIXCIsIG5hbWU6IFwiQ2FtYm9kaWFcIn0sXG4gICAge2NvZGU6IFwiQ01cIiwgbmFtZTogXCJDYW1lcm9vblwifSxcbiAgICB7Y29kZTogXCJDQVwiLCBuYW1lOiBcIkNhbmFkYVwifSxcbiAgICB7Y29kZTogXCJLWVwiLCBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNGXCIsIG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlREXCIsIG5hbWU6IFwiQ2hhZFwifSxcbiAgICB7Y29kZTogXCJDTFwiLCBuYW1lOiBcIkNoaWxlXCJ9LFxuICAgIHtjb2RlOiBcIkNOXCIsIG5hbWU6IFwiQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiQ1hcIiwgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkNDXCIsIG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ09cIiwgbmFtZTogXCJDb2xvbWJpYVwifSxcbiAgICB7Y29kZTogXCJLTVwiLCBuYW1lOiBcIkNvbW9yb3NcIn0sXG4gICAge2NvZGU6IFwiQ0dcIiwgbmFtZTogXCJDb25nb1wifSxcbiAgICB7Y29kZTogXCJDRFwiLCBuYW1lOiBcIkNvbmdvIChEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIn0sXG4gICAge2NvZGU6IFwiQ0tcIiwgbmFtZTogXCJDb29rIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ1JcIiwgbmFtZTogXCJDb3N0YSBSaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkNJXCIsIG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIn0sXG4gICAge2NvZGU6IFwiSFJcIiwgbmFtZTogXCJDcm9hdGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNVXCIsIG5hbWU6IFwiQ3ViYVwifSxcbiAgICB7Y29kZTogXCJDV1wiLCBuYW1lOiBcIkN1cmHDp2FvXCJ9LFxuICAgIHtjb2RlOiBcIkNZXCIsIG5hbWU6IFwiQ3lwcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkNaXCIsIG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiREtcIiwgbmFtZTogXCJEZW5tYXJrXCJ9LFxuICAgIHtjb2RlOiBcIkRKXCIsIG5hbWU6IFwiRGppYm91dGlcIn0sXG4gICAge2NvZGU6IFwiRE1cIiwgbmFtZTogXCJEb21pbmljYVwifSxcbiAgICB7Y29kZTogXCJET1wiLCBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJFQ1wiLCBuYW1lOiBcIkVjdWFkb3JcIn0sXG4gICAge2NvZGU6IFwiRUdcIiwgbmFtZTogXCJFZ3lwdFwifSxcbiAgICB7Y29kZTogXCJTVlwiLCBuYW1lOiBcIkVsIFNhbHZhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkdRXCIsIG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiRVJcIiwgbmFtZTogXCJFcml0cmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVFXCIsIG5hbWU6IFwiRXN0b25pYVwifSxcbiAgICB7Y29kZTogXCJFVFwiLCBuYW1lOiBcIkV0aGlvcGlhXCJ9LFxuICAgIHtjb2RlOiBcIkZLXCIsIG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCJ9LFxuICAgIHtjb2RlOiBcIkZPXCIsIG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJGSlwiLCBuYW1lOiBcIkZpamkgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJGSVwiLCBuYW1lOiBcIkZpbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiRlJcIiwgbmFtZTogXCJGcmFuY2VcIn0sXG4gICAge2NvZGU6IFwiR0ZcIiwgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCJ9LFxuICAgIHtjb2RlOiBcIlBGXCIsIG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwifSxcbiAgICB7Y29kZTogXCJURlwiLCBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wifSxcbiAgICB7Y29kZTogXCJHQVwiLCBuYW1lOiBcIkdhYm9uXCJ9LFxuICAgIHtjb2RlOiBcIkdNXCIsIG5hbWU6IFwiR2FtYmlhXCJ9LFxuICAgIHtjb2RlOiBcIkdFXCIsIG5hbWU6IFwiR2VvcmdpYVwifSxcbiAgICB7Y29kZTogXCJERVwiLCBuYW1lOiBcIkdlcm1hbnlcIn0sXG4gICAge2NvZGU6IFwiR0hcIiwgbmFtZTogXCJHaGFuYVwifSxcbiAgICB7Y29kZTogXCJHSVwiLCBuYW1lOiBcIkdpYnJhbHRhclwifSxcbiAgICB7Y29kZTogXCJHUlwiLCBuYW1lOiBcIkdyZWVjZVwifSxcbiAgICB7Y29kZTogXCJHTFwiLCBuYW1lOiBcIkdyZWVubGFuZFwifSxcbiAgICB7Y29kZTogXCJHRFwiLCBuYW1lOiBcIkdyZW5hZGFcIn0sXG4gICAge2NvZGU6IFwiR1BcIiwgbmFtZTogXCJHdWFkZWxvdXBlXCJ9LFxuICAgIHtjb2RlOiBcIkdVXCIsIG5hbWU6IFwiR3VhbVwifSxcbiAgICB7Y29kZTogXCJHVFwiLCBuYW1lOiBcIkd1YXRlbWFsYVwifSxcbiAgICB7Y29kZTogXCJHR1wiLCBuYW1lOiBcIkd1ZXJuc2V5XCJ9LFxuICAgIHtjb2RlOiBcIkdOXCIsIG5hbWU6IFwiR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkdXXCIsIG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwifSxcbiAgICB7Y29kZTogXCJHWVwiLCBuYW1lOiBcIkd1eWFuYVwifSxcbiAgICB7Y29kZTogXCJIVFwiLCBuYW1lOiBcIkhhaXRpXCJ9LFxuICAgIHtjb2RlOiBcIkhNXCIsIG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlZBXCIsIG5hbWU6IFwiSG9seSBTZWVcIn0sXG4gICAge2NvZGU6IFwiSE5cIiwgbmFtZTogXCJIb25kdXJhc1wifSxcbiAgICB7Y29kZTogXCJIS1wiLCBuYW1lOiBcIkhvbmcgS29uZ1wifSxcbiAgICB7Y29kZTogXCJIVVwiLCBuYW1lOiBcIkh1bmdhcnlcIn0sXG4gICAge2NvZGU6IFwiSVNcIiwgbmFtZTogXCJJY2VsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklOXCIsIG5hbWU6IFwiSW5kaWFcIn0sXG4gICAge2NvZGU6IFwiSURcIiwgbmFtZTogXCJJbmRvbmVzaWFcIn0sXG4gICAge2NvZGU6IFwiSVJcIiwgbmFtZTogXCJJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJJUVwiLCBuYW1lOiBcIklyYXFcIn0sXG4gICAge2NvZGU6IFwiSUVcIiwgbmFtZTogXCJJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklNXCIsIG5hbWU6IFwiSXNsZSBvZiBNYW5cIn0sXG4gICAge2NvZGU6IFwiSUxcIiwgbmFtZTogXCJJc3JhZWxcIn0sXG4gICAge2NvZGU6IFwiSVRcIiwgbmFtZTogXCJJdGFseVwifSxcbiAgICB7Y29kZTogXCJKTVwiLCBuYW1lOiBcIkphbWFpY2FcIn0sXG4gICAge2NvZGU6IFwiSlBcIiwgbmFtZTogXCJKYXBhblwifSxcbiAgICB7Y29kZTogXCJKRVwiLCBuYW1lOiBcIkplcnNleVwifSxcbiAgICB7Y29kZTogXCJKT1wiLCBuYW1lOiBcIkpvcmRhblwifSxcbiAgICB7Y29kZTogXCJLWlwiLCBuYW1lOiBcIkthemFraHN0YW5cIn0sXG4gICAge2NvZGU6IFwiS0VcIiwgbmFtZTogXCJLZW55YVwifSxcbiAgICB7Y29kZTogXCJLSVwiLCBuYW1lOiBcIktpcmliYXRpXCJ9LFxuICAgIHtjb2RlOiBcIktQXCIsIG5hbWU6IFwiS29yZWEgKERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIktSXCIsIG5hbWU6IFwiS29yZWEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLV1wiLCBuYW1lOiBcIkt1d2FpdFwifSxcbiAgICB7Y29kZTogXCJLR1wiLCBuYW1lOiBcIkt5cmd5enN0YW5cIn0sXG4gICAge2NvZGU6IFwiTEFcIiwgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJMVlwiLCBuYW1lOiBcIkxhdHZpYVwifSxcbiAgICB7Y29kZTogXCJMQlwiLCBuYW1lOiBcIkxlYmFub25cIn0sXG4gICAge2NvZGU6IFwiTFNcIiwgbmFtZTogXCJMZXNvdGhvXCJ9LFxuICAgIHtjb2RlOiBcIkxSXCIsIG5hbWU6IFwiTGliZXJpYVwifSxcbiAgICB7Y29kZTogXCJMWVwiLCBuYW1lOiBcIkxpYnlhXCJ9LFxuICAgIHtjb2RlOiBcIkxJXCIsIG5hbWU6IFwiTGllY2h0ZW5zdGVpblwifSxcbiAgICB7Y29kZTogXCJMVFwiLCBuYW1lOiBcIkxpdGh1YW5pYVwifSxcbiAgICB7Y29kZTogXCJMVVwiLCBuYW1lOiBcIkx1eGVtYm91cmdcIn0sXG4gICAge2NvZGU6IFwiTU9cIiwgbmFtZTogXCJNYWNhb1wifSxcbiAgICB7Y29kZTogXCJNS1wiLCBuYW1lOiBcIk1hY2Vkb25pYSAodGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUdcIiwgbmFtZTogXCJNYWRhZ2FzY2FyXCJ9LFxuICAgIHtjb2RlOiBcIk1XXCIsIG5hbWU6IFwiTWFsYXdpXCJ9LFxuICAgIHtjb2RlOiBcIk1ZXCIsIG5hbWU6IFwiTWFsYXlzaWFcIn0sXG4gICAge2NvZGU6IFwiTVZcIiwgbmFtZTogXCJNYWxkaXZlc1wifSxcbiAgICB7Y29kZTogXCJNTFwiLCBuYW1lOiBcIk1hbGlcIn0sXG4gICAge2NvZGU6IFwiTVRcIiwgbmFtZTogXCJNYWx0YVwifSxcbiAgICB7Y29kZTogXCJNSFwiLCBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTVFcIiwgbmFtZTogXCJNYXJ0aW5pcXVlXCJ9LFxuICAgIHtjb2RlOiBcIk1SXCIsIG5hbWU6IFwiTWF1cml0YW5pYVwifSxcbiAgICB7Y29kZTogXCJNVVwiLCBuYW1lOiBcIk1hdXJpdGl1c1wifSxcbiAgICB7Y29kZTogXCJZVFwiLCBuYW1lOiBcIk1heW90dGVcIn0sXG4gICAge2NvZGU6IFwiTVhcIiwgbmFtZTogXCJNZXhpY29cIn0sXG4gICAge2NvZGU6IFwiRk1cIiwgbmFtZTogXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwifSxcbiAgICB7Y29kZTogXCJNRFwiLCBuYW1lOiBcIk1vbGRvdmEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJNQ1wiLCBuYW1lOiBcIk1vbmFjb1wifSxcbiAgICB7Y29kZTogXCJNTlwiLCBuYW1lOiBcIk1vbmdvbGlhXCJ9LFxuICAgIHtjb2RlOiBcIk1FXCIsIG5hbWU6IFwiTW9udGVuZWdyb1wifSxcbiAgICB7Y29kZTogXCJNU1wiLCBuYW1lOiBcIk1vbnRzZXJyYXRcIn0sXG4gICAge2NvZGU6IFwiTUFcIiwgbmFtZTogXCJNb3JvY2NvXCJ9LFxuICAgIHtjb2RlOiBcIk1aXCIsIG5hbWU6IFwiTW96YW1iaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNTVwiLCBuYW1lOiBcIk15YW5tYXJcIn0sXG4gICAge2NvZGU6IFwiTkFcIiwgbmFtZTogXCJOYW1pYmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5SXCIsIG5hbWU6IFwiTmF1cnVcIn0sXG4gICAge2NvZGU6IFwiTlBcIiwgbmFtZTogXCJOZXBhbFwifSxcbiAgICB7Y29kZTogXCJOTFwiLCBuYW1lOiBcIk5ldGhlcmxhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5DXCIsIG5hbWU6IFwiTmV3IENhbGVkb25pYVwifSxcbiAgICB7Y29kZTogXCJOWlwiLCBuYW1lOiBcIk5ldyBaZWFsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk5JXCIsIG5hbWU6IFwiTmljYXJhZ3VhXCJ9LFxuICAgIHtjb2RlOiBcIk5FXCIsIG5hbWU6IFwiTmlnZXJcIn0sXG4gICAge2NvZGU6IFwiTkdcIiwgbmFtZTogXCJOaWdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5VXCIsIG5hbWU6IFwiTml1ZVwifSxcbiAgICB7Y29kZTogXCJORlwiLCBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk1QXCIsIG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5PXCIsIG5hbWU6IFwiTm9yd2F5XCJ9LFxuICAgIHtjb2RlOiBcIk9NXCIsIG5hbWU6IFwiT21hblwifSxcbiAgICB7Y29kZTogXCJQS1wiLCBuYW1lOiBcIlBha2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlBXXCIsIG5hbWU6IFwiUGFsYXVcIn0sXG4gICAge2NvZGU6IFwiUFNcIiwgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlBBXCIsIG5hbWU6IFwiUGFuYW1hXCJ9LFxuICAgIHtjb2RlOiBcIlBHXCIsIG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJQWVwiLCBuYW1lOiBcIlBhcmFndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlBFXCIsIG5hbWU6IFwiUGVydVwifSxcbiAgICB7Y29kZTogXCJQSFwiLCBuYW1lOiBcIlBoaWxpcHBpbmVzXCJ9LFxuICAgIHtjb2RlOiBcIlBOXCIsIG5hbWU6IFwiUGl0Y2Fpcm5cIn0sXG4gICAge2NvZGU6IFwiUExcIiwgbmFtZTogXCJQb2xhbmRcIn0sXG4gICAge2NvZGU6IFwiUFRcIiwgbmFtZTogXCJQb3J0dWdhbFwifSxcbiAgICB7Y29kZTogXCJQUlwiLCBuYW1lOiBcIlB1ZXJ0byBSaWNvXCJ9LFxuICAgIHtjb2RlOiBcIlFBXCIsIG5hbWU6IFwiUWF0YXJcIn0sXG4gICAge2NvZGU6IFwiUkVcIiwgbmFtZTogXCJSw6l1bmlvblwifSxcbiAgICB7Y29kZTogXCJST1wiLCBuYW1lOiBcIlJvbWFuaWFcIn0sXG4gICAge2NvZGU6IFwiUlVcIiwgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIn0sXG4gICAge2NvZGU6IFwiUldcIiwgbmFtZTogXCJSd2FuZGFcIn0sXG4gICAge2NvZGU6IFwiQkxcIiwgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwifSxcbiAgICB7Y29kZTogXCJTSFwiLCBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCJ9LFxuICAgIHtjb2RlOiBcIktOXCIsIG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCJ9LFxuICAgIHtjb2RlOiBcIkxDXCIsIG5hbWU6IFwiU2FpbnQgTHVjaWFcIn0sXG4gICAge2NvZGU6IFwiTUZcIiwgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJQTVwiLCBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIn0sXG4gICAge2NvZGU6IFwiVkNcIiwgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wifSxcbiAgICB7Y29kZTogXCJXU1wiLCBuYW1lOiBcIlNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIlNNXCIsIG5hbWU6IFwiU2FuIE1hcmlub1wifSxcbiAgICB7Y29kZTogXCJTVFwiLCBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwifSxcbiAgICB7Y29kZTogXCJTQVwiLCBuYW1lOiBcIlNhdWRpIEFyYWJpYVwifSxcbiAgICB7Y29kZTogXCJTTlwiLCBuYW1lOiBcIlNlbmVnYWxcIn0sXG4gICAge2NvZGU6IFwiUlNcIiwgbmFtZTogXCJTZXJiaWFcIn0sXG4gICAge2NvZGU6IFwiU0NcIiwgbmFtZTogXCJTZXljaGVsbGVzXCJ9LFxuICAgIHtjb2RlOiBcIlNMXCIsIG5hbWU6IFwiU2llcnJhIExlb25lXCJ9LFxuICAgIHtjb2RlOiBcIlNHXCIsIG5hbWU6IFwiU2luZ2Fwb3JlXCJ9LFxuICAgIHtjb2RlOiBcIlNYXCIsIG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJTS1wiLCBuYW1lOiBcIlNsb3Zha2lhXCJ9LFxuICAgIHtjb2RlOiBcIlNJXCIsIG5hbWU6IFwiU2xvdmVuaWFcIn0sXG4gICAge2NvZGU6IFwiU0JcIiwgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU09cIiwgbmFtZTogXCJTb21hbGlhXCJ9LFxuICAgIHtjb2RlOiBcIlpBXCIsIG5hbWU6IFwiU291dGggQWZyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkdTXCIsIG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU1NcIiwgbmFtZTogXCJTb3V0aCBTdWRhblwifSxcbiAgICB7Y29kZTogXCJFU1wiLCBuYW1lOiBcIlNwYWluXCJ9LFxuICAgIHtjb2RlOiBcIkxLXCIsIG5hbWU6IFwiU3JpIExhbmthXCJ9LFxuICAgIHtjb2RlOiBcIlNEXCIsIG5hbWU6IFwiU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiU1JcIiwgbmFtZTogXCJTdXJpbmFtZVwifSxcbiAgICB7Y29kZTogXCJTSlwiLCBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIn0sXG4gICAge2NvZGU6IFwiU1pcIiwgbmFtZTogXCJTd2F6aWxhbmRcIn0sXG4gICAge2NvZGU6IFwiU0VcIiwgbmFtZTogXCJTd2VkZW5cIn0sXG4gICAge2NvZGU6IFwiQ0hcIiwgbmFtZTogXCJTd2l0emVybGFuZFwifSxcbiAgICB7Y29kZTogXCJTWVwiLCBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlRXXCIsIG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwifSxcbiAgICB7Y29kZTogXCJUSlwiLCBuYW1lOiBcIlRhamlraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVFpcIiwgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlRIXCIsIG5hbWU6IFwiVGhhaWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVExcIiwgbmFtZTogXCJUaW1vci1MZXN0ZVwifSxcbiAgICB7Y29kZTogXCJUR1wiLCBuYW1lOiBcIlRvZ29cIn0sXG4gICAge2NvZGU6IFwiVEtcIiwgbmFtZTogXCJUb2tlbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlRPXCIsIG5hbWU6IFwiVG9uZ2FcIn0sXG4gICAge2NvZGU6IFwiVFRcIiwgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCJ9LFxuICAgIHtjb2RlOiBcIlROXCIsIG5hbWU6IFwiVHVuaXNpYVwifSxcbiAgICB7Y29kZTogXCJUUlwiLCBuYW1lOiBcIlR1cmtleVwifSxcbiAgICB7Y29kZTogXCJUTVwiLCBuYW1lOiBcIlR1cmttZW5pc3RhblwifSxcbiAgICB7Y29kZTogXCJUQ1wiLCBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJUVlwiLCBuYW1lOiBcIlR1dmFsdVwifSxcbiAgICB7Y29kZTogXCJVR1wiLCBuYW1lOiBcIlVnYW5kYVwifSxcbiAgICB7Y29kZTogXCJVQVwiLCBuYW1lOiBcIlVrcmFpbmVcIn0sXG4gICAge2NvZGU6IFwiQUVcIiwgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wifSxcbiAgICB7Y29kZTogXCJHQlwiLCBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVVNcIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIn0sXG4gICAge2NvZGU6IFwiVU1cIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVVlcIiwgbmFtZTogXCJVcnVndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlVaXCIsIG5hbWU6IFwiVXpiZWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJWVVwiLCBuYW1lOiBcIlZhbnVhdHVcIn0sXG4gICAge2NvZGU6IFwiVkVcIiwgbmFtZTogXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIlZOXCIsIG5hbWU6IFwiVmlldG5hbVwifSxcbiAgICB7Y29kZTogXCJWR1wiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwifSxcbiAgICB7Y29kZTogXCJWSVwiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwifSxcbiAgICB7Y29kZTogXCJXRlwiLCBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCJ9LFxuICAgIHtjb2RlOiBcIkVIXCIsIG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIn0sXG4gICAge2NvZGU6IFwiWUVcIiwgbmFtZTogXCJZZW1lblwifSxcbiAgICB7Y29kZTogXCJaTVwiLCBuYW1lOiBcIlphbWJpYVwifSxcbiAgICB7Y29kZTogXCJaV1wiLCBuYW1lOiBcIlppbWJhYndlXCJ9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0ICogYXMgYXBpcyBmcm9tIFwiLi9hcGlzXCI7XG5pbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc2xpa2Vjb250ZW50XCIpO1xuY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heGNvbnRlbnRcIik7XG5jb25zdCBtaW5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluY29udGVudFwiKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmNoYW5jZWNvbnRlbnRcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRzcGVlZGNvbnRlbnRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHljb250ZW50XCIpO1xuY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZWNvbnRlbnRcIik7XG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldGNvbnRlbnRcIik7XG5cbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlcmRlc2NyaXB0aW9uXCIpO1xuY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50aWNvblwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoV2VhdGhlcigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgbG9jYXRpb25DaG9zZW47XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gbG9jYXRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuID0gXCJMaXNib25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvKGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgRE9NLmNoYW5nZUJHSW1hZ2UoZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQpO1xuXG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpfSDCukNgO1xuICAgICAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1heCl9IMK6Q2A7XG4gICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWluKX0gwrpDYDtcbiAgICAgICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnBvcCAqIDEwMCl9JWA7XG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgICAgIH0gS20vSGA7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoXG4gICAgICAgICAgICBkYXRhLmN1cnJlbnQuc3VucmlzZSxcbiAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgKTtcbiAgICAgICAgc3Vuc2V0LnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoXG4gICAgICAgICAgICBkYXRhLmN1cnJlbnQuc3Vuc2V0LFxuICAgICAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICAgICApO1xuXG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbnZlcnRUb1RpdGxlQ2FzZShcbiAgICAgICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5sb2NhdGlvbk5hbWVcbiAgICAgICAgfSwgJHsoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5jb3VudHJ5TmFtZX1gO1xuICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC50ZW1wKX0gwrpDYDtcblxuICAgICAgICBjdXJyZW50SWNvbi5zcmMgPSBET00uZ2V0V2VhdGhlckljb24oZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG5cbiAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShkYXRhLmRhaWx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHkpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGRhaWx5SWNvbnMsIGRhaWx5TWF4VGVtcHMsIGRhaWx5TWluVGVtcHMpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YS5ob3VybHkpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlzQXJyYXkoZGF5cywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBkYXlzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWREYXkgPSBgJHtjb252ZXJ0VW5peFRvV2Vla2RheShcbiAgICAgICAgICAgIGRheXNbaV0uZHQsXG4gICAgICAgICAgICB0aW1lWm9uZVxuICAgICAgICApfSwgJHtjb252ZXJ0VW5peFRvRGF5KGRheXNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBkYXlzQXJyYXkucHVzaChjb252ZXJ0ZWREYXkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5c0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF5cykge1xuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goZGF5c1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNYXhUZW1wcyhkYXlzKSB7XG4gICAgY29uc3QgbWF4VGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1heFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5tYXgpfSDCukNgKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWluVGVtcHMoZGF5cykge1xuICAgIGNvbnN0IG1pblRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtaW5UZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWluKX0gwrpDYCk7XG4gICAgfVxuICAgIHJldHVybiBtaW5UZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0FycmF5KGhvdXJzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGhvdXJzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IGAke2NvbnZlcnRXaXRob3V0TWludXRlcyhob3Vyc1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGhvdXJzQXJyYXkucHVzaChjb252ZXJ0ZWRIb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXJzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUljb25zQXJyYXkoaG91cnMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChob3Vyc1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5VGVtcHMoaG91cnMpIHtcbiAgICBjb25zdCBUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGhvdXJzW2ldLnRlbXApfSDCukNgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1RpdGxlQ2FzZShzdHJpbmcpIHtcbiAgICBjb25zdCBhcnJheU9mV29yZHMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWRBcnJheSA9IFtdO1xuICAgIGFycmF5T2ZXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PlxuICAgICAgICBjYXBpdGFsaXplZEFycmF5LnB1c2god29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpKVxuICAgICk7XG4gICAgcmV0dXJuIGNhcGl0YWxpemVkQXJyYXkuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9Ib3VyKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRXaXRob3V0TWludXRlcyh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gaG91ci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvRGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9XZWVrZGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiB3ZWVrZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoV2VhdGhlcik7XG5cbmNvbnN0IGhvdXJseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0hvdXJseUZvcmVjYXN0KTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvRGFpbHlGb3JlY2FzdCk7XG5cbkRPTS5jcmVhdGVGaXJzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbkRPTS5jcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG5zZWFyY2hXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=