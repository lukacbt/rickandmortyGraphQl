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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Type\": function() { return /* binding */ Type; },\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Type;\n\n(function (Type) {\n  Type[\"PAGINATION\"] = \"PAGINATION\";\n  Type[\"SEARCH\"] = \"SEARCH\";\n})(Type || (Type = {}));\n\nvar useSearch = function useSearch(api) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      searchedFor = _useState3[0],\n      setSearchedFor = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    count: 0,\n    characters: []\n  }),\n      searchData = _useState4[0],\n      setSearchData = _useState4[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var fetchSearch = /*#__PURE__*/function () {\n    var _ref = (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var body, JSONdata, _yield$JSONdata$json, data;\n\n      return _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              body = {\n                search: search,\n                page: 1\n              };\n              _context.next = 3;\n              return fetch(api, {\n                method: \"POST\",\n                body: JSON.stringify(body)\n              });\n\n            case 3:\n              JSONdata = _context.sent;\n              _context.next = 6;\n              return JSONdata.json();\n\n            case 6:\n              _yield$JSONdata$json = _context.sent;\n              data = _yield$JSONdata$json.data;\n              setSearchData({\n                count: data.characters.info.count,\n                characters: data.characters.results\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchSearch() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetchSearch();\n  }, [router.query.search]);\n\n  var handleSearch = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(page, type) {\n      return _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (type === Type.SEARCH) {\n                setSearchedFor(search);\n                router.push(\"/?search=\".concat(search));\n              }\n\n              if (type === Type.PAGINATION) {\n                router.push(\"/?search=\".concat(searchedFor, \"&page=\").concat(page));\n              }\n\n              setSearch(\"\");\n              setCurrent(page);\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSearch(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleChange = function handleChange(e) {\n    setSearch(e.target.value);\n  };\n\n  return {\n    search: search,\n    searchData: searchData,\n    handleSearch: handleSearch,\n    handleChange: handleChange,\n    searchedFor: searchedFor,\n    current: current\n  };\n};\n\n_s(useSearch, \"nJrJrKM0vv88Z6eJtoIItPT1exY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0M7QUFDdkQ3QixJQUFBQSxTQUFTLENBQUM2QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0gsR0FGRDs7QUFJQSxTQUFPO0FBQ0hoQyxJQUFBQSxNQUFNLEVBQU5BLE1BREc7QUFFSFEsSUFBQUEsVUFBVSxFQUFWQSxVQUZHO0FBR0hnQixJQUFBQSxZQUFZLEVBQVpBLFlBSEc7QUFJSEssSUFBQUEsWUFBWSxFQUFaQSxZQUpHO0FBS0h6QixJQUFBQSxXQUFXLEVBQVhBLFdBTEc7QUFNSEYsSUFBQUEsT0FBTyxFQUFQQTtBQU5HLEdBQVA7QUFRSCxDQXJETTs7R0FBTUo7VUFRTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MudHM/ZGI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgICBQQUdJTkFUSU9OID0gXCJQQUdJTkFUSU9OXCIsXG4gICAgU0VBUkNIID0gXCJTRUFSQ0hcIlxufVxuXG5leHBvcnQgY29uc3QgdXNlU2VhcmNoID0gKGFwaTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgWyBzZWFyY2hlZEZvciwgc2V0U2VhcmNoZWRGb3IgXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgWyBzZWFyY2hEYXRhLCBzZXRTZWFyY2hEYXRhIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICBjaGFyYWN0ZXJzOiBbXVxuICAgIH0pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGZldGNoU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0geyBzZWFyY2gsIHBhZ2U6IDF9XG4gICAgICAgIGNvbnN0IEpTT05kYXRhID0gYXdhaXQgZmV0Y2goYXBpLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBKU09OZGF0YS5qc29uKClcbiAgICAgICAgc2V0U2VhcmNoRGF0YSh7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5jaGFyYWN0ZXJzLmluZm8uY291bnQsXG4gICAgICAgICAgICBjaGFyYWN0ZXJzOiBkYXRhLmNoYXJhY3RlcnMucmVzdWx0c1xuICAgICAgICB9KVxuICAgIH0gXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFNlYXJjaCgpXG4gICAgfSwgW3JvdXRlci5xdWVyeS5zZWFyY2hdKVxuICAgIFxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChwYWdlOiBudW1iZXIsIHR5cGU6IFR5cGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFR5cGUuU0VBUkNIKSB7XG4gICAgICAgICAgICBzZXRTZWFyY2hlZEZvcihzZWFyY2gpXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgLz9zZWFyY2g9JHtzZWFyY2h9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gVHlwZS5QQUdJTkFUSU9OKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgLz9zZWFyY2g9JHtzZWFyY2hlZEZvcn0mcGFnZT0ke3BhZ2V9YClcbiAgICAgICAgfVxuICAgICAgICBzZXRTZWFyY2goXCJcIilcbiAgICAgICAgc2V0Q3VycmVudChwYWdlKVxuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWFyY2gsXG4gICAgICAgIHNlYXJjaERhdGEsXG4gICAgICAgIGhhbmRsZVNlYXJjaCxcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBzZWFyY2hlZEZvcixcbiAgICAgICAgY3VycmVudFxuICAgIH1cbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJUeXBlIiwidXNlU2VhcmNoIiwiYXBpIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzZWFyY2hlZEZvciIsInNldFNlYXJjaGVkRm9yIiwiY291bnQiLCJjaGFyYWN0ZXJzIiwic2VhcmNoRGF0YSIsInNldFNlYXJjaERhdGEiLCJyb3V0ZXIiLCJmZXRjaFNlYXJjaCIsImJvZHkiLCJwYWdlIiwiZmV0Y2giLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiSlNPTmRhdGEiLCJqc29uIiwiZGF0YSIsImluZm8iLCJyZXN1bHRzIiwicXVlcnkiLCJoYW5kbGVTZWFyY2giLCJ0eXBlIiwiU0VBUkNIIiwicHVzaCIsIlBBR0lOQVRJT04iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks.ts\n");

/***/ })

});