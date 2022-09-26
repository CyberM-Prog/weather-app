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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n"],"sourceRoot":""}]);
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

        container.classList.remove("hideall");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFB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QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJDQUEyQztBQUNoRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1EQUFtRDtBQUN4RCxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDRDQUE0QztBQUNqRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDBDQUEwQztBQUMvQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNw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Q0E7QUFDQSxVQUFVLElBQUksdUNBQXVDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1Qiw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixRQUFRO0FBQzVCLDhCQUE4Qiw4QkFBOEI7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0IsaUNBQWlDLDZDQUE2QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0IsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBdUMsd0RBQTBCOztBQUVqRTs7QUFFQSxzQ0FBc0MsdURBQXlCOztBQUUvRCx1REFBeUI7QUFDekIscURBQXVCOztBQUV2QixzREFBd0I7QUFDeEIsb0RBQXNCOztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3LjV2dztcXG59XFxuXFxuLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiAtMTNweDtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC45dnc7XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjY1dnc7XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMC4ydnc7XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljg1dnc7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiAxMy41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiAzLjI1cmVtO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDJweDtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JB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O0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDEyLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjlyZW07XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnR3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2VwYXJhdG9yIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udG9wIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMi41cmVtO1xcbn1cXG5cXG4udG9wZGl2IHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4udG9waWNvbnMge1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG59XFxuXFxuLnRvcHdyYXAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b3Bjb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mZWVsc2xpa2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA3LjV2dztcXG59XFxuXFxuLmZlZWxzbGlrZSA+ICoge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5mZWVsc2xpa2UgPiBpbWcge1xcbiAgICBsZWZ0OiAtMTNweDtcXG59XFxuXFxuLmZlZWxzbGlrZSA+IC50b3B3cmFwIHtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4uaHVtaWRpdHkgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5zdW5yaXNlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC45dnc7XFxufVxcblxcbi5zdW5zZXQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjY1dnc7XFxufVxcblxcbi5zdW5yaXNlaWNvbixcXG4uc3Vuc2V0aWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMC4ydnc7XFxufVxcblxcbi53aW5kc3BlZWQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDNweDtcXG59XFxuXFxuLnBvcCB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDlyZW07XFxufVxcblxcbi5taW50ZW1wZXJhdHVyZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguNXZ3O1xcbn1cXG5cXG4ubWF4dGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4Ljg1dnc7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lY2hvaWNlID4gKiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiAxMy41dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGFpbHlkaXZzIHtcXG4gICAgd2lkdGg6IDExdnc7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmZvcmVjYXN0aWNvbiB7XFxuICAgIHdpZHRoOiAzLjI1cmVtO1xcbn1cXG5cXG4uZGFpbHl3ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDJweDtcXG59XFxuXFxuLmZpcnN0aG91cmx5ZGl2cyxcXG4ubGFzdGhvdXJseWRpdnMge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRlYWxsID4gKiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yaWdodGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTQuMjVyZW07XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0YXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5aWNvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJHSW1hZ2UoY29kZSkge1xuICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9qb2hhbm5lcy1wbGVuaW8tRVNMMXJJczlqNDgtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSAzMDAgJiYgY29kZSA8IDQwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcm9tYW4tc3lua2V2eWNoLXFQdkJtU3Ztb2hzLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gNTAwICYmIGNvZGUgPCA2MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3JvZG9sZm8tY3VhZHJvcy04d0twRnF4REpUMC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDYwMCAmJiBjb2RlIDwgNzAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy90aGUtbmlnbWF0aWMtUkRoOVYtYzRpU0ktdW5zcGxhc2hcXFxcIFxcXFwoMVxcXFwpLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPiA4MDAgJiYgY29kZSA8IDkwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvbmljay1mZXdpbmdzLVp0RGlKem9rWmkwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDcwMSB8fCBjb2RlID09PSA3NDEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2RhdmUtaG9lZmxlci1vZDI4N3ZReXVmdy11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgY29kZSA9PT0gNzExIHx8XG4gICAgICAgIGNvZGUgPT09IDcyMSB8fFxuICAgICAgICBjb2RlID09PSA3MzEgfHxcbiAgICAgICAgY29kZSA9PT0gNzUxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MSB8fFxuICAgICAgICBjb2RlID09PSA3NjJcbiAgICApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2NocmlzLWxlYm91dGlsbGllci1iZThtbkZYekJnby11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSA3NzEpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2toYW1rZW8tdmlsYXlzaW5nLVd0d1NzcXdZbEEwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc4MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvZXNwZW4tYmllcnVkLVc0M2dtNlREMTE4LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2VcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3dpbGxpYW0tYm91dC1SUHpXSTByb2xTOC11bnNwbGFzaC5qcGcpXCI7XG59XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlkaXZzXCIpO1xuXG5mdW5jdGlvbiBoaWRlRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdGhvdXJseWRpdnNcIik7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGhvdXJseURpdik7XG5cbiAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgICAgIGhvdXIudGV4dENvbnRlbnQgPSBcIjEyIEEuTS5cIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXIpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBob3VybHlJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlpY29uXCIpO1xuICAgICAgICBob3VybHlJY29uLnNyYyA9IFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1kcml6emxlLnN2Z1wiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbik7XG5cbiAgICAgICAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5dGVtcGVyYXR1cmVcIik7XG4gICAgICAgIGhvdXJseVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gXCI0MCDCukNcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcbiAgICB9XG4gICAgY3JlYXRlUmlnaHRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcInJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICByaWdodEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoXCJsYXN0aG91cmx5ZGl2c1wiKTtcbiAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoaG91cmx5RGl2KTtcblxuICAgICAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcbiAgICAgICAgaG91ci50ZXh0Q29udGVudCA9IFwiMSBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDEgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuICAgIGNyZWF0ZUxlZnRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctbGVmdC1jaXJjbGUuc3ZnXCIpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG59XG5cbmZ1bmN0aW9uIHNob3dMYXN0SG91cmx5RGl2cygpIHtcbiAgICBoaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBpZiAoIWxhc3RIb3VybHlEaXZzKSBjcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuICAgIGVsc2UgdW5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGaXJzdEhvdXJseURpdnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgaGlkZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHVuaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRleHRDb250ZW50KHRleHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRpY29uXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBcIjAxZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3N1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMW5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAyZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXN1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMm5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAzZFwiIHx8IGNvZGUgPT09IFwiMDNuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQgKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA0ZFwiIHx8IGNvZGUgPT09IFwiMDRuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWRzLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXJhaW4gKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjExZFwiIHx8IGNvZGUgPT09IFwiMTFuXCIpXG4gICAgICAgIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbGlnaHRuaW5nICgyKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxM2RcIiB8fCBjb2RlID09PSBcIjEzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3Nub3cuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiNTBkXCIgfHwgY29kZSA9PT0gXCI1MG5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1mb2cuc3ZnXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGNvZGVzLCBtYXhUZW1wcywgbWluVGVtcHMpIHtcbiAgICBjb25zdCBkYWlseURhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlXCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RpY29uXCIpO1xuICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWF4XCIpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWluXCIpO1xuICAgIGNvbnNvbGUubG9nKGRhaWx5Rm9yZWNhc3RJY29ucyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBkYWlseURhdGVzW2ldLnRleHRDb250ZW50ID0gZGF5c1tpXTtcblxuICAgICAgICBkYWlseUZvcmVjYXN0SWNvbnNbaV0uc3JjID0gZ2V0V2VhdGhlckljb24oY29kZXNbaV0pO1xuXG4gICAgICAgIGRhaWx5TWF4VGVtcHNbaV0udGV4dENvbnRlbnQgPSBtYXhUZW1wc1tpXTtcblxuICAgICAgICBkYWlseU1pblRlbXBzW2ldLnRleHRDb250ZW50ID0gbWluVGVtcHNbaV07XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGNvZGVzLCB0ZW1wcykge1xuICAgIGNvbnN0IGhvdXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91clwiKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHlpY29uXCIpO1xuICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHl0ZW1wZXJhdHVyZVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBob3VyRWxlbWVudHNbaV0udGV4dENvbnRlbnQgPSBob3Vyc1tpXTtcblxuICAgICAgICBob3VybHlGb3JlY2FzdEljb25zW2ldLnNyYyA9IGdldFdlYXRoZXJJY29uKGNvZGVzW2ldKTtcblxuICAgICAgICBob3VybHlUZW1wc1tpXS50ZXh0Q29udGVudCA9IHRlbXBzW2ldO1xuICAgIH1cbn1cbiIsImNvbnN0IGtleSA9IFwiOWIyZWNiYTc1M2EyZDBiNTAxYjE2YmUzNDUyNDY5ZmZcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXMobG9jYXRpb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2tleX1gLFxuICAgICAgICB7bW9kZTogXCJjb3JzXCJ9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge2xhdDogZGF0YVswXS5sYXQsIGxvbjogZGF0YVswXS5sb259O1xuICAgIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgICAge21vZGU6IFwiY29yc1wifVxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZGF0YVswXS5uYW1lO1xuICAgIGxldCBjb3VudHJ5TmFtZSA9IGRhdGFbMF0uY291bnRyeTtcblxuICAgIGNvdW50cnlMaXN0LmZvckVhY2goKGNvdW50cnkpID0+IHtcbiAgICAgICAgaWYgKGNvdW50cnkuY29kZSA9PT0gY291bnRyeU5hbWUpIGNvdW50cnlOYW1lID0gY291bnRyeS5uYW1lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtsb2NhdGlvbk5hbWUsIGNvdW50cnlOYW1lfTtcbn1cblxuY29uc3QgY291bnRyeUxpc3QgPSBbXG4gICAge2NvZGU6IFwiQUZcIiwgbmFtZTogXCJBZmdoYW5pc3RhblwifSxcbiAgICB7Y29kZTogXCJBWFwiLCBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkFMXCIsIG5hbWU6IFwiQWxiYW5pYVwifSxcbiAgICB7Y29kZTogXCJEWlwiLCBuYW1lOiBcIkFsZ2VyaWFcIn0sXG4gICAge2NvZGU6IFwiQVNcIiwgbmFtZTogXCJBbWVyaWNhbiBTYW1vYVwifSxcbiAgICB7Y29kZTogXCJBRFwiLCBuYW1lOiBcIkFuZG9ycmFcIn0sXG4gICAge2NvZGU6IFwiQU9cIiwgbmFtZTogXCJBbmdvbGFcIn0sXG4gICAge2NvZGU6IFwiQUlcIiwgbmFtZTogXCJBbmd1aWxsYVwifSxcbiAgICB7Y29kZTogXCJBUVwiLCBuYW1lOiBcIkFudGFyY3RpY2FcIn0sXG4gICAge2NvZGU6IFwiQUdcIiwgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCJ9LFxuICAgIHtjb2RlOiBcIkFSXCIsIG5hbWU6IFwiQXJnZW50aW5hXCJ9LFxuICAgIHtjb2RlOiBcIkFNXCIsIG5hbWU6IFwiQXJtZW5pYVwifSxcbiAgICB7Y29kZTogXCJBV1wiLCBuYW1lOiBcIkFydWJhXCJ9LFxuICAgIHtjb2RlOiBcIkFVXCIsIG5hbWU6IFwiQXVzdHJhbGlhXCJ9LFxuICAgIHtjb2RlOiBcIkFUXCIsIG5hbWU6IFwiQXVzdHJpYVwifSxcbiAgICB7Y29kZTogXCJBWlwiLCBuYW1lOiBcIkF6ZXJiYWlqYW5cIn0sXG4gICAge2NvZGU6IFwiQlNcIiwgbmFtZTogXCJCYWhhbWFzXCJ9LFxuICAgIHtjb2RlOiBcIkJIXCIsIG5hbWU6IFwiQmFocmFpblwifSxcbiAgICB7Y29kZTogXCJCRFwiLCBuYW1lOiBcIkJhbmdsYWRlc2hcIn0sXG4gICAge2NvZGU6IFwiQkJcIiwgbmFtZTogXCJCYXJiYWRvc1wifSxcbiAgICB7Y29kZTogXCJCWVwiLCBuYW1lOiBcIkJlbGFydXNcIn0sXG4gICAge2NvZGU6IFwiQkVcIiwgbmFtZTogXCJCZWxnaXVtXCJ9LFxuICAgIHtjb2RlOiBcIkJaXCIsIG5hbWU6IFwiQmVsaXplXCJ9LFxuICAgIHtjb2RlOiBcIkJKXCIsIG5hbWU6IFwiQmVuaW5cIn0sXG4gICAge2NvZGU6IFwiQk1cIiwgbmFtZTogXCJCZXJtdWRhXCJ9LFxuICAgIHtjb2RlOiBcIkJUXCIsIG5hbWU6IFwiQmh1dGFuXCJ9LFxuICAgIHtjb2RlOiBcIkJPXCIsIG5hbWU6IFwiQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZilcIn0sXG4gICAge2NvZGU6IFwiQlFcIiwgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwifSxcbiAgICB7Y29kZTogXCJCQVwiLCBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIn0sXG4gICAge2NvZGU6IFwiQldcIiwgbmFtZTogXCJCb3Rzd2FuYVwifSxcbiAgICB7Y29kZTogXCJCVlwiLCBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiQlJcIiwgbmFtZTogXCJCcmF6aWxcIn0sXG4gICAge2NvZGU6IFwiSU9cIiwgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIn0sXG4gICAge2NvZGU6IFwiQk5cIiwgbmFtZTogXCJCcnVuZWkgRGFydXNzYWxhbVwifSxcbiAgICB7Y29kZTogXCJCR1wiLCBuYW1lOiBcIkJ1bGdhcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkJGXCIsIG5hbWU6IFwiQnVya2luYSBGYXNvXCJ9LFxuICAgIHtjb2RlOiBcIkJJXCIsIG5hbWU6IFwiQnVydW5kaVwifSxcbiAgICB7Y29kZTogXCJDVlwiLCBuYW1lOiBcIkNhYm8gVmVyZGVcIn0sXG4gICAge2NvZGU6IFwiS0hcIiwgbmFtZTogXCJDYW1ib2RpYVwifSxcbiAgICB7Y29kZTogXCJDTVwiLCBuYW1lOiBcIkNhbWVyb29uXCJ9LFxuICAgIHtjb2RlOiBcIkNBXCIsIG5hbWU6IFwiQ2FuYWRhXCJ9LFxuICAgIHtjb2RlOiBcIktZXCIsIG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ0ZcIiwgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiVERcIiwgbmFtZTogXCJDaGFkXCJ9LFxuICAgIHtjb2RlOiBcIkNMXCIsIG5hbWU6IFwiQ2hpbGVcIn0sXG4gICAge2NvZGU6IFwiQ05cIiwgbmFtZTogXCJDaGluYVwifSxcbiAgICB7Y29kZTogXCJDWFwiLCBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiQ0NcIiwgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDT1wiLCBuYW1lOiBcIkNvbG9tYmlhXCJ9LFxuICAgIHtjb2RlOiBcIktNXCIsIG5hbWU6IFwiQ29tb3Jvc1wifSxcbiAgICB7Y29kZTogXCJDR1wiLCBuYW1lOiBcIkNvbmdvXCJ9LFxuICAgIHtjb2RlOiBcIkNEXCIsIG5hbWU6IFwiQ29uZ28gKERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlKVwifSxcbiAgICB7Y29kZTogXCJDS1wiLCBuYW1lOiBcIkNvb2sgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJDUlwiLCBuYW1lOiBcIkNvc3RhIFJpY2FcIn0sXG4gICAge2NvZGU6IFwiQ0lcIiwgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwifSxcbiAgICB7Y29kZTogXCJIUlwiLCBuYW1lOiBcIkNyb2F0aWFcIn0sXG4gICAge2NvZGU6IFwiQ1VcIiwgbmFtZTogXCJDdWJhXCJ9LFxuICAgIHtjb2RlOiBcIkNXXCIsIG5hbWU6IFwiQ3VyYcOnYW9cIn0sXG4gICAge2NvZGU6IFwiQ1lcIiwgbmFtZTogXCJDeXBydXNcIn0sXG4gICAge2NvZGU6IFwiQ1pcIiwgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJES1wiLCBuYW1lOiBcIkRlbm1hcmtcIn0sXG4gICAge2NvZGU6IFwiREpcIiwgbmFtZTogXCJEamlib3V0aVwifSxcbiAgICB7Y29kZTogXCJETVwiLCBuYW1lOiBcIkRvbWluaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkRPXCIsIG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkVDXCIsIG5hbWU6IFwiRWN1YWRvclwifSxcbiAgICB7Y29kZTogXCJFR1wiLCBuYW1lOiBcIkVneXB0XCJ9LFxuICAgIHtjb2RlOiBcIlNWXCIsIG5hbWU6IFwiRWwgU2FsdmFkb3JcIn0sXG4gICAge2NvZGU6IFwiR1FcIiwgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJFUlwiLCBuYW1lOiBcIkVyaXRyZWFcIn0sXG4gICAge2NvZGU6IFwiRUVcIiwgbmFtZTogXCJFc3RvbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkVUXCIsIG5hbWU6IFwiRXRoaW9waWFcIn0sXG4gICAge2NvZGU6IFwiRktcIiwgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIn0sXG4gICAge2NvZGU6IFwiRk9cIiwgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkZKXCIsIG5hbWU6IFwiRmlqaSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIkZJXCIsIG5hbWU6IFwiRmlubGFuZFwifSxcbiAgICB7Y29kZTogXCJGUlwiLCBuYW1lOiBcIkZyYW5jZVwifSxcbiAgICB7Y29kZTogXCJHRlwiLCBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIn0sXG4gICAge2NvZGU6IFwiUEZcIiwgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCJ9LFxuICAgIHtjb2RlOiBcIlRGXCIsIG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCJ9LFxuICAgIHtjb2RlOiBcIkdBXCIsIG5hbWU6IFwiR2Fib25cIn0sXG4gICAge2NvZGU6IFwiR01cIiwgbmFtZTogXCJHYW1iaWFcIn0sXG4gICAge2NvZGU6IFwiR0VcIiwgbmFtZTogXCJHZW9yZ2lhXCJ9LFxuICAgIHtjb2RlOiBcIkRFXCIsIG5hbWU6IFwiR2VybWFueVwifSxcbiAgICB7Y29kZTogXCJHSFwiLCBuYW1lOiBcIkdoYW5hXCJ9LFxuICAgIHtjb2RlOiBcIkdJXCIsIG5hbWU6IFwiR2licmFsdGFyXCJ9LFxuICAgIHtjb2RlOiBcIkdSXCIsIG5hbWU6IFwiR3JlZWNlXCJ9LFxuICAgIHtjb2RlOiBcIkdMXCIsIG5hbWU6IFwiR3JlZW5sYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkdEXCIsIG5hbWU6IFwiR3JlbmFkYVwifSxcbiAgICB7Y29kZTogXCJHUFwiLCBuYW1lOiBcIkd1YWRlbG91cGVcIn0sXG4gICAge2NvZGU6IFwiR1VcIiwgbmFtZTogXCJHdWFtXCJ9LFxuICAgIHtjb2RlOiBcIkdUXCIsIG5hbWU6IFwiR3VhdGVtYWxhXCJ9LFxuICAgIHtjb2RlOiBcIkdHXCIsIG5hbWU6IFwiR3Vlcm5zZXlcIn0sXG4gICAge2NvZGU6IFwiR05cIiwgbmFtZTogXCJHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiR1dcIiwgbmFtZTogXCJHdWluZWEtQmlzc2F1XCJ9LFxuICAgIHtjb2RlOiBcIkdZXCIsIG5hbWU6IFwiR3V5YW5hXCJ9LFxuICAgIHtjb2RlOiBcIkhUXCIsIG5hbWU6IFwiSGFpdGlcIn0sXG4gICAge2NvZGU6IFwiSE1cIiwgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVkFcIiwgbmFtZTogXCJIb2x5IFNlZVwifSxcbiAgICB7Y29kZTogXCJITlwiLCBuYW1lOiBcIkhvbmR1cmFzXCJ9LFxuICAgIHtjb2RlOiBcIkhLXCIsIG5hbWU6IFwiSG9uZyBLb25nXCJ9LFxuICAgIHtjb2RlOiBcIkhVXCIsIG5hbWU6IFwiSHVuZ2FyeVwifSxcbiAgICB7Y29kZTogXCJJU1wiLCBuYW1lOiBcIkljZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiSU5cIiwgbmFtZTogXCJJbmRpYVwifSxcbiAgICB7Y29kZTogXCJJRFwiLCBuYW1lOiBcIkluZG9uZXNpYVwifSxcbiAgICB7Y29kZTogXCJJUlwiLCBuYW1lOiBcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIklRXCIsIG5hbWU6IFwiSXJhcVwifSxcbiAgICB7Y29kZTogXCJJRVwiLCBuYW1lOiBcIklyZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiSU1cIiwgbmFtZTogXCJJc2xlIG9mIE1hblwifSxcbiAgICB7Y29kZTogXCJJTFwiLCBuYW1lOiBcIklzcmFlbFwifSxcbiAgICB7Y29kZTogXCJJVFwiLCBuYW1lOiBcIkl0YWx5XCJ9LFxuICAgIHtjb2RlOiBcIkpNXCIsIG5hbWU6IFwiSmFtYWljYVwifSxcbiAgICB7Y29kZTogXCJKUFwiLCBuYW1lOiBcIkphcGFuXCJ9LFxuICAgIHtjb2RlOiBcIkpFXCIsIG5hbWU6IFwiSmVyc2V5XCJ9LFxuICAgIHtjb2RlOiBcIkpPXCIsIG5hbWU6IFwiSm9yZGFuXCJ9LFxuICAgIHtjb2RlOiBcIktaXCIsIG5hbWU6IFwiS2F6YWtoc3RhblwifSxcbiAgICB7Y29kZTogXCJLRVwiLCBuYW1lOiBcIktlbnlhXCJ9LFxuICAgIHtjb2RlOiBcIktJXCIsIG5hbWU6IFwiS2lyaWJhdGlcIn0sXG4gICAge2NvZGU6IFwiS1BcIiwgbmFtZTogXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiS1JcIiwgbmFtZTogXCJLb3JlYSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIktXXCIsIG5hbWU6IFwiS3V3YWl0XCJ9LFxuICAgIHtjb2RlOiBcIktHXCIsIG5hbWU6IFwiS3lyZ3l6c3RhblwifSxcbiAgICB7Y29kZTogXCJMQVwiLCBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIkxWXCIsIG5hbWU6IFwiTGF0dmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxCXCIsIG5hbWU6IFwiTGViYW5vblwifSxcbiAgICB7Y29kZTogXCJMU1wiLCBuYW1lOiBcIkxlc290aG9cIn0sXG4gICAge2NvZGU6IFwiTFJcIiwgbmFtZTogXCJMaWJlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxZXCIsIG5hbWU6IFwiTGlieWFcIn0sXG4gICAge2NvZGU6IFwiTElcIiwgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCJ9LFxuICAgIHtjb2RlOiBcIkxUXCIsIG5hbWU6IFwiTGl0aHVhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIkxVXCIsIG5hbWU6IFwiTHV4ZW1ib3VyZ1wifSxcbiAgICB7Y29kZTogXCJNT1wiLCBuYW1lOiBcIk1hY2FvXCJ9LFxuICAgIHtjb2RlOiBcIk1LXCIsIG5hbWU6IFwiTWFjZWRvbmlhICh0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJNR1wiLCBuYW1lOiBcIk1hZGFnYXNjYXJcIn0sXG4gICAge2NvZGU6IFwiTVdcIiwgbmFtZTogXCJNYWxhd2lcIn0sXG4gICAge2NvZGU6IFwiTVlcIiwgbmFtZTogXCJNYWxheXNpYVwifSxcbiAgICB7Y29kZTogXCJNVlwiLCBuYW1lOiBcIk1hbGRpdmVzXCJ9LFxuICAgIHtjb2RlOiBcIk1MXCIsIG5hbWU6IFwiTWFsaVwifSxcbiAgICB7Y29kZTogXCJNVFwiLCBuYW1lOiBcIk1hbHRhXCJ9LFxuICAgIHtjb2RlOiBcIk1IXCIsIG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJNUVwiLCBuYW1lOiBcIk1hcnRpbmlxdWVcIn0sXG4gICAge2NvZGU6IFwiTVJcIiwgbmFtZTogXCJNYXVyaXRhbmlhXCJ9LFxuICAgIHtjb2RlOiBcIk1VXCIsIG5hbWU6IFwiTWF1cml0aXVzXCJ9LFxuICAgIHtjb2RlOiBcIllUXCIsIG5hbWU6IFwiTWF5b3R0ZVwifSxcbiAgICB7Y29kZTogXCJNWFwiLCBuYW1lOiBcIk1leGljb1wifSxcbiAgICB7Y29kZTogXCJGTVwiLCBuYW1lOiBcIk1pY3JvbmVzaWEgKEZlZGVyYXRlZCBTdGF0ZXMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1EXCIsIG5hbWU6IFwiTW9sZG92YSAoUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIk1DXCIsIG5hbWU6IFwiTW9uYWNvXCJ9LFxuICAgIHtjb2RlOiBcIk1OXCIsIG5hbWU6IFwiTW9uZ29saWFcIn0sXG4gICAge2NvZGU6IFwiTUVcIiwgbmFtZTogXCJNb250ZW5lZ3JvXCJ9LFxuICAgIHtjb2RlOiBcIk1TXCIsIG5hbWU6IFwiTW9udHNlcnJhdFwifSxcbiAgICB7Y29kZTogXCJNQVwiLCBuYW1lOiBcIk1vcm9jY29cIn0sXG4gICAge2NvZGU6IFwiTVpcIiwgbmFtZTogXCJNb3phbWJpcXVlXCJ9LFxuICAgIHtjb2RlOiBcIk1NXCIsIG5hbWU6IFwiTXlhbm1hclwifSxcbiAgICB7Y29kZTogXCJOQVwiLCBuYW1lOiBcIk5hbWliaWFcIn0sXG4gICAge2NvZGU6IFwiTlJcIiwgbmFtZTogXCJOYXVydVwifSxcbiAgICB7Y29kZTogXCJOUFwiLCBuYW1lOiBcIk5lcGFsXCJ9LFxuICAgIHtjb2RlOiBcIk5MXCIsIG5hbWU6IFwiTmV0aGVybGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTkNcIiwgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5aXCIsIG5hbWU6IFwiTmV3IFplYWxhbmRcIn0sXG4gICAge2NvZGU6IFwiTklcIiwgbmFtZTogXCJOaWNhcmFndWFcIn0sXG4gICAge2NvZGU6IFwiTkVcIiwgbmFtZTogXCJOaWdlclwifSxcbiAgICB7Y29kZTogXCJOR1wiLCBuYW1lOiBcIk5pZ2VyaWFcIn0sXG4gICAge2NvZGU6IFwiTlVcIiwgbmFtZTogXCJOaXVlXCJ9LFxuICAgIHtjb2RlOiBcIk5GXCIsIG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIn0sXG4gICAge2NvZGU6IFwiTVBcIiwgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTk9cIiwgbmFtZTogXCJOb3J3YXlcIn0sXG4gICAge2NvZGU6IFwiT01cIiwgbmFtZTogXCJPbWFuXCJ9LFxuICAgIHtjb2RlOiBcIlBLXCIsIG5hbWU6IFwiUGFraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiUFdcIiwgbmFtZTogXCJQYWxhdVwifSxcbiAgICB7Y29kZTogXCJQU1wiLCBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIn0sXG4gICAge2NvZGU6IFwiUEFcIiwgbmFtZTogXCJQYW5hbWFcIn0sXG4gICAge2NvZGU6IFwiUEdcIiwgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIlBZXCIsIG5hbWU6IFwiUGFyYWd1YXlcIn0sXG4gICAge2NvZGU6IFwiUEVcIiwgbmFtZTogXCJQZXJ1XCJ9LFxuICAgIHtjb2RlOiBcIlBIXCIsIG5hbWU6IFwiUGhpbGlwcGluZXNcIn0sXG4gICAge2NvZGU6IFwiUE5cIiwgbmFtZTogXCJQaXRjYWlyblwifSxcbiAgICB7Y29kZTogXCJQTFwiLCBuYW1lOiBcIlBvbGFuZFwifSxcbiAgICB7Y29kZTogXCJQVFwiLCBuYW1lOiBcIlBvcnR1Z2FsXCJ9LFxuICAgIHtjb2RlOiBcIlBSXCIsIG5hbWU6IFwiUHVlcnRvIFJpY29cIn0sXG4gICAge2NvZGU6IFwiUUFcIiwgbmFtZTogXCJRYXRhclwifSxcbiAgICB7Y29kZTogXCJSRVwiLCBuYW1lOiBcIlLDqXVuaW9uXCJ9LFxuICAgIHtjb2RlOiBcIlJPXCIsIG5hbWU6IFwiUm9tYW5pYVwifSxcbiAgICB7Y29kZTogXCJSVVwiLCBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwifSxcbiAgICB7Y29kZTogXCJSV1wiLCBuYW1lOiBcIlJ3YW5kYVwifSxcbiAgICB7Y29kZTogXCJCTFwiLCBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCJ9LFxuICAgIHtjb2RlOiBcIlNIXCIsIG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIn0sXG4gICAge2NvZGU6IFwiS05cIiwgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIn0sXG4gICAge2NvZGU6IFwiTENcIiwgbmFtZTogXCJTYWludCBMdWNpYVwifSxcbiAgICB7Y29kZTogXCJNRlwiLCBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCJ9LFxuICAgIHtjb2RlOiBcIlBNXCIsIG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwifSxcbiAgICB7Y29kZTogXCJWQ1wiLCBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCJ9LFxuICAgIHtjb2RlOiBcIldTXCIsIG5hbWU6IFwiU2Ftb2FcIn0sXG4gICAge2NvZGU6IFwiU01cIiwgbmFtZTogXCJTYW4gTWFyaW5vXCJ9LFxuICAgIHtjb2RlOiBcIlNUXCIsIG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCJ9LFxuICAgIHtjb2RlOiBcIlNBXCIsIG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlNOXCIsIG5hbWU6IFwiU2VuZWdhbFwifSxcbiAgICB7Y29kZTogXCJSU1wiLCBuYW1lOiBcIlNlcmJpYVwifSxcbiAgICB7Y29kZTogXCJTQ1wiLCBuYW1lOiBcIlNleWNoZWxsZXNcIn0sXG4gICAge2NvZGU6IFwiU0xcIiwgbmFtZTogXCJTaWVycmEgTGVvbmVcIn0sXG4gICAge2NvZGU6IFwiU0dcIiwgbmFtZTogXCJTaW5nYXBvcmVcIn0sXG4gICAge2NvZGU6IFwiU1hcIiwgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCJ9LFxuICAgIHtjb2RlOiBcIlNLXCIsIG5hbWU6IFwiU2xvdmFraWFcIn0sXG4gICAge2NvZGU6IFwiU0lcIiwgbmFtZTogXCJTbG92ZW5pYVwifSxcbiAgICB7Y29kZTogXCJTQlwiLCBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJTT1wiLCBuYW1lOiBcIlNvbWFsaWFcIn0sXG4gICAge2NvZGU6IFwiWkFcIiwgbmFtZTogXCJTb3V0aCBBZnJpY2FcIn0sXG4gICAge2NvZGU6IFwiR1NcIiwgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJTU1wiLCBuYW1lOiBcIlNvdXRoIFN1ZGFuXCJ9LFxuICAgIHtjb2RlOiBcIkVTXCIsIG5hbWU6IFwiU3BhaW5cIn0sXG4gICAge2NvZGU6IFwiTEtcIiwgbmFtZTogXCJTcmkgTGFua2FcIn0sXG4gICAge2NvZGU6IFwiU0RcIiwgbmFtZTogXCJTdWRhblwifSxcbiAgICB7Y29kZTogXCJTUlwiLCBuYW1lOiBcIlN1cmluYW1lXCJ9LFxuICAgIHtjb2RlOiBcIlNKXCIsIG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwifSxcbiAgICB7Y29kZTogXCJTWlwiLCBuYW1lOiBcIlN3YXppbGFuZFwifSxcbiAgICB7Y29kZTogXCJTRVwiLCBuYW1lOiBcIlN3ZWRlblwifSxcbiAgICB7Y29kZTogXCJDSFwiLCBuYW1lOiBcIlN3aXR6ZXJsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIlNZXCIsIG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiVFdcIiwgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCJ9LFxuICAgIHtjb2RlOiBcIlRKXCIsIG5hbWU6IFwiVGFqaWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJUWlwiLCBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIn0sXG4gICAge2NvZGU6IFwiVEhcIiwgbmFtZTogXCJUaGFpbGFuZFwifSxcbiAgICB7Y29kZTogXCJUTFwiLCBuYW1lOiBcIlRpbW9yLUxlc3RlXCJ9LFxuICAgIHtjb2RlOiBcIlRHXCIsIG5hbWU6IFwiVG9nb1wifSxcbiAgICB7Y29kZTogXCJUS1wiLCBuYW1lOiBcIlRva2VsYXVcIn0sXG4gICAge2NvZGU6IFwiVE9cIiwgbmFtZTogXCJUb25nYVwifSxcbiAgICB7Y29kZTogXCJUVFwiLCBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIn0sXG4gICAge2NvZGU6IFwiVE5cIiwgbmFtZTogXCJUdW5pc2lhXCJ9LFxuICAgIHtjb2RlOiBcIlRSXCIsIG5hbWU6IFwiVHVya2V5XCJ9LFxuICAgIHtjb2RlOiBcIlRNXCIsIG5hbWU6IFwiVHVya21lbmlzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlRDXCIsIG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlRWXCIsIG5hbWU6IFwiVHV2YWx1XCJ9LFxuICAgIHtjb2RlOiBcIlVHXCIsIG5hbWU6IFwiVWdhbmRhXCJ9LFxuICAgIHtjb2RlOiBcIlVBXCIsIG5hbWU6IFwiVWtyYWluZVwifSxcbiAgICB7Y29kZTogXCJBRVwiLCBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCJ9LFxuICAgIHtjb2RlOiBcIkdCXCIsIG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwifSxcbiAgICB7Y29kZTogXCJVU1wiLCBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwifSxcbiAgICB7Y29kZTogXCJVTVwiLCBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJVWVwiLCBuYW1lOiBcIlVydWd1YXlcIn0sXG4gICAge2NvZGU6IFwiVVpcIiwgbmFtZTogXCJVemJla2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlZVXCIsIG5hbWU6IFwiVmFudWF0dVwifSxcbiAgICB7Y29kZTogXCJWRVwiLCBuYW1lOiBcIlZlbmV6dWVsYSAoQm9saXZhcmlhbiBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiVk5cIiwgbmFtZTogXCJWaWV0bmFtXCJ9LFxuICAgIHtjb2RlOiBcIlZHXCIsIG5hbWU6IFwiVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpXCJ9LFxuICAgIHtjb2RlOiBcIlZJXCIsIG5hbWU6IFwiVmlyZ2luIElzbGFuZHMgKFUuUy4pXCJ9LFxuICAgIHtjb2RlOiBcIldGXCIsIG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIn0sXG4gICAge2NvZGU6IFwiRUhcIiwgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwifSxcbiAgICB7Y29kZTogXCJZRVwiLCBuYW1lOiBcIlllbWVuXCJ9LFxuICAgIHtjb2RlOiBcIlpNXCIsIG5hbWU6IFwiWmFtYmlhXCJ9LFxuICAgIHtjb2RlOiBcIlpXXCIsIG5hbWU6IFwiWmltYmFid2VcIn0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCAqIGFzIGFwaXMgZnJvbSBcIi4vYXBpc1wiO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbmlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNsaWtlY29udGVudFwiKTtcbmNvbnN0IG1heFRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXhjb250ZW50XCIpO1xuY29uc3QgbWluVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbmNvbnRlbnRcIik7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhaW5jaGFuY2Vjb250ZW50XCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kc3BlZWRjb250ZW50XCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5Y29udGVudFwiKTtcbmNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2Vjb250ZW50XCIpO1xuY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRjb250ZW50XCIpO1xuXG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudGljb25cIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25cIik7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlYWxsXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBsb2NhdGlvbkNob3NlbjtcblxuICAgICAgICBpZiAobG9jYXRpb25JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb25DaG9zZW4gPSBcIkxpc2JvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm8obG9jYXRpb25DaG9zZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBET00uY2hhbmdlQkdJbWFnZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCk7XG5cbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSl9IMK6Q2A7XG4gICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmRhaWx5WzBdLnRlbXAubWF4KX0gwrpDYDtcbiAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0udGVtcC5taW4pfSDCukNgO1xuICAgICAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbMF0ucG9wICogMTAwKX0lYDtcbiAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC53aW5kX3NwZWVkICogMy42ICogMTApIC8gMTBcbiAgICAgICAgfSBLbS9IYDtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gICAgICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgICAgIGRhdGEuY3VycmVudC5zdW5yaXNlLFxuICAgICAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICAgICApO1xuICAgICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgICAgIGRhdGEuY3VycmVudC5zdW5zZXQsXG4gICAgICAgICAgICBkYXRhLnRpbWV6b25lXG4gICAgICAgICk7XG5cbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29udmVydFRvVGl0bGVDYXNlKFxuICAgICAgICAgICAgZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgIChhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmxvY2F0aW9uTmFtZVxuICAgICAgICB9LCAkeyhhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmNvdW50cnlOYW1lfWA7XG4gICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXApfSDCukNgO1xuXG4gICAgICAgIGN1cnJlbnRJY29uLnNyYyA9IERPTS5nZXRXZWF0aGVySWNvbihkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uKTtcblxuICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KGRhdGEuZGFpbHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGEuZGFpbHkpO1xuICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5KTtcbiAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoZGF0YS5kYWlseSk7XG5cbiAgICAgICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoZGF5cywgZGFpbHlJY29ucywgZGFpbHlNYXhUZW1wcywgZGFpbHlNaW5UZW1wcyk7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KGRhdGEuaG91cmx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICAgICAgY29uc3QgaG91cmx5VGVtcHMgPSBnZXRIb3VybHlUZW1wcyhkYXRhLmhvdXJseSk7XG5cbiAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZWFsbFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlzQXJyYXkoZGF5cywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBkYXlzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWREYXkgPSBgJHtjb252ZXJ0VW5peFRvV2Vla2RheShcbiAgICAgICAgICAgIGRheXNbaV0uZHQsXG4gICAgICAgICAgICB0aW1lWm9uZVxuICAgICAgICApfSwgJHtjb252ZXJ0VW5peFRvRGF5KGRheXNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBkYXlzQXJyYXkucHVzaChjb252ZXJ0ZWREYXkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5c0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF5cykge1xuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goZGF5c1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlNYXhUZW1wcyhkYXlzKSB7XG4gICAgY29uc3QgbWF4VGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIG1heFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGRheXNbaV0udGVtcC5tYXgpfSDCukNgKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWluVGVtcHMoZGF5cykge1xuICAgIGNvbnN0IG1pblRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtaW5UZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWluKX0gwrpDYCk7XG4gICAgfVxuICAgIHJldHVybiBtaW5UZW1wc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3Vyc0FycmF5KGhvdXJzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGhvdXJzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IGAke2NvbnZlcnRXaXRob3V0TWludXRlcyhob3Vyc1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGhvdXJzQXJyYXkucHVzaChjb252ZXJ0ZWRIb3VyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXJzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUljb25zQXJyYXkoaG91cnMpIHtcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChob3Vyc1tpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SG91cmx5VGVtcHMoaG91cnMpIHtcbiAgICBjb25zdCBUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIFRlbXBzQXJyYXkucHVzaChgJHtNYXRoLnJvdW5kKGhvdXJzW2ldLnRlbXApfSDCukNgKTtcbiAgICB9XG4gICAgcmV0dXJuIFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1RpdGxlQ2FzZShzdHJpbmcpIHtcbiAgICBjb25zdCBhcnJheU9mV29yZHMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWRBcnJheSA9IFtdO1xuICAgIGFycmF5T2ZXb3Jkcy5mb3JFYWNoKCh3b3JkKSA9PlxuICAgICAgICBjYXBpdGFsaXplZEFycmF5LnB1c2god29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpKVxuICAgICk7XG4gICAgcmV0dXJuIGNhcGl0YWxpemVkQXJyYXkuam9pbihcIiBcIik7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9Ib3VyKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRXaXRob3V0TWludXRlcyh0aW1lLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gaG91ci50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peFRvRGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICByZXR1cm4gZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9XZWVrZGF5KHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiB3ZWVrZGF5LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoV2VhdGhlcik7XG5cbmNvbnN0IGhvdXJseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5ob3VybHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTS5zd2l0Y2hUb0hvdXJseUZvcmVjYXN0KTtcblxuY29uc3QgZGFpbHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXG5kYWlseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvRGFpbHlGb3JlY2FzdCk7XG5cbkRPTS5jcmVhdGVGaXJzdEhvdXJseURpdnMoKTtcbkRPTS5oaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbkRPTS5jcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVMYXN0SG91cmx5RGl2cygpO1xuXG5zZWFyY2hXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=