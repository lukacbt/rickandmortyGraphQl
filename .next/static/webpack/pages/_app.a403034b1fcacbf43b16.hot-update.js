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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Type\": function() { return /* binding */ Type; },\n/* harmony export */   \"useSearch\": function() { return /* binding */ useSearch; }\n/* harmony export */ });\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Type;\n\n(function (Type) {\n  Type[\"PAGINATION\"] = \"PAGINATION\";\n  Type[\"SEARCH\"] = \"SEARCH\";\n})(Type || (Type = {}));\n\nvar useSearch = function useSearch(api) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      searchedFor = _useState3[0],\n      setSearchedFor = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    count: 0,\n    characters: []\n  }),\n      searchData = _useState4[0],\n      setSearchData = _useState4[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var handleSearch = /*#__PURE__*/function () {\n    var _ref = (0,_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(page, type) {\n      var body, JSONdata, _yield$JSONdata$json, data;\n\n      return _Users_luka_Desktop_practice_rickandmortyGraphQl_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              body = {\n                search: type === Type.PAGINATION ? searchedFor : search,\n                page: page\n              };\n              _context.next = 3;\n              return fetch(api, {\n                method: \"POST\",\n                body: JSON.stringify(body)\n              });\n\n            case 3:\n              JSONdata = _context.sent;\n              _context.next = 6;\n              return JSONdata.json();\n\n            case 6:\n              _yield$JSONdata$json = _context.sent;\n              data = _yield$JSONdata$json.data;\n              setSearchData({\n                count: data.characters.info.count,\n                characters: data.characters.results\n              });\n\n              if (type === Type.SEARCH) {\n                setSearchedFor(search);\n                router.push(\"?search=\".concat(search));\n              }\n\n              type === Type.SEARCH && setSearch(\"\");\n              setCurrent(page);\n              console.log(router);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSearch(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleChange = function handleChange(e) {\n    setSearch(e.target.value);\n  };\n\n  return {\n    search: search,\n    searchData: searchData,\n    handleSearch: handleSearch,\n    handleChange: handleChange,\n    searchedFor: searchedFor,\n    current: current\n  };\n};\n\n_s(useSearch, \"pE8P9u/MCxJRnSAyQeE8hH4ST1s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBTEc7QUFNSEYsSUFBQUEsT0FBTyxFQUFQQTtBQU5HLEdBQVA7QUFRSCxDQWpETTs7R0FBTUo7VUFVTUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MudHM/ZGI1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgUEFHSU5BVElPTiA9IFwiUEFHSU5BVElPTlwiLFxuICAgIFNFQVJDSCA9IFwiU0VBUkNIXCJcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNlYXJjaCA9IChhcGk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IFsgc2VhcmNoLCBzZXRTZWFyY2ggXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSgxKVxuICAgIGNvbnN0IFsgc2VhcmNoZWRGb3IsIHNldFNlYXJjaGVkRm9yIF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFsgc2VhcmNoRGF0YSwgc2V0U2VhcmNoRGF0YSBdID0gdXNlU3RhdGUoe1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgY2hhcmFjdGVyczogW11cbiAgICB9KVxuXG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBcbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAocGFnZTogbnVtYmVyLCB0eXBlOiBUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHR5cGUgPT09IFR5cGUuUEFHSU5BVElPTiA/IHNlYXJjaGVkRm9yIDogc2VhcmNoLFxuICAgICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEpTT05kYXRhID0gYXdhaXQgZmV0Y2goYXBpLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBKU09OZGF0YS5qc29uKClcbiAgICAgICAgc2V0U2VhcmNoRGF0YSh7XG4gICAgICAgICAgICBjb3VudDogZGF0YS5jaGFyYWN0ZXJzLmluZm8uY291bnQsXG4gICAgICAgICAgICBjaGFyYWN0ZXJzOiBkYXRhLmNoYXJhY3RlcnMucmVzdWx0c1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0eXBlID09PSBUeXBlLlNFQVJDSCkge1xuICAgICAgICAgICAgc2V0U2VhcmNoZWRGb3Ioc2VhcmNoKVxuICAgICAgICAgICAgcm91dGVyLnB1c2goYD9zZWFyY2g9JHtzZWFyY2h9YClcbiAgICAgICAgfVxuICAgICAgICB0eXBlID09PSBUeXBlLlNFQVJDSCAmJiBcbiAgICAgICAgc2V0U2VhcmNoKFwiXCIpXG4gICAgICAgIHNldEN1cnJlbnQocGFnZSlcbiAgICAgICAgY29uc29sZS5sb2cocm91dGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBzZWFyY2hEYXRhLFxuICAgICAgICBoYW5kbGVTZWFyY2gsXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgc2VhcmNoZWRGb3IsXG4gICAgICAgIGN1cnJlbnRcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiVHlwZSIsInVzZVNlYXJjaCIsImFwaSIsInNlYXJjaCIsInNldFNlYXJjaCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2VhcmNoZWRGb3IiLCJzZXRTZWFyY2hlZEZvciIsImNvdW50IiwiY2hhcmFjdGVycyIsInNlYXJjaERhdGEiLCJzZXRTZWFyY2hEYXRhIiwicm91dGVyIiwiaGFuZGxlU2VhcmNoIiwicGFnZSIsInR5cGUiLCJib2R5IiwiUEFHSU5BVElPTiIsImZldGNoIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIkpTT05kYXRhIiwianNvbiIsImRhdGEiLCJpbmZvIiwicmVzdWx0cyIsIlNFQVJDSCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks.ts\n");

/***/ })

});