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
/* harmony export */   "getWeatherInfoFarenheits": () => (/* binding */ getWeatherInfoFarenheits)
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

async function getWeatherInfoFarenheits(location) {
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

        if (!changeUnitsButton.classList.contains("farenheit")) {
            const data = await _apis__WEBPACK_IMPORTED_MODULE_1__.getWeatherInfoCelsius(locationChosen);
            console.log(data);

            feelsLike.textContent = `${Math.round(data.current.feels_like)} ºC`;
            maxTemperature.textContent = `${Math.round(
                data.daily[0].temp.max
            )} ºC`;
            minTemperature.textContent = `${Math.round(
                data.daily[0].temp.min
            )} ºC`;
            chanceOfRain.textContent = `${Math.round(
                data.daily[0].pop * 100
            )}%`;
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
            currentTemperature.textContent = `${Math.round(
                data.current.temp
            )} ºC`;

            currentIcon.src = _DOM__WEBPACK_IMPORTED_MODULE_2__.getWeatherIcon(data.current.weather[0].icon);

            const days = createDaysArray(data.daily, data.timezone);
            const dailyIcons = createDailyIconsArray(data.daily);
            const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºC");
            const dailyMinTemps = getDailyMinTemps(data.daily, "ºC");

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(
                days,
                dailyIcons,
                dailyMaxTemps,
                dailyMinTemps
            );

            const hours = createHoursArray(data.hourly, data.timezone);
            const hourlyIcons = createHourlyIconsArray(data.hourly);
            const hourlyTemps = getHourlyTemps(data.hourly, "ºC");

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeBGImage(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
            _DOM__WEBPACK_IMPORTED_MODULE_2__.improveReadability(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
        } else {
            const data = await _apis__WEBPACK_IMPORTED_MODULE_1__.getWeatherInfoFarenheits(locationChosen);
            console.log(data);

            feelsLike.textContent = `${Math.round(data.current.feels_like)} ºF`;
            maxTemperature.textContent = `${Math.round(
                data.daily[0].temp.max
            )} ºF`;
            minTemperature.textContent = `${Math.round(
                data.daily[0].temp.min
            )} ºF`;
            chanceOfRain.textContent = `${Math.round(
                data.daily[0].pop * 100
            )}%`;
            windSpeed.textContent = `${
                Math.round(data.current.wind_speed * 10) / 10
            } Mph`;
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
            currentTemperature.textContent = `${Math.round(
                data.current.temp
            )} ºF`;

            currentIcon.src = _DOM__WEBPACK_IMPORTED_MODULE_2__.getWeatherIcon(data.current.weather[0].icon);

            const days = createDaysArray(data.daily, data.timezone);
            const dailyIcons = createDailyIconsArray(data.daily);
            const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºF");
            const dailyMinTemps = getDailyMinTemps(data.daily, "ºF");

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(
                days,
                dailyIcons,
                dailyMaxTemps,
                dailyMinTemps
            );

            const hours = createHoursArray(data.hourly, data.timezone);
            const hourlyIcons = createHourlyIconsArray(data.hourly);
            const hourlyTemps = getHourlyTemps(data.hourly, "ºF");

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeBGImage(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
            _DOM__WEBPACK_IMPORTED_MODULE_2__.improveReadability(
                data.current.weather[0].id,
                data.current.weather[0].icon
            );
        }

        changeUnitsButton.addEventListener("click", switchUnits);

        async function switchUnits() {
            if (changeUnitsButton.classList.contains("farenheit")) {
                const data = await _apis__WEBPACK_IMPORTED_MODULE_1__.getWeatherInfoCelsius(locationChosen);
                console.log(data);
                console.log(locationChosen);

                feelsLike.textContent = `${Math.round(
                    data.current.feels_like
                )} ºC`;
                maxTemperature.textContent = `${Math.round(
                    data.daily[0].temp.max
                )} ºC`;
                minTemperature.textContent = `${Math.round(
                    data.daily[0].temp.min
                )} ºC`;

                windSpeed.textContent = `${
                    Math.round(data.current.wind_speed * 3.6 * 10) / 10
                } Km/H`;

                currentTemperature.textContent = `${Math.round(
                    data.current.temp
                )} ºC`;

                const days = createDaysArray(data.daily, data.timezone);
                const dailyIcons = createDailyIconsArray(data.daily);
                const dailyMaxTemps = getDailyMaxTemps(data.daily, "ºC");
                const dailyMinTemps = getDailyMinTemps(data.daily, "ºC");

                _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(
                    days,
                    dailyIcons,
                    dailyMaxTemps,
                    dailyMinTemps
                );

                const hours = createHoursArray(data.hourly, data.timezone);
                const hourlyIcons = createHourlyIconsArray(data.hourly);
                const hourlyTemps = getHourlyTemps(data.hourly, "ºC");

                _DOM__WEBPACK_IMPORTED_MODULE_2__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

                changeUnitsButton.classList.remove("farenheit");
                changeUnitsButton.textContent = "Switch to ºF";
            } else {
                const dataFarenheits = await _apis__WEBPACK_IMPORTED_MODULE_1__.getWeatherInfoFarenheits(
                    locationChosen
                );
                console.log(dataFarenheits);

                feelsLike.textContent = `${Math.round(
                    dataFarenheits.current.feels_like
                )} ºF`;
                maxTemperature.textContent = `${Math.round(
                    dataFarenheits.daily[0].temp.max
                )} ºF`;
                minTemperature.textContent = `${Math.round(
                    dataFarenheits.daily[0].temp.min
                )} ºF`;

                windSpeed.textContent = `${
                    Math.round(dataFarenheits.current.wind_speed * 10) / 10
                } Mph`;

                currentTemperature.textContent = `${Math.round(
                    dataFarenheits.current.temp
                )} ºF`;

                const days = createDaysArray(
                    dataFarenheits.daily,
                    dataFarenheits.timezone
                );
                const dailyIcons = createDailyIconsArray(dataFarenheits.daily);
                const dailyMaxTemps = getDailyMaxTemps(
                    dataFarenheits.daily,
                    "ºF"
                );
                const dailyMinTemps = getDailyMinTemps(
                    dataFarenheits.daily,
                    "ºF"
                );

                _DOM__WEBPACK_IMPORTED_MODULE_2__.changeDailyForecast(
                    days,
                    dailyIcons,
                    dailyMaxTemps,
                    dailyMinTemps
                );

                const hours = createHoursArray(
                    dataFarenheits.hourly,
                    dataFarenheits.timezone
                );
                const hourlyIcons = createHourlyIconsArray(
                    dataFarenheits.hourly
                );
                const hourlyTemps = getHourlyTemps(dataFarenheits.hourly, "ºF");

                _DOM__WEBPACK_IMPORTED_MODULE_2__.changeHourlyForecast(hours, hourlyIcons, hourlyTemps);

                changeUnitsButton.classList.add("farenheit");
                changeUnitsButton.textContent = "Switch to ºC";
            }
        }

        container.classList.remove("hideall");

        searchBtn.addEventListener("click", function () {
            changeUnitsButton.removeEventListener("click", switchUnits);
        });

        errorMessage.classList.add("transparent");
    } catch (error) {
        errorMessage.classList.add("transparent");
        await new Promise((resolve) => setTimeout(resolve, 30));

        errorMessage.classList.remove("transparent");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFL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O0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUEE7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxTQUFTLFNBQVMsSUFBSTtBQUNoRixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSwrREFBK0QsZ0JBQWdCLE9BQU8sZ0JBQWdCLFNBQVMsSUFBSTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0EsK0RBQStELGdCQUFnQixPQUFPLGdCQUFnQixTQUFTLElBQUk7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDBEQUEwRCxTQUFTLFNBQVMsSUFBSTtBQUNoRixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJDQUEyQztBQUNoRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1EQUFtRDtBQUN4RCxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDRDQUE0QztBQUNqRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGlFQUFpRTtBQUN0RSxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLDhDQUE4QztBQUNuRCxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDhDQUE4QztBQUNuRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLG9DQUFvQztBQUN6QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLGlFQUFpRTtBQUN0RSxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJDQUEyQztBQUNoRCxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHlDQUF5QztBQUM5QyxLQUFLLDhDQUE4QztBQUNuRCxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGlEQUFpRDtBQUN0RCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlDQUF5QztBQUM5QyxLQUFLLHlFQUF5RTtBQUM5RSxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlEQUF5RDtBQUM5RCxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQzs7Ozs7OztVQzVTQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVTtBQUNGOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHdEQUEwQjtBQUN6RDs7QUFFQSx1Q0FBdUMscUNBQXFDO0FBQzVFLDRDQUE0QztBQUM1QztBQUNBLGVBQWU7QUFDZiw0Q0FBNEM7QUFDNUM7QUFDQSxlQUFlO0FBQ2YsMENBQTBDO0FBQzFDO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFvQjtBQUMzQyxhQUFhLElBQUksT0FBTyxrREFBb0IsOEJBQThCO0FBQzFFLGdEQUFnRDtBQUNoRDtBQUNBLGVBQWU7O0FBRWYsOEJBQThCLGdEQUFrQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxxREFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxzREFBd0I7O0FBRXBDLFlBQVksK0NBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwrQkFBK0IsMkRBQTZCO0FBQzVEOztBQUVBLHVDQUF1QyxxQ0FBcUM7QUFDNUUsNENBQTRDO0FBQzVDO0FBQ0EsZUFBZTtBQUNmLDRDQUE0QztBQUM1QztBQUNBLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUM7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZCxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQW9CO0FBQzNDLGFBQWEsSUFBSSxPQUFPLGtEQUFvQiw4QkFBOEI7QUFDMUUsZ0RBQWdEO0FBQ2hEO0FBQ0EsZUFBZTs7QUFFZiw4QkFBOEIsZ0RBQWtCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHFEQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLHNEQUF3Qjs7QUFFcEMsWUFBWSwrQ0FBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyx3REFBMEI7QUFDN0Q7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7QUFDQSxtQkFBbUI7QUFDbkIsZ0RBQWdEO0FBQ2hEO0FBQ0EsbUJBQW1CO0FBQ25CLGdEQUFnRDtBQUNoRDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEIsb0RBQW9EO0FBQ3BEO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IscURBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzREFBd0I7O0FBRXhDO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsNkNBQTZDLDJEQUE2QjtBQUMxRTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDO0FBQ0EsbUJBQW1CO0FBQ25CLGdEQUFnRDtBQUNoRDtBQUNBLG1CQUFtQjtBQUNuQixnREFBZ0Q7QUFDaEQ7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCLG9EQUFvRDtBQUNwRDtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHFEQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNEQUF3Qjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLFVBQVUsSUFBSSx1Q0FBdUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLDhCQUE4Qiw4QkFBOEIsRUFBRSxLQUFLO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLDhCQUE4Qiw4QkFBOEIsRUFBRSxLQUFLO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCLGlDQUFpQyw2Q0FBNkM7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCLDJCQUEyQiwyQkFBMkIsRUFBRSxLQUFLO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLHVDQUF1Qyx3REFBMEI7O0FBRWpFOztBQUVBLHNDQUFzQyx1REFBeUI7O0FBRS9ELHVEQUF5QjtBQUN6QixxREFBdUI7O0FBRXZCLHNEQUF3QjtBQUN4QixvREFBc0I7O0FBRXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgNGZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3LjV2dztcXG59XFxuXFxuLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiAtMTNweDtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC45dnc7XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjY1dnc7XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMC4ydnc7XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljg1dnc7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiAxMy41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiAzLjI1cmVtO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDJweDtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnVuaXQge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMy4zcmVtO1xcbn1cXG5cXG4udHJhbnNwYXJlbnQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFB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QXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA0ZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTIuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuOXJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudHdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5zZXBhcmF0b3Ige1xcbiAgICB3aWR0aDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b3Age1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAyLjVyZW07XFxufVxcblxcbi50b3BkaXYge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi50b3BpY29ucyB7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbn1cXG5cXG4udG9wd3JhcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvcGNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZlZWxzbGlrZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDcuNXZ3O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IGltZyB7XFxuICAgIGxlZnQ6IC0xM3B4O1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gLnRvcHdyYXAge1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLmh1bWlkaXR5IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5odW1pZGl0eSA+IGltZyB7XFxuICAgIGhlaWdodDogMy4yNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG59XFxuXFxuLnN1bnJpc2Uge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljl2dztcXG59XFxuXFxuLnN1bnNldCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNjV2dztcXG59XFxuXFxuLnN1bnJpc2VpY29uLFxcbi5zdW5zZXRpY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDRweDtcXG59XFxuXFxuLndpbmRzcGVlZCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwLjJ2dztcXG59XFxuXFxuLndpbmRzcGVlZCA+IGltZyB7XFxuICAgIGhlaWdodDogMy42cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogM3B4O1xcbn1cXG5cXG4ucG9wIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOXJlbTtcXG59XFxuXFxuLm1pbnRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC41dnc7XFxufVxcblxcbi5tYXh0ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguODV2dztcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2UgPiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IDEzLjV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYWlseWRpdnMge1xcbiAgICB3aWR0aDogMTF2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4uZm9yZWNhc3RpY29uIHtcXG4gICAgd2lkdGg6IDMuMjVyZW07XFxufVxcblxcbi5kYWlseXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZmlyc3Rob3VybHlkaXZzLFxcbi5sYXN0aG91cmx5ZGl2cyB7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGVhbGwgPiAqIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlpY29uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4udW5pdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogLTAuNzVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0zLjNyZW07XFxufVxcblxcbi50cmFuc3BhcmVudCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJHSW1hZ2UoY29kZSwgaWNvbikge1xuICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9qb2hhbm5lcy1wbGVuaW8tRVNMMXJJczlqNDgtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSAzMDAgJiYgY29kZSA8IDQwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcm9tYW4tc3lua2V2eWNoLXFQdkJtU3Ztb2hzLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gNTAwICYmIGNvZGUgPCA2MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3JvZG9sZm8tY3VhZHJvcy04d0twRnF4REpUMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDYwMCAmJiBjb2RlIDwgNzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy90aGUtbmlnbWF0aWMtUkRoOVYtYzRpU0ktdW5zcGxhc2hcXFxcIFxcXFwoMVxcXFwpLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPiA4MDAgJiYgY29kZSA8IDkwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvbmljay1mZXdpbmdzLVp0RGlKem9rWmkwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDcwMSB8fCBjb2RlID09PSA3NDEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2RhdmUtaG9lZmxlci1vZDI4N3ZReXVmdy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgY29kZSA9PT0gNzExIHx8XG4gICAgICAgIGNvZGUgPT09IDcyMSB8fFxuICAgICAgICBjb2RlID09PSA3MzEgfHxcbiAgICAgICAgY29kZSA9PT0gNzUxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MSB8fFxuICAgICAgICBjb2RlID09PSA3NjJcbiAgICApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2NocmlzLWxlYm91dGlsbGllci1iZThtbkZYekJnby11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3NzEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2toYW1rZW8tdmlsYXlzaW5nLVd0d1NzcXdZbEEwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc4MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvZXNwZW4tYmllcnVkLVc0M2dtNlREMTE4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGljb24gPT09IFwiMDFuXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3J5YW4taHV0dG9uLUp6dG14OXlxakJ3LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvd2lsbGlhbS1ib3V0LVJQeldJMHJvbFM4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXByb3ZlUmVhZGFiaWxpdHkoY29kZSwgaWNvbikge1xuICAgIGlmIChjb2RlID49IDUwMCAmJiBjb2RlIDwgNjAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40OSlcIjtcbiAgICB9IGVsc2UgaWYgKGljb24gPT09IFwiMDFuXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjQpXCI7XG4gICAgfSBlbHNlIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xufVxuXG5jb25zdCBkYWlseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5ZGl2c1wiKTtcblxuZnVuY3Rpb24gaGlkZURhaWx5Rm9yZWNhc3QoKSB7XG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvSG91cmx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgPiAqXCIpO1xuICAgIGZvcmVjYXN0Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKFwiZmlyc3Rob3VybHlkaXZzXCIpO1xuICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VybHlEaXYpO1xuXG4gICAgICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VyLmNsYXNzTGlzdC5hZGQoXCJob3VyXCIpO1xuICAgICAgICBob3VyLnRleHRDb250ZW50ID0gXCIxMiBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDAgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuICAgIGNyZWF0ZVJpZ2h0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRBcnJvdygpIHtcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoXCJyaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvSW1hZ2VzL2Fycm93LXJpZ2h0LWNpcmNsZS5zdmdcIik7XG4gICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0xhc3RIb3VybHlEaXZzKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxMzsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseURpdi5jbGFzc0xpc3QuYWRkKFwibGFzdGhvdXJseWRpdnNcIik7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGhvdXJseURpdik7XG5cbiAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgICAgIGhvdXIudGV4dENvbnRlbnQgPSBcIjEgQS5NLlwiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cik7XG5cbiAgICAgICAgY29uc3QgaG91cmx5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGhvdXJseUljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseWljb25cIik7XG4gICAgICAgIGhvdXJseUljb24uc3JjID0gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWRyaXp6bGUuc3ZnXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlJY29uKTtcblxuICAgICAgICBjb25zdCBob3VybHlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXJseVRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJob3VybHl0ZW1wZXJhdHVyZVwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBcIjQxIMK6Q1wiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcGVyYXR1cmUpO1xuICAgIH1cbiAgICBjcmVhdGVMZWZ0QXJyb3coKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGVmdEFycm93KCkge1xuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJsZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvSW1hZ2VzL2Fycm93LWxlZnQtY2lyY2xlLnN2Z1wiKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xufVxuXG5mdW5jdGlvbiBzaG93TGFzdEhvdXJseURpdnMoKSB7XG4gICAgaGlkZUZpcnN0SG91cmx5RGl2cygpO1xuXG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgaWYgKCFsYXN0SG91cmx5RGl2cykgY3JlYXRlTGFzdEhvdXJseURpdnMoKTtcbiAgICBlbHNlIHVuaGlkZUxhc3RIb3VybHlEaXZzKCk7XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0YXJyb3dcIik7XG4gICAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rmlyc3RIb3VybHlEaXZzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5mdW5jdGlvbiBzaG93Rmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGZpcnN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlyc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGhpZGVMYXN0SG91cmx5RGl2cygpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodGFycm93XCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgbGFzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxhc3Rob3VybHlkaXZzXCIpO1xuXG4gICAgbGFzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5mdW5jdGlvbiB1bmhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hUb0RhaWx5Rm9yZWNhc3QoKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgPiAqXCIpO1xuICAgIGZvcmVjYXN0Q2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpKTtcblxuICAgIGRhaWx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUZXh0Q29udGVudCh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5cbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50aWNvblwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXRoZXJJY29uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gXCIwMWRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDFuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMmRcIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1zdW4uc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMDJuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbW9vbi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwM2RcIiB8fCBjb2RlID09PSBcIjAzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwNGRcIiB8fCBjb2RlID09PSBcIjA0blwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3Vkcy5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwOWRcIiB8fCBjb2RlID09PSBcIjA5blwiIHx8IGNvZGUgPT09IFwiMTBkXCIgfHwgY29kZSA9PT0gXCIxMG5cIilcbiAgICAgICAgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1yYWluICgxKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxMWRcIiB8fCBjb2RlID09PSBcIjExblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLWxpZ2h0bmluZyAoMikuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiMTNkXCIgfHwgY29kZSA9PT0gXCIxM25cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9zbm93LnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjUwZFwiIHx8IGNvZGUgPT09IFwiNTBuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZm9nLnN2Z1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGFpbHlGb3JlY2FzdChkYXlzLCBjb2RlcywgbWF4VGVtcHMsIG1pblRlbXBzKSB7XG4gICAgY29uc3QgZGFpbHlEYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0aWNvblwiKTtcbiAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1heFwiKTtcbiAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdG1pblwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGRhaWx5RGF0ZXNbaV0udGV4dENvbnRlbnQgPSBkYXlzW2ldO1xuXG4gICAgICAgIGRhaWx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgZGFpbHlNYXhUZW1wc1tpXS50ZXh0Q29udGVudCA9IG1heFRlbXBzW2ldO1xuXG4gICAgICAgIGRhaWx5TWluVGVtcHNbaV0udGV4dENvbnRlbnQgPSBtaW5UZW1wc1tpXTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgY29kZXMsIHRlbXBzKSB7XG4gICAgY29uc3QgaG91ckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VyXCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseWljb25cIik7XG4gICAgY29uc3QgaG91cmx5VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseXRlbXBlcmF0dXJlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGhvdXJFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IGhvdXJzW2ldO1xuXG4gICAgICAgIGhvdXJseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGhvdXJseVRlbXBzW2ldLnRleHRDb250ZW50ID0gdGVtcHNbaV07XG4gICAgfVxufVxuIiwiY29uc3Qga2V5ID0gXCI5YjJlY2JhNzUzYTJkMGI1MDFiMTZiZTM0NTI0NjlmZlwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7bGF0OiBkYXRhWzBdLmxhdCwgbG9uOiBkYXRhWzBdLmxvbn07XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm9GYXJlbmhlaXRzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1pbXBlcmlhbGBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWUobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkYXRhWzBdLm5hbWU7XG4gICAgbGV0IGNvdW50cnlOYW1lID0gZGF0YVswXS5jb3VudHJ5O1xuXG4gICAgY291bnRyeUxpc3QuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgICBpZiAoY291bnRyeS5jb2RlID09PSBjb3VudHJ5TmFtZSkgY291bnRyeU5hbWUgPSBjb3VudHJ5Lm5hbWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge2xvY2F0aW9uTmFtZSwgY291bnRyeU5hbWV9O1xufVxuXG5jb25zdCBjb3VudHJ5TGlzdCA9IFtcbiAgICB7Y29kZTogXCJBRlwiLCBuYW1lOiBcIkFmZ2hhbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkFYXCIsIG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQUxcIiwgbmFtZTogXCJBbGJhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkRaXCIsIG5hbWU6IFwiQWxnZXJpYVwifSxcbiAgICB7Y29kZTogXCJBU1wiLCBuYW1lOiBcIkFtZXJpY2FuIFNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIkFEXCIsIG5hbWU6IFwiQW5kb3JyYVwifSxcbiAgICB7Y29kZTogXCJBT1wiLCBuYW1lOiBcIkFuZ29sYVwifSxcbiAgICB7Y29kZTogXCJBSVwiLCBuYW1lOiBcIkFuZ3VpbGxhXCJ9LFxuICAgIHtjb2RlOiBcIkFRXCIsIG5hbWU6IFwiQW50YXJjdGljYVwifSxcbiAgICB7Y29kZTogXCJBR1wiLCBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIn0sXG4gICAge2NvZGU6IFwiQVJcIiwgbmFtZTogXCJBcmdlbnRpbmFcIn0sXG4gICAge2NvZGU6IFwiQU1cIiwgbmFtZTogXCJBcm1lbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFXXCIsIG5hbWU6IFwiQXJ1YmFcIn0sXG4gICAge2NvZGU6IFwiQVVcIiwgbmFtZTogXCJBdXN0cmFsaWFcIn0sXG4gICAge2NvZGU6IFwiQVRcIiwgbmFtZTogXCJBdXN0cmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFaXCIsIG5hbWU6IFwiQXplcmJhaWphblwifSxcbiAgICB7Y29kZTogXCJCU1wiLCBuYW1lOiBcIkJhaGFtYXNcIn0sXG4gICAge2NvZGU6IFwiQkhcIiwgbmFtZTogXCJCYWhyYWluXCJ9LFxuICAgIHtjb2RlOiBcIkJEXCIsIG5hbWU6IFwiQmFuZ2xhZGVzaFwifSxcbiAgICB7Y29kZTogXCJCQlwiLCBuYW1lOiBcIkJhcmJhZG9zXCJ9LFxuICAgIHtjb2RlOiBcIkJZXCIsIG5hbWU6IFwiQmVsYXJ1c1wifSxcbiAgICB7Y29kZTogXCJCRVwiLCBuYW1lOiBcIkJlbGdpdW1cIn0sXG4gICAge2NvZGU6IFwiQlpcIiwgbmFtZTogXCJCZWxpemVcIn0sXG4gICAge2NvZGU6IFwiQkpcIiwgbmFtZTogXCJCZW5pblwifSxcbiAgICB7Y29kZTogXCJCTVwiLCBuYW1lOiBcIkJlcm11ZGFcIn0sXG4gICAge2NvZGU6IFwiQlRcIiwgbmFtZTogXCJCaHV0YW5cIn0sXG4gICAge2NvZGU6IFwiQk9cIiwgbmFtZTogXCJCb2xpdmlhIChQbHVyaW5hdGlvbmFsIFN0YXRlIG9mKVwifSxcbiAgICB7Y29kZTogXCJCUVwiLCBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCJ9LFxuICAgIHtjb2RlOiBcIkJBXCIsIG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwifSxcbiAgICB7Y29kZTogXCJCV1wiLCBuYW1lOiBcIkJvdHN3YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJWXCIsIG5hbWU6IFwiQm91dmV0IElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJCUlwiLCBuYW1lOiBcIkJyYXppbFwifSxcbiAgICB7Y29kZTogXCJJT1wiLCBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwifSxcbiAgICB7Y29kZTogXCJCTlwiLCBuYW1lOiBcIkJydW5laSBEYXJ1c3NhbGFtXCJ9LFxuICAgIHtjb2RlOiBcIkJHXCIsIG5hbWU6IFwiQnVsZ2FyaWFcIn0sXG4gICAge2NvZGU6IFwiQkZcIiwgbmFtZTogXCJCdXJraW5hIEZhc29cIn0sXG4gICAge2NvZGU6IFwiQklcIiwgbmFtZTogXCJCdXJ1bmRpXCJ9LFxuICAgIHtjb2RlOiBcIkNWXCIsIG5hbWU6IFwiQ2FibyBWZXJkZVwifSxcbiAgICB7Y29kZTogXCJLSFwiLCBuYW1lOiBcIkNhbWJvZGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNNXCIsIG5hbWU6IFwiQ2FtZXJvb25cIn0sXG4gICAge2NvZGU6IFwiQ0FcIiwgbmFtZTogXCJDYW5hZGFcIn0sXG4gICAge2NvZGU6IFwiS1lcIiwgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDRlwiLCBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJURFwiLCBuYW1lOiBcIkNoYWRcIn0sXG4gICAge2NvZGU6IFwiQ0xcIiwgbmFtZTogXCJDaGlsZVwifSxcbiAgICB7Y29kZTogXCJDTlwiLCBuYW1lOiBcIkNoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIkNYXCIsIG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJDQ1wiLCBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNPXCIsIG5hbWU6IFwiQ29sb21iaWFcIn0sXG4gICAge2NvZGU6IFwiS01cIiwgbmFtZTogXCJDb21vcm9zXCJ9LFxuICAgIHtjb2RlOiBcIkNHXCIsIG5hbWU6IFwiQ29uZ29cIn0sXG4gICAge2NvZGU6IFwiQ0RcIiwgbmFtZTogXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJ9LFxuICAgIHtjb2RlOiBcIkNLXCIsIG5hbWU6IFwiQ29vayBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNSXCIsIG5hbWU6IFwiQ29zdGEgUmljYVwifSxcbiAgICB7Y29kZTogXCJDSVwiLCBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCJ9LFxuICAgIHtjb2RlOiBcIkhSXCIsIG5hbWU6IFwiQ3JvYXRpYVwifSxcbiAgICB7Y29kZTogXCJDVVwiLCBuYW1lOiBcIkN1YmFcIn0sXG4gICAge2NvZGU6IFwiQ1dcIiwgbmFtZTogXCJDdXJhw6dhb1wifSxcbiAgICB7Y29kZTogXCJDWVwiLCBuYW1lOiBcIkN5cHJ1c1wifSxcbiAgICB7Y29kZTogXCJDWlwiLCBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkRLXCIsIG5hbWU6IFwiRGVubWFya1wifSxcbiAgICB7Y29kZTogXCJESlwiLCBuYW1lOiBcIkRqaWJvdXRpXCJ9LFxuICAgIHtjb2RlOiBcIkRNXCIsIG5hbWU6IFwiRG9taW5pY2FcIn0sXG4gICAge2NvZGU6IFwiRE9cIiwgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiRUNcIiwgbmFtZTogXCJFY3VhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkVHXCIsIG5hbWU6IFwiRWd5cHRcIn0sXG4gICAge2NvZGU6IFwiU1ZcIiwgbmFtZTogXCJFbCBTYWx2YWRvclwifSxcbiAgICB7Y29kZTogXCJHUVwiLCBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVSXCIsIG5hbWU6IFwiRXJpdHJlYVwifSxcbiAgICB7Y29kZTogXCJFRVwiLCBuYW1lOiBcIkVzdG9uaWFcIn0sXG4gICAge2NvZGU6IFwiRVRcIiwgbmFtZTogXCJFdGhpb3BpYVwifSxcbiAgICB7Y29kZTogXCJGS1wiLCBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwifSxcbiAgICB7Y29kZTogXCJGT1wiLCBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiRkpcIiwgbmFtZTogXCJGaWppIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiRklcIiwgbmFtZTogXCJGaW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkZSXCIsIG5hbWU6IFwiRnJhbmNlXCJ9LFxuICAgIHtjb2RlOiBcIkdGXCIsIG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwifSxcbiAgICB7Y29kZTogXCJQRlwiLCBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIn0sXG4gICAge2NvZGU6IFwiVEZcIiwgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIn0sXG4gICAge2NvZGU6IFwiR0FcIiwgbmFtZTogXCJHYWJvblwifSxcbiAgICB7Y29kZTogXCJHTVwiLCBuYW1lOiBcIkdhbWJpYVwifSxcbiAgICB7Y29kZTogXCJHRVwiLCBuYW1lOiBcIkdlb3JnaWFcIn0sXG4gICAge2NvZGU6IFwiREVcIiwgbmFtZTogXCJHZXJtYW55XCJ9LFxuICAgIHtjb2RlOiBcIkdIXCIsIG5hbWU6IFwiR2hhbmFcIn0sXG4gICAge2NvZGU6IFwiR0lcIiwgbmFtZTogXCJHaWJyYWx0YXJcIn0sXG4gICAge2NvZGU6IFwiR1JcIiwgbmFtZTogXCJHcmVlY2VcIn0sXG4gICAge2NvZGU6IFwiR0xcIiwgbmFtZTogXCJHcmVlbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiR0RcIiwgbmFtZTogXCJHcmVuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIkdQXCIsIG5hbWU6IFwiR3VhZGVsb3VwZVwifSxcbiAgICB7Y29kZTogXCJHVVwiLCBuYW1lOiBcIkd1YW1cIn0sXG4gICAge2NvZGU6IFwiR1RcIiwgbmFtZTogXCJHdWF0ZW1hbGFcIn0sXG4gICAge2NvZGU6IFwiR0dcIiwgbmFtZTogXCJHdWVybnNleVwifSxcbiAgICB7Y29kZTogXCJHTlwiLCBuYW1lOiBcIkd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJHV1wiLCBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIn0sXG4gICAge2NvZGU6IFwiR1lcIiwgbmFtZTogXCJHdXlhbmFcIn0sXG4gICAge2NvZGU6IFwiSFRcIiwgbmFtZTogXCJIYWl0aVwifSxcbiAgICB7Y29kZTogXCJITVwiLCBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJWQVwiLCBuYW1lOiBcIkhvbHkgU2VlXCJ9LFxuICAgIHtjb2RlOiBcIkhOXCIsIG5hbWU6IFwiSG9uZHVyYXNcIn0sXG4gICAge2NvZGU6IFwiSEtcIiwgbmFtZTogXCJIb25nIEtvbmdcIn0sXG4gICAge2NvZGU6IFwiSFVcIiwgbmFtZTogXCJIdW5nYXJ5XCJ9LFxuICAgIHtjb2RlOiBcIklTXCIsIG5hbWU6IFwiSWNlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTlwiLCBuYW1lOiBcIkluZGlhXCJ9LFxuICAgIHtjb2RlOiBcIklEXCIsIG5hbWU6IFwiSW5kb25lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIklSXCIsIG5hbWU6IFwiSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiSVFcIiwgbmFtZTogXCJJcmFxXCJ9LFxuICAgIHtjb2RlOiBcIklFXCIsIG5hbWU6IFwiSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJJTVwiLCBuYW1lOiBcIklzbGUgb2YgTWFuXCJ9LFxuICAgIHtjb2RlOiBcIklMXCIsIG5hbWU6IFwiSXNyYWVsXCJ9LFxuICAgIHtjb2RlOiBcIklUXCIsIG5hbWU6IFwiSXRhbHlcIn0sXG4gICAge2NvZGU6IFwiSk1cIiwgbmFtZTogXCJKYW1haWNhXCJ9LFxuICAgIHtjb2RlOiBcIkpQXCIsIG5hbWU6IFwiSmFwYW5cIn0sXG4gICAge2NvZGU6IFwiSkVcIiwgbmFtZTogXCJKZXJzZXlcIn0sXG4gICAge2NvZGU6IFwiSk9cIiwgbmFtZTogXCJKb3JkYW5cIn0sXG4gICAge2NvZGU6IFwiS1pcIiwgbmFtZTogXCJLYXpha2hzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIktFXCIsIG5hbWU6IFwiS2VueWFcIn0sXG4gICAge2NvZGU6IFwiS0lcIiwgbmFtZTogXCJLaXJpYmF0aVwifSxcbiAgICB7Y29kZTogXCJLUFwiLCBuYW1lOiBcIktvcmVhIChEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLUlwiLCBuYW1lOiBcIktvcmVhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1dcIiwgbmFtZTogXCJLdXdhaXRcIn0sXG4gICAge2NvZGU6IFwiS0dcIiwgbmFtZTogXCJLeXJneXpzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIkxBXCIsIG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiTFZcIiwgbmFtZTogXCJMYXR2aWFcIn0sXG4gICAge2NvZGU6IFwiTEJcIiwgbmFtZTogXCJMZWJhbm9uXCJ9LFxuICAgIHtjb2RlOiBcIkxTXCIsIG5hbWU6IFwiTGVzb3Rob1wifSxcbiAgICB7Y29kZTogXCJMUlwiLCBuYW1lOiBcIkxpYmVyaWFcIn0sXG4gICAge2NvZGU6IFwiTFlcIiwgbmFtZTogXCJMaWJ5YVwifSxcbiAgICB7Y29kZTogXCJMSVwiLCBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIn0sXG4gICAge2NvZGU6IFwiTFRcIiwgbmFtZTogXCJMaXRodWFuaWFcIn0sXG4gICAge2NvZGU6IFwiTFVcIiwgbmFtZTogXCJMdXhlbWJvdXJnXCJ9LFxuICAgIHtjb2RlOiBcIk1PXCIsIG5hbWU6IFwiTWFjYW9cIn0sXG4gICAge2NvZGU6IFwiTUtcIiwgbmFtZTogXCJNYWNlZG9uaWEgKHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1HXCIsIG5hbWU6IFwiTWFkYWdhc2NhclwifSxcbiAgICB7Y29kZTogXCJNV1wiLCBuYW1lOiBcIk1hbGF3aVwifSxcbiAgICB7Y29kZTogXCJNWVwiLCBuYW1lOiBcIk1hbGF5c2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1WXCIsIG5hbWU6IFwiTWFsZGl2ZXNcIn0sXG4gICAge2NvZGU6IFwiTUxcIiwgbmFtZTogXCJNYWxpXCJ9LFxuICAgIHtjb2RlOiBcIk1UXCIsIG5hbWU6IFwiTWFsdGFcIn0sXG4gICAge2NvZGU6IFwiTUhcIiwgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk1RXCIsIG5hbWU6IFwiTWFydGluaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNUlwiLCBuYW1lOiBcIk1hdXJpdGFuaWFcIn0sXG4gICAge2NvZGU6IFwiTVVcIiwgbmFtZTogXCJNYXVyaXRpdXNcIn0sXG4gICAge2NvZGU6IFwiWVRcIiwgbmFtZTogXCJNYXlvdHRlXCJ9LFxuICAgIHtjb2RlOiBcIk1YXCIsIG5hbWU6IFwiTWV4aWNvXCJ9LFxuICAgIHtjb2RlOiBcIkZNXCIsIG5hbWU6IFwiTWljcm9uZXNpYSAoRmVkZXJhdGVkIFN0YXRlcyBvZilcIn0sXG4gICAge2NvZGU6IFwiTURcIiwgbmFtZTogXCJNb2xkb3ZhIChSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUNcIiwgbmFtZTogXCJNb25hY29cIn0sXG4gICAge2NvZGU6IFwiTU5cIiwgbmFtZTogXCJNb25nb2xpYVwifSxcbiAgICB7Y29kZTogXCJNRVwiLCBuYW1lOiBcIk1vbnRlbmVncm9cIn0sXG4gICAge2NvZGU6IFwiTVNcIiwgbmFtZTogXCJNb250c2VycmF0XCJ9LFxuICAgIHtjb2RlOiBcIk1BXCIsIG5hbWU6IFwiTW9yb2Njb1wifSxcbiAgICB7Y29kZTogXCJNWlwiLCBuYW1lOiBcIk1vemFtYmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTU1cIiwgbmFtZTogXCJNeWFubWFyXCJ9LFxuICAgIHtjb2RlOiBcIk5BXCIsIG5hbWU6IFwiTmFtaWJpYVwifSxcbiAgICB7Y29kZTogXCJOUlwiLCBuYW1lOiBcIk5hdXJ1XCJ9LFxuICAgIHtjb2RlOiBcIk5QXCIsIG5hbWU6IFwiTmVwYWxcIn0sXG4gICAge2NvZGU6IFwiTkxcIiwgbmFtZTogXCJOZXRoZXJsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOQ1wiLCBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIn0sXG4gICAge2NvZGU6IFwiTlpcIiwgbmFtZTogXCJOZXcgWmVhbGFuZFwifSxcbiAgICB7Y29kZTogXCJOSVwiLCBuYW1lOiBcIk5pY2FyYWd1YVwifSxcbiAgICB7Y29kZTogXCJORVwiLCBuYW1lOiBcIk5pZ2VyXCJ9LFxuICAgIHtjb2RlOiBcIk5HXCIsIG5hbWU6IFwiTmlnZXJpYVwifSxcbiAgICB7Y29kZTogXCJOVVwiLCBuYW1lOiBcIk5pdWVcIn0sXG4gICAge2NvZGU6IFwiTkZcIiwgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwifSxcbiAgICB7Y29kZTogXCJNUFwiLCBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJOT1wiLCBuYW1lOiBcIk5vcndheVwifSxcbiAgICB7Y29kZTogXCJPTVwiLCBuYW1lOiBcIk9tYW5cIn0sXG4gICAge2NvZGU6IFwiUEtcIiwgbmFtZTogXCJQYWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJQV1wiLCBuYW1lOiBcIlBhbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlBTXCIsIG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwifSxcbiAgICB7Y29kZTogXCJQQVwiLCBuYW1lOiBcIlBhbmFtYVwifSxcbiAgICB7Y29kZTogXCJQR1wiLCBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiUFlcIiwgbmFtZTogXCJQYXJhZ3VheVwifSxcbiAgICB7Y29kZTogXCJQRVwiLCBuYW1lOiBcIlBlcnVcIn0sXG4gICAge2NvZGU6IFwiUEhcIiwgbmFtZTogXCJQaGlsaXBwaW5lc1wifSxcbiAgICB7Y29kZTogXCJQTlwiLCBuYW1lOiBcIlBpdGNhaXJuXCJ9LFxuICAgIHtjb2RlOiBcIlBMXCIsIG5hbWU6IFwiUG9sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlBUXCIsIG5hbWU6IFwiUG9ydHVnYWxcIn0sXG4gICAge2NvZGU6IFwiUFJcIiwgbmFtZTogXCJQdWVydG8gUmljb1wifSxcbiAgICB7Y29kZTogXCJRQVwiLCBuYW1lOiBcIlFhdGFyXCJ9LFxuICAgIHtjb2RlOiBcIlJFXCIsIG5hbWU6IFwiUsOpdW5pb25cIn0sXG4gICAge2NvZGU6IFwiUk9cIiwgbmFtZTogXCJSb21hbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlJVXCIsIG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJXXCIsIG5hbWU6IFwiUndhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIkJMXCIsIG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIn0sXG4gICAge2NvZGU6IFwiU0hcIiwgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwifSxcbiAgICB7Y29kZTogXCJLTlwiLCBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wifSxcbiAgICB7Y29kZTogXCJMQ1wiLCBuYW1lOiBcIlNhaW50IEx1Y2lhXCJ9LFxuICAgIHtjb2RlOiBcIk1GXCIsIG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiUE1cIiwgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCJ9LFxuICAgIHtjb2RlOiBcIlZDXCIsIG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIn0sXG4gICAge2NvZGU6IFwiV1NcIiwgbmFtZTogXCJTYW1vYVwifSxcbiAgICB7Y29kZTogXCJTTVwiLCBuYW1lOiBcIlNhbiBNYXJpbm9cIn0sXG4gICAge2NvZGU6IFwiU1RcIiwgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIn0sXG4gICAge2NvZGU6IFwiU0FcIiwgbmFtZTogXCJTYXVkaSBBcmFiaWFcIn0sXG4gICAge2NvZGU6IFwiU05cIiwgbmFtZTogXCJTZW5lZ2FsXCJ9LFxuICAgIHtjb2RlOiBcIlJTXCIsIG5hbWU6IFwiU2VyYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNDXCIsIG5hbWU6IFwiU2V5Y2hlbGxlc1wifSxcbiAgICB7Y29kZTogXCJTTFwiLCBuYW1lOiBcIlNpZXJyYSBMZW9uZVwifSxcbiAgICB7Y29kZTogXCJTR1wiLCBuYW1lOiBcIlNpbmdhcG9yZVwifSxcbiAgICB7Y29kZTogXCJTWFwiLCBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIn0sXG4gICAge2NvZGU6IFwiU0tcIiwgbmFtZTogXCJTbG92YWtpYVwifSxcbiAgICB7Y29kZTogXCJTSVwiLCBuYW1lOiBcIlNsb3ZlbmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNCXCIsIG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNPXCIsIG5hbWU6IFwiU29tYWxpYVwifSxcbiAgICB7Y29kZTogXCJaQVwiLCBuYW1lOiBcIlNvdXRoIEFmcmljYVwifSxcbiAgICB7Y29kZTogXCJHU1wiLCBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlNTXCIsIG5hbWU6IFwiU291dGggU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiRVNcIiwgbmFtZTogXCJTcGFpblwifSxcbiAgICB7Y29kZTogXCJMS1wiLCBuYW1lOiBcIlNyaSBMYW5rYVwifSxcbiAgICB7Y29kZTogXCJTRFwiLCBuYW1lOiBcIlN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIlNSXCIsIG5hbWU6IFwiU3VyaW5hbWVcIn0sXG4gICAge2NvZGU6IFwiU0pcIiwgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCJ9LFxuICAgIHtjb2RlOiBcIlNaXCIsIG5hbWU6IFwiU3dhemlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNFXCIsIG5hbWU6IFwiU3dlZGVuXCJ9LFxuICAgIHtjb2RlOiBcIkNIXCIsIG5hbWU6IFwiU3dpdHplcmxhbmRcIn0sXG4gICAge2NvZGU6IFwiU1lcIiwgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJUV1wiLCBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiVEpcIiwgbmFtZTogXCJUYWppa2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRaXCIsIG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwifSxcbiAgICB7Y29kZTogXCJUSFwiLCBuYW1lOiBcIlRoYWlsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlRMXCIsIG5hbWU6IFwiVGltb3ItTGVzdGVcIn0sXG4gICAge2NvZGU6IFwiVEdcIiwgbmFtZTogXCJUb2dvXCJ9LFxuICAgIHtjb2RlOiBcIlRLXCIsIG5hbWU6IFwiVG9rZWxhdVwifSxcbiAgICB7Y29kZTogXCJUT1wiLCBuYW1lOiBcIlRvbmdhXCJ9LFxuICAgIHtjb2RlOiBcIlRUXCIsIG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wifSxcbiAgICB7Y29kZTogXCJUTlwiLCBuYW1lOiBcIlR1bmlzaWFcIn0sXG4gICAge2NvZGU6IFwiVFJcIiwgbmFtZTogXCJUdXJrZXlcIn0sXG4gICAge2NvZGU6IFwiVE1cIiwgbmFtZTogXCJUdXJrbWVuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVENcIiwgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVFZcIiwgbmFtZTogXCJUdXZhbHVcIn0sXG4gICAge2NvZGU6IFwiVUdcIiwgbmFtZTogXCJVZ2FuZGFcIn0sXG4gICAge2NvZGU6IFwiVUFcIiwgbmFtZTogXCJVa3JhaW5lXCJ9LFxuICAgIHtjb2RlOiBcIkFFXCIsIG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIn0sXG4gICAge2NvZGU6IFwiR0JcIiwgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlVTXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIlVNXCIsIG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlVZXCIsIG5hbWU6IFwiVXJ1Z3VheVwifSxcbiAgICB7Y29kZTogXCJVWlwiLCBuYW1lOiBcIlV6YmVraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVlVcIiwgbmFtZTogXCJWYW51YXR1XCJ9LFxuICAgIHtjb2RlOiBcIlZFXCIsIG5hbWU6IFwiVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJWTlwiLCBuYW1lOiBcIlZpZXRuYW1cIn0sXG4gICAge2NvZGU6IFwiVkdcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIn0sXG4gICAge2NvZGU6IFwiVklcIiwgbmFtZTogXCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIn0sXG4gICAge2NvZGU6IFwiV0ZcIiwgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwifSxcbiAgICB7Y29kZTogXCJFSFwiLCBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCJ9LFxuICAgIHtjb2RlOiBcIllFXCIsIG5hbWU6IFwiWWVtZW5cIn0sXG4gICAge2NvZGU6IFwiWk1cIiwgbmFtZTogXCJaYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiWldcIiwgbmFtZTogXCJaaW1iYWJ3ZVwifSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0ICogYXMgYXBpcyBmcm9tIFwiLi9hcGlzXCI7XG5pbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uaW5wdXRcIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc2xpa2Vjb250ZW50XCIpO1xuY29uc3QgbWF4VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heGNvbnRlbnRcIik7XG5jb25zdCBtaW5UZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluY29udGVudFwiKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFpbmNoYW5jZWNvbnRlbnRcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRzcGVlZGNvbnRlbnRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHljb250ZW50XCIpO1xuY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZWNvbnRlbnRcIik7XG5jb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldGNvbnRlbnRcIik7XG5cbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlcmRlc2NyaXB0aW9uXCIpO1xuY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50aWNvblwiKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGVhbGxcIik7XG5cbmNvbnN0IGNoYW5nZVVuaXRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0XCIpO1xuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBsb2NhdGlvbkNob3NlbjtcblxuICAgICAgICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBcIkxpc2JvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJlbmhlaXRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvQ2Vsc2l1cyhsb2NhdGlvbkNob3Nlbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSl9IMK6Q2A7XG4gICAgICAgICAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1heFxuICAgICAgICAgICAgKX0gwrpDYDtcbiAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWluXG4gICAgICAgICAgICApfSDCukNgO1xuICAgICAgICAgICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICBkYXRhLmRhaWx5WzBdLnBvcCAqIDEwMFxuICAgICAgICAgICAgKX0lYDtcbiAgICAgICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQgKiAzLjYgKiAxMCkgLyAxMFxuICAgICAgICAgICAgfSBLbS9IYDtcbiAgICAgICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC5zdW5yaXNlLFxuICAgICAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQuc3Vuc2V0LFxuICAgICAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbnZlcnRUb1RpdGxlQ2FzZShcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgKGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkubG9jYXRpb25OYW1lXG4gICAgICAgICAgICB9LCAkeyhhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmNvdW50cnlOYW1lfWA7XG4gICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgICAgICAgICApfSDCukNgO1xuXG4gICAgICAgICAgICBjdXJyZW50SWNvbi5zcmMgPSBET00uZ2V0V2VhdGhlckljb24oZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGEuZGFpbHkpO1xuICAgICAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG4gICAgICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcblxuICAgICAgICAgICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoXG4gICAgICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgICAgICAgICBkYWlseUljb25zLFxuICAgICAgICAgICAgICAgIGRhaWx5TWF4VGVtcHMsXG4gICAgICAgICAgICAgICAgZGFpbHlNaW5UZW1wc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KGRhdGEuaG91cmx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCBcIsK6Q1wiKTtcblxuICAgICAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgICAgICBET00uY2hhbmdlQkdJbWFnZShcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCxcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgRE9NLmltcHJvdmVSZWFkYWJpbGl0eShcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCxcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9GYXJlbmhlaXRzKGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKX0gwrpGYDtcbiAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWF4XG4gICAgICAgICAgICApfSDCukZgO1xuICAgICAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICAgICAgICl9IMK6RmA7XG4gICAgICAgICAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0ucG9wICogMTAwXG4gICAgICAgICAgICApfSVgO1xuICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDEwKSAvIDEwXG4gICAgICAgICAgICB9IE1waGA7XG4gICAgICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQuc3VucmlzZSxcbiAgICAgICAgICAgICAgICBkYXRhLnRpbWV6b25lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3Vuc2V0LnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LnN1bnNldCxcbiAgICAgICAgICAgICAgICBkYXRhLnRpbWV6b25lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjb252ZXJ0VG9UaXRsZUNhc2UoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke1xuICAgICAgICAgICAgICAgIChhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmxvY2F0aW9uTmFtZVxuICAgICAgICAgICAgfSwgJHsoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5jb3VudHJ5TmFtZX1gO1xuICAgICAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQudGVtcFxuICAgICAgICAgICAgKX0gwrpGYDtcblxuICAgICAgICAgICAgY3VycmVudEljb24uc3JjID0gRE9NLmdldFdlYXRoZXJJY29uKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KGRhdGEuZGFpbHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICAgICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKGRhdGEuZGFpbHksIFwiwrpGXCIpO1xuICAgICAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YS5kYWlseSwgXCLCukZcIik7XG5cbiAgICAgICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KFxuICAgICAgICAgICAgICAgIGRheXMsXG4gICAgICAgICAgICAgICAgZGFpbHlJY29ucyxcbiAgICAgICAgICAgICAgICBkYWlseU1heFRlbXBzLFxuICAgICAgICAgICAgICAgIGRhaWx5TWluVGVtcHNcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgICAgICBjb25zdCBob3VybHlJY29ucyA9IGNyZWF0ZUhvdXJseUljb25zQXJyYXkoZGF0YS5ob3VybHkpO1xuICAgICAgICAgICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhLmhvdXJseSwgXCLCukZcIik7XG5cbiAgICAgICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICAgICAgRE9NLmNoYW5nZUJHSW1hZ2UoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQsXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIERPTS5pbXByb3ZlUmVhZGFiaWxpdHkoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQsXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hVbml0cyk7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc3dpdGNoVW5pdHMoKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlVW5pdHNCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyZW5oZWl0XCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbkNob3Nlbik7XG5cbiAgICAgICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZVxuICAgICAgICAgICAgICAgICl9IMK6Q2A7XG4gICAgICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWF4XG4gICAgICAgICAgICAgICAgKX0gwrpDYDtcbiAgICAgICAgICAgICAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICAgICAgICAgICApfSDCukNgO1xuXG4gICAgICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQgKiAzLjYgKiAxMCkgLyAxMFxuICAgICAgICAgICAgICAgIH0gS20vSGA7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQudGVtcFxuICAgICAgICAgICAgICAgICl9IMK6Q2A7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KGRhdGEuZGFpbHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YS5kYWlseSwgXCLCukNcIik7XG5cbiAgICAgICAgICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChcbiAgICAgICAgICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlJY29ucyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlNYXhUZW1wcyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlNaW5UZW1wc1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoZGF0YS5ob3VybHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhLmhvdXJseSwgXCLCukNcIik7XG5cbiAgICAgICAgICAgICAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG5cbiAgICAgICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFyZW5oZWl0XCIpO1xuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggdG8gwrpGXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFGYXJlbmhlaXRzID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0ZhcmVuaGVpdHMoXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uQ2hvc2VuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRmFyZW5oZWl0cyk7XG5cbiAgICAgICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5jdXJyZW50LmZlZWxzX2xpa2VcbiAgICAgICAgICAgICAgICApfSDCukZgO1xuICAgICAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuZGFpbHlbMF0udGVtcC5tYXhcbiAgICAgICAgICAgICAgICApfSDCukZgO1xuICAgICAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICAgICAgICAgICApfSDCukZgO1xuXG4gICAgICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoZGF0YUZhcmVuaGVpdHMuY3VycmVudC53aW5kX3NwZWVkICogMTApIC8gMTBcbiAgICAgICAgICAgICAgICB9IE1waGA7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5jdXJyZW50LnRlbXBcbiAgICAgICAgICAgICAgICApfSDCukZgO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuZGFpbHksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGYXJlbmhlaXRzLnRpbWV6b25lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGFGYXJlbmhlaXRzLmRhaWx5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuZGFpbHksXG4gICAgICAgICAgICAgICAgICAgIFwiwrpGXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5kYWlseSxcbiAgICAgICAgICAgICAgICAgICAgXCLCukZcIlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChcbiAgICAgICAgICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlJY29ucyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlNYXhUZW1wcyxcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlNaW5UZW1wc1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGYXJlbmhlaXRzLmhvdXJseSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMudGltZXpvbmVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuaG91cmx5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGFGYXJlbmhlaXRzLmhvdXJseSwgXCLCukZcIik7XG5cbiAgICAgICAgICAgICAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG5cbiAgICAgICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmFyZW5oZWl0XCIpO1xuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggdG8gwrpDXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVhbGxcIik7XG5cbiAgICAgICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGFuZ2VVbml0c0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVW5pdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNwYXJlbnRcIik7XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwKSk7XG5cbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURheXNBcnJheShkYXlzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZERheSA9IGAke2NvbnZlcnRVbml4VG9XZWVrZGF5KFxuICAgICAgICAgICAgZGF5c1tpXS5kdCxcbiAgICAgICAgICAgIHRpbWVab25lXG4gICAgICAgICl9LCAke2NvbnZlcnRVbml4VG9EYXkoZGF5c1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGRheXNBcnJheS5wdXNoKGNvbnZlcnRlZERheSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXlzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChkYXlzW2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgfVxuICAgIHJldHVybiBpY29uc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXREYWlseU1heFRlbXBzKGRheXMsIHVuaXQpIHtcbiAgICBjb25zdCBtYXhUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbWF4VGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoZGF5c1tpXS50ZW1wLm1heCl9ICR7dW5pdH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWluVGVtcHMoZGF5cywgdW5pdCkge1xuICAgIGNvbnN0IG1pblRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtaW5UZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWluKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gbWluVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNBcnJheShob3VycywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBob3Vyc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEhvdXIgPSBgJHtjb252ZXJ0V2l0aG91dE1pbnV0ZXMoaG91cnNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBob3Vyc0FycmF5LnB1c2goY29udmVydGVkSG91cik7XG4gICAgfVxuICAgIHJldHVybiBob3Vyc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlJY29uc0FycmF5KGhvdXJzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goaG91cnNbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseVRlbXBzKGhvdXJzLCB1bml0KSB7XG4gICAgY29uc3QgVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBUZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChob3Vyc1tpXS50ZW1wKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvVGl0bGVDYXNlKHN0cmluZykge1xuICAgIGNvbnN0IGFycmF5T2ZXb3JkcyA9IHN0cmluZy5zcGxpdChcIiBcIik7XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZEFycmF5ID0gW107XG4gICAgYXJyYXlPZldvcmRzLmZvckVhY2goKHdvcmQpID0+XG4gICAgICAgIGNhcGl0YWxpemVkQXJyYXkucHVzaCh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkpXG4gICAgKTtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZWRBcnJheS5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb0hvdXIodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGhvdXIudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFdpdGhvdXRNaW51dGVzKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9EYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb1dlZWtkYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IHdlZWtkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIHdlZWtkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHNlYXJjaFdlYXRoZXIoKTtcbn0pO1xuXG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET00uc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCk7XG5cbmNvbnN0IGRhaWx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcblxuZGFpbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0RhaWx5Rm9yZWNhc3QpO1xuXG5ET00uY3JlYXRlRmlyc3RIb3VybHlEaXZzKCk7XG5ET00uaGlkZUZpcnN0SG91cmx5RGl2cygpO1xuXG5ET00uY3JlYXRlTGFzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuc2VhcmNoV2VhdGhlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9