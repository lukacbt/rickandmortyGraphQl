"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/searchCharacter";
exports.ids = ["pages/api/searchCharacter"];
exports.modules = {

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handlePaths\": () => (/* binding */ handlePaths),\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handlePaths = array => {\n  const paths = array.map(item => ({\n    params: {\n      id: String(item)\n    }\n  }));\n  return paths;\n};\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: process.env.API_URI,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1FLFdBQVcsR0FBSUMsS0FBRCxJQUFnQztBQUN2RCxRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLEtBQUs7QUFDN0JDLElBQUFBLE1BQU0sRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ0gsSUFBRDtBQUFaO0FBRHFCLEdBQUwsQ0FBZCxDQUFkO0FBR0EsU0FBT0YsS0FBUDtBQUNILENBTE07QUFPQSxNQUFNTSxNQUFNLEdBQUcsSUFBSVYsd0RBQUosQ0FBaUI7QUFDbkNXLEVBQUFBLEdBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BRGtCO0FBRW5DQyxFQUFBQSxLQUFLLEVBQUUsSUFBSWQseURBQUo7QUFGNEIsQ0FBakIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZ3FsLy4vaGVscGVycy50cz9kNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQYXRocyA9IChhcnJheTogKHN0cmluZyB8IG51bWJlcilbXSkgPT4ge1xuICAgIGNvbnN0IHBhdGhzID0gYXJyYXkubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBTdHJpbmcoaXRlbSkgfVxuICAgIH0pKVxuICAgIHJldHVybiBwYXRoc1xufVxuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5BUElfVVJJLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXG59KVxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJoYW5kbGVQYXRocyIsImFycmF5IiwicGF0aHMiLCJtYXAiLCJpdGVtIiwicGFyYW1zIiwiaWQiLCJTdHJpbmciLCJjbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSSSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers.ts\n");

/***/ }),

/***/ "./pages/api/searchCharacter.ts":
/*!**************************************!*\
  !*** ./pages/api/searchCharacter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ \"./helpers.ts\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../queries */ \"./queries.js\");\n\n\n\nconst handler = async (req, res) => {\n  const {\n    search,\n    page\n  } = JSON.parse(req.body);\n  console.log(search);\n  const {\n    data\n  } = await _helpers__WEBPACK_IMPORTED_MODULE_0__.client.query({\n    query: _queries__WEBPACK_IMPORTED_MODULE_1__.GET_SEARCH_CHARACTERS,\n    variables: {\n      page,\n      filter: {\n        name: search\n      }\n    }\n  });\n  res.status(200).json({\n    data\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VhcmNoQ2hhcmFjdGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNoQyxRQUFNO0FBQUVDLElBQUFBLE1BQUY7QUFBVUMsSUFBQUE7QUFBVixNQUFtQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEdBQUcsQ0FBQ00sSUFBZixDQUF6QjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWjtBQUNJLFFBQU07QUFBRU8sSUFBQUE7QUFBRixNQUFXLE1BQU1aLGtEQUFBLENBQWE7QUFDaENhLElBQUFBLEtBQUssRUFBRVosMkRBRHlCO0FBRWhDYSxJQUFBQSxTQUFTLEVBQUU7QUFDUFIsTUFBQUEsSUFETztBQUVQUyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsSUFBSSxFQUFFWDtBQURGO0FBRkQ7QUFGcUIsR0FBYixDQUF2QjtBQVNBRCxFQUFBQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDTixJQUFBQTtBQUFELEdBQXJCO0FBQ1AsQ0FiRDs7QUFlQSxpRUFBZVYsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZ3FsLy4vcGFnZXMvYXBpL3NlYXJjaENoYXJhY3Rlci50cz9hMDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCJcbmltcG9ydCB7IEdFVF9TRUFSQ0hfQ0hBUkFDVEVSUyB9IGZyb20gXCIuLi8uLi9xdWVyaWVzXCJcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoLCBwYWdlIH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuICAgIGNvbnNvbGUubG9nKHNlYXJjaClcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IEdFVF9TRUFSQ0hfQ0hBUkFDVEVSUyxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHNlYXJjaFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2RhdGF9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iXSwibmFtZXMiOlsiY2xpZW50IiwiR0VUX1NFQVJDSF9DSEFSQUNURVJTIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlYXJjaCIsInBhZ2UiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJxdWVyeSIsInZhcmlhYmxlcyIsImZpbHRlciIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/searchCharacter.ts\n");

/***/ }),

/***/ "./queries.js":
/*!********************!*\
  !*** ./queries.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_CHARACTERS\": () => (/* binding */ GET_CHARACTERS),\n/* harmony export */   \"GET_SEARCH_CHARACTERS\": () => (/* binding */ GET_SEARCH_CHARACTERS),\n/* harmony export */   \"GET_CHARACTER\": () => (/* binding */ GET_CHARACTER)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_CHARACTERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n    query getCharacters($page: Int) {\n        characters(page: $page) {\n            info {\n                count\n            }\n            results {\n                id\n                image\n                name\n                species\n                gender\n            }\n        }\n    }\n`;\nconst GET_SEARCH_CHARACTERS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n    query getSearchCharacters($page: Int, $filter: FilterCharacter) {\n        characters(page: $page, filter: $filter) {\n            info {\n                count\n            }\n            results {\n                id\n                image\n                name\n                species\n                gender\n            }\n        }\n    }\n`;\nconst GET_CHARACTER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n    query getCharacter($id: ID!) {\n        character(id: $id) {\n            id\n            name\n            status\n            species\n            image\n            gender\n            origin {\n                name\n            }\n            episode {\n                name\n                episode\n            }\n        }\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVyaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxjQUFjLEdBQUdELCtDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1FLHFCQUFxQixHQUFHRiwrQ0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmTztBQWlCQSxNQUFNRyxhQUFhLEdBQUdILCtDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZ3FsLy4vcXVlcmllcy5qcz85NGE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBHRVRfQ0hBUkFDVEVSUyA9IGdxbGBcbiAgICBxdWVyeSBnZXRDaGFyYWN0ZXJzKCRwYWdlOiBJbnQpIHtcbiAgICAgICAgY2hhcmFjdGVycyhwYWdlOiAkcGFnZSkge1xuICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgc3BlY2llc1xuICAgICAgICAgICAgICAgIGdlbmRlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgR0VUX1NFQVJDSF9DSEFSQUNURVJTID0gZ3FsYFxuICAgIHF1ZXJ5IGdldFNlYXJjaENoYXJhY3RlcnMoJHBhZ2U6IEludCwgJGZpbHRlcjogRmlsdGVyQ2hhcmFjdGVyKSB7XG4gICAgICAgIGNoYXJhY3RlcnMocGFnZTogJHBhZ2UsIGZpbHRlcjogJGZpbHRlcikge1xuICAgICAgICAgICAgaW5mbyB7XG4gICAgICAgICAgICAgICAgY291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdHMge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgc3BlY2llc1xuICAgICAgICAgICAgICAgIGdlbmRlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgR0VUX0NIQVJBQ1RFUiA9IGdxbGBcbiAgICBxdWVyeSBnZXRDaGFyYWN0ZXIoJGlkOiBJRCEpIHtcbiAgICAgICAgY2hhcmFjdGVyKGlkOiAkaWQpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgIHNwZWNpZXNcbiAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICBnZW5kZXJcbiAgICAgICAgICAgIG9yaWdpbiB7XG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXBpc29kZSB7XG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIGVwaXNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmAiXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0NIQVJBQ1RFUlMiLCJHRVRfU0VBUkNIX0NIQVJBQ1RFUlMiLCJHRVRfQ0hBUkFDVEVSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./queries.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/searchCharacter.ts"));
module.exports = __webpack_exports__;

})();