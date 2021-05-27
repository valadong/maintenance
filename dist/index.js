/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar body = document.querySelector(\"body\");\nvar h1 = document.querySelector(\"h1\");\nvar modal = document.querySelector(\"#modal\");\nvar modalContent = document.querySelector(\".modalContent\");\nvar table = document.getElementById(\"resizeMe\");\nvar tbody = document.querySelector(\"tbody\"); // Query all headers\n\nvar cols = table.querySelectorAll(\"th\"); // // let x, y, w, h;\n// // table.addEventListener(\"mousedown\", (e) => {\n// //   e.preventDefault();\n// //   console.log(e.target.tagName);\n// //   const style = window.getComputedStyle(e.target);\n// //   x = e.clientX;\n// //   y = e.clientY;\n// //   w = parseInt(style.width, 10);\n// //   h = parseInt(style.height, 10);\n// //   console.log(style.width);\n// //   console.log(x, y, w, h);\n// //   console.log(e.target);\n// //   table.addEventListener(\"mousemove\", mouseMove);\n// //   table.addEventListener(\"mouseup\", mouseUp);\n// // });\n// // function mouseMove(e) {\n// //   const dx = e.clientX - x;\n// //   //const dy = e.clientY - y;\n// //   console.log(`mouseMove => dx: ${dx}, clientX:${e.clientX},x:${x} `);\n// //   e.target.style.width = `${w + dx}px`;\n// //   //reSizeUnit.style.height = `${h + dy}px`;\n// //   console.log(`resizeWidth ${e.target.style.width}, ${e.target.style.heigth}`);\n// // }\n// // function mouseUp() {\n// //   table.removeEventListener(\"mousemove\", mouseMove);\n// //   table.removeEventListener(\"mouseup\", mouseUp);\n// // }\n// // h1.addEventListener(\"click\", (e) => {\n// //   e.preventDefault();\n// //   modal.style.display = \"block\";\n// //   h1.innerHTML = \"ecnanetniaM\";\n// //   modal.addEventListener(\"click\", (e) => {\n// //     e.preventDefault();\n// //     // if (e.target.tagName === \"BUTTON\") {\n// //     //   modal.style.display = \"none\";\n// //     // }\n// //     if (e.target.classList.value === \"save\") {\n// //       console.log(modal.children[0].children[0].value);\n// //       modal.style.display = \"none\";\n// //       console.log(\"save\");\n// //     } else if (e.target.tagName === \"BUTTON\") {\n// //       modal.style.display = \"none\";\n// //       console.log(\"un\");\n// //     }\n// //   });\n// // });\n// console.log(h1.textContent);\n// const h2 = document.createElement(\"h2\");\n// const h3 = document.querySelector(\"h3\");\n// h2.textContent = \"h2\";\n// body.prepend(h2);\n// h3.addEventListener(\"click\", (e) => {\n//   e.preventDefault();\n//   h2.classList.toggle(\"vision\");\n// });\n// const fragment = new DocumentFragment();\n// const tr = document.createElement(\"tr\");\n// const td = document.createElement(\"td\");\n// td.textContent = \"hell\";\n// tr.appendChild(td);\n// fragment.appendChild(tr);\n// tbody.appendChild(fragment);\n// const h4 = document.querySelector(\"h4\");\n// const startDate = \"1617235200000\";\n// h4.textContent = Math.floor((Date.now() - startDate) / 86400000) + \" ago\";\n// // function reNam(select, name) {\n// //   const rename = document.querySelector(select);\n// //   const dataSet = rename.dataset.mainName;\n// //   console.log(dataSet);\n// // }\n// // const div = document.createElement(\"div\");\n// // div.innerHTML = `<div id=\"modal\">\n// // <div class=\"modalContent\">\n// // <input type=\"text\" placeholder=\"name\" value=\"name\" />\n// // <br />\n// // <button>save</button>\n// // <button>cancel</button>\n// // </div>\n// // </div>`;\n// // body.appendChild(div);\n// // const inputTest = document.querySelector(\"#inputTest\");\n// // document.body.addEventListener(\"click\", (e) => {\n// //   if (e.target.tagName === \"BUTTON\") {\n// //     console.log(inputTest.value);\n// //   }\n// // });\n// window.onload = function () {\n//   (function () {\n//     var col_element,\n//       next_element,\n//       cursorStart = 0,\n//       dragStart = false,\n//       width,\n//       height,\n//       th_width,\n//       next_width = undefined,\n//       next_height,\n//       resize,\n//       resize_left,\n//       table_wt,\n//       resizeCheck;\n//     var container = document.getElementById(\"container\"),\n//       table = document.getElementById(\"table_resize\"),\n//       table_th = table.getElementsByTagName(\"th\"),\n//       bodyRect = document.body.getBoundingClientRect();\n//     container.style.position = \"relative\";\n//     function mouseDown() {\n//       resize = this;\n//       resizeCheck = resize.classList.contains(\"y_resize\");\n//       var col_index = parseInt(resize.getAttribute(\"data-resizecol\")) - 1;\n//       col_element = table_th[col_index];\n//       next_element = table_th[col_index + 1];\n//       dragStart = true;\n//       cursorStart = resizeCheck ? event.pageX : event.pageY;\n//       var elm_bound = col_element.getBoundingClientRect();\n//       width = elm_bound.width;\n//       table_wt = table.offsetWidth;\n//       if (next_element != undefined) {\n//         var next_bound = next_element.getBoundingClientRect();\n//         next_width = next_bound.width;\n//       }\n//       resize_left = this.getBoundingClientRect().left - bodyRect.left;\n//     }\n//     function mouseMove() {\n//       if (dragStart) {\n//         var cursorPosition = resizeCheck ? event.pageX : event.pageY;\n//         var mouseMoved = cursorPosition - cursorStart;\n//         var newLeft = resize_left + mouseMoved;\n//         var newWidth = width + mouseMoved;\n//         var new_nextWidth, new_nextHeight;\n//         if (next_element != undefined) {\n//           new_nextWidth = next_width - mouseMoved;\n//         }\n//         if (\n//           newWidth > 30 &&\n//           (new_nextWidth > 30 || next_element == undefined)\n//         ) {\n//           col_element.style.cssText = \"width: \" + newWidth + \"px;\";\n//           if (next_element != undefined) {\n//             next_element.style.cssText = \"width: \" + new_nextWidth + \"px\";\n//           } else {\n//             table.style.width = table_wt + mouseMoved + \"px\";\n//           }\n//           resize.style.cssText = \"left: \" + newLeft + \"px;\";\n//         }\n//       }\n//     }\n//     function mouseUp() {\n//       if (dragStart) {\n//         dragStart = false;\n//       }\n//     }\n//     function initEvents(table_th) {\n//       var tb_resize = container.getElementsByClassName(\"tb_resize\");\n//       var th_length = table_th.length;\n//       for (var i = 0; i < th_length; i++) {\n//         document.body.addEventListener(\"mousemove\", mouseMove);\n//         tb_resize[i].addEventListener(\"mousedown\", mouseDown);\n//         tb_resize[i].addEventListener(\"mouseup\", mouseUp);\n//         table_th[i].style.width = th_width + \"px\";\n//       }\n//     }\n//     function setTdWidth() {\n//       var elm_bound = table.getBoundingClientRect();\n//       var table_wt = elm_bound.width;\n//       var th_length = table_th.length;\n//       th_width = table_wt / th_length;\n//     }\n//     function createResizeDiv() {\n//       var cont = document.getElementById(\"container\");\n//       var th_length = table_th.length;\n//       for (var i = 1; i <= th_length; i++) {\n//         var yDiv = document.createElement(\"div\");\n//         yDiv.className = \"y_resize tb_resize\";\n//         yDiv.setAttribute(\"data-resizecol\", i);\n//         var leftPos = i * th_width + 0.5;\n//         yDiv.style.cssText = \"left: \" + leftPos + \"px;\";\n//         cont.append(yDiv);\n//       }\n//     }\n//     setTdWidth(table);\n//     createResizeDiv();\n//     initEvents(table_th);\n//   })();\n// };\n\n//# sourceURL=webpack://ownquery/./src/app.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ownquery/./src/style.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;