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
___CSS_LOADER_EXPORT___.push([module.id, "/*General CSS*/\r\n\r\nhtml,body{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgray;\r\n}\r\n\r\n.navigationBar{\r\n    background-color: gray;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 10vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n    gap: 3vw;\r\n    box-shadow: 0 0 8px 5px gray;\r\n}\r\n\r\n.navButton,.navButton-active{\r\n    height: 7vh;\r\n    width: 10vw;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.navButton-active{\r\n    color: red;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n/*HOME page*/\r\n.welcomeText{\r\n    margin-bottom: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n/*MENU page*/\r\n.menuGrid{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    height: 70vh;\r\n    width: 90vw;\r\n    row-gap: 5vh;\r\n    column-gap: 10vw;\r\n}\r\n\r\n.menuItems{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid black;\r\n    height: 30vh;\r\n    border-radius: 5px;\r\n    background-color: slategray;\r\n    box-shadow: 0 0 8px 1px black;\r\n}\r\n\r\n.menuItems>img{\r\n    width: clamp(5vw, 10vw, 15vw);\r\n    height: clamp(5vw, 10vw, 15vw);\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    margin-left: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.menuText{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menuText>p{\r\n    overflow: hidden;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,YAAY;IACZ,aAAa;IACb,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,QAAQ;IACR,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA,YAAY;AACZ;IACI,oBAAoB;IACpB,iBAAiB;AACrB;AACA,YAAY;AACZ;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;IAC9B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["/*General CSS*/\r\n\r\nhtml,body{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: lightgray;\r\n}\r\n\r\n.navigationBar{\r\n    background-color: gray;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 10vh;\r\n    width: 100vw;\r\n    justify-content: center;\r\n    gap: 3vw;\r\n    box-shadow: 0 0 8px 5px gray;\r\n}\r\n\r\n.navButton,.navButton-active{\r\n    height: 7vh;\r\n    width: 10vw;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.navButton-active{\r\n    color: red;\r\n}\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nh1{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\r\n/*HOME page*/\r\n.welcomeText{\r\n    margin-bottom: -1rem;\r\n    font-size: 1.1rem;\r\n}\r\n/*MENU page*/\r\n.menuGrid{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    height: 70vh;\r\n    width: 90vw;\r\n    row-gap: 5vh;\r\n    column-gap: 10vw;\r\n}\r\n\r\n.menuItems{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 2px solid black;\r\n    height: 30vh;\r\n    border-radius: 5px;\r\n    background-color: slategray;\r\n    box-shadow: 0 0 8px 1px black;\r\n}\r\n\r\n.menuItems>img{\r\n    width: clamp(5vw, 10vw, 15vw);\r\n    height: clamp(5vw, 10vw, 15vw);\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    margin-left: 5px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.menuText{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menuText>p{\r\n    overflow: hidden;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContact": () => (/* binding */ displayContact)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/elementCreator.js");


function displayContact() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  const navBar = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton", "Home"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton", "Menu"));
  navBar.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", "navButton-active", "Contact"));
  //creating headline
  contentDiv.appendChild((0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", "headline", "Contact us"));
  //creating text
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "welcomeText", "Our contact details:")
  );
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "welcomeText", "Phone number: 123-456-7890")
  );
  contentDiv.appendChild(
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", "welcomeText", "Email: example@gmoil.com")
  );
}


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
  if (className === "navButton-active") {
    element.classList.add("navButton");
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const UILogic = (() => {
  const div = document.getElementById("content");
  const deleteUI = () => {
    div.replaceChildren();
  };
  const createHome = () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHome)();
    checkButtons();
  };
  const createMenu = () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();
    checkButtons();
  };
  const createContact = () => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.displayContact)();
    checkButtons();
  };

  return { deleteUI, createHome, createMenu, createContact };
})();

function checkButtons() {
  const buttons = document.querySelectorAll(".navButton");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.textContent) {
        case "Home":
          UILogic.deleteUI();
          UILogic.createHome();
          break;
        case "Menu":
          UILogic.deleteUI();
          UILogic.createMenu();
          break;
        case "Contact":
          UILogic.deleteUI();
          UILogic.createContact();
          break;
      }
    });
  });
}

(0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHome)();
checkButtons();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxrREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGtEQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKkdlbmVyYWwgQ1NTKi9cXHJcXG5cXHJcXG5odG1sLGJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uQmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3Z3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDVweCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QnV0dG9uLC5uYXZCdXR0b24tYWN0aXZle1xcclxcbiAgICBoZWlnaHQ6IDd2aDtcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbi1hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLypIT01FIHBhZ2UqL1xcclxcbi53ZWxjb21lVGV4dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4vKk1FTlUgcGFnZSovXFxyXFxuLm1lbnVHcmlke1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGhlaWdodDogNzB2aDtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIHJvdy1nYXA6IDV2aDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtcz5pbWd7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg1dncsIDEwdncsIDE1dncpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDV2dywgMTB2dywgMTV2dyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVUZXh0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVRleHQ+cHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQSxZQUFZO0FBQ1o7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkdlbmVyYWwgQ1NTKi9cXHJcXG5cXHJcXG5odG1sLGJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uQmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3Z3O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDVweCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QnV0dG9uLC5uYXZCdXR0b24tYWN0aXZle1xcclxcbiAgICBoZWlnaHQ6IDd2aDtcXHJcXG4gICAgd2lkdGg6IDEwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbi1hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLypIT01FIHBhZ2UqL1xcclxcbi53ZWxjb21lVGV4dHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4vKk1FTlUgcGFnZSovXFxyXFxuLm1lbnVHcmlke1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGhlaWdodDogNzB2aDtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIHJvdy1nYXA6IDV2aDtcXHJcXG4gICAgY29sdW1uLWdhcDogMTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtcz5pbWd7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg1dncsIDEwdncsIDE1dncpO1xcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDV2dywgMTB2dywgMTV2dyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVUZXh0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVRleHQ+cHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgLy8gQ3JlYXRpbmcgbmF2aWdhdGlvbiBiYXJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudChcIm5hdlwiLCBcIm5hdmlnYXRpb25CYXJcIiwgXCJcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgLy9jcmVhdGluZyBidXR0b25zXG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uXCIsIFwiSG9tZVwiKSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uXCIsIFwiTWVudVwiKSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uLWFjdGl2ZVwiLCBcIkNvbnRhY3RcIikpO1xuICAvL2NyZWF0aW5nIGhlYWRsaW5lXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaGVhZGxpbmVcIiwgXCJDb250YWN0IHVzXCIpKTtcbiAgLy9jcmVhdGluZyB0ZXh0XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3ZWxjb21lVGV4dFwiLCBcIk91ciBjb250YWN0IGRldGFpbHM6XCIpXG4gICk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3ZWxjb21lVGV4dFwiLCBcIlBob25lIG51bWJlcjogMTIzLTQ1Ni03ODkwXCIpXG4gICk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3ZWxjb21lVGV4dFwiLCBcIkVtYWlsOiBleGFtcGxlQGdtb2lsLmNvbVwiKVxuICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQsIElNR3NvdXJjZSkge1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0YWd9YCk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcclxuICBpZiAodGFnICE9PSBcImltZ1wiKSB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LnNyYyA9IGAke0lNR3NvdXJjZX1gO1xyXG4gICAgZWxlbWVudC5hbHQgPSBgJHt0ZXh0fWA7XHJcbiAgfVxyXG4gIGlmIChjbGFzc05hbWUgPT09IFwibmF2QnV0dG9uLWFjdGl2ZVwiKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBMb2dvIGZyb20gXCIuL3BpY3R1cmVzL2xvZ28ucG5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgLy8gQ3JlYXRpbmcgbmF2aWdhdGlvbiBiYXJcclxuICBjb25zdCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIsIFwibmF2aWdhdGlvbkJhclwiLCBcIlwiKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbiAgLy9jcmVhdGluZyBidXR0b25zXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b24tYWN0aXZlXCIsIFwiSG9tZVwiKSk7XHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b25cIiwgXCJNZW51XCIpKTtcclxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm5hdkJ1dHRvblwiLCBcIkNvbnRhY3RcIikpO1xyXG4gIC8vY3JlYXRpbmcgaGVhZGxpbmVcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImhlYWRsaW5lXCIsIFwiQmxhY2tTY3JhcGVyXCIpKTtcclxuICAvL2NyZWF0aW5nIGltYWdlXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwic21hbGxJbWFnZVwiLCBcImxhbmRzY2FwZVwiLCBMb2dvKSk7XHJcbiAgLy9jcmVhdGluZyB0ZXh0XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwicFwiLFxyXG4gICAgICBcIndlbGNvbWVUZXh0XCIsXHJcbiAgICAgIFwiV2VsY29tZSB0byB0aGUgQmxhY2tTY3JhcGVyLCBvdXIgZm91ci1zdGFyIHJlc3RhdXJhbnQhXCJcclxuICAgIClcclxuICApO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICBcInBcIixcclxuICAgICAgXCJ3ZWxjb21lVGV4dFwiLFxyXG4gICAgICBcIldlIG9mZmVyIHRoZSBiZXN0IHN0ZWFrcyBpbiB0aGUgZW50aXJlIGNvdW50cnkhXCJcclxuICAgIClcclxuICApO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndlbGNvbWVUZXh0XCIsIFwiTWFkZSB3aXRoIHBhc3Npb24gZnJvbSAxOTY3IVwiKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XHJcbmltcG9ydCBHYXJsaWNTb3VwIGZyb20gXCIuL3BpY3R1cmVzL01lbnUvZ2FybGljX3NvdXAuanBnXCI7XHJcbmltcG9ydCBTdGVhayBmcm9tIFwiLi9waWN0dXJlcy9NZW51L3N0ZWFrLmpwZ1wiO1xyXG5pbXBvcnQgUmljZSBmcm9tIFwiLi9waWN0dXJlcy9NZW51L3JpY2UuanBnXCI7XHJcbmltcG9ydCBDaGlja2VuTnVnZ2V0cyBmcm9tIFwiLi9waWN0dXJlcy9NZW51L2NoaWNrZW5fbnVnZ2V0cy5qcGdcIjtcclxuaW1wb3J0IEZyZW5jaEZyaWVzIGZyb20gXCIuL3BpY3R1cmVzL01lbnUvZnJlbmNoX2ZyaWVzLmpwZ1wiO1xyXG5pbXBvcnQgRHJlc3NpbmcgZnJvbSBcIi4vcGljdHVyZXMvTWVudS9kcmVzc2luZy5qcGdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIC8vIENyZWF0aW5nIG5hdmlnYXRpb24gYmFyXHJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudChcIm5hdlwiLCBcIm5hdmlnYXRpb25CYXJcIiwgXCJcIik7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG4gIC8vY3JlYXRpbmcgYnV0dG9uc1xyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uXCIsIFwiSG9tZVwiKSk7XHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b24tYWN0aXZlXCIsIFwiTWVudVwiKSk7XHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b25cIiwgXCJDb250YWN0XCIpKTtcclxuICAvL2NyZWF0aW5nIGhlYWRsaW5lXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJoZWFkbGluZVwiLCBcIk1lbnVcIikpO1xyXG4gIC8vY3JlYXRpbmcgZ3JpZCBkaXZcclxuICBjb25zdCBncmlkRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVHcmlkXCIsIFwiXCIpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ3JpZERpdik7XHJcbiAgLy9jcmVhdGluZyBHYXJsaWMgc291cFxyXG4gIGNvbnN0IG1lbnVJdGVtR2FybGljID0gZ3JpZERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51SXRlbXNcIiwgXCJcIilcclxuICApO1xyXG4gIG1lbnVJdGVtR2FybGljLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImlcIiwgXCJHYXJsaWMgc291cFwiLCBHYXJsaWNTb3VwKVxyXG4gICk7XHJcbiAgY29uc3QgR2FybGljVGV4dERpdiA9IG1lbnVJdGVtR2FybGljLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVUZXh0XCIsIFwiXCIpXHJcbiAgKTtcclxuICBHYXJsaWNUZXh0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImlcIiwgXCJHYXJsaWMgc291cFwiKSk7XHJcbiAgR2FybGljVGV4dERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwicFwiLFxyXG4gICAgICBcImlcIixcclxuICAgICAgXCJQcmVwYXJlIHlvdXJzZWxmIGZvciB0aGUgYmVzdCBnYXJsaWMgc291cCB5b3UgaGF2ZSBldmVyIGVhdGVuISBNYWRlIGZyb20gc3BlY2lhbCBpbmdyZWRpZW50cywgdG8gbWFrZSBzdXJlIHlvdSB3aWxsIGVuam95IHRoZSB0YXN0ZS5cIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgLy9jcmVhdGluZyBzdGVha1xyXG4gIGNvbnN0IG1lbnVJdGVtU3RlYWsgPSBncmlkRGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVJdGVtc1wiLCBcIlwiKVxyXG4gICk7XHJcbiAgbWVudUl0ZW1TdGVhay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaVwiLCBcIlN0ZWFrXCIsIFN0ZWFrKSk7XHJcbiAgY29uc3QgU3RlYWtUZXh0RGl2ID0gbWVudUl0ZW1TdGVhay5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51VGV4dFwiLCBcIlwiKVxyXG4gICk7XHJcbiAgU3RlYWtUZXh0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImlcIiwgXCJTdGVha1wiKSk7XHJcbiAgU3RlYWtUZXh0RGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJwXCIsXHJcbiAgICAgIFwiaVwiLFxyXG4gICAgICBcIlN0ZWFrIG1hZGUgZnJvbSBjaGlja2VuISBPbmUgb2YgdGhlIGJlc3Qgc3RlYWtzIHlvdSB3aWxsIGVhdCBpbiBhIGxpZmV0aW1lIVwiXHJcbiAgICApXHJcbiAgKTtcclxuICAvL2NyZWF0aW5nIHJpY2VcclxuICBjb25zdCBtZW51SXRlbVJpY2UgPSBncmlkRGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVJdGVtc1wiLCBcIlwiKVxyXG4gICk7XHJcbiAgbWVudUl0ZW1SaWNlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpXCIsIFwiUmljZVwiLCBSaWNlKSk7XHJcbiAgY29uc3QgUmljZVRleHREaXYgPSBtZW51SXRlbVJpY2UuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudVRleHRcIiwgXCJcIilcclxuICApO1xyXG4gIFJpY2VUZXh0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImlcIiwgXCJSaWNlXCIpKTtcclxuICBSaWNlVGV4dERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwicFwiLFxyXG4gICAgICBcImlcIixcclxuICAgICAgXCJFeHBvcnRlZCBmcm9tIFZpZXRuYW0sIGNvb2tlZCBpbiB0cmFkaXRpb25hbCB3YXkgdG8gbWFrZSB5b3UgYWRkaWN0ZWQhXCJcclxuICAgIClcclxuICApO1xyXG4gIC8vY3JlYXRpbmcgY2hpY2tlblxyXG4gIGNvbnN0IG1lbnVJdGVtQ2hpY2tlbiA9IGdyaWREaXYuYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWVudUl0ZW1zXCIsIFwiXCIpXHJcbiAgKTtcclxuICBtZW51SXRlbUNoaWNrZW4uYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaVwiLCBcIkNoaWNrZW4gbnVnZ2V0c1wiLCBDaGlja2VuTnVnZ2V0cylcclxuICApO1xyXG4gIGNvbnN0IENoaWNrZW5UZXh0RGl2ID0gbWVudUl0ZW1DaGlja2VuLmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVUZXh0XCIsIFwiXCIpXHJcbiAgKTtcclxuICBDaGlja2VuVGV4dERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJpXCIsIFwiQ2hpY2tlbiBudWdnZXRzXCIpKTtcclxuICBDaGlja2VuVGV4dERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwicFwiLFxyXG4gICAgICBcImlcIixcclxuICAgICAgXCJGb3IgY2hpbGRyZW4sIHdlIGhhdmUgY2hpY2tlbiBudWdnZXRzIHRoYXQgbmV2ZXIgZGlzYXBwb2ludCB0aGVpciB5b3VuZyBicmFpbnMuXCJcclxuICAgIClcclxuICApO1xyXG4gIC8vY3JlYXRpbmcgZnJlbmNoXHJcbiAgY29uc3QgbWVudUl0ZW1GcmVuY2ggPSBncmlkRGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVJdGVtc1wiLCBcIlwiKVxyXG4gICk7XHJcbiAgbWVudUl0ZW1GcmVuY2guYXBwZW5kQ2hpbGQoXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaVwiLCBcIkZyZW5jaCBmcmllc1wiLCBGcmVuY2hGcmllcylcclxuICApO1xyXG4gIGNvbnN0IEZyZW5jaFRleHREaXYgPSBtZW51SXRlbUZyZW5jaC5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51VGV4dFwiLCBcIlwiKVxyXG4gICk7XHJcbiAgRnJlbmNoVGV4dERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJpXCIsIFwiRnJlbmNoIGZyaWVzXCIpKTtcclxuICBGcmVuY2hUZXh0RGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJwXCIsXHJcbiAgICAgIFwiaVwiLFxyXG4gICAgICBcIllvdSBkbyBub3QgbGlrZSByaWNlPyBEbyBub3Qgd29ycnkhIEZvciB0aGlzIG9jY2FzaW9uIHdlIGhhdmUgZnJlbmNoIGZyaWVzIHByZXBhcmVkIGp1c3QgZm9yIHlvdSFcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgLy9jcmVhdGluZyBkcmVzc2luZ1xyXG4gIGNvbnN0IG1lbnVJdGVtRHJlc3NpbmcgPSBncmlkRGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVJdGVtc1wiLCBcIlwiKVxyXG4gICk7XHJcbiAgbWVudUl0ZW1EcmVzc2luZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaVwiLCBcIkRyZXNzaW5nXCIsIERyZXNzaW5nKSk7XHJcbiAgY29uc3QgRHJlc3NpbmdUZXh0RGl2ID0gbWVudUl0ZW1EcmVzc2luZy5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51VGV4dFwiLCBcIlwiKVxyXG4gICk7XHJcbiAgRHJlc3NpbmdUZXh0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcImlcIiwgXCJEcmVzc2luZ1wiKSk7XHJcbiAgRHJlc3NpbmdUZXh0RGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJwXCIsXHJcbiAgICAgIFwiaVwiLFxyXG4gICAgICBcIllvdSB3YW50IHNvbWUgc2F1Y2U/IFlvdSBjYW4gY2hvb3NlIGZyb20gYSBkb3plbiBvZiBvcHRpb25zISBLZXRjaHVwLCBtdXN0YXJkLCBjaGlsbGksIHdlIGhhdmUgaXQgYWxsIVwiXHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGRpc3BsYXlIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgZGlzcGxheU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgVUlMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgZGVsZXRlVUkgPSAoKSA9PiB7XG4gICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICB9O1xuICBjb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICAgIGRpc3BsYXlIb21lKCk7XG4gICAgY2hlY2tCdXR0b25zKCk7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgZGlzcGxheU1lbnUoKTtcbiAgICBjaGVja0J1dHRvbnMoKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICBkaXNwbGF5Q29udGFjdCgpO1xuICAgIGNoZWNrQnV0dG9ucygpO1xuICB9O1xuXG4gIHJldHVybiB7IGRlbGV0ZVVJLCBjcmVhdGVIb21lLCBjcmVhdGVNZW51LCBjcmVhdGVDb250YWN0IH07XG59KSgpO1xuXG5mdW5jdGlvbiBjaGVja0J1dHRvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkJ1dHRvblwiKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN3aXRjaCAoYnRuLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgVUlMb2dpYy5kZWxldGVVSSgpO1xuICAgICAgICAgIFVJTG9naWMuY3JlYXRlSG9tZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgIFVJTG9naWMuZGVsZXRlVUkoKTtcbiAgICAgICAgICBVSUxvZ2ljLmNyZWF0ZU1lbnUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICBVSUxvZ2ljLmRlbGV0ZVVJKCk7XG4gICAgICAgICAgVUlMb2dpYy5jcmVhdGVDb250YWN0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5kaXNwbGF5SG9tZSgpO1xuY2hlY2tCdXR0b25zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=