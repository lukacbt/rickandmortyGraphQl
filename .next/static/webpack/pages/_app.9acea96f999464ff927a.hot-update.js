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

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Type\": function() { return /* binding */ Type; },\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Type;\n\n(function (Type) {\n  Type[\"PAGINATION\"] = \"PAGINATION\";\n  Type[\"SEARCH\"] = \"SEARCH\";\n})(Type || (Type = {}));\n\nvar useSearch = function useSearch(api) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      searchedFor = _useState3[0],\n      setSearchedFor = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    count: 0,\n    characters: []\n  }),\n      searchData = _useState4[0],\n      setSearchData = _useState4[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var fetchSearch = /*#__PURE__*/function () {\n    var _ref = (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var body, JSONdata, _yield$JSONdata$json, data;\n\n      return _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(router.query);\n              body = {\n                search: router.query.search,\n                page: Number(router.query.page)\n              };\n              _context.next = 4;\n              return fetch(api, {\n                method: \"POST\",\n                body: JSON.stringify(body)\n              });\n\n            case 4:\n              JSONdata = _context.sent;\n              _context.next = 7;\n              return JSONdata.json();\n\n            case 7:\n              _yield$JSONdata$json = _context.sent;\n              data = _yield$JSONdata$json.data;\n              setSearchData({\n                count: data.characters.info.count,\n                characters: data.characters.results\n              });\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchSearch() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetchSearch();\n  }, [router.query.search, router.query.page]);\n\n  var handleSearch = function handleSearch(page, type) {\n    if (type === Type.SEARCH) {\n      setSearchedFor(search);\n      search ? router.push(\"/?search=\".concat(search, \"&page=\").concat(page)) : router.push(\"/\");\n    }\n\n    if (type === Type.PAGINATION) {\n      router.push(\"/?search=\".concat(searchedFor, \"&page=\").concat(page));\n    }\n\n    setSearch(\"\");\n    setCurrent(page);\n  };\n\n  var handleChange = function handleChange(e) {\n    setSearch(e.target.value);\n  };\n\n  return {\n    search: search,\n    searchData: searchData,\n    handleSearch: handleSearch,\n    handleChange: handleChange,\n    searchedFor: searchedFor,\n    current: current\n  };\n};\n\n_s(useSearch, \"nJrJrKM0vv88Z6eJtoIItPT1exY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ksSUFBNUM7QUFDSDs7QUFDRGYsSUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBRSxJQUFBQSxVQUFVLENBQUNhLElBQUQsQ0FBVjtBQUNILEdBVkQ7O0FBYUEsTUFBTWdCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBc0M7QUFDdkRoQyxJQUFBQSxTQUFTLENBQUNnQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFJQSxTQUFPO0FBQ0huQyxJQUFBQSxNQUFNLEVBQU5BLE1BREc7QUFFSFEsSUFBQUEsVUFBVSxFQUFWQSxVQUZHO0FBR0htQixJQUFBQSxZQUFZLEVBQVpBLFlBSEc7QUFJSEssSUFBQUEsWUFBWSxFQUFaQSxZQUpHO0FBS0g1QixJQUFBQSxXQUFXLEVBQVhBLFdBTEc7QUFNSEYsSUFBQUEsT0FBTyxFQUFQQTtBQU5HLEdBQVA7QUFRSCxDQXpETTs7R0FBTUo7VUFRTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MudHM/ZGI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBQQUdJTkFUSU9OID0gXCJQQUdJTkFUSU9OXCIsXG4gICAgU0VBUkNIID0gXCJTRUFSQ0hcIlxufVxuXG5leHBvcnQgY29uc3QgdXNlU2VhcmNoID0gKGFwaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgWyBzZWFyY2hlZEZvciwgc2V0U2VhcmNoZWRGb3IgXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgWyBzZWFyY2hEYXRhLCBzZXRTZWFyY2hEYXRhIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICBjaGFyYWN0ZXJzOiBbXVxuICAgIH0pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGZldGNoU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFxuICAgICAgICAgICAgc2VhcmNoOiByb3V0ZXIucXVlcnkuc2VhcmNoLFxuICAgICAgICAgICAgcGFnZTogTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEpTT05kYXRhID0gYXdhaXQgZmV0Y2goYXBpLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBKU09OZGF0YS5qc29uKClcbiAgICAgICAgc2V0U2VhcmNoRGF0YSh7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5jaGFyYWN0ZXJzLmluZm8uY291bnQsXG4gICAgICAgICAgICBjaGFyYWN0ZXJzOiBkYXRhLmNoYXJhY3RlcnMucmVzdWx0c1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoU2VhcmNoKClcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LnNlYXJjaCwgcm91dGVyLnF1ZXJ5LnBhZ2VdKVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChwYWdlOiBudW1iZXIsIHR5cGU6IFR5cGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFR5cGUuU0VBUkNIKSB7XG4gICAgICAgICAgICBzZXRTZWFyY2hlZEZvcihzZWFyY2gpXG4gICAgICAgICAgICBzZWFyY2ggPyByb3V0ZXIucHVzaChgLz9zZWFyY2g9JHtzZWFyY2h9JnBhZ2U9JHtwYWdlfWApIDogcm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IFR5cGUuUEFHSU5BVElPTikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8/c2VhcmNoPSR7c2VhcmNoZWRGb3J9JnBhZ2U9JHtwYWdlfWApXG4gICAgICAgIH1cbiAgICAgICAgc2V0U2VhcmNoKFwiXCIpXG4gICAgICAgIHNldEN1cnJlbnQocGFnZSlcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBzZWFyY2hEYXRhLFxuICAgICAgICBoYW5kbGVTZWFyY2gsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgc2VhcmNoZWRGb3IsXG4gICAgICAgIGN1cnJlbnRcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiVHlwZSIsInVzZVNlYXJjaCIsImFwaSIsInNlYXJjaCIsInNldFNlYXJjaCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2VhcmNoZWRGb3IiLCJzZXRTZWFyY2hlZEZvciIsImNvdW50IiwiY2hhcmFjdGVycyIsInNlYXJjaERhdGEiLCJzZXRTZWFyY2hEYXRhIiwicm91dGVyIiwiZmV0Y2hTZWFyY2giLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJib2R5IiwicGFnZSIsIk51bWJlciIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIkpTT05kYXRhIiwianNvbiIsImRhdGEiLCJpbmZvIiwicmVzdWx0cyIsImhhbmRsZVNlYXJjaCIsInR5cGUiLCJTRUFSQ0giLCJwdXNoIiwiUEFHSU5BVElPTiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks.ts\n");

/***/ })

});