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
/* harmony export */   "changeTextContent": () => (/* binding */ changeTextContent),
/* harmony export */   "getWeatherIcon": () => (/* binding */ getWeatherIcon),
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
    if (!document.querySelector(".firsthourlydivs")) {
        hideDailyForecast();
        createFirstHourlyDivs();

        const rightArrow = document.querySelector(".rightarrow");
        rightArrow.addEventListener("click", showLastHourlyDivs);
    } else {
        const forecastChildren = document.querySelectorAll(".forecast > *");
        forecastChildren.forEach((child) => child.classList.add("hide"));

        const firstHourlyDivs = document.querySelectorAll(".firsthourlydivs");
        firstHourlyDivs.forEach((div) => div.classList.remove("hide"));

        const rightArrow = document.querySelector(".rightarrow");
        rightArrow.classList.remove("hide");
    }
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

    const rightArrow = document.createElement("img");
    rightArrow.classList.add("rightarrow");
    rightArrow.setAttribute("src", "../src/Images/arrow-right-circle.svg");
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

    const leftArrow = document.createElement("img");
    leftArrow.classList.add("leftarrow");
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

const dailyDates = document.querySelectorAll(".date");

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

        const days = createDaysArray(data.daily);
        const dailyIcons = createDailyIconsArray(data.daily);
        const dailyMaxTemps = getDailyMaxTemps(data.daily);
        const dailyMinTemps = getDailyMinTemps(data.daily);

        _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(days, dailyIcons, dailyMaxTemps, dailyMinTemps);
    } catch (error) {
        console.log(error);
    }
}

function createDaysArray(days) {
    const daysArray = [];

    for (let i = 1; i <= 7; i++) {
        const convertedDay = `${convertUnixToWeekday(
            days[i].dt
        )}, ${convertUnixToDay(days[i].dt)}`;
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

function convertUnixToDay(time, timeZone) {
    const options = {
        day: "numeric",
    };

    const day = new Date(time * 1000);
    return day.toLocaleString("en-US", options);
}

function convertUnixToWeekday(time, timeZone) {
    const options = {
        weekday: "long",
    };

    const weekday = new Date(time * 1000);
    return weekday.toLocaleString("en-US", options);
}

searchBtn.addEventListener("click", searchWeather);

const hourlyButton = document.querySelector(".hourly");

hourlyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_2__.switchToHourlyForecast);

const dailyButton = document.querySelector(".daily");

dailyButton.addEventListener("click", _DOM__WEBPACK_IMPORTED_MODULE_2__.switchToDailyForecast);
searchWeather();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVks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QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNw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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQW9CO0FBQ3ZDLFNBQVMsSUFBSSxPQUFPLGtEQUFvQiw4QkFBOEI7QUFDdEUsNENBQTRDLCtCQUErQjs7QUFFM0UsMEJBQTBCLGdEQUFrQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxREFBdUI7QUFDL0IsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLGdDQUFnQztBQUNoQztBQUNBLFVBQVUsSUFBSSw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLDhCQUE4Qiw4QkFBOEI7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUIsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHVDQUF1Qyx3REFBMEI7O0FBRWpFOztBQUVBLHNDQUFzQyx1REFBeUI7QUFDL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvd2lsbGlhbS1ib3V0LVJQeldJMHJvbFM4LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA0ZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlEQUFxRTtJQUNyRSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgNGZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTIuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudHdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b3Age1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi50b3BkaXYge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi50b3BpY29ucyB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4udG9wd3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvcGNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZlZWxzbGlrZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDcuNXZ3O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IGltZyB7XFxuICAgIGxlZnQ6IC0xM3B4O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gLnRvcHdyYXAge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICAgIGhlaWdodDogMy4yNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG59XFxuXFxuLnN1bnJpc2Uge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljl2dztcXG59XFxuXFxuLnN1bnNldCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNjV2dztcXG59XFxuXFxuLnN1bnJpc2VpY29uLFxcbi5zdW5zZXRpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDRweDtcXG59XFxuXFxuLndpbmRzcGVlZCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwLjJ2dztcXG59XFxuXFxuLndpbmRzcGVlZCA+IGltZyB7XFxuICAgIGhlaWdodDogMy42cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogM3B4O1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuXFxuLm1pbnRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5tYXh0ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguODV2dztcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2UgPiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IDEzLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYWlseWRpdnMge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uZm9yZWNhc3RpY29uIHtcXG4gICAgd2lkdGg6IDMuMjVyZW07XFxufVxcblxcbi5kYWlseXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZmlyc3Rob3VybHlkaXZzLFxcbi5sYXN0aG91cmx5ZGl2cyB7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlpY29uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCR0ltYWdlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvam9oYW5uZXMtcGxlbmlvLUVTTDFySXM5ajQ4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gMzAwICYmIGNvZGUgPCA0MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3JvbWFuLXN5bmtldnljaC1xUHZCbVN2bW9ocy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDUwMCAmJiBjb2RlIDwgNjAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb2RvbGZvLWN1YWRyb3MtOHdLcEZxeERKVDAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA2MDAgJiYgY29kZSA8IDcwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvdGhlLW5pZ21hdGljLVJEaDlWLWM0aVNJLXVuc3BsYXNoXFxcXCBcXFxcKDFcXFxcKS5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID4gODAwICYmIGNvZGUgPCA5MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL25pY2stZmV3aW5ncy1adERpSnpva1ppMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3MDEgfHwgY29kZSA9PT0gNzQxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9kYXZlLWhvZWZsZXItb2QyODd2UXl1ZnctdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNvZGUgPT09IDcxMSB8fFxuICAgICAgICBjb2RlID09PSA3MjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzMxIHx8XG4gICAgICAgIGNvZGUgPT09IDc1MSB8fFxuICAgICAgICBjb2RlID09PSA3NjEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYyXG4gICAgKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9jaHJpcy1sZWJvdXRpbGxpZXItYmU4bW5GWHpCZ28tdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzcxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9raGFta2VvLXZpbGF5c2luZy1XdHdTc3F3WWxBMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3ODEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2VzcGVuLWJpZXJ1ZC1XNDNnbTZURDExOC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy93aWxsaWFtLWJvdXQtUlB6V0kwcm9sUzgtdW5zcGxhc2guanBnKVwiO1xufVxuXG5jb25zdCBkYWlseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5ZGl2c1wiKTtcblxuZnVuY3Rpb24gaGlkZURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvSG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0aG91cmx5ZGl2c1wiKSkge1xuICAgICAgICBoaWRlRGFpbHlGb3JlY2FzdCgpO1xuICAgICAgICBjcmVhdGVGaXJzdEhvdXJseURpdnMoKTtcblxuICAgICAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgICAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0Q2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0ID4gKlwiKTtcbiAgICAgICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgICAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfVxufVxuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VybHlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VyLmNsYXNzTGlzdC5hZGQoXCJob3VyXCIpO1xuICAgICAgICBob3VyLnRleHRDb250ZW50ID0gXCIxMiBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDAgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwicmlnaHRhcnJvd1wiKTtcbiAgICByaWdodEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoXCJsYXN0aG91cmx5ZGl2c1wiKTtcbiAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoaG91cmx5RGl2KTtcblxuICAgICAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcbiAgICAgICAgaG91ci50ZXh0Q29udGVudCA9IFwiMSBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDEgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL0ltYWdlcy9hcnJvdy1sZWZ0LWNpcmNsZS5zdmdcIik7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbn1cblxuZnVuY3Rpb24gc2hvd0xhc3RIb3VybHlEaXZzKCkge1xuICAgIGhpZGVGaXJzdEhvdXJseURpdnMoKTtcblxuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGlmICghbGFzdEhvdXJseURpdnMpIGNyZWF0ZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgZWxzZSB1bmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0ZpcnN0SG91cmx5RGl2cyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5mdW5jdGlvbiBzaG93Rmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGhpZGVMYXN0SG91cmx5RGl2cygpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHVuaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRleHRDb250ZW50KHRleHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRpY29uXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBcIjAxZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3N1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMW5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAyZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXN1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMm5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAzZFwiIHx8IGNvZGUgPT09IFwiMDNuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQgKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA0ZFwiIHx8IGNvZGUgPT09IFwiMDRuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWRzLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXJhaW4gKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjExZFwiIHx8IGNvZGUgPT09IFwiMTFuXCIpXG4gICAgICAgIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbGlnaHRuaW5nICgyKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxM2RcIiB8fCBjb2RlID09PSBcIjEzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3Nub3cuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiNTBkXCIgfHwgY29kZSA9PT0gXCI1MG5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1mb2cuc3ZnXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGNvZGVzLCBtYXhUZW1wcywgbWluVGVtcHMpIHtcbiAgICBjb25zdCBkYWlseURhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlXCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RpY29uXCIpO1xuICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWF4XCIpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWluXCIpO1xuICAgIGNvbnNvbGUubG9nKGRhaWx5Rm9yZWNhc3RJY29ucyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBkYWlseURhdGVzW2ldLnRleHRDb250ZW50ID0gZGF5c1tpXTtcblxuICAgICAgICBkYWlseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGRhaWx5TWF4VGVtcHNbaV0udGV4dENvbnRlbnQgPSBtYXhUZW1wc1tpXTtcblxuICAgICAgICBkYWlseU1pblRlbXBzW2ldLnRleHRDb250ZW50ID0gbWluVGVtcHNbaV07XG4gICAgfVxufVxuIiwiY29uc3Qga2V5ID0gXCI5YjJlY2JhNzUzYTJkMGI1MDFiMTZiZTM0NTI0NjlmZlwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7bGF0OiBkYXRhWzBdLmxhdCwgbG9uOiBkYXRhWzBdLmxvbn07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8obG9jYXRpb24pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpY2BcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkYXRhWzBdLm5hbWU7XG4gICAgbGV0IGNvdW50cnlOYW1lID0gZGF0YVswXS5jb3VudHJ5O1xuXG4gICAgY291bnRyeUxpc3QuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeS5jb2RlID09PSBjb3VudHJ5TmFtZSkgY291bnRyeU5hbWUgPSBjb3VudHJ5Lm5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2xvY2F0aW9uTmFtZSwgY291bnRyeU5hbWV9O1xufVxuXG5jb25zdCBjb3VudHJ5TGlzdCA9IFtcbiAgICB7Y29kZTogXCJBRlwiLCBuYW1lOiBcIkFmZ2hhbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkFYXCIsIG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQUxcIiwgbmFtZTogXCJBbGJhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkRaXCIsIG5hbWU6IFwiQWxnZXJpYVwifSxcbiAgICB7Y29kZTogXCJBU1wiLCBuYW1lOiBcIkFtZXJpY2FuIFNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIkFEXCIsIG5hbWU6IFwiQW5kb3JyYVwifSxcbiAgICB7Y29kZTogXCJBT1wiLCBuYW1lOiBcIkFuZ29sYVwifSxcbiAgICB7Y29kZTogXCJBSVwiLCBuYW1lOiBcIkFuZ3VpbGxhXCJ9LFxuICAgIHtjb2RlOiBcIkFRXCIsIG5hbWU6IFwiQW50YXJjdGljYVwifSxcbiAgICB7Y29kZTogXCJBR1wiLCBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIn0sXG4gICAge2NvZGU6IFwiQVJcIiwgbmFtZTogXCJBcmdlbnRpbmFcIn0sXG4gICAge2NvZGU6IFwiQU1cIiwgbmFtZTogXCJBcm1lbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFXXCIsIG5hbWU6IFwiQXJ1YmFcIn0sXG4gICAge2NvZGU6IFwiQVVcIiwgbmFtZTogXCJBdXN0cmFsaWFcIn0sXG4gICAge2NvZGU6IFwiQVRcIiwgbmFtZTogXCJBdXN0cmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFaXCIsIG5hbWU6IFwiQXplcmJhaWphblwifSxcbiAgICB7Y29kZTogXCJCU1wiLCBuYW1lOiBcIkJhaGFtYXNcIn0sXG4gICAge2NvZGU6IFwiQkhcIiwgbmFtZTogXCJCYWhyYWluXCJ9LFxuICAgIHtjb2RlOiBcIkJEXCIsIG5hbWU6IFwiQmFuZ2xhZGVzaFwifSxcbiAgICB7Y29kZTogXCJCQlwiLCBuYW1lOiBcIkJhcmJhZG9zXCJ9LFxuICAgIHtjb2RlOiBcIkJZXCIsIG5hbWU6IFwiQmVsYXJ1c1wifSxcbiAgICB7Y29kZTogXCJCRVwiLCBuYW1lOiBcIkJlbGdpdW1cIn0sXG4gICAge2NvZGU6IFwiQlpcIiwgbmFtZTogXCJCZWxpemVcIn0sXG4gICAge2NvZGU6IFwiQkpcIiwgbmFtZTogXCJCZW5pblwifSxcbiAgICB7Y29kZTogXCJCTVwiLCBuYW1lOiBcIkJlcm11ZGFcIn0sXG4gICAge2NvZGU6IFwiQlRcIiwgbmFtZTogXCJCaHV0YW5cIn0sXG4gICAge2NvZGU6IFwiQk9cIiwgbmFtZTogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwifSxcbiAgICB7Y29kZTogXCJCUVwiLCBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCJ9LFxuICAgIHtjb2RlOiBcIkJBXCIsIG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwifSxcbiAgICB7Y29kZTogXCJCV1wiLCBuYW1lOiBcIkJvdHN3YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJWXCIsIG5hbWU6IFwiQm91dmV0IElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJCUlwiLCBuYW1lOiBcIkJyYXppbFwifSxcbiAgICB7Y29kZTogXCJJT1wiLCBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwifSxcbiAgICB7Y29kZTogXCJCTlwiLCBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCJ9LFxuICAgIHtjb2RlOiBcIkJHXCIsIG5hbWU6IFwiQnVsZ2FyaWFcIn0sXG4gICAge2NvZGU6IFwiQkZcIiwgbmFtZTogXCJCdXJraW5hIEZhc29cIn0sXG4gICAge2NvZGU6IFwiQklcIiwgbmFtZTogXCJCdXJ1bmRpXCJ9LFxuICAgIHtjb2RlOiBcIkNWXCIsIG5hbWU6IFwiQ2FibyBWZXJkZVwifSxcbiAgICB7Y29kZTogXCJLSFwiLCBuYW1lOiBcIkNhbWJvZGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNNXCIsIG5hbWU6IFwiQ2FtZXJvb25cIn0sXG4gICAge2NvZGU6IFwiQ0FcIiwgbmFtZTogXCJDYW5hZGFcIn0sXG4gICAge2NvZGU6IFwiS1lcIiwgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDRlwiLCBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJURFwiLCBuYW1lOiBcIkNoYWRcIn0sXG4gICAge2NvZGU6IFwiQ0xcIiwgbmFtZTogXCJDaGlsZVwifSxcbiAgICB7Y29kZTogXCJDTlwiLCBuYW1lOiBcIkNoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIkNYXCIsIG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJDQ1wiLCBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNPXCIsIG5hbWU6IFwiQ29sb21iaWFcIn0sXG4gICAge2NvZGU6IFwiS01cIiwgbmFtZTogXCJDb21vcm9zXCJ9LFxuICAgIHtjb2RlOiBcIkNHXCIsIG5hbWU6IFwiQ29uZ29cIn0sXG4gICAge2NvZGU6IFwiQ0RcIiwgbmFtZTogXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJ9LFxuICAgIHtjb2RlOiBcIkNLXCIsIG5hbWU6IFwiQ29vayBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNSXCIsIG5hbWU6IFwiQ29zdGEgUmljYVwifSxcbiAgICB7Y29kZTogXCJDSVwiLCBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCJ9LFxuICAgIHtjb2RlOiBcIkhSXCIsIG5hbWU6IFwiQ3JvYXRpYVwifSxcbiAgICB7Y29kZTogXCJDVVwiLCBuYW1lOiBcIkN1YmFcIn0sXG4gICAge2NvZGU6IFwiQ1dcIiwgbmFtZTogXCJDdXJhw6dhb1wifSxcbiAgICB7Y29kZTogXCJDWVwiLCBuYW1lOiBcIkN5cHJ1c1wifSxcbiAgICB7Y29kZTogXCJDWlwiLCBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkRLXCIsIG5hbWU6IFwiRGVubWFya1wifSxcbiAgICB7Y29kZTogXCJESlwiLCBuYW1lOiBcIkRqaWJvdXRpXCJ9LFxuICAgIHtjb2RlOiBcIkRNXCIsIG5hbWU6IFwiRG9taW5pY2FcIn0sXG4gICAge2NvZGU6IFwiRE9cIiwgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiRUNcIiwgbmFtZTogXCJFY3VhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkVHXCIsIG5hbWU6IFwiRWd5cHRcIn0sXG4gICAge2NvZGU6IFwiU1ZcIiwgbmFtZTogXCJFbCBTYWx2YWRvclwifSxcbiAgICB7Y29kZTogXCJHUVwiLCBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVSXCIsIG5hbWU6IFwiRXJpdHJlYVwifSxcbiAgICB7Y29kZTogXCJFRVwiLCBuYW1lOiBcIkVzdG9uaWFcIn0sXG4gICAge2NvZGU6IFwiRVRcIiwgbmFtZTogXCJFdGhpb3BpYVwifSxcbiAgICB7Y29kZTogXCJGS1wiLCBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwifSxcbiAgICB7Y29kZTogXCJGT1wiLCBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiRkpcIiwgbmFtZTogXCJGaWppIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiRklcIiwgbmFtZTogXCJGaW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkZSXCIsIG5hbWU6IFwiRnJhbmNlXCJ9LFxuICAgIHtjb2RlOiBcIkdGXCIsIG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwifSxcbiAgICB7Y29kZTogXCJQRlwiLCBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIn0sXG4gICAge2NvZGU6IFwiVEZcIiwgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIn0sXG4gICAge2NvZGU6IFwiR0FcIiwgbmFtZTogXCJHYWJvblwifSxcbiAgICB7Y29kZTogXCJHTVwiLCBuYW1lOiBcIkdhbWJpYVwifSxcbiAgICB7Y29kZTogXCJHRVwiLCBuYW1lOiBcIkdlb3JnaWFcIn0sXG4gICAge2NvZGU6IFwiREVcIiwgbmFtZTogXCJHZXJtYW55XCJ9LFxuICAgIHtjb2RlOiBcIkdIXCIsIG5hbWU6IFwiR2hhbmFcIn0sXG4gICAge2NvZGU6IFwiR0lcIiwgbmFtZTogXCJHaWJyYWx0YXJcIn0sXG4gICAge2NvZGU6IFwiR1JcIiwgbmFtZTogXCJHcmVlY2VcIn0sXG4gICAge2NvZGU6IFwiR0xcIiwgbmFtZTogXCJHcmVlbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiR0RcIiwgbmFtZTogXCJHcmVuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIkdQXCIsIG5hbWU6IFwiR3VhZGVsb3VwZVwifSxcbiAgICB7Y29kZTogXCJHVVwiLCBuYW1lOiBcIkd1YW1cIn0sXG4gICAge2NvZGU6IFwiR1RcIiwgbmFtZTogXCJHdWF0ZW1hbGFcIn0sXG4gICAge2NvZGU6IFwiR0dcIiwgbmFtZTogXCJHdWVybnNleVwifSxcbiAgICB7Y29kZTogXCJHTlwiLCBuYW1lOiBcIkd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJHV1wiLCBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIn0sXG4gICAge2NvZGU6IFwiR1lcIiwgbmFtZTogXCJHdXlhbmFcIn0sXG4gICAge2NvZGU6IFwiSFRcIiwgbmFtZTogXCJIYWl0aVwifSxcbiAgICB7Y29kZTogXCJITVwiLCBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJWQVwiLCBuYW1lOiBcIkhvbHkgU2VlXCJ9LFxuICAgIHtjb2RlOiBcIkhOXCIsIG5hbWU6IFwiSG9uZHVyYXNcIn0sXG4gICAge2NvZGU6IFwiSEtcIiwgbmFtZTogXCJIb25nIEtvbmdcIn0sXG4gICAge2NvZGU6IFwiSFVcIiwgbmFtZTogXCJIdW5nYXJ5XCJ9LFxuICAgIHtjb2RlOiBcIklTXCIsIG5hbWU6IFwiSWNlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTlwiLCBuYW1lOiBcIkluZGlhXCJ9LFxuICAgIHtjb2RlOiBcIklEXCIsIG5hbWU6IFwiSW5kb25lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIklSXCIsIG5hbWU6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiSVFcIiwgbmFtZTogXCJJcmFxXCJ9LFxuICAgIHtjb2RlOiBcIklFXCIsIG5hbWU6IFwiSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTVwiLCBuYW1lOiBcIklzbGUgb2YgTWFuXCJ9LFxuICAgIHtjb2RlOiBcIklMXCIsIG5hbWU6IFwiSXNyYWVsXCJ9LFxuICAgIHtjb2RlOiBcIklUXCIsIG5hbWU6IFwiSXRhbHlcIn0sXG4gICAge2NvZGU6IFwiSk1cIiwgbmFtZTogXCJKYW1haWNhXCJ9LFxuICAgIHtjb2RlOiBcIkpQXCIsIG5hbWU6IFwiSmFwYW5cIn0sXG4gICAge2NvZGU6IFwiSkVcIiwgbmFtZTogXCJKZXJzZXlcIn0sXG4gICAge2NvZGU6IFwiSk9cIiwgbmFtZTogXCJKb3JkYW5cIn0sXG4gICAge2NvZGU6IFwiS1pcIiwgbmFtZTogXCJLYXpha2hzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIktFXCIsIG5hbWU6IFwiS2VueWFcIn0sXG4gICAge2NvZGU6IFwiS0lcIiwgbmFtZTogXCJLaXJpYmF0aVwifSxcbiAgICB7Y29kZTogXCJLUFwiLCBuYW1lOiBcIktvcmVhIChEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLUlwiLCBuYW1lOiBcIktvcmVhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1dcIiwgbmFtZTogXCJLdXdhaXRcIn0sXG4gICAge2NvZGU6IFwiS0dcIiwgbmFtZTogXCJLeXJneXpzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkxBXCIsIG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiTFZcIiwgbmFtZTogXCJMYXR2aWFcIn0sXG4gICAge2NvZGU6IFwiTEJcIiwgbmFtZTogXCJMZWJhbm9uXCJ9LFxuICAgIHtjb2RlOiBcIkxTXCIsIG5hbWU6IFwiTGVzb3Rob1wifSxcbiAgICB7Y29kZTogXCJMUlwiLCBuYW1lOiBcIkxpYmVyaWFcIn0sXG4gICAge2NvZGU6IFwiTFlcIiwgbmFtZTogXCJMaWJ5YVwifSxcbiAgICB7Y29kZTogXCJMSVwiLCBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIn0sXG4gICAge2NvZGU6IFwiTFRcIiwgbmFtZTogXCJMaXRodWFuaWFcIn0sXG4gICAge2NvZGU6IFwiTFVcIiwgbmFtZTogXCJMdXhlbWJvdXJnXCJ9LFxuICAgIHtjb2RlOiBcIk1PXCIsIG5hbWU6IFwiTWFjYW9cIn0sXG4gICAge2NvZGU6IFwiTUtcIiwgbmFtZTogXCJNYWNlZG9uaWEgKHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1HXCIsIG5hbWU6IFwiTWFkYWdhc2NhclwifSxcbiAgICB7Y29kZTogXCJNV1wiLCBuYW1lOiBcIk1hbGF3aVwifSxcbiAgICB7Y29kZTogXCJNWVwiLCBuYW1lOiBcIk1hbGF5c2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1WXCIsIG5hbWU6IFwiTWFsZGl2ZXNcIn0sXG4gICAge2NvZGU6IFwiTUxcIiwgbmFtZTogXCJNYWxpXCJ9LFxuICAgIHtjb2RlOiBcIk1UXCIsIG5hbWU6IFwiTWFsdGFcIn0sXG4gICAge2NvZGU6IFwiTUhcIiwgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk1RXCIsIG5hbWU6IFwiTWFydGluaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNUlwiLCBuYW1lOiBcIk1hdXJpdGFuaWFcIn0sXG4gICAge2NvZGU6IFwiTVVcIiwgbmFtZTogXCJNYXVyaXRpdXNcIn0sXG4gICAge2NvZGU6IFwiWVRcIiwgbmFtZTogXCJNYXlvdHRlXCJ9LFxuICAgIHtjb2RlOiBcIk1YXCIsIG5hbWU6IFwiTWV4aWNvXCJ9LFxuICAgIHtjb2RlOiBcIkZNXCIsIG5hbWU6IFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIn0sXG4gICAge2NvZGU6IFwiTURcIiwgbmFtZTogXCJNb2xkb3ZhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUNcIiwgbmFtZTogXCJNb25hY29cIn0sXG4gICAge2NvZGU6IFwiTU5cIiwgbmFtZTogXCJNb25nb2xpYVwifSxcbiAgICB7Y29kZTogXCJNRVwiLCBuYW1lOiBcIk1vbnRlbmVncm9cIn0sXG4gICAge2NvZGU6IFwiTVNcIiwgbmFtZTogXCJNb250c2VycmF0XCJ9LFxuICAgIHtjb2RlOiBcIk1BXCIsIG5hbWU6IFwiTW9yb2Njb1wifSxcbiAgICB7Y29kZTogXCJNWlwiLCBuYW1lOiBcIk1vemFtYmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTU1cIiwgbmFtZTogXCJNeWFubWFyXCJ9LFxuICAgIHtjb2RlOiBcIk5BXCIsIG5hbWU6IFwiTmFtaWJpYVwifSxcbiAgICB7Y29kZTogXCJOUlwiLCBuYW1lOiBcIk5hdXJ1XCJ9LFxuICAgIHtjb2RlOiBcIk5QXCIsIG5hbWU6IFwiTmVwYWxcIn0sXG4gICAge2NvZGU6IFwiTkxcIiwgbmFtZTogXCJOZXRoZXJsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOQ1wiLCBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIn0sXG4gICAge2NvZGU6IFwiTlpcIiwgbmFtZTogXCJOZXcgWmVhbGFuZFwifSxcbiAgICB7Y29kZTogXCJOSVwiLCBuYW1lOiBcIk5pY2FyYWd1YVwifSxcbiAgICB7Y29kZTogXCJORVwiLCBuYW1lOiBcIk5pZ2VyXCJ9LFxuICAgIHtjb2RlOiBcIk5HXCIsIG5hbWU6IFwiTmlnZXJpYVwifSxcbiAgICB7Y29kZTogXCJOVVwiLCBuYW1lOiBcIk5pdWVcIn0sXG4gICAge2NvZGU6IFwiTkZcIiwgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJNUFwiLCBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOT1wiLCBuYW1lOiBcIk5vcndheVwifSxcbiAgICB7Y29kZTogXCJPTVwiLCBuYW1lOiBcIk9tYW5cIn0sXG4gICAge2NvZGU6IFwiUEtcIiwgbmFtZTogXCJQYWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJQV1wiLCBuYW1lOiBcIlBhbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlBTXCIsIG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwifSxcbiAgICB7Y29kZTogXCJQQVwiLCBuYW1lOiBcIlBhbmFtYVwifSxcbiAgICB7Y29kZTogXCJQR1wiLCBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiUFlcIiwgbmFtZTogXCJQYXJhZ3VheVwifSxcbiAgICB7Y29kZTogXCJQRVwiLCBuYW1lOiBcIlBlcnVcIn0sXG4gICAge2NvZGU6IFwiUEhcIiwgbmFtZTogXCJQaGlsaXBwaW5lc1wifSxcbiAgICB7Y29kZTogXCJQTlwiLCBuYW1lOiBcIlBpdGNhaXJuXCJ9LFxuICAgIHtjb2RlOiBcIlBMXCIsIG5hbWU6IFwiUG9sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlBUXCIsIG5hbWU6IFwiUG9ydHVnYWxcIn0sXG4gICAge2NvZGU6IFwiUFJcIiwgbmFtZTogXCJQdWVydG8gUmljb1wifSxcbiAgICB7Y29kZTogXCJRQVwiLCBuYW1lOiBcIlFhdGFyXCJ9LFxuICAgIHtjb2RlOiBcIlJFXCIsIG5hbWU6IFwiUsOpdW5pb25cIn0sXG4gICAge2NvZGU6IFwiUk9cIiwgbmFtZTogXCJSb21hbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlJVXCIsIG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJXXCIsIG5hbWU6IFwiUndhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIkJMXCIsIG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIn0sXG4gICAge2NvZGU6IFwiU0hcIiwgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwifSxcbiAgICB7Y29kZTogXCJLTlwiLCBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wifSxcbiAgICB7Y29kZTogXCJMQ1wiLCBuYW1lOiBcIlNhaW50IEx1Y2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1GXCIsIG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiUE1cIiwgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCJ9LFxuICAgIHtjb2RlOiBcIlZDXCIsIG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIn0sXG4gICAge2NvZGU6IFwiV1NcIiwgbmFtZTogXCJTYW1vYVwifSxcbiAgICB7Y29kZTogXCJTTVwiLCBuYW1lOiBcIlNhbiBNYXJpbm9cIn0sXG4gICAge2NvZGU6IFwiU1RcIiwgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIn0sXG4gICAge2NvZGU6IFwiU0FcIiwgbmFtZTogXCJTYXVkaSBBcmFiaWFcIn0sXG4gICAge2NvZGU6IFwiU05cIiwgbmFtZTogXCJTZW5lZ2FsXCJ9LFxuICAgIHtjb2RlOiBcIlJTXCIsIG5hbWU6IFwiU2VyYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNDXCIsIG5hbWU6IFwiU2V5Y2hlbGxlc1wifSxcbiAgICB7Y29kZTogXCJTTFwiLCBuYW1lOiBcIlNpZXJyYSBMZW9uZVwifSxcbiAgICB7Y29kZTogXCJTR1wiLCBuYW1lOiBcIlNpbmdhcG9yZVwifSxcbiAgICB7Y29kZTogXCJTWFwiLCBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiU0tcIiwgbmFtZTogXCJTbG92YWtpYVwifSxcbiAgICB7Y29kZTogXCJTSVwiLCBuYW1lOiBcIlNsb3ZlbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNCXCIsIG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNPXCIsIG5hbWU6IFwiU29tYWxpYVwifSxcbiAgICB7Y29kZTogXCJaQVwiLCBuYW1lOiBcIlNvdXRoIEFmcmljYVwifSxcbiAgICB7Y29kZTogXCJHU1wiLCBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNTXCIsIG5hbWU6IFwiU291dGggU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiRVNcIiwgbmFtZTogXCJTcGFpblwifSxcbiAgICB7Y29kZTogXCJMS1wiLCBuYW1lOiBcIlNyaSBMYW5rYVwifSxcbiAgICB7Y29kZTogXCJTRFwiLCBuYW1lOiBcIlN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIlNSXCIsIG5hbWU6IFwiU3VyaW5hbWVcIn0sXG4gICAge2NvZGU6IFwiU0pcIiwgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCJ9LFxuICAgIHtjb2RlOiBcIlNaXCIsIG5hbWU6IFwiU3dhemlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNFXCIsIG5hbWU6IFwiU3dlZGVuXCJ9LFxuICAgIHtjb2RlOiBcIkNIXCIsIG5hbWU6IFwiU3dpdHplcmxhbmRcIn0sXG4gICAge2NvZGU6IFwiU1lcIiwgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJUV1wiLCBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiVEpcIiwgbmFtZTogXCJUYWppa2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRaXCIsIG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwifSxcbiAgICB7Y29kZTogXCJUSFwiLCBuYW1lOiBcIlRoYWlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlRMXCIsIG5hbWU6IFwiVGltb3ItTGVzdGVcIn0sXG4gICAge2NvZGU6IFwiVEdcIiwgbmFtZTogXCJUb2dvXCJ9LFxuICAgIHtjb2RlOiBcIlRLXCIsIG5hbWU6IFwiVG9rZWxhdVwifSxcbiAgICB7Y29kZTogXCJUT1wiLCBuYW1lOiBcIlRvbmdhXCJ9LFxuICAgIHtjb2RlOiBcIlRUXCIsIG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wifSxcbiAgICB7Y29kZTogXCJUTlwiLCBuYW1lOiBcIlR1bmlzaWFcIn0sXG4gICAge2NvZGU6IFwiVFJcIiwgbmFtZTogXCJUdXJrZXlcIn0sXG4gICAge2NvZGU6IFwiVE1cIiwgbmFtZTogXCJUdXJrbWVuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVENcIiwgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVFZcIiwgbmFtZTogXCJUdXZhbHVcIn0sXG4gICAge2NvZGU6IFwiVUdcIiwgbmFtZTogXCJVZ2FuZGFcIn0sXG4gICAge2NvZGU6IFwiVUFcIiwgbmFtZTogXCJVa3JhaW5lXCJ9LFxuICAgIHtjb2RlOiBcIkFFXCIsIG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIn0sXG4gICAge2NvZGU6IFwiR0JcIiwgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlVTXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIlVNXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlVZXCIsIG5hbWU6IFwiVXJ1Z3VheVwifSxcbiAgICB7Y29kZTogXCJVWlwiLCBuYW1lOiBcIlV6YmVraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVlVcIiwgbmFtZTogXCJWYW51YXR1XCJ9LFxuICAgIHtjb2RlOiBcIlZFXCIsIG5hbWU6IFwiVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJWTlwiLCBuYW1lOiBcIlZpZXRuYW1cIn0sXG4gICAge2NvZGU6IFwiVkdcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIn0sXG4gICAge2NvZGU6IFwiVklcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIn0sXG4gICAge2NvZGU6IFwiV0ZcIiwgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwifSxcbiAgICB7Y29kZTogXCJFSFwiLCBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCJ9LFxuICAgIHtjb2RlOiBcIllFXCIsIG5hbWU6IFwiWWVtZW5cIn0sXG4gICAge2NvZGU6IFwiWk1cIiwgbmFtZTogXCJaYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiWldcIiwgbmFtZTogXCJaaW1iYWJ3ZVwifSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbmlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlY29udGVudFwiKTtcbmNvbnN0IG1heFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXhjb250ZW50XCIpO1xuY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbmNvbnRlbnRcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW5jaGFuY2Vjb250ZW50XCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kc3BlZWRjb250ZW50XCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5Y29udGVudFwiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2Vjb250ZW50XCIpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRjb250ZW50XCIpO1xuXG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudGljb25cIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG5cbmNvbnN0IGRhaWx5RGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGxvY2F0aW9uQ2hvc2VuO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IFwiTGlzYm9uXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mbyhsb2NhdGlvbkNob3Nlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIERPTS5jaGFuZ2VCR0ltYWdlKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkKTtcblxuICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKX0gwrpDYDtcbiAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0udGVtcC5tYXgpfSDCukNgO1xuICAgICAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wLm1pbil9IMK6Q2A7XG4gICAgICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5kYWlseVswXS5wb3AgKiAxMDApfSVgO1xuICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQgKiAzLjYgKiAxMCkgLyAxMFxuICAgICAgICB9IEttL0hgO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICAgICAgZGF0YS5jdXJyZW50LnN1bnJpc2UsXG4gICAgICAgICAgICBkYXRhLnRpbWV6b25lXG4gICAgICAgICk7XG4gICAgICAgIHN1bnNldC50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICAgICAgZGF0YS5jdXJyZW50LnN1bnNldCxcbiAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgKTtcblxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb252ZXJ0VG9UaXRsZUNhc2UoXG4gICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgKGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkubG9jYXRpb25OYW1lXG4gICAgICAgIH0sICR7KGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkuY291bnRyeU5hbWV9YDtcbiAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCl9IMK6Q2A7XG5cbiAgICAgICAgY3VycmVudEljb24uc3JjID0gRE9NLmdldFdlYXRoZXJJY29uKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuXG4gICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGEuZGFpbHkpO1xuICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5KTtcblxuICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBkYWlseUljb25zLCBkYWlseU1heFRlbXBzLCBkYWlseU1pblRlbXBzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlzQXJyYXkoZGF5cykge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZERheSA9IGAke2NvbnZlcnRVbml4VG9XZWVrZGF5KFxuICAgICAgICAgICAgZGF5c1tpXS5kdFxuICAgICAgICApfSwgJHtjb252ZXJ0VW5peFRvRGF5KGRheXNbaV0uZHQpfWA7XG4gICAgICAgIGRheXNBcnJheS5wdXNoKGNvbnZlcnRlZERheSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXlzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChkYXlzW2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgfVxuICAgIHJldHVybiBpY29uc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXREYWlseU1heFRlbXBzKGRheXMpIHtcbiAgICBjb25zdCBtYXhUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbWF4VGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoZGF5c1tpXS50ZW1wLm1heCl9IMK6Q2ApO1xuICAgIH1cbiAgICByZXR1cm4gbWF4VGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNaW5UZW1wcyhkYXlzKSB7XG4gICAgY29uc3QgbWluVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1pblRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5taW4pfSDCukNgKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pblRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1RpdGxlQ2FzZShzdHJpbmcpIHtcbiAgICBjb25zdCBhcnJheU9mV29yZHMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWRBcnJheSA9IFtdO1xuICAgIGFycmF5T2ZXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PlxuICAgICAgICBjYXBpdGFsaXplZEFycmF5LnB1c2god29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpKVxuICAgICk7XG4gICAgcmV0dXJuIGNhcGl0YWxpemVkQXJyYXkuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9Ib3VyKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9EYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGRheS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvV2Vla2RheSh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiB3ZWVrZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoV2VhdGhlcik7XG5cbmNvbnN0IGhvdXJseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0hvdXJseUZvcmVjYXN0KTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvRGFpbHlGb3JlY2FzdCk7XG5zZWFyY2hXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=