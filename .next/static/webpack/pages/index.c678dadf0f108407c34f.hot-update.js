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

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar useSearch = function useSearch(api) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    count: 0,\n    characters: []\n  }),\n      searchData = _useState2[0],\n      setSearchData = _useState2[1];\n\n  var handleSearch = /*#__PURE__*/function () {\n    var _ref = (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var JSONdata, data;\n      return _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(api, {\n                method: \"POST\",\n                body: search\n              });\n\n            case 2:\n              JSONdata = _context.sent;\n              _context.next = 5;\n              return JSONdata.json();\n\n            case 5:\n              data = _context.sent;\n              setSearchData(data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSearch() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleChange = function handleChange(e) {\n    setSearch(e.target.value);\n  };\n\n  return {\n    search: search,\n    searchData: searchData,\n    handleSearch: handleSearch,\n    handleChange: handleChange\n  };\n};\n\n_s(useSearch, \"nBz/c3HcGZd5BSxkA0xHq3e2FGM=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBaUI7QUFBQTs7QUFDdEMsa0JBQThCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFRRyxNQUFSO0FBQUEsTUFBZ0JDLFNBQWhCOztBQUNBLG1CQUFzQ0osK0NBQVEsQ0FBQztBQUMzQ0ssSUFBQUEsS0FBSyxFQUFFLENBRG9DO0FBRTNDQyxJQUFBQSxVQUFVLEVBQUU7QUFGK0IsR0FBRCxDQUE5QztBQUFBLE1BQVFDLFVBQVI7QUFBQSxNQUFvQkMsYUFBcEI7O0FBS0EsTUFBTUMsWUFBWTtBQUFBLHVWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01DLEtBQUssQ0FBQ1IsR0FBRCxFQUFNO0FBQzlCUyxnQkFBQUEsTUFBTSxFQUFFLE1BRHNCO0FBRTlCQyxnQkFBQUEsSUFBSSxFQUFFVDtBQUZ3QixlQUFOLENBRFg7O0FBQUE7QUFDWFUsY0FBQUEsUUFEVztBQUFBO0FBQUEscUJBS0VBLFFBQVEsQ0FBQ0MsSUFBVCxFQUxGOztBQUFBO0FBS1hDLGNBQUFBLElBTFc7QUFNakJQLGNBQUFBLGFBQWEsQ0FBQ08sSUFBRCxDQUFiOztBQU5pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaTixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVNBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBc0M7QUFDdkRiLElBQUFBLFNBQVMsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsU0FBTztBQUNIaEIsSUFBQUEsTUFBTSxFQUFOQSxNQURHO0FBRUhJLElBQUFBLFVBQVUsRUFBVkEsVUFGRztBQUdIRSxJQUFBQSxZQUFZLEVBQVpBLFlBSEc7QUFJSE8sSUFBQUEsWUFBWSxFQUFaQTtBQUpHLEdBQVA7QUFNSCxDQTFCTTs7R0FBTWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MudHM/ZGI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgY29uc3QgdXNlU2VhcmNoID0gKGFwaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbIHNlYXJjaERhdGEsIHNldFNlYXJjaERhdGEgXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGNoYXJhY3RlcnM6IFtdXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgSlNPTmRhdGEgPSBhd2FpdCBmZXRjaChhcGksIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBzZWFyY2hcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEpTT05kYXRhLmpzb24oKVxuICAgICAgICBzZXRTZWFyY2hEYXRhKGRhdGEpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWFyY2gsXG4gICAgICAgIHNlYXJjaERhdGEsXG4gICAgICAgIGhhbmRsZVNlYXJjaCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVNlYXJjaCIsImFwaSIsInNlYXJjaCIsInNldFNlYXJjaCIsImNvdW50IiwiY2hhcmFjdGVycyIsInNlYXJjaERhdGEiLCJzZXRTZWFyY2hEYXRhIiwiaGFuZGxlU2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTmRhdGEiLCJqc29uIiwiZGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks.ts\n");

/***/ })

});