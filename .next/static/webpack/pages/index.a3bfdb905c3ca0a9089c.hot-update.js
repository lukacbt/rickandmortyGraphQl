"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/HomeWrapper.tsx":
/*!*****************************************!*\
  !*** ./components/home/HomeWrapper.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeWrapper\": function() { return /* binding */ HomeWrapper; }\n/* harmony export */ });\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context.tsx\");\n/* harmony import */ var _CharacterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacterCard */ \"./components/home/CharacterCard.tsx\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Home.module.css */ \"./components/home/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ \"./hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/luka/Desktop/practice/rickandmortyGraphQl/components/home/HomeWrapper.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar HomeWrapper = function HomeWrapper(_ref) {\n  _s();\n\n  var characters = _ref.characters,\n      count = _ref.count;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SearchContext),\n      searchData = _useContext.searchData,\n      current = _useContext.current,\n      searchedFor = _useContext.searchedFor,\n      handleSearch = _useContext.handleSearch;\n\n  var handleChange = function handleChange(page) {\n    handleSearch(page, _hooks__WEBPACK_IMPORTED_MODULE_5__.Type.PAGINATION);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [searchedFor && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h2\", {\n      children: [\"You searched for \\\"\", searchedFor, \"\\\"\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 14\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Pagination, {\n      pageSize: 20,\n      current: current,\n      showSizeChanger: false,\n      onChange: handleChange,\n      total: searchData.count ? searchData.count : count\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n      children: (searchData === null || searchData === void 0 ? void 0 : searchData.count) > 0 ? searchData.characters.map(function (ch) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CharacterCard__WEBPACK_IMPORTED_MODULE_3__.CharacterCard, _objectSpread({}, ch), ch.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 22\n        }, _this);\n      }) : characters && characters.map(function (ch) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_CharacterCard__WEBPACK_IMPORTED_MODULE_3__.CharacterCard, _objectSpread({}, ch), ch.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 22\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(HomeWrapper, \"lqN7LUMJ+F69QU9GWWsabsWjnjs=\");\n\n_c = HomeWrapper;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvSG9tZVdyYXBwZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRU8sSUFBTU0sV0FBc0IsR0FBRyxTQUF6QkEsV0FBeUIsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUM3RCxvQkFBMkRSLGlEQUFVLENBQUNDLG1EQUFELENBQXJFO0FBQUEsTUFBUVEsVUFBUixlQUFRQSxVQUFSO0FBQUEsTUFBb0JDLE9BQXBCLGVBQW9CQSxPQUFwQjtBQUFBLE1BQTZCQyxXQUE3QixlQUE2QkEsV0FBN0I7QUFBQSxNQUEwQ0MsWUFBMUMsZUFBMENBLFlBQTFDOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBa0I7QUFDckNGLElBQUFBLFlBQVksQ0FBQ0UsSUFBRCxFQUFPVCxtREFBUCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLGVBRUlNLFdBQVcsaUJBQ1I7QUFBQSx3Q0FBdUJBLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhQLGVBS0UsOERBQUMsNENBQUQ7QUFBWSxjQUFRLEVBQUUsRUFBdEI7QUFBMEIsYUFBTyxFQUFFRCxPQUFuQztBQUE0QyxxQkFBZSxFQUFFLEtBQTdEO0FBQW9FLGNBQVEsRUFBRUcsWUFBOUU7QUFBNEYsV0FBSyxFQUFFSixVQUFVLENBQUNELEtBQVgsR0FBbUJDLFVBQVUsQ0FBQ0QsS0FBOUIsR0FBc0NBO0FBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUssZUFBUyxFQUFFTCxtRUFBaEI7QUFBQSxnQkFFSSxDQUFBTSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRUQsS0FBWixJQUFvQixDQUFwQixHQUVBQyxVQUFVLENBQUNGLFVBQVgsQ0FBc0JVLEdBQXRCLENBQTBCLFVBQUNDLEVBQUQsRUFBbUI7QUFDM0MsNEJBQU8sOERBQUMseURBQUQsb0JBQStCQSxFQUEvQixHQUFvQkEsRUFBRSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGRCxDQUZBLEdBTUFaLFVBQVUsSUFFVkEsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQ0MsRUFBRCxFQUFtQjtBQUNoQyw0QkFBTyw4REFBQyx5REFBRCxvQkFBK0JBLEVBQS9CLEdBQW9CQSxFQUFFLENBQUNDLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZEO0FBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUF3QkgsQ0EvQk07O0dBQU1iOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvSG9tZVdyYXBwZXIudHN4PzQxNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRcIlxuaW1wb3J0IHsgQ2hhcmFjdGVyLCBQcm9wcyB9IGZyb20gXCIuLi8uLi9wYWdlc1wiXG5pbXBvcnQgeyBDaGFyYWN0ZXJDYXJkIH0gZnJvbSBcIi4vQ2hhcmFjdGVyQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcImFudGRcIlxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gXCIuLi8uLi9ob29rc1wiXG5cbmV4cG9ydCBjb25zdCBIb21lV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hhcmFjdGVycywgY291bnQgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoRGF0YSwgY3VycmVudCwgc2VhcmNoZWRGb3IsIGhhbmRsZVNlYXJjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgaGFuZGxlU2VhcmNoKHBhZ2UsIFR5cGUuUEFHSU5BVElPTilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge1xuICAgICAgICAgIHNlYXJjaGVkRm9yXG4gICAgICAgICAgJiYgPGgyPllvdSBzZWFyY2hlZCBmb3IgXCJ7c2VhcmNoZWRGb3J9XCI8L2gyPlxuICAgICAgICB9XG4gICAgICAgIDxQYWdpbmF0aW9uIHBhZ2VTaXplPXsyMH0gY3VycmVudD17Y3VycmVudH0gc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdG90YWw9e3NlYXJjaERhdGEuY291bnQgPyBzZWFyY2hEYXRhLmNvdW50IDogY291bnR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWFyY2hEYXRhPy5jb3VudCA+IDBcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgIHNlYXJjaERhdGEuY2hhcmFjdGVycy5tYXAoKGNoOiBDaGFyYWN0ZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxDaGFyYWN0ZXJDYXJkIGtleT17Y2guaWR9IHsuLi5jaH0gLz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgY2hhcmFjdGVycy5tYXAoKGNoOiBDaGFyYWN0ZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxDaGFyYWN0ZXJDYXJkIGtleT17Y2guaWR9IHsuLi5jaH0gLz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsIkNoYXJhY3RlckNhcmQiLCJzdHlsZXMiLCJQYWdpbmF0aW9uIiwiVHlwZSIsIkhvbWVXcmFwcGVyIiwiY2hhcmFjdGVycyIsImNvdW50Iiwic2VhcmNoRGF0YSIsImN1cnJlbnQiLCJzZWFyY2hlZEZvciIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNoYW5nZSIsInBhZ2UiLCJQQUdJTkFUSU9OIiwiY29udGFpbmVyIiwibWFwIiwiY2giLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/HomeWrapper.tsx\n");

/***/ })

});