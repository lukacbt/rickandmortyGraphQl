"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context.tsx":
/*!*********************!*\
  !*** ./context.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchContext\": function() { return /* binding */ SearchContext; },\n/* harmony export */   \"SearchContextProvider\": function() { return /* binding */ SearchContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ \"./hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/luka/Desktop/practice/rickandmortyGraphQl/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar SearchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar SearchContextProvider = function SearchContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch)(\"/api/searchCharacter\"),\n      handleSearch = _useSearch.handleSearch,\n      searchData = _useSearch.searchData,\n      search = _useSearch.search,\n      searchedFor = _useSearch.searchedFor,\n      handleChange = _useSearch.handleChange;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SearchContext.Provider, {\n    value: {\n      handleSearch: handleSearch,\n      searchedFor: searchedFor,\n      search: search,\n      handleChange: handleChange,\n      searchData: searchData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SearchContextProvider, \"Wro940EYfMaHAN9IS3Yfe/30xoM=\", false, function () {\n  return [_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch];\n});\n\n_c = SearchContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLElBQU1FLGFBQWEsZ0JBQUdGLG9EQUFhLENBQU0sSUFBTixDQUFuQztBQUVBLElBQU1HLHFCQUFvQyxHQUFHLFNBQXZDQSxxQkFBdUMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ2xFLG1CQUF3RUgsaURBQVMsQ0FBQyxzQkFBRCxDQUFqRjtBQUFBLE1BQVFJLFlBQVIsY0FBUUEsWUFBUjtBQUFBLE1BQXNCQyxVQUF0QixjQUFzQkEsVUFBdEI7QUFBQSxNQUFrQ0MsTUFBbEMsY0FBa0NBLE1BQWxDO0FBQUEsTUFBMENDLFdBQTFDLGNBQTBDQSxXQUExQztBQUFBLE1BQXVEQyxZQUF2RCxjQUF1REEsWUFBdkQ7O0FBR0Esc0JBQ0ksOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVKLE1BQUFBLFlBQVksRUFBWkEsWUFBRjtBQUFnQkcsTUFBQUEsV0FBVyxFQUFYQSxXQUFoQjtBQUE2QkQsTUFBQUEsTUFBTSxFQUFOQSxNQUE3QjtBQUFxQ0UsTUFBQUEsWUFBWSxFQUFaQSxZQUFyQztBQUFtREgsTUFBQUEsVUFBVSxFQUFWQTtBQUFuRCxLQUEvQjtBQUFBLGNBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FUTTs7R0FBTUQ7VUFDK0RGOzs7S0FEL0RFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQudHN4P2NlNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWFyY2ggfSBmcm9tIFwiLi9ob29rc1wiXG5cbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpXG5cbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0UHJvdmlkZXI6IEZDPFJlYWN0Tm9kZT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVTZWFyY2gsIHNlYXJjaERhdGEsIHNlYXJjaCwgc2VhcmNoZWRGb3IsIGhhbmRsZUNoYW5nZSB9ID0gdXNlU2VhcmNoKFwiL2FwaS9zZWFyY2hDaGFyYWN0ZXJcIilcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGhhbmRsZVNlYXJjaCwgc2VhcmNoZWRGb3IsIHNlYXJjaCwgaGFuZGxlQ2hhbmdlLCBzZWFyY2hEYXRhIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU2VhcmNoIiwiU2VhcmNoQ29udGV4dCIsIlNlYXJjaENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoRGF0YSIsInNlYXJjaCIsInNlYXJjaGVkRm9yIiwiaGFuZGxlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context.tsx\n");

/***/ })

});