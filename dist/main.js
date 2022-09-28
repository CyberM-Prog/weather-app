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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Quicksand\", sans-serif;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    background-size: cover;\n    background-position: 0;\n    background-repeat: no-repeat;\n    display: grid;\n    grid-template-rows: 3fr 4fr 3fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    align-items: center;\n    background-blend-mode: darken;\n}\n\n.center {\n    height: 40vh;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    color: whitesmoke;\n    font-size: 2.5rem;\n}\n\n.temperature {\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 5rem;\n}\n\ninput {\n    background-color: transparent;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n    height: 2rem;\n    width: 12.5rem;\n    color: white;\n    font-size: 1.3rem;\n    outline: 0;\n    padding-left: 2px;\n    padding-right: 1.9rem;\n}\n\n.form {\n    display: flex;\n    gap: 1rem;\n    position: relative;\n}\n\n.search {\n    position: absolute;\n    right: 5px;\n    align-self: center;\n}\n\n.currentweather {\n    display: flex;\n    gap: 2rem;\n}\n\n.separator {\n    width: 3px;\n    background-color: whitesmoke;\n    border: 2px solid whitesmoke;\n    border-radius: 5px;\n}\n\n.top {\n    width: 90vw;\n    height: 10vh;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 2.5rem;\n}\n\n.topdiv {\n    width: 11vw;\n    display: flex;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.topicons {\n    height: 3.5rem;\n}\n\n.topwrap {\n    font-size: 1.25rem;\n    color: whitesmoke;\n    font-weight: 600;\n    text-align: center;\n}\n\n.topcontent {\n    font-size: 1.5rem;\n}\n\n.feelslike {\n    position: relative;\n    width: 7.5vw;\n}\n\n.feelslike > * {\n    position: absolute;\n}\n\n.feelslike > img {\n    left: -13px;\n}\n\n.feelslike > .topwrap {\n    right: 0;\n}\n\n.humidity {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.humidity > img {\n    height: 3.25rem;\n    position: relative;\n    top: 2px;\n}\n\n.sunrise {\n    gap: 1rem;\n    width: 8.9vw;\n}\n\n.sunset {\n    gap: 1rem;\n    width: 8.65vw;\n}\n\n.sunriseicon,\n.sunseticon {\n    position: relative;\n    top: 4px;\n}\n\n.windspeed {\n    gap: 1rem;\n    width: 10.2vw;\n}\n\n.windspeed > img {\n    height: 3.6rem;\n    position: relative;\n    top: 3px;\n}\n\n.pop {\n    gap: 1rem;\n    width: 9rem;\n}\n\n.mintemperature {\n    gap: 1rem;\n    width: 8.5vw;\n}\n\n.maxtemperature {\n    gap: 1rem;\n    width: 8.85vw;\n}\n\n.bottom {\n    width: 90vw;\n    display: grid;\n    gap: 1rem;\n}\n\n.timechoice {\n    height: 5vh;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.timechoice > * {\n    border: 2px solid white;\n    border-radius: 5px;\n    padding: 4px 15px;\n    font-size: 1.6rem;\n    background-color: rgb(0, 0, 0, 0.1);\n    font-weight: 500;\n    color: white;\n}\n\n.forecast {\n    height: 13.5vh;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n}\n\n.dailydivs {\n    width: 11vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.forecasticon {\n    width: 3.25rem;\n}\n\n.dailyweather {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    align-items: center;\n}\n\n.dailyweather > div {\n    display: grid;\n    font-size: 1.6rem;\n    gap: 0.5rem;\n    position: relative;\n    bottom: 2px;\n}\n\n.firsthourlydivs,\n.lasthourlydivs {\n    width: 6vw;\n    font-weight: 600;\n    color: white;\n    font-size: 1.75rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: grid;\n    justify-items: center;\n    align-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n\n.hideall > * {\n    display: none;\n}\n\n.rightarrow {\n    position: absolute;\n    right: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.leftarrow {\n    position: absolute;\n    left: -4.25rem;\n    height: 5vh;\n    align-self: center;\n}\n\n.hourlyicon {\n    height: 3rem;\n}\n\n.unit {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-top: -0.75rem;\n    background-color: transparent;\n    border: 0;\n    color: white;\n}\n"],"sourceRoot":""}]);
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

function improveReadability(code) {
    if (code >= 500 && code < 600) {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.49)"
    }
    else if (code > 800 && code < 900) {
        container.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }
    else container.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
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

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeBGImage(data.current.weather[0].id);
            _DOM__WEBPACK_IMPORTED_MODULE_2__.improveReadability(data.current.weather[0].id)
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

            _DOM__WEBPACK_IMPORTED_MODULE_2__.changeBGImage(data.current.weather[0].id);
            _DOM__WEBPACK_IMPORTED_MODULE_2__.improveReadability(data.current.weather[0].id)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZ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QUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDZDQUE2QztBQUNsRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHFDQUFxQztBQUMxQyxLQUFLLDRDQUE0QztBQUNqRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHVEQUF1RDtBQUM1RCxLQUFLLGlDQUFpQztBQUN0QyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLG1DQUFtQztBQUN4QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdDQUFnQztBQUNyQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLHFDQUFxQztBQUMxQyxLQUFLLGdEQUFnRDtBQUNyRCxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLHNEQUFzRDtBQUMzRCxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtDQUErQztBQUNwRCxLQUFLLHlCQUF5QjtBQUM5QixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLGdDQUFnQztBQUNyQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDREQUE0RDtBQUNqRSxLQUFLLHdDQUF3QztBQUM3QyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLHFEQUFxRDtBQUMxRCxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGtDQUFrQztBQUN2QyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDBCQUEwQjtBQUMvQixLQUFLLGdFQUFnRTtBQUNyRSxLQUFLLCtCQUErQjtBQUNwQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDZCQUE2QjtBQUNsQyxL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LEVBQUUsS0FBSztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QixpQ0FBaUMsNkNBQTZDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QiwyQkFBMkIsMkJBQTJCLEVBQUUsS0FBSztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBdUMsd0RBQTBCOztBQUVqRTs7QUFFQSxzQ0FBc0MsdURBQXlCOztBQUUvRCx1REFBeUI7QUFDekIscURBQXVCOztBQUV2QixzREFBd0I7QUFDeEIsb0RBQXNCOztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi51bml0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDRmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxMi41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMS45cmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jdXJyZW50d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRvciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvcCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDIuNXJlbTtcXG59XFxuXFxuLnRvcGRpdiB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnRvcGljb25zIHtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxufVxcblxcbi50b3B3cmFwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9wY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZmVlbHNsaWtlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNy41dnc7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAqIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZmVlbHNsaWtlID4gaW1nIHtcXG4gICAgbGVmdDogLTEzcHg7XFxufVxcblxcbi5mZWVsc2xpa2UgPiAudG9wd3JhcCB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLmh1bWlkaXR5ID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMnB4O1xcbn1cXG5cXG4uc3VucmlzZSB7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDguOXZ3O1xcbn1cXG5cXG4uc3Vuc2V0IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC42NXZ3O1xcbn1cXG5cXG4uc3VucmlzZWljb24sXFxuLnN1bnNldGljb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNHB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogMTAuMnZ3O1xcbn1cXG5cXG4ud2luZHNwZWVkID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzcHg7XFxufVxcblxcbi5wb3Age1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA5cmVtO1xcbn1cXG5cXG4ubWludGVtcGVyYXR1cmUge1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiA4LjV2dztcXG59XFxuXFxuLm1heHRlbXBlcmF0dXJlIHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICB3aWR0aDogOC44NXZ3O1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRpbWVjaG9pY2Uge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZWNob2ljZSA+ICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIGhlaWdodDogMTMuNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhaWx5ZGl2cyB7XFxuICAgIHdpZHRoOiAxMXZ3O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5mb3JlY2FzdGljb24ge1xcbiAgICB3aWR0aDogMy4yNXJlbTtcXG59XFxuXFxuLmRhaWx5d2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYWlseXdlYXRoZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAycHg7XFxufVxcblxcbi5maXJzdGhvdXJseWRpdnMsXFxuLmxhc3Rob3VybHlkaXZzIHtcXG4gICAgd2lkdGg6IDZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZWFsbCA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHRhcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC00LjI1cmVtO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNC4yNXJlbTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi51bml0IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQkdJbWFnZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPj0gMjAwICYmIGNvZGUgPCAzMDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL2pvaGFubmVzLXBsZW5pby1FU0wxcklzOWo0OC11bnNwbGFzaC5qcGcpXCI7XG4gICAgfSBlbHNlIGlmIChjb2RlID49IDMwMCAmJiBjb2RlIDwgNDAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9yb21hbi1zeW5rZXZ5Y2gtcVB2Qm1Tdm1vaHMtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+PSA1MDAgJiYgY29kZSA8IDYwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvcm9kb2xmby1jdWFkcm9zLTh3S3BGcXhESlQwLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPj0gNjAwICYmIGNvZGUgPCA3MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgICBcInVybCguLi9zcmMvSW1hZ2VzL3RoZS1uaWdtYXRpYy1SRGg5Vi1jNGlTSS11bnNwbGFzaFxcXFwgXFxcXCgxXFxcXCkuanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA+IDgwMCAmJiBjb2RlIDwgOTAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9uaWNrLWZld2luZ3MtWnREaUp6b2taaTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzAxIHx8IGNvZGUgPT09IDc0MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvZGF2ZS1ob2VmbGVyLW9kMjg3dlF5dWZ3LXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjb2RlID09PSA3MTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzIxIHx8XG4gICAgICAgIGNvZGUgPT09IDczMSB8fFxuICAgICAgICBjb2RlID09PSA3NTEgfHxcbiAgICAgICAgY29kZSA9PT0gNzYxIHx8XG4gICAgICAgIGNvZGUgPT09IDc2MlxuICAgICkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvY2hyaXMtbGVib3V0aWxsaWVyLWJlOG1uRlh6QmdvLXVuc3BsYXNoLmpwZylcIjtcbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDc3MSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMva2hhbWtlby12aWxheXNpbmctV3R3U3Nxd1lsQTAtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gNzgxKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICAgICAgXCJ1cmwoLi4vc3JjL0ltYWdlcy9lc3Blbi1iaWVydWQtVzQzZ202VEQxMTgtdW5zcGxhc2guanBnKVwiO1xuICAgIH0gZWxzZVxuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKC4uL3NyYy9JbWFnZXMvd2lsbGlhbS1ib3V0LVJQeldJMHJvbFM4LXVuc3BsYXNoLmpwZylcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcHJvdmVSZWFkYWJpbGl0eShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPj0gNTAwICYmIGNvZGUgPCA2MDApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjQ5KVwiXG4gICAgfVxuICAgIGVsc2UgaWYgKGNvZGUgPiA4MDAgJiYgY29kZSA8IDkwMCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlxuICAgIH1cbiAgICBlbHNlIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiXG59XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlkaXZzXCIpO1xuXG5mdW5jdGlvbiBoaWRlRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVG9Ib3VybHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG4gICAgZmlyc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RIb3VybHlEaXZzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoXCJmaXJzdGhvdXJseWRpdnNcIik7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGhvdXJseURpdik7XG5cbiAgICAgICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhvdXIuY2xhc3NMaXN0LmFkZChcImhvdXJcIik7XG4gICAgICAgIGhvdXIudGV4dENvbnRlbnQgPSBcIjEyIEEuTS5cIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXIpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBob3VybHlJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHlpY29uXCIpO1xuICAgICAgICBob3VybHlJY29uLnNyYyA9IFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1kcml6emxlLnN2Z1wiO1xuICAgICAgICBob3VybHlEaXYuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbik7XG5cbiAgICAgICAgY29uc3QgaG91cmx5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5dGVtcGVyYXR1cmVcIik7XG4gICAgICAgIGhvdXJseVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gXCI0MCDCukNcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseVRlbXBlcmF0dXJlKTtcbiAgICB9XG4gICAgY3JlYXRlUmlnaHRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWdodEFycm93KCkge1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcInJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICByaWdodEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctcmlnaHQtY2lyY2xlLnN2Z1wiKTtcbiAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TGFzdEhvdXJseURpdnMpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFzdEhvdXJseURpdnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDEzOyBpIDw9IDI0OyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91cmx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5RGl2LmNsYXNzTGlzdC5hZGQoXCJsYXN0aG91cmx5ZGl2c1wiKTtcbiAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoaG91cmx5RGl2KTtcblxuICAgICAgICBjb25zdCBob3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91clwiKTtcbiAgICAgICAgaG91ci50ZXh0Q29udGVudCA9IFwiMSBBLk0uXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VyKTtcblxuICAgICAgICBjb25zdCBob3VybHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaG91cmx5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaG91cmx5aWNvblwiKTtcbiAgICAgICAgaG91cmx5SWNvbi5zcmMgPSBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtZHJpenpsZS5zdmdcIjtcbiAgICAgICAgaG91cmx5RGl2LmFwcGVuZENoaWxkKGhvdXJseUljb24pO1xuXG4gICAgICAgIGNvbnN0IGhvdXJseVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaG91cmx5VGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImhvdXJseXRlbXBlcmF0dXJlXCIpO1xuICAgICAgICBob3VybHlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiNDEgwrpDXCI7XG4gICAgICAgIGhvdXJseURpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wZXJhdHVyZSk7XG4gICAgfVxuICAgIGNyZWF0ZUxlZnRBcnJvdygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMZWZ0QXJyb3coKSB7XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9JbWFnZXMvYXJyb3ctbGVmdC1jaXJjbGUuc3ZnXCIpO1xuICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG59XG5cbmZ1bmN0aW9uIHNob3dMYXN0SG91cmx5RGl2cygpIHtcbiAgICBoaWRlRmlyc3RIb3VybHlEaXZzKCk7XG5cbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBpZiAoIWxhc3RIb3VybHlEaXZzKSBjcmVhdGVMYXN0SG91cmx5RGl2cygpO1xuICAgIGVsc2UgdW5oaWRlTGFzdEhvdXJseURpdnMoKTtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRhcnJvd1wiKTtcbiAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGaXJzdEhvdXJseURpdnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZpcnN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBmaXJzdEhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpcnN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGZpcnN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dGaXJzdEhvdXJseURpdnMoKSB7XG4gICAgY29uc3QgZmlyc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maXJzdGhvdXJseWRpdnNcIik7XG5cbiAgICBmaXJzdEhvdXJseURpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuXG4gICAgaGlkZUxhc3RIb3VybHlEaXZzKCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0YXJyb3dcIik7XG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMYXN0SG91cmx5RGl2cygpIHtcbiAgICBjb25zdCBsYXN0SG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGFzdGhvdXJseWRpdnNcIik7XG5cbiAgICBsYXN0SG91cmx5RGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKSk7XG59XG5cbmZ1bmN0aW9uIHVuaGlkZUxhc3RIb3VybHlEaXZzKCkge1xuICAgIGNvbnN0IGxhc3RIb3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sYXN0aG91cmx5ZGl2c1wiKTtcblxuICAgIGxhc3RIb3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcblxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdGFycm93XCIpO1xuICAgIGxlZnRBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRvRGFpbHlGb3JlY2FzdCgpIHtcbiAgICBjb25zdCBmb3JlY2FzdENoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCA+ICpcIik7XG4gICAgZm9yZWNhc3RDaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LmFkZChcImhpZGVcIikpO1xuXG4gICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRleHRDb250ZW50KHRleHQpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRpY29uXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckljb24oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBcIjAxZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3N1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMW5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAyZFwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXN1bi5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIwMm5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1tb29uLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjAzZFwiIHx8IGNvZGUgPT09IFwiMDNuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQgKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA0ZFwiIHx8IGNvZGUgPT09IFwiMDRuXCIpIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWRzLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjA5ZFwiIHx8IGNvZGUgPT09IFwiMDluXCIgfHwgY29kZSA9PT0gXCIxMGRcIiB8fCBjb2RlID09PSBcIjEwblwiKVxuICAgICAgICByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL2Nsb3VkLXJhaW4gKDEpLnN2Z1wiO1xuICAgIGlmIChjb2RlID09PSBcIjExZFwiIHx8IGNvZGUgPT09IFwiMTFuXCIpXG4gICAgICAgIHJldHVybiBcIi4uL3NyYy9JbWFnZXMvY2xvdWQtbGlnaHRuaW5nICgyKS5zdmdcIjtcbiAgICBpZiAoY29kZSA9PT0gXCIxM2RcIiB8fCBjb2RlID09PSBcIjEzblwiKSByZXR1cm4gXCIuLi9zcmMvSW1hZ2VzL3Nub3cuc3ZnXCI7XG4gICAgaWYgKGNvZGUgPT09IFwiNTBkXCIgfHwgY29kZSA9PT0gXCI1MG5cIikgcmV0dXJuIFwiLi4vc3JjL0ltYWdlcy9jbG91ZC1mb2cuc3ZnXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYWlseUZvcmVjYXN0KGRheXMsIGNvZGVzLCBtYXhUZW1wcywgbWluVGVtcHMpIHtcbiAgICBjb25zdCBkYWlseURhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlXCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3RpY29uXCIpO1xuICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWF4XCIpO1xuICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0bWluXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgZGFpbHlEYXRlc1tpXS50ZXh0Q29udGVudCA9IGRheXNbaV07XG5cbiAgICAgICAgZGFpbHlGb3JlY2FzdEljb25zW2ldLnNyYyA9IGdldFdlYXRoZXJJY29uKGNvZGVzW2ldKTtcblxuICAgICAgICBkYWlseU1heFRlbXBzW2ldLnRleHRDb250ZW50ID0gbWF4VGVtcHNbaV07XG5cbiAgICAgICAgZGFpbHlNaW5UZW1wc1tpXS50ZXh0Q29udGVudCA9IG1pblRlbXBzW2ldO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBjb2RlcywgdGVtcHMpIHtcbiAgICBjb25zdCBob3VyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5aWNvblwiKTtcbiAgICBjb25zdCBob3VybHlUZW1wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5dGVtcGVyYXR1cmVcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgaG91ckVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gaG91cnNbaV07XG5cbiAgICAgICAgaG91cmx5Rm9yZWNhc3RJY29uc1tpXS5zcmMgPSBnZXRXZWF0aGVySWNvbihjb2Rlc1tpXSk7XG5cbiAgICAgICAgaG91cmx5VGVtcHNbaV0udGV4dENvbnRlbnQgPSB0ZW1wc1tpXTtcbiAgICB9XG59XG4iLCJjb25zdCBrZXkgPSBcIjliMmVjYmE3NTNhMmQwYjUwMWIxNmJlMzQ1MjQ2OWZmXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YCxcbiAgICAgICAge21vZGU6IFwiY29yc1wifVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHtsYXQ6IGRhdGFbMF0ubGF0LCBsb246IGRhdGFbMF0ubG9ufTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mb0NlbHNpdXMobG9jYXRpb24pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpY2BcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVySW5mb0ZhcmVuaGVpdHMobG9jYXRpb24pIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mYXBwaWQ9JHtrZXl9JnVuaXRzPWltcGVyaWFsYFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZShsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7a2V5fWAsXG4gICAgICAgIHttb2RlOiBcImNvcnNcIn1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRhdGFbMF0ubmFtZTtcbiAgICBsZXQgY291bnRyeU5hbWUgPSBkYXRhWzBdLmNvdW50cnk7XG5cbiAgICBjb3VudHJ5TGlzdC5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XG4gICAgICAgIGlmIChjb3VudHJ5LmNvZGUgPT09IGNvdW50cnlOYW1lKSBjb3VudHJ5TmFtZSA9IGNvdW50cnkubmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7bG9jYXRpb25OYW1lLCBjb3VudHJ5TmFtZX07XG59XG5cbmNvbnN0IGNvdW50cnlMaXN0ID0gW1xuICAgIHtjb2RlOiBcIkFGXCIsIG5hbWU6IFwiQWZnaGFuaXN0YW5cIn0sXG4gICAge2NvZGU6IFwiQVhcIiwgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJBTFwiLCBuYW1lOiBcIkFsYmFuaWFcIn0sXG4gICAge2NvZGU6IFwiRFpcIiwgbmFtZTogXCJBbGdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIkFTXCIsIG5hbWU6IFwiQW1lcmljYW4gU2Ftb2FcIn0sXG4gICAge2NvZGU6IFwiQURcIiwgbmFtZTogXCJBbmRvcnJhXCJ9LFxuICAgIHtjb2RlOiBcIkFPXCIsIG5hbWU6IFwiQW5nb2xhXCJ9LFxuICAgIHtjb2RlOiBcIkFJXCIsIG5hbWU6IFwiQW5ndWlsbGFcIn0sXG4gICAge2NvZGU6IFwiQVFcIiwgbmFtZTogXCJBbnRhcmN0aWNhXCJ9LFxuICAgIHtjb2RlOiBcIkFHXCIsIG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwifSxcbiAgICB7Y29kZTogXCJBUlwiLCBuYW1lOiBcIkFyZ2VudGluYVwifSxcbiAgICB7Y29kZTogXCJBTVwiLCBuYW1lOiBcIkFybWVuaWFcIn0sXG4gICAge2NvZGU6IFwiQVdcIiwgbmFtZTogXCJBcnViYVwifSxcbiAgICB7Y29kZTogXCJBVVwiLCBuYW1lOiBcIkF1c3RyYWxpYVwifSxcbiAgICB7Y29kZTogXCJBVFwiLCBuYW1lOiBcIkF1c3RyaWFcIn0sXG4gICAge2NvZGU6IFwiQVpcIiwgbmFtZTogXCJBemVyYmFpamFuXCJ9LFxuICAgIHtjb2RlOiBcIkJTXCIsIG5hbWU6IFwiQmFoYW1hc1wifSxcbiAgICB7Y29kZTogXCJCSFwiLCBuYW1lOiBcIkJhaHJhaW5cIn0sXG4gICAge2NvZGU6IFwiQkRcIiwgbmFtZTogXCJCYW5nbGFkZXNoXCJ9LFxuICAgIHtjb2RlOiBcIkJCXCIsIG5hbWU6IFwiQmFyYmFkb3NcIn0sXG4gICAge2NvZGU6IFwiQllcIiwgbmFtZTogXCJCZWxhcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkJFXCIsIG5hbWU6IFwiQmVsZ2l1bVwifSxcbiAgICB7Y29kZTogXCJCWlwiLCBuYW1lOiBcIkJlbGl6ZVwifSxcbiAgICB7Y29kZTogXCJCSlwiLCBuYW1lOiBcIkJlbmluXCJ9LFxuICAgIHtjb2RlOiBcIkJNXCIsIG5hbWU6IFwiQmVybXVkYVwifSxcbiAgICB7Y29kZTogXCJCVFwiLCBuYW1lOiBcIkJodXRhblwifSxcbiAgICB7Y29kZTogXCJCT1wiLCBuYW1lOiBcIkJvbGl2aWEgKFBsdXJpbmF0aW9uYWwgU3RhdGUgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIkJRXCIsIG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIn0sXG4gICAge2NvZGU6IFwiQkFcIiwgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCJ9LFxuICAgIHtjb2RlOiBcIkJXXCIsIG5hbWU6IFwiQm90c3dhbmFcIn0sXG4gICAge2NvZGU6IFwiQlZcIiwgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkJSXCIsIG5hbWU6IFwiQnJhemlsXCJ9LFxuICAgIHtjb2RlOiBcIklPXCIsIG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCJ9LFxuICAgIHtjb2RlOiBcIkJOXCIsIG5hbWU6IFwiQnJ1bmVpIERhcnVzc2FsYW1cIn0sXG4gICAge2NvZGU6IFwiQkdcIiwgbmFtZTogXCJCdWxnYXJpYVwifSxcbiAgICB7Y29kZTogXCJCRlwiLCBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wifSxcbiAgICB7Y29kZTogXCJCSVwiLCBuYW1lOiBcIkJ1cnVuZGlcIn0sXG4gICAge2NvZGU6IFwiQ1ZcIiwgbmFtZTogXCJDYWJvIFZlcmRlXCJ9LFxuICAgIHtjb2RlOiBcIktIXCIsIG5hbWU6IFwiQ2FtYm9kaWFcIn0sXG4gICAge2NvZGU6IFwiQ01cIiwgbmFtZTogXCJDYW1lcm9vblwifSxcbiAgICB7Y29kZTogXCJDQVwiLCBuYW1lOiBcIkNhbmFkYVwifSxcbiAgICB7Y29kZTogXCJLWVwiLCBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIkNGXCIsIG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlREXCIsIG5hbWU6IFwiQ2hhZFwifSxcbiAgICB7Y29kZTogXCJDTFwiLCBuYW1lOiBcIkNoaWxlXCJ9LFxuICAgIHtjb2RlOiBcIkNOXCIsIG5hbWU6IFwiQ2hpbmFcIn0sXG4gICAge2NvZGU6IFwiQ1hcIiwgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIkNDXCIsIG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ09cIiwgbmFtZTogXCJDb2xvbWJpYVwifSxcbiAgICB7Y29kZTogXCJLTVwiLCBuYW1lOiBcIkNvbW9yb3NcIn0sXG4gICAge2NvZGU6IFwiQ0dcIiwgbmFtZTogXCJDb25nb1wifSxcbiAgICB7Y29kZTogXCJDRFwiLCBuYW1lOiBcIkNvbmdvIChEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSlcIn0sXG4gICAge2NvZGU6IFwiQ0tcIiwgbmFtZTogXCJDb29rIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiQ1JcIiwgbmFtZTogXCJDb3N0YSBSaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkNJXCIsIG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIn0sXG4gICAge2NvZGU6IFwiSFJcIiwgbmFtZTogXCJDcm9hdGlhXCJ9LFxuICAgIHtjb2RlOiBcIkNVXCIsIG5hbWU6IFwiQ3ViYVwifSxcbiAgICB7Y29kZTogXCJDV1wiLCBuYW1lOiBcIkN1cmHDp2FvXCJ9LFxuICAgIHtjb2RlOiBcIkNZXCIsIG5hbWU6IFwiQ3lwcnVzXCJ9LFxuICAgIHtjb2RlOiBcIkNaXCIsIG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIn0sXG4gICAge2NvZGU6IFwiREtcIiwgbmFtZTogXCJEZW5tYXJrXCJ9LFxuICAgIHtjb2RlOiBcIkRKXCIsIG5hbWU6IFwiRGppYm91dGlcIn0sXG4gICAge2NvZGU6IFwiRE1cIiwgbmFtZTogXCJEb21pbmljYVwifSxcbiAgICB7Y29kZTogXCJET1wiLCBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJFQ1wiLCBuYW1lOiBcIkVjdWFkb3JcIn0sXG4gICAge2NvZGU6IFwiRUdcIiwgbmFtZTogXCJFZ3lwdFwifSxcbiAgICB7Y29kZTogXCJTVlwiLCBuYW1lOiBcIkVsIFNhbHZhZG9yXCJ9LFxuICAgIHtjb2RlOiBcIkdRXCIsIG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIn0sXG4gICAge2NvZGU6IFwiRVJcIiwgbmFtZTogXCJFcml0cmVhXCJ9LFxuICAgIHtjb2RlOiBcIkVFXCIsIG5hbWU6IFwiRXN0b25pYVwifSxcbiAgICB7Y29kZTogXCJFVFwiLCBuYW1lOiBcIkV0aGlvcGlhXCJ9LFxuICAgIHtjb2RlOiBcIkZLXCIsIG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCJ9LFxuICAgIHtjb2RlOiBcIkZPXCIsIG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJGSlwiLCBuYW1lOiBcIkZpamkgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJGSVwiLCBuYW1lOiBcIkZpbmxhbmRcIn0sXG4gICAge2NvZGU6IFwiRlJcIiwgbmFtZTogXCJGcmFuY2VcIn0sXG4gICAge2NvZGU6IFwiR0ZcIiwgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCJ9LFxuICAgIHtjb2RlOiBcIlBGXCIsIG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwifSxcbiAgICB7Y29kZTogXCJURlwiLCBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wifSxcbiAgICB7Y29kZTogXCJHQVwiLCBuYW1lOiBcIkdhYm9uXCJ9LFxuICAgIHtjb2RlOiBcIkdNXCIsIG5hbWU6IFwiR2FtYmlhXCJ9LFxuICAgIHtjb2RlOiBcIkdFXCIsIG5hbWU6IFwiR2VvcmdpYVwifSxcbiAgICB7Y29kZTogXCJERVwiLCBuYW1lOiBcIkdlcm1hbnlcIn0sXG4gICAge2NvZGU6IFwiR0hcIiwgbmFtZTogXCJHaGFuYVwifSxcbiAgICB7Y29kZTogXCJHSVwiLCBuYW1lOiBcIkdpYnJhbHRhclwifSxcbiAgICB7Y29kZTogXCJHUlwiLCBuYW1lOiBcIkdyZWVjZVwifSxcbiAgICB7Y29kZTogXCJHTFwiLCBuYW1lOiBcIkdyZWVubGFuZFwifSxcbiAgICB7Y29kZTogXCJHRFwiLCBuYW1lOiBcIkdyZW5hZGFcIn0sXG4gICAge2NvZGU6IFwiR1BcIiwgbmFtZTogXCJHdWFkZWxvdXBlXCJ9LFxuICAgIHtjb2RlOiBcIkdVXCIsIG5hbWU6IFwiR3VhbVwifSxcbiAgICB7Y29kZTogXCJHVFwiLCBuYW1lOiBcIkd1YXRlbWFsYVwifSxcbiAgICB7Y29kZTogXCJHR1wiLCBuYW1lOiBcIkd1ZXJuc2V5XCJ9LFxuICAgIHtjb2RlOiBcIkdOXCIsIG5hbWU6IFwiR3VpbmVhXCJ9LFxuICAgIHtjb2RlOiBcIkdXXCIsIG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwifSxcbiAgICB7Y29kZTogXCJHWVwiLCBuYW1lOiBcIkd1eWFuYVwifSxcbiAgICB7Y29kZTogXCJIVFwiLCBuYW1lOiBcIkhhaXRpXCJ9LFxuICAgIHtjb2RlOiBcIkhNXCIsIG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIlZBXCIsIG5hbWU6IFwiSG9seSBTZWVcIn0sXG4gICAge2NvZGU6IFwiSE5cIiwgbmFtZTogXCJIb25kdXJhc1wifSxcbiAgICB7Y29kZTogXCJIS1wiLCBuYW1lOiBcIkhvbmcgS29uZ1wifSxcbiAgICB7Y29kZTogXCJIVVwiLCBuYW1lOiBcIkh1bmdhcnlcIn0sXG4gICAge2NvZGU6IFwiSVNcIiwgbmFtZTogXCJJY2VsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklOXCIsIG5hbWU6IFwiSW5kaWFcIn0sXG4gICAge2NvZGU6IFwiSURcIiwgbmFtZTogXCJJbmRvbmVzaWFcIn0sXG4gICAge2NvZGU6IFwiSVJcIiwgbmFtZTogXCJJcmFuIChJc2xhbWljIFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJJUVwiLCBuYW1lOiBcIklyYXFcIn0sXG4gICAge2NvZGU6IFwiSUVcIiwgbmFtZTogXCJJcmVsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIklNXCIsIG5hbWU6IFwiSXNsZSBvZiBNYW5cIn0sXG4gICAge2NvZGU6IFwiSUxcIiwgbmFtZTogXCJJc3JhZWxcIn0sXG4gICAge2NvZGU6IFwiSVRcIiwgbmFtZTogXCJJdGFseVwifSxcbiAgICB7Y29kZTogXCJKTVwiLCBuYW1lOiBcIkphbWFpY2FcIn0sXG4gICAge2NvZGU6IFwiSlBcIiwgbmFtZTogXCJKYXBhblwifSxcbiAgICB7Y29kZTogXCJKRVwiLCBuYW1lOiBcIkplcnNleVwifSxcbiAgICB7Y29kZTogXCJKT1wiLCBuYW1lOiBcIkpvcmRhblwifSxcbiAgICB7Y29kZTogXCJLWlwiLCBuYW1lOiBcIkthemFraHN0YW5cIn0sXG4gICAge2NvZGU6IFwiS0VcIiwgbmFtZTogXCJLZW55YVwifSxcbiAgICB7Y29kZTogXCJLSVwiLCBuYW1lOiBcIktpcmliYXRpXCJ9LFxuICAgIHtjb2RlOiBcIktQXCIsIG5hbWU6IFwiS29yZWEgKERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIktSXCIsIG5hbWU6IFwiS29yZWEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJLV1wiLCBuYW1lOiBcIkt1d2FpdFwifSxcbiAgICB7Y29kZTogXCJLR1wiLCBuYW1lOiBcIkt5cmd5enN0YW5cIn0sXG4gICAge2NvZGU6IFwiTEFcIiwgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wifSxcbiAgICB7Y29kZTogXCJMVlwiLCBuYW1lOiBcIkxhdHZpYVwifSxcbiAgICB7Y29kZTogXCJMQlwiLCBuYW1lOiBcIkxlYmFub25cIn0sXG4gICAge2NvZGU6IFwiTFNcIiwgbmFtZTogXCJMZXNvdGhvXCJ9LFxuICAgIHtjb2RlOiBcIkxSXCIsIG5hbWU6IFwiTGliZXJpYVwifSxcbiAgICB7Y29kZTogXCJMWVwiLCBuYW1lOiBcIkxpYnlhXCJ9LFxuICAgIHtjb2RlOiBcIkxJXCIsIG5hbWU6IFwiTGllY2h0ZW5zdGVpblwifSxcbiAgICB7Y29kZTogXCJMVFwiLCBuYW1lOiBcIkxpdGh1YW5pYVwifSxcbiAgICB7Y29kZTogXCJMVVwiLCBuYW1lOiBcIkx1eGVtYm91cmdcIn0sXG4gICAge2NvZGU6IFwiTU9cIiwgbmFtZTogXCJNYWNhb1wifSxcbiAgICB7Y29kZTogXCJNS1wiLCBuYW1lOiBcIk1hY2Vkb25pYSAodGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZilcIn0sXG4gICAge2NvZGU6IFwiTUdcIiwgbmFtZTogXCJNYWRhZ2FzY2FyXCJ9LFxuICAgIHtjb2RlOiBcIk1XXCIsIG5hbWU6IFwiTWFsYXdpXCJ9LFxuICAgIHtjb2RlOiBcIk1ZXCIsIG5hbWU6IFwiTWFsYXlzaWFcIn0sXG4gICAge2NvZGU6IFwiTVZcIiwgbmFtZTogXCJNYWxkaXZlc1wifSxcbiAgICB7Y29kZTogXCJNTFwiLCBuYW1lOiBcIk1hbGlcIn0sXG4gICAge2NvZGU6IFwiTVRcIiwgbmFtZTogXCJNYWx0YVwifSxcbiAgICB7Y29kZTogXCJNSFwiLCBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiTVFcIiwgbmFtZTogXCJNYXJ0aW5pcXVlXCJ9LFxuICAgIHtjb2RlOiBcIk1SXCIsIG5hbWU6IFwiTWF1cml0YW5pYVwifSxcbiAgICB7Y29kZTogXCJNVVwiLCBuYW1lOiBcIk1hdXJpdGl1c1wifSxcbiAgICB7Y29kZTogXCJZVFwiLCBuYW1lOiBcIk1heW90dGVcIn0sXG4gICAge2NvZGU6IFwiTVhcIiwgbmFtZTogXCJNZXhpY29cIn0sXG4gICAge2NvZGU6IFwiRk1cIiwgbmFtZTogXCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwifSxcbiAgICB7Y29kZTogXCJNRFwiLCBuYW1lOiBcIk1vbGRvdmEgKFJlcHVibGljIG9mKVwifSxcbiAgICB7Y29kZTogXCJNQ1wiLCBuYW1lOiBcIk1vbmFjb1wifSxcbiAgICB7Y29kZTogXCJNTlwiLCBuYW1lOiBcIk1vbmdvbGlhXCJ9LFxuICAgIHtjb2RlOiBcIk1FXCIsIG5hbWU6IFwiTW9udGVuZWdyb1wifSxcbiAgICB7Y29kZTogXCJNU1wiLCBuYW1lOiBcIk1vbnRzZXJyYXRcIn0sXG4gICAge2NvZGU6IFwiTUFcIiwgbmFtZTogXCJNb3JvY2NvXCJ9LFxuICAgIHtjb2RlOiBcIk1aXCIsIG5hbWU6IFwiTW96YW1iaXF1ZVwifSxcbiAgICB7Y29kZTogXCJNTVwiLCBuYW1lOiBcIk15YW5tYXJcIn0sXG4gICAge2NvZGU6IFwiTkFcIiwgbmFtZTogXCJOYW1pYmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5SXCIsIG5hbWU6IFwiTmF1cnVcIn0sXG4gICAge2NvZGU6IFwiTlBcIiwgbmFtZTogXCJOZXBhbFwifSxcbiAgICB7Y29kZTogXCJOTFwiLCBuYW1lOiBcIk5ldGhlcmxhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5DXCIsIG5hbWU6IFwiTmV3IENhbGVkb25pYVwifSxcbiAgICB7Y29kZTogXCJOWlwiLCBuYW1lOiBcIk5ldyBaZWFsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk5JXCIsIG5hbWU6IFwiTmljYXJhZ3VhXCJ9LFxuICAgIHtjb2RlOiBcIk5FXCIsIG5hbWU6IFwiTmlnZXJcIn0sXG4gICAge2NvZGU6IFwiTkdcIiwgbmFtZTogXCJOaWdlcmlhXCJ9LFxuICAgIHtjb2RlOiBcIk5VXCIsIG5hbWU6IFwiTml1ZVwifSxcbiAgICB7Y29kZTogXCJORlwiLCBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCJ9LFxuICAgIHtjb2RlOiBcIk1QXCIsIG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCJ9LFxuICAgIHtjb2RlOiBcIk5PXCIsIG5hbWU6IFwiTm9yd2F5XCJ9LFxuICAgIHtjb2RlOiBcIk9NXCIsIG5hbWU6IFwiT21hblwifSxcbiAgICB7Y29kZTogXCJQS1wiLCBuYW1lOiBcIlBha2lzdGFuXCJ9LFxuICAgIHtjb2RlOiBcIlBXXCIsIG5hbWU6IFwiUGFsYXVcIn0sXG4gICAge2NvZGU6IFwiUFNcIiwgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlBBXCIsIG5hbWU6IFwiUGFuYW1hXCJ9LFxuICAgIHtjb2RlOiBcIlBHXCIsIG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwifSxcbiAgICB7Y29kZTogXCJQWVwiLCBuYW1lOiBcIlBhcmFndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlBFXCIsIG5hbWU6IFwiUGVydVwifSxcbiAgICB7Y29kZTogXCJQSFwiLCBuYW1lOiBcIlBoaWxpcHBpbmVzXCJ9LFxuICAgIHtjb2RlOiBcIlBOXCIsIG5hbWU6IFwiUGl0Y2Fpcm5cIn0sXG4gICAge2NvZGU6IFwiUExcIiwgbmFtZTogXCJQb2xhbmRcIn0sXG4gICAge2NvZGU6IFwiUFRcIiwgbmFtZTogXCJQb3J0dWdhbFwifSxcbiAgICB7Y29kZTogXCJQUlwiLCBuYW1lOiBcIlB1ZXJ0byBSaWNvXCJ9LFxuICAgIHtjb2RlOiBcIlFBXCIsIG5hbWU6IFwiUWF0YXJcIn0sXG4gICAge2NvZGU6IFwiUkVcIiwgbmFtZTogXCJSw6l1bmlvblwifSxcbiAgICB7Y29kZTogXCJST1wiLCBuYW1lOiBcIlJvbWFuaWFcIn0sXG4gICAge2NvZGU6IFwiUlVcIiwgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIn0sXG4gICAge2NvZGU6IFwiUldcIiwgbmFtZTogXCJSd2FuZGFcIn0sXG4gICAge2NvZGU6IFwiQkxcIiwgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwifSxcbiAgICB7Y29kZTogXCJTSFwiLCBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCJ9LFxuICAgIHtjb2RlOiBcIktOXCIsIG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCJ9LFxuICAgIHtjb2RlOiBcIkxDXCIsIG5hbWU6IFwiU2FpbnQgTHVjaWFcIn0sXG4gICAge2NvZGU6IFwiTUZcIiwgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJQTVwiLCBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIn0sXG4gICAge2NvZGU6IFwiVkNcIiwgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wifSxcbiAgICB7Y29kZTogXCJXU1wiLCBuYW1lOiBcIlNhbW9hXCJ9LFxuICAgIHtjb2RlOiBcIlNNXCIsIG5hbWU6IFwiU2FuIE1hcmlub1wifSxcbiAgICB7Y29kZTogXCJTVFwiLCBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwifSxcbiAgICB7Y29kZTogXCJTQVwiLCBuYW1lOiBcIlNhdWRpIEFyYWJpYVwifSxcbiAgICB7Y29kZTogXCJTTlwiLCBuYW1lOiBcIlNlbmVnYWxcIn0sXG4gICAge2NvZGU6IFwiUlNcIiwgbmFtZTogXCJTZXJiaWFcIn0sXG4gICAge2NvZGU6IFwiU0NcIiwgbmFtZTogXCJTZXljaGVsbGVzXCJ9LFxuICAgIHtjb2RlOiBcIlNMXCIsIG5hbWU6IFwiU2llcnJhIExlb25lXCJ9LFxuICAgIHtjb2RlOiBcIlNHXCIsIG5hbWU6IFwiU2luZ2Fwb3JlXCJ9LFxuICAgIHtjb2RlOiBcIlNYXCIsIG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwifSxcbiAgICB7Y29kZTogXCJTS1wiLCBuYW1lOiBcIlNsb3Zha2lhXCJ9LFxuICAgIHtjb2RlOiBcIlNJXCIsIG5hbWU6IFwiU2xvdmVuaWFcIn0sXG4gICAge2NvZGU6IFwiU0JcIiwgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU09cIiwgbmFtZTogXCJTb21hbGlhXCJ9LFxuICAgIHtjb2RlOiBcIlpBXCIsIG5hbWU6IFwiU291dGggQWZyaWNhXCJ9LFxuICAgIHtjb2RlOiBcIkdTXCIsIG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiU1NcIiwgbmFtZTogXCJTb3V0aCBTdWRhblwifSxcbiAgICB7Y29kZTogXCJFU1wiLCBuYW1lOiBcIlNwYWluXCJ9LFxuICAgIHtjb2RlOiBcIkxLXCIsIG5hbWU6IFwiU3JpIExhbmthXCJ9LFxuICAgIHtjb2RlOiBcIlNEXCIsIG5hbWU6IFwiU3VkYW5cIn0sXG4gICAge2NvZGU6IFwiU1JcIiwgbmFtZTogXCJTdXJpbmFtZVwifSxcbiAgICB7Y29kZTogXCJTSlwiLCBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIn0sXG4gICAge2NvZGU6IFwiU1pcIiwgbmFtZTogXCJTd2F6aWxhbmRcIn0sXG4gICAge2NvZGU6IFwiU0VcIiwgbmFtZTogXCJTd2VkZW5cIn0sXG4gICAge2NvZGU6IFwiQ0hcIiwgbmFtZTogXCJTd2l0emVybGFuZFwifSxcbiAgICB7Y29kZTogXCJTWVwiLCBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCJ9LFxuICAgIHtjb2RlOiBcIlRXXCIsIG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwifSxcbiAgICB7Y29kZTogXCJUSlwiLCBuYW1lOiBcIlRhamlraXN0YW5cIn0sXG4gICAge2NvZGU6IFwiVFpcIiwgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCJ9LFxuICAgIHtjb2RlOiBcIlRIXCIsIG5hbWU6IFwiVGhhaWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVExcIiwgbmFtZTogXCJUaW1vci1MZXN0ZVwifSxcbiAgICB7Y29kZTogXCJUR1wiLCBuYW1lOiBcIlRvZ29cIn0sXG4gICAge2NvZGU6IFwiVEtcIiwgbmFtZTogXCJUb2tlbGF1XCJ9LFxuICAgIHtjb2RlOiBcIlRPXCIsIG5hbWU6IFwiVG9uZ2FcIn0sXG4gICAge2NvZGU6IFwiVFRcIiwgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCJ9LFxuICAgIHtjb2RlOiBcIlROXCIsIG5hbWU6IFwiVHVuaXNpYVwifSxcbiAgICB7Y29kZTogXCJUUlwiLCBuYW1lOiBcIlR1cmtleVwifSxcbiAgICB7Y29kZTogXCJUTVwiLCBuYW1lOiBcIlR1cmttZW5pc3RhblwifSxcbiAgICB7Y29kZTogXCJUQ1wiLCBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wifSxcbiAgICB7Y29kZTogXCJUVlwiLCBuYW1lOiBcIlR1dmFsdVwifSxcbiAgICB7Y29kZTogXCJVR1wiLCBuYW1lOiBcIlVnYW5kYVwifSxcbiAgICB7Y29kZTogXCJVQVwiLCBuYW1lOiBcIlVrcmFpbmVcIn0sXG4gICAge2NvZGU6IFwiQUVcIiwgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wifSxcbiAgICB7Y29kZTogXCJHQlwiLCBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIn0sXG4gICAge2NvZGU6IFwiVVNcIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIn0sXG4gICAge2NvZGU6IFwiVU1cIiwgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIn0sXG4gICAge2NvZGU6IFwiVVlcIiwgbmFtZTogXCJVcnVndWF5XCJ9LFxuICAgIHtjb2RlOiBcIlVaXCIsIG5hbWU6IFwiVXpiZWtpc3RhblwifSxcbiAgICB7Y29kZTogXCJWVVwiLCBuYW1lOiBcIlZhbnVhdHVcIn0sXG4gICAge2NvZGU6IFwiVkVcIiwgbmFtZTogXCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCJ9LFxuICAgIHtjb2RlOiBcIlZOXCIsIG5hbWU6IFwiVmlldG5hbVwifSxcbiAgICB7Y29kZTogXCJWR1wiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwifSxcbiAgICB7Y29kZTogXCJWSVwiLCBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzIChVLlMuKVwifSxcbiAgICB7Y29kZTogXCJXRlwiLCBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCJ9LFxuICAgIHtjb2RlOiBcIkVIXCIsIG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIn0sXG4gICAge2NvZGU6IFwiWUVcIiwgbmFtZTogXCJZZW1lblwifSxcbiAgICB7Y29kZTogXCJaTVwiLCBuYW1lOiBcIlphbWJpYVwifSxcbiAgICB7Y29kZTogXCJaV1wiLCBuYW1lOiBcIlppbWJhYndlXCJ9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgKiBhcyBhcGlzIGZyb20gXCIuL2FwaXNcIjtcbmltcG9ydCAqIGFzIERPTSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpO1xuXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzbGlrZWNvbnRlbnRcIik7XG5jb25zdCBtYXhUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4Y29udGVudFwiKTtcbmNvbnN0IG1pblRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5jb250ZW50XCIpO1xuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYWluY2hhbmNlY29udGVudFwiKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZHNwZWVkY29udGVudFwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eWNvbnRlbnRcIik7XG5jb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlY29udGVudFwiKTtcbmNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Vuc2V0Y29udGVudFwiKTtcblxuY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyZGVzY3JpcHRpb25cIik7XG5jb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRpY29uXCIpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uXCIpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZWFsbFwiKTtcblxuY29uc3QgY2hhbmdlVW5pdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGxvY2F0aW9uQ2hvc2VuO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbkNob3NlbiA9IFwiTGlzYm9uXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImZhcmVuaGVpdFwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaXMuZ2V0V2VhdGhlckluZm9DZWxzaXVzKGxvY2F0aW9uQ2hvc2VuKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKX0gwrpDYDtcbiAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICBkYXRhLmRhaWx5WzBdLnRlbXAubWF4XG4gICAgICAgICAgICApfSDCukNgO1xuICAgICAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5taW5cbiAgICAgICAgICAgICl9IMK6Q2A7XG4gICAgICAgICAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0ucG9wICogMTAwXG4gICAgICAgICAgICApfSVgO1xuICAgICAgICAgICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgICAgICAgICB9IEttL0hgO1xuICAgICAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gICAgICAgICAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUb0hvdXIoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LnN1bnJpc2UsXG4gICAgICAgICAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN1bnNldC50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC5zdW5zZXQsXG4gICAgICAgICAgICAgICAgZGF0YS50aW1lem9uZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY29udmVydFRvVGl0bGVDYXNlKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgICAgICAoYXdhaXQgYXBpcy5nZXRMb2NhdGlvbk5hbWUobG9jYXRpb25DaG9zZW4pKS5sb2NhdGlvbk5hbWVcbiAgICAgICAgICAgIH0sICR7KGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkuY291bnRyeU5hbWV9YDtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgZGF0YS5jdXJyZW50LnRlbXBcbiAgICAgICAgICAgICl9IMK6Q2A7XG5cbiAgICAgICAgICAgIGN1cnJlbnRJY29uLnNyYyA9IERPTS5nZXRXZWF0aGVySWNvbihkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29uKTtcblxuICAgICAgICAgICAgY29uc3QgZGF5cyA9IGNyZWF0ZURheXNBcnJheShkYXRhLmRhaWx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YS5kYWlseSk7XG4gICAgICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhaWx5TWluVGVtcHMgPSBnZXREYWlseU1pblRlbXBzKGRhdGEuZGFpbHksIFwiwrpDXCIpO1xuXG4gICAgICAgICAgICBET00uY2hhbmdlRGFpbHlGb3JlY2FzdChcbiAgICAgICAgICAgICAgICBkYXlzLFxuICAgICAgICAgICAgICAgIGRhaWx5SWNvbnMsXG4gICAgICAgICAgICAgICAgZGFpbHlNYXhUZW1wcyxcbiAgICAgICAgICAgICAgICBkYWlseU1pblRlbXBzXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGNyZWF0ZUhvdXJzQXJyYXkoZGF0YS5ob3VybHksIGRhdGEudGltZXpvbmUpO1xuICAgICAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YS5ob3VybHksIFwiwrpDXCIpO1xuXG4gICAgICAgICAgICBET00uY2hhbmdlSG91cmx5Rm9yZWNhc3QoaG91cnMsIGhvdXJseUljb25zLCBob3VybHlUZW1wcyk7XG5cbiAgICAgICAgICAgIERPTS5jaGFuZ2VCR0ltYWdlKGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkKTtcbiAgICAgICAgICAgIERPTS5pbXByb3ZlUmVhZGFiaWxpdHkoZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0ZhcmVuaGVpdHMobG9jYXRpb25DaG9zZW4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpfSDCukZgO1xuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5tYXhcbiAgICAgICAgICAgICl9IMK6RmA7XG4gICAgICAgICAgICBtaW5UZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1pblxuICAgICAgICAgICAgKX0gwrpGYDtcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgZGF0YS5kYWlseVswXS5wb3AgKiAxMDBcbiAgICAgICAgICAgICl9JWA7XG4gICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGRhdGEuY3VycmVudC53aW5kX3NwZWVkICogMTApIC8gMTBcbiAgICAgICAgICAgIH0gTXBoYDtcbiAgICAgICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VG9Ib3VyKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC5zdW5yaXNlLFxuICAgICAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRvSG91cihcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQuc3Vuc2V0LFxuICAgICAgICAgICAgICAgIGRhdGEudGltZXpvbmVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNvbnZlcnRUb1RpdGxlQ2FzZShcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7XG4gICAgICAgICAgICAgICAgKGF3YWl0IGFwaXMuZ2V0TG9jYXRpb25OYW1lKGxvY2F0aW9uQ2hvc2VuKSkubG9jYXRpb25OYW1lXG4gICAgICAgICAgICB9LCAkeyhhd2FpdCBhcGlzLmdldExvY2F0aW9uTmFtZShsb2NhdGlvbkNob3NlbikpLmNvdW50cnlOYW1lfWA7XG4gICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgICAgICAgICApfSDCukZgO1xuXG4gICAgICAgICAgICBjdXJyZW50SWNvbi5zcmMgPSBET00uZ2V0V2VhdGhlckljb24oZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uaWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgICAgICBjb25zdCBkYWlseUljb25zID0gY3JlYXRlRGFpbHlJY29uc0FycmF5KGRhdGEuZGFpbHkpO1xuICAgICAgICAgICAgY29uc3QgZGFpbHlNYXhUZW1wcyA9IGdldERhaWx5TWF4VGVtcHMoZGF0YS5kYWlseSwgXCLCukZcIik7XG4gICAgICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5LCBcIsK6RlwiKTtcblxuICAgICAgICAgICAgRE9NLmNoYW5nZURhaWx5Rm9yZWNhc3QoXG4gICAgICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgICAgICAgICBkYWlseUljb25zLFxuICAgICAgICAgICAgICAgIGRhaWx5TWF4VGVtcHMsXG4gICAgICAgICAgICAgICAgZGFpbHlNaW5UZW1wc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBjcmVhdGVIb3Vyc0FycmF5KGRhdGEuaG91cmx5LCBkYXRhLnRpbWV6b25lKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJseUljb25zID0gY3JlYXRlSG91cmx5SWNvbnNBcnJheShkYXRhLmhvdXJseSk7XG4gICAgICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCBcIsK6RlwiKTtcblxuICAgICAgICAgICAgRE9NLmNoYW5nZUhvdXJseUZvcmVjYXN0KGhvdXJzLCBob3VybHlJY29ucywgaG91cmx5VGVtcHMpO1xuXG4gICAgICAgICAgICBET00uY2hhbmdlQkdJbWFnZShkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZCk7XG4gICAgICAgICAgICBET00uaW1wcm92ZVJlYWRhYmlsaXR5KGRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRjaFVuaXRzKTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzd2l0Y2hVbml0cygpIHtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VVbml0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJlbmhlaXRcIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpcy5nZXRXZWF0aGVySW5mb0NlbHNpdXMobG9jYXRpb25DaG9zZW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uQ2hvc2VuKTtcblxuICAgICAgICAgICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC5mZWVsc19saWtlXG4gICAgICAgICAgICAgICAgKX0gwrpDYDtcbiAgICAgICAgICAgICAgICBtYXhUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGFpbHlbMF0udGVtcC5tYXhcbiAgICAgICAgICAgICAgICApfSDCukNgO1xuICAgICAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kYWlseVswXS50ZW1wLm1pblxuICAgICAgICAgICAgICAgICl9IMK6Q2A7XG5cbiAgICAgICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhLmN1cnJlbnQud2luZF9zcGVlZCAqIDMuNiAqIDEwKSAvIDEwXG4gICAgICAgICAgICAgICAgfSBLbS9IYDtcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudC50ZW1wXG4gICAgICAgICAgICAgICAgKX0gwrpDYDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBjcmVhdGVEYXlzQXJyYXkoZGF0YS5kYWlseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFpbHlJY29ucyA9IGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXRhLmRhaWx5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWlseU1heFRlbXBzID0gZ2V0RGFpbHlNYXhUZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYWlseU1pblRlbXBzID0gZ2V0RGFpbHlNaW5UZW1wcyhkYXRhLmRhaWx5LCBcIsK6Q1wiKTtcblxuICAgICAgICAgICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KFxuICAgICAgICAgICAgICAgICAgICBkYXlzLFxuICAgICAgICAgICAgICAgICAgICBkYWlseUljb25zLFxuICAgICAgICAgICAgICAgICAgICBkYWlseU1heFRlbXBzLFxuICAgICAgICAgICAgICAgICAgICBkYWlseU1pblRlbXBzXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShkYXRhLmhvdXJseSwgZGF0YS50aW1lem9uZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KGRhdGEuaG91cmx5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VybHlUZW1wcyA9IGdldEhvdXJseVRlbXBzKGRhdGEuaG91cmx5LCBcIsK6Q1wiKTtcblxuICAgICAgICAgICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYXJlbmhlaXRcIik7XG4gICAgICAgICAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byDCukZcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUZhcmVuaGVpdHMgPSBhd2FpdCBhcGlzLmdldFdlYXRoZXJJbmZvRmFyZW5oZWl0cyhcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25DaG9zZW5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFGYXJlbmhlaXRzKTtcblxuICAgICAgICAgICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGYXJlbmhlaXRzLmN1cnJlbnQuZmVlbHNfbGlrZVxuICAgICAgICAgICAgICAgICl9IMK6RmA7XG4gICAgICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5kYWlseVswXS50ZW1wLm1heFxuICAgICAgICAgICAgICAgICl9IMK6RmA7XG4gICAgICAgICAgICAgICAgbWluVGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5kYWlseVswXS50ZW1wLm1pblxuICAgICAgICAgICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgICAgICAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChkYXRhRmFyZW5oZWl0cy5jdXJyZW50LndpbmRfc3BlZWQgKiAxMCkgLyAxMFxuICAgICAgICAgICAgICAgIH0gTXBoYDtcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGYXJlbmhlaXRzLmN1cnJlbnQudGVtcFxuICAgICAgICAgICAgICAgICl9IMK6RmA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gY3JlYXRlRGF5c0FycmF5KFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5kYWlseSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMudGltZXpvbmVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhaWx5SWNvbnMgPSBjcmVhdGVEYWlseUljb25zQXJyYXkoZGF0YUZhcmVuaGVpdHMuZGFpbHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhaWx5TWF4VGVtcHMgPSBnZXREYWlseU1heFRlbXBzKFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5kYWlseSxcbiAgICAgICAgICAgICAgICAgICAgXCLCukZcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGFpbHlNaW5UZW1wcyA9IGdldERhaWx5TWluVGVtcHMoXG4gICAgICAgICAgICAgICAgICAgIGRhdGFGYXJlbmhlaXRzLmRhaWx5LFxuICAgICAgICAgICAgICAgICAgICBcIsK6RlwiXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIERPTS5jaGFuZ2VEYWlseUZvcmVjYXN0KFxuICAgICAgICAgICAgICAgICAgICBkYXlzLFxuICAgICAgICAgICAgICAgICAgICBkYWlseUljb25zLFxuICAgICAgICAgICAgICAgICAgICBkYWlseU1heFRlbXBzLFxuICAgICAgICAgICAgICAgICAgICBkYWlseU1pblRlbXBzXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNBcnJheShcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZhcmVuaGVpdHMuaG91cmx5LFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy50aW1lem9uZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cmx5SWNvbnMgPSBjcmVhdGVIb3VybHlJY29uc0FycmF5KFxuICAgICAgICAgICAgICAgICAgICBkYXRhRmFyZW5oZWl0cy5ob3VybHlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJseVRlbXBzID0gZ2V0SG91cmx5VGVtcHMoZGF0YUZhcmVuaGVpdHMuaG91cmx5LCBcIsK6RlwiKTtcblxuICAgICAgICAgICAgICAgIERPTS5jaGFuZ2VIb3VybHlGb3JlY2FzdChob3VycywgaG91cmx5SWNvbnMsIGhvdXJseVRlbXBzKTtcblxuICAgICAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYXJlbmhlaXRcIik7XG4gICAgICAgICAgICAgICAgY2hhbmdlVW5pdHNCdXR0b24udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byDCukNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZWFsbFwiKTtcblxuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoYW5nZVVuaXRzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hVbml0cyk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURheXNBcnJheShkYXlzLCB0aW1lWm9uZSkge1xuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZERheSA9IGAke2NvbnZlcnRVbml4VG9XZWVrZGF5KFxuICAgICAgICAgICAgZGF5c1tpXS5kdCxcbiAgICAgICAgICAgIHRpbWVab25lXG4gICAgICAgICl9LCAke2NvbnZlcnRVbml4VG9EYXkoZGF5c1tpXS5kdCwgdGltZVpvbmUpfWA7XG4gICAgICAgIGRheXNBcnJheS5wdXNoKGNvbnZlcnRlZERheSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhaWx5SWNvbnNBcnJheShkYXlzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgIGljb25zQXJyYXkucHVzaChkYXlzW2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgfVxuICAgIHJldHVybiBpY29uc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXREYWlseU1heFRlbXBzKGRheXMsIHVuaXQpIHtcbiAgICBjb25zdCBtYXhUZW1wc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbWF4VGVtcHNBcnJheS5wdXNoKGAke01hdGgucm91bmQoZGF5c1tpXS50ZW1wLm1heCl9ICR7dW5pdH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFRlbXBzQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldERhaWx5TWluVGVtcHMoZGF5cywgdW5pdCkge1xuICAgIGNvbnN0IG1pblRlbXBzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICBtaW5UZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChkYXlzW2ldLnRlbXAubWluKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gbWluVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG91cnNBcnJheShob3VycywgdGltZVpvbmUpIHtcbiAgICBjb25zdCBob3Vyc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZEhvdXIgPSBgJHtjb252ZXJ0V2l0aG91dE1pbnV0ZXMoaG91cnNbaV0uZHQsIHRpbWVab25lKX1gO1xuICAgICAgICBob3Vyc0FycmF5LnB1c2goY29udmVydGVkSG91cik7XG4gICAgfVxuICAgIHJldHVybiBob3Vyc0FycmF5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlJY29uc0FycmF5KGhvdXJzKSB7XG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBpY29uc0FycmF5LnB1c2goaG91cnNbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIGljb25zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseVRlbXBzKGhvdXJzLCB1bml0KSB7XG4gICAgY29uc3QgVGVtcHNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuICAgICAgICBUZW1wc0FycmF5LnB1c2goYCR7TWF0aC5yb3VuZChob3Vyc1tpXS50ZW1wKX0gJHt1bml0fWApO1xuICAgIH1cbiAgICByZXR1cm4gVGVtcHNBcnJheTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvVGl0bGVDYXNlKHN0cmluZykge1xuICAgIGNvbnN0IGFycmF5T2ZXb3JkcyA9IHN0cmluZy5zcGxpdChcIiBcIik7XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZEFycmF5ID0gW107XG4gICAgYXJyYXlPZldvcmRzLmZvckVhY2goKHdvcmQpID0+XG4gICAgICAgIGNhcGl0YWxpemVkQXJyYXkucHVzaCh3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkpXG4gICAgKTtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZWRBcnJheS5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb0hvdXIodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgICAgIG1pbnV0ZTogXCJudW1lcmljXCIsXG4gICAgfTtcblxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIGhvdXIudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFdpdGhvdXRNaW51dGVzKHRpbWUsIHRpbWVab25lKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICAgIHRpbWVab25lLFxuICAgIH07XG5cbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBob3VyLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRVbml4VG9EYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB0aW1lWm9uZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUodGltZSAqIDEwMDApO1xuICAgIHJldHVybiBkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXhUb1dlZWtkYXkodGltZSwgdGltZVpvbmUpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgdGltZVpvbmUsXG4gICAgfTtcblxuICAgIGNvbnN0IHdlZWtkYXkgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgcmV0dXJuIHdlZWtkYXkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcblxuY29uc3QgaG91cmx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5cbmhvdXJseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NLnN3aXRjaFRvSG91cmx5Rm9yZWNhc3QpO1xuXG5jb25zdCBkYWlseUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5cbmRhaWx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET00uc3dpdGNoVG9EYWlseUZvcmVjYXN0KTtcblxuRE9NLmNyZWF0ZUZpcnN0SG91cmx5RGl2cygpO1xuRE9NLmhpZGVGaXJzdEhvdXJseURpdnMoKTtcblxuRE9NLmNyZWF0ZUxhc3RIb3VybHlEaXZzKCk7XG5ET00uaGlkZUxhc3RIb3VybHlEaXZzKCk7XG5cbnNlYXJjaFdlYXRoZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==