/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHome": () => (/* binding */ displayHome)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


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

function displayHome() {
  const contentDiv = document.querySelector("#content");
  // Creating navigation bar
  let navBar = createElement("nav", "navigationBar", "");
  contentDiv.appendChild(navBar);
  //creating buttons
  navBar.appendChild(createElement("button", "navButton", "Home"));
  navBar.appendChild(createElement("button", "navButton", "Menu"));
  navBar.appendChild(createElement("button", "navButton", "Contact"));
  //creating headline
  contentDiv.appendChild(createElement("h1", "headline", "BlackScraper"));
  //creating image
  contentDiv.appendChild(createElement("img", "smallImage", "landscape", Object(function webpackMissingModule() { var e = new Error("Cannot find module './logo.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
  //creating text
  contentDiv.appendChild(
    createElement(
      "p",
      "welcomeText",
      "Welcome to the BlackScraper, our four-star restaurant!"
    )
  );
  contentDiv.appendChild(
    createElement(
      "p",
      "welcomeText",
      "We offer the best steaks in the entire country!"
    )
  );
  contentDiv.appendChild(
    createElement("p", "welcomeText", "Made with passion from 1967!")
  );
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



(0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDOUI7QUFDQTtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEMsSUFBSTtBQUNKLHFCQUFxQixVQUFVO0FBQy9CLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLHlJQUFJO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2dCO0FBQ3JDO0FBQ0Esa0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nby5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIHRleHQsIElNR3NvdXJjZSkge1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0YWd9YCk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKTtcclxuICBpZiAodGFnICE9PSBcImltZ1wiKSB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LnNyYyA9IGAke0lNR3NvdXJjZX1gO1xyXG4gICAgZWxlbWVudC5hbHQgPSBgJHt0ZXh0fWA7XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAvLyBDcmVhdGluZyBuYXZpZ2F0aW9uIGJhclxyXG4gIGxldCBuYXZCYXIgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIsIFwibmF2aWdhdGlvbkJhclwiLCBcIlwiKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbiAgLy9jcmVhdGluZyBidXR0b25zXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJuYXZCdXR0b25cIiwgXCJIb21lXCIpKTtcclxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcIm5hdkJ1dHRvblwiLCBcIk1lbnVcIikpO1xyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwibmF2QnV0dG9uXCIsIFwiQ29udGFjdFwiKSk7XHJcbiAgLy9jcmVhdGluZyBoZWFkbGluZVxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgxXCIsIFwiaGVhZGxpbmVcIiwgXCJCbGFja1NjcmFwZXJcIikpO1xyXG4gIC8vY3JlYXRpbmcgaW1hZ2VcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzbWFsbEltYWdlXCIsIFwibGFuZHNjYXBlXCIsIExvZ28pKTtcclxuICAvL2NyZWF0aW5nIHRleHRcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKFxyXG4gICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgXCJwXCIsXHJcbiAgICAgIFwid2VsY29tZVRleHRcIixcclxuICAgICAgXCJXZWxjb21lIHRvIHRoZSBCbGFja1NjcmFwZXIsIG91ciBmb3VyLXN0YXIgcmVzdGF1cmFudCFcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgIFwicFwiLFxyXG4gICAgICBcIndlbGNvbWVUZXh0XCIsXHJcbiAgICAgIFwiV2Ugb2ZmZXIgdGhlIGJlc3Qgc3RlYWtzIGluIHRoZSBlbnRpcmUgY291bnRyeSFcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwid2VsY29tZVRleHRcIiwgXCJNYWRlIHdpdGggcGFzc2lvbiBmcm9tIDE5NjchXCIpXHJcbiAgKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuZGlzcGxheUhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9