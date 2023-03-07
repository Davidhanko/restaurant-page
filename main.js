/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*General CSS*/\r\n\r\nhtml,body{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgray;\r\n}\r\n\r\n.navigationBar{\r\n    background-color: gray;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 10vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n    gap: 3vw;\r\n    box-shadow: 0 0 8px 5px gray;\r\n}\r\n\r\n.navButton,.navButton-active{\r\n    height: 7vh;\r\n    width: 10vw;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.navButton-active{\r\n    color: red;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n/*HOME page*/\r\n.welcomeText{\r\n    margin-bottom: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n/*MENU page*/\r\n.menuGrid{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    height: 70vh;\r\n    width: 90vw;\r\n    row-gap: 5vh;\r\n    column-gap: 10vw;\r\n}\r\n\r\n.menuItems{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid black;\r\n    height: 30vh;\r\n    border-radius: 5px;\r\n    background-color: slategray;\r\n    box-shadow: 0 0 8px 1px black;\r\n}\r\n\r\n.menuItems>img{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    margin-left: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.menuText{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menuText>p{\r\n    overflow: hidden;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,YAAY;IACZ,aAAa;IACb,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,QAAQ;IACR,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA,YAAY;AACZ;IACI,oBAAoB;IACpB,iBAAiB;AACrB;AACA,YAAY;AACZ;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["/*General CSS*/\r\n\r\nhtml,body{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgray;\r\n}\r\n\r\n.navigationBar{\r\n    background-color: gray;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 10vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n    gap: 3vw;\r\n    box-shadow: 0 0 8px 5px gray;\r\n}\r\n\r\n.navButton,.navButton-active{\r\n    height: 7vh;\r\n    width: 10vw;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.navButton-active{\r\n    color: red;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n/*HOME page*/\r\n.welcomeText{\r\n    margin-bottom: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n/*MENU page*/\r\n.menuGrid{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    height: 70vh;\r\n    width: 90vw;\r\n    row-gap: 5vh;\r\n    column-gap: 10vw;\r\n}\r\n\r\n.menuItems{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid black;\r\n    height: 30vh;\r\n    border-radius: 5px;\r\n    background-color: slategray;\r\n    box-shadow: 0 0 8px 1px black;\r\n}\r\n\r\n.menuItems>img{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    margin-left: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.menuText{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menuText>p{\r\n    overflow: hidden;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/elementCreator.js":
/*!*******************************!*\
  !*** ./src/elementCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, className, text, IMGsource) {
  let element = document.createElement(`${tag}`);
  element.classList.add(`${className}`);
  if (tag !== "img") {
    element.textContent = `${text}`;
  } else {
    element.src = `${IMGsource}`;
    element.alt = `${text}`;
  }
  return element;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHome": () => (/* binding */ displayHome)
/* harmony export */ });
/* harmony import */ var _pictures_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/logo.png */ "./src/pictures/logo.png");
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");



function displayHome() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", "navButton-active", "Home"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", "navButton", "Menu"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", "navButton", "Contact"));
  //creating headline
  contentDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", "headline", "BlackScraper"));
  //creating image
  contentDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", "smallImage", "landscape", _pictures_logo_png__WEBPACK_IMPORTED_MODULE_0__));
  //creating text
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)(
      "p",
      "welcomeText",
      "Welcome to the BlackScraper, our four-star restaurant!"
    )
  );
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)(
      "p",
      "welcomeText",
      "We offer the best steaks in the entire country!"
    )
  );
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "welcomeText", "Made with passion from 1967!")
  );
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");
/* harmony import */ var _pictures_Menu_garlic_soup_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/Menu/garlic_soup.jpg */ "./src/pictures/Menu/garlic_soup.jpg");
/* harmony import */ var _pictures_Menu_steak_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/Menu/steak.jpg */ "./src/pictures/Menu/steak.jpg");
/* harmony import */ var _pictures_Menu_rice_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/Menu/rice.jpg */ "./src/pictures/Menu/rice.jpg");
/* harmony import */ var _pictures_Menu_chicken_nuggets_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/Menu/chicken_nuggets.jpg */ "./src/pictures/Menu/chicken_nuggets.jpg");
/* harmony import */ var _pictures_Menu_french_fries_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pictures/Menu/french_fries.jpg */ "./src/pictures/Menu/french_fries.jpg");
/* harmony import */ var _pictures_Menu_dressing_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pictures/Menu/dressing.jpg */ "./src/pictures/Menu/dressing.jpg");








function displayMenu() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton", "Home"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton-active", "Menu"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton", "Contact"));
  //creating headline
  contentDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", "headline", "Menu"));
  //creating grid div
  const gridDiv = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuGrid", "");
  contentDiv.appendChild(gridDiv);
  //creating Garlic soup
  const menuItemGarlic = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemGarlic.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "Garlic soup", _pictures_Menu_garlic_soup_jpg__WEBPACK_IMPORTED_MODULE_1__)
  );
  const GarlicTextDiv = menuItemGarlic.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  GarlicTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "Garlic soup"));
  GarlicTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "Prepare yourself for the best garlic soup you have ever eaten! Made from special ingredients, to make sure you will enjoy the taste."
    )
  );
  //creating steak
  const menuItemSteak = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemSteak.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "Steak", _pictures_Menu_steak_jpg__WEBPACK_IMPORTED_MODULE_2__));
  const SteakTextDiv = menuItemSteak.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  SteakTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "Steak"));
  SteakTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "Steak made from chicken! One of the best steaks you will eat in a lifetime!"
    )
  );
  //creating rice
  const menuItemRice = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemRice.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "Rice", _pictures_Menu_rice_jpg__WEBPACK_IMPORTED_MODULE_3__));
  const RiceTextDiv = menuItemRice.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  RiceTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "Rice"));
  RiceTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "Exported from Vietnam, cooked in traditional way to make you addicted!"
    )
  );
  //creating chicken
  const menuItemChicken = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemChicken.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "Chicken nuggets", _pictures_Menu_chicken_nuggets_jpg__WEBPACK_IMPORTED_MODULE_4__)
  );
  const ChickenTextDiv = menuItemChicken.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  ChickenTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "Chicken nuggets"));
  ChickenTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "For children, we have chicken nuggets that never disappoint their young brains."
    )
  );
  //creating french
  const menuItemFrench = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemFrench.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "French fries", _pictures_Menu_french_fries_jpg__WEBPACK_IMPORTED_MODULE_5__)
  );
  const FrenchTextDiv = menuItemFrench.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  FrenchTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "French fries"));
  FrenchTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "You do not like rice? Do not worry! For this occasion we have french fries prepared just for you!"
    )
  );
  //creating dressing
  const menuItemDressing = gridDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuItems", "")
  );
  menuItemDressing.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", "i", "Dressing", _pictures_Menu_dressing_jpg__WEBPACK_IMPORTED_MODULE_6__));
  const DressingTextDiv = menuItemDressing.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuText", "")
  );
  DressingTextDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", "i", "Dressing"));
  DressingTextDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "p",
      "i",
      "You want some sauce? You can choose from a dozen of options! Ketchup, mustard, chilli, we have it all!"
    )
  );
}


/***/ }),

/***/ "./src/pictures/Menu/chicken_nuggets.jpg":
/*!***********************************************!*\
  !*** ./src/pictures/Menu/chicken_nuggets.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91e900df7497325faf6c.jpg";

/***/ }),

/***/ "./src/pictures/Menu/dressing.jpg":
/*!****************************************!*\
  !*** ./src/pictures/Menu/dressing.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53087311a0872616ee75.jpg";

/***/ }),

/***/ "./src/pictures/Menu/french_fries.jpg":
/*!********************************************!*\
  !*** ./src/pictures/Menu/french_fries.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e174331d3159aadb1c6d.jpg";

/***/ }),

/***/ "./src/pictures/Menu/garlic_soup.jpg":
/*!*******************************************!*\
  !*** ./src/pictures/Menu/garlic_soup.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "814dbc044b28e521e0b4.jpg";

/***/ }),

/***/ "./src/pictures/Menu/rice.jpg":
/*!************************************!*\
  !*** ./src/pictures/Menu/rice.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "640e33e4da355c3777ec.jpg";

/***/ }),

/***/ "./src/pictures/Menu/steak.jpg":
/*!*************************************!*\
  !*** ./src/pictures/Menu/steak.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bdf80160ef04528c55e.jpg";

/***/ }),

/***/ "./src/pictures/logo.png":
/*!*******************************!*\
  !*** ./src/pictures/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "416ae5f2f861c82579bc.png";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



// displayHome();
(0,_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0I7QUFDQTtBQUNyQztBQUNBLGtEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypHZW5lcmFsIENTUyovXFxyXFxuXFxyXFxuaHRtbCxib2R5e1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDN2dztcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCA1cHggZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbiwubmF2QnV0dG9uLWFjdGl2ZXtcXHJcXG4gICAgaGVpZ2h0OiA3dmg7XFxyXFxuICAgIHdpZHRoOiAxMHZ3O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b24tYWN0aXZle1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi8qSE9NRSBwYWdlKi9cXHJcXG4ud2VsY29tZVRleHR7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuLypNRU5VIHBhZ2UqL1xcclxcbi5tZW51R3JpZHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBoZWlnaHQ6IDcwdmg7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICByb3ctZ2FwOiA1dmg7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbXN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbXM+aW1ne1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVUZXh0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVRleHQ+cHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQSxZQUFZO0FBQ1o7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkdlbmVyYWwgQ1NTKi9cXHJcXG5cXHJcXG5odG1sLGJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uQmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3Z3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDVweCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QnV0dG9uLC5uYXZCdXR0b24tYWN0aXZle1xcclxcbiAgICBoZWlnaHQ6IDd2aDtcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbi1hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLypIT01FIHBhZ2UqL1xcclxcbi53ZWxjb21lVGV4dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4vKk1FTlUgcGFnZSovXFxyXFxuLm1lbnVHcmlke1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGhlaWdodDogNzB2aDtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIHJvdy1nYXA6IDV2aDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtcz5pbWd7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVRleHR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tZW51VGV4dD5we1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgdGV4dCwgSU1Hc291cmNlKSB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0YWd9YCk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIGlmICh0YWcgIT09IFwiaW1nXCIpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc3JjID0gYCR7SU1Hc291cmNlfWA7XG4gICAgZWxlbWVudC5hbHQgPSBgJHt0ZXh0fWA7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9waWN0dXJlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgLy8gQ3JlYXRpbmcgbmF2aWdhdGlvbiBiYXJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudChcIm5hdlwiLCBcIm5hdmlnYXRpb25CYXJcIiwgXCJcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgLy9jcmVhdGluZyBidXR0b25zXG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uLWFjdGl2ZVwiLCBcIkhvbWVcIikpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm5hdkJ1dHRvblwiLCBcIk1lbnVcIikpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm5hdkJ1dHRvblwiLCBcIkNvbnRhY3RcIikpO1xuICAvL2NyZWF0aW5nIGhlYWRsaW5lXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaGVhZGxpbmVcIiwgXCJCbGFja1NjcmFwZXJcIikpO1xuICAvL2NyZWF0aW5nIGltYWdlXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNtYWxsSW1hZ2VcIiwgXCJsYW5kc2NhcGVcIiwgTG9nbykpO1xuICAvL2NyZWF0aW5nIHRleHRcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcIndlbGNvbWVUZXh0XCIsXG4gICAgICBcIldlbGNvbWUgdG8gdGhlIEJsYWNrU2NyYXBlciwgb3VyIGZvdXItc3RhciByZXN0YXVyYW50IVwiXG4gICAgKVxuICApO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwid2VsY29tZVRleHRcIixcbiAgICAgIFwiV2Ugb2ZmZXIgdGhlIGJlc3Qgc3RlYWtzIGluIHRoZSBlbnRpcmUgY291bnRyeSFcIlxuICAgIClcbiAgKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndlbGNvbWVUZXh0XCIsIFwiTWFkZSB3aXRoIHBhc3Npb24gZnJvbSAxOTY3IVwiKVxuICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgR2FybGljU291cCBmcm9tIFwiLi9waWN0dXJlcy9NZW51L2dhcmxpY19zb3VwLmpwZ1wiO1xuaW1wb3J0IFN0ZWFrIGZyb20gXCIuL3BpY3R1cmVzL01lbnUvc3RlYWsuanBnXCI7XG5pbXBvcnQgUmljZSBmcm9tIFwiLi9waWN0dXJlcy9NZW51L3JpY2UuanBnXCI7XG5pbXBvcnQgQ2hpY2tlbk51Z2dldHMgZnJvbSBcIi4vcGljdHVyZXMvTWVudS9jaGlja2VuX251Z2dldHMuanBnXCI7XG5pbXBvcnQgRnJlbmNoRnJpZXMgZnJvbSBcIi4vcGljdHVyZXMvTWVudS9mcmVuY2hfZnJpZXMuanBnXCI7XG5pbXBvcnQgRHJlc3NpbmcgZnJvbSBcIi4vcGljdHVyZXMvTWVudS9kcmVzc2luZy5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAvLyBDcmVhdGluZyBuYXZpZ2F0aW9uIGJhclxuICBjb25zdCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIsIFwibmF2aWdhdGlvbkJhclwiLCBcIlwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAvL2NyZWF0aW5nIGJ1dHRvbnNcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b25cIiwgXCJIb21lXCIpKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b24tYWN0aXZlXCIsIFwiTWVudVwiKSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uXCIsIFwiQ29udGFjdFwiKSk7XG4gIC8vY3JlYXRpbmcgaGVhZGxpbmVcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJoZWFkbGluZVwiLCBcIk1lbnVcIikpO1xuICAvL2NyZWF0aW5nIGdyaWQgZGl2XG4gIGNvbnN0IGdyaWREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUdyaWRcIiwgXCJcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XG4gIC8vY3JlYXRpbmcgR2FybGljIHNvdXBcbiAgY29uc3QgbWVudUl0ZW1HYXJsaWMgPSBncmlkRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbXNcIiwgXCJcIilcbiAgKTtcbiAgbWVudUl0ZW1HYXJsaWMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImlcIiwgXCJHYXJsaWMgc291cFwiLCBHYXJsaWNTb3VwKVxuICApO1xuICBjb25zdCBHYXJsaWNUZXh0RGl2ID0gbWVudUl0ZW1HYXJsaWMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVUZXh0XCIsIFwiXCIpXG4gICk7XG4gIEdhcmxpY1RleHREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiaVwiLCBcIkdhcmxpYyBzb3VwXCIpKTtcbiAgR2FybGljVGV4dERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcImlcIixcbiAgICAgIFwiUHJlcGFyZSB5b3Vyc2VsZiBmb3IgdGhlIGJlc3QgZ2FybGljIHNvdXAgeW91IGhhdmUgZXZlciBlYXRlbiEgTWFkZSBmcm9tIHNwZWNpYWwgaW5ncmVkaWVudHMsIHRvIG1ha2Ugc3VyZSB5b3Ugd2lsbCBlbmpveSB0aGUgdGFzdGUuXCJcbiAgICApXG4gICk7XG4gIC8vY3JlYXRpbmcgc3RlYWtcbiAgY29uc3QgbWVudUl0ZW1TdGVhayA9IGdyaWREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVJdGVtc1wiLCBcIlwiKVxuICApO1xuICBtZW51SXRlbVN0ZWFrLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpXCIsIFwiU3RlYWtcIiwgU3RlYWspKTtcbiAgY29uc3QgU3RlYWtUZXh0RGl2ID0gbWVudUl0ZW1TdGVhay5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudVRleHRcIiwgXCJcIilcbiAgKTtcbiAgU3RlYWtUZXh0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImlcIiwgXCJTdGVha1wiKSk7XG4gIFN0ZWFrVGV4dERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcImlcIixcbiAgICAgIFwiU3RlYWsgbWFkZSBmcm9tIGNoaWNrZW4hIE9uZSBvZiB0aGUgYmVzdCBzdGVha3MgeW91IHdpbGwgZWF0IGluIGEgbGlmZXRpbWUhXCJcbiAgICApXG4gICk7XG4gIC8vY3JlYXRpbmcgcmljZVxuICBjb25zdCBtZW51SXRlbVJpY2UgPSBncmlkRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbXNcIiwgXCJcIilcbiAgKTtcbiAgbWVudUl0ZW1SaWNlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpXCIsIFwiUmljZVwiLCBSaWNlKSk7XG4gIGNvbnN0IFJpY2VUZXh0RGl2ID0gbWVudUl0ZW1SaWNlLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51VGV4dFwiLCBcIlwiKVxuICApO1xuICBSaWNlVGV4dERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJpXCIsIFwiUmljZVwiKSk7XG4gIFJpY2VUZXh0RGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJFeHBvcnRlZCBmcm9tIFZpZXRuYW0sIGNvb2tlZCBpbiB0cmFkaXRpb25hbCB3YXkgdG8gbWFrZSB5b3UgYWRkaWN0ZWQhXCJcbiAgICApXG4gICk7XG4gIC8vY3JlYXRpbmcgY2hpY2tlblxuICBjb25zdCBtZW51SXRlbUNoaWNrZW4gPSBncmlkRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbXNcIiwgXCJcIilcbiAgKTtcbiAgbWVudUl0ZW1DaGlja2VuLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpXCIsIFwiQ2hpY2tlbiBudWdnZXRzXCIsIENoaWNrZW5OdWdnZXRzKVxuICApO1xuICBjb25zdCBDaGlja2VuVGV4dERpdiA9IG1lbnVJdGVtQ2hpY2tlbi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudVRleHRcIiwgXCJcIilcbiAgKTtcbiAgQ2hpY2tlblRleHREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiaVwiLCBcIkNoaWNrZW4gbnVnZ2V0c1wiKSk7XG4gIENoaWNrZW5UZXh0RGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJGb3IgY2hpbGRyZW4sIHdlIGhhdmUgY2hpY2tlbiBudWdnZXRzIHRoYXQgbmV2ZXIgZGlzYXBwb2ludCB0aGVpciB5b3VuZyBicmFpbnMuXCJcbiAgICApXG4gICk7XG4gIC8vY3JlYXRpbmcgZnJlbmNoXG4gIGNvbnN0IG1lbnVJdGVtRnJlbmNoID0gZ3JpZERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1zXCIsIFwiXCIpXG4gICk7XG4gIG1lbnVJdGVtRnJlbmNoLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpXCIsIFwiRnJlbmNoIGZyaWVzXCIsIEZyZW5jaEZyaWVzKVxuICApO1xuICBjb25zdCBGcmVuY2hUZXh0RGl2ID0gbWVudUl0ZW1GcmVuY2guYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVUZXh0XCIsIFwiXCIpXG4gICk7XG4gIEZyZW5jaFRleHREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiaVwiLCBcIkZyZW5jaCBmcmllc1wiKSk7XG4gIEZyZW5jaFRleHREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwicFwiLFxuICAgICAgXCJpXCIsXG4gICAgICBcIllvdSBkbyBub3QgbGlrZSByaWNlPyBEbyBub3Qgd29ycnkhIEZvciB0aGlzIG9jY2FzaW9uIHdlIGhhdmUgZnJlbmNoIGZyaWVzIHByZXBhcmVkIGp1c3QgZm9yIHlvdSFcIlxuICAgIClcbiAgKTtcbiAgLy9jcmVhdGluZyBkcmVzc2luZ1xuICBjb25zdCBtZW51SXRlbURyZXNzaW5nID0gZ3JpZERpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1zXCIsIFwiXCIpXG4gICk7XG4gIG1lbnVJdGVtRHJlc3NpbmcuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImlcIiwgXCJEcmVzc2luZ1wiLCBEcmVzc2luZykpO1xuICBjb25zdCBEcmVzc2luZ1RleHREaXYgPSBtZW51SXRlbURyZXNzaW5nLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51VGV4dFwiLCBcIlwiKVxuICApO1xuICBEcmVzc2luZ1RleHREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiaVwiLCBcIkRyZXNzaW5nXCIpKTtcbiAgRHJlc3NpbmdUZXh0RGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIFwiaVwiLFxuICAgICAgXCJZb3Ugd2FudCBzb21lIHNhdWNlPyBZb3UgY2FuIGNob29zZSBmcm9tIGEgZG96ZW4gb2Ygb3B0aW9ucyEgS2V0Y2h1cCwgbXVzdGFyZCwgY2hpbGxpLCB3ZSBoYXZlIGl0IGFsbCFcIlxuICAgIClcbiAgKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZGlzcGxheUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gXCIuL21lbnVcIjtcbi8vIGRpc3BsYXlIb21lKCk7XG5kaXNwbGF5TWVudSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9