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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchContext\": function() { return /* binding */ SearchContext; },\n/* harmony export */   \"SearchContextProvider\": function() { return /* binding */ SearchContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ \"./hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/luka/Desktop/practice/rickandmortyGraphQl/context.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar SearchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar SearchContextProvider = function SearchContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSearch = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch)(\"/api/searchCharacter\"),\n      handleSearch = _useSearch.handleSearch,\n      searchData = _useSearch.searchData,\n      search = _useSearch.search,\n      searchedFor = _useSearch.searchedFor,\n      handleChange = _useSearch.handleChange,\n      current = _useSearch.current;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SearchContext.Provider, {\n    value: {\n      handleSearch: handleSearch,\n      current: current,\n      searchedFor: searchedFor,\n      search: search,\n      handleChange: handleChange,\n      searchData: searchData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(SearchContextProvider, \"qtlz4sk+JnBOAhXTiNCyuJA2L3s=\", false, function () {\n  return [_hooks__WEBPACK_IMPORTED_MODULE_1__.useSearch];\n});\n\n_c = SearchContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLElBQU1FLGFBQWEsZ0JBQUdGLG9EQUFhLENBQU0sSUFBTixDQUFuQztBQUVBLElBQU1HLHFCQUFvQyxHQUFHLFNBQXZDQSxxQkFBdUMsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQ2xFLG1CQUFpRkgsaURBQVMsQ0FBQyxzQkFBRCxDQUExRjtBQUFBLE1BQVFJLFlBQVIsY0FBUUEsWUFBUjtBQUFBLE1BQXNCQyxVQUF0QixjQUFzQkEsVUFBdEI7QUFBQSxNQUFrQ0MsTUFBbEMsY0FBa0NBLE1BQWxDO0FBQUEsTUFBMENDLFdBQTFDLGNBQTBDQSxXQUExQztBQUFBLE1BQXVEQyxZQUF2RCxjQUF1REEsWUFBdkQ7QUFBQSxNQUFxRUMsT0FBckUsY0FBcUVBLE9BQXJFOztBQUdBLHNCQUNJLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxZQUFZLEVBQVpBLFlBQUY7QUFBZ0JLLE1BQUFBLE9BQU8sRUFBUEEsT0FBaEI7QUFBeUJGLE1BQUFBLFdBQVcsRUFBWEEsV0FBekI7QUFBc0NELE1BQUFBLE1BQU0sRUFBTkEsTUFBdEM7QUFBOENFLE1BQUFBLFlBQVksRUFBWkEsWUFBOUM7QUFBNERILE1BQUFBLFVBQVUsRUFBVkE7QUFBNUQsS0FBL0I7QUFBQSxjQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBVE07O0dBQU1EO1VBQ3dFRjs7O0tBRHhFRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0LnRzeD9jZTYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIEZDLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2VhcmNoIH0gZnJvbSBcIi4vaG9va3NcIlxuXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKVxuXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGV4dFByb3ZpZGVyOiBGQzxSZWFjdE5vZGU+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlU2VhcmNoLCBzZWFyY2hEYXRhLCBzZWFyY2gsIHNlYXJjaGVkRm9yLCBoYW5kbGVDaGFuZ2UsIGN1cnJlbnQgfSA9IHVzZVNlYXJjaChcIi9hcGkvc2VhcmNoQ2hhcmFjdGVyXCIpXG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBoYW5kbGVTZWFyY2gsIGN1cnJlbnQsIHNlYXJjaGVkRm9yLCBzZWFyY2gsIGhhbmRsZUNoYW5nZSwgc2VhcmNoRGF0YSB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVNlYXJjaCIsIlNlYXJjaENvbnRleHQiLCJTZWFyY2hDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImhhbmRsZVNlYXJjaCIsInNlYXJjaERhdGEiLCJzZWFyY2giLCJzZWFyY2hlZEZvciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context.tsx\n");

/***/ })

});